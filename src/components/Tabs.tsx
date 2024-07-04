
interface Props {
  setTab(value: string): void;
}


function Tabs({setTab}: Props){   
    return (
      <div>
        <button onClick={() => setTab("Flight")}>Flight</button>
        <button onClick={() => setTab("Hotel")}>Hotel</button>
        <button onClick={() => setTab("Rent a Car")}>Rent a Car</button>
  
      </div>
    );
  }
  
  export default Tabs;
  