import React from 'react';
import { ShieldCheck, Heart, Users, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F9FAFB] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF7EE] text-[#1B5E20] text-xs font-medium mb-3">
            <span>Our Purpose</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] tracking-tight leading-tight mb-4">
            Compassion without boundaries, <br />
            <span className="italic font-normal text-[#107048]">for every living being.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
            All Alive Foundation exists to bridge urgent relief to vulnerable lives across India — protecting animals, children, nature, and women with zero overhead deduction.
          </p>
        </div>

        {/* 3 Minimal Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E7EB] shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#EBF7EE] text-[#107048] flex items-center justify-center mb-6">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#111827] mb-2">
              Direct Field Care
            </h3>
            <p className="text-sm text-[#4B5563] leading-relaxed">
              Every day begins with emergency veterinary rescues, free food kitchens, and direct community interventions across neighborhoods.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E7EB] shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#EBF7EE] text-[#107048] flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#111827] mb-2">
              100% Transparent
            </h3>
            <p className="text-sm text-[#4B5563] leading-relaxed">
              We operate with 0% platform deductions. 100% of your contributions go straight to medicine, food rations, and educational kits.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E7EB] shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#EBF7EE] text-[#107048] flex items-center justify-center mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#111827] mb-2">
              United Community
            </h3>
            <p className="text-sm text-[#4B5563] leading-relaxed">
              Join over 1.7 million donors, volunteers, and certified veterinarians creating lasting change across thousands of villages and cities.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
