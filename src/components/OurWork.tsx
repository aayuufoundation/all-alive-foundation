import React, { useState } from 'react';
import { WORK_INITIATIVES } from '../data/content';
import { VerticalId, WorkInitiative } from '../types';
import { MapPin, ArrowRight, X } from 'lucide-react';

interface OurWorkProps {
  selectedFilter?: string;
  onDonateToCause?: (verticalId: VerticalId) => void;
}

export const OurWork: React.FC<OurWorkProps> = ({ selectedFilter, onDonateToCause }) => {
  const [activeCategory, setActiveCategory] = useState<string>(selectedFilter || 'All');
  const [activeDetailModal, setActiveDetailModal] = useState<WorkInitiative | null>(null);

  const categories = [
    'All',
    'Animal rescue',
    'Animal treatment',
    'Animal feeding',
    'Education support',
    'Food assistance',
    'Medical assistance',
    'Tree plantation',
    "Women's support"
  ];

  const filteredInitiatives = activeCategory === 'All'
    ? WORK_INITIATIVES
    : WORK_INITIATIVES.filter((item) => item.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="our-work" className="py-20 sm:py-28 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF7EE] text-[#1B5E20] text-xs font-medium mb-3">
              <span>Field Operations</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] tracking-tight">
              Live initiatives, <br />
              <span className="italic font-normal text-[#107048]">making a real difference.</span>
            </h2>
          </div>
          <p className="text-base text-[#374151] max-w-md font-sans leading-relaxed">
            Discover active grassroots programs supported by our generous donor community.
          </p>
        </div>

        {/* Categories Filter Tabs */}
        <div className="mb-10 overflow-x-auto no-scrollbar pb-2">
          <div className="flex items-center gap-2 min-w-max">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-150 ${
                    isSelected
                      ? 'bg-[#107048] text-white shadow-xs'
                      : 'bg-neutral-100 text-[#4B5563] hover:bg-neutral-200'
                  }`}
                >
                  {cat === 'All' ? 'All Causes' : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredInitiatives.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-3xl border border-[#E5E7EB] overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="p-4 sm:p-5">
                {/* Photo */}
                <div className="relative overflow-hidden aspect-[16/10] rounded-2xl bg-neutral-100 mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-xs text-white text-xs font-medium px-3 py-1 rounded-full">
                    {item.category}
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs text-[#6B7280] mb-2 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#107048]" />
                  <span>{item.location}</span>
                </div>

                {/* Title & Description */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111827] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed line-clamp-2 mb-4">
                  {item.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="p-4 sm:p-5 pt-0 flex items-center justify-between">
                <button
                  onClick={() => setActiveDetailModal(item)}
                  className="text-xs font-semibold text-[#107048] hover:text-[#0B5A38] inline-flex items-center gap-1"
                >
                  <span>Read details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onDonateToCause && onDonateToCause(item.verticalId)}
                  className="px-4 py-2 bg-[#EBF7EE] text-[#107048] hover:bg-[#107048] hover:text-white text-xs font-semibold rounded-full transition-all"
                >
                  Donate
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Modal View */}
      {activeDetailModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveDetailModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-[#111827]"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-6">
              <img
                src={activeDetailModal.image}
                alt={activeDetailModal.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF7EE] text-[#1B5E20] text-xs font-medium mb-3">
              {activeDetailModal.category} • {activeDetailModal.location}
            </div>
            <h3 className="font-serif text-3xl font-bold text-[#111827] mb-4">
              {activeDetailModal.title}
            </h3>
            <p className="text-base text-[#4B5563] leading-relaxed mb-6">
              {activeDetailModal.description}
            </p>
            <div className="flex items-center justify-between pt-6 border-t border-[#E5E7EB]">
              <span className="text-xs text-[#6B7280]">0% platform fee • Verified by All Alive</span>
              <button
                onClick={() => {
                  const vId = activeDetailModal.verticalId;
                  setActiveDetailModal(null);
                  if (onDonateToCause) onDonateToCause(vId);
                }}
                className="px-6 py-3 bg-[#107048] hover:bg-[#0B5A38] text-white text-sm font-semibold rounded-full shadow-xs"
              >
                Support This Cause
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
