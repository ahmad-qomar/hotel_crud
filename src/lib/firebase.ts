import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyBXxMsa5rIHdyLGZUWIVrHCitsYrDdffxI",
//   authDomain: "hotel-admin-dashboard-422bb.firebaseapp.com",
//   projectId: "hotel-admin-dashboard-422bb",
//   storageBucket: "hotel-admin-dashboard-422bb.appspot.com",
//   messagingSenderId: "1098032233185",
//   appId: "1:1098032233185:web:e25e2aac25b2e20e9455a0",
//   measurementId: "G-5Y9MXD16LT",
// };
const firebaseConfig = {
  apiKey: "AIzaSyCZqv7vrKmM0QlwvasLELjc2WFkpMrX3Ig",
  authDomain: "crud-react-4a4fd.firebaseapp.com",
  projectId: "crud-react-4a4fd",
  storageBucket: "crud-react-4a4fd.appspot.com",
  messagingSenderId: "763248409734",
  appId: "1:763248409734:web:d8bd170cd5382dfe15e507",
  measurementId: "G-E9WL61M0P7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
