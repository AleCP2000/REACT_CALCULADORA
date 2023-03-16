import React, {useState} from 'react'

export default function calculadora() {
    // guardando resultado de las operaciones con un estado
    const [result, setResult] = useState("");

    //asignacion de métodos:

    const limpiar=()=>{
        setResult("");
    }

    const eliminarItem=()=>{
        /*slice: elimina una parte de la cadena,
        eliminando caracter por caraccter con el estado slice*/
        setResult(result.slice(0,-1));
    }

    //concatenando los valores de los botones
    const handleClick=(e)=>{
        /*concatenamos los valores de los botones
        capturamos el valor del id de cada botón*/
        console.log(e.currentTarget.id);
        setResult(result.concat(e.currentTarget.id));
    }

    const calcular=()=>{
        //validando resultado de la operación
        try {
            setResult(eval(result).toString());//devuelve una cadena con numero
        } catch (error) {
            setResult("El resultado es inválido");
        }
    }

    return (
        <div className='contenedor'>
            <div className='calculadora'>
                <input id='texto' type="text" value={result} disabled/>
                <div>
                    <button className='btn-operador' onClick={limpiar}>AC</button>
                    <button className='btn-operador' onClick={eliminarItem}>DE</button>
                    <button className='btn-operador' id='.' onClick={handleClick}>.</button>
                    <button className='btn-operador' id='/' onClick={handleClick}>/</button>
                    <br />                    
                    <button className='btn-number' id='7' onClick={handleClick}>7</button>
                    <button className='btn-number' id='8' onClick={handleClick}>8</button>
                    <button className='btn-number' id='9' onClick={handleClick}>9</button>
                    <button className='btn-operador' id='*' onClick={handleClick}>*</button>                    
                    <br />                    
                    <button className='btn-number' id='4' onClick={handleClick}>4</button>
                    <button className='btn-number' id='5' onClick={handleClick}>5</button>
                    <button className='btn-number' id='6' onClick={handleClick}>6</button>
                    <button className='btn-operador' id='-' onClick={handleClick}>-</button>                  
                    <br />                    
                    <button className='btn-number' id='1' onClick={handleClick}>1</button>
                    <button className='btn-number' id='2' onClick={handleClick}>2</button>
                    <button className='btn-number' id='3' onClick={handleClick}>3</button>
                    <button className='btn-operador' id='+' onClick={handleClick}>+</button>                                    
                    <br />                    
                    <button className='btn-number' id='00' onClick={handleClick}>00</button>
                    <button className='btn-number' id='0' onClick={handleClick}>0</button>
                    <button className='btn-operador' id='=' onClick={calcular}>=</button>
                </div>
            </div>
        </div>
    )
}
