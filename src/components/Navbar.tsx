import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Heart, ChevronDown, ArrowRight, ShieldCheck, PawPrint, Baby, Stethoscope, Trees, Sparkles, Search } from 'lucide-react';

interface NavbarProps {
  onDonateClick: () => void;
  onRequestHelpClick: () => void;
}

type DropdownType = 'donate' | 'verticals' | 'about' | null;

export const Navbar: React.FC<NavbarProps> = ({ onDonateClick, onRequestHelpClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);
  const [mobileExpanded, setMobileExpanded] = useState<{ [key: string]: boolean }>({});
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileSubmenu = (key: string) => {
    setMobileExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <header
      id="site-navbar"
      ref={dropdownRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || activeDropdown
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] py-3.5 shadow-sm'
          : 'bg-white border-b border-[#E5E7EB] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand identity */}
        <a
          href="#"
          className="group flex items-center gap-2.5"
          onClick={(e) => {
            e.preventDefault();
            setActiveDropdown(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="w-8 h-8 rounded-full bg-[#EBF7EE] border border-[#C3E8CC] flex items-center justify-center text-[#107048] group-hover:scale-105 transition-transform">
            <Heart className="w-4 h-4 fill-[#107048]" />
          </div>
          <div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#111827] block leading-none">
              All Alive Foundation
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links with Dropdowns */}
        <nav className="hidden lg:flex items-center gap-2 text-sm font-medium text-[#374151]">
          {/* Donate / Causes Dropdown Trigger */}
          <div className="relative">
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'donate' ? null : 'donate')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full transition-all duration-150 cursor-pointer ${
                activeDropdown === 'donate'
                  ? 'bg-[#EBF7EE] text-[#107048] font-semibold'
                  : 'hover:bg-neutral-100 text-[#374151]'
              }`}
            >
              <span>Donate</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'donate' ? 'rotate-180 text-[#107048]' : ''}`} />
            </button>
          </div>

          {/* Verticals Dropdown Trigger */}
          <div className="relative">
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'verticals' ? null : 'verticals')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full transition-all duration-150 cursor-pointer ${
                activeDropdown === 'verticals'
                  ? 'bg-[#EBF7EE] text-[#107048] font-semibold'
                  : 'hover:bg-neutral-100 text-[#374151]'
              }`}
            >
              <span>Our Verticals</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'verticals' ? 'rotate-180 text-[#107048]' : ''}`} />
            </button>
          </div>

          {/* About Dropdown Trigger */}
          <div className="relative">
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full transition-all duration-150 cursor-pointer ${
                activeDropdown === 'about'
                  ? 'bg-[#EBF7EE] text-[#107048] font-semibold'
                  : 'hover:bg-neutral-100 text-[#374151]'
              }`}
            >
              <span>About</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180 text-[#107048]' : ''}`} />
            </button>
          </div>

          {/* Direct Link: Emergency Desk */}
          <button
            onClick={() => scrollToSection('request-help')}
            className="px-3.5 py-2 rounded-full hover:bg-neutral-100 text-[#374151] hover:text-[#107048] transition-colors cursor-pointer"
          >
            Emergency Desk
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            onClick={() => scrollToSection('campaigns')}
            aria-label="Search causes"
            className="p-2 text-[#4B5563] hover:text-[#107048] hover:bg-neutral-100 rounded-full transition-colors cursor-pointer"
          >
            <Search className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/917263979006?text=Hello%20All%20Alive%20Foundation%2C%20I%20would%20like%20to%20get%20in%20touch."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#EBF7EE] hover:bg-[#D7F0DC] text-[#107048] text-xs font-semibold rounded-full border border-[#C3E8CC] transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => scrollToSection('request-help')}
            className="hidden sm:inline-flex text-xs font-semibold px-3 py-2 text-[#374151] hover:text-[#107048] transition-colors cursor-pointer"
          >
            Need Help?
          </button>

          <button
            onClick={onDonateClick}
            id="nav-donate-btn"
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 bg-[#107048] hover:bg-[#0B5A38] text-white text-xs sm:text-sm font-semibold rounded-full shadow-xs hover:shadow-md active:scale-[0.98] transition-all duration-150 cursor-pointer"
          >
            <span>Support Foundation</span>
          </button>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#111827] hover:text-[#107048] focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MEGA DROPDOWN MENU: DONATE & URGENT CAUSES (WhyDonate-Style)             */}
      {/* ========================================================================= */}
      {activeDropdown === 'donate' && (
        <div className="hidden lg:block absolute top-full left-0 right-0 pt-2 pb-6 px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-neutral-100 p-6 transition-all duration-200 animate-in fade-in slide-in-from-top-2">
            <div className="grid grid-cols-12 gap-8">
              
              {/* Left Column: Categories & Urgent Cases */}
              <div className="col-span-7 flex flex-col justify-between pr-4 border-r border-neutral-100">
                <div>
                  <div className="text-[11px] font-bold tracking-wider text-[#9CA3AF] uppercase mb-3">
                    Find A Cause
                  </div>
                  <button
                    onClick={() => scrollToSection('campaigns')}
                    className="w-full text-left font-sans font-bold text-base text-[#111827] hover:text-[#107048] py-1.5 transition-colors flex items-center justify-between group cursor-pointer"
                  >
                    <span>Browse All Active Campaigns (6)</span>
                    <ArrowRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#107048] group-hover:translate-x-1 transition-all" />
                  </button>
                  <button
                    onClick={() => scrollToSection('verticals')}
                    className="w-full text-left text-sm text-[#4B5563] hover:text-[#107048] py-1 transition-colors block cursor-pointer mb-5"
                  >
                    Explore by 4 Impact Pillars
                  </button>

                  <div className="text-[11px] font-bold tracking-wider text-[#9CA3AF] uppercase mb-2 pt-1 border-t border-neutral-100">
                    Urgent Cases
                  </div>
                  <div className="space-y-1.5">
                    <button
                      onClick={() => scrollToSection('campaigns')}
                      className="w-full text-left text-sm font-semibold text-[#1F2937] hover:text-[#107048] py-1 transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#107048]"></span>
                      <span>Stray Animal Emergency Trauma & Rehab</span>
                    </button>
                    <button
                      onClick={() => scrollToSection('campaigns')}
                      className="w-full text-left text-sm font-semibold text-[#1F2937] hover:text-[#107048] py-1 transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#107048]"></span>
                      <span>Malnourished Child Nutrition & Medical Aid</span>
                    </button>
                    <button
                      onClick={() => scrollToSection('campaigns')}
                      className="w-full text-left text-sm font-semibold text-[#1F2937] hover:text-[#107048] py-1 transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#107048]"></span>
                      <span>Slum Community Daily Meal Drive</span>
                    </button>
                    <button
                      onClick={() => scrollToSection('campaigns')}
                      className="w-full text-left text-sm font-semibold text-[#1F2937] hover:text-[#107048] py-1 transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#107048]"></span>
                      <span>Critical Surgery & Hospitalization Fund</span>
                    </button>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-[#6B7280]">
                  <span className="flex items-center gap-1.5 text-[#107048] font-semibold">
                    <ShieldCheck className="w-4 h-4" /> 100% Tax Exemption (80G)
                  </span>
                  <span>Direct Ground Delivery</span>
                </div>
              </div>

              {/* Right Column: Emergency Appeal Feature Card (WhyDonate visual design) */}
              <div className="col-span-5 flex flex-col">
                <div className="text-[11px] font-bold tracking-wider text-[#9CA3AF] uppercase mb-3">
                  Emergency Appeals
                </div>

                <div className="relative bg-neutral-900 rounded-xl overflow-hidden group shadow-sm flex flex-col justify-between h-full">
                  {/* Photo with Overlay */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src="/images/photo-1.jpeg"
                      alt="Emergency Appeal All Alive Foundation"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                    {/* URGENT Badge */}
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-pulse"></span>
                      <span>URGENT</span>
                    </div>

                    <div className="absolute bottom-2 left-3 right-3 text-white/80 text-[11px] font-medium truncate">
                      Emergency Field Rescue & Medical Care
                    </div>
                  </div>

                  {/* Card Content & Action */}
                  <div className="p-4 bg-white flex flex-col justify-between grow border border-t-0 border-neutral-100 rounded-b-xl">
                    <h4 className="font-sans font-bold text-base text-[#111827] leading-snug mb-3">
                      Help where it&apos;s needed most.
                    </h4>

                    <button
                      onClick={() => {
                        setActiveDropdown(null);
                        onDonateClick();
                      }}
                      className="inline-flex items-center gap-1.5 text-[#107048] hover:text-[#0B5A38] font-bold text-sm group/btn cursor-pointer"
                    >
                      <span>Donate Now</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MEGA DROPDOWN MENU: OUR IMPACT VERTICALS                                 */}
      {/* ========================================================================= */}
      {activeDropdown === 'verticals' && (
        <div className="hidden lg:block absolute top-full left-0 right-0 pt-2 pb-6 px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-neutral-100 p-6 transition-all duration-200 animate-in fade-in slide-in-from-top-2">
            <div className="grid grid-cols-12 gap-8">
              
              <div className="col-span-7 pr-4 border-r border-neutral-100">
                <div className="text-[11px] font-bold tracking-wider text-[#9CA3AF] uppercase mb-3">
                  Four Pillars of Compassion
                </div>
                
                <div className="grid grid-cols-1 gap-2.5">
                  <button
                    onClick={() => scrollToSection('verticals')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-[#F9FAFB] transition-colors flex items-start gap-3 group cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#EBF7EE] text-[#107048] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <PawPrint className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-[#111827] group-hover:text-[#107048] transition-colors">
                        Animal Welfare & Rescue
                      </div>
                      <div className="text-xs text-[#6B7280]">
                        Daily trauma care, emergency rescue ambulances, and food distribution for stray lives.
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => scrollToSection('verticals')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-[#F9FAFB] transition-colors flex items-start gap-3 group cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#EBF7EE] text-[#107048] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Baby className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-[#111827] group-hover:text-[#107048] transition-colors">
                        Child Health & Nutrition
                      </div>
                      <div className="text-xs text-[#6B7280]">
                        Fighting malnutrition and supporting healthcare for children in underserved communities.
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => scrollToSection('verticals')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-[#F9FAFB] transition-colors flex items-start gap-3 group cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#EBF7EE] text-[#107048] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Stethoscope className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-[#111827] group-hover:text-[#107048] transition-colors">
                        Direct Medical & Human Relief
                      </div>
                      <div className="text-xs text-[#6B7280]">
                        Sponsoring critical surgeries, emergency medicines, and food security for destitute families.
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => scrollToSection('verticals')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-[#F9FAFB] transition-colors flex items-start gap-3 group cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#EBF7EE] text-[#107048] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Trees className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-[#111827] group-hover:text-[#107048] transition-colors">
                        Environment & Tree Plantation
                      </div>
                      <div className="text-xs text-[#6B7280]">
                        Urban green drives, native tree plantations, and environmental sustainability campaigns.
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <div className="col-span-5 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold tracking-wider text-[#9CA3AF] uppercase mb-3">
                    Direct Impact Model
                  </div>
                  <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-4 mb-4">
                    <div className="flex items-center gap-2 text-[#107048] font-bold text-sm mb-1">
                      <Sparkles className="w-4 h-4" /> Zero Commission Platform
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      All Alive Foundation runs on direct donor support. 100% of your contributions go straight to rescue operations and supplies.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setActiveDropdown(null);
                    onDonateClick();
                  }}
                  className="w-full py-3 bg-[#107048] hover:bg-[#0B5A38] text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Support All Verticals</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MEGA DROPDOWN MENU: ABOUT FOUNDATION                                      */}
      {/* ========================================================================= */}
      {activeDropdown === 'about' && (
        <div className="hidden lg:block absolute top-full left-0 right-0 pt-2 pb-6 px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl border border-neutral-100 p-6 transition-all duration-200 animate-in fade-in slide-in-from-top-2">
            <div className="grid grid-cols-12 gap-6">
              
              <div className="col-span-7 pr-4 border-r border-neutral-100">
                <div className="text-[11px] font-bold tracking-wider text-[#9CA3AF] uppercase mb-3">
                  About All Alive Foundation
                </div>
                <div className="space-y-3">
                  <button
                    onClick={() => scrollToSection('about')}
                    className="w-full text-left group cursor-pointer block"
                  >
                    <div className="font-bold text-sm text-[#111827] group-hover:text-[#107048] transition-colors">
                      Our Story & Origin
                    </div>
                    <div className="text-xs text-[#6B7280]">
                      Founded with a sacred mandate to preserve and protect all living beings without prejudice.
                    </div>
                  </button>

                  <button
                    onClick={() => scrollToSection('trustees')}
                    className="w-full text-left group cursor-pointer block"
                  >
                    <div className="font-bold text-sm text-[#111827] group-hover:text-[#107048] transition-colors">
                      Board of Trustees
                    </div>
                    <div className="text-xs text-[#6B7280]">
                      Meet the compassionate leaders guiding our daily rescue and relief operations.
                    </div>
                  </button>

                  <button
                    onClick={() => scrollToSection('about')}
                    className="w-full text-left group cursor-pointer block"
                  >
                    <div className="font-bold text-sm text-[#111827] group-hover:text-[#107048] transition-colors">
                      Registration & 80G Tax Exemption
                    </div>
                    <div className="text-xs text-[#6B7280]">
                      Recognized charitable trust registered under Section 80G of the Indian Income Tax Act.
                    </div>
                  </button>
                </div>
              </div>

              <div className="col-span-5 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold tracking-wider text-[#9CA3AF] uppercase mb-3">
                    Transparency Pledge
                  </div>
                  <div className="p-3.5 bg-[#EBF7EE] border border-[#C3E8CC] rounded-xl text-xs text-[#107048]">
                    <div className="font-bold text-sm mb-1 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" /> 100% Direct Impact
                    </div>
                    <p className="text-neutral-700 leading-snug">
                      Every project undergoes regular field audits and digital tracking with verifiable impact receipts.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => scrollToSection('about')}
                  className="w-full py-2.5 border border-[#107048] text-[#107048] hover:bg-[#EBF7EE] font-bold text-xs rounded-xl transition-colors cursor-pointer text-center"
                >
                  Read Full Mission Statement
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* Mobile Drawer Menu with Accordion Dropdowns                               */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-[#E5E7EB] px-6 py-6 shadow-xl flex flex-col gap-4 max-h-[80vh] overflow-y-auto animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-2 text-sm font-medium text-[#374151]">
            
            {/* Mobile Donate Section */}
            <div className="border-b border-neutral-100 pb-2">
              <button
                onClick={() => toggleMobileSubmenu('donate')}
                className="w-full flex items-center justify-between py-2 text-[#111827] font-semibold"
              >
                <span>Donate & Causes</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded.donate ? 'rotate-180 text-[#107048]' : ''}`} />
              </button>
              {mobileExpanded.donate && (
                <div className="pl-4 py-2 space-y-2 text-xs text-[#4B5563]">
                  <button onClick={() => scrollToSection('campaigns')} className="block py-1 hover:text-[#107048] text-left w-full font-medium">
                    • Browse All Live Campaigns
                  </button>
                  <button onClick={() => scrollToSection('campaigns')} className="block py-1 hover:text-[#107048] text-left w-full">
                    • Stray Animal Emergency Care
                  </button>
                  <button onClick={() => scrollToSection('campaigns')} className="block py-1 hover:text-[#107048] text-left w-full">
                    • Child Nutrition & Medical Relief
                  </button>
                  <button onClick={() => scrollToSection('campaigns')} className="block py-1 hover:text-[#107048] text-left w-full">
                    • Slum Feeding & Daily Langar
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Verticals Section */}
            <div className="border-b border-neutral-100 pb-2">
              <button
                onClick={() => toggleMobileSubmenu('verticals')}
                className="w-full flex items-center justify-between py-2 text-[#111827] font-semibold"
              >
                <span>Our 4 Pillars</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded.verticals ? 'rotate-180 text-[#107048]' : ''}`} />
              </button>
              {mobileExpanded.verticals && (
                <div className="pl-4 py-2 space-y-2 text-xs text-[#4B5563]">
                  <button onClick={() => scrollToSection('verticals')} className="block py-1 hover:text-[#107048] text-left w-full">
                    🐾 Animal Welfare & Rescue
                  </button>
                  <button onClick={() => scrollToSection('verticals')} className="block py-1 hover:text-[#107048] text-left w-full">
                    👶 Child Health & Nutrition
                  </button>
                  <button onClick={() => scrollToSection('verticals')} className="block py-1 hover:text-[#107048] text-left w-full">
                    🩺 Direct Medical & Human Relief
                  </button>
                  <button onClick={() => scrollToSection('verticals')} className="block py-1 hover:text-[#107048] text-left w-full">
                    🌳 Tree Plantation & Green Drive
                  </button>
                </div>
              )}
            </div>

            {/* Mobile About Section */}
            <div className="border-b border-neutral-100 pb-2">
              <button
                onClick={() => toggleMobileSubmenu('about')}
                className="w-full flex items-center justify-between py-2 text-[#111827] font-semibold"
              >
                <span>About Us</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded.about ? 'rotate-180 text-[#107048]' : ''}`} />
              </button>
              {mobileExpanded.about && (
                <div className="pl-4 py-2 space-y-2 text-xs text-[#4B5563]">
                  <button onClick={() => scrollToSection('about')} className="block py-1 hover:text-[#107048] text-left w-full">
                    • Our Story & Mission
                  </button>
                  <button onClick={() => scrollToSection('trustees')} className="block py-1 hover:text-[#107048] text-left w-full">
                    • Board of Trustees
                  </button>
                  <button onClick={() => scrollToSection('about')} className="block py-1 hover:text-[#107048] text-left w-full">
                    • 80G Tax Exemption & Registration
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('request-help')}
              className="text-left py-2 text-[#107048] font-semibold border-b border-neutral-100"
            >
              Emergency Assistance Desk
            </button>

            <a
              href="https://wa.me/917263979006?text=Hello%20All%20Alive%20Foundation%2C%20I%20would%20like%20to%20get%20in%20touch."
              target="_blank"
              rel="noopener noreferrer"
              className="text-left py-2 text-[#107048] font-semibold flex items-center justify-between border-b border-neutral-100"
            >
              <span>Chat on WhatsApp (+91 72639 79006)</span>
              <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
            </a>
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onDonateClick();
              }}
              className="w-full py-3 bg-[#107048] text-white text-center text-sm font-semibold rounded-full hover:bg-[#0B5A38]"
            >
              Donate / Support Our Mission
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

