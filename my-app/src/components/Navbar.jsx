

import React from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    List,
    ListItem,
    Typography,
    styled,
    ListItemButton,
    ListItemText,
    Menu,
    MenuItem,
    Avatar,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext'; // Import the useUserAuth hook
import { auth } from "../context/firebase";

const itemList = [
    { text: "Home", to: "/" },
    { text: "About", to: "/about" },
    { text: "Contact", to: "/contact" },
    { text: "Dashboard", to: "/dashboard" }
];

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

const ListMenu = styled(List)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    },
}));

const Navbar = () => {
    // const {  logOut } = useUserAuth(); // Access the user and logOut function from the context
    const navigate=useNavigate();
    let email = "";
    let displayName = "";
    let photoUrl = "";
    
    if (auth.currentUser) {
      const { email: userEmail, displayName: userDisplayName, photoURL } = auth.currentUser;
      email = userEmail || "";
      displayName = userDisplayName || "";
      photoUrl = photoURL || "";
    }

    
    console.log(auth)
    
    console.log("Email:", email);
    console.log("Display Name:", displayName);
    console.log("Photo URL:", photoUrl);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            component="nav"
            position="sticky"
            sx={{
                backgroundColor: 'orange',
            }}
            elevation={0}
        >
            <StyledToolbar>
                <Typography
                    variant="h6"
                    component="h2"
                >
                    BlendNet
                </Typography>
                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                    {/* DrawerItem */}
                </Box>
                <ListMenu>
                    {itemList.map((item) => {
                        const { text } = item;
                        return (
                            <ListItem key={text}>
                                <ListItemButton
                                    component={Link}
                                    to={item.to}
                                    sx={{
                                        color: '#fff',
                                        "&:hover": {
                                            backgroundColor: 'transparent',
                                            color: '#1e2a5a',
                                        }
                                    }}
                                >
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </ListMenu>
                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                    {/* DrawerIcon */}
                </Box>
               
                {auth.currentUser ? (
                    <>
                        <Avatar sx={{ cursor: 'pointer' }} onClick={handleMenuClick}>{auth.currentUser.email.charAt(0)}</Avatar>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={async () => { await auth.signOut(); handleMenuClose(); }}>Logout</MenuItem>
                        </Menu>
                    </>
                    ) : (
                    <>
                        <Avatar sx={{ cursor: 'pointer' }} onClick={handleMenuClick}>U</Avatar>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={async () => { navigate('/signin'); handleMenuClose(); }}>Login</MenuItem>
                        </Menu>
                    </>
                   
                        )
                }              

            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;
