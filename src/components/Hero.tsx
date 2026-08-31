import React from 'react';
import { ArrowRight, ShieldCheck, Award, Percent, Headphones, Info } from 'lucide-react';

interface HeroProps {
  onDonateClick: () => void;
  onExploreClick: () => void;
}

interface HeroPhoto {
  id: string;
  url: string;
  fallbackUrl: string;
  alt: string;
  tag?: string;
  aspect: string;
  objectPosition?: string;
}

const HERO_PHOTOS_LEFT: HeroPhoto[] = [
  {
    id: 'h-l1',
    url: '/images/photo-1.jpeg',
    fallbackUrl: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80',
    alt: 'All Alive Foundation Community Field Work',
    tag: 'Animal Rescue',
    aspect: 'aspect-[4/3]',
    objectPosition: 'center 25%'
  },
  {
    id: 'h-l2',
    url: '/images/photo-2.jpeg',
    fallbackUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
    alt: 'All Alive Grassroots Impact',
    tag: 'Care & Hope',
    aspect: 'aspect-[4/5]',
    objectPosition: 'center 20%'
  },
  {
    id: 'h-l3',
    url: '/images/photo-3.jpeg',
    fallbackUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    alt: 'Direct Field Relief and Rescue',
    tag: 'Medical Relief',
    aspect: 'aspect-[4/3]',
    objectPosition: 'center center'
  },
  {
    id: 'h-l4',
    url: '/images/photo-4.jpeg',
    fallbackUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
    alt: 'Community Support and Nutrition',
    tag: 'Child Welfare',
    aspect: 'aspect-[16/10]',
    objectPosition: 'center 30%'
  },
  {
    id: 'h-l5',
    url: '/images/photo-5.jpeg',
    fallbackUrl: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=800&q=80',
    alt: 'On-ground Volunteers in Action',
    tag: 'Empowerment',
    aspect: 'aspect-[4/5]',
    objectPosition: 'center 20%'
  },
  {
    id: 'h-l6',
    url: '/images/photo-6.jpeg',
    fallbackUrl: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
    alt: 'All Alive Field Rescue Mission',
    tag: 'Direct Care',
    aspect: 'aspect-[4/3]',
    objectPosition: 'center 25%'
  },
  {
    id: 'h-l7',
    url: '/images/photo-7.jpeg',
    fallbackUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
    alt: 'Compassion in Action',
    tag: 'Community',
    aspect: 'aspect-[4/5]',
    objectPosition: 'center 20%'
  },
  {
    id: 'h-l8',
    url: '/images/photo-8.jpeg',
    fallbackUrl: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80',
    alt: 'Grassroots Rescue Operation',
    tag: 'Emergency Rescue',
    aspect: 'aspect-[4/3]',
    objectPosition: 'center center'
  }
];

const HERO_PHOTOS_RIGHT: HeroPhoto[] = [
  {
    id: 'h-r1',
    url: '/images/photo-9.jpeg',
    fallbackUrl: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80',
    alt: 'Rescue and Rehabilitation',
    tag: 'Animal Care',
    aspect: 'aspect-[16/10]',
    objectPosition: 'center 25%'
  },
  {
    id: 'h-r2',
    url: '/images/photo-10.jpeg',
    fallbackUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
    alt: 'Field Volunteer Work',
    tag: 'Field Aid',
    aspect: 'aspect-[4/3]',
    objectPosition: 'center 20%'
  },
  {
    id: 'h-r3',
    url: '/images/photo-11.jpeg',
    fallbackUrl: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
    alt: 'Emergency Medical Care',
    tag: 'Relief',
    aspect: 'aspect-[16/10]',
    objectPosition: 'center 30%'
  },
  {
    id: 'h-r4',
    url: '/images/photo-12.jpeg',
    fallbackUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    alt: 'Helping vulnerable community lives',
    tag: 'Grassroots Aid',
    aspect: 'aspect-[4/5]',
    objectPosition: 'center 20%'
  },
  {
    id: 'h-r5',
    url: '/images/photo-13.jpeg',
    fallbackUrl: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=800&q=80',
    alt: 'On-ground Mission',
    tag: 'Tree Plantation',
    aspect: 'aspect-[4/3]',
    objectPosition: 'center center'
  },
  {
    id: 'h-r6',
    url: '/images/photo-14.jpeg',
    fallbackUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
    alt: 'Daily Feeding and Nutrition',
    tag: 'Food Aid',
    aspect: 'aspect-[4/5]',
    objectPosition: 'center 20%'
  },
  {
    id: 'h-r7',
    url: '/images/photo-15.jpeg',
    fallbackUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80',
    alt: 'All Alive Foundation Impact',
    tag: 'Hope & Dignity',
    aspect: 'aspect-[4/3]',
    objectPosition: 'center 25%'
  },
  {
    id: 'h-r8',
    url: '/images/photo-16.jpeg',
    fallbackUrl: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80',
    alt: 'Community Medical Drive',
    tag: 'Health Care',
    aspect: 'aspect-[4/5]',
    objectPosition: 'center 20%'
  }
];

export const Hero: React.FC<HeroProps> = ({ onDonateClick, onExploreClick }) => {
  const leftColumnPhotos = [...HERO_PHOTOS_LEFT, ...HERO_PHOTOS_LEFT];
  const rightColumnPhotos = [...HERO_PHOTOS_RIGHT, ...HERO_PHOTOS_RIGHT];

  return (
    <section id="hero" className="relative pt-24 sm:pt-28 lg:pt-32 bg-white overflow-hidden">
      {/* Main Hero Container: Left Content + Right Dual-Column Scrolling Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Heading, Stat Badge, Paragraph, CTA and Subtext */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start justify-center">
            
            {/* Top Green Stat Badge Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF7EE] text-[#1B5E20] border border-[#C3E8CC] text-xs font-medium tracking-tight mb-5 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-[#107048] animate-pulse"></span>
              <span>4 Active Verticals • 100% Direct Field Aid</span>
            </div>

            {/* Large Bold Serif Display Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-bold text-[#111827] leading-[1.06] tracking-tight mb-6">
              Compassion in action<br />
              for causes that<br />
              <span className="italic font-normal text-[#107048] font-serif tracking-normal">
                matter most.
              </span>
            </h1>

            {/* Explanatory Paragraph with Bold Highlights */}
            <p className="text-base sm:text-lg text-[#374151] font-normal leading-relaxed mb-8 max-w-xl">
              All Alive Foundation is a registered non-profit working through <strong className="text-[#111827] font-semibold">4 core verticals</strong>: Animal Welfare, Child Education, Native Forestation, and Women's Empowerment. We operate with <strong className="text-[#111827] font-semibold">0% overhead deductions</strong> and direct grassroots action.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-6 w-full sm:w-auto">
              <button
                onClick={onDonateClick}
                id="hero-donate-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#107048] hover:bg-[#0B5A38] text-white text-sm sm:text-base font-semibold rounded-full shadow-xs hover:shadow-md active:scale-[0.98] transition-all duration-200 cursor-pointer group"
              >
                <span>Support Our Mission</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button
                onClick={onExploreClick}
                id="hero-explore-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 bg-transparent hover:bg-neutral-50 text-[#111827] text-sm font-semibold rounded-full border border-[#E5E7EB] transition-all duration-200 cursor-pointer"
              >
                <span>Explore Live Campaigns</span>
              </button>
            </div>

            {/* Subtext info notice with icon */}
            <div className="flex items-start gap-2 text-xs text-[#6B7280] font-sans max-w-lg">
              <Info className="w-4 h-4 text-[#107048] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#111827] font-medium">Section 80G Tax Exemption.</strong> All donations receive an immediate 50% tax deduction certificate under the Indian Income Tax Act.
              </span>
            </div>

          </div>

          {/* Right Column: Exact Side-by-Side Dual Scrolling Photo Archive */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            <div className="relative h-[480px] sm:h-[580px] lg:h-[640px] overflow-hidden rounded-3xl bg-neutral-50/50">
              
              {/* Seamless Top Gradient Fade Mask */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white via-white/80 to-transparent z-20"></div>
              
              {/* Seamless Bottom Gradient Fade Mask */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent z-20"></div>

              {/* Dual Column Grid Container */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 h-full p-2 sm:p-3">
                
                {/* Column 1: Left - Scrolls Upward Continuously */}
                <div className="overflow-hidden relative h-full">
                  <div className="animate-scroll-up flex flex-col gap-3 sm:gap-4">
                    {leftColumnPhotos.map((photo, index) => (
                      <div
                        key={`left-${photo.id}-${index}`}
                        className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-neutral-100 shadow-xs border border-black/5 hover:border-[#107048]/40 transition-all duration-300 cursor-pointer"
                      >
                        <div className={`overflow-hidden ${photo.aspect} relative bg-neutral-200`}>
                          <img
                            src={photo.url}
                            alt={photo.alt}
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              const target = e.currentTarget;
                              if (photo.fallbackUrl && target.src !== photo.fallbackUrl) {
                                target.src = photo.fallbackUrl;
                              }
                            }}
                            style={{ objectPosition: photo.objectPosition || 'center center' }}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2: Right - Scrolls Downward Continuously */}
                <div className="overflow-hidden relative h-full">
                  <div className="animate-scroll-down flex flex-col gap-3 sm:gap-4 pt-6 sm:pt-8">
                    {rightColumnPhotos.map((photo, index) => (
                      <div
                        key={`right-${photo.id}-${index}`}
                        className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-neutral-100 shadow-xs border border-black/5 hover:border-[#107048]/40 transition-all duration-300 cursor-pointer"
                      >
                        <div className={`overflow-hidden ${photo.aspect} relative bg-neutral-200`}>
                          <img
                            src={photo.url}
                            alt={photo.alt}
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              const target = e.currentTarget;
                              if (photo.fallbackUrl && target.src !== photo.fallbackUrl) {
                                target.src = photo.fallbackUrl;
                              }
                            }}
                            style={{ objectPosition: photo.objectPosition || 'center center' }}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Full-Width Reassurance Green Strip */}
      <div className="w-full bg-[#0B3B24] text-white py-5 sm:py-6 border-t border-[#072B1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center">
            
            {/* 1. 100% Direct Field Care */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/15">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="font-semibold text-xs sm:text-sm text-white leading-tight">100% Direct Field Care</div>
                <div className="text-[10px] sm:text-xs text-emerald-200/80 font-sans mt-0.5">Zero Overhead Cut</div>
              </div>
            </div>

            {/* 2. Section 80G Certified */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/15">
                <Award className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="font-semibold text-xs sm:text-sm text-white leading-tight">Section 80G Certified</div>
                <div className="text-[10px] sm:text-xs text-emerald-200/80 font-sans mt-0.5">50% Tax Deduction</div>
              </div>
            </div>

            {/* 3. 4 Dedicated Verticals */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/15">
                <Percent className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="font-semibold text-xs sm:text-sm text-white leading-tight">4 Focused Verticals</div>
                <div className="text-[10px] sm:text-xs text-emerald-200/80 font-sans mt-0.5">Animals, Kids, Earth, Women</div>
              </div>
            </div>

            {/* 4. 24/7 Rapid Emergency Response */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/15">
                <Headphones className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="font-semibold text-xs sm:text-sm text-white leading-tight">24/7 Emergency Dispatch</div>
                <div className="text-[10px] sm:text-xs text-emerald-200/80 font-sans mt-0.5">On-ground Rescue Fleet</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
