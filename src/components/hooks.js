import { useState } from "react";


export default function Hooks(props){
    const [contador, setContador] = useState(0);
    const [semaforo, setSemaforo] = useState(true);
    
    function contar(){
        setContador(contador+1);
        setSemaforo(!semaforo);
        console.log(contador, semaforo)
        
    }
    
    return(
        <div>
            <p>
            contador de react {contador}
            
            </p>
            <p>
                semaforo {semaforo}
            </p>
            
            <button type="submit" onClick={contar}>sumar contador</button>
        </div>
    );


}