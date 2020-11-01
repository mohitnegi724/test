import React, { Fragment, useState, useEffect } from 'react'
import { rateTypes } from '../utils'
import { makeStyles } from '@material-ui/core/styles';
import { Modal, FormControl, FormControlLabel, Checkbox, MenuItem, Select, InputLabel, TextField, Button } from '@material-ui/core';
import '../styles/addServiceModal.css'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function AddServiceModal({open, handleClose}) {
  const classes = useStyles();
  const [serviceLocation, setServiceLocation] = useState("")
  const [experience, setExperience] = useState('')
  const [categ, setCateg] = useState('');
  const [task, setTask] = useState('');
  const handleChange = (event, type) => {
    if(type==='categ') {
      setCateg(event.target.value);
    }
    else if (type==='task') {
      setTask(event.target.value)
    }
  };

  const printRateTypes =() => {
    return rateTypes.map(type=>{
      return(
        <div className="type" key={type.key}>
          <label htmlFor={type.key}> {type.value} </label>
          <div className="inputBoxes">
            <span style={{marginRight: '10px'}}>
              $ 
            </span>
            <div style={{width: '100px'}}>
              <TextField id={type.key}/>
            </div>
            <span>
              { type.text }
            </span>
          </div>
        </div>
      )
    })
  }
  return (
    <Fragment>
      <Modal
        open={open}
        onClose={handleClose}
        className="serviceModal"
      >
        <div className="modalBox">
          {/* Title */}
          <div className="modalTitle">
            Add Service
          </div>

          <div className="serviceOptionsDropdown">
          {/* Categories For Services */}
            <FormControl className={classes.formControl} fullWidth>
              <InputLabel id="category">Service</InputLabel>
              <Select
                labelId="category"
                value={categ}
                onChange={(e)=>handleChange(e, 'categ')}
              >
                <MenuItem value="sanitizing-and-disinfecting">Sanitizing & Disinfecting</MenuItem>
                <MenuItem value="cleaning">Cleaning</MenuItem>
                <MenuItem value="repairing">Repairing</MenuItem>
              </Select>
            </FormControl>

            {/* Sub Categories For Services */}
            <FormControl className={classes.formControl} fullWidth>
              <InputLabel id="category-task">Task</InputLabel>
              <Select
                labelId="category-task"
                value={task}
                onChange={(e)=>handleChange(e, 'task')}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        
          <div className="rateAndExperience">
            <div className="price">
              <h4> Select Rate Types </h4>
              <div className="rateTypes">
                {printRateTypes()}
              </div>
            </div>
            <div className="experienceAndAll">
              <div className="experienceInput">
                <TextField placeholder="Experience (Year)*" type="number" value={experience} onChange={(e)=>setExperience(e.target.value)}/>
              </div>
              <div className="serviceLocation">
                <h4> Select Service Location</h4>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={serviceLocation==="gurugram"}
                        onChange={()=>setServiceLocation("gurugram")}
                        name="gurugram"
                        color="primary"
                      />
                    }
                    label="Gurugram"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={serviceLocation==='service-location'}
                        onChange={()=>setServiceLocation("service-location")}
                        name="service-location"
                        color="primary"
                      />
                    }
                    label="Service Location"
                  />
                </div>
              </div>
              <h4>
                License Required Mandatory
              </h4>
            </div>
          </div>
          <div className="cancelOrContinue">
            <Button variant="contained" onClick={()=>handleClose()}>
              Cancel
            </Button>

            <Button variant="contained">
              Start Free Trial
            </Button>
          </div>
        </div>
      </Modal>
    </Fragment>
  )
}
