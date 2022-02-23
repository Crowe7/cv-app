import React, { Component } from 'react'
import { JobInfo } from './JobExp'
import TextField from '@mui/material/TextField';

type MyProps = {
  InfoCount: JobInfo[],
  handleChange?: Function
}

//this.props.handleChange?.(info.ID) is called optional chaining
export default class JobExpBoxes extends Component<MyProps> {

  render() {
    const {InfoCount, handleChange} = this.props
    return (
      <div>
          {InfoCount.map((info) => {
              return <TextField key={info.ID} onChange={handleChange?.(info.ID)} name="Title" id="outlined-basic" label="Title" variant="outlined" />;
            })
          }
      </div>
    )
  }
}
