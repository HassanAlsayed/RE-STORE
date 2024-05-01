import {
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
  Avatar,
} from "@mui/material";
import { Person, Email, Phone, Home } from "@mui/icons-material";
import { useApp } from "../Context/useAppContext";
import { useEffect, useState } from "react";
import { storage } from "../Firebase/Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { DeleteImage } from "../Firebase/DeleteImage";
import { useNavigate } from "react-router-dom";

export const UpdateProfile = () => {
  const { name, address, phone, email, imageUrl } = useApp();
  
  const [formData, setFormData] = useState({
    name,
    address,
    phone,
    email,
    File: null,
    pictureUrl: imageUrl,
  });

  const [avatarUrl, setAvatarUrl] = useState(imageUrl);
  const {id} = useApp();

  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File selected:", file);
      setFormData((prevData) => ({
        ...prevData,
        File: file,
      }
    ));
    } else {
      console.error("No file selected");
    }
  };
  
  const handleFileUpload = async () => {

    try {
      if (formData.pictureUrl) {
        await DeleteImage(formData.pictureUrl);
      }
      const uniqueImageName = `${name}-${uuidv4()}`;
      const imageRef = ref(storage, `images/profile/${uniqueImageName}`);
      await uploadBytes(imageRef, formData.File);
      const downloadUrl = await getDownloadURL(imageRef);
      setAvatarUrl(downloadUrl);
      setFormData((prevData) => ({
        ...prevData,
        pictureUrl: downloadUrl,

      }));
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  useEffect(() => {
    if (formData.File) {
      handleFileUpload();   
    }
  }, [formData.File]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    try {
      await axios.put(
        `http://localhost:5043/api/Account/userProfile/update/${id}`,
        formData
      );
      console.log("Profile updated");
      navigate('/userProfile');
       window.location.reload();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <Card sx={{ width: "100%", maxWidth: 800, margin: "auto", padding: 3 }}>
      <CardContent>
        <Typography variant="h4">Update Profile</Typography>

        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={3}>
            <Avatar
              sx={{ bgcolor: "secondary.main", width: 100, height: 100 }}
            >
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt="Profile"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              ) : (
                ""
              )}
            </Avatar>

            <Box sx={{ mt: 2 }}>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                id="upload-button"
                onChange={handleFileChange}
                
              />
              <label htmlFor="upload-button">
                <Button variant="outlined" component="span">
                    Upload Image
                </Button>
              </label>
            </Box>
           
          </Grid>

          <Grid item xs={12} md={9}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={2}>
                <Person />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  name="name"
                  label="Name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
            </Grid>

            <Grid container spacing={3} alignItems="center" sx={{ mt: 2 }}>
              <Grid item xs={2}>
                <Email />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  name="email"
                  label="Email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
            </Grid>

            <Grid container spacing={3} alignItems="center" sx={{ mt: 2 }}>
              <Grid item xs={2}>
                <Phone />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  name="phone"
                  label="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
            </Grid>

            <Grid container spacing={3} alignItems="center" sx={{ mt: 2 }}>
              <Grid item xs={2}>
                <Home />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  name="address"
                  label="Address"
                  value={formData.address}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
