import { sendPasswordResetEmail } from "firebase/auth";

const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset email sent!");
  } catch(err){
      console.log(err);
  }
};