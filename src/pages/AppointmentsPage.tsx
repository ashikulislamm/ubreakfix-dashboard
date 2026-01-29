import React from 'react';
import { Calendar, CheckCircle, Clock, Copy } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Appointment } from '@/types';

const appointments: Appointment[] = [
  {
    clientName: 'Jane.D',
    clientPhone: '01960685765',
    clientEmail: 'admin@gmail.com',
    device: 'Apple/Iphone 13pro',
    repairType: 'Screen',
    date: '02/06/2026',
    slotNo: 1,
    startTime: '09:00',
  },
  {
    clientName: 'Jane.D',
    clientPhone: '01960685765',
    clientEmail: 'admin@gmail.com',
    device: 'Apple/Iphone 13pro',
    repairType: 'Screen',
    date: '02/06/2026',
    slotNo: 1,
    startTime: '10:00',
  },
  {
    clientName: 'Jane.D',
    clientPhone: '01960685765',
    clientEmail: 'admin@gmail.com',
    device: 'Apple/Iphone 13pro',
    repairType: 'Screen',
    date: '02/06/2026',
    slotNo: 1,
    startTime: '11:00',
  },
  {
    clientName: 'Jane.D',
    clientPhone: '01960685765',
    clientEmail: 'admin@gmail.com',
    device: 'Apple/Iphone 13pro',
    repairType: 'Screen',
    date: '02/06/2026',
    slotNo: 1,
    startTime: '12:00',
  },
  {
    clientName: 'Jane.D',
    clientPhone: '01960685765',
    clientEmail: 'admin@gmail.com',
    device: 'Apple/Iphone 13pro',
    repairType: 'Screen',
    date: '02/06/2026',
    slotNo: 1,
    startTime: '02:00',
  },
  {
    clientName: 'Jane.D',
    clientPhone: '01960685765',
    clientEmail: 'admin@gmail.com',
    device: 'Apple/Iphone 13pro',
    repairType: 'Screen',
    date: '02/06/2026',
    slotNo: 1,
    startTime: '03:00',
  },
];

export const AppointmentsPage: React.FC = () => {
  return (
    <div className="p-4 lg:p-8 space-y-4 lg:space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
        <Card className="bg-[#0F1F3A] border-gray-800 p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Total Booked</p>
              <p className="text-2xl font-bold text-white">34</p>
            </div>
          </div>
          <p className="text-sm text-green-400">+8 this week</p>
        </Card>

        <Card className="bg-[#0F1F3A] border-gray-800 p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-400">AI Booked</p>
              <p className="text-2xl font-bold text-white">28</p>
            </div>
          </div>
          <p className="text-sm text-gray-400">82% of total</p>
        </Card>

        <Card className="bg-[#0F1F3A] border-gray-800 p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Pending</p>
              <p className="text-2xl font-bold text-white">3</p>
            </div>
          </div>
          <p className="text-sm text-gray-400">Awaiting confirmation</p>
        </Card>
      </div>

      {/* Booking Link */}
      <Card className="bg-[#0F1F3A] border-gray-800 p-4 lg:p-6">
        <h3 className="text-base lg:text-lg font-semibold text-white mb-3 lg:mb-4">Booking Link</h3>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <input
            type="text"
            value="https://techstore.com/book?id=store123"
            readOnly
            className="flex-1 bg-[#1A2942] border border-gray-700 text-white px-3 lg:px-4 py-2 lg:py-3 rounded-lg focus:outline-none text-sm lg:text-base"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg flex items-center justify-center gap-2 transition-colors whitespace-nowrap">
            <Copy className="w-4 h-4 lg:w-5 lg:h-5" />
            <span className="text-sm lg:text-base">Copy Link</span>
          </button>
        </div>
      </Card>

      {/* Appointments Table */}
      <Card className="bg-[#0F1F3A] border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left p-4 text-sm font-medium text-gray-400">Client Name</th>
                <th className="text-left p-4 text-sm font-medium text-gray-400">Client Phone</th>
                <th className="text-left p-4 text-sm font-medium text-gray-400">Client mail</th>
                <th className="text-left p-4 text-sm font-medium text-gray-400">Device</th>
                <th className="text-left p-4 text-sm font-medium text-gray-400">Repair Type</th>
                <th className="text-left p-4 text-sm font-medium text-gray-400">Date</th>
                <th className="text-left p-4 text-sm font-medium text-gray-400">Slot no</th>
                <th className="text-left p-4 text-sm font-medium text-gray-400">Start Time</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={index} className="border-b border-gray-800 hover:bg-[#1A2942] transition-colors">
                  <td className="p-4">
                    <span className="text-blue-400 cursor-pointer hover:underline">
                      {appointment.clientName}
                    </span>
                  </td>
                  <td className="p-4 text-white">{appointment.clientPhone}</td>
                  <td className="p-4 text-white">{appointment.clientEmail}</td>
                  <td className="p-4 text-white">{appointment.device}</td>
                  <td className="p-4 text-white">{appointment.repairType}</td>
                  <td className="p-4 text-white">{appointment.date}</td>
                  <td className="p-4 text-white">{appointment.slotNo}</td>
                  <td className="p-4 text-white">{appointment.startTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-3 lg:p-4 flex items-center justify-center gap-1 lg:gap-2 flex-wrap">
          <button className="px-2 lg:px-3 py-1 lg:py-2 text-sm lg:text-base text-gray-400 hover:text-white transition-colors">
            Previous
          </button>
          <button className="px-2 lg:px-3 py-1 lg:py-2 text-sm lg:text-base bg-blue-500 text-white rounded">1</button>
          <button className="px-2 lg:px-3 py-1 lg:py-2 text-sm lg:text-base text-gray-400 hover:text-white transition-colors">2</button>
          <button className="hidden sm:block px-2 lg:px-3 py-1 lg:py-2 text-sm lg:text-base text-gray-400 hover:text-white transition-colors">3</button>
          <button className="hidden sm:block px-2 lg:px-3 py-1 lg:py-2 text-sm lg:text-base text-gray-400 hover:text-white transition-colors">4</button>
          <button className="hidden md:block px-2 lg:px-3 py-1 lg:py-2 text-sm lg:text-base text-gray-400 hover:text-white transition-colors">5</button>
          <span className="hidden md:block px-2 lg:px-3 py-1 lg:py-2 text-sm lg:text-base text-gray-400">...</span>
          <button className="hidden sm:block px-2 lg:px-3 py-1 lg:py-2 text-sm lg:text-base text-gray-400 hover:text-white transition-colors">11</button>
          <button className="px-2 lg:px-3 py-1 lg:py-2 text-sm lg:text-base text-gray-400 hover:text-white transition-colors">
            Next
          </button>
        </div>
      </Card>
    </div>
  );
};
