import ContainerMain from "../../components/ContainerMain";
import CollectionHighlight from "../../components/homeComponets/CollectionHighlight"
import MainHome from "../../components/homeComponets/MainHome";
import ProductHighlight from "../../components/homeComponets/ProductHighlight";

export default function Home() {
  return (
    <ContainerMain>
      <MainHome />
      <CollectionHighlight />
      <ProductHighlight />
    </ContainerMain>
  );
}