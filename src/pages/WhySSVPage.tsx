import React from 'react';
import { SafeImage } from '../components/SafeImage';
import { CheckIcon, ArrowRightIcon, ShieldIcon, SparklesIcon, ConstructionIcon } from '../components/Icons';
import { VALUE_PILLARS, QUALITATIVE_STRENGTHS, COMPANY_INFO } from '../data/content';
import { IMAGES } from '../data/images';

interface WhySSVPageProps {
  onNavigate?: (page: string) => void;
  onOpenEnquiry?: () => void;
}

export const WhySSVPage: React.FC<WhySSVPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white text-[#102A3A]">
      {/* Banner */}
      <section className="relative py-20 lg:py-28 bg-[#073B57] text-white border-b-2 border-[#D9043E] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src={IMAGES.professionalTeam.url}
            alt="Why Choose SSV Commercial Services & Infra"
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
              VALUE PROPOSITION
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-gotham uppercase tracking-tight text-white">
              WHY SSV COMMERCIAL SERVICES & INFRA
            </h1>
            <p className="text-base sm:text-lg text-[#D8EFFA] leading-relaxed">
              We stand apart through disciplined governance, trained and verified manpower, advanced technology & equipment, transparent reporting, and turnkey execution.
            </p>
          </div>
        </div>
      </section>

      {/* 5 Value Blocks */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-[0.2em] text-[#D9043E] uppercase">
              THE FIVE PILLARS OF EXCELLENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#102A3A] font-gotham uppercase">
              CORE OPERATIONAL ADVANTAGES
            </h2>
          </div>

          <div className="space-y-8">
            {VALUE_PILLARS.map((vp) => (
              <div
                key={vp.number}
                className="p-8 bg-[#EAF6FC] border border-[#D8EFFA] hover:border-[#D9043E] rounded-sm transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-1">
                    <span className="text-3xl font-black text-[#D9043E] font-mono">{vp.number}</span>
                  </div>
                  <div className="lg:col-span-6 space-y-2">
                    <h3 className="text-2xl font-bold text-[#102A3A] font-gotham uppercase">{vp.title}</h3>
                    <p className="text-sm text-[#3B586F] leading-relaxed">{vp.description}</p>
                  </div>
                  <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[#D8EFFA] lg:pl-6 pt-4 lg:pt-0 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#102A3A]">Operational Standard:</div>
                    <div className="space-y-1.5">
                      {vp.details.map((d, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#3B586F]">
                          <CheckIcon size={14} color="#D9043E" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 Qualitative Strengths */}
      <section className="py-20 bg-[#EAF6FC] border-y border-[#D8EFFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold tracking-[0.2em] text-[#0877B5] uppercase">
              QUALITATIVE STANDARDS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#102A3A] font-gotham uppercase">
              EIGHT REASONS CLIENTS RELY ON SSV
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUALITATIVE_STRENGTHS.map((str, i) => (
              <div key={i} className="p-6 bg-white border border-[#D8EFFA] rounded-sm shadow-sm space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#FDF2F4] text-[#D9043E] flex items-center justify-center font-bold text-xs font-mono">
                  0{i + 1}
                </div>
                <h4 className="text-base font-bold text-[#102A3A]">{str.title}</h4>
                <p className="text-xs text-[#3B586F] leading-relaxed">{str.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Consultation CTA */}
      <section className="py-16 bg-white border-t border-[#D8EFFA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-black text-[#102A3A] font-gotham uppercase">
            READY TO DISCUSS YOUR FACILITY OR INFRASTRUCTURE REQUIREMENTS?
          </h3>
          <p className="text-sm text-[#3B586F] leading-relaxed max-w-2xl mx-auto">
            Connect directly with our operational management in Dharashiv for tailored security staffing, housekeeping maintenance, or turnkey civil project consultations.
          </p>
          <div>
            <button
              id="why-schedule-evaluation-btn"
              onClick={() => {
                if (onNavigate) onNavigate('contact');
              }}
              className="px-8 py-4 bg-[#D9043E] hover:bg-[#B50334] text-white text-xs font-bold uppercase tracking-widest rounded-sm inline-flex items-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <span>SCHEDULE A SITE EVALUATION</span>
              <ArrowRightIcon size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
