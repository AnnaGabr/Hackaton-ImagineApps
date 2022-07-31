import { Header } from "./components/Header";
import { NotificationList } from "./components/NotificationList";


function App() {

  let genType = 0
  
  return (
    <div className="App">
      <Header />
      <NotificationList genType={ genType }/>
    </div>
  );
}

export default App;
