import { ListItem } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../conponent/Header';
import Loader from '../conponent/Loader';
import '../styles/Profile.css'
const Profile = () => {

    const [pro, setPro] = useState([])
    const [loader, setLoader] = useState(false)
    useEffect(() => {
        Profile()
        
    }, [])

    const Profile = () => {
        setLoader(true)
        const id= localStorage.getItem('id')-1
       
        axios.get('https://reqres.in/api/users?page=1')
            .then(res => {
                setPro(res.data.data[id]);
                console.log(res);
                setLoader(false)
            })
    }
    console.log(pro);
    return (<>
        {loader === true ?
            <Loader />:<div></div>
    }
        <Header />
        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
            <div className="card mt-5 p-4">

                <div className=" image d-flex flex-column justify-content-center align-items-center">

                    <button className="btn btn-secondary"> <img src={pro.avatar} height="100" width="100" />
                    </button>
                    <span className="name mt-3"> {pro.first_name} {pro.last_name}</span> <span className="idd">{pro.email}</span>

                    <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                        <span className="idd1">Oxc4c16a645_b21a</span> <span><i className="fa fa-copy"></i></span>
                    </div>
                    <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                        <span className="number">1069 <span className="follow">Followers</span></span>
                    </div>
                    <div className=" d-flex mt-2"> <button className="btn1 btn-info">Edit Profile</button> </div>
                    <div className="text mt-3">  </div>
                    <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> <span><i className="fa fa-twitter"></i></span> <span><i className="fa fa-facebook-f"></i></span> <span><i className="fa fa-instagram"></i></span> <span><i className="fa fa-linkedin"></i></span> </div>
                    <div className=" px-2 rounded mt-4 date "> <span className="join">Joined May,2021</span> </div>
                </div>


            </div>
        </div>
    </>);
}
export default Profile;