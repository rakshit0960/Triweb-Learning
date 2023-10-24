import { productObj } from "../utils/interfaces";

export default function ProductItem({productObj}: {productObj: productObj}) {
  return (
    <div>
        <div>
          <img src={productObj.image} alt={productObj.name} />
        </div>
        <div>
          <h1>{productObj.name}</h1>
          <p>{productObj.description}</p>
          <h4>{productObj.price}</h4>
        </div>
        <div>
          <button>{productObj.price}</button>
        </div>
    </div>
  )
}
