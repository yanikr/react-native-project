import { useState, useEffect } from "react";
// import { modulename } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "../router";
import db from "../firebase/config";
import { authStateChangeUser } from "../redux/auth/authOperations";

// import { authStateChangeUser } from "../redux/auth/authOperations";

export const Main = () => {
  // const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const { stateChange } = useSelector((state) => state.auth);

  // db.auth().onAuthStateChanged((user) => setUser(user));

  const routing = useRoute(stateChange);
  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);

  return <NavigationContainer>{routing}</NavigationContainer>;
};
// export default Main;
