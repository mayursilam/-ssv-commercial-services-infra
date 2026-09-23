import React from 'react';
import { SafeImage } from '../components/SafeImage';
import { 
  ShieldIcon, SparklesIcon, ConstructionIcon, ArrowRightIcon, 
  CheckIcon, PhoneIcon 
} from '../components/Icons';
import { 
  CORE_PILLARS, SECURITY_SERVICES_LIST, 
  HOUSEKEEPING_SERVICES_LIST, INFRASTRUCTURE_MODULES 
} from '../data/content';
import { IMAGES } from '../data/images';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
  onOpenEnquiry?: (service?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white text-[#102A3A]">
      {/* Services Banner */}
      <section className="relative py-20 lg:py-28 bg-[#073B57] text-white border-b-2 border-[#D9043E] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src={IMAGES.facilityManagement.url}
            alt="SSV Services Overview"
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
              CAPABILITY MATRIX
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-gotham uppercase tracking-tight text-white">
              INTEGRATED COMMERCIAL & INFRA SERVICES
            </h1>
            <p className="text-base sm:text-lg text-[#D8EFFA] leading-relaxed">
              Three synchronized service divisions designed to manage the safety, cleanliness, and structural infrastructure of commercial, residential, and industrial environments.
            </p>
          </div>
        </div>
      </section>

      {/* Pillar 01: Security Services */}
      <section className="py-20 lg:py-24 bg-white" id="security-overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#D9043E]" />
                <span className="text-xs font-black tracking-[0.2em] text-[#0877B5] uppercase">
                  DIVISION 01
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#102A3A] font-gotham uppercase">
                SECURITY SERVICES
              </h2>
              <p className="text-sm sm:text-base text-[#3B586F] leading-relaxed">
                Manned guarding, executive protection, electronic CCTV surveillance, and strict access controls preventing unauthorized breaches and safeguarding assets 24/7.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('security')}
                  className="px-6 py-3 bg-[#073B57] hover:bg-[#0877B5] text-white text-xs font-bold tracking-widest uppercase rounded-sm flex items-center gap-2 transition-colors border border-[#D8EFFA]"
                >
                  <span>EXPLORE SECURITY DIVISION</span>
                  <ArrowRightIcon size={14} color="#D9043E" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <SafeImage
                src={IMAGES.securityGuard.url}
                alt="Security Services by SSV"
                aspectRatio="video"
                containerClassName="rounded-sm shadow-xl border border-[#D8EFFA]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SECURITY_SERVICES_LIST.map((srv) => (
              <div key={srv.id} className="p-4 bg-[#EAF6FC] border border-[#D8EFFA] rounded-sm">
                <div className="text-xs font-mono font-bold text-[#D9043E]">{srv.number}</div>
                <h4 className="text-sm font-bold text-[#102A3A] mt-1">{srv.title}</h4>
                <p className="text-xs text-[#3B586F] mt-1 line-clamp-2">{srv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillar 02: Housekeeping Services */}
      <section className="py-20 lg:py-24 bg-[#EAF6FC] border-t border-[#D8EFFA]" id="housekeeping-overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#0877B5]" />
                <span className="text-xs font-black tracking-[0.2em] text-[#0877B5] uppercase">
                  DIVISION 02
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#102A3A] font-gotham uppercase">
                HOUSEKEEPING SERVICES
              </h2>
              <p className="text-sm sm:text-base text-[#3B586F] leading-relaxed">
                Comprehensive commercial and domestic cleaning, industrial & factory maintenance, deep cleaning & sanitization, waste segregation, and eco-friendly pest control.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('housekeeping')}
                  className="px-6 py-3 bg-[#073B57] hover:bg-[#0877B5] text-white text-xs font-bold tracking-widest uppercase rounded-sm flex items-center gap-2 transition-colors border border-[#D8EFFA]"
                >
                  <span>EXPLORE HOUSEKEEPING DIVISION</span>
                  <ArrowRightIcon size={14} color="#0877B5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <SafeImage
                src={IMAGES.housekeepingStaff.url}
                alt="Housekeeping Services by SSV"
                aspectRatio="video"
                containerClassName="rounded-sm shadow-xl border border-[#D8EFFA]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HOUSEKEEPING_SERVICES_LIST.map((srv) => (
              <div key={srv.id} className="p-4 bg-white border border-[#D8EFFA] rounded-sm">
                <div className="text-xs font-mono font-bold text-[#0877B5]">{srv.number}</div>
                <h4 className="text-sm font-bold text-[#102A3A] mt-1">{srv.title}</h4>
                <p className="text-xs text-[#3B586F] mt-1 line-clamp-2">{srv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillar 03: Infra Services */}
      <section className="py-20 lg:py-24 bg-[#073B57] text-white border-t-2 border-[#D9043E]" id="infra-overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#D9043E]" />
                <span className="text-xs font-black tracking-[0.2em] text-[#D8EFFA] uppercase">
                  DIVISION 03
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-gotham uppercase">
                INFRA SERVICES & CIVIL ENGINEERING
              </h2>
              <p className="text-sm sm:text-base text-[#D8EFFA] leading-relaxed">
                Strategic civil works including complete turnkey projects, utility shifting, road construction, and specialized industrial site solutions executed with heavy machinery and certified engineering oversight.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('infrastructure')}
                  className="px-6 py-3 bg-[#D9043E] hover:bg-[#B50334] text-white text-xs font-bold tracking-widest uppercase rounded-sm flex items-center gap-2 transition-colors shadow-md"
                >
                  <span>EXPLORE INFRASTRUCTURE DIVISION</span>
                  <ArrowRightIcon size={14} />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <SafeImage
                src={IMAGES.constructionSite.url}
                alt="Infra Services by SSV"
                aspectRatio="video"
                containerClassName="rounded-sm shadow-xl border border-[#0F5A82]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INFRASTRUCTURE_MODULES.map((mod) => (
              <div key={mod.id} className="p-5 bg-[#08486A] border border-[#0F5A82] rounded-sm space-y-2">
                <div className="text-xs font-mono font-bold text-[#D9043E]">{mod.number}</div>
                <h4 className="text-sm font-bold text-white uppercase">{mod.title}</h4>
                <p className="text-xs text-[#D8EFFA] line-clamp-3">{mod.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-16 bg-[#EAF6FC] border-t border-[#D8EFFA] text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl font-black text-[#102A3A] font-gotham uppercase">
            NEED A CUSTOMIZED SERVICE COMBINATION?
          </h3>
          <p className="text-xs sm:text-sm text-[#3B586F]">
            Our team can bundle security personnel, daily housekeeping, and facility civil upkeep under a consolidated service plan.
          </p>
          <div className="pt-2">
            <button
              id="services-facility-contact-btn"
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 bg-[#D9043E] hover:bg-[#B50334] text-white text-xs font-black tracking-widest uppercase rounded-sm inline-flex items-center gap-2 transition-all shadow-md"
            >
              <span>CONNECT WITH OPERATIONS</span>
              <ArrowRightIcon size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
