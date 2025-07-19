import BlockriseDashboard from '../components/BlockriseDashboard';
import { mockData } from '../data/mockData';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-[100px]" />
      <div className="relative">
        <BlockriseDashboard data={mockData} />
      </div>
    </div>
  );
}
