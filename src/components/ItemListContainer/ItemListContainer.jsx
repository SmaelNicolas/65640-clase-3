import { useEffect, useState } from "react";
import "./itemListContainer.css";

export const ItemListContainer = ({greeting}) => {
	const[suma,setSuma] = useState(0);
	const [resta, setResta] = useState(0)
	

	useEffect(()=>{
		console.log("useEffect sin dependencia")
	})

	useEffect(() => {
		console.log("useEffect con array de dependencia vacio");
	},[]);

	useEffect(() => {
		console.log("useEffect con array de dependencia con al menos 1 valor");
	}, [suma]);

	useEffect(() => {
		console.log(`useEffect con array de dependencia con estado rest ${resta}`);
	}, [resta]);

	useEffect(()=>{

		const handleClick =()=>{
			console.log("CLICK!")
		}
		window.addEventListener("click",handleClick)

		return ()=>{
			console.log("ItemListContainer desmontado");
			window.removeEventListener("click",handleClick)
		}
	},[])


	return (
		<div className="container--ItemListContainer">
			<button onClick={() => setSuma(suma + 1)}>Sumar +1 </button>
			<button onClick={() => setResta(resta - 1)}>Restar -1 </button>
			<div className="itemListcontainer--prop"> {greeting} </div>
		</div>
	);
};
