import React from 'react';
import { HiOutlineUser, HiOutlineUsers, HiOutlineBuildingOffice2, HiOutlineWrenchScrewdriver } from 'react-icons/hi2';

const OrganisationChart = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-50">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block uppercase tracking-[0.18em] text-sm font-semibold text-nand-orange mb-4">
            Our Organisation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-nand-navy mb-6">
            A Structure Built for Accountability
          </h2>
          <p className="text-base lg:text-lg leading-7 text-slate-600">
            NAND operates through a defined organizational structure designed to ensure accountability across client and worker interaction, with operations, HR, PRO and accounts functions coordinating closely for seamless service delivery.
          </p>
        </div>

        {/* Tree Layout Container */}
        <div className="overflow-x-auto pb-10">
          <div className="min-w-[900px] flex flex-col items-center">
            
            {/* CEO */}
            <div className="flex flex-col items-center relative">
              <div className="bg-nand-navy text-white px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base rounded-xl shadow-lg border-t-4 border-nand-orange text-center w-64 z-10 relative">
                <div className="mx-auto w-14 h-14 mb-2 rounded-full overflow-hidden border-2 border-nand-orange shadow-inner bg-white">
                  <img src="/NAND_Website_Image_Collection/team/Sumaya_Akter_Founder_CEO.jpg" alt="Sumaya Akter" className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="font-bold text-lg mb-1">Sumaya Akter</h3>
                <p className="text-sm text-blue-100 font-medium">Founder & CEO</p>
              </div>
              <div className="w-0.5 h-8 bg-slate-300"></div>
            </div>

            {/* GM */}
            <div className="flex flex-col items-center relative">
              <div className="bg-nand-blue text-white px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base rounded-xl shadow-md text-center w-64 z-10 relative">
                <div className="mx-auto w-14 h-14 mb-2 rounded-full overflow-hidden border-2 border-white shadow-inner bg-white">
                  <img src="/NAND_Website_Image_Collection/team/Pragya_Nand_Rai_General_Manager.png" alt="Pragya Nand Rai" className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="font-bold text-lg mb-1">Pragya Nand Rai</h3>
                <p className="text-sm text-blue-100 font-medium">General Manager</p>
              </div>
              <div className="w-0.5 h-10 bg-slate-300"></div>
            </div>

            {/* Horizontal Connection Line */}
            <div className="w-[85%] h-0.5 bg-slate-300 relative mb-10">
              {/* 5 connection points dropping down */}
              <div className="absolute top-0 left-[10%] w-0.5 h-10 bg-slate-300"></div>
              <div className="absolute top-0 left-[30%] w-0.5 h-10 bg-slate-300"></div>
              <div className="absolute top-0 left-[50%] w-0.5 h-10 bg-slate-300"></div>
              <div className="absolute top-0 left-[70%] w-0.5 h-10 bg-slate-300"></div>
              <div className="absolute top-0 left-[90%] w-0.5 h-10 bg-slate-300"></div>
            </div>

            {/* Department Branches */}
            <div className="w-full flex justify-between px-4">
              
              {/* Operations */}
              <div className="flex flex-col items-center w-[18%]">
                <div className="bg-white border border-slate-200 p-4 rounded-lg shadow-sm text-center w-full mb-6 relative">
                  <div className="absolute -top-10 left-1/2 w-0.5 h-10 bg-slate-300 -translate-x-1/2"></div>
                  <div className="mx-auto w-12 h-12 mb-2 rounded-full overflow-hidden border-2 border-slate-200 shadow-inner bg-white">
                    <img src="/NAND_Website_Image_Collection/team/Shivam_Kaushal_Operation_Head.jpg" alt="Shivam Kaushal" className="w-full h-full object-cover object-top" />
                  </div>
                  <h4 className="font-bold text-nand-navy">Shivam Kaushal</h4>
                  <p className="text-xs text-slate-500 font-medium mt-1">Operation Head</p>
                  <div className="absolute top-full left-1/2 w-0.5 h-6 bg-slate-200 -translate-x-1/2"></div>
                </div>
                
                <div className="bg-slate-50 border border-slate-200 px-3 py-2.5 rounded-md shadow-sm text-center w-11/12 mb-4 relative z-10">
                  <span className="text-sm font-semibold text-nand-navy">Senior Supervisor</span>
                  <div className="absolute top-full left-1/2 w-0.5 h-4 bg-slate-200 -translate-x-1/2"></div>
                </div>
                <div className="bg-slate-50 border border-slate-200 px-3 py-2.5 rounded-md shadow-sm text-center w-11/12 mb-4 relative z-10">
                  <span className="text-sm font-semibold text-nand-navy">Supervisor</span>
                  <div className="absolute top-full left-1/2 w-0.5 h-4 bg-slate-200 -translate-x-1/2"></div>
                </div>
                <div className="bg-slate-50 border border-slate-200 px-3 py-2.5 rounded-md shadow-sm text-center w-11/12 relative z-10">
                  <span className="text-sm font-semibold text-nand-navy">Team Leader</span>
                </div>
              </div>

              {/* HR */}
              <div className="flex flex-col items-center w-[18%]">
                <div className="bg-white border border-slate-200 p-4 rounded-lg shadow-sm text-center w-full mb-6 relative">
                  <div className="absolute -top-10 left-1/2 w-0.5 h-10 bg-slate-300 -translate-x-1/2"></div>
                  <div className="mx-auto w-12 h-12 mb-2 rounded-full overflow-hidden border-2 border-slate-200 shadow-inner bg-white">
                    <img src="/NAND_Website_Image_Collection/team/Mansi_Singh_HR_Manager.jpg" alt="Mansi Singh" className="w-full h-full object-cover object-top" />
                  </div>
                  <h4 className="font-bold text-nand-navy">Mansi Singh</h4>
                  <p className="text-xs text-slate-500 font-medium mt-1">HR Manager</p>
                  <div className="absolute top-full left-1/2 w-0.5 h-6 bg-slate-200 -translate-x-1/2"></div>
                </div>
                <div className="bg-slate-50 border border-slate-200 px-3 py-2.5 rounded-md shadow-sm text-center w-11/12 mb-4 relative z-10">
                  <span className="text-sm font-semibold text-nand-navy">HR Admin</span>
                  <div className="absolute top-full left-1/2 w-0.5 h-4 bg-slate-200 -translate-x-1/2"></div>
                </div>
                <div className="bg-slate-50 border border-slate-200 px-3 py-2.5 rounded-md shadow-sm text-center w-11/12 relative z-10 flex flex-col items-center">
                  <div className="mx-auto w-10 h-10 mb-1.5 rounded-full overflow-hidden border border-slate-200 shadow-inner bg-white">
                    <img src="/NAND_Website_Image_Collection/team/MD_Siraj_PRO.jpg" alt="MD Siraj" className="w-full h-full object-cover object-top" />
                  </div>
                  <span className="text-sm font-semibold text-nand-navy leading-tight">MD Siraj<br/><span className="text-xs text-slate-500 font-normal">PRO</span></span>
                </div>
              </div>

              {/* Marketing */}
              <div className="flex flex-col items-center w-[18%]">
                <div className="bg-white border border-slate-200 p-4 rounded-lg shadow-sm text-center w-full relative">
                  <div className="absolute -top-10 left-1/2 w-0.5 h-10 bg-slate-300 -translate-x-1/2"></div>
                  <div className="mx-auto w-12 h-12 mb-2 rounded-full overflow-hidden border-2 border-slate-200 shadow-inner bg-white">
                    <img src="/NAND_Website_Image_Collection/team/Usman_Farooq_Marketing_Head.jpg" alt="Usman Farooq" className="w-full h-full object-cover object-top" />
                  </div>
                  <h4 className="font-bold text-nand-navy">Usman Farooq</h4>
                  <p className="text-xs text-slate-500 font-medium mt-1">Marketing Head</p>
                </div>
              </div>

              {/* Accounts */}
              <div className="flex flex-col items-center w-[18%]">
                <div className="bg-white border border-slate-200 p-4 rounded-lg shadow-sm text-center w-full mb-6 relative">
                  <div className="absolute -top-10 left-1/2 w-0.5 h-10 bg-slate-300 -translate-x-1/2"></div>
                  <div className="mx-auto w-12 h-12 mb-2 rounded-full overflow-hidden border-2 border-slate-200 shadow-inner bg-white">
                    <img src="/NAND_Website_Image_Collection/team/Riza_Hussain_Accountant.jpg" alt="Riza Hussain" className="w-full h-full object-cover object-top" />
                  </div>
                  <h4 className="font-bold text-nand-navy">Riza Hussain</h4>
                  <p className="text-xs text-slate-500 font-medium mt-1">Accountant</p>
                  <div className="absolute top-full left-1/2 w-0.5 h-6 bg-slate-200 -translate-x-1/2"></div>
                </div>
                <div className="bg-slate-50 border border-slate-200 px-3 py-2.5 rounded-md shadow-sm text-center w-11/12 relative z-10">
                  <span className="text-sm font-semibold text-nand-navy">Junior Accountant</span>
                </div>
              </div>

              {/* Camp */}
              <div className="flex flex-col items-center w-[18%]">
                <div className="bg-white border border-slate-200 p-4 rounded-lg shadow-sm text-center w-full mb-6 relative">
                  <div className="absolute -top-10 left-1/2 w-0.5 h-10 bg-slate-300 -translate-x-1/2"></div>
                  <h4 className="font-bold text-nand-navy">Camp Supervisor</h4>
                  <div className="absolute top-full left-1/2 w-0.5 h-6 bg-slate-200 -translate-x-1/2"></div>
                </div>
                <div className="bg-slate-50 border border-slate-200 px-3 py-2.5 rounded-md shadow-sm text-center w-11/12 relative z-10">
                  <span className="text-sm font-semibold text-nand-navy">Camp Assistant</span>
                </div>
              </div>

            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default OrganisationChart;
