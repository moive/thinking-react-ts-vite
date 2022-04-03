import React, { FC } from 'react'
import { IProduct } from '../interfaces';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
type Props = {
	products: IProduct[],
	filterText: string,
	inStockOnly: boolean,
};

const ProductTable: FC<Props> = ({products, filterText, inStockOnly}) => {
	
	let rows: JSX.Element[] = [];

	let lastCategory: string | null = null;

	products.forEach(product=>{

		if(product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) return;

		if(inStockOnly && !product.stocked) return;

		if(lastCategory !== product.category){
			rows.push(
				<ProductCategoryRow
				    category={product.category}
				    key={product.category}
				/>
			);
		}
		
		rows.push(
			<ProductRow
			    product={product}
			    key={product.name}
			/>
		);

		lastCategory = product.category;
	});


	return (
		<div>
			<table className='table is-fullwidth is-hoverable'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		</div>
	)
	}

export default ProductTable