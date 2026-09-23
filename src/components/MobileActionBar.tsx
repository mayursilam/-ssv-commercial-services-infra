import React from 'react';
import { PhoneIcon, WhatsappIcon, MailIcon } from './Icons';
import { COMPANY_INFO } from '../data/content';

interface MobileActionBarProps {
  onNavigate?: (page: string) => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#EAF6FC]/95 backdrop-blur-lg border-t-2 border-[#D9043E] p-2 grid grid-cols-3 gap-2 shadow-2xl">
      <a
        href={`tel:${COMPANY_INFO.phoneRaw}`}
        id="mobile-action-call"
        className="py-2.5 bg-[#D9043E] text-white font-bold text-xs flex items-center justify-center gap-1.5 rounded-sm active:bg-[#B50334] shadow-md shadow-red-950/20"
      >
        <PhoneIcon size={14} color="#FFFFFF" />
        <span>CALL NOW</span>
      </a>

      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="mobile-action-whatsapp"
        className="py-2.5 bg-white border border-[#D8EFFA] text-[#15803D] font-bold text-xs flex items-center justify-center gap-1.5 rounded-sm active:bg-[#D8EFFA] shadow-sm"
      >
        <WhatsappIcon size={14} color="#15803D" />
        <span>WHATSAPP US</span>
      </a>

      <a
        href={`mailto:${COMPANY_INFO.email}`}
        id="mobile-action-email"
        className="py-2.5 bg-white border border-[#D8EFFA] text-[#073B57] font-bold text-xs flex items-center justify-center gap-1.5 rounded-sm active:bg-[#D8EFFA] shadow-sm"
      >
        <MailIcon size={14} color="#0877B5" />
        <span>SEND EMAIL</span>
      </a>
    </div>
  );
};
