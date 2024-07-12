"use client";
import { signInFb, signUpFb } from "@/apis/auth";
import { Severity, showNotification } from "@/store/slices/notificationSlice";
import { useAppDispatch } from "@/store/store";
import { SignInSchema, SignInUser, SignUpSchema, SignUpUser } from "@/types/auth.schema";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toFormikValidationSchema } from "zod-formik-adapter";
import LoaderCircle from "./LoaderCircle";

interface AuthFormProps {
    isSignIn: boolean;
}

const Constants = {
    SignIn: {
        title: "Sign in",
        color: "primary.dark",
        redirect: {
            label: "Don't have an account?",
            text: "Sign up",
            href: "/sign-up",
        },
    },
    SignUp: {
        title: "Sign up",
        color: "secondary.dark",
        redirect: {
            label: "Already have an account?",
            text: "Sign in",
            href: "/",
        },
    },
};

const AuthForm = (props: AuthFormProps) => {
    const { isSignIn } = props;
    const dispatch = useAppDispatch();
    const router = useRouter();
    const constants = isSignIn ? Constants.SignIn : Constants.SignUp;
    const schema = isSignIn ? SignInSchema : SignUpSchema;

    const formik = useFormik({
        initialValues: {
            displayName: "",
            email: "",
            password: "",
        },
        validationSchema: toFormikValidationSchema(schema),
        validateOnChange: true,
        onSubmit: (values) => handleSubmit(values),
    });

    const sendAuthNotificiation = (message: string, severity?: Severity) => {
        dispatch(showNotification({ message, severity }));
    };

    const handleSubmit = async (user: SignInUser | SignUpUser) => {
        if (isSignIn) {
            const response = await signInFb(user);
            if (!response.isSuccess) {
                sendAuthNotificiation(response.error?.message);
            } else {
                sendAuthNotificiation("Login Success!", "success");
                router.push("/main");
            }
        } else {
            const response = await signUpFb(user as SignUpUser);
            console.log(response);
            if (!response.isSuccess) {
                sendAuthNotificiation(response.error?.message);
            } else {
                sendAuthNotificiation("Sign up Success!", "success");
                router.push("/main");
            }
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: constants.color }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {constants.title}
                </Typography>
                <Box sx={{ mt: 3 }}>
                    <form onSubmit={formik.handleSubmit}>
                        <Grid container spacing={2}>
                            {!isSignIn && (
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="displayName"
                                        value={formik.values.displayName}
                                        required
                                        fullWidth
                                        id="displayName"
                                        label="Display Name"
                                        autoFocus
                                        spellCheck={false}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        error={Boolean(
                                            formik?.touched?.displayName &&
                                                formik?.errors?.displayName,
                                        )}
                                        helperText={
                                            formik?.touched?.displayName &&
                                            formik?.errors?.displayName
                                        }
                                    />
                                </Grid>
                            )}

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    value={formik.values.email}
                                    autoComplete="email"
                                    spellCheck={false}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    error={Boolean(formik?.errors?.email)}
                                    helperText={formik?.errors?.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    value={formik.values.password}
                                    autoComplete="new-password"
                                    spellCheck={false}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    error={Boolean(
                                        formik?.touched?.password &&
                                            formik?.errors?.password,
                                    )}
                                    helperText={
                                        formik?.touched?.password &&
                                        formik?.errors?.password
                                    }
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, bgcolor: constants.color }}
                        >
                            {constants.title}
                        </Button>
                    </form>

                    <Grid container justifyContent="center">
                        <Grid item>
                            <Typography variant="body2">
                                {constants.redirect.label}
                                <Link
                                    href={constants.redirect.href}
                                    variant="body2"
                                    sx={{ margin: 2 }}
                                >
                                    {constants.redirect.text}
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <LoaderCircle showLoader={formik.isSubmitting} />
        </Container>
    );
};

export default AuthForm;
