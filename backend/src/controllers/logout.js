import { signOut } from "firebase/auth";

const logout = async () => {
  await signOut(auth);
};