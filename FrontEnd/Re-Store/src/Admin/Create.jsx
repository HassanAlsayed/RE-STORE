import axios from "axios";
import { Typography, TextField, Button, Box, CircularProgress } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import { storage } from "../Firebase/Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

export default function Create() {
  const [product, setProduct] = useState({
    Name: '',
    Price: '',
    Type: '',
    Brand: '',
    Description: '',
    QuantityInStock: '',
    PictureUrl: '',
    File: null,
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); 

  const onDrop = (acceptedFiles) => {
    setProduct({
      ...product,
      File: acceptedFiles[0],
    });
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const validateFields = () => {
    const newErrors = {};

    if (!product.Name || product.Name.length > 30) {
      newErrors.Name = "Name is required and must be less than 30 characters.";
    }
    if (!product.Description || product.Description.length > 150) {
      newErrors.Description = "Description is required and must be less than 150 characters.";
    }
    if (!product.Price || product.Price < 500) {
      newErrors.Price = "Price is required and must be at least 500.";
    }
    if (!product.Type) {
      newErrors.Type = "Type is required.";
    }
    if (!product.Brand) {
      newErrors.Brand = "Brand is required.";
    }
    if (!product.QuantityInStock || product.QuantityInStock < 1 || product.QuantityInStock > 250) {
      newErrors.QuantityInStock = "Quantity in stock is required and must be between 1 and 250.";
    }
    if (!product.File) {
      newErrors.File = "Product image is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateFields()) {
      return;
    }

    setLoading(true); 

    const imageRef = ref(storage, `images/products/${product.Name + uuidv4()}`);
    uploadBytes(imageRef, product.File)
      .then(() => getDownloadURL(imageRef))
      .then((url) => {
        const formData = new FormData();
        formData.append("Name", product.Name);
        formData.append("Price", product.Price);
        formData.append("Type", product.Type);
        formData.append("Brand", product.Brand);
        formData.append("Description", product.Description);
        formData.append("QuantityInStock", product.QuantityInStock);
        formData.append("PictureUrl", url);

        return axios.post("http://localhost:5043/api/Products/CreateProduct", formData);
      })
      .then((response) => {
        console.log("Product creation successful:", response.data);

        setTimeout(() => {
          setLoading(false); 
          navigate("/inventory"); 
        }, 1000); 
      })
      .catch((error) => {
        console.error("Error creating product:", error);
        setLoading(false); 
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  return (
    <>
      <Typography variant="h4">Create Product</Typography>
      <Box sx={{ width: "50%", margin: "auto", mt: 2 }}>
        <TextField
          type="text"
          name="Name"
          label="Product Name"
          value={product.Name}
          onChange={handleChange}
          fullWidth
          autoFocus
          margin="normal"
          error={!!errors.Name}
          helperText={errors.Name}
        />
        <TextField
          type="number"
          name="Price"
          label="Price"
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.Price}
          helperText={errors.Price}
        />
        <TextField
          type="text"
          name="Type"
          label="Type"
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.Type}
          helperText={errors.Type}
        />
        <TextField
          type="text"
          name="Brand"
          label="Brand"
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.Brand}
          helperText={errors.Brand}
        />
        <TextField
          type="number"
          name="QuantityInStock"
          label="Quantity In Stock"
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.QuantityInStock}
          helperText={errors.QuantityInStock}
        />
        <TextField
          multiline
          rows={4}
          name="Description"
          label="Description"
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.Description}
          helperText={errors.Description}
        />
        <Box {...getRootProps()} style={dropzoneStyle}>
          <input {...getInputProps()} />
          <Typography sx={{ color: errors.File ? "red" : "inherit" }}>
            {errors.File ? errors.File : "Drag & drop an image here, or click to select one"}
          </Typography>
        </Box>
        
        {loading ? (
          <ClipLoader sx={{ mt: 2 }} /> 
        ) : (
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ mt: 2 }}
          >
            Create
          </Button>
        )}
      </Box>
    </>
  );
}

const dropzoneStyle = {
  width: "100%",
  minHeight: "100px",
  border: "2px dashed #aaa",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
};
