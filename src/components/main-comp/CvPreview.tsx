import React, { Component, ReactElement } from 'react'
import { GeneralInfoState } from './Main'
import { JobInfo } from './Main'
import { EducationInfo } from './Main'
import Box from '@mui/material/Box'
import format from 'date-fns/format'
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
          <h2>Name: {`${GeneralInfo.Name}`}</h2>
          <h2>Phone Number: {`${GeneralInfo.PhoneNumber}`}</h2>
          <h2>Email: {`${GeneralInfo.Email}`}</h2>
        </Box>
        <Box sx={{padding: "10px", borderBottom: 3, borderColor: 'black', width: "80%"}}>
          <h1>Education</h1>
        </Box>
        <Box sx={{padding: "10px", borderBottom: 3, borderColor: 'black'}}>
          {EducationInfo.map((info) => {
            let setStudentText:null|String = null;
            let formattedEndDate:String = ''
            let formattedStartDate:String = format(info.EducationStart, "MM-dd-yyyy")
            if(info.Student === true) {
              setStudentText = "Ongoing"
            } else {
              formattedEndDate = format(info.EducationEnd, "MM-dd-yyyy")
              setStudentText = `${formattedEndDate}`
            }
            return <Box sx={{width: "80%", marginBottom: '20px'}} key={info.ID}>
              <h2>University: {`${info.School}`}</h2>
              <h2>Major: {`${info.Major}`}</h2>
              <h2>Start: {`${formattedStartDate}`} To: {`${setStudentText}`}</h2>
           </Box>
          }
          )}
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
