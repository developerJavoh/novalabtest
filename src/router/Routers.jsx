import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login';
import Main from '../pages/Main';
import Profile from '../pages/Profile';
import SignUp from '../pages/SignUp';
const Routers = () => {

    return (<>
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signUp' element={<SignUp/>} />
            <Route path='/profile' element={<Profile/>} />
        </Routes>
    </>)
}

export default Routers;