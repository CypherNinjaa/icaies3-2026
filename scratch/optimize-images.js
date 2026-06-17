/* eslint-disable */
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function optimize() {
  const imagesDir = path.join(__dirname, '..', 'public', 'images');
  
  const heroPngPath = path.join(imagesDir, 'hero-bg.png');
  const heroWebpPath = path.join(imagesDir, 'hero-bg.webp');
  
  if (fs.existsSync(heroPngPath)) {
    console.log('Converting hero-bg.png to WebP...');
    await sharp(heroPngPath)
      .resize(1200)
      .webp({ quality: 75 })
      .toFile(heroWebpPath);
    
    console.log(`Generated WebP hero-bg.webp size: ${(fs.statSync(heroWebpPath).size / 1024).toFixed(2)} KB`);
    
    // Also let's keep hero-bg.png but compress it even more just in case
    const tempHeroPath = path.join(imagesDir, 'hero-bg-temp.png');
    await sharp(heroPngPath)
      .resize(1000)
      .png({ quality: 60, compressionLevel: 9 })
      .toFile(tempHeroPath);
    fs.unlinkSync(heroPngPath);
    fs.renameSync(tempHeroPath, heroPngPath);
    console.log(`Further compressed hero-bg.png size: ${(fs.statSync(heroPngPath).size / 1024).toFixed(2)} KB`);
  } else {
    console.log('hero-bg.png not found');
  }
}

optimize().catch(console.error);
