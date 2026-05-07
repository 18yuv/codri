import {
    GoogleAuthProvider,
    signInWithPopup,
    setPersistence,
    browserLocalPersistence
} from "firebase/auth";
import { auth } from "../services/firebase.js";
import { googleProvider } from "../services/firebase.js";

const googleLogin = async () => {
    try {
        await setPersistence(auth, browserLocalPersistence);
        const result = await signInWithPopup(auth, googleProvider);
        const token = await result.user.getIdToken(true);
        return result.user;
    } catch (err) {
        console.log(err)
        throw err;
    }
};

export default googleLogin;