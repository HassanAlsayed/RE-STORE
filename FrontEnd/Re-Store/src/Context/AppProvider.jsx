  import { createContext, useEffect, useState } from "react";
  import PropTypes from "prop-types";
  import axios from "axios";
import { useApp } from "./useAppContext";


  export const AppContext = createContext();

  export default function AppProvider({ children}) {
    const [role, setRole] = useState(false);
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [address,setAddress] = useState('');
    const [phone,setPhone] = useState('');
    const [join,setJoin] = useState('');
    const [imageUrl,setImageUrl] = useState('');
    const [products,setProducts] = useState([]);
    const [isLogin,setIsLogin] = useState(false);
    const [pageNumbers, setPageNumbers] = useState(1);
    const [id, setId] = useState(1);

    useEffect(() => {
      const getUserInfo = async () => {
        const token = localStorage.getItem("accessToken");
        
        try {
          await axios.get(`http://localhost:5043/api/Account/viewProfile/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then(res=>{
              setRole(res.data.role);
              setName(res.data.name);
              setEmail(res.data.email);
              setPhone(res.data.phone);
              setAddress(res.data.address);
              setJoin(res.data.createdAt);
              setImageUrl(res.data.pictureUrl)
          });

          
        } catch (err) {
          console.error(err);
        }
      };

      getUserInfo();
    },[id]);
    return (
      <AppContext.Provider
        value={{
          role,
          name,
          email,
          phone,
          join,
          address,
          imageUrl,
          products,
          setProducts,
          pageNumbers,
          setPageNumbers,
          id,
          setId,
          isLogin,
          setIsLogin,
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }

  AppProvider.protoTypes = {
    children: PropTypes.any,
    id: PropTypes.any
  };
