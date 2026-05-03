import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

const googleLogin = async () => {
    try {
        await signInWithPopup(auth, provider);
        const token = await result.user.getIdToken();
        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth`, {
            headers : {
                Authorization: `Bearer ${token}`,
            }
        });
    } catch (err) {
        console.log(err)
    }
};