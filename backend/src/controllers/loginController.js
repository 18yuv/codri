import { signInWithEmailAndPassword } from "firebase/auth";

const login = async (email, password) => {
  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCred.user);
  } catch (error) {
    console.error(error.message);
  }
};