import Catalog from "../Catalog/Catalog";

export const PageNumbers = ({pageNumbers}) =>{
    console.log('from page numbers '+pageNumbers)
    return(
       <Catalog pageNumbers={pageNumbers}/>
    )
}