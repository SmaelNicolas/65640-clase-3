import { useState } from "react";
import "./App.css";
import { ComponentePromise } from "./components/ComponentePromise";
import { HookUseRef } from "./components/HookUseRef";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
	const[mostrar,setMostrar] = useState(true);
	
	return (
		<div className="container--app">
			<Navbar />

			{/* <button onClick={() => setMostrar(!mostrar)}>Monstar y Desmontar ItemListContainer</button> */}

			{/* {mostrar && <ItemListContainer greeting={"Hello! 👋 2"} />} */}
			{/* <ItemListContainer greeting={"Hello! 👋 "} /> */}
			{/* <HookUseRef /> */}
			<ComponentePromise />
		</div>
	);
}

export default App;
