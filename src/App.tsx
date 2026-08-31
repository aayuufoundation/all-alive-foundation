/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LiveCampaigns } from './components/LiveCampaigns';
import { AboutSection } from './components/AboutSection';
import { Trustees } from './components/Trustees';
import { RequestHelpSection } from './components/RequestHelpSection';
import { DonationSection } from './components/DonationSection';
import { DonationLeaderboard } from './components/DonationLeaderboard';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { INITIAL_SUPPORTERS } from './data/content';
import { VerticalId, DonationSubmission } from './types';

export default function App() {
  const [selectedVertical, setSelectedVertical] = useState<VerticalId>('general');
  const [supporters, setSupporters] = useState<DonationSubmission[]>(INITIAL_SUPPORTERS);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDonateClick = () => {
    scrollToSection('donate');
  };

  const handleExploreClick = () => {
    scrollToSection('campaigns');
  };

  const handleRequestHelpClick = () => {
    scrollToSection('request-help');
  };

  const handleDonateToCampaign = (verticalId: VerticalId) => {
    setSelectedVertical(verticalId);
    scrollToSection('donate');
  };

  const handleDonationSuccess = (submission: DonationSubmission) => {
    setSupporters((prev) => [submission, ...prev]);
    // Smooth scroll down to leaderboard after 1.5 seconds so they see their entry
    setTimeout(() => {
      scrollToSection('supporters');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#000000] flex flex-col font-sans selection:bg-[#107048] selection:text-white">
      {/* Navigation */}
      <Navbar
        onDonateClick={handleDonateClick}
        onRequestHelpClick={handleRequestHelpClick}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section (Dual Side-by-Side Scrolling Column & Trust Bar) */}
        <Hero
          onDonateClick={handleDonateClick}
          onExploreClick={handleExploreClick}
        />

        {/* 2. Live Campaigns (Exactly 6 Focused Initiatives) */}
        <LiveCampaigns
          onDonateToCampaign={handleDonateToCampaign}
        />

        {/* 3. About the Foundation (Purpose, 100% Direct Field Care) */}
        <AboutSection />

        {/* 4. Board of Trustees & Field Leadership */}
        <Trustees />

        {/* 5. Emergency Assistance Request (Need Help?) */}
        <RequestHelpSection />

        {/* 6. Dedicated Donation Section (80G Tax Exemption & Direct Allocation) */}
        <DonationSection
          selectedVerticalId={selectedVertical}
          onDonationSuccess={handleDonationSuccess}
        />

        {/* 7. Recent Supporters / Transparent Donation Wall */}
        <DonationLeaderboard supporters={supporters} />
      </main>

      {/* Footer */}
      <Footer
        onSelectVertical={handleDonateToCampaign}
        onDonateClick={handleDonateClick}
        onRequestHelpClick={handleRequestHelpClick}
      />

      {/* WhatsApp Floating Contact Button */}
      <WhatsAppButton phoneNumber="917263979006" />
    </div>
  );
}

