import axios from "axios";
import { useEffect, useState } from "react";
import ProductList from "../Catalog/ProductList";
import { AddPagination } from "./AddPagination";
import Catalog from "../Catalog/Catalog";

export const Search = (props) =>{
    const [products,setProducts] = useState([]);
useEffect(()=>{
    axios.get(`http://localhost:5043/api/Products/Search?search=${props.search}`)
    .then((res) =>  setProducts(res.data))
    .catch((e) => console.log(e));
   
},[props.search]);
console.log(products);
return(
     <ProductList products={products}/>
)

}