import { useEffect, useState } from "react";
import axios from "axios";

interface ICategoria {
  id: number;
  name: string;
  descricao: string;
}

export function useCategorias(idProp: number[]) {
  const [categorias, setCategorias] = useState<ICategoria[]>([]);
  
  const id = idProp[0]

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/category/${id}`);
        setCategorias(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategorias();
  }, []);

  return categorias;
}