import React, { useState } from 'react';
import { FiSend, FiCheckCircle } from 'react-icons/fi';

const ManpowerRequirementForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    category: '',
    numWorkers: '',
    location: '',
    requiredDate: '',
    details: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    'Hospitality & Service Staff',
    'Drivers & Transport Support',
    'Construction & General Labour',
    'Warehouse & Logistics',
    'Facility & Cleaning Support',
    'Temporary / Outsourced Workforce',
    'Other'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        companyName: '',
        contactPerson: '',
        phone: '',
        email: '',
        category: '',
        numWorkers: '',
        location: '',
        requiredDate: '',
        details: ''
      });
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 600);
  };

  return (
    <section id="manpower-requirement" className="py-10 md:py-12 lg:py-16 bg-blue-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        <div className="text-center mb-5 sm:mb-7">
          <span className="inline-block uppercase tracking-[0.18em] text-sm font-semibold text-nand-orange mb-4">
            Need Manpower?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-nand-navy mb-4">
            Tell Us Your Workforce Requirement
          </h2>
          <p className="text-base lg:text-lg text-slate-600 max-w-2xl mx-auto">
            Share your workforce category and operational requirement so the NAND team can understand the scope and coordinate the next steps.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 md:p-10">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <FiCheckCircle className="w-16 h-16 text-green-500 mb-6" />
              <h3 className="text-2xl font-bold text-nand-navy mb-2">Requirement Submitted!</h3>
              <p className="text-slate-600">
                Thank you. Our team will review your requirement and get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Company Name <span className="text-red-500">*</span></label>
                  <input type="text" name="companyName" required value={formData.companyName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-nand-blue focus:border-transparent outline-none transition-all" placeholder="Your Company LLC" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Contact Person <span className="text-red-500">*</span></label>
                  <input type="text" name="contactPerson" required value={formData.contactPerson} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-nand-blue focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-nand-blue focus:border-transparent outline-none transition-all" placeholder="+974 XXXX XXXX" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-nand-blue focus:border-transparent outline-none transition-all" placeholder="contact@company.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Workforce Category <span className="text-red-500">*</span></label>
                  <select name="category" required value={formData.category} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-nand-blue focus:border-transparent outline-none transition-all bg-white">
                    <option value="" disabled>Select a category...</option>
                    {categories.map((cat, i) => (
                      <option key={i} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Number of Workers</label>
                  <input type="number" name="numWorkers" value={formData.numWorkers} onChange={handleChange} min="1" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-nand-blue focus:border-transparent outline-none transition-all" placeholder="E.g. 5" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Location in Qatar</label>
                  <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-nand-blue focus:border-transparent outline-none transition-all" placeholder="Doha, Lusail, etc." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Required Date</label>
                  <input type="date" name="requiredDate" value={formData.requiredDate} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-nand-blue focus:border-transparent outline-none transition-all text-slate-600" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Requirement Details</label>
                <textarea name="details" rows="4" value={formData.details} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-nand-blue focus:border-transparent outline-none transition-all resize-none" placeholder="Briefly describe the specific roles, qualifications, or operational requirements..."></textarea>
              </div>

              <div className="pt-2 text-center md:text-left">
                <button type="submit" className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-nand-blue text-white font-bold rounded-md hover:bg-blue-600 transition-colors shadow-md w-full md:w-auto">
                  Submit Requirement
                  <FiSend className="ml-2 w-5 h-5" />
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default ManpowerRequirementForm;
