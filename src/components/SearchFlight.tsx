import { useState } from "react";

export function SearchFlight() {
  const [radioButtonName, setRadioButtonName] = useState('Return')
 

  const setRadioButton = (val: string) => {
    setRadioButtonName(val);
  };

  return (
    <div>
        <form>
          <div>
              <input onClick={() => setRadioButton("One Way")} type="radio" id="html" name="Group-tag" value="HTML" />
              <label>One Way</label>
              <input  onClick={() => setRadioButton("Round Trip")} type="radio" id="html" name="Group-tag" value="HTML" />
              <label>Round Trip</label>
              <input onClick={() => setRadioButton("Multi-city")} type="radio" id="html" name="Group-tag" value="HTML" />
              <label>Multi-city</label>
           
           { radioButtonName === "Multi-city" && (
            <form>
              <div>
              </div>
              
            </form>
           )}
            <div>
              <input placeholder="Where from?" />
              <input placeholder="Where to?" />
              <input type="date" />
            </div>
          </div>
        </form>
    
    </div>
  );
}


