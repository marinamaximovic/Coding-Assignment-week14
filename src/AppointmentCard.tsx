import { Appointment } from "./testData";

const AppointmentCard = (
  { clientName, date, time, type }: Appointment //// Destructures props in AppointmentCard
) => (
  <div className="appointment-card">
    <h3>{clientName}</h3>
    <p>Date: {date}</p>
    <p>Time: {time}</p>
    <p>Type: {type}</p>
  </div>
);

export default AppointmentCard;
