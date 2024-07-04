import Tabs from "./components/Tabs";
import { SearchFlight } from "./components/SearchFlight";
import SearchHotel from "./components/SearchHotel";
import SearchRentAcar from "./components/SearchRentAcar";
import { useState } from "react";

function App() {
  const [tabName, setTabName] = useState("Flight");

  const setTab = (val: string) => {
    setTabName(val);
  };

  return (
    <>
      <div>
        <Tabs setTab={setTab} />

        {tabName == "Flight" && <SearchFlight />}
        {tabName == "Hotel" && <SearchHotel />}
        {tabName == "Rent a Car" && <SearchRentAcar />}
      </div>
    </>
  );
}

export default App;
