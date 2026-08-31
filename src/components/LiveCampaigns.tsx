import React, { useState } from 'react';
import { FOUNDATION_CAMPAIGNS } from '../data/content';
import { FoundationCampaign, VerticalId } from '../types';
import { Heart, ArrowRight, ShieldCheck, X } from 'lucide-react';

interface LiveCampaignsProps {
  onDonateToCampaign: (verticalId: VerticalId, campaignTitle?: string) => void;
}

export const LiveCampaigns: React.FC<LiveCampaignsProps> = ({ onDonateToCampaign }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedCampaign, setSelectedCampaign] = useState<FoundationCampaign | null>(null);

  const categories = [
    'All',
    'Animal Rescue',
    'Child Welfare',
    'Tree Plantation',
    "Women's Support",
    'Crisis & Emergency'
  ];

  const filteredCampaigns = activeCategory === 'All'
    ? FOUNDATION_CAMPAIGNS.slice(0, 6)
    : FOUNDATION_CAMPAIGNS.filter((c) => c.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="campaigns" className="py-20 sm:py-28 bg-[#FCFCF9] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Top Badge & Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF7EE] text-[#1B5E20] text-xs font-semibold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#107048] animate-pulse"></span>
            <span>LIVE NOW</span>
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#111827] tracking-tight leading-[1.1] mb-3">
            Live campaigns, <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#107048] font-serif">
              serving right now.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#4B5563] max-w-lg mx-auto font-sans leading-relaxed">
            Directly support our 4 core foundation verticals. Every single rupee is audited with 100% direct field execution.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center mb-12 overflow-x-auto no-scrollbar pb-2">
          <div className="inline-flex items-center gap-2 p-1 rounded-full bg-white border border-[#E5E7EB] shadow-xs">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-150 whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? 'bg-[#107048] text-white shadow-xs font-semibold'
                      : 'text-[#4B5563] hover:text-[#111827] hover:bg-neutral-100/70'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 6 Campaigns Grid (3 Columns Desktop, 2 Tablet, 1 Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredCampaigns.slice(0, 6).map((camp) => {
            const percentage = Math.min(100, Math.round((camp.raised / camp.goal) * 100));
            return (
              <div
                key={camp.id}
                onClick={() => setSelectedCampaign(camp)}
                className="bg-white rounded-3xl border border-[#E5E7EB] overflow-hidden hover:border-[#107048]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  {/* Top Image Frame with Pill Tag */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                    <img
                      src={camp.image}
                      alt={camp.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.src = 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80';
                      }}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Top Tag Pill */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#111827] text-[10px] sm:text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-xs border border-black/5">
                      {camp.tag}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 pb-2">
                    <h3 className="font-sans text-base sm:text-lg font-bold text-[#111827] leading-snug group-hover:text-[#107048] transition-colors line-clamp-2 min-h-[2.8rem] mb-1.5">
                      {camp.title}
                    </h3>

                    <p className="text-xs text-[#6B7280] font-sans mb-4">
                      {camp.lead}
                    </p>

                    {/* Green Progress Bar */}
                    <div className="w-full h-2 bg-[#E5E7EB] rounded-full overflow-hidden mb-3">
                      <div
                        className="h-full bg-[#107048] rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>

                    {/* Metric Row: Raised on Left, Donors on Right */}
                    <div className="flex items-baseline justify-between pt-1">
                      <div>
                        <div className="font-sans text-lg sm:text-xl font-bold text-[#111827] leading-none tracking-tight">
                          ₹{camp.raised.toLocaleString('en-IN')}
                        </div>
                        <div className="text-[11px] text-[#6B7280] font-sans mt-0.5">
                          raised of ₹{camp.goal.toLocaleString('en-IN')}
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="font-sans text-sm font-bold text-[#111827]">
                          {camp.donorsCount.toLocaleString('en-IN')} donors
                        </div>
                        <div className="text-[10px] text-[#107048] font-semibold mt-0.5">
                          {percentage}% funded
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Card Action Strip */}
                <div className="p-5 sm:p-6 pt-3 mt-2 border-t border-[#F3F4F6] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#6B7280] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#107048]" />
                    80G Tax Benefit
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDonateToCampaign(camp.verticalId, camp.title);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold px-4 py-2 rounded-full bg-[#EBF7EE] text-[#107048] hover:bg-[#107048] hover:text-white transition-all duration-200"
                  >
                    <span>Support</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Campaign Detail & Support Modal */}
      {selectedCampaign && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl">
            <button
              onClick={() => setSelectedCampaign(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-[#111827] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-neutral-100">
              <img
                src={selectedCampaign.image}
                alt={selectedCampaign.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80';
                }}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF7EE] text-[#1B5E20] text-xs font-bold uppercase mb-3">
              {selectedCampaign.tag} • {selectedCampaign.location}
            </div>

            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#111827] mb-2 leading-tight">
              {selectedCampaign.title}
            </h3>

            <p className="text-xs text-[#6B7280] mb-4">
              {selectedCampaign.lead}
            </p>

            <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
              {selectedCampaign.description}
            </p>

            {/* Metrics */}
            <div className="bg-neutral-50 rounded-2xl p-4 border border-[#E5E7EB] mb-6">
              <div className="flex justify-between text-sm font-semibold text-[#111827] mb-1.5">
                <span>₹{selectedCampaign.raised.toLocaleString('en-IN')} raised</span>
                <span>Goal: ₹{selectedCampaign.goal.toLocaleString('en-IN')}</span>
              </div>
              <div className="w-full h-2.5 bg-neutral-200 rounded-full overflow-hidden mb-2">
                <div
                  className="h-full bg-[#107048] rounded-full"
                  style={{
                    width: `${Math.min(100, Math.round((selectedCampaign.raised / selectedCampaign.goal) * 100))}%`
                  }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-[#6B7280]">
                <span>{selectedCampaign.donorsCount.toLocaleString('en-IN')} supporters</span>
                <span className="text-[#107048] font-medium">100% direct field utilization</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#E5E7EB]">
              <span className="text-xs text-[#6B7280]">Instant 50% Section 80G Tax Exemption</span>
              <button
                onClick={() => {
                  const vId = selectedCampaign.verticalId;
                  const title = selectedCampaign.title;
                  setSelectedCampaign(null);
                  onDonateToCampaign(vId, title);
                }}
                className="px-6 py-3 bg-[#107048] hover:bg-[#0B5A38] text-white text-sm font-semibold rounded-full shadow-xs transition-all cursor-pointer"
              >
                Donate to This Cause
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
