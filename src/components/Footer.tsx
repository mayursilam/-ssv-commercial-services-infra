import React from 'react';
import { Logo } from './Logo';
import { PhoneIcon, MailIcon, MapPinIcon, WhatsappIcon, FacebookIcon, ArrowRightIcon } from './Icons';
import { COMPANY_INFO, CORE_PILLARS } from '../data/content';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent, pageKey: string, href: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(pageKey);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#EAF6FC] text-[#102A3A] border-t-2 border-[#D9043E] relative overflow-hidden">
      {/* Subtle background tech grid */}
      <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          {/* Brand Column (5 cols on lg) */}
          <div className="lg:col-span-4 space-y-5">
            <a
              href="index.html"
              onClick={(e) => handleNav(e, 'home', 'index.html')}
              className="inline-block"
            >
              <Logo
                variant="horizontal"
                className="w-[220px] sm:w-[250px]"
              />
            </a>
            
            <p className="text-sm text-[#3B586F] leading-relaxed pr-4">
              SSV Commercial Services & Infra Private Limited delivers premier security, housekeeping, and civil infrastructure solutions designed to support safer, cleaner, and better-managed environments across commercial, residential, and industrial facilities.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 bg-[#D8EFFA] border border-[#BCE0F5] text-[11px] font-bold text-[#073B57] uppercase tracking-wider rounded-sm">
                01 Security
              </span>
              <span className="px-2.5 py-1 bg-[#D8EFFA] border border-[#BCE0F5] text-[11px] font-bold text-[#073B57] uppercase tracking-wider rounded-sm">
                02 Housekeeping
              </span>
              <span className="px-2.5 py-1 bg-[#D8EFFA] border border-[#BCE0F5] text-[11px] font-bold text-[#073B57] uppercase tracking-wider rounded-sm">
                03 Infra
              </span>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-2.5">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-[#D8EFFA] text-[#15803D] border border-[#D8EFFA] rounded-sm text-xs font-bold tracking-wider uppercase transition-all shadow-sm"
              >
                <WhatsappIcon size={16} color="#15803D" />
                <span>Chat with Operations on WhatsApp</span>
              </a>
              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit SSV Commercial Services on Facebook"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 bg-white hover:bg-[#1877F2] text-[#1877F2] hover:text-white border border-[#D8EFFA] hover:border-[#1877F2] rounded-sm text-xs font-bold tracking-wider uppercase transition-all shadow-sm"
              >
                <FacebookIcon size={16} color="currentColor" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Services Column (2.5 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[#073B57] text-xs font-black tracking-widest uppercase border-b border-[#D8EFFA] pb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#D9043E]" />
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-[#3B586F]">
              <li>
                <a
                  href="security.html"
                  onClick={(e) => handleNav(e, 'security', 'security.html')}
                  className="hover:text-[#0877B5] transition-colors flex items-center justify-between group"
                >
                  <span>Security & Manned Guarding</span>
                  <span className="text-[#D9043E] group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </li>
              <li>
                <a
                  href="security.html"
                  onClick={(e) => handleNav(e, 'security', 'security.html')}
                  className="hover:text-[#0877B5] transition-colors flex items-center justify-between group"
                >
                  <span>CCTV & Electronic Surveillance</span>
                  <span className="text-[#D9043E] group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </li>
              <li>
                <a
                  href="housekeeping.html"
                  onClick={(e) => handleNav(e, 'housekeeping', 'housekeeping.html')}
                  className="hover:text-[#0877B5] transition-colors flex items-center justify-between group"
                >
                  <span>Commercial & Office Cleaning</span>
                  <span className="text-[#D9043E] group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </li>
              <li>
                <a
                  href="housekeeping.html"
                  onClick={(e) => handleNav(e, 'housekeeping', 'housekeeping.html')}
                  className="hover:text-[#0877B5] transition-colors flex items-center justify-between group"
                >
                  <span>Industrial Deep Sanitization</span>
                  <span className="text-[#D9043E] group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </li>
              <li>
                <a
                  href="infrastructure.html"
                  onClick={(e) => handleNav(e, 'infrastructure', 'infrastructure.html')}
                  className="hover:text-[#0877B5] transition-colors flex items-center justify-between group"
                >
                  <span>Turnkey Civil Projects</span>
                  <span className="text-[#D9043E] group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </li>
              <li>
                <a
                  href="infrastructure.html"
                  onClick={(e) => handleNav(e, 'infrastructure', 'infrastructure.html')}
                  className="hover:text-[#0877B5] transition-colors flex items-center justify-between group"
                >
                  <span>Utility Shifting & Relocation</span>
                  <span className="text-[#D9043E] group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </li>
              <li>
                <a
                  href="infrastructure.html"
                  onClick={(e) => handleNav(e, 'infrastructure', 'infrastructure.html')}
                  className="hover:text-[#0877B5] transition-colors flex items-center justify-between group"
                >
                  <span>Road & Pavement Construction</span>
                  <span className="text-[#D9043E] group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[#073B57] text-xs font-black tracking-widest uppercase border-b border-[#D8EFFA] pb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#D9043E]" />
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#3B586F]">
              <li>
                <a
                  href="index.html"
                  onClick={(e) => handleNav(e, 'home', 'index.html')}
                  className="hover:text-[#0877B5] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="about.html"
                  onClick={(e) => handleNav(e, 'about', 'about.html')}
                  className="hover:text-[#0877B5] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="services.html"
                  onClick={(e) => handleNav(e, 'services', 'services.html')}
                  className="hover:text-[#0877B5] transition-colors"
                >
                  Services Overview
                </a>
              </li>
              <li>
                <a
                  href="industries.html"
                  onClick={(e) => handleNav(e, 'industries', 'industries.html')}
                  className="hover:text-[#0877B5] transition-colors"
                >
                  Industries Served
                </a>
              </li>
              <li>
                <a
                  href="why-ssv.html"
                  onClick={(e) => handleNav(e, 'why-ssv', 'why-ssv.html')}
                  className="hover:text-[#0877B5] transition-colors"
                >
                  Why SSV
                </a>
              </li>
              <li>
                <a
                  href="contact.html"
                  onClick={(e) => handleNav(e, 'contact', 'contact.html')}
                  className="hover:text-[#0877B5] transition-colors"
                >
                  Contact & Enquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[#073B57] text-xs font-black tracking-widest uppercase border-b border-[#D8EFFA] pb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#D9043E]" />
              Office Locations
            </h4>
            <div className="space-y-3 text-xs text-[#102A3A]">
              <div className="flex items-start gap-3">
                <MapPinIcon size={16} color="#D9043E" className="flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-bold text-[#D9043E] uppercase tracking-wider">Head Office</div>
                  <p className="font-bold text-[#102A3A]">{COMPANY_INFO.headOffice.line1}</p>
                  <p className="text-[#3B586F]">{COMPANY_INFO.headOffice.line2}</p>
                  <p className="text-[#3B586F]">{COMPANY_INFO.headOffice.state} - {COMPANY_INFO.headOffice.pincode}, {COMPANY_INFO.headOffice.country}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-1 border-t border-[#D8EFFA]">
                <MapPinIcon size={16} color="#D9043E" className="flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-bold text-[#D9043E] uppercase tracking-wider">Pune Office</div>
                  <p className="text-[#3B586F] leading-snug">{COMPANY_INFO.puneOffice.formatted}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-[#D8EFFA]">
                <PhoneIcon size={16} color="#D9043E" className="flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-[#0877B5] font-bold text-[#102A3A] transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MailIcon size={16} color="#0877B5" className="flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#0877B5] font-semibold text-[#102A3A] transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="contact.html"
                  id="footer-contact-cta"
                  onClick={(e) => handleNav(e, 'contact', 'contact.html')}
                  className="w-full py-2.5 px-3 bg-[#D9043E] hover:bg-[#B50334] text-white text-center font-bold text-xs uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <span>GET IN TOUCH</span>
                  <ArrowRightIcon size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 mt-8 border-t border-[#D8EFFA] flex flex-col md:flex-row items-center justify-between text-xs text-[#5B7A92] gap-4">
          <div>
            <p>© 2026 {COMPANY_INFO.legalName}. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#0877B5] transition-colors">Security</span>
            <span className="text-[#8EBED9]">•</span>
            <span className="hover:text-[#0877B5] transition-colors">Housekeeping</span>
            <span className="text-[#8EBED9]">•</span>
            <span className="hover:text-[#0877B5] transition-colors">Infra Services</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
