import { useState } from "react";
import Animals from "./Animals";
const Comprobation=()=>{



    const[loaging,setLoading]=useState(false);

    console.log(loaging)

    const ChangeState=()=>setLoading(!loaging)

    return(
        <div>
        <button onClick={ChangeState} >Change Loaging</button>
        
        <h3>State: {loaging.toString()}</h3>
        <Animals></Animals>
        </div>
    );
};

export default Comprobation;