import React, { useState } from 'react';
import { VerticalId, DonationSubmission } from '../types';
import { ShieldCheck, Lock, CheckCircle2, Heart, ArrowRight } from 'lucide-react';

interface DonationSectionProps {
  selectedVerticalId?: VerticalId;
  onDonationSuccess: (submission: DonationSubmission) => void;
}

export const DonationSection: React.FC<DonationSectionProps> = ({
  selectedVerticalId = 'general',
  onDonationSuccess
}) => {
  const [vertical, setVertical] = useState<VerticalId>(selectedVerticalId);
  const [amount, setAmount] = useState<number>(2500);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [donorName, setDonorName] = useState<string>('');
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  
  // 80G Tax Exemption fields
  const [wants80G, setWants80G] = useState<boolean>(true);
  const [panNumber, setPanNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [completedDonation, setCompletedDonation] = useState<DonationSubmission | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const verticalOptions: { id: VerticalId; label: string }[] = [
    { id: 'animalistt', label: 'The Animalistt (Animal Rescue)' },
    { id: 'humanist', label: 'The Humanist (Child & Family Relief)' },
    { id: 'greenist', label: 'The Greenist (Trees & Nature)' },
    { id: 'feminist', label: 'The Feminist (Women Empowerment)' },
    { id: 'general', label: 'General Fund (Where Needed Most)' }
  ];

  const presetAmounts = [500, 1000, 2500, 5000, 10000];

  const finalAmount = isCustom ? Number(customAmount) || 0 : amount;

  const handleSelectPreset = (val: number) => {
    setIsCustom(false);
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCustom(true);
    setCustomAmount(e.target.value);
  };

  const handleSubmitDonation = (e: React.FormEvent) => {
    e.preventDefault();
    if (finalAmount < 100) {
      setErrorMessage('Minimum contribution amount is ₹100.');
      return;
    }
    if (!isAnonymous && !donorName.trim()) {
      setErrorMessage('Please enter your name or check the Anonymous box.');
      return;
    }
    if (wants80G && !panNumber.trim()) {
      setErrorMessage('PAN number is required for Section 80G tax receipt.');
      return;
    }
    if (!email.trim() || !phone.trim()) {
      setErrorMessage('Please provide your email and phone number for receipt delivery.');
      return;
    }

    setErrorMessage('');
    setIsProcessing(true);

    setTimeout(() => {
      const submission: DonationSubmission = {
        id: `TXN-${Math.floor(10000000 + Math.random() * 90000000)}`,
        donorName: isAnonymous ? 'Anonymous' : donorName.trim(),
        isAnonymous: isAnonymous,
        vertical: vertical,
        amount: finalAmount,
        currency: 'INR',
        date: 'Just now',
        message: message.trim() || undefined,
        wants80G: wants80G,
        panNumber: wants80G ? panNumber.toUpperCase() : undefined,
        email: email,
        phone: phone,
        address: address
      };

      setIsProcessing(false);
      setCompletedDonation(submission);
      onDonationSuccess(submission);
    }, 900);
  };

  return (
    <section id="donate" className="py-20 sm:py-28 bg-[#F9FAFB] border-b border-[#E5E7EB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF7EE] text-[#1B5E20] text-xs font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-[#107048] animate-pulse"></span>
            <span>All Alive Foundation • 100% Direct Field Care</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] tracking-tight mb-3">
            Directly support our <span className="italic font-normal text-[#107048]">4 core verticals.</span>
          </h2>
          <p className="text-base text-[#4B5563] max-w-xl mx-auto">
            Select the vertical you want to empower. 100% of your contribution directly funds grassroots emergency care, education, planting, and empowerment.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl border border-[#E5E7EB] shadow-xs p-6 sm:p-10">
          
          {completedDonation ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#EBF7EE] text-[#107048] flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#111827]">
                Thank you for your generous contribution!
              </h3>
              <p className="text-base text-[#4B5563] max-w-md mx-auto">
                Your donation of <strong className="text-[#111827]">₹{completedDonation.amount.toLocaleString('en-IN')}</strong> has been confirmed. A receipt and Section 80G certificate has been sent to {completedDonation.email}.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setCompletedDonation(null)}
                  className="px-6 py-3 bg-[#107048] text-white text-sm font-semibold rounded-full hover:bg-[#0B5A38]"
                >
                  Make Another Donation
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmitDonation} className="space-y-8">
              
              {/* Step 1: Select Vertical */}
              <div>
                <label className="block text-sm font-semibold text-[#111827] mb-3">
                  1. Select Cause
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {verticalOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt.id}
                      onClick={() => setVertical(opt.id)}
                      className={`text-left p-3.5 rounded-2xl border text-sm font-medium transition-all ${
                        vertical === opt.id
                          ? 'border-[#107048] bg-[#EBF7EE] text-[#107048] font-semibold'
                          : 'border-[#E5E7EB] hover:border-neutral-300 text-[#374151]'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Amount */}
              <div>
                <label className="block text-sm font-semibold text-[#111827] mb-3">
                  2. Choose Donation Amount (INR)
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5 mb-3">
                  {presetAmounts.map((amt) => (
                    <button
                      type="button"
                      key={amt}
                      onClick={() => handleSelectPreset(amt)}
                      className={`py-3 px-2 rounded-2xl border text-sm font-semibold text-center transition-all ${
                        !isCustom && amount === amt
                          ? 'bg-[#107048] text-white border-[#107048] shadow-xs'
                          : 'bg-neutral-50 text-[#374151] border-[#E5E7EB] hover:bg-neutral-100'
                      }`}
                    >
                      ₹{amt.toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>
                
                {/* Custom Amount */}
                <div className="relative mt-3">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-[#6B7280]">
                    ₹
                  </span>
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={handleCustomChange}
                    className={`w-full pl-8 pr-4 py-3 rounded-2xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#107048] ${
                      isCustom ? 'border-[#107048] bg-[#EBF7EE]' : 'border-[#E5E7EB]'
                    }`}
                  />
                </div>
              </div>

              {/* Step 3: Donor Details */}
              <div className="space-y-4 pt-4 border-t border-[#F3F4F6]">
                <label className="block text-sm font-semibold text-[#111827]">
                  3. Your Details
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      disabled={isAnonymous}
                      value={isAnonymous ? 'Anonymous' : donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#107048] disabled:bg-neutral-100"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email Address (for tax receipt)"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#107048]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Mobile Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#107048]"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="PAN Number (for Section 80G tax benefit)"
                      value={panNumber}
                      onChange={(e) => setPanNumber(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#107048] uppercase"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="anon"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="w-4 h-4 rounded text-[#107048] focus:ring-[#107048]"
                  />
                  <label htmlFor="anon" className="text-xs text-[#4B5563]">
                    Make my donation anonymous on the public supporters list
                  </label>
                </div>
              </div>

              {errorMessage && (
                <div className="p-3.5 rounded-2xl bg-red-50 text-red-700 text-xs font-medium">
                  {errorMessage}
                </div>
              )}

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-4 bg-[#107048] hover:bg-[#0B5A38] text-white text-base font-semibold rounded-full shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isProcessing ? (
                    <span>Processing securely...</span>
                  ) : (
                    <>
                      <span>Complete Donation of ₹{finalAmount.toLocaleString('en-IN')}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-[#6B7280] mt-3">
                  🔒 256-bit SSL encrypted • Instant 80G certificate generated
                </p>
              </div>

            </form>
          )}

        </div>
      </div>
    </section>
  );
};
