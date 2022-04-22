import '../styles/Header.css'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CodeIcon from '@mui/icons-material/Code';
import { blue } from '@mui/material/colors';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const pages = [
        {
            name: 'SignIn',
            link: "/login"
        },
        {
            name: 'SignUp',
            link: '/signUp'
        }
    ];
    const settings = [
        {
            name: 'Profile',
            link: '/profile'
        }
    ];



    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const blues = blue['A400']
    return (<>
        <header>

            <AppBar position="fixed" >
                <Container maxWidth="lg" >

                    <Toolbar disableGutters>
                        <NavLink style={{ color: 'white' }} to={'/'}>
                            <Typography
                                variant="h1"
                                noWrap
                                component="div"
                                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                            >
                                <CodeIcon sx={{ fontSize: '60px' }} />


                            </Typography>
                        </NavLink>


                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <NavLink to={page.link}>
                                            <Typography textAlign="center">{page.name}</Typography>

                                        </NavLink>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            <NavLink style={{ color: 'white' }} to={'/'}>
                                <CodeIcon sx={{ fontSize: '60px' }} />
                            </NavLink>

                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <NavLink to={page.link}>
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page.name}
                                    </Button>
                                </NavLink>

                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyn0e-gettCXTQ16GKlj5vjgpzS9u0KwmtDQW-3T8L_dvIrImur-O6u0bN5Jjmu1Kg1A&usqp=CAU" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        {localStorage.getItem('token') ?
                                            <NavLink to={setting.link}>
                                                <Typography textAlign="center">{setting.name}</Typography>
                                            </NavLink>
                                            : <NavLink to='/login'>
                                                <Typography textAlign="center">{setting.name}</Typography>
                                            </NavLink>
                                        }

                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>


                </Container>
            </AppBar>



        </header>


    </>)

}
export default Header;