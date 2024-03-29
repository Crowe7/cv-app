import React, { Component } from 'react';
import { JobInfo } from './Main';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
/* IDK HOW TO IMPORT BETTER YET */



type MyProps = {
  InfoCount: JobInfo[],
  handleChange?: Function
  handleDelete?: Function
  handleDateChange?: Function
  handleEmployedFlip?: any
}

//this.props.handleChange?.(info.ID) is called optional chaining
export default class JobExpBoxes extends Component<MyProps> {

//https://stackoverflow.com/questions/37387351/reactjs-warning-setstate-cannot-update-during-an-existing-state-transiti
  render() {
    const {InfoCount, handleChange, handleDelete, handleDateChange, handleEmployedFlip} = this.props
    return (
      <div>
          {InfoCount.map((info) => {
              return <Box sx={{display: "flex", flexDirection: "column", borderBottom: 3, borderColor: "#94D2BD", width: "700px", height: "400px", marginTop: "10px", backgroundColor: "white"}} key={info.ID}>
                          <Box sx={{display: "flex", height: "40px", width: "100%", justifyContent: "end"}}>
                            <IconButton aria-label="delete" onClick={() => handleDelete?.(info.ID)}>
                              <DeleteIcon />
                            </IconButton>
                          </Box>
                          <TextField sx={{width: "55%", marginLeft: "25px", marginTop: "20px"}} value={info.Title} onChange={handleChange?.(info.ID)} name="Title" id="outlined-basic" label="Title" variant="outlined" />
                          <TextField sx={{width: "55%", marginLeft: "25px", marginTop: "20px"}} value={info.Employer} onChange={handleChange?.(info.ID)} name="Employer" id="outlined-basic" label="Employer" variant="outlined" />
                          <Box sx={{display: "flex", marginLeft: "25px", marginTop: "20px" }}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                              <Box sx={{paddingRight: "20px"}}>
                                <DatePicker
                                  value={info.StartingDate}
                                  label="Starting Date"
                                  onChange={(newValue: Date|null) => {
                                    handleDateChange?.(info.ID, newValue, "StartingDate")
                                  }}
                                  renderInput={(params) => <TextField {...params} />}
                                />
                              </Box>
                              <DatePicker
                                value={info.EndingDate}
                                label="Ending Date"
                                disabled={info.Employed}
                                onChange={(newValue: Date|null) => {
                                  handleDateChange?.(info.ID, newValue, "EndingDate")
                                }}
                                renderInput={(params) => <TextField {...params} />}
                              />
                            </LocalizationProvider>

                            <FormGroup>
                              <FormControlLabel sx={{marginLeft: "10px"}} control={<Switch checked={info.Employed} onChange={handleEmployedFlip(info.ID)} />} label="Ongoing" />
                            </FormGroup>
                          </Box>

                          <TextField sx={{margin: "25px"}} value={info.JobInfo} onChange={handleChange?.(info.ID)} multiline maxRows={3} name="JobInfo" id="outlined-basic" label="Job Info" variant="outlined" />
                    </Box>;
            })
          }
      </div>
    )
  }
}
