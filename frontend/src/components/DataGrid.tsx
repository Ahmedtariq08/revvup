"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import GetAppIcon from "@mui/icons-material/GetApp";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { deleteUserApi, getAllUsers } from "@/apis/users";
import {
    setSelectedUser,
    setUsers,
    deleteUser,
    setFormMode,
} from "@/store/slices/usersSlice";
import { Severity, showNotification } from "@/store/slices/notificationSlice";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
    Box,
    Button,
    IconButton,
    Stack,
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
    const { users, selectedUser } = userState;

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

    // React.useEffect(() => {
    //     fetchUsers();
    // }, []);

    const clickGetUsers = () => {
        fetchUsers();
    };

    const clickDelete = async () => {
        if (selectedUser?.id != null) {
            const userId = selectedUser?.id;
            const response = await deleteUserApi(userId);
            if (response.isSuccess) {
                dispatch(deleteUser(userId));
            } else {
                sendNotificiation(response.error?.message);
            }
        }
    };

    const clickUpdate = () => {
        dispatch(setFormMode("update"));
    };

    const handleSelectionChange = (rowId: unknown) => {
        if (Array.isArray(rowId) && rowId.length > 0) {
            dispatch(setSelectedUser(rowId[0]));
        }
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
                <Typography component="h2" variant="h5">
                    All Users
                </Typography>
                <Box>
                    {isMobile ? (
                        <>
                            <IconButton
                                size="large"
                                title="Get Users"
                                color="success"
                                onClick={clickGetUsers}
                            >
                                <GetAppIcon />
                            </IconButton>
                            <IconButton
                                size="large"
                                title="Edit User"
                                onClick={clickUpdate}
                                disabled={!selectedUser}
                            >
                                <EditIcon />
                            </IconButton>
                            <IconButton
                                size="large"
                                title="Delete User"
                                color="error"
                                onClick={clickDelete}
                                disabled={!selectedUser}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </>
                    ) : (
                        <>
                            <Button
                                color="success"
                                variant="contained"
                                startIcon={<GetAppIcon />}
                                onClick={clickGetUsers}
                                sx={{ mr: 2 }}
                            >
                                Get Users
                            </Button>
                            <Button
                                color="secondary"
                                variant="contained"
                                startIcon={<EditIcon />}
                                onClick={clickUpdate}
                                disabled={!selectedUser}
                                sx={{ mr: 2 }}
                            >
                                Update
                            </Button>
                            <Button
                                color="error"
                                variant="contained"
                                startIcon={<DeleteIcon />}
                                onClick={clickDelete}
                                disabled={!selectedUser}
                            >
                                Delete
                            </Button>
                        </>
                    )}
                </Box>
            </Box>
            <Box height={"50vh"}>
                <DataGrid
                    rows={users}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    onRowSelectionModelChange={handleSelectionChange}
                />
            </Box>
        </Box>
    );
}
