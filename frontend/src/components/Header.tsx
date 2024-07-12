"use client";
import { signOutFb } from "@/apis/auth";
import { getAllUsers } from "@/apis/users";
import { useAuth } from "@/hooks/useAuth";
import { Severity, showNotification } from "@/store/slices/notificationSlice";
import { useAppDispatch } from "@/store/store";
import AccountCircle from "@mui/icons-material/AccountCircle";
import GetAppIcon from "@mui/icons-material/GetApp";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import { Button, useMediaQuery, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LockOpenIcon from "@mui/icons-material/LockOpen";
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
            //router.push("/");
        }
    };

    const clickSignIn = () => {
        router.push("/");
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="secondary">
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
                                title="Sign Out"
                                onClick={clickLogout}
                            >
                                <LockPersonIcon />
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="start"
                                aria-label="menu"
                                title="Sign In"
                                sx={{ ml: 1 }}
                                onClick={clickSignIn}
                            >
                                <LockOpenIcon />
                            </IconButton>
                        </>
                    ) : (
                        <>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={clickLogout}
                                startIcon={<LockPersonIcon />}
                            >
                                Sign Out
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={clickSignIn}
                                sx={{ ml: 2 }}
                                startIcon={<LockOpenIcon />}
                            >
                                Sign In
                            </Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
