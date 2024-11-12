export type Appointment = {
  //objects of the appointment
  id: number;
  clientName: string;
  date: string;
  time: string;
  type: string;
};

// array of appointments
export const appointments: Appointment[] = [
  {
    id: 1,
    clientName: "Susane Smith",
    date: "2024-11-11",
    time: "9:00 AM",
    type: "Consultation",
  },
  {
    id: 2,
    clientName: "Nicole Stivenson",
    date: "2024-11-12",
    time: "1:00 PM",
    type: "Follow-up",
  },
  {
    id: 3,
    clientName: "John Williams",
    date: "2024-11-15",
    time: "3:30 PM",
    type: "Annual Meeting",
  },
];
