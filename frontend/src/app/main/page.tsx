// "use client";
// import UserForm from "@/components/UserForm";
// import DataTable from "@/components/DataGrid";
// import Header from "@/components/Header";
// import LoaderCircle from "@/components/LoaderCircle";
// import { useAuth } from "@/hooks/useAuth";
// import { Severity, showNotification } from "@/store/slices/notificationSlice";
// import { useAppDispatch } from "@/store/store";
// import { Box, Button, Grid, Typography } from "@mui/material";
// import { useRouter } from "next/navigation";

// const MainPage = () => {
//     const router = useRouter();
//     const dispatch = useAppDispatch();
//     const { user, loading } = useAuth();

//     const sendAuthNotificiation = (message: string, severity?: Severity) => {
//         dispatch(showNotification({ message, severity }));
//     };

//     const goToSignIn = () => {
//         router.push("/");
//     };

//     return loading ? (
//         <LoaderCircle showLoader={loading} />
//     ) : (
//         <>
//             <Header />
//             <Grid container spacing={2}>
//                 <Grid item xs={10}>
//                     <UserForm />
//                 </Grid>
//                 <Grid item xs={10}>
//                     <DataTable />
//                 </Grid>
//             </Grid>
//         </>
//     );

//     // return loading ? (
//     //     <LoaderCircle showLoader={loading} />
//     // ) : user ? (
//     //     <>
//     //         <Header />
//     //         <Grid container spacing={2}>
//     //             <Grid item xs={10}>
//     //                 <CreateUserForm />
//     //             </Grid>
//     //             <Grid item xs={10}>
//     //                 <DataTable />
//     //             </Grid>
//     //         </Grid>
//     //     </>
//     // ) : (
//     //     <Box
//     //         display={"flex"}
//     //         justifyContent={"center"}
//     //         alignContent={"center"}
//     //         alignItems={"center"}
//     //         mt={50}
//     //         flexDirection={"column"}
//     //     >
//     //         <Typography variant="h3">
//     //             <b>Unauthorized!</b>
//     //         </Typography>
//     //         <Button variant="contained" size="large" sx={{ mt: 10 }} onClick={goToSignIn}>
//     //             Go to Sign In
//     //         </Button>
//     //     </Box>
//     // );
// };

// export default MainPage;
