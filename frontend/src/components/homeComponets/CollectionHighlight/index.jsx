import { useState } from "react";
import product from "../../../assets/images/t-shirt.svg";
import tenis from "../../../assets/images/adidas.svg";
import headPhone from "../../../assets/images/headphone.svg";

import CardCollection from "../../CardCollection";
import { IconCollection } from "../../IconCollection";
import { CamisaIcon, CalcaIcon, BoneIcon, FoneIcon, TenisIcon } from "../../Icons";

export function CollectionHighlight() {
  const [activeIcons, setActiveIcons] = useState("Camisas");

  const tenisStyle = "w-[450px] left-19 mt-5";
  const tshirtStyle = "w-[400px] left-35 -mt-1";
  const headPhoneStyle = "w-[300px] left-45 -mt-1";

  return (
    <div className="flex flex-col gap-2 min-h-screen w-full container mx-auto px-4 py-4">
      <div className="hidden md:flex gap-8 w-full pl-0">
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
      
      <div className="flex flex-col items-center justify-center mt-8 md:mt-32">
        <h1 className="text-black font-bold mb-4 md:mb-0">Coleções em destaque</h1>
        <div className="w-full md:flex md:gap-8 md:mt-4 md:justify-center">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 px-4 md:hidden snap-x snap-mandatory">
            <div className="flex-shrink-0 snap-center">
              <IconCollection
                collection="Camisas"
                icon={<CamisaIcon active={activeIcons === "Camisas"} />}
                active={activeIcons === "Camisas"}
                onClick={() => setActiveIcons("Camisas")}
              />
            </div>
            <div className="flex-shrink-0 snap-center">
              <IconCollection
                collection="Calças"
                icon={<CalcaIcon active={activeIcons === "Calças"} />}
                active={activeIcons === "Calças"}
                onClick={() => setActiveIcons("Calças")}
              />
            </div>
            <div className="flex-shrink-0 snap-center">
              <IconCollection
                collection="Bonés"
                icon={<BoneIcon active={activeIcons === "Bonés"} />}
                active={activeIcons === "Bonés"}
                onClick={() => setActiveIcons("Bonés")}
              />
            </div>
            <div className="flex-shrink-0 snap-center">
              <IconCollection
                collection="Fones"
                icon={<FoneIcon active={activeIcons === "Fones"} />}
                active={activeIcons === "Fones"}
                onClick={() => setActiveIcons("Fones")}
              />
            </div>
            <div className="flex-shrink-0 snap-center">
              <IconCollection
                collection="Tenis"
                icon={<TenisIcon active={activeIcons === "Tenis"} />}
                active={activeIcons === "Tenis"}
                onClick={() => setActiveIcons("Tenis")}
              />
            </div>
          </div>
          
          <div className="hidden md:flex md:gap-8">
            <IconCollection
              collection="Camisas"
              icon={<CamisaIcon active={activeIcons === "Camisas"} />}
              active={activeIcons === "Camisas"}
              onClick={() => setActiveIcons("Camisas")}
            />
            <IconCollection
              collection="Calças"
              icon={<CalcaIcon active={activeIcons === "Calças"} />}
              active={activeIcons === "Calças"}
              onClick={() => setActiveIcons("Calças")}
            />
            <IconCollection
              collection="Bonés"
              icon={<BoneIcon active={activeIcons === "Bonés"} />}
              active={activeIcons === "Bonés"}
              onClick={() => setActiveIcons("Bonés")}
            />
            <IconCollection
              collection="Fones"
              icon={<FoneIcon active={activeIcons === "Fones"} />}
              active={activeIcons === "Fones"}
              onClick={() => setActiveIcons("Fones")}
            />
            <IconCollection
              collection="Tenis"
              icon={<TenisIcon active={activeIcons === "Tenis"} />}
              active={activeIcons === "Tenis"}
              onClick={() => setActiveIcons("Tenis")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}