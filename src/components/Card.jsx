import React from 'react';

export const Card = ({product}) => {
  return (
		<div>
			<img src={product.img} alt={product.title} />
			<div>{product.title}</div>
			<div>{product.price}</div>
		</div>
  );
}
