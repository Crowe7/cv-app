import React, { Component } from 'react';
import { JobInfo } from './JobExp';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

type MyProps = {
  InfoCount: JobInfo[],
  handleChange?: Function
  handleDelete?: Function
}

//this.props.handleChange?.(info.ID) is called optional chaining
export default class JobExpBoxes extends Component<MyProps> {

//https://stackoverflow.com/questions/37387351/reactjs-warning-setstate-cannot-update-during-an-existing-state-transiti
  render() {
    const {InfoCount, handleChange, handleDelete} = this.props
    return (
      <div>
          {InfoCount.map((info) => {
              return <Box sx={{display: "flex", flexDirection: "column", border: 1, width: "600px", height: "400px", marginTop: "10px"}} key={info.ID}>
                          <Box sx={{display: "flex", height: "40px", width: "100%", justifyContent: "end"}}>
                            <IconButton aria-label="delete" onClick={() => handleDelete?.(info.ID)}>
                              <DeleteIcon />
                            </IconButton>
                          </Box>
                          <TextField sx={{width: "35%", marginLeft: "25px", marginTop: "20px"}} onChange={handleChange?.(info.ID)} name="Title" id="outlined-basic" label="Title" variant="outlined" />
                          <TextField sx={{width: "35%", marginLeft: "25px", marginTop: "20px"}} onChange={handleChange?.(info.ID)} name="Employer" id="outlined-basic" label="Employer" variant="outlined" />
                          <Box>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                              <DatePicker
                                value = {info.StartingDate}
                                label="Starting Date"
                                onChange={(newValue: Date|null) => {
                                  info.StartingDate = newValue
                                }}
                                renderInput={(params) => <TextField {...params} />}
                              />
                            </LocalizationProvider>
                          </Box>

                    </Box>;
            })
          }
      </div>
    )
  }
}
