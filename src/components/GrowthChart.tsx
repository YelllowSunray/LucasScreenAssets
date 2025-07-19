'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface GrowthChartProps {
  data: number[];
}

const GrowthChart: React.FC<GrowthChartProps> = ({ data }) => {
  const chartData = data.map((value, index) => ({
    month: `Month ${index + 1}`,
    value: value
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 text-white">
          <p className="font-medium">{label}</p>
          <p className="text-lg font-bold">
            €{payload[0].value.toLocaleString('de-DE')}M
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-80 bg-white/5 rounded-2xl p-6 border border-white/10">
      <h3 className="text-white text-xl font-semibold mb-6">Asset Growth Over Time</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="month" 
            stroke="rgba(255,255,255,0.6)"
            fontSize={12}
          />
          <YAxis 
            stroke="rgba(255,255,255,0.6)"
            fontSize={12}
            tickFormatter={(value) => `€${value}M`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#3B82F6" 
            strokeWidth={3}
            dot={{ fill: '#3B82F6', strokeWidth: 2, r: 6 }}
            activeDot={{ r: 8, stroke: '#3B82F6', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-white/70 text-sm mt-4 text-center">
        Assets secured by Blockrise have grown steadily, reflecting client trust.
      </p>
    </div>
  );
};

export default GrowthChart; 