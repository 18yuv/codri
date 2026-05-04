import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase.js";

const login = async (email, password) => {
    try {

        const userCred = await signInWithEmailAndPassword(auth, email, password);
        if (!userCred.user.emailVerified) {
            await signOut(auth);
            throw new Error("Email not verified");
            return;
        }

        const token = await userCred.user.getIdToken(true);
    } catch (err) {
        console.log(err);
    }
};

export default login;