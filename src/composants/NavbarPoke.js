import {Typography, Toolbar, AppBar} from '@mui/material/';
export function NavbarPoke({h1, h3, id}) {
    return (
        <AppBar position="static" >
          <center>
        <Toolbar variant="dense">
          <center>
            <Typography fontFamily= "Raleway" variant="h1" id={id}>{h1}</Typography>
            <Typography fontFamily= "Raleway" variant="h3">{h3}</Typography>
            </center> 
        </Toolbar>
        </center>
      </AppBar>
    )
}

