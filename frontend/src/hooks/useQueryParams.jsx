import { useLocation, useNavigate } from "react-router-dom";
import { Products } from "../data/Products"; 

const { filter } = Products;

export function useQueryParams() {
  const location = useLocation();
  const navigate = useNavigate();

  const normalize = (text) =>
    text?.toString().toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "") || "";

  const searchParams = new URLSearchParams(location.search);
  
  const parseFilterParam = () => {
    const filterRaw = searchParams.get("filter") || "";
    const filterNorm = normalize(filterRaw);
    
    const knownbrands = filter.brand.map((f) => f.value);
    const knowngenders = filter.gender.map((f) => f.value);
    const knownconditions = filter.condition.map((f) => f.value);

    if (knowngenders.includes(filterNorm)) return { gender: [filterNorm] };
    if (knownconditions.includes(filterNorm)) return { condition: filterNorm };
    if (knownbrands.includes(filterNorm)) return { brand: [filterNorm] };
    if (filterNorm) return { texto: filterNorm };
    return {};
  };

  const getAllQueryParams = () => {
    const params = {};
    for (const [key, value] of searchParams.entries()) {
      if (params[key]) {
        if (Array.isArray(params[key])) {
          params[key].push(value);
        } else {
          params[key] = [params[key], value];
        }
      } else {
        params[key] = value;
      }
    }
    
    const categorys = searchParams.getAll("cat");
    const brand = searchParams.getAll("brand");
    const gender = searchParams.getAll("gender");
    const condition = searchParams.get("condition") || "";
    
    const genericFilter = parseFilterParam();

    return {
      categorys,
      brand: brand.length ? brand : genericFilter.brand || [],
      gender: gender.length ? gender : genericFilter.gender || [],
      condition: condition || genericFilter.condition || "",
      texto: genericFilter.texto || "",
      raw: params, 
    };
  };
  
  const setQueryParam = (key, value) => {
    if (!value) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }
    navigate(
      {
        pathname: location.pathname,
        search: searchParams.toString(),
      },
      { replace: true }
    );
  };
  
  const setMultipleQueryParams = (params) => {
    Object.entries(params).forEach(([key, value]) => {
      searchParams.delete(key);
      if (Array.isArray(value)) {
        value.forEach((v) => searchParams.append(key, v));
      } else if (value !== null && value !== undefined && value !== "") {
        searchParams.set(key, value);
      }
    });
    navigate(
      {
        pathname: location.pathname,
        search: searchParams.toString(),
      },
      { replace: true }
    );
  };

  const removeQueryParam = (key) => {
    searchParams.delete(key);
    navigate(
      {
        pathname: location.pathname,
        search: searchParams.toString(),
      },
      { replace: true }
    );
  };

  return {
    getQueryParam: (key) => searchParams.get(key),
    getAllQueryParams,
    setQueryParam,
    setMultipleQueryParams,
    removeQueryParam,
  };
}