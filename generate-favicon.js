#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Simple favicon generator using Canvas (if available) or instructions for manual conversion
console.log('🎨 Favicon Generator for Olivia\'s Portfolio');
console.log('==========================================\n');

const publicDir = path.join(__dirname, 'public');
const profileImagePath = path.join(publicDir, 'profile.jpg');

// Check if profile image exists
if (!fs.existsSync(profileImagePath)) {
  console.log('❌ Profile image not found at /public/profile.jpg');
  console.log('📋 Please add your profile photo as profile.jpg in the /public folder first.\n');
  process.exit(1);
}

console.log('✅ Found profile image at /public/profile.jpg');
console.log('\n📱 To create favicons from your profile image, you have a few options:\n');

console.log('🔧 Option 1: Online Favicon Generator (Recommended)');
console.log('   1. Go to https://realfavicongenerator.net/');
console.log('   2. Upload your /public/profile.jpg file');
console.log('   3. Download the generated favicon package');
console.log('   4. Extract all files to your /public folder');

console.log('\n🔧 Option 2: Manual Creation');
console.log('   1. Open your profile.jpg in an image editor');
console.log('   2. Crop it to a square (1:1 ratio)');
console.log('   3. Export as:');
console.log('      - favicon.ico (32x32)');
console.log('      - favicon-16x16.png (16x16)');
console.log('      - favicon-32x32.png (32x32)');
console.log('      - favicon-192x192.png (192x192)');
console.log('      - favicon-512x512.png (512x512)');
console.log('      - apple-touch-icon.png (180x180)');

console.log('\n🔧 Option 3: Use Placeholder (Quick Start)');
console.log('   We can create a simple text-based favicon with your initials');
console.log('   Run: node generate-favicon.js --placeholder');

if (process.argv.includes('--placeholder')) {
  generatePlaceholderFavicon();
} else {
  console.log('\n💡 For now, I\'ll create a simple placeholder favicon with your initials.');
  console.log('   You can replace it later with your actual photo favicons.\n');
  generatePlaceholderFavicon();
}

function generatePlaceholderFavicon() {
  console.log('🎨 Generating placeholder favicon with initials "OM"...\n');
  
  // Create simple SVG favicon
  const svgContent = `
<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
    </linearGradient>
  </defs>
  <circle cx="16" cy="16" r="16" fill="url(#grad)"/>
  <text x="16" y="21" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="white">OM</text>
</svg>`.trim();

  // Write SVG favicon
  const faviconSvgPath = path.join(publicDir, 'favicon.svg');
  fs.writeFileSync(faviconSvgPath, svgContent);
  
  console.log('✅ Created favicon.svg with your initials');
  console.log('✅ Your layout.tsx is already configured for favicons');
  console.log('\n🎯 Next Steps:');
  console.log('   1. Your site will use the placeholder favicon for now');
  console.log('   2. To use your actual photo, follow Option 1 above');
  console.log('   3. Replace the generated files in /public folder');
  console.log('\n🚀 Your favicon is ready to use!');
}