import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12 relative overflow-hidden">
          {/* Decorative top accent */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-nand-navy to-nand-orange"></div>
          
          <div className="mb-10 border-b border-slate-100 pb-8 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-nand-navy mb-4">Privacy Policy</h1>
            <p className="text-slate-500 font-medium tracking-wide text-sm">LAST UPDATED: {new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-nand-navy mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-nand-orange/10 text-nand-orange flex items-center justify-center mr-3 text-sm">1</span>
                Information We Collect
              </h2>
              <p>
                At NAND Contracting & Hospitality Services, we collect information you provide directly to us when you request a quote, fill out a contact form, or communicate with us. This may include your name, email address, phone number, and any other details you choose to provide to help us serve you better.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-nand-navy mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-nand-orange/10 text-nand-orange flex items-center justify-center mr-3 text-sm">2</span>
                How We Use Your Information
              </h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-5 space-y-2 ml-11">
                <li>Provide, maintain, and improve our contracting and hospitality services.</li>
                <li>Respond to your comments, questions, and requests efficiently.</li>
                <li>Send you technical notices, project updates, and administrative messages.</li>
                <li>Communicate with you about services, offers, and events offered by NAND.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-nand-navy mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-nand-orange/10 text-nand-orange flex items-center justify-center mr-3 text-sm">3</span>
                Information Sharing
              </h2>
              <p>
                We value your privacy and do not share your personal information with third parties except as described in this privacy policy, such as with trusted vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-nand-navy mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-nand-orange/10 text-nand-orange flex items-center justify-center mr-3 text-sm">4</span>
                Data Security
              </h2>
              <p>
                We take reasonable and industry-standard measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
              </p>
            </section>

            <section className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h2 className="text-xl font-bold text-nand-navy mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us via our contact page or email us directly. We are always ready to assist you.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
