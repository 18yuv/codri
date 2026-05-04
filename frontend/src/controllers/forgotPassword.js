import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase";

const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset email sent!");
  } catch(err){
      console.log(err);
  }
};

export default resetPassword;