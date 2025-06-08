import { ContainerMain } from "../../components/ContainerMain";
import CardProduct from "../../components/CardProduct";
import tenisJordan from '../../assets/images/tenis-jordan.svg';
import camisetaTShirt from '../../assets/images/t-shirt.svg';
import headphoneGT from '../../assets/images/headphone.svg';
import tenisAdidas from '../../assets/images/adidas.svg';
import nikeAir from '../../assets/images/tenis-swiper.svg';


export function Products() {
  const products = [
    {
      id: 1,
      offer: "20% OFF",
      productImage: tenisJordan,
      productName: "Tênis Jordan",
      productPrice: "R$ 179,90",
      category: "Calçados",
    },
    {
      id: 2,
      productImage: camisetaTShirt,
      productName: "T-shirt Supreme",
      productPrice: "R$ 79,90",
      category: "Moda",
    },
    {
      id: 3,
      offer: "15% OFF",
      productImage: headphoneGT,
      productName: "Headphone Golden Tech",
      productPrice: "R$ 259,90",
      category: "Eletrônicos",
    },
    {
      id: 4,
      productImage: tenisAdidas,
      productName: "Tênis Adidas",
      productPrice: "R$ 399,90",
      category: "Calçados",
    },
    {
    id: 5,
    offer: "20% OFF",
      productImage: nikeAir,
      productName: "Tênis Nike Air",
      productPrice: "R$ 299,90",
      category: "Calçados",
    }
  ];

  return (
    <ContainerMain>
      <h1 className="text-4xl font-bold text-black mb-6 ">Produtos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <CardProduct
            key={product.id}
            offer={product.offer}
            productImage={product.productImage}
            productName={product.productName}
            productPrice={product.productPrice}
            category={product.category}
          />
        ))}
      </div>
    </ContainerMain>
  );
}
