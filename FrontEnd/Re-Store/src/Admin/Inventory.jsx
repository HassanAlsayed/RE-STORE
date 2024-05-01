import { Typography, Button, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Box } from "@mui/material";
 import { useEffect, useState } from "react";
 import axios from "axios";
 import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

export default function Inventory() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            axios.get('http://localhost:5043/api/products')
                .then(res => setProducts(res.data))
                .catch(error => console.log(error))
        },1000);
      
        return () => clearTimeout(timeoutId); 
    }, []);

    
  
    return (
        <>
            <Box display='flex' justifyContent='space-between'>
                <Typography sx={{ p: 2 }} variant='h4'>Inventory</Typography>
                <Button sx={{ m: 2 }} size='large' variant='contained' component={Link} to='/inventory/create-product'>Create</Button>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="left">Product</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="center">Type</TableCell>
                            <TableCell align="center">Brand</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                         {products && products.map((product) => ( 
                            <TableRow
                                key={product.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {product.id}
                                </TableCell>
                                <TableCell align="left">
                                    <Box display='flex' alignItems='center'>
                                        <img src={product.pictureUrl} alt={product.name} style={{ height: 50, marginRight: 20 }} />
                                        <span>{product.name}</span>
                                    </Box>
                                </TableCell>
                                <TableCell align="right">{product.price}</TableCell>
                                <TableCell align="center">{product.type}</TableCell>
                                <TableCell align="center">{product.brand}</TableCell>
                                <TableCell align="center">{product.quantityInStock}</TableCell> 
                                <TableCell align="right">
                                     <Button component={Link} to={`/inventory/edit/${product.id}`}>edit</Button>                                    
            {loading && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
                    <ClipLoader size={50} color="#0000FF" />
                </div>
            )} 
             <Button component={Link}  to={`/inventory/delete/${product.id}`}>Delete</Button> 
                

                                </TableCell>
                            </TableRow>
                        ))}
                       
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
