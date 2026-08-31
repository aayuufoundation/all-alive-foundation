import React from 'react';
import { COLLAGE_PHOTOS_LEFT, COLLAGE_PHOTOS_RIGHT } from '../data/content';
import { MapPin } from 'lucide-react';

export const ImageCollage: React.FC = () => {
  // Seamless loop by duplicating items
  const leftItems = [...COLLAGE_PHOTOS_LEFT, ...COLLAGE_PHOTOS_LEFT];
  const rightItems = [...COLLAGE_PHOTOS_RIGHT, ...COLLAGE_PHOTOS_RIGHT];

  return (
    <section id="visual-collage" className="py-16 sm:py-24 bg-[#F5F5F5] border-b border-[#D1D1D1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#D1D1D1]">
          <div>
            <div className="text-[10px] font-mono tracking-[1.5px] text-[#CC0000] uppercase mb-2">
              DOCUMENTARY VISUAL ARCHIVE / ARCHIVE DISPATCH
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-black leading-tight">
              On-Ground Realities Across India
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#1A1A1A] max-w-md font-sans leading-relaxed">
            Unfiltered field documentation across rescue vans, open-air bridge schools, sapling corridors, and community sewing hubs. 
            <span className="block mt-1 font-mono text-[10px] text-neutral-500 uppercase tracking-wider">
              * Hover over any photograph to view full documentary color.
            </span>
          </p>
        </div>
      </div>

      {/* Dual Infinite Scrolling Tall Canvas with Dark Editorial Frame */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative h-[580px] sm:h-[720px] lg:h-[800px] overflow-hidden border border-[#D1D1D1] bg-[#111111] shadow-xs">
          
          {/* Subtle Top & Bottom Gradient Masks for seamless entry/exit */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#111111] to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#111111] to-transparent z-10"></div>

          {/* Dual Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 h-full p-4 sm:p-6">
            
            {/* Column 1: Left - Continuously scrolls UPWARD */}
            <div className="overflow-hidden relative h-full no-scrollbar">
              <div className="animate-scroll-up flex flex-col gap-5">
                {leftItems.map((photo, index) => (
                  <div
                    key={`${photo.id}-${index}`}
                    className="group relative bg-[#1A1A1A] p-2 border border-white/10 hover:border-white/40 cursor-crosshair-hover transition-colors"
                  >
                    <div className={`overflow-hidden bg-[#222222] ${photo.aspectClass} relative`}>
                      <img
                        src={photo.url}
                        alt={photo.alt}
                        loading="lazy"
                        className="w-full h-full object-cover img-editorial group-hover:scale-102"
                      />
                      <div className="absolute top-2 left-2 bg-black/90 text-white font-mono text-[8px] sm:text-[9px] px-2 py-0.5 tracking-wider uppercase border border-white/15">
                        {photo.vertical}
                      </div>
                    </div>

                    <div className="mt-2 flex items-start justify-between text-[10px] font-mono text-neutral-300">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#CC0000]" />
                        <span>{photo.location}</span>
                      </div>
                      <span className="text-[9px] text-neutral-400 font-sans truncate max-w-[50%] text-right">
                        {photo.caption}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Right - Continuously scrolls DOWNWARD */}
            <div className="overflow-hidden relative h-full no-scrollbar hidden md:block">
              <div className="animate-scroll-down flex flex-col gap-5">
                {rightItems.map((photo, index) => (
                  <div
                    key={`${photo.id}-${index}`}
                    className="group relative bg-[#1A1A1A] p-2 border border-white/10 hover:border-white/40 cursor-crosshair-hover transition-colors"
                  >
                    <div className={`overflow-hidden bg-[#222222] ${photo.aspectClass} relative`}>
                      <img
                        src={photo.url}
                        alt={photo.alt}
                        loading="lazy"
                        className="w-full h-full object-cover img-editorial group-hover:scale-102"
                      />
                      <div className="absolute top-2 left-2 bg-black/90 text-white font-mono text-[8px] sm:text-[9px] px-2 py-0.5 tracking-wider uppercase border border-white/15">
                        {photo.vertical}
                      </div>
                    </div>

                    <div className="mt-2 flex items-start justify-between text-[10px] font-mono text-neutral-300">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#CC0000]" />
                        <span>{photo.location}</span>
                      </div>
                      <span className="text-[9px] text-neutral-400 font-sans truncate max-w-[50%] text-right">
                        {photo.caption}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom telemetry overlay in monospace */}
          <div className="absolute bottom-2 right-4 z-20 hidden sm:flex items-center gap-3 font-mono text-[9px] text-neutral-400 uppercase tracking-widest bg-black/80 px-2 py-1 border border-white/10">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#CC0000] animate-ping"></span>
            <span>LIVE DOCUMENTATION STREAM • DELHI / MUMBAI / RAJASTHAN</span>
          </div>
        </div>
      </div>
    </section>
  );
};
