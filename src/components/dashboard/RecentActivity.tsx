import React from 'react';
import { Card } from '@/components/ui/card';
import { Activity } from '@/types';

const activities: Activity[] = [
  {
    id: '1',
    type: 'appointment',
    message: 'AI booked appointment for iPhone 13 screen repair',
    timestamp: '2 min ago',
  },
  {
    id: '2',
    type: 'transfer',
    message: 'Warm transfer to technician - Software issue',
    timestamp: '5 min ago',
  },
  {
    id: '3',
    type: 'quote',
    message: 'Quote provided for iPad battery replacement',
    timestamp: '8 min ago',
  },
  {
    id: '4',
    type: 'dropped',
    message: 'Call dropped after 12 seconds',
    timestamp: '15 min ago',
  },
];

const getStatusColor = (type: Activity['type']) => {
  switch (type) {
    case 'appointment':
      return 'bg-green-500';
    case 'transfer':
      return 'bg-orange-500';
    case 'quote':
      return 'bg-green-500';
    case 'dropped':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};

export const RecentActivity: React.FC = () => {
  return (
    <Card className="bg-[#0F1F3A] border-gray-800 p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <div className={`w-2 h-2 rounded-full mt-2 ${getStatusColor(activity.type)}`}></div>
            <div className="flex-1">
              <p className="text-sm text-white">{activity.message}</p>
              <p className="text-xs text-gray-400 mt-1">{activity.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
