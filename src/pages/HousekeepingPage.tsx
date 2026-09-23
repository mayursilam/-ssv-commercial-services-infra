import React from 'react';
import { SafeImage } from '../components/SafeImage';
import { 
  SparklesIcon, BuildingIcon, DropletsIcon, TrashIcon, LeafIcon, 
  SprayIcon, CheckIcon, ArrowRightIcon, PhoneIcon 
} from '../components/Icons';
import { HOUSEKEEPING_SERVICES_LIST, COMPANY_INFO } from '../data/content';
import { IMAGES } from '../data/images';

interface HousekeepingPageProps {
  onNavigate?: (page: string) => void;
  onOpenEnquiry?: (service?: string) => void;
}

export const HousekeepingPage: React.FC<HousekeepingPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white text-[#102A3A]">
      {/* Housekeeping Banner */}
      <section className="relative py-20 lg:py-28 bg-[#073B57] text-white border-b-2 border-[#0877B5] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src={IMAGES.housekeepingStaff.url}
            alt="SSV Housekeeping & Commercial Cleaning Services"
            aspectRatio="auto"
            containerClassName="w-full h-full"
            overlay={true}
            darkOverlayOpacity="bg-[#073B57]/85"
          />
          <div className="absolute inset-0 tech-grid-pattern-dark opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0877B5]/20 border border-[#0877B5]/40 text-white text-xs font-bold tracking-widest uppercase rounded-sm">
              DIVISION 02 // HOUSEKEEPING & FACILITY UPKEEP
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-gotham uppercase tracking-tight text-white">
              CLEANER SPACES.<br />BETTER ENVIRONMENTS.
            </h1>
            <p className="text-base sm:text-lg text-[#D8EFFA] leading-relaxed">
              Modern cleaning machinery, eco-friendly cleaning practices, and trained housekeeping staff delivering spotless hygiene across commercial, factory, and residential spaces.
            </p>
            <div className="pt-2">
              <button
                id="housekeeping-hero-proposal-btn"
                onClick={() => {
                  if (onNavigate) onNavigate('contact');
                }}
                className="px-8 py-4 bg-[#D9043E] hover:bg-[#B50334] text-white text-xs font-black tracking-widest uppercase rounded-sm inline-flex items-center gap-2 transition-all shadow-xl"
              >
                <span>REQUEST HOUSEKEEPING PROPOSAL</span>
                <ArrowRightIcon size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Housekeeping Specializations */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-[0.2em] text-[#0877B5] uppercase">
              HYGIENE & CLEANING PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#102A3A] font-gotham uppercase">
              SYSTEMATIC FACILITY CARE
            </h2>
            <p className="text-sm text-[#3B586F]">
              From daily corporate workspace upkeep to industrial and factory cleaning and pest management.
            </p>
          </div>

          <div className="space-y-12">
            {HOUSEKEEPING_SERVICES_LIST.map((service, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 bg-[#EAF6FC] border border-[#D8EFFA] rounded-sm hover:border-[#0877B5] transition-all`}
                >
                  <div className={`lg:col-span-6 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono font-bold text-[#0877B5] px-2 py-0.5 bg-[#D8EFFA] rounded">
                        {service.number}
                      </span>
                      <span className="text-xs font-bold text-[#0877B5] uppercase tracking-wider">
                        {service.tagline}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-[#102A3A] font-gotham uppercase">
                      {service.title}
                    </h3>

                    <p className="text-sm text-[#3B586F] leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-2">
                      <div className="text-xs font-bold text-[#102A3A] uppercase tracking-wider mb-2">
                        Execution Highlights:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#102A3A]">
                            <CheckIcon size={14} color="#0877B5" className="mt-0.5 flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3">
                      <button
                        onClick={() => {
                          if (onNavigate) onNavigate('contact');
                        }}
                        className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#0877B5] hover:text-[#D9043E] uppercase hover:underline"
                      >
                        <span>Contact for {service.title}</span>
                        <ArrowRightIcon size={12} />
                      </button>
                    </div>
                  </div>

                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <SafeImage
                      src={IMAGES[service.imageId].url}
                      alt={service.title}
                      aspectRatio="video"
                      containerClassName="rounded-sm shadow-md border border-[#D8EFFA]"
                      badge="CERTIFIED HYGIENE"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Housekeeping Commitments */}
      <section className="py-16 bg-[#073B57] text-white border-t border-[#0F5A82]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
          <div className="p-5 bg-[#08486A] border border-[#0F5A82] rounded-sm space-y-1.5">
            <h4 className="text-sm font-bold text-white uppercase">Deep Cleaning & Sanitization</h4>
            <p className="text-xs text-[#D8EFFA]">Comprehensive deep cleaning and sanitization solutions.</p>
          </div>
          <div className="p-5 bg-[#08486A] border border-[#0F5A82] rounded-sm space-y-1.5">
            <h4 className="text-sm font-bold text-white uppercase">Eco-Friendly Cleaning Practices</h4>
            <p className="text-xs text-[#D8EFFA]">Eco-friendly, non-toxic cleaning practices safe for indoor air quality.</p>
          </div>
          <div className="p-5 bg-[#08486A] border border-[#0F5A82] rounded-sm space-y-1.5">
            <h4 className="text-sm font-bold text-white uppercase">Customized Housekeeping Plans</h4>
            <p className="text-xs text-[#D8EFFA]">Daily checklists, shift schedules, and regular supervisor spot audits.</p>
          </div>
          <div className="p-5 bg-[#08486A] border border-[#0F5A82] rounded-sm space-y-1.5">
            <h4 className="text-sm font-bold text-white uppercase">Waste Segregation</h4>
            <p className="text-xs text-[#D8EFFA]">Environmentally compliant source segregation and hygienic transfer.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
