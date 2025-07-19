'use client';

import React from 'react';
import { DashboardData } from '../../types/dashboard';
import { Shield, CheckCircle, AlertCircle, Building } from 'lucide-react';

interface RegulationCardProps {
  data: DashboardData;
}

const RegulationCard: React.FC<RegulationCardProps> = ({ data }) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-white text-3xl font-bold mb-4">Regulation & Oversight</h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Blockrise operates under strict EU crypto regulations, ensuring the highest 
          standards of compliance and investor protection.
        </p>
      </div>

      {/* Regulatory Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* MiCAR Status */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <div className="flex items-center space-x-3 mb-4">
            <Building className="w-8 h-8 text-blue-400" />
            <h3 className="text-white text-xl font-semibold">MiCAR Compliance</h3>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <AlertCircle className="w-6 h-6 text-yellow-400" />
            <span className="text-2xl font-bold text-yellow-400">{data.regulatoryStatus.MiCAR}</span>
          </div>
          <p className="text-white/70 text-sm mb-4">
            Markets in Crypto-Assets Regulation
          </p>
          <div className="bg-yellow-500/10 rounded-lg p-3">
            <p className="text-white/80 text-sm">
              Application submitted and under review by EU authorities
            </p>
          </div>
        </div>

        {/* AFM Status */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-8 h-8 text-green-400" />
            <h3 className="text-white text-xl font-semibold">AFM Supervision</h3>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <span className="text-2xl font-bold text-green-400">{data.regulatoryStatus.AFM}</span>
          </div>
          <p className="text-white/70 text-sm mb-4">
            Dutch Authority for Financial Markets
          </p>
          <div className="bg-green-500/10 rounded-lg p-3">
            <p className="text-white/80 text-sm">
              Actively supervised and compliant with Dutch financial regulations
            </p>
          </div>
        </div>
      </div>

      {/* Compliance Framework */}
      <div className="bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-2xl p-6 border border-white/10">
        <h3 className="text-white text-xl font-semibold mb-6">Our Compliance Framework</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-400" />
            </div>
            <h4 className="text-white font-semibold mb-2">Regulatory Compliance</h4>
            <p className="text-white/70 text-sm">
              Full compliance with EU crypto regulations and Dutch financial laws
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <h4 className="text-white font-semibold mb-2">Regular Audits</h4>
            <p className="text-white/70 text-sm">
              Annual audits by independent regulators and compliance officers
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
              <Building className="w-8 h-8 text-purple-400" />
            </div>
            <h4 className="text-white font-semibold mb-2">Transparent Reporting</h4>
            <p className="text-white/70 text-sm">
              Regular reporting to regulatory authorities and public disclosure
            </p>
          </div>
        </div>
      </div>

      {/* Regulatory Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-white text-xl font-semibold mb-4">Benefits of Regulation</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-white font-semibold">Investor Protection</h4>
                <p className="text-white/70 text-sm">
                  Strict rules protect your assets and ensure fair treatment
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-white font-semibold">Legal Clarity</h4>
                <p className="text-white/70 text-sm">
                  Clear legal framework provides certainty for your investments
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-white font-semibold">Market Stability</h4>
                <p className="text-white/70 text-sm">
                  Regulated markets are more stable and less prone to manipulation
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-white text-xl font-semibold mb-4">Our Commitments</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-white font-semibold">Security Standards</h4>
                <p className="text-white/70 text-sm">
                  Meeting or exceeding all regulatory security requirements
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-white font-semibold">Transparency</h4>
                <p className="text-white/70 text-sm">
                  Full disclosure of our practices and regular reporting
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-white font-semibold">Continuous Compliance</h4>
                <p className="text-white/70 text-sm">
                  Ongoing monitoring and adaptation to regulatory changes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Regulatory Timeline */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-white text-xl font-semibold mb-6">Regulatory Timeline</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <div className="flex-1">
              <h4 className="text-white font-semibold">2023 - AFM Registration</h4>
              <p className="text-white/70 text-sm">Successfully registered with Dutch Authority for Financial Markets</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="flex-1">
              <h4 className="text-white font-semibold">2024 - MiCAR Application</h4>
              <p className="text-white/70 text-sm">Submitted application for Markets in Crypto-Assets Regulation compliance</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <div className="flex-1">
              <h4 className="text-white font-semibold">2025 - Full Compliance</h4>
              <p className="text-white/70 text-sm">Expected full compliance with all EU crypto regulations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegulationCard; 