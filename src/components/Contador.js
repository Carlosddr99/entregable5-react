import { useState } from "react"

export default function Contador(){

    const[numero, setNumero] = useState(0);

    
    function setValue(valor){
        try{
            if(numero >= 3){
                throw new Error("Hemos llegado a 3");
            }
            else{
            setNumero(valor);
            }
        }catch(error){
            console.log(error);
        }    
    }

    return(
        <div>
            <button onClick={()=> setValue(numero-1)}>-</button>
            <span>{numero}</span>
            <button onClick={()=> setValue(numero+1)}>+</button>
        </div>
    )
}