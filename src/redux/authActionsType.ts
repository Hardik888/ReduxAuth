export type AuthActionTypes =
    | LoginUserRequestAction
    | LoginUserSuccessAction
    | LoginUserFailureAction
    | LogoutUserAction
    | setAuthTokenAction


export interface LoginUserRequestAction {
    type: 'LOGIN_USER_REQUEST',
    payload: {
        email: string;
        password: string;
    }
}

export interface LoginUserSuccessAction {
    type: 'LOGIN_USER_SUCCESS';

}

export interface LoginUserFailureAction {
    type: 'LOGIN_USER_FAILURE';
    payload: string,
}

export interface LogoutUserAction {
    type: 'LOGOUT_USER'
}

export interface setAuthTokenAction {
    type: 'SET_AUTH_TOKEN',
    payload: string
}
