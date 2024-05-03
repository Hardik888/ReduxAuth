import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authreducer'

const store = configureStore({
    reducer: authReducer
});

export default store;
