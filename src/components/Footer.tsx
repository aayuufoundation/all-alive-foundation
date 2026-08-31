import React from 'react';
import { Heart, ShieldCheck } from 'lucide-react';
import { VerticalId } from '../types';

interface FooterProps {
  onSelectVertical: (verticalId: VerticalId) => void;
  onDonateClick: () => void;
  onRequestHelpClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectVertical,
  onDonateClick,
  onRequestHelpClick
}) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0B3B24] text-white font-sans border-t border-[#072B1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-emerald-300">
                <Heart className="w-4 h-4 fill-emerald-300" />
              </div>
              <span className="font-serif text-2xl font-bold text-white">
                All Alive Foundation
              </span>
            </div>

            <p className="text-sm text-emerald-100/80 leading-relaxed max-w-sm">
              An independent, registered charitable foundation dedicated to life with dignity for animals, children, nature, and women. 100% direct field execution.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-200">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Section 80G & 12A Certified • 50% Tax Exemption</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3 text-sm">
            <div className="font-semibold text-white mb-2">
              Our Live Causes
            </div>
            <ul className="space-y-2 text-emerald-100/80">
              <li>
                <button
                  onClick={() => {
                    scrollToSection('campaigns');
                    onSelectVertical('animalistt');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  The Animalistt (Rescue & Care)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection('campaigns');
                    onSelectVertical('humanist');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  The Humanist (Child Welfare)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection('campaigns');
                    onSelectVertical('greenist');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  The Greenist (Trees & Nature)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection('campaigns');
                    onSelectVertical('feminist');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  The Feminist (Women Support)
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="lg:col-span-4 space-y-4">
            <div className="font-semibold text-white mb-2">
              24/7 Helpline & Dispatch
            </div>
            <p className="text-sm text-emerald-100/80">
              Emergency WhatsApp & Helpline: <a href="https://wa.me/917263979006?text=Hello%20All%20Alive%20Foundation%2C%20I%20would%20like%20to%20get%20in%20touch." target="_blank" rel="noopener noreferrer" className="text-emerald-300 font-bold hover:underline inline-flex items-center gap-1.5">+91 72639 79006</a>
            </p>
            <div className="flex flex-wrap gap-2.5 pt-2">
              <a
                href="https://wa.me/917263979006?text=Hello%20All%20Alive%20Foundation%2C%20I%20would%20like%20to%20get%20in%20touch."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold rounded-full shadow-xs transition-all inline-flex items-center gap-1.5"
              >
                <span>Chat on WhatsApp</span>
              </a>
              <button
                onClick={onDonateClick}
                className="px-5 py-2.5 bg-[#107048] hover:bg-[#0B5A38] text-white text-xs sm:text-sm font-semibold rounded-full border border-emerald-500/30 transition-all cursor-pointer"
              >
                Support Foundation
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-200/60 gap-4">
          <div>
            © {new Date().getFullYear()} All Alive Foundation. Registered Trust. All rights reserved.
          </div>
          <div>
            Serving life with dignity across 4 essential verticals.
          </div>
        </div>

      </div>
    </footer>
  );
};
