import { DashboardData } from '../types/dashboard';

export const mockData: DashboardData = {
  logoUrl: "/blockrisefinal.png",
  totalEUR: 213_750_940,
  btc: { amount: 3182, eur: 186_620_000 },
  eth: { amount: 12450, eur: 27_130_940 },
  clients: 1029,
  uptime: "99.97%",
  avgConfirmTime: "9.8 min",
  lastAudit: "2025-07-10",
  nextAudit: "2025-08-12",
  auditHash: "0x827c1fe90abcde",
  assetGrowth: [120, 140, 160, 180, 200, 210, 213],
  assetAllocation: { BTC: 87, ETH: 13 },
  regulatoryStatus: {
    MiCAR: "Pending",
    AFM: "Under Supervision"
  }
}; 