import { combineReducers } from "redux";

// Front
import LayoutReducer from "./layouts/reducer";

// Authentication
import LoginReducer from "./auth/login/reducer";
import ProfileReducer from "./auth/profile/reducer";
import UserReducer from "./users/reducer";
import RegisterUserReducer from "./register_user/reducer";

const rootReducer = combineReducers({
  Layout: LayoutReducer,
  Login: LoginReducer,
  Profile: ProfileReducer,
  Users: UserReducer,
  RegisterUsers: RegisterUserReducer,
});

export default rootReducer;
