const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const searchDir = path.join(__dirname, 'src');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(searchDir, function(filePath) {
  if (filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('w-full sm:w-auto')) {
      // Replace with flex-1 sm:flex-none to sit side by side on mobile
      let newContent = content.replace(/w-full sm:w-auto/g, 'flex-1 sm:flex-none');
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
console.log("Done updating buttons!");
