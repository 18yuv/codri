import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

const logout = async () => {
  await signOut(auth);
};

export default logout;