import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase";

const provider = new GoogleAuthProvider();

const googleLogin = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const token = await result.user.getIdToken(true);
    } catch (err) {
        console.log(err)
    }
};