import { Grid } from "@mui/material"
import ProductCard from "./ProductCard"
import { useApp } from "../Context/useAppContext";

function ProductList() {
    const {products} = useApp();
    return (
        <Grid container spacing={4}>
            {products.map(product => (
                <Grid item xs={4} key={product.id}>
                    <ProductCard product={product} />
                </Grid> 
))}
                </Grid>
)}

export default ProductList;