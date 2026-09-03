const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

// Define specific file replacements
const replacements = [
  // Home Hero
  {
    file: 'components/home/HeroSection.jsx',
    replace: /https:\/\/images\.unsplash\.com\/[^'"]+/g,
    with: '/NAND_Website_Image_Collection/hero/doha-skyline.jpg'
  },
  // Company Overview (About)
  {
    file: 'components/about/CompanyOverview.jsx',
    replace: /https:\/\/images\.unsplash\.com\/photo-1503387762[^'"]+/,
    with: '/NAND_Website_Image_Collection/hero/doha-skyline.jpg'
  },
  {
    file: 'components/about/CompanyOverview.jsx',
    replace: /https:\/\/images\.unsplash\.com\/photo-1541888081622[^'"]+/,
    with: '/NAND_Website_Image_Collection/graphics/mission-growth-graphic.jpg'
  },
  // Leadership (About)
  {
    file: 'components/about/LeadershipSection.jsx',
    replace: /https:\/\/images\.unsplash\.com\/photo-1573496359142[^'"]+/,
    with: '/NAND_Website_Image_Collection/team/pragya-nand-rai-general-manager.png'
  },
  {
    file: 'components/about/LeadershipSection.jsx',
    replace: /https:\/\/images\.unsplash\.com\/photo-1560250097[^'"]+/,
    with: '/NAND_Website_Image_Collection/team/sumaya-akter-founder-ceo.png'
  },
  // Services
  {
    file: 'components/home/CoreServices.jsx',
    replace: /https:\/\/images\.unsplash\.com\/[^'"]+/g,
    with: '/NAND_Website_Image_Collection/services/facility-maintenance-worker.png'
  },
  // Emergency
  {
    file: 'components/home/EmergencyCTA.jsx',
    replace: /https:\/\/images\.unsplash\.com\/[^'"]+/g,
    with: '/NAND_Website_Image_Collection/services/emergency-subcontracting-team.png'
  },
  // Renovation
  {
    file: 'components/renovation/RenovationHero.jsx',
    replace: /https:\/\/images\.unsplash\.com\/[^'"]+/g,
    with: '/NAND_Website_Image_Collection/renovation/renovation-fitout-site.png'
  },
  {
    file: 'components/renovation/InteriorFitout.jsx',
    replace: /https:\/\/images\.unsplash\.com\/[^'"]+/g,
    with: '/NAND_Website_Image_Collection/services/painting-decoration-worker-01.png'
  },
  {
    file: 'components/renovation/RenovationWhyNand.jsx',
    replace: /https:\/\/images\.unsplash\.com\/[^'"]+/g,
    with: '/NAND_Website_Image_Collection/services/painting-decoration-worker-02.png'
  },
  // Manpower
  {
    file: 'components/manpower/ManpowerHero.jsx',
    replace: /https:\/\/images\.unsplash\.com\/[^'"]+/g,
    with: '/NAND_Website_Image_Collection/hero/construction-workforce-sunset.jpg'
  },
  {
    file: 'components/manpower/ManpowerOverview.jsx',
    replace: /https:\/\/images\.unsplash\.com\/[^'"]+/g,
    with: '/NAND_Website_Image_Collection/workforce/mixed-workforce-team.png'
  },
  {
    file: 'components/manpower/RecruitmentNetwork.jsx',
    replace: /https:\/\/images\.unsplash\.com\/[^'"]+/g,
    with: '/NAND_Website_Image_Collection/hospitality/hospitality-property-lobby.png'
  },
  {
    file: 'components/manpower/ManpowerWhyNand.jsx',
    replace: /https:\/\/images\.unsplash\.com\/[^'"]+/g,
    with: '/NAND_Website_Image_Collection/workforce/mixed-workforce-team.png'
  },
  {
    file: 'components/home/ManpowerSection.jsx',
    replace: /https:\/\/images\.unsplash\.com\/[^'"]+/g,
    with: '/NAND_Website_Image_Collection/workforce/mixed-workforce-team.png'
  },
  // Contact
  {
    file: 'components/contact/ContactHero.jsx',
    replace: /https:\/\/images\.unsplash\.com\/[^'"]+/g,
    with: '/NAND_Website_Image_Collection/hero/doha-skyline.jpg'
  },
  // Default fallbacks for specific components
  {
    file: 'components/common/PageHero.jsx',
    replace: /https:\/\/images\.unsplash\.com\/[^'"]+/g,
    with: '/NAND_Website_Image_Collection/hero/doha-skyline.jpg'
  }
];

function processFile(filePath) {
  const fullPath = path.join(srcDir, filePath);
  if (!fs.existsSync(fullPath)) return;
  
  let content = fs.readFileSync(fullPath, 'utf8');
  let changed = false;

  for (const rep of replacements) {
    if (rep.file === filePath) {
      if (content.match(rep.replace)) {
        content = content.replace(rep.replace, rep.with);
        changed = true;
      }
    }
  }

  if (changed) {
    fs.writeFileSync(fullPath, content);
    console.log(`Updated ${filePath}`);
  }
}

// Map files
replacements.forEach(r => processFile(r.file));

// Second pass: Replace any remaining unsplash links in ALL files with a generic fallback
const defaultFallback = '/NAND_Website_Image_Collection/hero/doha-skyline.jpg';

function processAllFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processAllFiles(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('https://images.unsplash.com/')) {
        content = content.replace(/https:\/\/images\.unsplash\.com\/[^'"]+/g, defaultFallback);
        fs.writeFileSync(fullPath, content);
        console.log(`Global Fallback applied to ${file}`);
      }
    }
  }
}

processAllFiles(srcDir);
console.log('All image replacements completed successfully.');
