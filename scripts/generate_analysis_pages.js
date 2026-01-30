
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const SRC_DIR = path.resolve(__dirname, '../src/components/Management');
const DEST_DIR = path.resolve(__dirname, '../src/pages/Analysis');

// Ensure destination exists
if (!fs.existsSync(DEST_DIR)) {
  fs.mkdirSync(DEST_DIR, { recursive: true });
}

function generateAnalysisPages() {
  console.log(`Scanning ${SRC_DIR}...`);

  // Glob might need forward slashes on Windows
  const globPattern = '**/*.js';
  const files = glob.sync(globPattern, { cwd: SRC_DIR.replace(/\\/g, '/'), absolute: true });

  console.log(`Found ${files.length} files.`);

  let count = 0;

  files.forEach(file => {
    if (file.includes('manager_action_logs.js')) return;
    if (file.includes('Base')) return;

    const relPath = path.relative(SRC_DIR, file);
    const dirName = path.dirname(relPath);
    const baseName = path.basename(relPath, '.js');

    if (baseName === 'index') return;

    const destPathDir = path.resolve(DEST_DIR, dirName);
    if (!fs.existsSync(destPathDir)) {
      fs.mkdirSync(destPathDir, { recursive: true });
    }

    const destFile = path.resolve(destPathDir, `${baseName}.js`);

    const depth = dirName === '.' ? 0 : dirName.split(path.sep).length;
    const ups = '../'.repeat(depth + 2);

    // Normalize slashes for import
    const dirForImport = dirName === '.' ? '' : dirName.replace(/\\/g, '/') + '/';
    const importPathToManagement = `${ups}components/Management/${dirForImport}${baseName}`;
    const importPathToDashboard = `${ups}components/Analytics/GenericAnalyticsDashboard`;
    const importPathToHelpers = `${ups}utils/firebaseCrudHelpers`;

    const content = `import React, { useEffect, useState, useMemo } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import GenericAnalyticsDashboard from '${importPathToDashboard}';
import { fieldsConfig, collectionName } from '${importPathToManagement}';
import { helpersWrapper } from '${importPathToHelpers}';

const ${baseName.replace(/[^a-zA-Z0-9]/g, '')}Analytics = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const helpers = useMemo(() => helpersWrapper(collectionName), []);

  useEffect(() => {
    let isMounted = true;
    helpers.fetchItems()
      .then(items => {
        if (isMounted) {
          setData(items || []);
          setLoading(false);
        }
      })
      .catch(err => {
        console.error("Error loading analysis data:", err);
        if (isMounted) {
            setError("Failed to load data.");
            setLoading(false);
        }
      });
      
    return () => { isMounted = false; };
  }, [helpers]);

  if (loading) {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
            <CircularProgress />
        </Box>
    );
  }

  if (error) {
     return <Typography color="error" variant="h6" p={3}>{error}</Typography>;
  }

  return (
    <GenericAnalyticsDashboard 
        data={data} 
        fieldsConfig={fieldsConfig} 
        collectionName={collectionName} 
    />
  );
};

export default ${baseName.replace(/[^a-zA-Z0-9]/g, '')}Analytics;
`;

    fs.writeFileSync(destFile, content);
    count++;
  });

  console.log(`Generated ${count} Analysis pages.`);
}

generateAnalysisPages();
