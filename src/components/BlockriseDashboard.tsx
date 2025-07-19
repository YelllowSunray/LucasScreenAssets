'use client';

import React, { useState } from 'react';
import { 
  Euro, 
  TrendingUp, 
  PieChart, 
  Shield, 
  Activity, 
  Building
} from 'lucide-react';
import { DashboardData } from '../types/dashboard';
import DashboardCard from './DashboardCard';

interface BlockriseDashboardProps {
  data: DashboardData;
}

const BlockriseDashboard: React.FC<BlockriseDashboardProps> = ({ data }) => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const cards = [
    {
      id: 'assets',
      title: 'Assets Under Custody',
      icon: <Euro className="w-6 h-6" />,
      value: data.totalEUR,
      subtitle: `${data.clients.toLocaleString()} clients`
    },
    {
      id: 'growth',
      title: 'Monthly Growth',
      icon: <TrendingUp className="w-6 h-6" />,
      value: '+77%',
      subtitle: 'This year'
    },
    {
      id: 'allocation',
      title: 'Asset Allocation',
      icon: <PieChart className="w-6 h-6" />,
      value: `${data.assetAllocation.BTC}% BTC`,
      subtitle: `${data.assetAllocation.ETH}% ETH`
    },
    {
      id: 'reserves',
      title: 'Proof of Reserves',
      icon: <Shield className="w-6 h-6" />,
      value: 'Verified',
      subtitle: 'Monthly audits'
    },
    {
      id: 'uptime',
      title: 'Uptime & Reliability',
      icon: <Activity className="w-6 h-6" />,
      value: data.uptime,
      subtitle: 'System uptime'
    },
    {
      id: 'regulation',
      title: 'Regulation & Oversight',
      icon: <Building className="w-6 h-6" />,
      value: 'EU Compliant',
      subtitle: 'MiCAR & AFM'
    }
  ];

  const handleCardClick = (cardId: string) => {
    setActiveCard(cardId);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <img 
                src={data.logoUrl} 
                alt="Blockrise" 
                className="h-8 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold tracking-wider">BLOCKRISE</h1>
              </div>
            </div>
            
            {/* Live indicator */}
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm">Live</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Message */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
              Institutional-grade custody
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto">
              Securing{' '}
              <span className="text-blue-400 font-semibold">€213+ million</span>{' '}
              in digital assets for regulated financial institutions.
            </p>
          </div>

          {/* Dashboard Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card) => (
              <DashboardCard
                key={card.id}
                title={card.title}
                icon={card.icon}
                value={card.value}
                subtitle={card.subtitle}
                onClick={() => handleCardClick(card.id)}
              />
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16">
            <div className="glass rounded-2xl p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12">
                Why leading institutions choose{' '}
                <span className="gradient-text">Blockrise</span>
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">
                    €213M+
                  </div>
                  <div className="text-white/60">Assets Secured</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">
                    1,029
                  </div>
                  <div className="text-white/60">Active Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">
                    99.97%
                  </div>
                  <div className="text-white/60">System Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">
                    EU
                  </div>
                  <div className="text-white/60">Regulated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlockriseDashboard; 