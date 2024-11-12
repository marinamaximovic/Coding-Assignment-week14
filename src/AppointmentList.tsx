import AppointmentCard from "./AppointmentCard";
import { Appointment } from "./testData";

type AppointmentListProps = {
  // props for the appointment list
  appointments: Appointment[]; //array of Appointment objects
};

const AppointmentList = (
  { appointments }: AppointmentListProps //AppointmentList component with props
) => (
  <div>
    {appointments.map(
      (
        appointment //go over each appointment in the array
      ) => (
        <AppointmentCard key={appointment.id} {...appointment} /> //it will pass appointment's data as props to
        // Appointment Card
      )
    )}
  </div>
);

export default AppointmentList;
