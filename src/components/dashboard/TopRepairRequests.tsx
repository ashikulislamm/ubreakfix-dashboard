import React from 'react';
import { Card } from '@/components/ui/card';
import { RepairRequest } from '@/types';

const repairRequests: RepairRequest[] = [
  { name: 'Screen Repair', count: 156 },
  { name: 'Battery Replacement', count: 89 },
  { name: 'Back Glass Repair', count: 67 },
  { name: 'Software Issues', count: 45 },
];

export const TopRepairRequests: React.FC = () => {
  const maxCount = Math.max(...repairRequests.map(r => r.count));
  
  return (
    <Card className="bg-[#0F1F3A] border-gray-800 p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Top Repair Requests</h3>
      
      <div className="space-y-4">
        {repairRequests.map((request, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-white">{request.name}</span>
              <span className="text-sm text-gray-400">{request.count} requests</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div
                className="bg-cyan-400 h-2 rounded-full transition-all"
                style={{ width: `${(request.count / maxCount) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
