import React, { FC, useState } from 'react'
import { IProduct} from '../interfaces';
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

type Props = {
	products: IProduct[],
	title?: string
};


const FilterableProductTable: FC<Props> = ({products, title}) => {

	const [filterText, setFilterText] = useState('');
	const [inStockOnly, setInStockOnly] = useState(false);
	return (
		<div className='mt-6 column is-half is-offset-one-quarter'>
			<h1 className='title'>{title}</h1>
			<SearchBar
				filterText={filterText} 
				inStockOnly={inStockOnly} 
				onFilterTextChange={setFilterText} 
				onInStockOnlyChange={setInStockOnly}
			/>
			<ProductTable
				products={products}
				filterText={filterText}
				inStockOnly={inStockOnly}
			/>
		</div>
	)
}

FilterableProductTable.defaultProps = {
	title: "Thinking in React"
};

export default FilterableProductTable;