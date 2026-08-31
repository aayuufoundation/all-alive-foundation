import React from 'react';
import { VERTICALS } from '../data/content';
import { VerticalId } from '../types';
import { ArrowRight, MapPin } from 'lucide-react';

interface FourVerticalsProps {
  onSelectVerticalForDonation: (verticalId: VerticalId) => void;
  onExploreVerticalWork: (verticalId: VerticalId) => void;
}

export const FourVerticals: React.FC<FourVerticalsProps> = ({
  onSelectVerticalForDonation,
  onExploreVerticalWork
}) => {
  return (
    <section id="verticals" className="py-20 sm:py-28 bg-[#F9FAFB] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF7EE] text-[#1B5E20] text-xs font-medium mb-3">
              <span>Verified Causes</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] tracking-tight leading-tight">
              One mission. <br />
              <span className="italic font-normal text-[#107048]">Four essential causes.</span>
            </h2>
          </div>
          <p className="text-base text-[#374151] max-w-md font-sans leading-relaxed">
            Support verified field interventions addressing animal rescue, child welfare, tree plantation, and women's empowerment.
          </p>
        </div>

        {/* 4 Verticals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VERTICALS.map((v) => (
            <div
              key={v.id}
              className="bg-white rounded-3xl p-5 border border-[#E5E7EB] hover:border-[#107048]/50 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 mb-5">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#111827] text-xs font-semibold px-2.5 py-1 rounded-full shadow-xs">
                    {v.location}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl font-bold text-[#111827] mb-1">
                  {v.name}
                </h3>
                <p className="text-sm font-medium text-[#107048] mb-3">
                  {v.subtitle}
                </p>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
                  {v.description}
                </p>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-[#F3F4F6] flex items-center justify-between">
                <button
                  onClick={() => onSelectVerticalForDonation(v.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#107048] hover:text-[#0B5A38] transition-colors cursor-pointer"
                >
                  <span>Support Vertical</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] font-medium text-[#6B7280]">80G Tax Benefit</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
