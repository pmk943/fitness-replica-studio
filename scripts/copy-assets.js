const fs = require('fs-extra');
const path = require('path');

async function copyAssets() {
  const srcDir = path.join(__dirname, '../src/assets');
  const destDir = path.join(__dirname, '../dist/src/assets');

  try {
    // Ensure the destination directory exists
    await fs.ensureDir(destDir);

    // Copy the entire assets directory
    await fs.copy(srcDir, destDir, {
      overwrite: true,
      errorOnExist: false,
      filter: (src) => {
        // Skip .DS_Store files
        return !src.includes('.DS_Store');
      }
    });

    console.log('✅ Assets copied successfully');
  } catch (err) {
    console.error('Error copying assets:', err);
    process.exit(1);
  }
}

copyAssets();