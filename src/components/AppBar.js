import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Pop from './Chart/Pop';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';


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

export default function Appbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{"backgroundColor":"#f48fb1"}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="secondary" aria-label="menu">
            <AccountCircleRoundedIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Aditya Prasad
          </Typography>
         <Pop/>
         
        </Toolbar>
      </AppBar>
    </div>
  );
}
