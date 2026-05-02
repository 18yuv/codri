import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Logged in:", user);
  } else {
    console.log("Logged out");
  }
});