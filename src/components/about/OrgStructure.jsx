import React from 'react';
import { FiUsers } from 'react-icons/fi';

const OrgStructure = () => {
  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-nand-light">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-nand-orange font-bold text-sm tracking-widest uppercase mb-3 block">
            Organizational Hierarchy
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-nand-navy mb-6">
            A Structure Built for Accountability
          </h2>
          <p className="text-nand-muted text-lg">
            Nand Contracting & Hospitality Services operates through a defined organizational structure that ensures accountability at every level of client and worker interaction. Each department — from operations to HR, PRO, and accounts functions with clear responsibilities while coordinating closely to maintain seamless service delivery.
          </p>
        </div>

        {/* Visual Org Chart using Tailwind Grid/Flex */}
        <div className="max-w-5xl mx-auto overflow-x-auto pb-8">
          <div className="min-w-[800px] flex flex-col items-center">
            
            {/* Level 1: Founder & CEO */}
            <div className="bg-nand-navy text-white px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base rounded-lg shadow-md border-b-4 border-nand-orange text-center mb-8 relative flex flex-col items-center">
              <img src="/NAND_Website_Image_Collection/team/Sumaya_Akter_Founder_CEO.jpg" alt="Sumaya Akter" className="w-14 h-14 rounded-full mb-2 border-2 border-white object-cover shadow-sm"/>
              <h3 className="font-bold text-lg text-white">Sumaya Akter</h3>
              <p className="text-sm text-gray-300">Founder & CEO</p>
              {/* Vertical line down */}
              <div className="absolute top-full left-1/2 w-0.5 h-8 bg-gray-300 -translate-x-1/2"></div>
            </div>

            {/* Level 2: General Manager */}
            <div className="bg-nand-blue text-white px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base rounded-lg shadow-md text-center mb-8 relative flex flex-col items-center">
              <img src="/NAND_Website_Image_Collection/team/Pragya_Nand_Rai_General_Manager.png" alt="Pragya Nand Rai" className="w-14 h-14 rounded-full mb-2 border-2 border-white object-cover shadow-sm"/>
              <h3 className="font-bold text-lg text-white">Pragya Nand Rai</h3>
              <p className="text-sm text-blue-100">General Manager</p>
              {/* Vertical line up (connecting) */}
              <div className="absolute bottom-full left-1/2 w-0.5 h-8 bg-gray-300 -translate-x-1/2"></div>
              {/* Vertical line down */}
              <div className="absolute top-full left-1/2 w-0.5 h-8 bg-gray-300 -translate-x-1/2"></div>
            </div>

            {/* Horizontal Line connecting Level 3 */}
            <div className="w-[85%] h-0.5 bg-gray-300 relative mb-8">
              {/* 5 connection points */}
              <div className="absolute top-0 left-[10%] w-0.5 h-8 bg-gray-300"></div>
              <div className="absolute top-0 left-[30%] w-0.5 h-8 bg-gray-300"></div>
              <div className="absolute top-0 left-[50%] w-0.5 h-8 bg-gray-300"></div>
              <div className="absolute top-0 left-[70%] w-0.5 h-8 bg-gray-300"></div>
              <div className="absolute top-0 left-[90%] w-0.5 h-8 bg-gray-300"></div>
            </div>

            {/* Level 3: Department Heads */}
            <div className="w-full flex justify-between px-4">
              
              {/* Column 1: Operations */}
              <div className="flex flex-col items-center w-1/5 relative">
                <div className="bg-white border border-gray-200 px-4 py-3 rounded-md shadow-sm text-center mb-6 w-11/12 z-10 relative flex flex-col items-center">
                  <img src="/NAND_Website_Image_Collection/team/shivam-kaushal.jpg" alt="Shivam Kaushal" className="w-10 h-10 rounded-full mb-2 object-cover border border-gray-200"/>
                  <h4 className="font-bold text-nand-navy text-sm">Shivam Kaushal</h4>
                  <p className="text-xs text-nand-muted">Operation Head</p>
                  <div className="absolute top-full left-1/2 w-0.5 h-6 bg-gray-200 -translate-x-1/2"></div>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 px-3 py-2 rounded-md shadow-sm text-center mb-4 w-10/12 z-10 relative">
                  <h4 className="font-semibold text-nand-navy text-xs">Senior Supervisor</h4>
                  <div className="absolute top-full left-1/2 w-0.5 h-4 bg-gray-200 -translate-x-1/2"></div>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 px-3 py-2 rounded-md shadow-sm text-center mb-4 w-10/12 z-10 relative">
                  <h4 className="font-semibold text-nand-navy text-xs">Supervisor</h4>
                  <div className="absolute top-full left-1/2 w-0.5 h-4 bg-gray-200 -translate-x-1/2"></div>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 px-3 py-2 rounded-md shadow-sm text-center w-10/12 z-10">
                  <h4 className="font-semibold text-nand-navy text-xs">Team Leader</h4>
                </div>
              </div>

              {/* Column 2: HR */}
              <div className="flex flex-col items-center w-1/5 relative">
                <div className="bg-white border border-gray-200 px-4 py-3 rounded-md shadow-sm text-center mb-6 w-11/12 z-10 relative flex flex-col items-center">
                  <img src="/NAND_Website_Image_Collection/team/mansi-singh.jpg" alt="Mansi Singh" className="w-10 h-10 rounded-full mb-2 object-cover border border-gray-200"/>
                  <h4 className="font-bold text-nand-navy text-sm">Mansi Singh</h4>
                  <p className="text-xs text-nand-muted">HR Manager</p>
                  <div className="absolute top-full left-1/2 w-0.5 h-6 bg-gray-200 -translate-x-1/2"></div>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 px-3 py-2 rounded-md shadow-sm text-center w-10/12 z-10 mb-4">
                  <h4 className="font-semibold text-nand-navy text-xs">HR Admin</h4>
                </div>
                <div className="bg-gray-50 border border-gray-200 px-3 py-2 rounded-md shadow-sm text-center w-10/12 z-10 flex flex-col items-center">
                  <img src="/NAND_Website_Image_Collection/team/md-siraj.jpg" alt="MD Siraj" className="w-8 h-8 rounded-full mb-1 object-cover border border-gray-200"/>
                  <h4 className="font-semibold text-nand-navy text-xs">MD Siraj (PRO)</h4>
                </div>
              </div>

              {/* Column 3: Marketing */}
              <div className="flex flex-col items-center w-1/5 relative">
                <div className="bg-white border border-gray-200 px-4 py-3 rounded-md shadow-sm text-center w-11/12 z-10 flex flex-col items-center">
                  <img src="/NAND_Website_Image_Collection/team/usman-farooq.jpg" alt="Usman Farooq" className="w-10 h-10 rounded-full mb-2 object-cover border border-gray-200"/>
                  <h4 className="font-bold text-nand-navy text-sm">Usman Farooq</h4>
                  <p className="text-xs text-nand-muted">Marketing Head</p>
                </div>
              </div>

              {/* Column 4: Accounts */}
              <div className="flex flex-col items-center w-1/5 relative">
                <div className="bg-white border border-gray-200 px-4 py-3 rounded-md shadow-sm text-center mb-6 w-11/12 z-10 relative flex flex-col items-center">
                  <img src="/NAND_Website_Image_Collection/team/riza-hussain.jpg" alt="Riza Hussain" className="w-10 h-10 rounded-full mb-2 object-cover border border-gray-200"/>
                  <h4 className="font-bold text-nand-navy text-sm">Riza Hussain</h4>
                  <p className="text-xs text-nand-muted">Accountant</p>
                  <div className="absolute top-full left-1/2 w-0.5 h-6 bg-gray-200 -translate-x-1/2"></div>
                </div>
                <div className="bg-gray-50 border border-gray-200 px-3 py-2 rounded-md shadow-sm text-center w-10/12 z-10">
                  <h4 className="font-semibold text-nand-navy text-xs">Junior Accountant</h4>
                </div>
              </div>

              {/* Column 5: Camp */}
              <div className="flex flex-col items-center w-1/5 relative">
                <div className="bg-white border border-gray-200 px-4 py-3 rounded-md shadow-sm text-center mb-6 w-11/12 z-10 relative">
                  <h4 className="font-bold text-nand-navy text-sm">Camp Supervisor</h4>
                  <div className="absolute top-full left-1/2 w-0.5 h-6 bg-gray-200 -translate-x-1/2"></div>
                </div>
                <div className="bg-gray-50 border border-gray-200 px-3 py-2 rounded-md shadow-sm text-center w-10/12 z-10">
                  <h4 className="font-semibold text-nand-navy text-xs">Camp Assistant</h4>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default OrgStructure;
