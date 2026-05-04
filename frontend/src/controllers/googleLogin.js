import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../services/firebase.js";
import { googleProvider } from "../services/firebase.js";

const googleLogin = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const token = await result.user.getIdToken(true);
    } catch (err) {
        console.log(err)
    }
};

export default googleLogin;