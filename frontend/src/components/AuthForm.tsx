"use client";
import { signIn, signUp } from "@/apis/auth";
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
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { toFormikValidationSchema } from "zod-formik-adapter";

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
            href: "/sign-in",
        },
    },
};

const AuthForm = (props: AuthFormProps) => {
    const { isSignIn } = props;
    const [loading, setLoading] = useState(false);
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

    const handleSubmit = async (user: SignInUser | SignUpUser) => {
        if (isSignIn) {
            const response = await signIn(user);
            console.log(response);
        } else {
            const response = await signUp(user as SignUpUser);
            console.log(response);
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
                    {formik.isSubmitting && <CircularProgress color={"primary"} />}
                </Box>
            </Box>
        </Container>
    );
};

export default AuthForm;
