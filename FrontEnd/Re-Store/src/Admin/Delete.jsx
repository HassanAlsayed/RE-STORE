import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Button,
  CircularProgress,
  Typography
} from "@mui/material";
import { DeleteImage } from '../Firebase/DeleteImage';
import { ClipLoader } from 'react-spinners';

function Delete() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true); // Start loading while fetching product details
    axios.get(`http://localhost:5043/api/Products/${id}`)
      .then(res => {
        setProduct(res.data);
        setLoading(false); // Stop loading when product is fetched
      })
      .catch(error => {
        console.error(error);
        setLoading(false); // Stop loading on error
      });
  }, [id]);

  const handleDelete = () => {
    setLoading(true); // Start loading when delete operation begins
    axios.delete(`http://localhost:5043/api/Products/delete/${id}`)
      .then(async () => {
        if (product.pictureUrl) {
          await DeleteImage(product.pictureUrl); // Delete image
        }

        setTimeout(() => {
          setLoading(false); // Reset loading after delay
          console.log('Product deleted successfully.');
          navigate('/inventory'); // Navigate after 1 second
        }, 1000); // Delay of 1 second
      })
      .catch(error => {
        console.error("Error deleting product:", error);
        setLoading(false); 
      });
  };



  if (!product) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <>
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
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.id}
              </TableCell>
              <TableCell align="left">
                <Box display="flex" alignItems="center">
                  <img src={product.pictureUrl} alt={product.name} style={{ height: 50, marginRight: 20 }} />
                  <span>{product.name}</span>
                </Box>
              </TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="center">{product.type}</TableCell>
              <TableCell align="center">{product.brand}</TableCell>
              <TableCell align="center">{product.quantityInStock}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ textAlign: "center", mt: 2 }}>
        {loading ? <ClipLoader/> :
        <Button onClick={handleDelete} variant="contained" color="primary">
          Delete
        </Button>
         }
      </Box>
    </>
  );
}

export default Delete;
