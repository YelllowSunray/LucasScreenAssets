'use client';

import React from 'react';
import { DashboardData } from '../../types/dashboard';
import { Shield, CheckCircle, Calendar, Hash } from 'lucide-react';

interface ProofOfReservesCardProps {
  data: DashboardData;
}

const ProofOfReservesCard: React.FC<ProofOfReservesCardProps> = ({ data }) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-white text-3xl font-bold mb-4">Proof of Reserves</h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          We prove we hold what we say we do. Every month, independent auditors verify 
          that our reserves match our client holdings exactly.
        </p>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Last Audit */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <div className="flex items-center space-x-3 mb-4">
            <CheckCircle className="w-8 h-8 text-green-400" />
            <h3 className="text-white text-xl font-semibold">Last Audit</h3>
          </div>
          <div className="text-2xl font-bold text-white mb-2">
            {new Date(data.lastAudit).toLocaleDateString('de-DE')}
          </div>
          <p className="text-white/70 text-sm">Successfully completed</p>
        </div>

        {/* Next Audit */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <div className="flex items-center space-x-3 mb-4">
            <Calendar className="w-8 h-8 text-blue-400" />
            <h3 className="text-white text-xl font-semibold">Next Audit</h3>
          </div>
          <div className="text-2xl font-bold text-white mb-2">
            {new Date(data.nextAudit).toLocaleDateString('de-DE')}
          </div>
          <p className="text-white/70 text-sm">Scheduled</p>
        </div>

        {/* Audit Hash */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <div className="flex items-center space-x-3 mb-4">
            <Hash className="w-8 h-8 text-purple-400" />
            <h3 className="text-white text-xl font-semibold">Audit Hash</h3>
          </div>
          <div className="text-sm font-mono text-white mb-2 break-all">
            {data.auditHash}
          </div>
          <p className="text-white/70 text-sm">Blockchain verified</p>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-6 border border-white/10">
        <h3 className="text-white text-xl font-semibold mb-6">How Proof of Reserves Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-green-400 text-2xl font-bold">1</span>
            </div>
            <h4 className="text-white font-semibold mb-2">Independent Audit</h4>
            <p className="text-white/70 text-sm">
              Third-party auditors verify our holdings against client balances
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-400 text-2xl font-bold">2</span>
            </div>
            <h4 className="text-white font-semibold mb-2">Blockchain Proof</h4>
            <p className="text-white/70 text-sm">
              Audit results are published on blockchain for transparency
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-400 text-2xl font-bold">3</span>
            </div>
            <h4 className="text-white font-semibold mb-2">Public Verification</h4>
            <p className="text-white/70 text-sm">
              Anyone can verify our reserves using the published hash
            </p>
          </div>
        </div>
      </div>

      {/* Why This Matters */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <div className="flex items-start space-x-4">
          <Shield className="w-8 h-8 text-green-400 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-white text-xl font-semibold mb-3">Why Proof of Reserves Matters</h3>
            <div className="space-y-3 text-white/70">
              <p>
                <strong className="text-white">Transparency:</strong> We prove we hold exactly what we claim to hold, 
                eliminating any possibility of fractional reserve practices.
              </p>
              <p>
                <strong className="text-white">Trust:</strong> Regular audits by independent parties ensure our 
                clients can trust us with their digital assets.
              </p>
              <p>
                <strong className="text-white">Compliance:</strong> Our proof of reserves system meets regulatory 
                requirements and industry best practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Verification Link */}
      <div className="text-center">
        <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-xl text-white font-semibold transition-colors duration-200">
          Verify Our Reserves
        </button>
        <p className="text-white/50 text-sm mt-2">
          Visit our public verification portal to check our reserves in real-time
        </p>
      </div>
    </div>
  );
};

export default ProofOfReservesCard; 