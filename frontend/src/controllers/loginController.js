import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

const login = async (email, password) => {
    try {

        const userCred = await signInWithEmailAndPassword(auth, email, password);
        if (!userCred.user.emailVerified) {
            await signOut(auth);
            alert("Please verify your email first!");
            return;
        }

        const token = await userCred.user.getIdToken(true);
    } catch (err) {
        console.log(err);
    }
};

export default login;