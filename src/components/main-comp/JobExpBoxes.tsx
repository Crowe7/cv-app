import React, { Component } from 'react';
import { JobInfo } from './JobExp';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';

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
              return <Box sx={{display: "flex", flexDirection: "column", border: 1, width: "600px", height: "400px"}} key={info.ID}>
                          <Box sx={{display: "flex", height: "50px", width: "100%", justifyContent: "end"}}>
                            <IconButton aria-label="delete" onClick={() => handleDelete?.(info.ID)}>
                              <DeleteIcon />
                            </IconButton>
                          </Box>
                          <TextField sx={{width: "35%", marginLeft: "25px"}} onChange={handleChange?.(info.ID)} name="Title" id="outlined-basic" label="Title" variant="outlined" />
                    </Box>;
            })
          }
      </div>
    )
  }
}
