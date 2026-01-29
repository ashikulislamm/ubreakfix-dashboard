import React, { ReactNode } from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  change: number;
  icon: ReactNode;
  iconBgColor: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ 
  title, 
  value, 
  change, 
  icon, 
  iconBgColor 
}) => {
  const isPositive = change >= 0;
  
  return (
    <Card className="bg-[#0F1F3A] border-gray-800 p-6 relative overflow-hidden">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-400 mb-2">{title}</p>
          <h3 className="text-3xl font-bold text-white mb-2">{value}</h3>
          <p className={cn(
            "text-sm font-medium",
            isPositive ? "text-green-400" : "text-red-400"
          )}>
            {isPositive ? '+' : ''}{change}%
          </p>
        </div>
        
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center",
          iconBgColor
        )}>
          {icon}
        </div>
      </div>
    </Card>
  );
};
