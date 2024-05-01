import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyA7QBFuVNAJHqp0h3_AW3SZzxjpJJxitkw",
  authDomain: "e-commerceaspandreact.firebaseapp.com",
  projectId: "e-commerceaspandreact",
  storageBucket: "e-commerceaspandreact.appspot.com",
  messagingSenderId: "111958262038",
  appId: "1:111958262038:web:77e6d059aae1b795075037"
};
const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);

export { storage };