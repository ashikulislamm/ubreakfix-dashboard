import React from 'react';
import { Phone, Bot, ArrowRightLeft, Calendar, XCircle, Clock } from 'lucide-react';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { CallTrendsChart } from '@/components/dashboard/CallTrendsChart';
import { RecentActivity } from '@/components/dashboard/RecentActivity';
import { TopRepairRequests } from '@/components/dashboard/TopRepairRequests';

export const DashboardOverview: React.FC = () => {
  return (
    <div className="p-4 lg:p-8 space-y-4 lg:space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <StatsCard
          title="Total Calls Today"
          value="127"
          change={12}
          icon={<Phone className="w-6 h-6 text-white" />}
          iconBgColor="bg-blue-500"
        />
        <StatsCard
          title="AI-Handled Calls"
          value="98"
          change={77}
          icon={<Bot className="w-6 h-6 text-white" />}
          iconBgColor="bg-purple-500"
        />
        <StatsCard
          title="Warm Transfer"
          value="23"
          change={18}
          icon={<ArrowRightLeft className="w-6 h-6 text-white" />}
          iconBgColor="bg-orange-500"
        />
        <StatsCard
          title="Appointments Booked"
          value="34"
          change={8}
          icon={<Calendar className="w-6 h-6 text-white" />}
          iconBgColor="bg-green-500"
        />
        <StatsCard
          title="Missed/Failed Calls"
          value="6"
          change={-3}
          icon={<XCircle className="w-6 h-6 text-white" />}
          iconBgColor="bg-red-500"
        />
        <StatsCard
          title="Avg Call Duration"
          value="3:42"
          change={15}
          icon={<Clock className="w-6 h-6 text-white" />}
          iconBgColor="bg-blue-400"
        />
      </div>

      {/* Call Trends Chart */}
      <CallTrendsChart />

      {/* Recent Activity and Top Repair Requests */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <RecentActivity />
        <TopRepairRequests />
      </div>
    </div>
  );
};
