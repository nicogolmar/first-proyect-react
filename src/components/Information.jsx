import { useState } from "react";
import Comprobation from "./Comprobation";

const Information=()=>
{
   const PersonaAbr=
   { userName:"Nico",
    age:27
}
        

const [info, setInfo] = useState(PersonaAbr);


const setPersona=()=>{

    setInfo({...PersonaAbr,userName:"Nicolas",
    age:27,lastName:"Golmar"
        
    })
}
    console.log(info);
  




return(

    <div className="Functions">
        <h3>{info.userName}</h3>
        <h3>{info.age}</h3>
        <h3>{info.lastName}</h3>
        <button onClick={setPersona}>Change Info</button>
        <Comprobation></Comprobation>
        
    </div>

);


};

export default Information;