import React, { FC } from 'react';
import { IProduct } from '../interfaces';
type Props = {
	product: IProduct
};

const ProductRow: FC<Props> = ({product}) => {
	return (
		<tr>
			<td style={{ color: product.stocked ? undefined : "red" }}>{product.name}</td>
			<td>{product.price}</td>
		</tr>
	)
}

export default ProductRow