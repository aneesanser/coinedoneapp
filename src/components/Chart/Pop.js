import React from 'react';
import { useTheme, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useMediaQuery } from '@material-ui/core';


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #ffff',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.secondary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.blue,
      },
    },
  },
}))(MenuItem);

export default function Pop() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <div>
       { matches ? 
      <MoreHorizIcon
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}/>  : (
          <>
           <Button
          startIcon={<SendIcon/>}
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="outlined"
        color="#9c27b0"
        onClick={handleClick}
      >
        Add Device
      </Button>
          </>
        )} 
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <AddIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Add Devices" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <CreateIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Edit Details" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Delete Child" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
