import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    backgroundColor: '#111a20'
  },
  menuItems: {
    alignItems: 'center'
  },
  linkItem: {
  }
}))


const Navbar = () => {
  const classes = useStyles();

  return (

    <AppBar position="static" className={classes.mainContainer}>
      <Toolbar className={classes.menuItems}>

        <Link className={classes.linkItem} color="inherit" href="" underline="none">
          <MenuItem>
            Shakeel
          </MenuItem>
        </Link>

        {/* <Link className={classes.linkItem} color="inherit" href="#about" underline="none">
          <MenuItem >About</MenuItem>
        </Link> */}
       
          <Link className={classes.linkItem} color="inherit" href="#skills" underline="none">
          <MenuItem>Skills        </MenuItem>
          </Link>
        
          <Link className={classes.linkItem} color="inherit" href="#projects" underline="none">
          <MenuItem>Projects </MenuItem>
          </Link>
        
          {/* <Link className={classes.linkItem} color="inherit" href="#contact" underline="none">
          <MenuItem>Contact</MenuItem>
          </Link> */}
        
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;