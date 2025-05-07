import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import { postFakeProfile, postJwtProfile } from "../../../helpers/backend_helper";
import { profileSuccess, profileError, resetProfileFlagChange } from "./reducer";

const fireBaseBackend = getFirebaseBackend();

export const editProfile = (user) => async (dispatch) => {
    try {
        let response;

        if (import.meta.env.VITE_REACT_APP_DEFAULT_AUTH === "firebase") {
            response = fireBaseBackend.editProfileAPI(
                user.username,
                user.idx
            );

        } else if (import.meta.env.VITE_REACT_APP_DEFAULT_AUTH === "jwt") {

            response = postJwtProfile(
                {
                    username: user.username,
                    idx: user.idx,
                }
            );

        } else if (import.meta.env.VITE_REACT_APP_DEFAULT_AUTH === "fake") {
            response = postFakeProfile(user);
        }

        const data = await response;

        if (data) {
            dispatch(profileSuccess(data));
        }

    } catch (error) {
        dispatch(profileError(error));
    }
};

export const resetProfileFlag = () => {
    try {
        const response = resetProfileFlagChange();
        return response;
    } catch (error) {
        return error;
    }
};