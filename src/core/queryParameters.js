import { useLocation, useSearchParams } from "react-router-dom";

// Hook para obtener el valor de un parámetro de consulta en la URL
export const useQueryParameter = (key) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(key); 
};

// Hook para reemplazar o eliminar un parámetro de consulta en la URL
export const useReplaceQueryParameter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return ({ key, value }) => {
    if (!value) {
      searchParams.delete(key); 
    } else {
      searchParams.set(key, value); 
    }
    setSearchParams(searchParams); 
  };
};

export const searchQueryParamName = "search"; 
