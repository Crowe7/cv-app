import React, {Component} from "react";
import Button from '@mui/material/Button';
import JobExpBoxes from "./JobExpBoxes";
import Box from '@mui/material/Box';
import { JobInfo } from "./Main";

type MyProps = {
  InfoCount: JobInfo[]
  handleChange?: Function,
  handleDateChange?: Function,
  handleEmployedFlip?: Function,
  handleDelete?: Function,
  handleClick?: any, // :(
}

export default class jobExp extends Component<MyProps> {


  render() {
    const {InfoCount, handleChange, handleDateChange, handleEmployedFlip, handleDelete, handleClick} = this.props
    return (
      <Box >
        <Box sx={{padding: "10px", borderBottom: 3, borderColor: "#94D2BD"}}>
          <h1>Add Job Experience</h1>
        </Box>
        <div>
          <JobExpBoxes InfoCount={InfoCount} handleChange={handleChange} handleDelete={handleDelete} handleDateChange={handleDateChange} handleEmployedFlip={handleEmployedFlip}/>
          <Button sx={{width: "700px", marginTop: "10px", marginBottom: '10px'}} onClick={handleClick} variant="contained">Add Job</Button>
        </div>
      </Box>
    )
  }
}
