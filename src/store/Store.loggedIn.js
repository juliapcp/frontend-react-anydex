import { createSlice } from "@reduxjs/toolkit";

const LoggedIn = createSlice({
    name: 'LoggedIn',
    initialState: {
        options: [
            {
                type: true
            }, {
                type: false
            }
        ],
        loggedIn: false
    },
    reducers: {
        setLoggedIn(state, action) {
            state.loggedIn = action.payload;
        }
    },

})

export const { setLoggedIn } = LoggedIn.actions
export default LoggedIn.reducer