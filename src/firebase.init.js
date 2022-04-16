import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCi6U7PIVfTsFVK_fF8SO8qDmemfDOqxaU",
  authDomain: "genius-car-service-af9e4.firebaseapp.com",
  projectId: "genius-car-service-af9e4",
  storageBucket: "genius-car-service-af9e4.appspot.com",
  messagingSenderId: "783051588529",
  appId: "1:783051588529:web:65b90efb380f60b2f93390"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;