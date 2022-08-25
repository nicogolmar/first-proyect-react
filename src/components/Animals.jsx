import { useState } from "react";

const Animals=()=>{

    
    const animal=["Raccoon"];
    const animales=["Leon","Tigre","Perro","Gato","Caballo"];

    const [animals, setAnimals] = useState(animal);


    

    

const addAnimals=()=>{

    setAnimals([...animals,...animales].join("-"));
}

const resetAnimals=()=>{

    setAnimals([animal]);
}


console.log(animals);

return(
    <div>
        <h3>Animals: {animals}</h3>
        <button onClick={addAnimals}>Add Animals</button>
        <button onClick={resetAnimals}>Reset Animals</button>
    </div>

);

};

export default Animals;