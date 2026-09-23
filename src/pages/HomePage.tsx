import React, { useState } from 'react';
import { Logo } from '../components/Logo';
import { SafeImage } from '../components/SafeImage';
import { 
  ShieldIcon, CameraIcon, LockIcon, ScanIcon, BellIcon, FlameIcon, 
  SparklesIcon, BuildingIcon, DropletsIcon, TrashIcon, LeafIcon, SprayIcon, 
  ConstructionIcon, RoadIcon, HardHatIcon, WrenchIcon, UtilityIcon, 
  ArrowRightIcon, PhoneIcon, MailIcon, MapPinIcon, WhatsappIcon, CheckIcon, ChevronRightIcon, UsersIcon
} from '../components/Icons';
import { 
  COMPANY_INFO, CORE_PILLARS, SECURITY_SERVICES_LIST, 
  HOUSEKEEPING_SERVICES_LIST, INFRASTRUCTURE_MODULES, 
  INDUSTRIES_LIST, VALUE_PILLARS, QUALITATIVE_STRENGTHS 
} from '../data/content';
import { IMAGES } from '../data/images';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenEnquiry?: (service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [selectedIndustryTab, setSelectedIndustryTab] = useState<string>('all');

  const filteredIndustries = selectedIndustryTab === 'all'
    ? INDUSTRIES_LIST
    : INDUSTRIES_LIST.filter(item => item.category.toLowerCase() === selectedIndustryTab.toLowerCase());

  return (
    <div className="bg-white text-[#102A3A]">
      {/* ========================================================
          HERO SECTION - CINEMATIC FULL-SCREEN
          ======================================================== */}
      <section className="relative min-h-[90vh] lg:min-h-[94vh] bg-[#073B57] text-white flex flex-col justify-between overflow-hidden border-b-2 border-[#D9043E]">
        {/* Background Visual Layer with Subtle Overlay */}
        <div className="absolute inset-0 z-0">
          <SafeImage
            src={IMAGES.heroCommercial.url}
            alt="Modern commercial headquarters and infrastructure managed by SSV"
            containerClassName="w-full h-full"
            aspectRatio="auto"
            overlay={true}
            darkOverlayOpacity="bg-gradient-to-r from-[#073B57]/95 via-[#073B57]/80 to-[#0877B5]/50"
            zoomOnHover={false}
          />
          <div className="absolute inset-0 tech-grid-pattern opacity-20" />
        </div>

        {/* Hero Content Area */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-12 flex-1 flex flex-col justify-center">
          <div className="max-w-3xl space-y-6">
            {/* Editorial Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#D9043E]/20 border border-[#D9043E]/50 text-white text-xs font-bold tracking-[0.2em] uppercase rounded-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#D9043E] animate-ping" />
              <span>COMMERCIAL SERVICES & INFRASTRUCTURE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] font-gotham text-white uppercase">
              ENSURING SAFETY.<br />
              <span className="text-[#D9043E]">DELIVERING</span> EXCELLENCE.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-[#D8EFFA] font-normal leading-relaxed max-w-2xl">
              SSV Commercial Services & Infra Pvt. Ltd. delivers professional security, housekeeping, and infrastructure solutions designed to support safer, cleaner, and better-managed environments.
            </p>

            {/* CTA Group */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onNavigate('services')}
                className="px-8 py-4 bg-[#D9043E] hover:bg-[#B50334] text-white text-xs sm:text-sm font-black tracking-widest uppercase transition-all duration-200 shadow-xl shadow-red-950/40 rounded-sm flex items-center justify-center gap-3 group"
              >
                <span>EXPLORE OUR SERVICES</span>
                <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-contact-btn"
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-[#EAF6FC]/15 hover:bg-[#EAF6FC]/30 text-white text-xs sm:text-sm font-bold tracking-widest uppercase border border-[#D8EFFA]/50 hover:border-white transition-all rounded-sm flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <span>GET IN TOUCH</span>
                <PhoneIcon size={15} color="#D8EFFA" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Hero Pillar Navigation Cue (Clean Light Blue Service Strip) */}
        <div className="relative z-10 bg-[#EAF6FC] border-t border-[#D8EFFA] shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#D8EFFA]">
            {CORE_PILLARS.map((pillar) => (
              <button
                key={pillar.id}
                onClick={() => onNavigate(pillar.pageKey)}
                className="p-3 md:px-6 flex items-center justify-between text-left group hover:bg-[#D8EFFA]/60 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-black text-[#D9043E]">{pillar.number}</span>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-[#073B57] group-hover:text-[#0877B5] transition-colors">
                      {pillar.title}
                    </span>
                    <span className="text-[11px] text-[#3B586F] font-normal line-clamp-1">
                      {pillar.shortDesc}
                    </span>
                  </div>
                </div>
                <ChevronRightIcon size={16} className="text-[#0877B5] group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 02 - EDITORIAL STATEMENT
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#D9043E]" />
                <span className="text-xs font-black tracking-[0.2em] text-[#0877B5] uppercase">
                  SECTION 02 // CAPABILITY ECOSYSTEM
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#102A3A] font-gotham uppercase leading-[1.1]">
                THREE CAPABILITIES.<br />
                <span className="text-[#D9043E]">ONE PROFESSIONAL</span> PARTNER.
              </h2>

              <p className="text-base sm:text-lg text-[#3B586F] leading-relaxed">
                At SSV, we understand that modern enterprises require integrated management. Rather than coordinating with disconnected contractors, our clients rely on a unified standard for physical protection, facility hygiene, and critical infrastructure execution.
              </p>

              {/* 01 / 02 / 03 Visual Treatment */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#D8EFFA]">
                <div className="space-y-1">
                  <span className="text-2xl sm:text-3xl font-black text-[#D9043E]">01</span>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#102A3A]">Safety</p>
                  <p className="text-[11px] text-[#3B586F]">Manned & electronic security</p>
                </div>
                <div className="space-y-1">
                  <span className="text-2xl sm:text-3xl font-black text-[#0877B5]">02</span>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#102A3A]">Cleanliness</p>
                  <p className="text-[11px] text-[#3B586F]">Systematic housekeeping</p>
                </div>
                <div className="space-y-1">
                  <span className="text-2xl sm:text-3xl font-black text-[#D9043E]">03</span>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#102A3A]">Civil Infra</p>
                  <p className="text-[11px] text-[#3B586F]">Turnkey engineering</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#D9043E] uppercase hover:text-[#B50334] transition-colors"
                >
                  <span>LEARN MORE ABOUT SSV OPERATIONS</span>
                  <ArrowRightIcon size={14} />
                </button>
              </div>
            </div>

            {/* Right Large Image Composition */}
            <div className="lg:col-span-6">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#D9043E] z-10 pointer-events-none" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#0877B5] z-10 pointer-events-none" />
                
                <SafeImage
                  src={IMAGES.facilityManagement.url}
                  alt="Integrated commercial facility management by SSV"
                  aspectRatio="portrait"
                  containerClassName="rounded-sm shadow-2xl border border-[#D8EFFA]"
                  badge="INTEGRATED ECOSYSTEM"
                />

                <div className="absolute bottom-6 left-6 right-6 bg-[#073B57]/95 backdrop-blur-md p-4 text-white border-l-4 border-[#D9043E] shadow-xl">
                  <p className="text-xs font-bold tracking-wider uppercase text-[#D8EFFA]">Operational Standard</p>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    "The people, systems and infrastructure behind better spaces."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 03 - THREE CORE SERVICE PANELS
          ======================================================== */}
      <section className="py-20 bg-[#EAF6FC] border-y border-[#D8EFFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-[#D9043E]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#0877B5] uppercase">
                CORE CAPABILITY PILLARS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#102A3A] font-gotham uppercase">
              PROFESSIONAL SERVICE SPECTRUM
            </h2>
            <p className="text-sm text-[#3B586F]">
              Structured delivery models tailored for industrial estates, corporate complexes, and commercial properties.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {CORE_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="group bg-white border border-[#D8EFFA] hover:border-[#D9043E] rounded-sm overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  {/* Image container with hover zoom */}
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <SafeImage
                      src={IMAGES[pillar.imageId].url}
                      alt={pillar.title}
                      aspectRatio="auto"
                      containerClassName="w-full h-full"
                      overlay={true}
                      darkOverlayOpacity="bg-black/25 group-hover:bg-black/10"
                    />
                    <div className="absolute top-3 left-3 bg-[#073B57] text-white px-3 py-1 text-xs font-black tracking-wider">
                      {pillar.number}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-3">
                    <h3 className="text-xl font-black text-[#102A3A] tracking-tight uppercase group-hover:text-[#D9043E] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-bold tracking-wider text-[#D9043E] uppercase">
                      {pillar.stats}
                    </p>
                    <p className="text-xs sm:text-sm text-[#3B586F] leading-relaxed">
                      {pillar.fullDesc}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 sm:px-8 pb-6 pt-2 border-t border-[#D8EFFA] flex items-center justify-between">
                  <button
                    onClick={() => onNavigate(pillar.pageKey)}
                    className="inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase text-[#102A3A] group-hover:text-[#D9043E] transition-colors"
                  >
                    <span>VIEW SERVICE</span>
                    <ArrowRightIcon size={14} className="group-hover:translate-x-1 transition-transform text-[#D9043E]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 04 - SECURITY SERVICES DEEP-DIVE
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-14">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#D9043E]" />
                <span className="text-xs font-black tracking-[0.2em] text-[#0877B5] uppercase">
                  01 // SECURITY SERVICES
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#102A3A] font-gotham uppercase">
                PROTECTION DESIGNED<br />
                <span className="text-[#D9043E]">AROUND YOUR</span> ENVIRONMENT.
              </h2>
              <p className="text-sm sm:text-base text-[#3B586F] leading-relaxed">
                From manned physical guarding and executive VIP protection to electronic CCTV video surveillance and biometric access gates, SSV delivers proactive risk prevention.
              </p>
            </div>

            <div className="lg:col-span-5 flex lg:justify-end">
              <button
                onClick={() => onNavigate('security')}
                className="px-6 py-3.5 bg-[#073B57] hover:bg-[#0877B5] text-white text-xs font-bold tracking-widest uppercase rounded-sm flex items-center gap-3 transition-colors border border-[#D8EFFA]"
              >
                <span>EXPLORE ALL SECURITY PROTOCOLS</span>
                <ArrowRightIcon size={14} color="#D9043E" />
              </button>
            </div>
          </div>

          {/* Security Visual Grid with HUD elements */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
            {/* Left Security Image with HUD Overlay */}
            <div className="lg:col-span-5 relative bg-[#073B57] rounded-sm overflow-hidden border border-[#D8EFFA] shadow-xl">
              <SafeImage
                src={IMAGES.securityGuard.url}
                alt="Uniformed security guard providing access surveillance"
                aspectRatio="portrait"
                containerClassName="w-full h-full min-h-[420px]"
                overlay={true}
                darkOverlayOpacity="bg-gradient-to-t from-[#073B57] via-transparent to-black/20"
              />
              {/* Subtle Tech Overlay */}
              <div className="absolute top-4 right-4 bg-[#073B57]/90 text-white border border-[#D9043E]/40 px-3 py-1.5 rounded-sm text-[10px] font-mono flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                <span>PERIMETER: SECURE</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-[#073B57]/95 border border-[#D8EFFA]/30 p-4 text-white text-xs space-y-1">
                <div className="font-bold uppercase tracking-wider text-[#D9043E]">Standard Operating Procedure</div>
                <div className="text-[#D8EFFA]">Vetted personnel, logbook enforcement, and disciplined shift rosters.</div>
              </div>
            </div>

            {/* Right Service Matrix Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SECURITY_SERVICES_LIST.slice(0, 6).map((service) => (
                <div
                  key={service.id}
                  className="p-5 bg-[#EAF6FC] hover:bg-white border border-[#D8EFFA] hover:border-[#D9043E] rounded-sm transition-all duration-200 space-y-2 group hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#D9043E]">{service.number}</span>
                    <span className="text-[10px] text-[#0877B5] uppercase tracking-wider font-semibold">Security</span>
                  </div>
                  <h4 className="text-base font-bold text-[#102A3A] group-hover:text-[#D9043E] transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-xs text-[#3B586F] leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 05 - HOUSEKEEPING DEEP-DIVE
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-[#EAF6FC] border-t border-[#D8EFFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-14">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#0877B5]" />
                <span className="text-xs font-black tracking-[0.2em] text-[#0877B5] uppercase">
                  02 // HOUSEKEEPING SERVICES
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#102A3A] font-gotham uppercase">
                CLEANER SPACES.<br />
                <span className="text-[#0877B5]">BETTER</span> ENVIRONMENTS.
              </h2>
              <p className="text-sm sm:text-base text-[#3B586F] leading-relaxed">
                We combine trained housekeeping personnel with deep cleaning & sanitization solutions, eco-friendly cleaning practices, and strict waste management workflows to maintain pristine environments.
              </p>
            </div>

            <div className="lg:col-span-5 flex lg:justify-end">
              <button
                onClick={() => onNavigate('housekeeping')}
                className="px-6 py-3.5 bg-[#0877B5] hover:bg-[#073B57] text-white text-xs font-bold tracking-widest uppercase rounded-sm flex items-center gap-3 transition-colors border border-[#D8EFFA]"
              >
                <span>VIEW HOUSEKEEPING PROGRAMS</span>
                <ArrowRightIcon size={14} color="#D8EFFA" />
              </button>
            </div>
          </div>

          {/* Housekeeping Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {HOUSEKEEPING_SERVICES_LIST.slice(0, 3).map((item) => (
              <div key={item.id} className="bg-white border border-[#D8EFFA] rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                <SafeImage
                  src={IMAGES[item.imageId].url}
                  alt={item.title}
                  aspectRatio="video"
                />
                <div className="p-6 space-y-2">
                  <span className="text-xs font-bold text-[#0877B5] font-mono">{item.number}</span>
                  <h4 className="text-lg font-bold text-[#102A3A] group-hover:text-[#D9043E] transition-colors">{item.title}</h4>
                  <p className="text-xs text-[#3B586F] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {HOUSEKEEPING_SERVICES_LIST.slice(3).map((item) => (
              <div key={item.id} className="p-5 bg-white border border-[#D8EFFA] rounded-sm flex items-start gap-4">
                <span className="text-xs font-mono font-bold text-[#0877B5] mt-0.5">{item.number}</span>
                <div>
                  <h5 className="text-sm font-bold text-[#102A3A]">{item.title}</h5>
                  <p className="text-xs text-[#3B586F] mt-1">{item.tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 06 - INFRASTRUCTURE DEEP-DIVE (DEEP BLUE / LIGHT BLUE ACCENTS)
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-[#073B57] text-white border-y-2 border-[#D9043E] relative overflow-hidden">
        {/* Background Architectural Grid Pattern */}
        <div className="absolute inset-0 tech-grid-pattern opacity-15 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#D9043E]" />
                <span className="text-xs font-black tracking-[0.2em] text-[#D8EFFA] uppercase">
                  03 // INFRASTRUCTURE & CIVIL ENGINEERING
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-gotham uppercase">
                INFRASTRUCTURE<br />
                <span className="text-[#D9043E]">THAT MOVES PROJECTS</span> FORWARD.
              </h2>
              <p className="text-sm sm:text-base text-[#D8EFFA] max-w-2xl leading-relaxed">
                SSV executes heavy-duty civil works, turnkey site projects, precision underground and overhead utility shifting, and high-durability road construction for industrial and municipal developments.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                onClick={() => onNavigate('infrastructure')}
                className="px-6 py-4 bg-[#D9043E] hover:bg-[#B50334] text-white text-xs font-bold tracking-widest uppercase rounded-sm flex items-center gap-3 transition-colors shadow-lg shadow-red-950/40"
              >
                <span>VIEW INFRA CAPABILITIES</span>
                <ArrowRightIcon size={14} />
              </button>
            </div>
          </div>

          {/* 4 Large Visual Infrastructure Modules */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INFRASTRUCTURE_MODULES.map((module) => (
              <div
                key={module.id}
                className="group bg-[#08486A] border border-[#0F5A82] hover:border-[#D9043E] rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <SafeImage
                      src={IMAGES[module.imageId].url}
                      alt={module.title}
                      aspectRatio="auto"
                      containerClassName="w-full h-full"
                      overlay={true}
                      darkOverlayOpacity="bg-black/35 group-hover:bg-black/10"
                    />
                    <div className="absolute top-2 left-2 bg-[#D9043E] text-white px-2 py-0.5 text-xs font-mono font-bold">
                      {module.number}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h4 className="text-base font-black text-white uppercase group-hover:text-[#D8EFFA] transition-colors">
                      {module.title}
                    </h4>
                    <p className="text-xs text-[#D8EFFA] leading-relaxed">
                      {module.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <ul className="space-y-1.5 border-t border-[#0F5A82] pt-3 text-[11px] text-[#BCE0F5]">
                    {module.features.slice(0, 2).map((f, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-[#D9043E]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 07 - INDUSTRIES EXPLORER
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#D9043E]" />
                <span className="text-xs font-black tracking-[0.2em] text-[#0877B5] uppercase">
                  WHERE WE SERVE
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#102A3A] font-gotham uppercase">
                TAILORED INDUSTRY SOLUTIONS
              </h2>
              <p className="text-sm text-[#3B586F]">
                Specialized operational standards designed for diverse sector requirements. Based in Dharashiv, Maharashtra.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {['all', 'Commercial', 'Industrial', 'Residential', 'Infrastructure'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedIndustryTab(tab)}
                  className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors ${
                    selectedIndustryTab === tab
                      ? 'bg-[#073B57] text-white'
                      : 'bg-[#EAF6FC] text-[#102A3A] hover:bg-[#D8EFFA]'
                  }`}
                >
                  {tab === 'all' ? 'All Sectors' : tab}
                </button>
              ))}
            </div>
          </div>

          {/* Industry Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIndustries.slice(0, 6).map((ind) => (
              <div
                key={ind.id}
                className="group relative bg-[#073B57] rounded-sm overflow-hidden border border-[#D8EFFA] hover:border-[#D9043E] shadow-md hover:shadow-xl transition-all duration-300 min-h-[300px] flex flex-col justify-end p-6"
              >
                <div className="absolute inset-0 z-0">
                  <SafeImage
                    src={IMAGES[ind.imageId].url}
                    alt={ind.title}
                    aspectRatio="auto"
                    containerClassName="w-full h-full"
                    overlay={true}
                    darkOverlayOpacity="bg-gradient-to-t from-[#073B57] via-[#073B57]/70 to-black/30 group-hover:via-[#073B57]/50"
                  />
                </div>

                <div className="relative z-10 space-y-2 text-white">
                  <span className="text-[10px] font-bold tracking-widest text-[#D9043E] uppercase bg-[#073B57]/90 px-2 py-0.5 rounded-sm inline-block border border-[#D9043E]/30">
                    {ind.category}
                  </span>
                  <h4 className="text-xl font-bold font-gotham text-white group-hover:text-[#D8EFFA] transition-colors">
                    {ind.title}
                  </h4>
                  <p className="text-xs text-[#D8EFFA] line-clamp-2">
                    {ind.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {ind.solutions.slice(0, 2).map((s, i) => (
                      <span key={i} className="text-[10px] bg-white/15 px-2 py-0.5 text-[#D8EFFA] rounded-sm">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('industries')}
              className="px-6 py-3 bg-[#EAF6FC] hover:bg-[#D8EFFA] text-[#073B57] text-xs font-bold tracking-widest uppercase rounded-sm border border-[#D8EFFA] inline-flex items-center gap-2 transition-colors"
            >
              <span>EXPLORE ALL INDUSTRY CATEGORIES</span>
              <ArrowRightIcon size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 08 - ABOUT & MISSION / VISION
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-[#EAF6FC] border-y border-[#D8EFFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#D9043E]" />
                <span className="text-xs font-black tracking-[0.2em] text-[#0877B5] uppercase">
                  ABOUT SSV COMMERCIAL SERVICES & INFRA
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#102A3A] font-gotham uppercase">
                THE FOUNDATION OF TRUST & OPERATIONAL DISCIPLINE
              </h2>

              <p className="text-sm sm:text-base text-[#3B586F] leading-relaxed">
                SSV recognizes that safety and security are fundamental to seamless operations. The company provides security and housekeeping solutions supported by trained personnel, modern technology, professional practices, and customer-centric service.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 bg-white border border-[#D8EFFA] rounded-sm space-y-2 shadow-sm">
                  <div className="text-xs font-black text-[#D9043E] uppercase tracking-wider">OUR MISSION</div>
                  <p className="text-xs text-[#3B586F] leading-relaxed">
                    To deliver uncompromising safety, cleanliness, and operational efficiency through trained professionals, innovative systems, and sustainable practices.
                  </p>
                </div>

                <div className="p-5 bg-white border border-[#D8EFFA] rounded-sm space-y-2 shadow-sm">
                  <div className="text-xs font-black text-[#0877B5] uppercase tracking-wider">OUR VISION</div>
                  <p className="text-xs text-[#3B586F] leading-relaxed">
                    To be the foremost trusted partner for commercial services and infrastructure, known for integrity, quality execution, and client satisfaction.
                  </p>
                </div>
              </div>

              <div>
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 bg-[#073B57] hover:bg-[#0877B5] text-white text-xs font-bold tracking-widest uppercase rounded-sm flex items-center gap-2 transition-colors border border-[#D8EFFA]"
                >
                  <span>READ COMPLETE CORPORATE PROFILE</span>
                  <ArrowRightIcon size={14} color="#D9043E" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <SafeImage
                src={IMAGES.professionalTeam.url}
                alt="SSV operational management and field supervisors"
                aspectRatio="video"
                containerClassName="rounded-sm shadow-xl border border-[#D8EFFA]"
                badge="GOVERNANCE & COMPLIANCE"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 09 - WHY SSV (5 VALUE PILLARS + 8 STRENGTHS)
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-[#D9043E]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#0877B5] uppercase">
                WHY ENTERPRISES CHOOSE SSV
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#102A3A] font-gotham uppercase">
              FIVE CORE VALUE PILLARS
            </h2>
            <p className="text-sm text-[#3B586F]">
              Structured governance, verified workforce, and reliable execution on every assignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {VALUE_PILLARS.map((p) => (
              <div
                key={p.number}
                className="p-6 bg-[#EAF6FC] border border-[#D8EFFA] rounded-sm space-y-3 hover:border-[#D9043E] transition-all group shadow-sm hover:shadow-md"
              >
                <span className="text-2xl font-black text-[#D9043E] font-mono">{p.number}</span>
                <h4 className="text-lg font-bold text-[#102A3A] group-hover:text-[#D9043E] transition-colors">{p.title}</h4>
                <p className="text-xs text-[#3B586F] leading-relaxed">{p.description}</p>
                <ul className="space-y-1 pt-2 border-t border-[#D8EFFA] text-[11px] text-[#102A3A]">
                  {p.details.slice(0, 2).map((d, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <CheckIcon size={12} color="#D9043E" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Qualitative Strengths Matrix */}
          <div className="bg-[#073B57] text-white p-8 rounded-sm">
            <div className="text-xs font-bold uppercase tracking-widest text-[#D9043E] mb-4">
              QUALITATIVE OPERATIONAL BENCHMARKS
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {QUALITATIVE_STRENGTHS.map((item, i) => (
                <div key={i} className="p-3.5 bg-[#08486A] border border-[#0F5A82] rounded-sm">
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#D9043E]" />
                    {item.title}
                  </div>
                  <p className="text-[11px] text-[#D8EFFA] mt-1 leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 10 - VALUE PILLARS
          ======================================================== */}
      <section className="py-20 bg-[#EAF6FC] border-t border-[#D8EFFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-[#D9043E]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#0877B5] uppercase">
                WHY CHOOSE SSV
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#102A3A] font-gotham uppercase">
              FIVE PILLARS OF OPERATIONAL ADVANTAGE
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {VALUE_PILLARS.map((vp) => (
              <div key={vp.number} className="bg-white border border-[#D8EFFA] p-5 rounded-sm space-y-2 relative shadow-sm">
                <div className="text-xs font-mono font-bold text-[#D9043E]">{vp.number}</div>
                <h4 className="text-base font-black text-[#102A3A] uppercase">{vp.title}</h4>
                <p className="text-xs text-[#3B586F] leading-relaxed pt-1">{vp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 11 - DIRECT CONTACT SHOWCASE
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-[#EAF6FC] text-[#102A3A] border-t-2 border-[#D9043E]" id="contact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D8EFFA] border border-[#BCE0F5] text-[#073B57] text-xs font-bold tracking-widest uppercase rounded-sm">
              DIRECT OPERATIONS CONTACT
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#102A3A] font-gotham uppercase">
              LET'S BUILD A SAFER,<br />
              <span className="text-[#D9043E]">CLEANER, BETTER</span> ENVIRONMENT.
            </h2>

            <p className="text-base sm:text-lg text-[#3B586F] leading-relaxed">
              Connect directly with our operational management in Dharashiv, Maharashtra for rapid security deployment, housekeeping services, and infrastructure project consultation.
            </p>
          </div>

          {/* 3 Core Primary Contact Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: CALL US */}
            <div 
              id="home-contact-card-call"
              className="bg-white border-2 border-[#D8EFFA] hover:border-[#D9043E] p-8 rounded-sm transition-all duration-300 flex flex-col justify-between group shadow-lg"
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
                  id="home-btn-call-now"
                  className="w-full py-3.5 bg-[#D9043E] hover:bg-[#B50334] text-white text-center font-bold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-red-950/20"
                >
                  <PhoneIcon size={14} color="#FFFFFF" />
                  <span>CALL NOW</span>
                </a>
              </div>
            </div>

            {/* Card 2: WHATSAPP US */}
            <div 
              id="home-contact-card-whatsapp"
              className="bg-white border-2 border-[#D8EFFA] hover:border-[#25D366] p-8 rounded-sm transition-all duration-300 flex flex-col justify-between group shadow-lg"
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
                    Fastest communication for sharing site photos, GPS coordinates, property layouts, and quick operational updates.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#D8EFFA]">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="home-btn-whatsapp-us"
                  className="w-full py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <WhatsappIcon size={16} color="#FFFFFF" />
                  <span>WHATSAPP US</span>
                </a>
              </div>
            </div>

            {/* Card 3: EMAIL US */}
            <div 
              id="home-contact-card-email"
              className="bg-white border-2 border-[#D8EFFA] hover:border-[#0877B5] p-8 rounded-sm transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#D8EFFA] text-[#0877B5] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MailIcon size={24} color="#0877B5" />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-widest text-[#0877B5] uppercase block">OFFICIAL EMAIL</span>
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
                  id="home-btn-send-email"
                  className="w-full py-3.5 bg-[#0877B5] hover:bg-[#073B57] border border-[#D8EFFA] text-white text-center font-bold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <MailIcon size={14} color="#FFFFFF" />
                  <span>SEND EMAIL</span>
                </a>
              </div>
            </div>
          </div>

          {/* Location & Offices Bar */}
          <div className="p-6 sm:p-8 bg-white border border-[#D8EFFA] rounded-sm flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 text-left">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FDF2F4] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPinIcon size={20} color="#D9043E" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#D9043E] uppercase tracking-wider">Head Office</div>
                  <div className="text-sm font-bold text-[#102A3A] mt-0.5">{COMPANY_INFO.headOffice.line1}, {COMPANY_INFO.headOffice.line2}</div>
                  <div className="text-xs text-[#3B586F]">{COMPANY_INFO.headOffice.state} - {COMPANY_INFO.headOffice.pincode}, {COMPANY_INFO.headOffice.country} (Dharashiv, Maharashtra)</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FDF2F4] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPinIcon size={20} color="#D9043E" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#D9043E] uppercase tracking-wider">Pune Office</div>
                  <div className="text-sm font-bold text-[#102A3A] mt-0.5">4th Floor, Tanna Tower, Law College Road</div>
                  <div className="text-xs text-[#3B586F]">Erandwane, Pune – 411004, Maharashtra, India.</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#D9043E] hover:bg-[#B50334] text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <span>VIEW FULL CONTACT HUB</span>
                <ArrowRightIcon size={14} />
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
