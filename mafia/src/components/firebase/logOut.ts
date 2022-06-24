import { signOut } from "firebase/auth";
import { auth} from "./firebase";


export const signOutUser = async () => {
  await signOut(auth)
    .then(() => {
      console.log("signed out");
    })
    .catch ((error) => {
      console.log(error);
    });
};