import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../Firebase/Firebase";
import { v4 } from "uuid";

export const CreateImage = async (product) => {
    const imageRef = ref(storage, `images/products/${product.Name + v4()}`);

    try {
        await uploadBytes(imageRef, product.File);
        const imageUrl = await getDownloadURL(imageRef);
        console.log('Image uploaded successfully');
        console.log('Image URL:', imageUrl);
        
        return imageUrl;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error; 
    }
};
