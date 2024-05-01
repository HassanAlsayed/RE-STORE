import { Divider, Grid, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
function ProductDetails()
{
  const {id} = useParams();
  const [product,setProduct] = useState(null);
  const [loading,setloading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      axios.get(`http://localhost:5043/api/products/${id}`)
        .then(res => setProduct(res.data))
        .catch(error => console.log(error))
        .finally(() => setloading(false));
    }, 1000);
  
    return () => clearTimeout(timeoutId); 
  }, [id]);
  

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <ClipLoader size={50} color="#0000FF" />
        <p>Loading Product...</p>
      </div>
    );
  }
  
  if(!product) return <h3>product not found</h3>
    return(
        <>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <img src={product.pictureUrl} alt={product.name} style={{width:'80%'}}/>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h3">{product.name}</Typography>
              <Divider sx={{mb:2}}/>
              <Typography variant="h4" color='secondary'>${(product.price / 100).toFixed(2)}</Typography>
              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>{product.name}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Description</TableCell>
                      <TableCell>{product.description}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Type</TableCell>
                      <TableCell>{product.type}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Brand</TableCell>
                      <TableCell>{product.brand}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Quantity in stock</TableCell>
                      <TableCell>{product.quantityInStock}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </>
    )
}
export default ProductDetails