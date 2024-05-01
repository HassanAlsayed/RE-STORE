import { AppBar, Toolbar, Typography, Switch, List, ListItem, IconButton, Box, Badge, Avatar } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";
import PropTypes from 'prop-types';
import { useApp } from "./Context/useAppContext";

const midLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];

const inventory = [{ title: "inventory", path: "/inventory" }];
const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

const navStyles = {
  display: "flex",
  textDecoration: "none",
  typography: "h6",
  color: "inherit",
  "&:hover": {
    color: "black",
  },
};

function Header({ handleThemeChange, darkMode }) {
  const { role, name,imageUrl} = useApp();

  const userProfile = [
    { title: name , path: '/userProfile' } 
  ];

  return (
    <>
      <AppBar sx={{ width: "100%" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" component={NavLink} to="/" sx={navStyles}>
              RE-STORE
            </Typography>
            <Switch onChange={handleThemeChange} checked={darkMode} />
          </Box>

          <List sx={{ display: "flex" }}>
            {midLinks.map((item) => (
              <ListItem component={NavLink} to={item.path} key={item.path} sx={navStyles}>
                {item.title.toUpperCase()}
              </ListItem>
            ))}
            {role === "admin"
              ? inventory.map((item) => (
                  <ListItem component={NavLink} to={item.path} key={item.path} sx={navStyles}>
                    {item.title.toUpperCase()}
                  </ListItem>
                ))
              : null}
          </List>

          <Box sx={{ display: "flex", alignItems: "center", marginLeft: "auto", marginRight: "1rem", gap: 2 }}>
            {/* <IconButton size="large" color="inherit">
              <Badge badgeContent="4" color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton> */}
            <List sx={{ display: "flex", gap: 2 }}>
              {name ? (
                <>
                  {userProfile.map((user) => (
                    <ListItem  key={user.path} sx={navStyles}>
                      {`HELLO ${user.title.toUpperCase()}`}
                    </ListItem>
                  ))}

                  <Avatar sx={{ bgcolor: 'secondary.main' }} component={NavLink} to={'/userProfile'}>
                  {imageUrl ? (
                <img
                  src={imageUrl}
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
                </>
              ) : (
                rightLinks.map((item) => (
                  <ListItem component={NavLink} to={item.path} key={item.path} sx={navStyles}>
                    {item.title.toUpperCase()}
                  </ListItem>
                ))
              )}
            </List>
          </Box>
        </Toolbar>
      </AppBar>

      <Box mt={6}></Box>
    </>
  );
}

Header.propTypes = {
  handleThemeChange: PropTypes.func,
  darkMode: PropTypes.bool,
  role: PropTypes.string,
};

export default Header;
