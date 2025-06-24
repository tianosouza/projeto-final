import { useState, useEffect } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { SortBy } from "../SortBy";

export function FilterSidebar ({ products, setSortOption, activeFilters, filterText, children }) {
  
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="col-12">
        <div className="flex flex-column-reverse xl:flex-row align-items-center justify-content-center xl:justify-content-between mt-0 mb-4 xl:mb-5">
          <h2 className="w-full text-base xl:text-lg mb-0 mt-3">
            Resultados para {filterText} -{" "}
            <span className="font-medium">
              {products.length} produto{products.length !== 1 ? "s" : ""}
            </span>
          </h2>

          <div className="flex justify-content-between align-items-center w-full xl:w-auto pl-2 pr-1 py-1 bg-white border-1 border-round-lg border-300 gap-2">
            <div className="font-medium text-base w-12rem xl:w-6rem">
              Ordenar por:
            </div>
            <SortBy onSort={setSortOption} />
            <Button
              icon="pi pi-filter"
              onClick={() => setVisible(true)}
              className="w-6rem bg-pink-600 border-none shadow-none block xl:hidden ml-0"
            />
          </div>
        </div>

        {products?.length > 0 ? (<div className="w-full"> {activeFilters} </div>):''}
      </div>

      {isMobile ? (
        <Sidebar
          visible={visible}
          onHide={() => setVisible(false)}
          content={({ closeIconRef, hide }) => (
            <div className="flex flex-column h-screen w-full">
              <div className="flex-grow-1 overflow-auto w-full box-border overflow-y-auto"
              style={{ scrollbarWidth: "none" }}>
                <div className="absolute w-full right-0 mr-3 mt-4 flex justify-content-end align-items-end">
                  <Button
                    type="button"
                    ref={closeIconRef}
                    onClick={(e) => hide(e)}
                    icon="pi pi-times"
                    rounded
                    outlined
                    className="h-2rem w-2rem text-color border-none shadow-none"
                  />
                </div>
                <div className="p-3" onClick={(e) => hide(e)}>{children}</div>
              </div>
              <div className="flex pb-8"></div>
            </div>
          )}
        />
      ) : (
        
        <div className="col-fixed h-full bg-white p-3 mr-4 w-16rem">
          {children}
        </div>
      )}
    </>
  );
};