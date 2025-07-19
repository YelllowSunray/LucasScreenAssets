'use client';

import React from 'react';
import { DashboardData } from '../../types/dashboard';
import AnimatedNumber from '../AnimatedNumber';

interface AssetsCardProps {
  data: DashboardData;
}

const AssetsCard: React.FC<AssetsCardProps> = ({ data }) => {
  return (
    <div className="space-y-8">
      {/* Main Total */}
      <div className="text-center">
        <h2 className="text-white/70 text-lg mb-4">Total Assets Under Custody</h2>
        <div className="text-6xl font-bold text-white mb-4">
          <AnimatedNumber 
            value={data.totalEUR} 
            format="currency" 
            className="text-6xl font-bold text-white"
          />
        </div>
        <p className="text-white/60 text-lg">
          Securing digital assets for {data.clients.toLocaleString()} clients
        </p>
      </div>

      {/* Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bitcoin */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">₿</span>
            </div>
            <h3 className="text-white text-xl font-semibold">Bitcoin (BTC)</h3>
          </div>
          
          <div className="space-y-2">
            <div className="text-3xl font-bold text-white">
              <AnimatedNumber 
                value={data.btc.eur} 
                format="currency" 
                className="text-3xl font-bold text-white"
              />
            </div>
            <div className="text-white/70">
              {data.btc.amount.toLocaleString()} BTC
            </div>
          </div>
        </div>

        {/* Ethereum */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">Ξ</span>
            </div>
            <h3 className="text-white text-xl font-semibold">Ethereum (ETH)</h3>
          </div>
          
          <div className="space-y-2">
            <div className="text-3xl font-bold text-white">
              <AnimatedNumber 
                value={data.eth.eur} 
                format="currency" 
                className="text-3xl font-bold text-white"
              />
            </div>
            <div className="text-white/70">
              {data.eth.amount.toLocaleString()} ETH
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-6 border border-white/10">
        <h3 className="text-white text-xl font-semibold mb-4">Why Trust Blockrise?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-white mb-2">€213M+</div>
            <div className="text-white/70 text-sm">Assets Secured</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-2">1,029</div>
            <div className="text-white/70 text-sm">Active Clients</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-2">99.97%</div>
            <div className="text-white/70 text-sm">System Uptime</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetsCard; 