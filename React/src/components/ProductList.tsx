import { productObj } from "../utils/interfaces";
import ProductItem from "./ProductItem";
import styles from './ProductList.module.css'

const productsArray: Array<productObj> = [
    {
      id: "1",
      name: "City tour",
      image: "",
      description: "description of city tour",
      price: 2000
    }, 
    {
        id: "2",
        name: "Zoo tour",
        image: "",
        description: "description of Zoo tour",
        price: 1000
      }, 
  ];
export default function ProductList() {
  return (
    <div className={styles.list}>
        {productsArray.map(productObj => <ProductItem key={productObj.id} productObj={productObj}/>)}
    </div>
  )
}
