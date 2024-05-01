import { ref,deleteObject } from "firebase/storage"
import { storage } from "./Firebase"

export const DeleteImage = async (imageUrl) =>{
 const imageRef = ref(storage,imageUrl);
 await deleteObject(imageRef)
 .then(() => console.log("Delete Image"))
 .catch(() => console.log("Error Happend"));
}