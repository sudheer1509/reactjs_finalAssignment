import { loginReducer } from "./Reducers/loginReducer";
import { createStore } from "redux";
const Store = createStore(loginReducer);
export default Store;
