import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Severity = "success" | "info" | "warning" | "error";
export interface INotificationState {
    openNotification: boolean;
    message: string | undefined;
    severity: Severity;
}

const initialState: INotificationState = {
    openNotification: false,
    message: undefined,
    severity: "error",
};

export const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        showNotification: (
            state,
            action: PayloadAction<{
                message: string;
                severity?: Severity;
            }>,
        ) => {
            state.openNotification = true;
            state.message = action.payload.message;
            state.severity = action.payload.severity ?? "error";
        },
        clearNotification: (state) => {
            state.openNotification = false;
            state.message = undefined;
            state.severity = "error";
        },
    },
});

export const { showNotification, clearNotification } = notificationSlice.actions;
export const notificationReducer = notificationSlice.reducer;
