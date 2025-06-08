import { ContainerMain } from "../../components/ContainerMain";
import { CollectionHighlight } from "../../components/homeComponets/CollectionHighlight"
import { MainHome } from "../../components/homeComponets/MainHome";
import { ProductHighlight } from "../../components/homeComponets/ProductHighlight";
import { SpecialOffer } from "../../components/homeComponets/SpecialOffer";

export function Home() {
  return (
    <ContainerMain>
      <MainHome />
      <CollectionHighlight />
      <ProductHighlight />
      <SpecialOffer />
    </ContainerMain>
  );
}