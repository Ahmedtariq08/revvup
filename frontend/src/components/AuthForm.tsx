"use client";
import { isRequired, minChars } from "@/utils";
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
import * as Yup from "yup";

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

const baseSchema = Yup.object().shape({
    email: Yup.string()
        .nullable()
        .email("Please enter a valid email.")
        .required(isRequired("Email")),
    password: Yup.string().min(8, minChars("Password", 8)),
});

const signUpSchema = baseSchema.concat(
    Yup.object().shape({
        firstName: Yup.string()
            .nullable()
            .required(isRequired("First Name"))
            .min(3, minChars("First Name", 3)),
        lastName: Yup.string()
            .nullable()
            .required(isRequired("Last Name"))
            .min(3, minChars("Last Name", 3)),
    }),
);

const AuthForm = (props: AuthFormProps) => {
    const { isSignIn } = props;
    const constants = isSignIn ? Constants.SignIn : Constants.SignUp;

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
        validationSchema: isSignIn ? baseSchema : signUpSchema,
        validateOnChange: true,
        onSubmit: (values) => {
            console.log(values);
            alert(JSON.stringify(values, null, 2));
        },
    });

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
                                <>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="given-name"
                                            name="firstName"
                                            value={formik.values.firstName}
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            autoFocus
                                            spellCheck={false}
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            error={Boolean(
                                                formik?.touched?.firstName &&
                                                    formik?.errors?.firstName,
                                            )}
                                            helperText={
                                                formik?.touched?.firstName &&
                                                formik?.errors?.firstName
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            value={formik.values.lastName}
                                            autoComplete="family-name"
                                            spellCheck={false}
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            error={Boolean(
                                                formik?.touched?.lastName &&
                                                    formik?.errors?.lastName,
                                            )}
                                            helperText={
                                                formik?.touched?.lastName &&
                                                formik?.errors?.lastName
                                            }
                                        />
                                    </Grid>
                                </>
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
        </Container>
    );
};

export default AuthForm;
