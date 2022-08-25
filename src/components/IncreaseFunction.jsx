import { useState } from "react";
import Information from "./Information";

const IncreaseFunction =()=>{
    let [count, setCount] = useState(0);

    console.log("count",count);



    const increase=()=>{

        setCount(count+1);
    };

    const decrease=()=>{
        
        setCount(count-1);
    };

    const reset=()=>{
        setCount(count=0);
    }
  


    return(

        <div className="Functions">
            <h3>Contador : {count} </h3>
            <button onClick={increase}>INCREASE</button>
            <button onClick={reset}>RESET</button>
            <button onClick={decrease}>DECREASE</button>
            <Information></Information>
            
        </div>

    );

};


export default IncreaseFunction;