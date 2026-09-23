const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

const targetDir = path.join(__dirname, 'src');

walk(targetDir, (filePath) => {
  if (filePath.endsWith('.jsx') || filePath.endsWith('.js')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // 1. Fix tel:${contactInfo.phone} to use phoneRaw
    content = content.replace(/tel:\$\{contactInfo\.phone\}/g, 'tel:+${contactInfo.phoneRaw}');
    
    // 2. Fix wa.me/974${contactInfo.whatsapp} to use whatsappRaw
    content = content.replace(/wa\.me\/974\$\{contactInfo\.whatsapp\}/g, 'wa.me/${contactInfo.whatsappRaw}');
    
    // 3. Fix hardcoded tel:31175515
    content = content.replace(/tel:31175515/g, 'tel:+97431175515');
    
    // 4. Fix hardcoded display Call: 31175515
    content = content.replace(/Call: 31175515/g, 'Call: +974 31175515');
    
    // 5. Fix Footer.jsx display issue ++974
    content = content.replace(/\+\{contactInfo\.whatsapp\}/g, '{contactInfo.whatsapp}');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated', filePath);
    }
  }
});
