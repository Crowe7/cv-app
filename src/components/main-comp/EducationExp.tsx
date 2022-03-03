import React, { Component } from 'react'
import {EducationInfo} from './Main'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import EducationBoxes from './EducationBoxes'

type MyProps = {
    InfoCount: EducationInfo[]
    handleChange?: Function,
    handleDateChange?: Function,
    handleEducationFlip?: Function,
    handleDelete?: Function,
    handleClick?: any, // :(
  }

export default class EducationExp extends Component<MyProps> {
  render() {
    const {InfoCount, handleChange, handleDateChange, handleEducationFlip, handleDelete, handleClick} = this.props
    return (
        <Box >
            <Box sx={{padding: "10px", borderBottom: 3, borderTop: 3, borderColor: "#94D2BD"}}>
                <h1>Add Education</h1>
            </Box>
            <div>
                <EducationBoxes InfoCount={InfoCount} handleChange={handleChange} handleDateChange={handleDateChange} handleEducationFlip={handleEducationFlip} handleDelete={handleDelete} />
                <Button sx={{width: "700px", marginTop: "10px", marginBottom: "20px"}} onClick={handleClick} variant="contained">Add Education</Button>
            </div>
        </Box>
    )
  }
}
