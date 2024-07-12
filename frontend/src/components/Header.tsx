"use client";
import { signOutFb } from "@/apis/auth";
import { useAuth } from "@/hooks/useAuth";
import { Severity, showNotification } from "@/store/slices/notificationSlice";
import { useAppDispatch } from "@/store/store";
import AccountCircle from "@mui/icons-material/AccountCircle";
import GetAppIcon from "@mui/icons-material/GetApp";
import { Button, useMediaQuery, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter();
    const { user, loading } = useAuth();
    const dispatch = useAppDispatch();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const sendAuthNotificiation = (message: string, severity?: Severity) => {
        dispatch(showNotification({ message, severity }));
    };

    const clickLogout = async () => {
        const response = await signOutFb();
        if (!response.isSuccess) {
            sendAuthNotificiation(response.error?.message);
        } else {
            sendAuthNotificiation("Logout Success!", "success");
            router.push("/");
        }
    };

    const clickGetUsers = () => {
        console.log("fetching users..");
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: "darkgreen" }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Welcome, {user?.displayName}!
                    </Typography>
                    {isMobile ? (
                        <>
                            <IconButton
                                size="large"
                                edge="start"
                                aria-label="menu"
                                title="Get users"
                                color="secondary"
                                sx={{ mr: 2 }}
                                onClick={clickGetUsers}
                            >
                                <GetAppIcon />
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="start"
                                aria-label="menu"
                                title="Logout"
                                onClick={clickLogout}
                            >
                                <AccountCircle />
                            </IconButton>
                        </>
                    ) : (
                        <>
                            <Button
                                color="secondary"
                                variant="contained"
                                startIcon={<GetAppIcon />}
                                sx={{ mr: 2 }}
                                onClick={clickGetUsers}
                            >
                                Get Users
                            </Button>
                            <Button
                                variant="contained"
                                sx={{ bgcolor: "gray" }}
                                onClick={clickLogout}
                                startIcon={<AccountCircle />}
                            >
                                Logout
                            </Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
