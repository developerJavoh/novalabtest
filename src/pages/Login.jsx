import { Button, Container, Grid, Typography } from "@mui/material";
import Header from "../conponent/Header";
import { blue } from '@mui/material/colors';

import TextField from '@mui/material/TextField';

import '../styles/Main.css'
import { Box, width } from "@mui/system";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const blues = blue['A400']
    const [email, setEmail] = useState('')
    const [pas, setPas] = useState('')

    const Login = () => {
        if (email.length === 0 || pas.length === 0 || email.length === 0 && pas.length === 0) {
            notifys()
        } else {
            axios.post('https://reqres.in/api/login', {
                "email": email,
                "password": pas
            })
                .then(res => {
                    console.log(res);
                })
                .catch(er => {
                    notifyser()
                })
        }


    }
    const notifys = () => toast.error("Oh Click after you enter the details Full !!!!");
    const notifyser = () => toast.error("Not found!!!!");
    return (<>
        <Header />
        <ToastContainer />

        <Container maxWidth='lg'>
            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} spacing={3}>
                <Grid item sx={{ textAlign: 'center' }} xs={11} lg={6} md={8} sm={8}>
                    <img className="imgs" src="https://static.vecteezy.com/system/resources/thumbnails/005/879/539/small_2x/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg" alt="" />
                </Grid>
                <Grid className="md-absolute" item xs={11} lg={6} md={8} sm={8} bgcolor={blues} >
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                            paddingTop: '40px'
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <Typography sx={{ textAlign: "justify", fontSize: { xs: '22px' } }} color={'white'} variant="h5">
                            Login
                        </Typography>
                        <TextField
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{ color: 'white !important' }} id="standard-basic" label="Email*" variant="standard" />
                        <TextField
                            onChange={(e) => setPas(e.target.value)}
                            id="standard-basic" label="Password*" variant="standard" />

                    </Box>
                    <Box sx={{ width: "100%", textAlign: "center", justifyContent: 'center' }}>
                        <Button
                            onClick={() => Login()}
                            color={'primary'} sx={{ width: "50%", outline: 'none !important', margin: '20px 0' }} variant="contained">
                            Submit
                        </Button>
                        <Typography color={'white'} sx={{ textAlign: 'end', }} >

                            Are You Not Registered?
                            <NavLink style={{ color: 'blue' }} to={'/signUp'}>
                                SignUp
                            </NavLink>
                        </Typography>
                    </Box>

                </Grid>
            </Grid>
        </Container>
    </>);
}
export default Login;