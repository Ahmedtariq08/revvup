import { User } from "@/types/user.shema";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IUserState {
    users: User[];
    selectedUser: User | undefined;
    formMode: "create" | "update";
}

const initialState: IUserState = {
    users: [],
    selectedUser: undefined,
    formMode: "create",
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setFormMode: (state, action: PayloadAction<"create" | "update">) => {
            state.formMode = action.payload;
        },
        resetForm: (state) => {
            state.formMode = "create";
            state.selectedUser = undefined;
        },
        setSelectedUser: (state, action: PayloadAction<string>) => {
            state.selectedUser = state.users.find((user) => user.id === action.payload);
        },
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload;
        },
        addUser: (state, action: PayloadAction<User>) => {
            state.users.unshift(action.payload);
        },
        updateUser: (state, action: PayloadAction<User>) => {
            const updatedUser = action.payload;
            state.users = state.users.map((user) =>
                user.id === updatedUser.id ? updatedUser : user,
            );
        },
        deleteUser: (state, action: PayloadAction<string>) => {
            state.users = state.users.filter((user) => user.id !== action.payload);
            state.selectedUser = undefined;
        },
    },
});

export const {
    addUser,
    deleteUser,
    setUsers,
    setSelectedUser,
    setFormMode,
    resetForm,
    updateUser,
} = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
