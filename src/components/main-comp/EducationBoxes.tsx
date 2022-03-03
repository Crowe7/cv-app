import React, { Component } from 'react'
import {EducationInfo} from "./Main"
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

type MyProps = {
    InfoCount: EducationInfo[],
    handleChange?: Function
    handleDelete?: Function
    handleDateChange?: Function
    handleEducationFlip?: Function
  }


export default class EducationBoxes extends Component<MyProps> {
  render() {
    const {InfoCount, handleChange, handleDateChange, handleEducationFlip, handleDelete} = this.props
    return (
      <div>
          {InfoCount.map((info) => {
              return <Box sx={{display: "flex", flexDirection: "column", borderBottom: 3, borderColor: "#94D2BD", width: "700px", height: "400px", marginTop: "10px", backgroundColor: "white"}} key={info.ID}>
                          <Box sx={{display: "flex", height: "40px", width: "100%", justifyContent: "end"}}>
                            <IconButton aria-label="delete" onClick={() => handleDelete?.(info.ID)}>
                              <DeleteIcon />
                            </IconButton>
                          </Box>
                          <TextField sx={{width: "55%", marginLeft: "25px", marginTop: "20px"}} value={info.School} onChange={handleChange?.(info.ID)} name="School" id="outlined-basic" label="University" variant="outlined" />
                          <TextField sx={{width: "55%", marginLeft: "25px", marginTop: "20px"}} value={info.Major} onChange={handleChange?.(info.ID)} name="Major" id="outlined-basic" label="Name of Major" variant="outlined" />
                          <TextField sx={{width: "55%", marginLeft: "25px", marginTop: "20px"}} value={info.Degree} onChange={handleChange?.(info.ID)} name="Degree" id="outlined-basic" label="Amount of College" variant="outlined" />
                          <Box sx={{display: "flex", marginLeft: "25px", marginTop: "20px" }}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                              <Box sx={{paddingRight: "20px"}}>
                                <DatePicker
                                  value={info.EducationStart}
                                  label="Starting Date"
                                  onChange={(newValue: Date|null) => {
                                    handleDateChange?.(info.ID, newValue, "EducationStart")
                                  }}
                                  renderInput={(params) => <TextField {...params} />}
                                />
                              </Box>
                              <DatePicker
                                value={info.EducationStart}
                                label="Graduation Date"
                                disabled={info.Student}
                                onChange={(newValue: Date|null) => {
                                  handleDateChange?.(info.ID, newValue, "EducationEnd")
                                }}
                                renderInput={(params) => <TextField {...params} />}
                              />
                            </LocalizationProvider>

                            <FormGroup>
                              <FormControlLabel sx={{marginLeft: "10px"}} control={<Switch checked={info.Student} onChange={handleEducationFlip?.(info.ID)} />} label="Ongoing" />
                            </FormGroup>
                          </Box>
                    </Box>;
            })
          }
      </div>
    )
  }
}

