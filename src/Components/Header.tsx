import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
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
        <header className="bg-cover bg-header-background flex-auto flex h-screen">
            <div className="absolute ml-20 mt-20 w-40">
                <div className="flex flex-wrap space-y-4 font-cormorantGaramond text-xl">
                    <a href="https://www.w3schools.com">Venue</a>
                    <a href="https://pluralsight.com">Accomodation</a>
                    <a href="https://pluralsight.com">Order Of Service</a>
                    <a href="https://pluralsight.com">Dress Code</a>
                    <a href="https://pluralsight.com">Wedding Party</a>
                    <a href="https://pluralsight.com">Gallery</a>
                </div>
            </div>
            <div className="absolute inset-0 flex justify-center items-center z-10 font-cormorantGaramond">
                <img src="./logo.png" width="200" height="267" alt="me"/>
                <div className="text-8xl">Asher & Chelsea</div>
            </div>
            <div className="absolute inset-0 flex justify-right items-center z-10 font-cormorantGaramond">
                <Button color="primary" variant="contained" className="fixed">
                    RSVP
                </Button> 
            </div>
                
                {/* <Box 
                bgcolor="secondary.main" 
                sx={{ height: 260 }} 
                className="">
                <List>
                    <ListItem key='home' disablePadding component={Link} to="/home">
                        <ListItemButton>
                            <ListItemText primary='Home' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key='venue' disablePadding component={Link} to="/venue">
                        <ListItemButton>
                            <ListItemText primary='Venue' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key='accomodation' disablePadding component={Link} to="/accomodation">
                        <ListItemButton>
                            <ListItemText primary='Accomodation' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key='orderOfService' disablePadding component={Link} to="/order_of_service">
                        <ListItemButton>
                            <ListItemText primary='Order Of Service' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key='RSVP' disablePadding component={Link} to="/RSVP">
                        <ListItemButton>
                            <ListItemText primary='RSVP' />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box> */}
            
            {/* <Box sx={{ flexGrow: 1 }}>
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
            </Drawer> */}
            
        </header>
    )
 }

 export default Header