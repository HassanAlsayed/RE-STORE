import {  useEffect } from "react";
import axios from "axios";
import { useApp } from "../Context/useAppContext";
import ProductList from "../Catalog/ProductList";

export const AddPagination = ({ page, search, sort}) => {
  const {setProducts,setPageNumbers,products} = useApp();
  
console.log(sort)
  useEffect(() => {
    let url = `http://localhost:5043/api/Products/Pagination/${page}`;

    const queryParams = [];
    if (search) {
      queryParams.push(`search=${search}`);
    }
    if (sort) {
       queryParams.push(`sortBy=${sort}`);
    }
    if (queryParams.length > 0) {
      url += `?${queryParams.join('&')}`;
    }

    axios.get(url)
      .then((res) => {
        setProducts(res.data.list);
        setPageNumbers(res.data.pageNumber);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [page, search, sort]); 
  return(
    
       <ProductList products={products}/>
    
  )
};
