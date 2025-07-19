'use client';

import React from 'react';
import { DashboardData } from '../../types/dashboard';
import GrowthChart from '../GrowthChart';

interface GrowthCardProps {
  data: DashboardData;
}

const GrowthCard: React.FC<GrowthCardProps> = ({ data }) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-white text-3xl font-bold mb-4">Monthly Growth</h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Watch how assets under Blockrise custody have grown over time, 
          demonstrating increasing client trust and market confidence.
        </p>
      </div>

      {/* Chart */}
      <GrowthChart data={data.assetGrowth} />

      {/* Growth Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center">
          <div className="text-3xl font-bold text-green-400 mb-2">+77%</div>
          <div className="text-white/70">Growth This Year</div>
        </div>
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center">
          <div className="text-3xl font-bold text-blue-400 mb-2">+12%</div>
          <div className="text-white/70">Monthly Average</div>
        </div>
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center">
          <div className="text-3xl font-bold text-purple-400 mb-2">€93M</div>
          <div className="text-white/70">Added This Year</div>
        </div>
      </div>

      {/* Explanation */}
      <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-6 border border-white/10">
        <h3 className="text-white text-xl font-semibold mb-4">What This Growth Means</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-white font-semibold mb-2">Client Trust</h4>
            <p className="text-white/70 text-sm">
              Steady growth shows that more clients are choosing Blockrise for their 
              crypto custody needs, trusting us with their digital assets.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Market Confidence</h4>
            <p className="text-white/70 text-sm">
              Our growth rate outpaces the broader crypto market, indicating strong 
              confidence in our regulated custody services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthCard; 