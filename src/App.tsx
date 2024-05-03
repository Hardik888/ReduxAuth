import "./App.css";

import LoginForm from "./login";
import { Provider } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/authreducer";
const store = configureStore({
  reducer: authReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: null,
      },
    }),
});

const App = () => {
  return (
    <Provider store={store}>
      <LoginForm />;
    </Provider>
  );
};

export default App;
