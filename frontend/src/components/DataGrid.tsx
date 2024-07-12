"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import GetAppIcon from "@mui/icons-material/GetApp";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getAllUsers } from "@/apis/users";
import { setUsers } from "@/store/slices/usersSlice";
import { Severity, showNotification } from "@/store/slices/notificationSlice";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
    Box,
    Button,
    IconButton,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";

const columns: GridColDef[] = [
    { field: "email", headerName: "Email", width: 300 },
    { field: "displayName", headerName: "Display name", width: 130 },
    {
        field: "city",
        headerName: "City",
        width: 130,
    },
    {
        field: "country",
        headerName: "Country",
        width: 130,
    },
];

export default function DataTable() {
    const dispatch = useAppDispatch();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const userState = useAppSelector((state) => state.users);
    const { users } = userState;

    const sendNotificiation = (message: string, severity?: Severity) => {
        dispatch(showNotification({ message, severity }));
    };

    const fetchUsers = async () => {
        const response = await getAllUsers();
        if (response.isSuccess) {
            dispatch(setUsers(response.data));
        } else {
            sendNotificiation(response.error?.message);
        }
    };

    React.useEffect(() => {
        fetchUsers();
    }, []);

    const clickGetUsers = () => {
        fetchUsers();
    };

    return (
        <Box sx={{ ml: 5 }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1rem 0rem",
                }}
            >
                <Typography component="h2" variant="h5" width={"70%"}>
                    All Users
                </Typography>
                {isMobile ? (
                    <IconButton size="large" title="Get Users" onClick={clickGetUsers}>
                        <GetAppIcon />
                    </IconButton>
                ) : (
                    <Button
                        color="secondary"
                        variant="contained"
                        startIcon={<GetAppIcon />}
                        onClick={clickGetUsers}
                    >
                        Get Users
                    </Button>
                )}
            </Box>
            <DataGrid
                rows={users}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </Box>
    );
}
