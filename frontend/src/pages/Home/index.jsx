import ContainerMain from "../../components/ContainerMain";
import CollectionHighlight from "../../components/homeComponets/CollectionHighlight"
import MainHome from "../../components/homeComponets/MainHome";
import Offer from '../../components/homeComponets/Offer';

export default function Home() {
  return (
    <ContainerMain>
      <MainHome />
      <CollectionHighlight />
      <Offer />
    </ContainerMain>
  );
}