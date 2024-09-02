import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { logout, setAuth } from "./authSlice";
import { useRetrieveUserQuery } from "./authApiSlice"; // Assuming this is generated by RTK Query

// Thunk to fetch the user data
export const fetchUserData = createAsyncThunk(
	"user/fetchUserData",
	async (_, { rejectWithValue }) => {
		try {
			const { data, error } = useRetrieveUserQuery();

			if (error) {
				return rejectWithValue(error);
			}
			console.log(data);
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const initialState = {
	user: null,
	status: "idle",
	error: null,
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
	extraReducers: (builder) => {
		builder
			.addCase(logout, (state) => {
				state.user = null;
				state.status = "idle";
			})
			.addCase(setAuth, (state) => {
				state.status = "loading";
			})
			.addCase(fetchUserData.fulfilled, (state, action) => {
				state.user = action.payload;
				state.status = "succeeded";
			})
			.addCase(fetchUserData.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			});
	},
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
