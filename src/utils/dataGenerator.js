import { faker } from '@faker-js/faker';
import { getConfig } from '../components/Management/configRegistry';
import { helpersWrapper } from './firebaseCrudHelpers';

import { defaultAssets as genAssets, defaultLiabilities as genLiabilities } from '../pages/defaultSummaryConfig';

// Default configuration keys (fallback)
const defaultAssets = genAssets;
const defaultLiabilities = genLiabilities;

// Generic helper to pick random ID
const getRandomElementId = (options) => {
    if (!options || options.length === 0) return null;
    return options[Math.floor(Math.random() * options.length)].id;
};

const getRandomNumberInRange = (min = 0, max = 10000, decimals = 2) => {
    const rand = Math.random() * (max - min) + min;
    return parseFloat(rand.toFixed(decimals));
};

const getRandomDateISO = () => {
    // Generate date between -5 years and +5 years from now
    const today = new Date();
    const pastDate = new Date(today.getFullYear() - 5, today.getMonth(), today.getDate());
    const futureDate = new Date(today.getFullYear() + 5, today.getMonth(), today.getDate());

    const d = faker.date.between({ from: pastDate, to: futureDate });
    const pad = (n) => String(n).padStart(2, '0');
    return (
        `${d.getFullYear()}-` +
        `${pad(d.getMonth() + 1)}-` +
        `${pad(d.getDate())} ` +
        `${pad(d.getHours())}:` +
        `${pad(d.getMinutes())}:` +
        `${pad(d.getSeconds())}`
    );
};

export const generateRandomDataAsync = async (onProgress) => {
    const assetsConfigStr = localStorage.getItem('assetsConfig');
    const liabilitiesConfigStr = localStorage.getItem('liabilitiesConfig');

    let assetsConfig = {};
    let liabilitiesConfig = {};

    try {
        assetsConfig = assetsConfigStr ? JSON.parse(assetsConfigStr) : defaultAssets;
        liabilitiesConfig = liabilitiesConfigStr ? JSON.parse(liabilitiesConfigStr) : defaultLiabilities;
    } catch (e) {
        console.error("Error parsing config", e);
        if (onProgress) onProgress("Error parsing configuration.");
        return;
    }

    const allEntities = new Set([
        ...Object.keys(assetsConfig),
        ...Object.keys(liabilitiesConfig)
    ]);

    const entitiesArray = Array.from(allEntities);

    if (entitiesArray.length === 0) {
        if (onProgress) onProgress("No entities configured.");
        return;
    }

    for (const entityKey of entitiesArray) {
        if (onProgress) onProgress(`Starting generation for: ${entityKey}...`);

        // 1. Get Config for this Entity
        const entityConfig = getConfig(entityKey);

        if (!entityConfig) {
            if (onProgress) onProgress(`[WARNING] Configuration for '${entityKey}' not found in Registry. Skipping.`);
            continue;
        }

        const { fieldsConfig, collectionName } = entityConfig;

        if (!collectionName || !fieldsConfig) {
            if (onProgress) onProgress(`[WARNING] Config invalid for '${entityKey}'. Skipping.`);
            continue;
        }

        const api = helpersWrapper(collectionName);

        // Yield for UI updates
        await new Promise(resolve => setTimeout(resolve, 100));

        const configuredCategories = assetsConfig[entityKey] || liabilitiesConfig[entityKey] || [];

        // Generate 100 rows
        let successCount = 0;
        for (let i = 0; i < 100; i++) {
            try {
                const newRow = {};

                // Build row based on fieldsConfig (similar to Base/index.js)
                Object.entries(fieldsConfig).forEach(([key, field]) => {
                    if (key === 'created_at' || key === 'updated_at') return;

                    let value;
                    if (field.type === 'select') {
                        value = getRandomElementId(field.options);
                    } else if (field.type === 'checkbox') {
                        value = Math.random() > 0.5 ? 1 : 0;
                    } else if (field.type === 'number') {
                        let min = field.min ?? 0;
                        let max = field.max ?? 10000;
                        if (key === 'total_price' || key === 'amount') max = 50000;
                        value = getRandomNumberInRange(min, max, field.decimals ?? 2);
                    } else if (field.type === 'date') {
                        value = getRandomDateISO();
                    } else if (field.faker) {
                        // Simple faker fallback
                        try {
                            if (field.faker === 'finance.currencyCode') value = 'USD';
                            else if (field.faker.includes('uuid')) value = faker.string.uuid();
                            else value = faker.lorem.word();
                        } catch (e) { value = "Random"; }
                    } else {
                        value = "Generated-" + i;
                    }
                    newRow[key] = value;
                });

                await api.addItem(newRow);
                successCount++;

                // Throttle slightly every 10 rows to not freeze UI completely
                if (i % 10 === 0) await new Promise(r => setTimeout(r, 10));

            } catch (err) {
                console.error(`Failed to insert row for ${entityKey}`, err);
            }
        }

        if (onProgress) onProgress(`Completed ${entityKey}: ${successCount} items created in '${collectionName}'.`);
    }

    // Trigger update
    window.dispatchEvent(new Event('dataUpdated'));

    if (onProgress) onProgress("All data generated successfully to Database.");
};
