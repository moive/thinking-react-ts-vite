import FilterableProductTable from "./components/FilterableProductTable";
import { IProduct } from "./interfaces";

const products:IProduct[] = [
	{ category: "Fruits", price: "$1", stocked: true, name: "Apple" },
	{ category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
	{ category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
	{ category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
	{ category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
	{ category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

const App = () => {
  return (
	<div className="container">
		<FilterableProductTable products={products} />
	</div>
  )
}

export default App