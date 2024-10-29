import React, { useRef, useState } from 'react';

export const HookUseRef = () => {
    const divRef = useRef(null)

    // OTRO EJEMPLO
    const [suma , setSuma] = useState(0);
    const countRef = useRef(0);
    countRef.current++;

    const handleClick = () =>{
        console.log(divRef)
        console.log(divRef.current)
        divRef.current.innerHTML = "Modificado usando useRef"
    }

  return (
		<div>
			<button onClick={handleClick}> Modificar Elemento </button>
			<div ref={divRef}>Hook use ref</div>

            <button onClick={()=>setSuma(suma + 1)}>Sumar</button>
            <div>Valor de suma = {suma}</div>
            <div>Rendirazados = {countRef.current}</div>
		</div>
  );
}
