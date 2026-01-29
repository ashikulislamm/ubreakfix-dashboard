import React, { useState } from "react";
import { Search, Phone, Clock, CheckCircle, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CallLog } from "@/types";

const callLogs: CallLog[] = [
  {
    id: "1",
    phoneNumber: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    callType: "AI Resolved",
    issueType: "Screen",
    outcome: "Quote Provided",
    status: "Quote Provided",
  },
  {
    id: "2",
    phoneNumber: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    callType: "Warm Transfer",
    issueType: "Software",
    outcome: "Escalated to technician",
    status: "Escalated to technician",
  },
  {
    id: "3",
    phoneNumber: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    callType: "Appointment",
    issueType: "Battery",
    outcome: "Appointment Booked",
    status: "Appointment Booked",
  },
  {
    id: "4",
    phoneNumber: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "0:20",
    callType: "Dropped",
    issueType: "Unknown",
    outcome: "Call Dropped",
    status: "Call Dropped",
  },
  {
    id: "5",
    phoneNumber: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    callType: "AI Resolved",
    issueType: "Screen",
    outcome: "Quote Provided",
    status: "Quote Provided",
  },
];

const getCallTypeBadge = (type: CallLog["callType"]) => {
  const styles = {
    "AI Resolved": "bg-green-500/20 text-green-400",
    "Warm Transfer": "bg-orange-500/20 text-orange-400",
    Appointment: "bg-blue-500/20 text-blue-400",
    Dropped: "bg-red-500/20 text-red-400",
  };
  return styles[type];
};

export const CallLogsPage: React.FC = () => {
  const [selectedCall, setSelectedCall] = useState<CallLog | null>(callLogs[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Type");
  const [issueFilter, setIssueFilter] = useState("All Issues");
  const [dateFilter, setDateFilter] = useState("Today");

  // Filter call logs based on all active filters
  const filteredCallLogs = callLogs.filter((call) => {
    const matchesSearch =
      searchQuery === "" ||
      call.phoneNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      call.issueType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      call.outcome.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType =
      typeFilter === "All Type" || call.callType === typeFilter;

    const matchesIssue =
      issueFilter === "All Issues" || call.issueType === issueFilter;

    const matchesDate = dateFilter === "Today";

    return matchesSearch && matchesType && matchesIssue && matchesDate;
  });

  // Update selected call if it's filtered out
  React.useEffect(() => {
    if (
      selectedCall &&
      !filteredCallLogs.find((call) => call.id === selectedCall.id)
    ) {
      setSelectedCall(filteredCallLogs[0] || null);
    }
  }, [filteredCallLogs, selectedCall]);

  return (
    <div className="p-4 lg:p-8">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 lg:gap-4 mb-4 lg:mb-6">
        <div className="flex-1 min-w-[200px] sm:min-w-[300px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search by phone number, issue type..."
              className="pl-10 bg-[#0F1F3A] border-gray-700 text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <select
          className="bg-[#0F1F3A] border border-gray-700 text-white rounded-lg px-3 lg:px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option>All Type</option>
          <option>AI Resolved</option>
          <option>Warm Transfer</option>
          <option>Appointment</option>
          <option>Dropped</option>
        </select>
        <select
          className="bg-[#0F1F3A] border border-gray-700 text-white rounded-lg px-3 lg:px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={issueFilter}
          onChange={(e) => setIssueFilter(e.target.value)}
        >
          <option>All Issues</option>
          <option>Screen</option>
          <option>Battery</option>
          <option>Software</option>
        </select>
        <select
          className="bg-[#0F1F3A] border border-gray-700 text-white rounded-lg px-3 lg:px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        >
          <option>Today</option>
          <option>Yesterday</option>
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {/* Call List */}
        <Card className="bg-[#0F1F3A] border-gray-800 p-3 lg:p-6">
          <div className="flex items-center justify-between mb-3 lg:mb-4">
            <h3 className="text-base lg:text-lg font-semibold text-white">
              Call List
            </h3>
            <span className="text-xs lg:text-sm text-gray-400">
              {filteredCallLogs.length}{" "}
              {filteredCallLogs.length === 1 ? "call" : "calls"}
            </span>
          </div>

          {filteredCallLogs.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-400">
                No calls found matching your filters
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredCallLogs.map((call) => (
                <div
                  key={call.id}
                  onClick={() => setSelectedCall(call)}
                  className={`p-3 lg:p-4 rounded-lg border cursor-pointer transition-all ${
                    selectedCall?.id === call.id
                      ? "bg-blue-500/10 border-blue-500"
                      : "bg-[#1A2942] border-gray-700 hover:bg-[#1F3152]"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between gap-2 sm:gap-3 mb-3">
                    <div className="flex items-start gap-3 flex-1 w-full">
                      <div className="w-10 h-10 sm:w-10 sm:h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium text-sm lg:text-base break-all">
                          {call.phoneNumber}
                        </p>
                        <p className="text-xs lg:text-sm text-gray-400 mt-1">
                          {call.date} • {call.time}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded whitespace-nowrap self-start ${getCallTypeBadge(call.callType)}`}
                    >
                      {call.callType}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs lg:text-sm text-gray-400 ml-0 sm:ml-13">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 lg:w-4 lg:h-4" />
                      {call.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4" />
                      <span className="truncate">{call.outcome}</span>
                    </span>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs inline-block w-fit">
                      {call.issueType}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* Call Details */}
        <Card className="bg-[#0F1F3A] border-gray-800 p-4 lg:p-6">
          <h3 className="text-base lg:text-lg font-semibold text-white mb-3 lg:mb-4">
            Call Details
          </h3>

          {selectedCall && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Phone Number</p>
                  <p className="text-white">{selectedCall.phoneNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Duration</p>
                  <p className="text-white">{selectedCall.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Date & Time</p>
                  <p className="text-white">
                    {selectedCall.date} {selectedCall.time}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Issue Type</p>
                  <p className="text-white">{selectedCall.issueType}</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-2">Call Type</p>
                <span
                  className={`inline-block px-3 py-1 rounded text-sm ${getCallTypeBadge(selectedCall.callType)}`}
                >
                  {selectedCall.callType}
                </span>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-2">Outcome</p>
                <p className="text-white">{selectedCall.outcome}</p>
              </div>

              <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
                <FileText className="w-5 h-5" />
                Play Audio Recording
              </button>

              <div className="bg-[#1A2942] rounded-lg p-4">
                <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Conversation Transcript
                </h4>

                <div className="space-y-3">
                  <div>
                    <p className="text-cyan-400 text-sm font-medium mb-1">
                      AI Assistant:
                    </p>
                    <p className="text-gray-300 text-sm">
                      Thank you for calling UBreakIFix! How can I help you
                      today?
                    </p>
                  </div>
                  <div>
                    <p className="text-blue-400 text-sm font-medium mb-1">
                      Customer:
                    </p>
                    <p className="text-gray-300 text-sm">
                      Hi, my iPhone 13 screen is cracked. How much would it cost
                      to repair?
                    </p>
                  </div>
                  <div>
                    <p className="text-cyan-400 text-sm font-medium mb-1">
                      AI Assistant:
                    </p>
                    <p className="text-gray-300 text-sm">
                      I can help you with that! For an iPhone 13 screen repair,
                      our price is $199. This includes parts, labor, and comes
                      with a 90-day warranty. Would you like to book an
                      appointment?
                    </p>
                  </div>
                  <div>
                    <p className="text-blue-400 text-sm font-medium mb-1">
                      Customer:
                    </p>
                    <p className="text-gray-300 text-sm">
                      Yes, please! When are you available?
                    </p>
                  </div>
                  <div>
                    <p className="text-cyan-400 text-sm font-medium mb-1">
                      AI Assistant:
                    </p>
                    <p className="text-gray-300 text-sm">
                      Great! I have availability today at 2:00 PM or tomorrow at
                      10:00 AM. Which works better for you?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};
