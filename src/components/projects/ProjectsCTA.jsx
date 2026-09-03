import React, { useState } from 'react';
import { FiArrowUpRight, FiPhoneCall, FiSend, FiCheckCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';

const ProjectsCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: '',
    location: '',
    details: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Facility Maintenance',
    'Civil Works',
    'Technical Maintenance',
    'Renovation & Fit-Out',
    'Painting & Decoration',
    'Gypsum & Ceiling',
    'Emergency Maintenance',
    'Property Support',
    'Other'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: '', company: '', phone: '', email: '', service: '', location: '', details: ''
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 600);
  };

  return (
    <section id="project-inquiry" className="relative py-16 md:py-24 bg-nand-navy overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/NAND_Website_Image_Collection/hero/doha-skyline.jpg" 
          alt="Project Site" 
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-nand-navy/95 via-nand-navy/80 to-[#0798E8]/40"></div>
      </div>

      <div className="relative z-10 max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: CTA Text */}
          <div>
            <span className="inline-block uppercase tracking-[0.18em] text-sm font-semibold text-nand-orange mb-4">
              Start A Project
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Have a Property, Maintenance <br className="hidden lg:block"/> or Renovation Requirement?
            </h2>
            <p className="text-lg text-blue-100 mb-10 max-w-xl">
              Share your project or service requirement with NAND and let our team understand the scope, site needs and next steps.
            </p>
            
            <div className="flex flex-row flex-wrap gap-3">
              <a 
                href="https://wa.me/97431171127" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-[#25D366] text-white font-bold rounded-md hover:bg-[#20bd5a] transition-colors shadow-lg"
              >
                <FaWhatsapp className="mr-2 w-5 h-5" />
                WhatsApp Us
              </a>
              <a 
                href="tel:31175515" 
                className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-white/10 text-white font-bold rounded-md hover:bg-white/20 backdrop-blur-sm transition-colors border border-white/20"
              >
                <FiPhoneCall className="mr-2 w-5 h-5" />
                Call Our Team
              </a>
            </div>
          </div>

          {/* RIGHT: Inquiry Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <FiCheckCircle className="w-16 h-16 text-green-500 mb-6" />
                <h3 className="text-2xl font-bold text-nand-navy mb-2">Inquiry Received!</h3>
                <p className="text-slate-600">
                  Thank you. Our team will review your requirement and contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Name</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2.5 rounded-md border border-slate-300 focus:ring-2 focus:ring-nand-blue outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Company</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-2.5 rounded-md border border-slate-300 focus:ring-2 focus:ring-nand-blue outline-none" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Phone <span className="text-red-500">*</span></label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-2.5 rounded-md border border-slate-300 focus:ring-2 focus:ring-nand-blue outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2.5 rounded-md border border-slate-300 focus:ring-2 focus:ring-nand-blue outline-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Service Required <span className="text-red-500">*</span></label>
                    <select name="service" required value={formData.service} onChange={handleChange} className="w-full px-4 py-2.5 rounded-md border border-slate-300 focus:ring-2 focus:ring-nand-blue outline-none bg-white">
                      <option value="" disabled>Select service...</option>
                      {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Project Location</label>
                    <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full px-4 py-2.5 rounded-md border border-slate-300 focus:ring-2 focus:ring-nand-blue outline-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Requirement Details</label>
                  <textarea name="details" rows="3" value={formData.details} onChange={handleChange} className="w-full px-4 py-2.5 rounded-md border border-slate-300 focus:ring-2 focus:ring-nand-blue outline-none resize-none"></textarea>
                </div>

                <button type="submit" className="w-full inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-nand-blue text-white font-bold rounded-md hover:bg-blue-600 transition-colors shadow-md mt-2">
                  Submit Project Inquiry
                  <FiSend className="ml-2 w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsCTA;
