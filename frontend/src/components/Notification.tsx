"use client";
import { clearNotification } from "@/store/slices/notificationSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import * as React from "react";

const Notifications = () => {
    const dispatch = useAppDispatch();
    const notificationState = useAppSelector((state) => state.notification);
    const { openNotification, message, severity } = notificationState;

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        dispatch(clearNotification());
    };

    return (
        <div>
            <Snackbar
                open={openNotification}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                sx={{ marginBottom: 10 }}
            >
                <Alert
                    onClose={handleClose}
                    severity={severity}
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Notifications;
