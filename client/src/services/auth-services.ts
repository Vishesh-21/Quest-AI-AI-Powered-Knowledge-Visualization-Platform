import api from "@/utils/axios";
import { auth, provider } from "@/utils/firebase";
import { signInWithPopup } from "firebase/auth";

export const loginWithGoogle = async () => {
  const response = await signInWithPopup(auth, provider);
  const user = response.user;

  const { displayName: name, email, photoURL: imageURL } = user;

  const result = await api.post(
    "/api/auth/google",
    {
      name,
      email,
      imageURL,
    },
    {
      withCredentials: true,
    },
  );

  return result.data;
};
