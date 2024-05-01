import {
  Button,
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid,
  Divider,
  Box,
} from "@mui/material";
import { Email, Phone, Home } from "@mui/icons-material";
import { useApp } from "../Context/useAppContext";

import { Link, useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { name, role, join, address, phone, email, imageUrl,isLogin } = useApp();

  const navigate = useNavigate(); 

  const logout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
    window.location.reload();


  };
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 1000,
        margin: "auto",
        padding: 3,
        mt: 4,
        minHeight: 400,
      }}
    >
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={3}>
            <Avatar sx={{ bgcolor: "secondary.main", width: 100, height: 100 }}>
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="Profile"
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover", 
                    borderRadius: "50%" 
                  }}
                />
              ) : (
               ''
              )}
            </Avatar>

           
          </Grid>

          <Grid item xs={12} md={9}>
            <Typography variant="h4">{name || "User Name"}</Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {role || "User Role"}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Joined: {join || "Unknown"}
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        <Box>
          <Typography variant="h6">Contact Information:</Typography>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <Email fontSize="small" color="action" />
            </Grid>
            <Grid item>
              <Typography variant="body1">{email || "N/A"}</Typography>
            </Grid>
          </Grid>

          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <Phone fontSize="small" color="action" />
            </Grid>
            <Grid item>
              <Typography variant="body1">{phone || "N/A"}</Typography>
            </Grid>
          </Grid>

          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <Home fontSize="small" color="action" />
            </Grid>
            <Grid item>
              <Typography variant="body1">{address || "N/A"} </Typography>
            </Grid>
          </Grid>
        </Box>
        <Divider sx={{ my: 2 }} />
          
            <Box sx={{display:'flex', mt: 2 }}>
            <Button component={Link} to={`/userProfile/update`}>
              Update Profile
            </Button>
          </Box>
          <Box sx={{display:'flex' }}>
          <Button onClick={logout}>
              LogOut
            </Button>
          </Box>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
