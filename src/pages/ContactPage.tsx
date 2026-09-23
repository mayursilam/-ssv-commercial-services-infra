import React from 'react';
import { SafeImage } from '../components/SafeImage';
import { PhoneIcon, MailIcon, MapPinIcon, WhatsappIcon, FacebookIcon, ShieldIcon, SparklesIcon, ConstructionIcon, CheckIcon } from '../components/Icons';
import { COMPANY_INFO } from '../data/content';
import { IMAGES } from '../data/images';

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-white text-[#102A3A]">
      {/* Banner */}
      <section className="relative py-20 lg:py-28 bg-[#073B57] text-white border-b-2 border-[#D9043E] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src={IMAGES.contactCorporate.url}
            alt="SSV Contact and Corporate Headquarters"
            aspectRatio="auto"
            containerClassName="w-full h-full"
            overlay={true}
            darkOverlayOpacity="bg-[#073B57]/85"
          />
          <div className="absolute inset-0 tech-grid-pattern-dark opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D9043E]/20 border border-[#D9043E]/40 text-white text-xs font-bold tracking-widest uppercase rounded-sm">
              DIRECT OPERATIONS HELPLINE
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-gotham uppercase tracking-tight text-white leading-tight">
              LET'S BUILD A SAFER,<br />
              <span className="text-[#D9043E]">CLEANER, BETTER</span> ENVIRONMENT.
            </h1>
            <p className="text-base sm:text-lg text-[#D8EFFA] leading-relaxed">
              Connect directly with our operational management in Dharashiv, Maharashtra for rapid security deployment, housekeeping services, and infrastructure project consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Main High-Conversion Contact Hub */}
      <section className="py-16 lg:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* 3 Core Primary Contact Action Cards */}
          <div className="space-y-4">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9043E]">INSTANT CONNECTIVITY</span>
              <h2 className="text-3xl font-black text-[#102A3A] font-gotham uppercase">
                DIRECT CONTACT CHANNELS
              </h2>
              <p className="text-sm text-[#3B586F]">
                Direct access to our central team. Choose your preferred communication channel below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {/* Channel 1: CALL US */}
              <div 
                id="contact-card-call"
                className="bg-[#EAF6FC] border-2 border-[#D8EFFA] hover:border-[#D9043E] p-8 rounded-sm transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#FDF2F4] text-[#D9043E] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <PhoneIcon size={24} color="#D9043E" />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest text-[#0877B5] uppercase block">DIRECT HOTLINE</span>
                    <h3 className="text-xl font-black text-[#102A3A] font-gotham uppercase mt-1">CALL US</h3>
                    <p className="text-lg font-bold text-[#D9043E] mt-2">+91 93590 72600</p>
                    <p className="text-xs text-[#3B586F] mt-2 leading-relaxed">
                      24/7 dedicated line for operational coordination, emergency security escalation, and immediate site requirements.
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#D8EFFA]">
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    id="contact-btn-call-now"
                    className="w-full py-3.5 bg-[#D9043E] hover:bg-[#B50334] text-white text-center font-bold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-red-950/20"
                  >
                    <PhoneIcon size={14} color="#FFFFFF" />
                    <span>CALL NOW</span>
                  </a>
                </div>
              </div>

              {/* Channel 2: WHATSAPP US */}
              <div 
                id="contact-card-whatsapp"
                className="bg-[#EAF6FC] border-2 border-[#D8EFFA] hover:border-[#25D366] p-8 rounded-sm transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#E8F8EE] text-[#15803D] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <WhatsappIcon size={24} color="#15803D" />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest text-[#0877B5] uppercase block">INSTANT CHAT</span>
                    <h3 className="text-xl font-black text-[#102A3A] font-gotham uppercase mt-1">WHATSAPP US</h3>
                    <p className="text-lg font-bold text-[#15803D] mt-2">+91 93590 72600</p>
                    <p className="text-xs text-[#3B586F] mt-2 leading-relaxed">
                      Fastest communication for sharing site photos, GPS locations, property layouts, and getting quick operational updates.
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#D8EFFA]">
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="contact-btn-whatsapp-us"
                    className="w-full py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <WhatsappIcon size={16} color="#FFFFFF" />
                    <span>WHATSAPP US</span>
                  </a>
                </div>
              </div>

              {/* Channel 3: EMAIL US */}
              <div 
                id="contact-card-email"
                className="bg-[#EAF6FC] border-2 border-[#D8EFFA] hover:border-[#0877B5] p-8 rounded-sm transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#D8EFFA] text-[#0877B5] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MailIcon size={24} color="#0877B5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest text-[#0877B5] uppercase block">OFFICIAL DESK</span>
                    <h3 className="text-xl font-black text-[#102A3A] font-gotham uppercase mt-1">EMAIL US</h3>
                    <p className="text-base font-bold text-[#073B57] mt-2 break-all">{COMPANY_INFO.email}</p>
                    <p className="text-xs text-[#3B586F] mt-2 leading-relaxed">
                      Formal correspondence, corporate vendor onboarding, contracts, and municipal infrastructure communications.
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#D8EFFA]">
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    id="contact-btn-send-email"
                    className="w-full py-3.5 bg-[#0877B5] hover:bg-[#073B57] text-white text-center font-bold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <MailIcon size={14} color="#FFFFFF" />
                    <span>SEND EMAIL</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Official Facebook Social Channel */}
            <div className="mt-8 p-5 bg-[#EAF6FC] border border-[#D8EFFA] rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center flex-shrink-0">
                  <FacebookIcon size={20} color="#1877F2" />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-widest text-[#0877B5] uppercase block">OFFICIAL SOCIAL MEDIA</span>
                  <h4 className="text-sm font-black text-[#102A3A] font-gotham uppercase">Connect with SSV on Facebook</h4>
                </div>
              </div>
              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit SSV Commercial Services on Facebook"
                id="contact-btn-facebook"
                className="w-full sm:w-auto px-5 py-2.5 bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <FacebookIcon size={16} color="#FFFFFF" />
                <span>Visit Facebook Page</span>
              </a>
            </div>
          </div>

          {/* Corporate Office Coordinates (Head Office & Pune Office) */}
          <div className="space-y-6 pt-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9043E]">CORPORATE LOCATIONS</span>
              <h2 className="text-3xl font-black text-[#102A3A] font-gotham uppercase">
                OFFICE LOCATIONS
              </h2>
              <p className="text-sm text-[#3B586F]">
                Operating across Maharashtra with established administrative headquarters and regional corporate presence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-2">
              {/* Card 1: Head Office */}
              <div className="bg-[#073B57] text-white p-8 sm:p-10 rounded-sm border border-[#D8EFFA] shadow-xl flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-[#D9043E]" />
                    <span className="text-xs font-black tracking-[0.2em] text-[#D8EFFA] uppercase">
                      HEAD OFFICE
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white font-gotham uppercase">
                      HEAD OFFICE
                    </h3>
                    <p className="text-xs text-[#D8EFFA] mt-1 uppercase tracking-wider font-semibold">
                      Dharashiv, Maharashtra
                    </p>
                  </div>

                  <div className="space-y-4 pt-2 text-sm text-[#D8EFFA]">
                    <div className="flex items-start gap-3.5">
                      <MapPinIcon size={20} color="#D9043E" className="flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-xs font-bold uppercase text-[#D8EFFA]">Postal Address</div>
                        <p className="text-white font-bold mt-0.5">{COMPANY_INFO.headOffice.line1}</p>
                        <p className="text-[#D8EFFA]">{COMPANY_INFO.headOffice.line2}</p>
                        <p className="text-[#D8EFFA]">{COMPANY_INFO.headOffice.state} - {COMPANY_INFO.headOffice.pincode}, {COMPANY_INFO.headOffice.country}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5">
                      <PhoneIcon size={20} color="#D9043E" className="flex-shrink-0" />
                      <div>
                        <div className="text-xs font-bold uppercase text-[#D8EFFA]">Telephone</div>
                        <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-white font-bold hover:text-[#D9043E] transition-colors">
                          {COMPANY_INFO.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5">
                      <MailIcon size={20} color="#D8EFFA" className="flex-shrink-0" />
                      <div>
                        <div className="text-xs font-bold uppercase text-[#D8EFFA]">Electronic Mail</div>
                        <a href={`mailto:${COMPANY_INFO.email}`} className="text-white font-bold hover:text-[#D8EFFA] transition-colors">
                          {COMPANY_INFO.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#0F5A82] flex flex-wrap items-center justify-between gap-4 text-xs text-[#D8EFFA]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span>Operations Status: Active 24/7</span>
                  </div>
                  <div className="font-semibold text-white">
                    Registered Headquarters
                  </div>
                </div>
              </div>

              {/* Card 2: Pune Office */}
              <div className="bg-[#073B57] text-white p-8 sm:p-10 rounded-sm border border-[#D8EFFA] shadow-xl flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-[#D9043E]" />
                    <span className="text-xs font-black tracking-[0.2em] text-[#D8EFFA] uppercase">
                      PUNE OFFICE
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white font-gotham uppercase">
                      PUNE OFFICE
                    </h3>
                    <p className="text-xs text-[#D8EFFA] mt-1 uppercase tracking-wider font-semibold">
                      Pune, Maharashtra
                    </p>
                  </div>

                  <div className="space-y-4 pt-2 text-sm text-[#D8EFFA]">
                    <div className="flex items-start gap-3.5">
                      <MapPinIcon size={20} color="#D9043E" className="flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-xs font-bold uppercase text-[#D8EFFA]">Office Address</div>
                        <p className="text-white font-bold mt-0.5">{COMPANY_INFO.puneOffice.formatted}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5">
                      <PhoneIcon size={20} color="#D9043E" className="flex-shrink-0" />
                      <div>
                        <div className="text-xs font-bold uppercase text-[#D8EFFA]">Telephone</div>
                        <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-white font-bold hover:text-[#D9043E] transition-colors">
                          {COMPANY_INFO.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5">
                      <MailIcon size={20} color="#D8EFFA" className="flex-shrink-0" />
                      <div>
                        <div className="text-xs font-bold uppercase text-[#D8EFFA]">Electronic Mail</div>
                        <a href={`mailto:${COMPANY_INFO.email}`} className="text-white font-bold hover:text-[#D8EFFA] transition-colors">
                          {COMPANY_INFO.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#0F5A82] flex flex-wrap items-center justify-between gap-4 text-xs text-[#D8EFFA]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    <span>Regional Operations & Project Support</span>
                  </div>
                  <div className="font-semibold text-white">
                    Pune Office
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Division Hotlines & Coverage Grid */}
          <div className="pt-2">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Three Divisional Capability Lines */}
              <div className="lg:col-span-8 space-y-4">
                <div className="p-5 bg-[#EAF6FC] border border-[#D8EFFA] rounded-sm flex items-start gap-4 hover:border-[#D9043E] transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#FDF2F4] text-[#D9043E] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldIcon size={18} color="#D9043E" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#102A3A] uppercase">01 Security Services</h4>
                    <p className="text-xs text-[#3B586F] mt-0.5">
                      Manned guarding deployments, CCTV surveillance setups, executive protection, and access control systems.
                    </p>
                    <div className="mt-2 flex items-center gap-3 text-xs">
                      <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="font-bold text-[#D9043E] hover:underline">
                        Call Security Team →
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-[#EAF6FC] border border-[#D8EFFA] rounded-sm flex items-start gap-4 hover:border-[#0877B5] transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#D8EFFA] text-[#0877B5] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <SparklesIcon size={18} color="#0877B5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#102A3A] uppercase">02 Housekeeping Services</h4>
                    <p className="text-xs text-[#3B586F] mt-0.5">
                      Commercial cleaning, deep cleaning & sanitization, industrial floor care, and waste management.
                    </p>
                    <div className="mt-2 flex items-center gap-3 text-xs">
                      <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-[#15803D] hover:underline">
                        WhatsApp Housekeeping Team →
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-[#EAF6FC] border border-[#D8EFFA] rounded-sm flex items-start gap-4 hover:border-[#073B57] transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#D8EFFA] text-[#073B57] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ConstructionIcon size={18} color="#073B57" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#102A3A] uppercase">03 Infra Services</h4>
                    <p className="text-xs text-[#3B586F] mt-0.5">
                      Turnkey civil projects, utility shifting, road construction, industrial pavement, and site engineering works.
                    </p>
                    <div className="mt-2 flex items-center gap-3 text-xs">
                      <a href={`mailto:${COMPANY_INFO.email}`} className="font-bold text-[#0877B5] hover:underline">
                        Email Engineering Team →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Geographic Coverage Indicator */}
              <div className="lg:col-span-4 flex flex-col justify-between p-6 bg-[#073B57] text-white rounded-sm border border-[#0F5A82]">
                <div>
                  <div className="text-xs font-bold text-[#D9043E] uppercase tracking-wider mb-2">
                    REGIONAL REACH & COMPLIANCE
                  </div>
                  <h4 className="text-lg font-bold font-gotham uppercase text-white mb-2">
                    Maharashtra Operations
                  </h4>
                  <p className="text-xs text-[#D8EFFA] leading-relaxed">
                    Head Office located in <strong className="text-white">Dharashiv, Maharashtra</strong> and regional Pune Office in <strong className="text-white">Erandwane, Pune</strong>. Serving commercial, industrial, residential, and infrastructure clients across Maharashtra.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#0F5A82] text-xs text-[#D8EFFA]">
                  Strict labor compliance, statutory coverage, and single-point operational management.
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
