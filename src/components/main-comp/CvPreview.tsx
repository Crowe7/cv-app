import React, { Component } from 'react'
import { GeneralInfoState } from './Main'
import { JobInfo } from './Main'
import { EducationInfo } from './Main'
import Box from '@mui/material/Box'

type MyProps = {
    JobInfo: JobInfo[],
    EducationInfo: EducationInfo[],
    GeneralInfo: GeneralInfoState,
}

export default class CvPreview extends Component<MyProps> {
  render() {
    const {JobInfo, EducationInfo, GeneralInfo} = this.props
    return (
      <Box sx={{border: 1, height: "1000px", width: "210mm", margin: "20px" }} className='pageSize'>
        <Box sx={{padding: "10px", borderBottom: 3, borderColor: 'black', width: "80%"}}>
          <h1>General</h1>
        </Box>
        <Box sx={{padding: "10px", borderBottom: 3, borderColor: 'black'}}>
        </Box>
        <Box sx={{padding: "10px", borderBottom: 3, borderColor: 'black', width: "80%"}}>
          <h1>Education</h1>
        </Box>
        <Box sx={{padding: "10px", borderBottom: 3, borderColor: 'black'}}>
        </Box>
        <Box sx={{padding: "10px", borderBottom: 3, borderColor: 'black', width: "80%"}}>
          <h1>Job Experience</h1>
        </Box>
        <Box sx={{padding: "10px"}}>
        </Box>
      </Box>
    )
  }
}
