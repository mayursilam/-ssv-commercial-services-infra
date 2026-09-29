import React from 'react';

export interface ClientLogo {
  id: string;
  src: string;
  alt: string;
  scaleClass: string;
}

const CLIENT_LOGOS: ClientLogo[] = [
  {
    id: 'client-01',
    src: './assets/images/clients/client-01.png',
    alt: 'Enterprise Client Partner - Industrial & Commercial Facility',
    scaleClass: 'scale-[1.28] sm:scale-[1.30] lg:scale-[1.32]',
  },
  {
    id: 'client-02',
    src: './assets/images/clients/client-02.png',
    alt: 'Enterprise Client Partner - Corporate Complex & Infrastructure',
    scaleClass: 'scale-[0.88] sm:scale-[0.90]',
  },
  {
    id: 'client-03',
    src: './assets/images/clients/client-03.png',
    alt: 'Enterprise Client Partner - Manufacturing & Logistics Park',
    scaleClass: 'scale-[0.94] sm:scale-[0.95]',
  },
  {
    id: 'client-04',
    src: './assets/images/clients/client-04.png',
    alt: 'Enterprise Client Partner - Commercial Estate & Facility',
    scaleClass: 'scale-[1.22] sm:scale-[1.24] lg:scale-[1.26]',
  },
  {
    id: 'client-05',
    src: './assets/images/clients/client-05.png',
    alt: 'Enterprise Client Partner - Infrastructure & Utilities Project',
    scaleClass: 'scale-[1.00]',
  },
  {
    id: 'client-06',
    src: './assets/images/clients/client-06.png',
    alt: 'Enterprise Client Partner - Institutional & Municipal Site',
    scaleClass: 'scale-[0.84] sm:scale-[0.86]',
  },
  {
    id: 'client-07',
    src: './assets/images/clients/client-07.png',
    alt: 'Enterprise Client Partner - Industrial Manufacturing Estate',
    scaleClass: 'scale-[0.94] sm:scale-[0.96]',
  },
];

export const ClientLogoShowcase: React.FC = () => {
  return (
    <section
      aria-label="Trusted Enterprise Clients and Partners"
      className="client-showcase-section py-10 sm:py-12 lg:py-14 bg-[#EAF6FC] border-b border-[#D8EFFA] relative overflow-hidden"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 text-center">
        <div className="max-w-2xl mx-auto space-y-1.5 sm:space-y-2">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-[#D9043E] inline-block" />
            <span className="text-[11px] sm:text-xs font-black tracking-[0.2em] text-[#0877B5] uppercase">
              ENTERPRISE CLIENT PORTFOLIO
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-[#102A3A] font-gotham uppercase">
            TRUSTED BY CLIENTS & PARTNERS
          </h2>

          <p className="text-xs sm:text-sm text-[#3B586F] leading-relaxed max-w-xl mx-auto">
            Trusted partnerships built on reliability, service excellence, and long-term collaboration.
          </p>
        </div>
      </div>

      {/* Single-Track Continuous Infinite Marquee Viewport */}
      <div className="marquee-viewport relative w-full overflow-hidden select-none">
        {/* Subtle Edge Fades for Seamless Polish */}
        <div
          aria-hidden="true"
          className="marquee-fade-left absolute left-0 top-0 bottom-0 w-12 sm:w-20 lg:w-32 bg-gradient-to-r from-[#EAF6FC] to-transparent z-10 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="marquee-fade-right absolute right-0 top-0 bottom-0 w-12 sm:w-20 lg:w-32 bg-gradient-to-l from-[#EAF6FC] to-transparent z-10 pointer-events-none"
        />

        {/* Marquee Track: Moving Right to Left */}
        <div className="marquee-track flex w-max items-center">
          {/* Sequence 1 (Primary 7 Logos) */}
          <div className="marquee-sequence flex items-center shrink-0 gap-7 sm:gap-11 lg:gap-16 pr-7 sm:pr-11 lg:pr-16">
            {CLIENT_LOGOS.map((logo, index) => (
              <div
                key={`primary-${logo.id}-${index}`}
                className="client-logo-wrapper w-[120px] sm:w-[150px] lg:w-[180px] h-9 sm:h-11 lg:h-13 flex items-center justify-center shrink-0"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="eager"
                  decoding="async"
                  className={`client-logo-img max-h-full max-w-full object-contain filter grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform-gpu ${logo.scaleClass}`}
                />
              </div>
            ))}
          </div>

          {/* Sequence 2 (Exact Duplicate for Infinite Loop) */}
          <div
            aria-hidden="true"
            className="marquee-sequence flex items-center shrink-0 gap-7 sm:gap-11 lg:gap-16 pr-7 sm:pr-11 lg:pr-16"
          >
            {CLIENT_LOGOS.map((logo, index) => (
              <div
                key={`duplicate-${logo.id}-${index}`}
                className="client-logo-wrapper w-[120px] sm:w-[150px] lg:w-[180px] h-9 sm:h-11 lg:h-13 flex items-center justify-center shrink-0"
              >
                <img
                  src={logo.src}
                  alt=""
                  loading="eager"
                  decoding="async"
                  className={`client-logo-img max-h-full max-w-full object-contain filter grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform-gpu ${logo.scaleClass}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
