import { useEffect, useState } from "react";
import { storage } from '../Firebase/Firebase'; 
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import ProductCard from "../Catalog/ProductCard";

export default function ImageComponent()
{
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
      const imageRef = ref(storage, 'images/products/');
  
      listAll(imageRef).then((res) => {
        res.items.forEach((item) => {
            getDownloadURL(item).then(url => {
              setImageUrl(url);
            });
        });
      }).catch(error => {
        console.error('Error fetching image URLs:', error);
      });
    }, []);

    return (
          <ProductCard imageUrl={imageUrl} />
    );
}