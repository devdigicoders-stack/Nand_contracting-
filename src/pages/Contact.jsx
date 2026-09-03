import React, { useEffect } from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactCards from '../components/contact/ContactCards';
import InquiryWrapper from '../components/contact/InquiryWrapper';
import DirectContact from '../components/contact/DirectContact';
import OfficeLocation from '../components/contact/OfficeLocation';
import EmergencyContact from '../components/contact/EmergencyContact';
import ContactFAQ from '../components/contact/ContactFAQ';
import ContactCTA from '../components/contact/ContactCTA';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact NAND Contracting & Hospitality Services | Doha Qatar";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Contact NAND Contracting & Hospitality Services in Doha for contracting, maintenance, renovation, hospitality support, property services and manpower requirements across Qatar.";
    }
  }, []);

  return (
    <div className="bg-white">
      <ContactHero />
      <ContactCards />
      <InquiryWrapper />
      <DirectContact />
      <OfficeLocation />
      <EmergencyContact />
      <ContactFAQ />
      <ContactCTA />
    </div>
  );
};

export default Contact;
