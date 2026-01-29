import React from 'react';
import { Bell, Menu } from 'lucide-react';

interface HeaderProps {
  title: string;
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title, onMenuClick }) => {
  return (
    <header className="h-16 lg:h-20 bg-[#0A1628] border-b border-gray-800 flex items-center justify-between px-4 lg:px-8">
      <div className="flex items-center gap-3">
        <button 
          onClick={onMenuClick}
          className="lg:hidden text-gray-400 hover:text-white transition-colors p-2"
        >
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-lg lg:text-2xl font-semibold text-white truncate">{title}</h1>
      </div>
      
      <div className="flex items-center gap-2 lg:gap-4">
        <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
          <Bell className="w-5 h-5 lg:w-6 lg:h-6" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full overflow-hidden border-2 border-cyan-400">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};
