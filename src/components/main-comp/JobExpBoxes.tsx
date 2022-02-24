import React, { Component } from 'react'
import { JobInfo } from './JobExp'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

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
              return <div key={info.ID}>
                          <IconButton aria-label="delete" onClick={() => handleDelete?.(info.ID)}>
                            <DeleteIcon />
                          </IconButton>
                          <TextField onChange={handleChange?.(info.ID)} name="Title" id="outlined-basic" label="Title" variant="outlined" />
                    </div>;
            })
          }
      </div>
    )
  }
}
