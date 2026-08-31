import React from 'react';
import { TRUSTEES } from '../data/content';
import { MapPin } from 'lucide-react';

export const Trustees: React.FC = () => {
  return (
    <section id="trustees" className="py-20 sm:py-28 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF7EE] text-[#1B5E20] text-xs font-medium mb-3">
              <span>Leadership</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] tracking-tight">
              Trustees & Directors, <br />
              <span className="italic font-normal text-[#107048]">serving on the frontlines.</span>
            </h2>
          </div>
          <p className="text-base text-[#374151] max-w-md font-sans leading-relaxed">
            Honorary clinicians, educators, and conservationists dedicated to honest stewardship.
          </p>
        </div>

        {/* 4 Trustees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUSTEES.map((trustee) => (
            <div
              key={trustee.id}
              className="bg-white rounded-3xl p-5 border border-[#E5E7EB] hover:border-[#107048]/50 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-100 mb-4">
                  <img
                    src={trustee.image}
                    alt={trustee.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs text-[#111827] text-xs font-semibold px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#107048]" />
                    <span>{trustee.location}</span>
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111827] mb-1">
                  {trustee.name}
                </h3>
                <p className="text-xs font-semibold text-[#107048] mb-3">
                  {trustee.role}
                </p>

                {/* Background */}
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  {trustee.background}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
