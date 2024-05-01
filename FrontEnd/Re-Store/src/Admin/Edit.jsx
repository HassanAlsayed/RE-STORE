import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { useDropzone } from "react-dropzone";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../Firebase/Firebase";
import { DeleteImage } from "../Firebase/DeleteImage";
import { v4 as uuidv4 } from "uuid";
import { ClipLoader } from "react-spinners";

export default function Edit() {
    const { id } = useParams();
    const [product, setProduct] = useState({
        Id: '',
        Name: '',
        Price: '',
        Type: '',
        Brand: '',
        Description: '',
        QuantityInStock: '',
        File: null,
        PictureUrl: '',
    });

    const [loading, setLoading] = useState(false); 
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true); 
        axios
            .get(`http://localhost:5043/api/Products/${id}`)
            .then((res) => {
                setProduct(res.data);
                setLoading(false); 
            })
            .catch((error) => {
                console.error(error);
                setLoading(false); 
            });
    }, [id]);

    const handleSaveChanges = async (event) => {
        event.preventDefault();

        if (product.File) {
            setLoading(true); 
            // Delete the old image if it exists
            if (product.PictureUrl) {
                await DeleteImage(product.PictureUrl);
            }
            // Upload the new image
            const imageRef = ref(storage, `images/products/${product.Name + uuidv4()}`);
            await uploadBytes(imageRef, product.File);
            const imageUrl = await getDownloadURL(imageRef);

            setProduct((prevProduct) => ({
                ...prevProduct,
                PictureUrl: imageUrl,
            }));
            
            await axios.put(`http://localhost:5043/api/Products/UpdateProduct`, {
                ...product,
                PictureUrl: imageUrl,
            });
        } else {
            setLoading(true); 
            await axios.put(`http://localhost:5043/api/Products/UpdateProduct`, product);
        }

        setTimeout(() => {
            setLoading(false); 
            navigate("/inventory"); 
        }, 1000); 
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
            setProduct((prevProduct) => ({
                ...prevProduct,
                File: acceptedFiles[0],
            }));
        },
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };
    return (
        <>
            <Typography variant="h4">Edit Product</Typography>
            <Box sx={{ width: '50%', margin: 'auto', mt: 2 }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="subtitle1" sx={{ textAlign: 'left' }}>Name</Typography>
                    <TextField
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    autoFocus
                />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="subtitle1" sx={{ textAlign: 'left' }}>Price</Typography>
                    <TextField 
                        type="number"
                        name="price" 
                        value={product.price}
                        onChange={handleChange}
                    />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="subtitle1" sx={{ textAlign: 'left' }}>Type</Typography>
                    <TextField 
                        type="text"
                        name="type" 
                        value={product.type}
                        onChange={handleChange}
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="subtitle1" sx={{ textAlign: 'left' }}>Brand</Typography>
                    <TextField 
                        type="text"
                        name="brand" 
                        value={product.brand}
                        onChange={handleChange}
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="subtitle1" sx={{ textAlign: 'left' }}>Quantity In Stock</Typography>
                    <TextField 
                        type="number"
                        name="quantityInStock" 
                        value={product.quantityInStock}
                        onChange={handleChange}
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="subtitle1" sx={{ textAlign: 'left' }}>Description</Typography>
                    <TextField 
                        multiline
                        rows={4}
                        type="text"
                        name="description" 
                        value={product.description}
                        onChange={handleChange}
                    />
                    </div>
                <div {...getRootProps()} style={dropzoneStyle}>
                    <input {...getInputProps()} />
                    <p>Drag & drop an image here, or click to select one</p>
                </div>
                {
                    loading? <ClipLoader/> :
                <Button onClick={handleSaveChanges} variant="contained" color="primary">Save Changes</Button>
                }
            </Box>
        </>
    );
}

const dropzoneStyle = {
    width: '100%',
    minHeight: '100px',
    border: '2px dashed #aaa',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
};