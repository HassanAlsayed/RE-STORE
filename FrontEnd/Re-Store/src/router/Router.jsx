import Catalog from "../Catalog/Catalog";
import App from "../App.jsx";
import ProductDetails from "../Catalog/ProductDetails";
import About from "../About/About";
import Contact from "../Contact/Contact";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login.jsx";
import Register from "../Auth/Register.jsx";
import Inventory from "../Admin/Inventory.jsx";
import Edit from "../Admin/Edit.jsx";
import Create from "../Admin/Create.jsx";
import Delete from "../Admin/Delete.jsx";
import UserProfile from "../Profile/UserProfile.jsx";
import { UpdateProfile } from "../Profile/UpdateProfile.jsx";
import Home from "../Home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "home", element: <Home /> },
      { path: "catalog", element: <Catalog /> },
      { path: "catalog/:id", element: <ProductDetails /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "inventory", element: <Inventory /> },
      { path: "inventory/edit/:id", element: <Edit /> },
      { path: "inventory/create-product", element: <Create /> },
      { path: "inventory/delete/:id", element: <Delete /> },
      { path: "userProfile", element: <UserProfile /> },
      { path: "userProfile/update", element: <UpdateProfile /> },
    ],
  },
]);

export default router;
