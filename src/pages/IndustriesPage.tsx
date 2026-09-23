import React, { useState } from 'react';
import { SafeImage } from '../components/SafeImage';
import { ArrowRightIcon, CheckIcon } from '../components/Icons';
import { INDUSTRIES_LIST, COMPANY_INFO } from '../data/content';
import { IMAGES } from '../data/images';

interface IndustriesPageProps {
  onNavigate?: (page: string) => void;
  onOpenEnquiry?: (service?: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Commercial', 'Industrial', 'Residential', 'Retail', 'Hospitality', 'Healthcare', 'Infrastructure'];

  const filtered = selectedCategory === 'all'
    ? INDUSTRIES_LIST
    : INDUSTRIES_LIST.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="bg-white text-[#102A3A]">
      {/* Banner */}
      <section className="relative py-20 lg:py-28 bg-[#073B57] text-white border-b-2 border-[#D9043E] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src={IMAGES.commercialArchitecture.url}
            alt="SSV Industries Served"
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
              SECTORS & ENVIRONMENTS
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-gotham uppercase tracking-tight text-white">
              INDUSTRIES WHERE WE SERVE
            </h1>
            <p className="text-base sm:text-lg text-[#D8EFFA] leading-relaxed">
              Every industry carries distinct operational risks, hygiene standards, and structural demands. SSV engineers customized service packages tailored to specific sector environments.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Explorer */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-12 border-b border-[#D8EFFA] pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#D9043E] text-white shadow-md'
                    : 'bg-[#EAF6FC] text-[#3B586F] hover:bg-[#D8EFFA] border border-[#D8EFFA]'
                }`}
              >
                {cat === 'all' ? 'All Industries' : cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((ind) => (
              <div
                key={ind.id}
                className="bg-white border border-[#D8EFFA] hover:border-[#D9043E] rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <SafeImage
                      src={IMAGES[ind.imageId].url}
                      alt={ind.title}
                      aspectRatio="auto"
                      containerClassName="w-full h-full"
                    />
                    <div className="absolute top-3 left-3 bg-[#073B57] text-white px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                      {ind.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-[#102A3A] group-hover:text-[#D9043E] transition-colors font-gotham uppercase">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-[#3B586F] leading-relaxed">
                      {ind.description}
                    </p>

                    <div className="pt-2 border-t border-[#EAF6FC] space-y-1.5">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#102A3A]">
                        Tailored Service Bundle:
                      </div>
                      <div className="space-y-1">
                        {ind.solutions.map((sol, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-[#3B586F]">
                            <CheckIcon size={12} color="#D9043E" />
                            <span>{sol}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => {
                      if (onNavigate) onNavigate('contact');
                    }}
                    className="w-full py-2.5 bg-[#EAF6FC] hover:bg-[#D9043E] hover:text-white text-[#102A3A] text-xs font-bold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2 border border-[#D8EFFA]"
                  >
                    <span>Contact Operations Team</span>
                    <ArrowRightIcon size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
