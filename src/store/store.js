import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'

import LoggedIn from './Store.loggedIn';

const store = configureStore({
    reducer: {
        loggedIn: LoggedIn,
    }
})

export const useAppDispatch = () => useDispatch()
export default store;