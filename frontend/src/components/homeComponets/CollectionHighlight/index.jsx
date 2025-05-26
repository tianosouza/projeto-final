import { useState } from "react";
import product from "../../../assets/images/t-shirt.svg";
import tenis from "../../../assets/images/adidas.svg";
import headPhone from "../../../assets/images/headphone.svg";

import CardCollection from "../../CardCollection";
import { IconCollection } from "../../IconCollection";
import { CamisaIcon, CalcaIcon, BoneIcon, FoneIcon, TenisIcon } from "../../Icons";

export default function CollectionHighlight() {
  const [activeIcons, setActiveIcons] = useState("Camisas");

  const tenisStyle = "w-[450px] left-19 mt-5";
  const tshirtStyle = "w-[400px] left-35 -mt-1";
  const headPhoneStyle = "w-[300px] left-45 -mt-1";

  return (
    <div className="flex flex-col gap-2 min-h-screen w-full container mx-auto px-4 py-4">
      <h1 className="text-black font-bold mt-2">Coleções em destaque</h1>
      <div className="flex gap-8 w-full pl-0">
        <CardCollection
          offer="30% OFF"
          title="Novo Drop Supreme"
          button="Comprar"
          image={product}
          styleProduct={tshirtStyle}
        />
        
        <CardCollection
          offer="30% OFF"
          title="Coleção Adidas"
          button="Comprar"
          image={tenis}
          styleProduct={tenisStyle}
        />
        
        <CardCollection
          offer="30% OFF"
          title="Novo Beats Bass"
          button="Comprar"
          image={headPhone}
          styleProduct={headPhoneStyle}
        />
      </div>
      
      <div className="flex flex-col items-center justify-center mt-32">
        <h1 className="text-black font-bold">Coleções em destaque</h1>
        <div className="flex gap-8 mt-4">
          <IconCollection
            collection="Camisas"
            icon={<CamisaIcon active={true} />}
            active={activeIcons === "Camisas"}
            onClick={() => setActiveIcons("Camisas")}
          />
          <IconCollection
            collection="Calças"
            icon={<CalcaIcon />}
            active={activeIcons === "Calças"}
            onClick={() => setActiveIcons("Calças")}
          />
          <IconCollection
            collection="Bonés"
            icon={<BoneIcon />}
            active={activeIcons === "Bonés"}
            onClick={() => setActiveIcons("Bonés")}
          />
          <IconCollection
            collection="Fones"
            icon={<FoneIcon />}
            active={activeIcons === "Fones"}
            onClick={() => setActiveIcons("Fones")}
          />
          <IconCollection
            collection="Tenis"
            icon={<TenisIcon />}
            active={activeIcons === "Tenis"}
            onClick={() => setActiveIcons("Tenis")}
          />
        </div>
      </div>
    </div>
  );
}