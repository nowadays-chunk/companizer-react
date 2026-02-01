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

// Original helper kept for non-created_at date fields
const getRandomDateISO = () => {
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

// Helper to generate a date within a specific month of a year
const generateDateInBucket = (year, month) => {
    // Random day 1-28 to avoid month overflow issues
    const day = Math.floor(Math.random() * 28) + 1;
    const hour = Math.floor(Math.random() * 24);
    const minute = Math.floor(Math.random() * 60);
    const second = Math.floor(Math.random() * 60);

    // Note: month is 0-indexed in JS Date
    const d = new Date(year, month, day, hour, minute, second);

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

    // Time Configuration
    const today = new Date();
    const currentYear = today.getFullYear();
    const startYear = currentYear - 5;
    const endYear = currentYear + 5;
    const itemsPerMonth = 2; // Density: 2 items per month per entity

    for (const entityKey of entitiesArray) {
        if (onProgress) onProgress(`Starting generation for: ${entityKey}...`);

        const entityConfig = getConfig(entityKey);
        if (!entityConfig || !entityConfig.collectionName) {
            if (onProgress) onProgress(`[WARNING] Config invalid for '${entityKey}'. Skipping.`);
            continue;
        }

        const { fieldsConfig, collectionName } = entityConfig;

        if (!collectionName || !fieldsConfig) {
            continue;
        }

        const api = helpersWrapper(collectionName);

        let entitySuccessCount = 0;

        // Loop Years
        for (let year = startYear; year <= endYear; year++) {
            // Loop Months
            for (let month = 0; month < 12; month++) {
                // Loop Density
                for (let k = 0; k < itemsPerMonth; k++) {
                    try {
                        const newRow = {};

                        // Build row based on fieldsConfig
                        Object.entries(fieldsConfig).forEach(([key, field]) => {
                            // Skip created_at/updated_at in automatic loop, we set created_at manually
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
                                try {
                                    if (field.faker === 'finance.currencyCode') value = 'USD';
                                    else if (field.faker.includes('uuid')) value = faker.string.uuid();
                                    else value = faker.lorem.word();
                                } catch (e) { value = "Random"; }
                            } else {
                                value = "Generated-" + k;
                            }
                            newRow[key] = value;
                        });

                        // Explicitly set created_at to target date to ensure full coverage
                        newRow['created_at'] = generateDateInBucket(year, month);

                        await api.addItem(newRow);
                        entitySuccessCount++;

                    } catch (err) {
                        console.error(`Failed to insert row for ${entityKey}`, err);
                    }
                }
            }
            // Yield every year to keep UI responsive
            if (onProgress) onProgress(`Generating ${entityKey}: ${year}...`);
            await new Promise(r => setTimeout(r, 20));
        }

        if (onProgress) onProgress(`Completed ${entityKey}: ${entitySuccessCount} items created in '${collectionName}'.`);
    }

    // Trigger update
    window.dispatchEvent(new Event('dataUpdated'));

    if (onProgress) onProgress("All data generated successfully to Database.");
};
