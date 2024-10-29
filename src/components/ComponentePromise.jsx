import React, { useEffect, useState } from "react";
import { products } from "../data/products";
import { Card } from "./Card";

let task = new Promise((res, rej) => {
	setTimeout(() => {
		res(products);
	}, 2000);
	// rej("Rechaza la promesa")
});

export const ComponentePromise = () => {
	const [myProducts, setMyProducts] = useState([]);
	console.log(myProducts);

	useEffect(() => {
		task.then((resp) => {
			setMyProducts(resp);
		})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				console.log("Finally");
			});
	}, []);

	return (
		<div>
			{myProducts.map((product) => (
				<Card key={product.id} product={product}/>
			))}
		</div>
	);
};
