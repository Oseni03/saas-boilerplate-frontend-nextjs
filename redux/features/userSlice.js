import { createSlice } from "@reduxjs/toolkit";
import { logout } from "./authSlice";

const initialState = {
	user: null,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
		clearUser: (state) => {
			state.user = null;
		},
	},
	// An extra reducer that automatically clear/unset user data
	// when the user logout

	// first approach
	// extraReducers: {
	// 	["auth/logout"]: (state) => {
	// 		state.user = [];
	// 	},
	// },

	// second approach
	extraReducers: (builder) => {
		builder.addCase(logout, (state) => {
			state.user = {};
		});
	},
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
