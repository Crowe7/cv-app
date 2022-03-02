import React, { Component, ChangeEventHandler } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import {GeneralInfoState} from './Main'

type MyProps = {
    handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    Info: GeneralInfoState
  }

export default class GeneralBoxes extends Component<MyProps> {
  render() {
    const {handleChange, Info} = this.props

    return (
      <Box sx={{display: "flex", flexDirection: "column", borderBottom: 3, borderColor: "#94D2BD", width: "700px", height: "260px", marginTop: "10px", backgroundColor: "white"}}>
          <TextField sx={{width: "55%", marginLeft: "25px", marginTop: "20px"}} onChange={handleChange} value={Info.Name} name="Name" label="Full Name" variant="outlined" />
          <TextField sx={{width: "55%", marginLeft: "25px", marginTop: "20px"}} onChange={handleChange} value={Info.PhoneNumber} type="number" name="PhoneNumber" label="Phone Number" variant="outlined" />
          <TextField sx={{width: "55%", marginLeft: "25px", marginTop: "20px"}} onChange={handleChange} value={Info.Email} name="Email" label="Email" variant="outlined" />
      </Box>
    )
  }
}
