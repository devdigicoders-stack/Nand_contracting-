import React from 'react';
import { FiDownload, FiFileText } from 'react-icons/fi';

const OrganisationChart = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden border-y border-slate-100">
      
      {/* Decorative background curves matching Company Profile PDF */}
      <div className="absolute top-1/4 -left-32 w-[420px] h-[420px] rounded-full bg-[#FFF3EB] -z-0 pointer-events-none opacity-80 blur-3xl"></div>
      <div className="absolute top-1/3 -right-32 w-[480px] h-[480px] rounded-full bg-[#EBF6FD] -z-0 pointer-events-none opacity-80 blur-3xl"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-left max-w-4xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#0B1527] tracking-tight mb-3">
            Our Organisation Structure
          </h2>
          <div className="w-full h-1 bg-[#FA6400] mb-4"></div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 text-base sm:text-lg font-bold text-[#1E293B]">
              <span>A Structure Built for Accountability</span>
              <span className="w-6 h-6 rounded-full bg-[#1E293B] text-white flex items-center justify-center text-xs">➔</span>
            </div>
            <span className="px-4 py-0.5 rounded-full bg-[#0088D1] text-white font-bold text-sm shadow-xs">
              2026
            </span>
          </div>
        </div>

        {/* Mobile Swipe Notice */}
        <div className="lg:hidden flex items-center justify-center mb-6 text-xs font-semibold text-[#FA6400] bg-[#FFF3EB] py-2 px-4 rounded-full w-max mx-auto border border-[#FA6400]/20 shadow-xs animate-pulse">
          <span className="mr-2">👈</span> Scroll horizontally to explore complete hierarchy <span className="ml-2">👉</span>
        </div>

        {/* Tree Layout Container */}
        <div className="overflow-x-auto pb-10 pt-2 w-full custom-scrollbar">
          <div className="min-w-[860px] max-w-4xl mx-auto flex flex-col items-center">
          
            {/* Level 1: Sumaya Akter (Founder & CEO) */}
            <div className="flex flex-col items-center">
              <div className="relative flex items-center bg-[#FA6400] text-white w-[260px] h-[68px] px-3 rounded-2xl shadow-md border-2 border-white transition-transform hover:-translate-y-0.5">
                <div className="w-13 h-13 rounded-full overflow-hidden border-2 border-white shadow-sm bg-white shrink-0 mr-3">
                  <img 
                    src="/NAND_Website_Image_Collection/team/Sumaya_Akter_Founder_CEO.jpg" 
                    alt="Sumaya Akter" 
                    className="w-full h-full object-cover object-top" 
                  />
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <h3 className="font-heading font-bold text-[15px] text-white leading-tight truncate">Sumaya Akter</h3>
                  <p className="text-[12px] text-white/95 font-medium leading-tight mt-0.5 truncate">Founder & CEO</p>
                </div>
              </div>
              
              {/* Vertical Dashed Line Down */}
              <div className="w-0.5 h-8 border-r-2 border-dashed border-slate-700"></div>
            </div>

            {/* Level 2: Pragya Nand Rai (General Manager) */}
            <div className="flex flex-col items-center">
              <div className="relative flex items-center bg-[#0088D1] text-white w-[260px] h-[68px] px-3 rounded-2xl shadow-md border-2 border-white transition-transform hover:-translate-y-0.5">
                <div className="w-13 h-13 rounded-full overflow-hidden border-2 border-white shadow-sm bg-white shrink-0 mr-3">
                  <img 
                    src="/NAND_Website_Image_Collection/team/Pragya_Nand_Rai_General_Manager.png" 
                    alt="Pragya Nand Rai" 
                    className="w-full h-full object-cover object-top" 
                  />
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <h3 className="font-heading font-bold text-[15px] text-white leading-tight truncate">Pragya Nand Rai</h3>
                  <p className="text-[12px] text-white/95 font-medium leading-tight mt-0.5 truncate">General Manager</p>
                </div>
              </div>
              
              {/* Vertical Dashed Line Down to Branch Bar */}
              <div className="w-0.5 h-8 border-r-2 border-dashed border-slate-700"></div>
            </div>

            {/* Horizontal Dashed Branching Line (Precisely connecting centers of 3 columns) */}
            {/* Distance between column 1 center and column 3 center with 260px width + 48px gap is 260 + 48 = 308px each side => 616px total */}
            <div className="w-[616px] h-0.5 border-t-2 border-dashed border-slate-700 relative mb-8">
              {/* Left drop line to Col 1 */}
              <div className="absolute top-0 left-0 w-0.5 h-8 border-r-2 border-dashed border-slate-700"></div>
              {/* Middle drop line to Col 2 */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-8 border-r-2 border-dashed border-slate-700"></div>
              {/* Right drop line to Col 3 */}
              <div className="absolute top-0 right-0 w-0.5 h-8 border-r-2 border-dashed border-slate-700"></div>
            </div>

            {/* Level 3: 3 Columns Grid */}
            <div className="flex justify-center gap-12 w-full">
              
              {/* COLUMN 1: OPERATIONS */}
              <div className="w-[260px] flex flex-col items-center">
                {/* Shivam Kaushal */}
                <div className="flex items-center bg-[#FA6400] text-white w-[260px] h-[68px] px-3 rounded-2xl shadow-md border-2 border-white transition-transform hover:-translate-y-0.5">
                  <div className="w-13 h-13 rounded-full overflow-hidden border-2 border-white shadow-sm bg-white shrink-0 mr-3">
                    <img 
                      src="/NAND_Website_Image_Collection/team/Shivam_Kaushal_Operation_Head.jpg" 
                      alt="Shivam Kaushal" 
                      className="w-full h-full object-cover object-top" 
                    />
                  </div>
                  <div className="flex flex-col justify-center min-w-0">
                    <h4 className="font-heading font-bold text-[14px] text-white leading-tight truncate">Shivam Kaushal</h4>
                    <p className="text-[12px] text-white/95 font-medium leading-tight mt-0.5 truncate">Operation Head</p>
                  </div>
                </div>
                
                {/* Dashed Connector */}
                <div className="w-0.5 h-6 border-r-2 border-dashed border-slate-700"></div>

                {/* Senior Supervisor */}
                <div className="flex items-center justify-center bg-[#0088D1] text-white w-[260px] h-[52px] px-4 rounded-xl shadow-sm text-center font-heading font-bold text-[14px] tracking-tight border border-white/20 transition-transform hover:-translate-y-0.5">
                  Senior Supervisor
                </div>

                {/* Dashed Connector */}
                <div className="w-0.5 h-6 border-r-2 border-dashed border-slate-700"></div>

                {/* Supervisor */}
                <div className="flex items-center justify-center bg-[#0088D1] text-white w-[260px] h-[52px] px-4 rounded-xl shadow-sm text-center font-heading font-bold text-[14px] tracking-tight border border-white/20 transition-transform hover:-translate-y-0.5">
                  Supervisor
                </div>

                {/* Dashed Connector */}
                <div className="w-0.5 h-6 border-r-2 border-dashed border-slate-700"></div>

                {/* Team Leader */}
                <div className="flex items-center justify-center bg-[#0088D1] text-white w-[260px] h-[52px] px-4 rounded-xl shadow-sm text-center font-heading font-bold text-[14px] tracking-tight border border-white/20 transition-transform hover:-translate-y-0.5">
                  Team Leader
                </div>
              </div>

              {/* COLUMN 2: HR & CAMP */}
              <div className="w-[260px] flex flex-col items-center">
                {/* Mansi Singh */}
                <div className="flex items-center bg-[#FA6400] text-white w-[260px] h-[68px] px-3 rounded-2xl shadow-md border-2 border-white transition-transform hover:-translate-y-0.5">
                  <div className="w-13 h-13 rounded-full overflow-hidden border-2 border-white shadow-sm bg-white shrink-0 mr-3">
                    <img 
                      src="/NAND_Website_Image_Collection/team/Mansi_Singh_HR_Manager.jpg" 
                      alt="Mansi Singh" 
                      className="w-full h-full object-cover object-top" 
                    />
                  </div>
                  <div className="flex flex-col justify-center min-w-0">
                    <h4 className="font-heading font-bold text-[14px] text-white leading-tight truncate">Mansi Singh</h4>
                    <p className="text-[12px] text-white/95 font-medium leading-tight mt-0.5 truncate">HR Manager</p>
                  </div>
                </div>

                {/* Dashed Connector */}
                <div className="w-0.5 h-6 border-r-2 border-dashed border-slate-700"></div>

                {/* HR Admin */}
                <div className="flex items-center justify-center bg-[#0088D1] text-white w-[260px] h-[52px] px-4 rounded-xl shadow-sm text-center font-heading font-bold text-[14px] tracking-tight border border-white/20 transition-transform hover:-translate-y-0.5">
                  HR Admin
                </div>

                {/* Dashed Connector */}
                <div className="w-0.5 h-6 border-r-2 border-dashed border-slate-700"></div>

                {/* Camp Supervisor */}
                <div className="flex items-center justify-center bg-[#0088D1] text-white w-[260px] h-[52px] px-4 rounded-xl shadow-sm text-center font-heading font-bold text-[14px] tracking-tight border border-white/20 transition-transform hover:-translate-y-0.5">
                  Camp Supervisor
                </div>

                {/* Dashed Connector */}
                <div className="w-0.5 h-6 border-r-2 border-dashed border-slate-700"></div>

                {/* Camp Assistant */}
                <div className="flex items-center justify-center bg-[#0088D1] text-white w-[260px] h-[52px] px-4 rounded-xl shadow-sm text-center font-heading font-bold text-[14px] tracking-tight border border-white/20 transition-transform hover:-translate-y-0.5">
                  Camp Assistant
                </div>
              </div>

              {/* COLUMN 3: MARKETING, PRO, ACCOUNTS */}
              <div className="w-[260px] flex flex-col items-center">
                {/* Usman Farooq */}
                <div className="flex items-center bg-[#FA6400] text-white w-[260px] h-[68px] px-3 rounded-2xl shadow-md border-2 border-white transition-transform hover:-translate-y-0.5">
                  <div className="w-13 h-13 rounded-full overflow-hidden border-2 border-white shadow-sm bg-white shrink-0 mr-3">
                    <img 
                      src="/NAND_Website_Image_Collection/team/Usman_Farooq_Marketing_Head.jpg" 
                      alt="Usman Farooq" 
                      className="w-full h-full object-cover object-top" 
                    />
                  </div>
                  <div className="flex flex-col justify-center min-w-0">
                    <h4 className="font-heading font-bold text-[14px] text-white leading-tight truncate">Usman Farooq</h4>
                    <p className="text-[12px] text-white/95 font-medium leading-tight mt-0.5 truncate">Marketing Head</p>
                  </div>
                </div>

                {/* Dashed Connector */}
                <div className="w-0.5 h-6 border-r-2 border-dashed border-slate-700"></div>

                {/* MD Siraj (PRO) */}
                <div className="flex items-center bg-[#FA6400] text-white w-[260px] h-[68px] px-3 rounded-2xl shadow-md border-2 border-white transition-transform hover:-translate-y-0.5">
                  <div className="w-13 h-13 rounded-full overflow-hidden border-2 border-white shadow-sm bg-white shrink-0 mr-3">
                    <img 
                      src="/NAND_Website_Image_Collection/team/MD_Siraj_PRO.jpg" 
                      alt="MD Siraj" 
                      className="w-full h-full object-cover object-top" 
                    />
                  </div>
                  <div className="flex flex-col justify-center min-w-0">
                    <h4 className="font-heading font-bold text-[14px] text-white leading-tight truncate">MD Siraj</h4>
                    <p className="text-[12px] text-white/95 font-medium leading-tight mt-0.5 truncate">PRO</p>
                  </div>
                </div>

                {/* Dashed Connector */}
                <div className="w-0.5 h-6 border-r-2 border-dashed border-slate-700"></div>

                {/* Riza Hussain (Accountant) */}
                <div className="flex items-center bg-[#FA6400] text-white w-[260px] h-[68px] px-3 rounded-2xl shadow-md border-2 border-white transition-transform hover:-translate-y-0.5">
                  <div className="w-13 h-13 rounded-full overflow-hidden border-2 border-white shadow-sm bg-white shrink-0 mr-3">
                    <img 
                      src="/NAND_Website_Image_Collection/team/Riza_Hussain_Accountant.jpg" 
                      alt="Riza Hussain" 
                      className="w-full h-full object-cover object-top" 
                    />
                  </div>
                  <div className="flex flex-col justify-center min-w-0">
                    <h4 className="font-heading font-bold text-[14px] text-white leading-tight truncate">Riza Hussain</h4>
                    <p className="text-[12px] text-white/95 font-medium leading-tight mt-0.5 truncate">Accountant</p>
                  </div>
                </div>

                {/* Dashed Connector */}
                <div className="w-0.5 h-6 border-r-2 border-dashed border-slate-700"></div>

                {/* Junior Accountant */}
                <div className="flex items-center justify-center bg-[#0088D1] text-white w-[260px] h-[52px] px-4 rounded-xl shadow-sm text-center font-heading font-bold text-[14px] tracking-tight border border-white/20 transition-transform hover:-translate-y-0.5">
                  Junior Accountant
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Bottom Explanatory Paragraph from Company Profile */}
        <div className="max-w-4xl mx-auto mt-8 sm:mt-10 text-slate-700 text-sm sm:text-base leading-relaxed text-center sm:text-left">
          <p>
            Nand Contracting &amp; Hospitality Services operates through a defined organizational structure that ensures accountability at every level of client and worker interaction. Each department — from operations to HR, PRO, and accounts functions with clear responsibilities while coordinating closely to maintain seamless service delivery.
          </p>
        </div>

        {/* Corporate Profile Download Banner */}
        <div className="mt-10 sm:mt-12 bg-gradient-to-r from-[#071B2D] via-[#0D2E4D] to-[#071B2D] rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#FA6400]/20 border border-[#FA6400]/40 text-[#FA6400] flex items-center justify-center shrink-0">
              <FiFileText className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <h3 className="text-white text-base sm:text-lg font-bold font-heading">Complete Corporate Profile</h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
                Download the official NAND Business Profile including licensing, credentials, and service breakdown.
              </p>
            </div>
          </div>
          <a
            href="/Nand Business Profile.pdf"
            download="Nand Business Profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#FA6400] to-[#FF8C38] text-white font-bold text-xs sm:text-sm md:text-base rounded-xl shadow-lg hover:shadow-[#FA6400]/30 hover:-translate-y-0.5 transition-all whitespace-nowrap group shrink-0"
          >
            <FiDownload className="mr-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            Download Profile (PDF)
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default OrganisationChart;
