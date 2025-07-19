'use client';

import React from 'react';
import { CardProps } from '../types/dashboard';

const DashboardCard: React.FC<CardProps> = ({ title, icon, value, subtitle, onClick }) => {
  return (
    <div onClick={onClick} className="card">
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
          {icon}
        </div>
        
        {/* Title */}
        <h3 className="text-white text-lg font-medium mb-3">
          {title}
        </h3>
        
        {/* Value */}
        <div className="text-2xl sm:text-3xl text-white mb-2 flex-grow font-semibold">
          {typeof value === 'number' 
            ? new Intl.NumberFormat('de-DE', { 
                style: 'currency', 
                currency: 'EUR',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
              }).format(value)
            : value
          }
        </div>
        
        {/* Subtitle */}
        {subtitle && (
          <p className="text-white/60 text-sm">
            {subtitle}
          </p>
        )}
      </div>
      
      {/* Tap indicator */}
      <div className="absolute bottom-4 right-4 text-white/40 group-hover:text-white/60 transition-colors">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </div>
    </div>
  );
};

export default DashboardCard; 