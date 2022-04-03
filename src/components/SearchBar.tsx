import React, { FC, ReactNode } from 'react'

type Props = {
	filterText: string;
	inStockOnly: boolean;
	onFilterTextChange: React.Dispatch<React.SetStateAction<string>>; 
	onInStockOnlyChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar: FC<Props> = ({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) => {
	return (
		<form>
			<div>
				<input
				    type="text"
				    placeholder='Search'
					value={filterText}
					className="input is-primary"
					onChange={(e) => onFilterTextChange(e.target.value)}
				/>
			</div>
			<div className='my-3'>
				<label className='checkbox'>
					<input
					    type="checkbox"
						className='checkbox mr-2'
						checked={inStockOnly}
						onChange={(e) => onInStockOnlyChange(e.target.checked)}
					/> 
					Only show products in stock
				</label>
				{name}
			</div>
		</form>
	)
}
export default SearchBar;