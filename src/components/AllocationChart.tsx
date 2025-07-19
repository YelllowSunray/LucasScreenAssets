'use client';

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface AllocationChartProps {
  data: { BTC: number; ETH: number };
}

const AllocationChart: React.FC<AllocationChartProps> = ({ data }) => {
  const chartData = [
    { name: 'Bitcoin (BTC)', value: data.BTC, color: '#F7931A' },
    { name: 'Ethereum (ETH)', value: data.ETH, color: '#627EEA' }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 text-white">
          <p className="font-medium">{payload[0].name}</p>
          <p className="text-lg font-bold">{payload[0].value}%</p>
        </div>
      );
    }
    return null;
  };

  const CustomLegend = ({ payload }: any) => (
    <div className="flex justify-center space-x-8 mt-4">
      {payload?.map((entry: any, index: number) => (
        <div key={index} className="flex items-center space-x-2">
          <div 
            className="w-4 h-4 rounded-full" 
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-white text-sm">{entry.value}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full h-80 bg-white/5 rounded-2xl p-6 border border-white/10">
      <h3 className="text-white text-xl font-semibold mb-6">Asset Allocation</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={120}
            paddingAngle={5}
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} />
        </PieChart>
      </ResponsiveContainer>
      <p className="text-white/70 text-sm mt-4 text-center">
        Most clients choose BTC custody for long-term security.
      </p>
    </div>
  );
};

export default AllocationChart; 