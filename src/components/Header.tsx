import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { PhoneIcon, MailIcon, WhatsappIcon, MenuIcon, CloseIcon, ChevronRightIcon, ArrowRightIcon } from './Icons';
import { COMPANY_INFO } from '../data/content';

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage = 'home',
  onNavigate
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: 'index.html', key: 'home' },
    { name: 'About Us', href: 'about.html', key: 'about' },
    { 
      name: 'Services', 
      href: 'services.html', 
      key: 'services',
      hasChildren: true,
      children: [
        { name: 'All Services Overview', href: 'services.html', key: 'services', desc: 'Unified security, housekeeping & infra framework' },
        { name: '01 Security Services', href: 'security.html', key: 'security', desc: 'Manned guarding, CCTV surveillance & VIP protection' },
        { name: '02 Housekeeping Services', href: 'housekeeping.html', key: 'housekeeping', desc: 'Commercial cleaning, hygiene & sanitization' },
        { name: '03 Infra Services', href: 'infrastructure.html', key: 'infrastructure', desc: 'Turnkey projects, utility shifting & road construction' },
      ]
    },
    { name: 'Industries', href: 'industries.html', key: 'industries' },
    { name: 'Why SSV', href: 'why-ssv.html', key: 'why-ssv' },
    { name: 'Contact', href: 'contact.html', key: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, pageKey: string, href: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(pageKey);
      setMobileMenuOpen(false);
      setServicesDropdownOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Corporate Utility Bar */}
      <div className="hidden lg:block bg-[#D8EFFA] text-[#102A3A] border-b border-[#C2E2F4] py-1.5 px-6 text-xs select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="font-bold text-[#073B57] tracking-wide flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#D9043E] inline-block animate-pulse" />
              SSV COMMERCIAL SERVICES & INFRA PRIVATE LIMITED
            </span>
            <span className="text-[#8EBED9]">|</span>
            <span className="text-[#102A3A] font-semibold tracking-wider">
              ENSURING SAFETY, DELIVERING EXCELLENCE
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href={`tel:${COMPANY_INFO.phoneRaw}`} 
              className="flex items-center gap-1.5 text-[#102A3A] hover:text-[#0877B5] font-semibold transition-colors"
            >
              <PhoneIcon size={13} color="#D9043E" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="flex items-center gap-1.5 text-[#102A3A] hover:text-[#0877B5] font-semibold transition-colors"
            >
              <MailIcon size={13} color="#0877B5" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <a 
              href={COMPANY_INFO.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#15803D] hover:text-[#166534] font-bold transition-all"
            >
              <WhatsappIcon size={13} color="#15803D" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 w-full ${
          isScrolled
            ? 'bg-[#EAF6FC]/95 backdrop-blur-md shadow-lg border-b border-[#D8EFFA] py-3'
            : 'bg-[#EAF6FC] border-b border-[#D8EFFA] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="index.html"
            onClick={(e) => handleLinkClick(e, 'home', 'index.html')}
            className="flex items-center group transition-transform duration-200 hover:scale-[1.01]"
            aria-label="SSV Home"
          >
            <Logo
              variant="horizontal"
              className="w-[185px] sm:w-[210px] lg:w-[250px]"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item) => {
              const isActive = currentPage === item.key || 
                (item.hasChildren && ['services', 'security', 'housekeeping', 'infrastructure'].includes(currentPage));

              if (item.hasChildren) {
                return (
                  <div 
                    key={item.name} 
                    className="relative group"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.key, item.href)}
                      className={`px-3 py-2 text-sm font-bold tracking-wide transition-colors duration-150 inline-flex items-center gap-1 rounded ${
                        isActive
                          ? 'text-white bg-[#0877B5]'
                          : 'text-[#102A3A] hover:text-[#0877B5] hover:bg-[#D8EFFA]'
                      }`}
                    >
                      {item.name}
                      <svg className="w-3.5 h-3.5 text-[#0877B5] group-hover:text-[#073B57] transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </a>

                    {/* Dropdown Menu */}
                    <div 
                      className={`absolute top-full left-0 w-80 pt-2 transition-all duration-200 ${
                        servicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="bg-white border border-[#D8EFFA] border-t-2 border-t-[#D9043E] shadow-xl rounded-sm p-3 space-y-1">
                        {item.children?.map((child) => (
                          <a
                            key={child.key}
                            href={child.href}
                            onClick={(e) => handleLinkClick(e, child.key, child.href)}
                            className={`block p-2.5 rounded transition-all ${
                              currentPage === child.key 
                                ? 'bg-[#EAF6FC] border-l-2 border-[#D9043E] text-[#102A3A]' 
                                : 'hover:bg-[#EAF6FC] text-[#102A3A]'
                            }`}
                          >
                            <div className="text-xs font-bold uppercase tracking-wider text-[#102A3A]">{child.name}</div>
                            <div className="text-[11px] text-[#3B586F] mt-0.5 leading-snug">{child.desc}</div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.key, item.href)}
                  className={`px-3 py-2 text-sm font-bold tracking-wide transition-colors duration-150 rounded ${
                    isActive
                      ? 'text-white bg-[#0877B5]'
                      : 'text-[#102A3A] hover:text-[#0877B5] hover:bg-[#D8EFFA]'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="header-cta-contact-btn"
              onClick={() => {
                if (onNavigate) onNavigate('contact');
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D9043E] hover:bg-[#B50334] text-white text-xs font-bold tracking-widest uppercase transition-all duration-200 shadow-md shadow-red-950/40 rounded-sm hover:translate-y-[-1px]"
            >
              <span>GET IN TOUCH</span>
              <ArrowRightIcon size={14} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded text-[#102A3A] hover:bg-[#D8EFFA] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-[#EAF6FC]/98 backdrop-blur-xl pt-24 pb-8 px-6 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4">
            <div className="pb-4 border-b border-[#D8EFFA] flex justify-center">
              <Logo variant="stacked" className="w-[180px]" />
            </div>

            <div className="space-y-1 pt-2">
              {navLinks.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.key, item.href)}
                    className={`block py-3 px-3 rounded text-base font-bold tracking-wide transition-colors ${
                      currentPage === item.key
                        ? 'bg-[#0877B5] text-white'
                        : 'text-[#102A3A] hover:bg-[#D8EFFA]'
                    }`}
                  >
                    {item.name}
                  </a>

                  {item.hasChildren && (
                    <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-[#0877B5] ml-4 my-1">
                      {item.children?.slice(1).map((child) => (
                        <a
                          key={child.key}
                          href={child.href}
                          onClick={(e) => handleLinkClick(e, child.key, child.href)}
                          className={`block py-2 text-xs font-semibold uppercase tracking-wider ${
                            currentPage === child.key ? 'text-[#D9043E]' : 'text-[#3B586F] hover:text-[#0877B5]'
                          }`}
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#D8EFFA] space-y-3">
            <button
              id="mobile-drawer-contact-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onNavigate) onNavigate('contact');
              }}
              className="w-full py-3.5 bg-[#D9043E] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 rounded-sm shadow-md"
            >
              <span>GET IN TOUCH</span>
              <ArrowRightIcon size={14} />
            </button>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="py-3 px-3 bg-white text-[#102A3A] font-semibold flex items-center justify-center gap-2 rounded-sm border border-[#D8EFFA]"
              >
                <PhoneIcon size={14} color="#D9043E" />
                <span>Call Us</span>
              </a>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 bg-white text-[#15803D] font-semibold flex items-center justify-center gap-2 rounded-sm border border-[#D8EFFA]"
              >
                <WhatsappIcon size={14} color="#15803D" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
