import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import GiteIcon from '@mui/icons-material/Gite';
import BedIcon from '@mui/icons-material/Bed';
import RsvpIcon from '@mui/icons-material/Rsvp';
import HomeIcon from '@mui/icons-material/Home';
import { Link, useNavigate } from "react-router-dom";
import ViewListIcon from '@mui/icons-material/ViewList';
import React from "react";

function Header(){
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const signOut = () => {
        localStorage.setItem("authenticated", 'false');
        navigate("/login");
    }
    return(
        <header>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        
                    </Typography>
                    <Button color="inherit" onClick={signOut}>Sign Out</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer
                anchor='left'
                open={open}
                onClose={handleClose}
            >
                <Box 
                    role="presentation"
                    sx={{ width: 250 }}>
                    <List>
                        <ListItem key='navigation' >
                            <ListItemText disableTypography className="text-center font-bold" primary='Navigation'/>
                        </ListItem> 
                        <Divider />
                        <ListItem key='home' disablePadding component={Link} to="/home">
                            <ListItemButton>
                                <ListItemIcon>
                                    <HomeIcon/>
                                </ListItemIcon>
                                <ListItemText primary='Home' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem key='venue' disablePadding component={Link} to="/venue">
                            <ListItemButton>
                                <ListItemIcon>
                                    <GiteIcon/>
                                </ListItemIcon>
                                <ListItemText primary='Venue' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem key='accomodation' disablePadding component={Link} to="/accomodation">
                            <ListItemButton>
                                <ListItemIcon>
                                    <BedIcon/>
                                </ListItemIcon>
                                <ListItemText primary='Accomodation' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem key='orderOfService' disablePadding component={Link} to="/order_of_service">
                            <ListItemButton>
                                <ListItemIcon>
                                    <ViewListIcon/>
                                </ListItemIcon>
                                <ListItemText primary='Order Of Service' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem key='RSVP' disablePadding component={Link} to="/RSVP">
                            <ListItemButton>
                                <ListItemIcon>
                                    <RsvpIcon/>
                                </ListItemIcon>
                                <ListItemText primary='RSVP' />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </header>
    )
 }

 export default Header