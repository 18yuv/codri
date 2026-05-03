import { signInWithEmailAndPassword } from "firebase/auth";

const login = async (email, password) => {
    try {

        const userCred = await signInWithEmailAndPassword(auth, email, password);
        if (!userCred.user.emailVerified) {
            alert("Please verify your email first!");
            return;
        }

        const token = await userCred.user.getIdToken();
        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth`, {
            headers : {
                Authorization: `Bearer ${token}`,
            }
        });
    } catch (err) {
        console.log(err);
    }
};