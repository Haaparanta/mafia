import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setActive } from "../../reducers/userReducer";
import { auth } from "./firebase";


export const signOutUser = async () => {
  const dispatch = useDispatch();
  await signOut(auth)
    .then(() => {
      console.log("signed out");
      dispatch(setActive(false))
    })
    .catch ((error) => {
      console.log(error);
    });
};