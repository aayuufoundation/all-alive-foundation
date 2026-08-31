import React from 'react';
import { DonationSubmission, VerticalId } from '../types';
import { ShieldCheck, Heart } from 'lucide-react';

interface DonationLeaderboardProps {
  supporters: DonationSubmission[];
}

export const DonationLeaderboard: React.FC<DonationLeaderboardProps> = ({ supporters }) => {
  const getVerticalBadge = (vertical: VerticalId) => {
    switch (vertical) {
      case 'animalistt':
        return { name: 'The Animalistt', color: 'bg-[#EBF7EE] text-[#107048]' };
      case 'humanist':
        return { name: 'The Humanist', color: 'bg-blue-50 text-blue-700' };
      case 'greenist':
        return { name: 'The Greenist', color: 'bg-[#EBF7EE] text-[#1B5E20]' };
      case 'feminist':
        return { name: 'The Feminist', color: 'bg-purple-50 text-purple-700' };
      default:
        return { name: 'General Fund', color: 'bg-neutral-100 text-neutral-700' };
    }
  };

  return (
    <section id="supporters" className="py-16 sm:py-24 bg-[#F9FAFB] border-b border-[#E5E7EB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF7EE] text-[#1B5E20] text-xs font-medium mb-2">
              <span>Community Support</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111827]">
              Recent Contributors
            </h2>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#6B7280]">
            <ShieldCheck className="w-4 h-4 text-[#107048]" />
            <span>Verified 100% direct field aid</span>
          </div>
        </div>

        {/* Live Feed Cards */}
        <div className="space-y-3">
          {supporters.slice(0, 5).map((item) => {
            const badge = getVerticalBadge(item.vertical);
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#E5E7EB] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:shadow-xs transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#EBF7EE] text-[#107048] flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5 fill-[#107048]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm sm:text-base text-[#111827]">
                        {item.isAnonymous ? 'Anonymous Donor' : item.donorName}
                      </span>
                      <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${badge.color}`}>
                        {badge.name}
                      </span>
                    </div>
                    {item.message && (
                      <p className="text-xs text-[#6B7280] italic mt-0.5">
                        “{item.message}”
                      </p>
                    )}
                  </div>
                </div>

                <div className="text-left sm:text-right shrink-0">
                  <div className="font-semibold text-base sm:text-lg text-[#107048]">
                    ₹{item.amount.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[11px] text-[#9CA3AF]">
                    {item.date}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
