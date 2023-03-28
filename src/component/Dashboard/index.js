import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    MenuItem,
    Menu,
    Button,
    CircularProgress,
    Container
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { useQuery } from '@apollo/client';
import { GET_USER } from '../../lib/queries';
import { useNavigate, useParams } from 'react-router-dom';
import FileUploader from '../FileUploader';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function Dashboard() {

    const navigate = useNavigate();
    const classes = useStyles();
    const [userData, setUserData] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const { username } = useParams();

    const { loading, error, data } = useQuery(GET_USER, {
        variables: { username }
    });

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        console.log(storedToken)
        if (data) {
            setUserData(data);
        }
       
    }, [data]);

    const open = Boolean(anchorEl);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate(`/`)
    }

    if  (loading)  return  <CircularProgress />;
    if (error) return <p>There seems to be an error. Please login again.</p>;

    console.log(userData)
   

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        FileUploader
                    </Typography>
                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>{data.user.username.charAt(0).toUpperCase() + data.user.username.slice(1)}</MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Button color="inherit" onClick={handleLogout}>Logout</Button>
                            </MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
            <Container maxWidth="md">
             <FileUploader disabled={!data.user.isSuperuser || !data.user.isStaff}/>
            </Container>
        </div>
    );
}


export default Dashboard