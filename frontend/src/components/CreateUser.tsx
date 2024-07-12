"use client";
import { createNewUser } from "@/apis/users";
import { Severity, showNotification } from "@/store/slices/notificationSlice";
import { addUser } from "@/store/slices/usersSlice";
import { useAppDispatch } from "@/store/store";
import { CreateUser, CreateUserSchema } from "@/types/user.shema";
import {
    Box,
    Button,
    Grid,
    IconButton,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { useFormik } from "formik";
import AddIcon from "@mui/icons-material/Add";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { toFormikValidationSchema } from "zod-formik-adapter";

const CreateUserForm = () => {
    const dispatch = useAppDispatch();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const formik = useFormik({
        initialValues: {
            email: "",
            displayName: "",
            city: "",
            country: "",
        },
        validationSchema: toFormikValidationSchema(CreateUserSchema),
        validateOnChange: true,
        onSubmit: (values) => handleSubmit(values),
    });

    const sendNotificiation = (message: string, severity?: Severity) => {
        dispatch(showNotification({ message, severity }));
    };

    const handleSubmit = async (user: CreateUser) => {
        const response = await createNewUser(user);
        if (!response.isSuccess) {
            sendNotificiation(response.error?.message);
        } else {
            const newUser = response.data;
            dispatch(addUser(newUser));
            sendNotificiation("User created successfully!", "success");
        }
    };

    return (
        <>
            <Box sx={{ mt: 3, mb: 3, ml: 5 }}>
                <form onSubmit={formik.handleSubmit}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "1rem 0rem",
                        }}
                    >
                        <Typography component="h2" variant="h5" width={"70%"}>
                            Create User
                        </Typography>
                        {isMobile ? (
                            <IconButton
                                type="submit"
                                size="large"
                                title="Create User"
                                disabled={!formik.isValid}
                            >
                                <AddIcon />
                            </IconButton>
                        ) : (
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                disabled={!formik.isValid}
                                startIcon={<AddIcon />}
                            >
                                Create
                            </Button>
                        )}
                        {isMobile ? (
                            <IconButton
                                size="large"
                                title="Reset"
                                onClick={() => formik.resetForm()}
                            >
                                <RestartAltIcon />
                            </IconButton>
                        ) : (
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => formik.resetForm()}
                                startIcon={<RestartAltIcon />}
                            >
                                Reset
                            </Button>
                        )}
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <TextField
                                autoComplete="given-name"
                                name="email"
                                value={formik.values.email}
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                spellCheck={false}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                error={Boolean(
                                    formik?.touched?.email && formik?.errors?.email,
                                )}
                                helperText={
                                    formik?.touched?.email && formik?.errors?.email
                                }
                            />
                        </Grid>

                        <Grid item xs={3}>
                            <TextField
                                required
                                fullWidth
                                id="displayName"
                                label="Display Name"
                                name="displayName"
                                value={formik.values.displayName}
                                autoComplete="displayName"
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
                        <Grid item xs={3}>
                            <TextField
                                fullWidth
                                label="City"
                                name="city"
                                id="city"
                                value={formik.values.city}
                                autoComplete="city"
                                spellCheck={false}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                error={Boolean(formik?.errors?.city)}
                                helperText={formik?.errors?.city}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                fullWidth
                                name="country"
                                label="Country"
                                id="country"
                                value={formik.values.country}
                                autoComplete="country"
                                spellCheck={false}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                error={Boolean(formik?.errors?.country)}
                                helperText={formik?.errors?.country}
                            />
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </>
    );
};

export default CreateUserForm;
