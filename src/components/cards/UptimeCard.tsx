'use client';

import React from 'react';
import { DashboardData } from '../../types/dashboard';
import { Activity, Clock, Shield, Zap } from 'lucide-react';

interface UptimeCardProps {
  data: DashboardData;
}

const UptimeCard: React.FC<UptimeCardProps> = ({ data }) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-white text-3xl font-bold mb-4">Uptime & Reliability</h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Our custody infrastructure is designed for 99.99% reliability, ensuring 
          your assets are always accessible when you need them.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Uptime */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <div className="flex items-center space-x-3 mb-4">
            <Activity className="w-8 h-8 text-green-400" />
            <h3 className="text-white text-xl font-semibold">System Uptime</h3>
          </div>
          <div className="text-4xl font-bold text-green-400 mb-2">
            {data.uptime}
          </div>
          <p className="text-white/70 text-sm">
            Over the last 30 days
          </p>
          
          {/* Uptime Bar */}
          <div className="mt-4">
            <div className="flex justify-between text-white/70 text-sm mb-2">
              <span>Uptime</span>
              <span>{data.uptime}</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-3">
              <div 
                className="bg-green-400 h-3 rounded-full transition-all duration-1000"
                style={{ width: '99.97%' }}
              />
            </div>
          </div>
        </div>

        {/* Transaction Time */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <div className="flex items-center space-x-3 mb-4">
            <Clock className="w-8 h-8 text-blue-400" />
            <h3 className="text-white text-xl font-semibold">Avg. Confirmation</h3>
          </div>
          <div className="text-4xl font-bold text-blue-400 mb-2">
            {data.avgConfirmTime}
          </div>
          <p className="text-white/70 text-sm">
            Transaction confirmation time
          </p>
          
          {/* Speed Indicator */}
          <div className="mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/70 text-sm">Excellent performance</span>
            </div>
          </div>
        </div>
      </div>

      {/* Infrastructure Details */}
      <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-6 border border-white/10">
        <h3 className="text-white text-xl font-semibold mb-6">Infrastructure Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-green-400" />
            </div>
            <h4 className="text-white font-semibold mb-2">Multi-Sig Security</h4>
            <p className="text-white/70 text-sm">
              All assets secured with multi-signature technology
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-blue-400" />
            </div>
            <h4 className="text-white font-semibold mb-2">Redundant Systems</h4>
            <p className="text-white/70 text-sm">
              Multiple backup systems ensure continuous operation
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
              <Activity className="w-8 h-8 text-purple-400" />
            </div>
            <h4 className="text-white font-semibold mb-2">24/7 Monitoring</h4>
            <p className="text-white/70 text-sm">
              Round-the-clock system monitoring and alerting
            </p>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
          <div className="text-2xl font-bold text-white mb-1">99.97%</div>
          <div className="text-white/70 text-sm">Uptime</div>
        </div>
        <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
          <div className="text-2xl font-bold text-white mb-1">&lt;10min</div>
          <div className="text-white/70 text-sm">Response Time</div>
        </div>
        <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
          <div className="text-2xl font-bold text-white mb-1">0</div>
          <div className="text-white/70 text-sm">Security Incidents</div>
        </div>
        <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
          <div className="text-2xl font-bold text-white mb-1">100%</div>
          <div className="text-white/70 text-sm">Backup Coverage</div>
        </div>
      </div>

      {/* Why Reliability Matters */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-white text-xl font-semibold mb-4">Why Reliability Matters</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-white font-semibold mb-2">Asset Accessibility</h4>
            <p className="text-white/70 text-sm">
              High uptime ensures your crypto assets are always accessible when you need 
              to make transactions or withdrawals.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Business Continuity</h4>
            <p className="text-white/70 text-sm">
              Reliable infrastructure means your business operations won't be interrupted 
              by technical issues or downtime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UptimeCard; 