import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import AddServiceModal from '../components/AddServiceModal'
import '../styles/manageServices.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      background: '#2cc6b0',
      color: 'white'
    },
  },
}));


export default function ManageServices() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      {/* Button To Open Modal */}
      <Button variant="contained" onClick={handleOpen}>
        Add Service
      </Button>

      {/* Service Modal */}
      <AddServiceModal open={open} handleClose={handleClose}/>
    </div>
  )
}
