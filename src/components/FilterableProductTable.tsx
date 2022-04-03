import React, { FC, useState } from 'react'
import { IProduct} from '../interfaces';
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

type Props = {
	products: IProduct[]
};


const FilterableProductTable: FC<Props> = ({products}) => {

	const [filterText, setFilterText] = useState('');
	const [inStockOnly, setInStockOnly] = useState(false);
	return (
		<>
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

export default FilterableProductTable