import React, { FC } from 'react';

type Props = {
	category: string | null;
}

const ProductCategoryRow: FC<Props> = ({category}) => {
	return (
		<tr>
			<th colSpan={2}>{category}</th>
		</tr>
	)
}

export default ProductCategoryRow