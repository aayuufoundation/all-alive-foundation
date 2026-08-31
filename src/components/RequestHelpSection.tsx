import React, { useState } from 'react';
import { Phone, Mail, Upload, CheckCircle2 } from 'lucide-react';
import { HelpRequest } from '../types';

export const RequestHelpSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    assistanceType: 'Animal Rescue / Treatment',
    urgency: 'Immediate' as 'Immediate' | 'Within 24 Hours' | 'General Support',
    description: '',
    file: null as File | null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<HelpRequest | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const assistanceTypes = [
    'Animal Rescue / Treatment',
    'Animal Feeding',
    'Child Education',
    'Food Assistance',
    'Medical Assistance',
    "Women's Support",
    'Other'
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.location || !formData.description) {
      setErrorMsg('Please complete all required fields (Name, Phone, Location, and Details).');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    setTimeout(() => {
      const newRequest: HelpRequest = {
        id: `REQ-${Math.floor(100000 + Math.random() * 900000)}`,
        name: formData.name,
        phone: formData.phone,
        email: formData.email || 'N/A',
        location: formData.location,
        assistanceType: formData.assistanceType,
        urgency: formData.urgency,
        description: formData.description,
        fileName: formData.file ? formData.file.name : undefined,
        submittedAt: 'Today',
        status: 'Received'
      };

      setSubmittedTicket(newRequest);
      setIsSubmitting(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        location: '',
        assistanceType: 'Animal Rescue / Treatment',
        urgency: 'Immediate',
        description: '',
        file: null
      });
    }, 700);
  };

  return (
    <section id="request-help" className="py-20 sm:py-28 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF7EE] text-[#1B5E20] text-xs font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-[#107048] animate-pulse"></span>
            <span>24/7 Field Support Desk</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] tracking-tight mb-3">
            Need urgent help? <span className="italic font-normal text-[#107048]">We are here for you.</span>
          </h2>
          <p className="text-base text-[#4B5563] max-w-xl mx-auto">
            Report an injured animal, request emergency food aid, or ask for educational and medical assistance.
          </p>
        </div>

        {/* Form or Confirmation */}
        <div className="bg-white rounded-3xl border border-[#E5E7EB] shadow-xs p-6 sm:p-10">
          
          {submittedTicket ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#EBF7EE] text-[#107048] flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#111827]">
                Help Request #{submittedTicket.id} Received
              </h3>
              <p className="text-base text-[#4B5563] max-w-md mx-auto">
                Our field dispatch team has been notified for <strong className="text-[#111827]">{submittedTicket.location}</strong>. We will reach out to you directly via phone.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setSubmittedTicket(null)}
                  className="px-6 py-3 bg-[#107048] text-white text-sm font-semibold rounded-full hover:bg-[#0B5A38]"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#111827] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#107048]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#111827] mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile number for callback"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#107048]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#111827] mb-1.5">
                    Type of Assistance *
                  </label>
                  <select
                    value={formData.assistanceType}
                    onChange={(e) => setFormData({ ...formData, assistanceType: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#107048] bg-white"
                  >
                    {assistanceTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#111827] mb-1.5">
                    Exact Location / City *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. South Delhi / Mumbai"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#107048]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#111827] mb-1.5">
                  Describe the Situation *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Provide clear details so our field team can respond quickly..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#107048]"
                />
              </div>

              {errorMsg && (
                <div className="p-3.5 rounded-2xl bg-red-50 text-red-700 text-xs font-medium">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#107048] hover:bg-[#0B5A38] text-white text-sm font-semibold rounded-full shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                {isSubmitting ? 'Sending Request...' : 'Submit Emergency Request'}
              </button>

              <div className="pt-2 text-center">
                <p className="text-xs text-[#6B7280] mb-2">Need immediate live coordination or sharing location pin?</p>
                <a
                  href="https://wa.me/917263979006?text=Hello%20All%20Alive%20Foundation%2C%20I%20have%20an%20emergency%20assistance%20request."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-full shadow-xs hover:shadow-md transition-all duration-150"
                >
                  <span>Chat directly on WhatsApp (+91 72639 79006)</span>
                </a>
              </div>

            </form>
          )}

        </div>
      </div>
    </section>
  );
};
