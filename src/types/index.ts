export interface CallLog {
  id: string;
  phoneNumber: string;
  date: string;
  time: string;
  duration: string;
  callType: 'AI Resolved' | 'Warm Transfer' | 'Appointment' | 'Dropped';
  issueType: string;
  outcome: string;
  status: 'Quote Provided' | 'Escalated to technician' | 'Appointment Booked' | 'Call Dropped';
}

export interface Appointment {
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  device: string;
  repairType: string;
  date: string;
  slotNo: number;
  startTime: string;
}

export interface Activity {
  id: string;
  type: 'appointment' | 'transfer' | 'quote' | 'dropped';
  message: string;
  timestamp: string;
}

export interface DashboardStats {
  totalCalls: number;
  totalCallsChange: number;
  aiHandledCalls: number;
  aiHandledCallsChange: number;
  warmTransfer: number;
  warmTransferChange: number;
  appointmentsBooked: number;
  appointmentsBookedChange: number;
  missedFailedCalls: number;
  missedFailedCallsChange: number;
  avgCallDuration: string;
  avgCallDurationChange: number;
}

export interface RepairRequest {
  name: string;
  count: number;
}
