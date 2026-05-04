import { signOut } from "firebase/auth";
import { auth } from "../services/firebase.js";

const logout = async () => {
  await signOut(auth);
};

export default logout;