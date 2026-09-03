import React from 'react';
import { FiMessageSquare, FiAlertCircle } from 'react-icons/fi';
import { FaHelmetSafety } from 'react-icons/fa6';
import { HiOutlineWrenchScrewdriver, HiOutlineUsers } from 'react-icons/hi2';
import { MdOutlineDesignServices, MdOutlineRoomService } from 'react-icons/md';

const InquiryTypeSelector = ({ inquiryType, setInquiryType }) => {
  const options = [
    { id: 'general', label: 'General Inquiry', icon: <FiMessageSquare className="w-5 h-5 mb-2" /> },
    { id: 'contracting', label: 'Contracting', icon: <FaHelmetSafety className="w-5 h-5 mb-2" /> },
    { id: 'maintenance', label: 'Maintenance', icon: <HiOutlineWrenchScrewdriver className="w-5 h-5 mb-2" /> },
    { id: 'renovation', label: 'Renovation & Fit-Out', icon: <MdOutlineDesignServices className="w-5 h-5 mb-2" /> },
    { id: 'manpower', label: 'Manpower', icon: <HiOutlineUsers className="w-5 h-5 mb-2" /> },
    { id: 'hospitality', label: 'Hospitality', icon: <MdOutlineRoomService className="w-5 h-5 mb-2" /> },
    { id: 'emergency', label: 'Emergency Support', icon: <FiAlertCircle className="w-5 h-5 mb-2" /> },
  ];

  return (
    <div className="mb-8">
      <label className="block text-sm font-semibold text-slate-700 uppercase tracking-wider mb-4">
        What can we help you with?
      </label>
      
      {/* Mobile: horizontal scroll, Desktop: flex wrap */}
      <div className="flex overflow-x-auto pb-4 md:pb-0 md:flex-wrap gap-3 custom-scrollbar">
        {options.map((option) => {
          const isActive = inquiryType === option.id;
          return (
            <button
              key={option.id}
              onClick={() => setInquiryType(option.id)}
              type="button"
              className={`flex-shrink-0 flex flex-col items-center justify-center p-3 rounded-lg border transition-all duration-300 w-28 md:w-32 ${
                isActive 
                  ? 'bg-nand-blue border-nand-blue text-white shadow-md' 
                  : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-white hover:border-nand-blue hover:text-nand-blue'
              }`}
            >
              {option.icon}
              <span className="text-xs font-bold text-center leading-tight">
                {option.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default InquiryTypeSelector;
