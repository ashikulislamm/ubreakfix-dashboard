import React from 'react';
import { Card } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', calls: 50 },
  { day: 'Tue', calls: 65 },
  { day: 'Wed', calls: 70 },
  { day: 'Thu', calls: 75 },
  { day: 'Fri', calls: 95 },
  { day: 'Sat', calls: 98 },
  { day: 'Sun', calls: 90 },
];

export const CallTrendsChart: React.FC = () => {
  return (
    <Card className="bg-[#0F1F3A] border-gray-800 p-4 lg:p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 lg:mb-6">
        <div>
          <h3 className="text-base lg:text-lg font-semibold text-white mb-1">Call Trends - This Week</h3>
          <p className="text-xs lg:text-sm text-gray-400">Total: 472 calls</p>
        </div>
        <select className="bg-[#1A2942] border border-gray-700 text-white text-xs lg:text-sm rounded-lg px-3 lg:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>This Week</option>
          <option>Last Week</option>
          <option>This Month</option>
        </select>
      </div>
      
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#60A5FA" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" />
          <XAxis 
            dataKey="day" 
            stroke="#6B7280"
            tick={{ fill: '#9CA3AF' }}
          />
          <YAxis 
            stroke="#6B7280"
            tick={{ fill: '#9CA3AF' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1F2937', 
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#fff'
            }}
          />
          <Area 
            type="monotone" 
            dataKey="calls" 
            stroke="#60A5FA" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorCalls)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};
