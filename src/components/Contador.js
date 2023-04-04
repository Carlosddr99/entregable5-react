import { useState } from "react"


export function Contador(){

    const[numero, setNumero] = useState(0);
    const[error, setError] = useState(false);

    function setValue(valor){
        setNumero(valor);
        if(numero >= 3){
            setError(true);
            throw new Error('Hemos llegado a 3');
        }
    }

    return(
        <div>
            <button onClick={()=> setValue(numero-1)}>-</button>
            <span>{error? error: numero}</span>
            <button onClick={()=> setValue(numero+1)}>+</button>
        </div>
    )
}