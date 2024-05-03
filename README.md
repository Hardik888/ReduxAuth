- **Store** :  This is like a container that contains everything you required within the Application.

```jsx
const store = createStore(reducer).
// initializing the reduxstore via the createstore.
```

- **Actions :**  Actions are like little tasks you tell Redux to do with your Application State
- Redux reads this and knows what to do next.

```jsx
const addAction = ({type:'CHANGE_SOMETHING"}
//Example Usage for an action that tells the redux store to trigger change in state.

export const loginUserRequest = (payload: any): AuthActionTypes => {
    return {
        type: 'LOGIN_USER_REQUEST',
        payload: payload
    }
};

```

- **Reducers :** Reducers are special helpers that figure how to perform the state manipulation in your application that was provided to redux via the actions

```jsx

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
```

- **Dispatch :** Dispatch takes the action and delivers it to redux

```jsx
         // dispatcher alerts the redux store to by passing the action inside of the dispatcher.
	 	
	// while this is dispatched application can maintain a loading state.
        dispatch(loginUserRequest(payload))
	
	/* this dispatcher can be user to trigger change in the state of the application 
		 where you can display ui changes and set it to userlogged in.*/
	dispatch(loginUserSuccess())
	
	/*This sets the token to the global state which can now be used to unlock 
		other parts of the application.*/
	dispatch(setAuthToken(token));
	
```

- **Subscribe :** Subscribing is like having Redux tell you whenever something new happens within the application , like whenever some sort is action is performed

```jsx
const listener = ()=> {
};
store.subscribe(listener);
```

 ****
