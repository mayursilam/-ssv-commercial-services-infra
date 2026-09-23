import React from 'react';
import { SafeImage } from '../components/SafeImage';
import { ShieldIcon, SparklesIcon, ConstructionIcon, CheckIcon, ArrowRightIcon, PhoneIcon } from '../components/Icons';
import { COMPANY_INFO, VALUE_PILLARS } from '../data/content';
import { IMAGES } from '../data/images';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onOpenEnquiry?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white text-[#102A3A]">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-28 bg-[#073B57] text-white overflow-hidden border-b-2 border-[#D9043E]">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src={IMAGES.corporateOffice.url}
            alt="SSV corporate management operations"
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
              ABOUT OUR ORGANIZATION
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-gotham uppercase tracking-tight text-white">
              ABOUT SSV COMMERCIAL SERVICES & INFRA
            </h1>
            <p className="text-base sm:text-lg text-[#D8EFFA] leading-relaxed">
              SSV Commercial Services & Infra Private Limited delivers professional security, housekeeping, and infrastructure solutions designed to support safer, cleaner, and better-managed environments.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Ethos & Foundation */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#D9043E]" />
                <span className="text-xs font-black tracking-[0.2em] text-[#0877B5] uppercase">
                  OPERATIONAL ETHOS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#102A3A] font-gotham uppercase leading-tight">
                SAFETY AND SECURITY AS FUNDAMENTAL OPERATIONAL PILLARS
              </h2>

              <p className="text-sm sm:text-base text-[#3B586F] leading-relaxed">
                SSV recognizes that safety and security are fundamental to seamless operations. Whether managing Grade-A corporate towers, busy manufacturing lines, or residential housing societies, an unprotected or improperly maintained space impedes productivity and compromises peace of mind.
              </p>

              <p className="text-sm sm:text-base text-[#3B586F] leading-relaxed">
                The company provides security and housekeeping solutions supported by trained personnel, modern technology, professional practices, and customer-centric service. Coupled with our heavy civil and turnkey infrastructure capability, SSV represents a unified partner for facility and civil asset lifecycle management.
              </p>

              <div className="pt-2">
                <button
                  id="about-connect-management-btn"
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 bg-[#D9043E] hover:bg-[#B50334] text-white text-xs font-bold tracking-widest uppercase rounded-sm flex items-center gap-2 transition-colors shadow-md"
                >
                  <span>CONNECT WITH MANAGEMENT</span>
                  <ArrowRightIcon size={14} />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <SafeImage
                src={IMAGES.professionalTeam.url}
                alt="SSV management team reviewing operations"
                aspectRatio="portrait"
                containerClassName="rounded-sm shadow-xl border border-[#D8EFFA]"
                badge="MANAGED DISCIPLINE"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-[#EAF6FC] border-y border-[#D8EFFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 sm:p-10 border border-[#D8EFFA] rounded-sm shadow-sm space-y-4 border-t-4 border-t-[#D9043E]">
              <div className="text-xs font-black tracking-widest text-[#D9043E] uppercase">
                OUR MISSION
              </div>
              <h3 className="text-2xl font-black text-[#102A3A] font-gotham uppercase">
                DELIVERING EXCELLENCE & UNCOMPROMISING STANDARDS
              </h3>
              <p className="text-sm text-[#3B586F] leading-relaxed">
                To create safe, hygienic, and resilient environments through customer-centric service, highly trained personnel, advanced technology, and professional execution that elevates operational well-being.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-[#102A3A]">
                <li className="flex items-center gap-2">
                  <CheckIcon size={14} color="#D9043E" />
                  <span>Prioritizing physical safety and proactive hazard mitigation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon size={14} color="#D9043E" />
                  <span>Maintaining high hygiene standards and deep cleaning & sanitization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon size={14} color="#D9043E" />
                  <span>Executing engineering & infrastructure projects on schedule</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 sm:p-10 border border-[#D8EFFA] rounded-sm shadow-sm space-y-4 border-t-4 border-t-[#0877B5]">
              <div className="text-xs font-black tracking-widest text-[#0877B5] uppercase">
                OUR VISION
              </div>
              <h3 className="text-2xl font-black text-[#102A3A] font-gotham uppercase">
                THE REGION'S BENCHMARK FOR COMMERCIAL & INFRA PARTNERSHIPS
              </h3>
              <p className="text-sm text-[#3B586F] leading-relaxed">
                To be recognized as the premier provider of commercial services and civil infrastructure, distinguished by trust, integrity, innovation, quality, operational efficiency, and sustainable practices.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-[#102A3A]">
                <li className="flex items-center gap-2">
                  <CheckIcon size={14} color="#0877B5" />
                  <span>Building long-term client relationships based on accountability</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon size={14} color="#0877B5" />
                  <span>Continuous technological upgrading of tools and monitoring systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon size={14} color="#0877B5" />
                  <span>Promoting eco-friendly materials and statutory worker welfare</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Pillars Integration */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-[#D9043E]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#0877B5] uppercase">
                INTEGRATED SERVICE ECOSYSTEM
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#102A3A] font-gotham uppercase">
              HOW OUR DIVISIONS COLLABORATE
            </h2>
            <p className="text-sm text-[#3B586F]">
              Eliminating operational fragmentation through unified governance and clear point-of-contact accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#EAF6FC] border border-[#D8EFFA] rounded-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#FDF2F4] text-[#D9043E] flex items-center justify-center">
                <ShieldIcon size={20} color="#D9043E" />
              </div>
              <h4 className="text-lg font-bold text-[#102A3A]">01 Security Division</h4>
              <p className="text-xs text-[#3B586F] leading-relaxed">
                Controls perimeter gates, logs visitor and vehicle influx, runs CCTV surveillance feeds, and enforces building emergency protocols.
              </p>
            </div>

            <div className="p-6 bg-[#EAF6FC] border border-[#D8EFFA] rounded-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#D8EFFA] text-[#0877B5] flex items-center justify-center">
                <SparklesIcon size={20} color="#0877B5" />
              </div>
              <h4 className="text-lg font-bold text-[#102A3A]">02 Housekeeping Division</h4>
              <p className="text-xs text-[#3B586F] leading-relaxed">
                Maintains continuous hygiene rosters, operates industrial scrubbing machinery, performs deep sanitization, and manages waste segregation.
              </p>
            </div>

            <div className="p-6 bg-[#EAF6FC] border border-[#D8EFFA] rounded-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#D8EFFA] text-[#073B57] flex items-center justify-center">
                <ConstructionIcon size={20} color="#073B57" />
              </div>
              <h4 className="text-lg font-bold text-[#102A3A]">03 Infra Division</h4>
              <p className="text-xs text-[#3B586F] leading-relaxed">
                Constructs access roads, shifts subterranean and overhead utilities, and executes turnkey civil additions to sustain property value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Offices */}
      <section className="py-16 bg-[#073B57] text-white border-t border-[#0F5A82]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9043E]">HEAD OFFICE</span>
              <h3 className="text-2xl font-bold font-gotham text-white mt-1">Dharashiv, Maharashtra</h3>
              <p className="text-xs text-[#D8EFFA] mt-1">{COMPANY_INFO.headOffice.formatted}</p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9043E]">PUNE OFFICE</span>
              <h3 className="text-2xl font-bold font-gotham text-white mt-1">Pune, Maharashtra</h3>
              <p className="text-xs text-[#D8EFFA] mt-1">{COMPANY_INFO.puneOffice.formatted}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="px-6 py-3 bg-[#D9043E] hover:bg-[#B50334] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors"
            >
              Call +91 93590 72600
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
