'use client';

import React from 'react';
import { DashboardData } from '../../types/dashboard';
import AllocationChart from '../AllocationChart';

interface AllocationCardProps {
  data: DashboardData;
}

const AllocationCard: React.FC<AllocationCardProps> = ({ data }) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-white text-3xl font-bold mb-4">Asset Allocation</h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          See how our clients' assets are distributed between Bitcoin and Ethereum, 
          showing their investment preferences and risk profiles.
        </p>
      </div>

      {/* Chart */}
      <AllocationChart data={data.assetAllocation} />

      {/* Detailed Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bitcoin Details */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
              <span className="text-white font-bold">₿</span>
            </div>
            <div>
              <h3 className="text-white text-xl font-semibold">Bitcoin (BTC)</h3>
              <p className="text-white/60 text-sm">Digital Gold</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-white/70">Percentage:</span>
              <span className="text-white font-semibold">{data.assetAllocation.BTC}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Value:</span>
              <span className="text-white font-semibold">
                €{data.btc.eur.toLocaleString('de-DE')}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Amount:</span>
              <span className="text-white font-semibold">
                {data.btc.amount.toLocaleString()} BTC
              </span>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-orange-500/10 rounded-lg">
            <p className="text-white/80 text-sm">
              Bitcoin remains the preferred choice for long-term crypto custody, 
              offering proven security and stability.
            </p>
          </div>
        </div>

        {/* Ethereum Details */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white font-bold">Ξ</span>
            </div>
            <div>
              <h3 className="text-white text-xl font-semibold">Ethereum (ETH)</h3>
              <p className="text-white/60 text-sm">Smart Contract Platform</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-white/70">Percentage:</span>
              <span className="text-white font-semibold">{data.assetAllocation.ETH}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Value:</span>
              <span className="text-white font-semibold">
                €{data.eth.eur.toLocaleString('de-DE')}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Amount:</span>
              <span className="text-white font-semibold">
                {data.eth.amount.toLocaleString()} ETH
              </span>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-blue-500/10 rounded-lg">
            <p className="text-white/80 text-sm">
              Ethereum appeals to clients seeking exposure to DeFi and smart contract 
              ecosystems alongside traditional crypto assets.
            </p>
          </div>
        </div>
      </div>

      {/* Why This Matters */}
      <div className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-2xl p-6 border border-white/10">
        <h3 className="text-white text-xl font-semibold mb-4">Why Asset Allocation Matters</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-white font-semibold mb-2">Diversification</h4>
            <p className="text-white/70 text-sm">
              Our clients maintain balanced portfolios, reducing risk while 
              capturing opportunities in different crypto asset classes.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Long-term Strategy</h4>
            <p className="text-white/70 text-sm">
              The high Bitcoin allocation reflects a conservative, long-term 
              investment approach favored by institutional clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllocationCard; 