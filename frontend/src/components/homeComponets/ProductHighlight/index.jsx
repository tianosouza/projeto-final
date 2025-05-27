import CardProduct from "../../CardProduct";

import tenisProduct from "../../../assets/images/tenis-product.svg";

export default function ProductHighlight() {
  return (
    <div className="bg-color-blue dark:bg-color-secondary-dark text-gray-900 container dark:text-gray-100 flex flex-col mx-auto px-4 py-4 w-full">
      <div className="flex justify-between">
        <h3 className="text-black font-bold">Produtos em alta</h3>
        <span className="text-primary-color font-bold cursor-pointer">
          ver todos →
        </span>
      </div>
      {
        Array.from({ length: 8 }, (_, index) => (
          <CardProduct
            key={index}
            offer={index % 2 === 0 ? "20% OFF" : null}
            category="Tênis"
            productImage={tenisProduct}
            productName="K-Swiss V8 - Masculino"
            productPrice="R$ 499,99"
          />
        ))
      }
    </div>
  );
}