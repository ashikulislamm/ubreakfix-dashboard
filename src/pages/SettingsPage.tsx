import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Edit2 } from 'lucide-react';

export const SettingsPage: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'password'>('profile');

  return (
    <div className="p-4 lg:p-8 max-w-4xl">
      <Card className="bg-[#0F1F3A] border-gray-800">
        {/* Tabs */}
        <div className="border-b border-gray-800">
          <div className="flex gap-4 lg:gap-8 px-4 lg:px-6">
            <button
              onClick={() => setActiveTab('profile')}
              className={`py-3 lg:py-4 text-sm lg:text-base border-b-2 transition-colors ${
                activeTab === 'profile'
                  ? 'border-white text-white'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab('password')}
              className={`py-3 lg:py-4 text-sm lg:text-base border-b-2 transition-colors ${
                activeTab === 'password'
                  ? 'border-white text-white'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              Password Settings
            </button>
          </div>
        </div>

        {/* Profile Tab Content */}
        {activeTab === 'profile' && (
          <div className="p-4 lg:p-6 space-y-4 lg:space-y-6">
            {/* Profile Image */}
            <div>
              <h3 className="text-white font-medium mb-3 lg:mb-4 text-sm lg:text-base">Profile Image</h3>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 lg:gap-4">
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-gray-700">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                {isEditing && (
                  <button className="flex items-center gap-2 px-3 lg:px-4 py-2 bg-[#1A2942] border border-gray-700 text-white text-sm lg:text-base rounded-lg hover:bg-[#1F3152] transition-colors">
                    <Edit2 className="w-4 h-4" />
                    Edit Profile
                  </button>
                )}
              </div>
            </div>

            {/* Profile Fields */}
            {!isEditing ? (
              <div className="space-y-4">
                <div>
                  <label className="text-white font-medium mb-2 block">Full Name:</label>
                  <p className="text-white">Jane D.</p>
                </div>
                <div>
                  <label className="text-white font-medium mb-2 block">Email:</label>
                  <p className="text-white">jane@gmail.com</p>
                </div>
                <div>
                  <label className="text-white font-medium mb-2 block">Store Name:</label>
                  <p className="text-white">Ubreakfix Store</p>
                </div>
                <div>
                  <label className="text-white font-medium mb-2 block">Store Address:</label>
                  <p className="text-white">123 Main Street, New York, NY 10001</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="text-white font-medium mb-2 block">Full Name</label>
                  <Input
                    defaultValue="Jane D."
                    className="bg-[#1A2942] border-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="text-white font-medium mb-2 block">Email</label>
                  <Input
                    defaultValue="jane@gmail.com"
                    type="email"
                    className="bg-[#1A2942] border-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="text-white font-medium mb-2 block">Store Name</label>
                  <Input
                    defaultValue="Ubreakfix Store"
                    className="bg-[#1A2942] border-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="text-white font-medium mb-2 block">Store Address</label>
                  <Input
                    defaultValue="123 Main Street, New York"
                    className="bg-[#1A2942] border-gray-700 text-white"
                  />
                </div>
              </div>
            )}

            {/* Action Button */}
            {!isEditing ? (
              <Button
                onClick={() => setIsEditing(true)}
                className="bg-[#1A2942] border border-gray-700 text-white hover:bg-[#1F3152] text-sm lg:text-base"
              >
                <Edit2 className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => setIsEditing(false)}
                  className="bg-green-500 hover:bg-green-600 text-white flex-1 text-sm lg:text-base"
                >
                  Save
                </Button>
                <Button
                  onClick={() => setIsEditing(false)}
                  variant="outline"
                  className="border-gray-700 text-white hover:bg-[#1A2942] flex-1 text-sm lg:text-base"
                >
                  Cancel
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Password Tab Content */}
        {activeTab === 'password' && (
          <div className="p-4 lg:p-6 space-y-4 lg:space-y-6">
            <div>
              <label className="text-white font-medium mb-2 block">Current Password</label>
              <Input
                type="password"
                placeholder="Enter current password"
                className="bg-[#1A2942] border-gray-700 text-white"
              />
            </div>
            <div>
              <label className="text-white font-medium mb-2 block">New Password</label>
              <Input
                type="password"
                placeholder="Enter new password"
                className="bg-[#1A2942] border-gray-700 text-white"
              />
            </div>
            <div>
              <label className="text-white font-medium mb-2 block">Confirm New Password</label>
              <Input
                type="password"
                placeholder="Confirm new password"
                className="bg-[#1A2942] border-gray-700 text-white"
              />
            </div>
            <Button className="bg-green-500 hover:bg-green-600 text-white w-full text-sm lg:text-base">
              Update Password
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};
