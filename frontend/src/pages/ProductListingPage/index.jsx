import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Message } from 'primereact/message';
import { Section } from "../../components/Section";
import { ProductListing } from "../../components/ProductListing";
import { ProductFilters } from "../../components/ProductFilters";
import { FilterSidebar } from "../../components/FilterSidebar";
import { Products } from "../../data/Products";

const { items } = Products;
const products = Products;

const normalize = (text) =>
  text?.toString().toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "") || "";

export function ProductListingPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { category = "" } = useParams(); 

  
  const [sortOption, setSortOption] = useState("relevantes");
  const [filters, setFilters] = useState({
    categorys: [],
    brand: [],
    condition: "",
    gender: [],
  });
  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(items);

  
  const getQueryParams = () => {
    const searchParams = new URLSearchParams(location.search);
    const filter = searchParams.get("filter") || "";
    const extraCat = searchParams.getAll("cat");

    const knownFilters = [
      ...products.filter.brand.map((item) => item.value),
      ...products.filter.gender.map((item) => item.value),
      ...products.filter.condition.map((item) => item.value),
    ];

    let gender = [], brand = [], condition = "";

    if (knownFilters.includes(filter.toLowerCase())) {
      if (["masculino", "feminino", "unissex"].includes(filter.toLowerCase())) {
        gender = [filter.toLowerCase()];
      } else if (["novo", "usado"].includes(filter.toLowerCase())) {
        condition = filter.toLowerCase();
      } else {
        brand = [filter.toLowerCase()];
      }
    }

    const querybrand = searchParams.getAll("brand");
    const querygender = searchParams.getAll("gender");

    return {
      brand: querybrand?.length ? querybrand : brand,
      condition: searchParams.get("condition") || condition,
      gender: querygender?.length ? querygender : gender,
      categorys: [category, ...extraCat].filter(Boolean),
      filterText: filter,
    };
  };

  
  useEffect(() => {
    const queryFilters = getQueryParams();
    setFilters({
      categorys: queryFilters.categorys,
      brand: queryFilters.brand,
      condition: queryFilters.condition,
      gender: queryFilters.gender,
    });
    setSearchText(queryFilters.filterText);
  }, [category, location.search]);

  
  useEffect(() => {
    let filtered = [...items];

    if (filters.categorys?.length) {
      filtered = filtered.filter((p) => filters.categorys.includes(p.category.value));
    }
    if (filters.brand?.length) {
      filtered = filtered.filter((p) => filters.brand.includes(p.brand.value));
    }
    if (filters.condition) {
      filtered = filtered.filter((p) => normalize(p.condition.value) === normalize(filters.condition));
    }
    if (filters.gender?.length) {
      filtered = filtered.filter((p) => filters.gender.includes(p.gender.value));
    }

    if (searchText.trim()) {
      const textoNorm = normalize(searchText);
      filtered = filtered.filter(
        (p) =>
          normalize(p.brand.value).includes(textoNorm) ||
          normalize(p.name).includes(textoNorm) ||
          normalize(p.category.value).includes(textoNorm)
      );
    }

    
    if (sortOption === "menor-preco") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "maior-preco") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === "relevantes") {
      filtered.sort((a, b) => {
        const score = (p) => {
          let s = 0;
          if (filters.brand.includes(p.brand.value)) s += 3;
          if (filters.gender.includes(p.gender.value)) s += 2;
          if (normalize(filters.condition) === normalize(p.condition.value)) s += 1;
          if (filters.categorys.includes(p.category.value)) s += 2;
          return s;
        };
        return score(b) - score(a);
      });
    }

    setFilteredProducts(filtered); 
  }, [filters, sortOption, searchText]);

  
  const updateFilter = (filterKey, value) => {
    const searchParams = new URLSearchParams(location.search);
    let categorys = [...(filters.categorys || [])];
    let brand = [...(filters.brand || [])];
    let gender = [...(filters.gender || [])];
    let condition = filters.condition;
    let filterTextLocal = searchText;

    
    if (filterKey === "categorys") {
      categorys = categorys.includes(value)
        ? categorys.filter((cat) => cat !== value)
        : [...categorys, value];
      searchParams.delete("cat");
      categorys.slice(1).forEach((cat) => searchParams.append("cat", cat));
    } else if (filterKey === "brand") {
      brand = brand.includes(value) ? brand.filter((m) => m !== value) : [...brand, value];
      searchParams.delete("brand");
      brand.forEach((m) => searchParams.append("brand", m));
    } else if (filterKey === "gender") {
      gender = gender.includes(value) ? gender.filter((g) => g !== value) : [...gender, value];
      searchParams.delete("gender");
      gender.forEach((g) => searchParams.append("gender", g));
    } else if (filterKey === "condition") {
      condition = condition === value ? "" : value;
      condition ? searchParams.set("condition", condition) : searchParams.delete("condition");
    } else if (filterKey === "filter") {
      filterTextLocal = "";
      searchParams.delete("filter");
    }

    
    const primary = categorys[0] || "";
    const path = primary ? `/produtos/${primary}` : "/produtos";

    setFilters({ categorys, brand, gender, condition });
    setSearchText(filterTextLocal);
    navigate({ pathname: path, search: searchParams.toString() });
  };

  
  const buildFilterText = () => {
    const parts = [];

    filters.categorys.forEach((cat) => {
      const catObj = products.filter.category.find((c) => c.value === cat);
      parts.push(`Categoria: ${catObj ? catObj.name : cat}`);
    });
    filters.brand.forEach((brand) => {
      const brandObj = products.filter.brand.find((m) => m.value === normalize(brand));
      parts.push(`Marca: ${brandObj ? brandObj.name : brand}`);
    });
    filters.gender.forEach((gen) => {
      const genderObj = products.filter.gender.find((g) => g.value === normalize(gen));
      parts.push(`Gênero: ${genderObj ? genderObj.name : gen}`);
    });
    if (filters.condition) {
      const conditionObj = products.filter.condition.find((e) => e.value === normalize(filters.condition));
      parts.push(`Condição: ${conditionObj ? conditionObj.name : filters.condition}`);
    }

    return parts?.length > 0 ? parts.join(" | ") : "todos os produtos";
  };

  
  const renderActiveFilters = () => {
    const activeFilters = [];

    filters.categorys.forEach((cat, i) => {
      const catObj = products.filter.category.find((c) => c.value === cat);
      if (catObj) activeFilters.push({ key: `categorys-${i}`, label: `Categoria: ${catObj.name}`, value: cat });
    });

    filters.brand.forEach((m, i) => {
      activeFilters.push({ key: `brand-${i}`, label: `Marca: ${m}`, value: m });
    });

    if (filters.condition)
      activeFilters.push({ key: "condition", label: `Condição: ${filters.condition}`, value: filters.condition });

    filters.gender.forEach((g, i) => {
      activeFilters.push({ key: `gender-${i}`, label: `Gênero: ${g}`, value: g });
    });

    if (searchText.trim()) {
      activeFilters.push({ key: "filter", label: `Busca: ${searchText}`, value: searchText });
    }

    return (
      <div className="flex gap-2 mt-3 flex-wrap">
        {activeFilters.map(({ key, label, value }) => (
          <div
            key={key}
            className="flex text-xs xl:text-sm align-items-center border-round p-1 px-2 bg-pink-600 text-white"
          >
            <span>{label}</span>
            <button
              onClick={() =>
                updateFilter(
                  key.startsWith("categorys") ? "categorys" : key.split("-")[0],
                  value
                )
              }
              className="text-white cursor-pointer border-none bg-transparent"
              style={{ fontSize: "1.2rem", lineHeight: "1rem" }}
              aria-label={`Remover filtro ${key}`}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    );
  };

  const content = (
    <div className="flex align-items-center">
        <i className="pi pi-info-circle" style={{ fontSize: '1.5rem' }}></i>
        <div className="ml-2">Produto não encontrado.</div>
    </div>
  );

  
  return (
    <Section 
      sectionMb={2}
    >
      <div className="grid">
        <FilterSidebar
          setSortOption={setSortOption}
          products={filteredProducts}
          filterText={buildFilterText()}
          activeFilters={renderActiveFilters()}
        >
          <ProductFilters filters={filters} updateFilter={updateFilter} />
        </FilterSidebar>

        <div className="col md:p-0">
          {filteredProducts?.length > 0 ? (
            <ProductListing cols={[6, 4]} data={filteredProducts} />
          ) : (
            <Message
                style={{
                    borderLeft: 'solid var(--indigo-600)',
                    borderWidth: '0 0 0 6px',
                    color: 'var(--indigo-600)'
                }}
                className="border-primary w-full justify-content-start font-semibold"
                severity="info"
                content={content}
            />
          )}
        </div>
      </div>
    </Section>
  );
};