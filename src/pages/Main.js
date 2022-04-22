import { CircularProgress, Container, Grid, Typography, } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../conponent/Header";
import { grey } from '@mui/material/colors';
import Loader from "../conponent/Loader";




const Main = () => {
    const [Page1, setPage1] = useState([])
    const [loader, setLoader] = useState(false)
    const greys = grey[700];
    useEffect(() => {
        SetApi()
    }, [])
    const SetApi = () => {
        setLoader(true)
        axios.get('https://reqres.in/api/users?page=1')
            .then(res => {
                setPage1(res.data.data)
                setLoader(false)

                console.log(Page1);
            })
    }

    return (<>
        <Header />
        {loader==true?
         <Loader />:<div></div>
    }
       
        <Container maxWidth='lg' sx={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center', paddingTop: '40px' }}>
            <Grid container direction={'row'} sx={{ textAlign: "center" }} spacing={5}>
                {Page1.map((item, index) => (
                    <Grid sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', }} item md={6} lg={4} sm={6} xs={12}>
                        <Box sx={{ marginRight: '20px' }}>
                            <img src={item.avatar}></img>
                        </Box>

                        <Box>
                            <Typography variant="h6" color={greys}>{item.first_name} {item.last_name}</Typography>
                            <Typography color={greys} fontSize='small'>{item.email}</Typography>
                        </Box>

                    </Grid>
                ))}



            </Grid>
        </Container>

    </>);
}

export default Main;