import React from 'react';
import { HiOutlineClipboardDocumentList, HiOutlineDocumentMagnifyingGlass, HiOutlineUserGroup, HiOutlineDocumentCheck, HiOutlineTruck } from 'react-icons/hi2';
import { FiSearch } from 'react-icons/fi';

const RecruitmentProcess = () => {
  const steps = [
    { num: '01', title: 'Recruitment Analysis', desc: 'Understand client requirements, job roles, qualifications and workforce needs to create an efficient and customized recruitment strategy.', icon: <HiOutlineClipboardDocumentList className="w-7 h-7" /> },
    { num: '02', title: 'Candidate Sourcing', desc: 'Source suitable candidates through the company\'s recruitment network, database and trusted hiring channels.', icon: <FiSearch className="w-7 h-7" /> },
    { num: '03', title: 'Screening & Shortlisting', desc: 'Screen, interview and verify candidates before presenting suitable profiles for client consideration.', icon: <HiOutlineDocumentMagnifyingGlass className="w-7 h-7" /> },
    { num: '04', title: 'Interview & Selection', desc: 'Coordinate client interviews, manage feedback and support candidate selection according to project and company requirements.', icon: <HiOutlineUserGroup className="w-7 h-7" /> },
    { num: '05', title: 'Documentation & Visa Processing', desc: 'Coordinate documentation, visa processing, medical tests and required government approvals while supporting compliance with Qatar requirements.', icon: <HiOutlineDocumentCheck className="w-7 h-7" /> },
    { num: '06', title: 'Deployment & Aftercare', desc: 'Support scheduled mobilization, onboarding, workforce integration and ongoing client coordination.', icon: <HiOutlineTruck className="w-7 h-7" /> },
  ];

  return (
    <section className="py-10 md:py-12 lg:py-16 bg-white relative overflow-hidden">
      {/* Background abstract shape */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-slate-50 rounded-bl-[100px] -z-0"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="inline-block uppercase tracking-[0.18em] text-sm font-semibold text-nand-orange mb-4">
            Our Recruitment Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-nand-navy mb-6">
            From Requirement Analysis <br className="hidden sm:block"/> to Workforce Deployment
          </h2>
          <p className="text-nand-muted text-lg">
            We follow a comprehensive recruitment methodology that combines industry expertise, rigorous candidate assessment, and strict compliance standards. This ensures our clients receive skilled, reliable, and job-ready professionals who contribute to long-term business success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {steps.map((step, index) => {
            const isOrangeAccent = index % 2 !== 0;
            return (
              <div key={index} className="relative group">
                
                {/* Visual Connector (Desktop only, connects items horizontally) */}
                {(index === 0 || index === 1 || index === 3 || index === 4) && (
                  <div className="hidden lg:block absolute top-10 left-[70%] w-full h-0.5 bg-slate-200 border-t border-dashed border-slate-300 -z-10"></div>
                )}

                <div className="flex flex-col items-start bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="flex items-center justify-between w-full mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-md ${isOrangeAccent ? 'bg-nand-orange' : 'bg-nand-blue'}`}>
                      {step.icon}
                    </div>
                    <span className={`text-4xl font-black opacity-10 font-mono tracking-tighter ${isOrangeAccent ? 'text-nand-orange' : 'text-nand-navy'}`}>
                      {step.num}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-nand-navy mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default RecruitmentProcess;
