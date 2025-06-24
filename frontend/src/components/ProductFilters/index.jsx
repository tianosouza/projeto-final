import { Divider } from "primereact/divider";
import { FilterGroup } from "../FilterGroup";
import { Products } from "../../data/Products";

const { brand, category, gender, condition } = Products.filter;
const filterTitle = ["Marca", "Categoria", "Gênero", "Condição"];
const filtersRaw = { brand, category, gender, condition };

export function ProductFilters ({ filters = {}, updateFilter }) {
  return (
    <>
      <h3 className="my-3 md:mt-0">Filtrar por</h3>
      <Divider className="mt-0 mb-3" />

      {Object.entries(filtersRaw).map(([key, options], i) => {
        const filterKey = key === "category" ? "categorys" : key;
        const inputType = key === "condition" ? "radio" : "checkbox";
        const selectedValues =
          inputType === "radio"
            ? filters[filterKey]
              ? [filters[filterKey]]
              : []
            : filters[filterKey] || [];

        return (
          <FilterGroup
            key={key}
            title={filterTitle[i]}
            inputType={inputType}
            options={options}
            selectedValues={selectedValues}
            onChange={(val) => updateFilter(filterKey, val)}
          />
        );
      })}
    </>
  );
};