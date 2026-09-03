const fs = require('fs');
const path = require('path');

const dir = 'D:/nand contracting/nand_contracting/src/components/manpower';
const files = fs.readdirSync(dir);

let count = 0;
files.forEach(file => {
  if (file.endsWith('.jsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    let updated = false;
    
    if (content.includes('py-16 md:py-20 lg:py-24')) {
      content = content.replace(/py-16 md:py-20 lg:py-24/g, 'py-10 md:py-12 lg:py-16');
      updated = true;
    }
    
    // Also check for bg-nand-navy sections with large padding
    if (content.includes('py-16 md:py-24')) {
      content = content.replace(/py-16 md:py-24/g, 'py-10 md:py-16');
      updated = true;
    }
    
    if (content.includes('mb-16')) {
      content = content.replace(/mb-16/g, 'mb-10 md:mb-12');
      updated = true;
    }
    
    if (updated) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${file}`);
      count++;
    }
  }
});
console.log(`Finished updating ${count} files.`);
