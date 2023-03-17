import { useEffect, useState } from "react";


export default function Inicio(){
    
    const [semaforo, setSemaforo] = useState(true);
    useEffect(() => {
        console.log("use efect",semaforo)

    },[semaforo]);
    
    function cambiar(){
        
        setSemaforo(!semaforo);
        
        
    }
    
    return(
        <div>
           
            <p>
                semaforo {semaforo}
            </p>
            <p>el semaforo esta en color {semaforo? "rojo":"verde"}</p>
            
            <button type="submit" onClick={cambiar}>semaforo</button>
        </div>
    );


}