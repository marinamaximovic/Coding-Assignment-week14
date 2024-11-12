import Header from "./Header";
import AppointmentList from "./AppointmentList";
import { appointments } from "./testData";

// this is the main, functional, App component
const App = () => (
  //main container
  <div>
    <Header />

    <AppointmentList appointments={appointments} />
  </div>
);

//we have to export it so it can be used again in the other files
export default App;
