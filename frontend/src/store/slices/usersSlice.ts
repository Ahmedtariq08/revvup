import { User } from "@/types/user.shema";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IUserState {
    users: User[];
}

const initialState: IUserState = {
    users: [],
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload;
        },
        addUser: (state, action: PayloadAction<User>) => {
            state.users.unshift(action.payload);
        },
        deleteUser: (state, action: PayloadAction<string>) => {
            state.users.filter((user) => user.id !== action.payload);
        },
    },
});

export const { addUser, deleteUser, setUsers } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
