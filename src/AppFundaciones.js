import { Header } from "./components/Header";
import { NotificationList } from "./components/NotificationList";


function AppFundaciones() {

  let genType = true

  return (
    <div className="App">
      <Header />
      <NotificationList genType={ genType } />
    </div>
  );
}

export default AppFundaciones;
