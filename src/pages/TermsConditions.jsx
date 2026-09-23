import React from 'react';

const TermsConditions = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12 relative overflow-hidden">
          {/* Decorative top accent */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-nand-navy to-nand-orange"></div>
          
          <div className="mb-10 border-b border-slate-100 pb-8 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-nand-navy mb-4">Terms & Conditions</h1>
            <p className="text-slate-500 font-medium tracking-wide text-sm">LAST UPDATED: {new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-nand-navy mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-nand-navy/5 text-nand-navy border border-nand-navy/10 flex items-center justify-center mr-3 text-sm font-semibold">1</span>
                Agreement to Terms
              </h2>
              <p>
                By accessing or using the services provided by NAND Contracting & Hospitality Services, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-nand-navy mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-nand-navy/5 text-nand-navy border border-nand-navy/10 flex items-center justify-center mr-3 text-sm font-semibold">2</span>
                Our Services
              </h2>
              <p>
                NAND provides professional contracting, construction, facility maintenance, and hospitality manpower services. The specific scope, timeline, and cost of any service will be detailed in a separate contract, proposal, or agreement specific to your project requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-nand-navy mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-nand-navy/5 text-nand-navy border border-nand-navy/10 flex items-center justify-center mr-3 text-sm font-semibold">3</span>
                Intellectual Property
              </h2>
              <p>
                The service and its original content, features, and functionality are and will remain the exclusive property of NAND Contracting & Hospitality Services and its licensors.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-nand-navy mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-nand-navy/5 text-nand-navy border border-nand-navy/10 flex items-center justify-center mr-3 text-sm font-semibold">4</span>
                Limitation of Liability
              </h2>
              <p>
                In no event shall NAND, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-nand-navy mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-nand-navy/5 text-nand-navy border border-nand-navy/10 flex items-center justify-center mr-3 text-sm font-semibold">5</span>
                Governing Law
              </h2>
              <p>
                These Terms shall be governed and construed in accordance with the applicable laws, without regard to its conflict of law provisions. Any disputes shall be subject to the exclusive jurisdiction of the courts in the region of operation.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
