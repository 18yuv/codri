import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

const signup = async (email, password) => {
    try {
        const userCred = await createUserWithEmailAndPassword(auth, email, password);
        await sendEmailVerification(userCred.user);
        console.log("Verification email sent!");
    } catch ( err){
        console.log(err);
    }

};