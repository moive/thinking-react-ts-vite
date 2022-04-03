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
		<>
			<h1>{title}</h1>
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
		</>
	)
}

FilterableProductTable.defaultProps = {
	title: "Thinking in React"
};

export default FilterableProductTable;