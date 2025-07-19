export interface DashboardData {
  logoUrl: string;
  totalEUR: number;
  btc: { amount: number; eur: number };
  eth: { amount: number; eur: number };
  clients: number;
  uptime: string;
  avgConfirmTime: string;
  lastAudit: string;
  nextAudit: string;
  auditHash: string;
  assetGrowth: number[];
  assetAllocation: { BTC: number; ETH: number };
  regulatoryStatus: {
    MiCAR: string;
    AFM: string;
  };
}

export interface CardProps {
  title: string;
  icon: React.ReactNode;
  value: string | number;
  subtitle?: string;
  onClick: () => void;
  color?: string;
  bgColor?: string;
}

export interface FullscreenCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  onClose: () => void;
  color: string;
} 