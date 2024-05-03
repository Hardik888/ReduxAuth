const intialState = {
    token: null,
    loading: false,
    error: null

}
const authReducer = (state = intialState, action: any) => {
    switch (action.type) {
        case 'LOGIN_USER_REQUEST':

            return {
                ...state,
                loading: true,
                error: null
            };
        case ' LOGIN_USER_SUCCESS ':
            return {
                ...state,
                loading: false,
                token: action.payload,
                error: null

            }
        case 'LOGIN_USER_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case 'SET_AUTH_TOKEN':
            return {
                ...state,
                token: action.payload
            }
        default:
            return state
    }

}
export default authReducer;