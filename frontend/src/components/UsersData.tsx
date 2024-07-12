"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getAllUsers } from "@/apis/users";
import { setUsers } from "@/store/slices/usersSlice";
import { Severity, showNotification } from "@/store/slices/notificationSlice";

const UsersData = () => {
    const dispatch = useAppDispatch();
    const userState = useAppSelector((state) => state.users);
    const { users } = userState;

    const sendNotificiation = (message: string, severity?: Severity) => {
        dispatch(showNotification({ message, severity }));
    };

    React.useEffect(() => {
        const fetchUsers = async () => {
            const response = await getAllUsers();
            if (response.isSuccess) {
                dispatch(setUsers(response.data));
            } else {
                sendNotificiation("Unable to fetch users.");
            }
        };
        fetchUsers();
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Email</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">City</TableCell>
                        <TableCell align="right">Country</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow
                            key={user.id}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {user.email}
                            </TableCell>
                            <TableCell align="right">{user.displayName}</TableCell>
                            <TableCell align="right">{user.city ?? ""}</TableCell>
                            <TableCell align="right">{user.country ?? ""}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UsersData;
