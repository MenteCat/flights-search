import { useState } from "react";


const testDate = [
  {
  from: 'uk',
  to: 'italy',
  date: '01/01/2023'
},
  {
  from: 'uk',
  to: 'italy',
  date: '01/01/2023'
}
]

export function SearchFlight() {
  const [radioButtonName, setRadioButtonName] = useState("One Way")
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [multiCityFlights, setMultiCityFlights] = useState(testDate)

  // const [isReturnVisible, setReturnVisible] = useState(true)
  const setRadioButton = (val: string) => {
    setRadioButtonName(val);
  };

  const swapPlace =(e)=>{
    e.preventDefault()
   setFrom(to)
   setTo(from)
  }

  const addNewFields = ()=>{
   
     const test = {
      from: '',
      to: '',
      date: ''

    }


    setMultiCityFlights([...multiCityFlights , test])
    console.log('multiCityFlights', multiCityFlights)
  }

const removeFields =(indexProp:any)=>{
  
  setMultiCityFlights(multiCityFlights.filter((_, index)=> index !== indexProp))
}

  return (
    <div>
        <form>
          <div>
              <input onChange={() => setRadioButton("One Way")} type="radio" id="html" name="Group-tag" value="One Way" checked={radioButtonName == 'One Way'}/>
              <label>One Way</label>
              <input  onChange={() => setRadioButton("Round Trip")} type="radio" id="html" name="Group-tag" value="Round Trip" checked={radioButtonName == 'Round Trip'}/>
              <label>Round Trip</label>
              <input onChange={() => setRadioButton("Multi City")} type="radio" id="html" name="Group-tag" value='Multi City' checked={radioButtonName == 'Multi City'}/>
              <label>Multi City</label>
           
           {/* { radioButtonName === "Multi-city" && (
            // <form>
            //   <div>
            //   </div>
              
            // </form>
           )} */}
            <div>
              <input onChange={(event)=> setFrom(event.target.value)} value={from} placeholder="Where from?" />
              <button onClick={swapPlace}>Swap Inputs</button>
              <input onChange={(event)=> setTo(event.target.value)} value={to}  placeholder="Where to?" />
              <input type='date'  placeholder="Depart" />
              {radioButtonName == "Round Trip" && (
                 <input type='date' placeholder="Return" />
              )}
             
              {/* <input placeholder="Return" /> */}
            </div>
          </div>
        </form>


        {multiCityFlights.map((flight, index) => {
          return (
            <div key={index} className="flight">
              <div>{flight.from}</div>
              <div>{flight.to}</div>
              <div>{flight.date}</div>
              <button onClick={()=>removeFields(index)}>Delete</button>
            </div>
            
          )
          
        })}
    <button onClick={addNewFields}>Add another flight</button>
    </div>
    
  );
}


