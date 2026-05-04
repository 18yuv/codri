import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../services/firebase.js";

const signup = async (email, password) => {
    try {
        const userCred = await createUserWithEmailAndPassword(auth, email, password);
        await sendEmailVerification(userCred.user);
        console.log("Verification email sent!");
    } catch ( err){
        console.log(err);
    }

};

export default signup;