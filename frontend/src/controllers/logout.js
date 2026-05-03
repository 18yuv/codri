import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

await signOut(auth);