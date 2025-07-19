'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { FullscreenCardProps } from '../types/dashboard';

const FullscreenCard: React.FC<FullscreenCardProps> = ({ title, icon, children, onClose, color }) => {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm">
      {/* Header */}
      <div className={`${color} p-6 border-b border-white/10`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <div className="text-white text-2xl">
                {icon}
              </div>
            </div>
            <h1 className="text-white text-2xl font-bold">{title}</h1>
          </div>
          
          <button
            onClick={onClose}
            className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center
                     text-white hover:bg-white/30 transition-colors duration-200
                     active:scale-95"
          >
            <X size={24} />
          </button>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 h-full overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </div>
      
      {/* Back button for mobile */}
      <div className="fixed bottom-6 left-6">
        <button
          onClick={onClose}
          className="px-6 py-3 rounded-xl bg-white/20 backdrop-blur-sm text-white
                   hover:bg-white/30 transition-colors duration-200
                   active:scale-95 font-medium"
        >
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default FullscreenCard; 