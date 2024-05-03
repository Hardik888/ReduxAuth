import axios from "axios";
import { AuthActionTypes } from "./authActionsType"

export const loginUserRequest = (payload: any): AuthActionTypes => {
    return {
        type: 'LOGIN_USER_REQUEST',
        payload: payload
    }
};

export const loginUserSuccess = (): AuthActionTypes => {
    return {
        type: 'LOGIN_USER_SUCCESS'
        
    }
}
export const loginUserFailure = (error: string): AuthActionTypes => {
    return {
        type: 'LOGIN_USER_FAILURE',
        payload: error
    }
}
export const logoutUser = (): AuthActionTypes => {
    return {
        type: 'LOGOUT_USER'
    }
}
export const setAuthToken = (token: string): AuthActionTypes => {
    return {
        type: 'SET_AUTH_TOKEN',
        payload: token
    }
}

export const login = (email: string, password: string) => {
    const payload = { email, password };
    console.log(password)
    return async (dispatch: any) => {

        dispatch(loginUserRequest(payload))
        try {
            const response = await axios.post("http://localhost:3000/users/login", payload, {
                headers: {
                    // Add your headers here
                    'Content-Type': 'application/json',
                }
            });
            console.log("Response:", response.data);
            const { Userinfo } = response.data
            const token = Userinfo.token;
            console.log("Token:", token); // Log the token for debugging
            dispatch(setAuthToken(token));
            dispatch(loginUserSuccess());
            localStorage.setItem('token', token);
        } catch (error) {
            console.error("Error:", error); // Log the error for debugging
            dispatch(loginUserFailure(error as any));
        }

    }
}