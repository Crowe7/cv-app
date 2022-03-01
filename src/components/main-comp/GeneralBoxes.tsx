import React, { Component, ChangeEventHandler } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';

type MyProps = {
    handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  }

export default class GeneralBoxes extends Component<MyProps> {
  render() {
    const {handleChange} = this.props

    return (
      <Box sx={{display: "flex", flexDirection: "column", borderBottom: 3, borderColor: "#94D2BD", width: "700px", height: "260px", marginTop: "10px", backgroundColor: "white"}}>
          <TextField sx={{width: "55%", marginLeft: "25px", marginTop: "20px"}} onChange={handleChange} name="Name" label="Full Name" variant="outlined" />
          <TextField sx={{width: "55%", marginLeft: "25px", marginTop: "20px"}} onChange={handleChange} type="number" name="PhoneNumber" label="Phone Number" variant="outlined" />
          <TextField sx={{width: "55%", marginLeft: "25px", marginTop: "20px"}} onChange={handleChange} name="Email" label="Email" variant="outlined" />
      </Box>
    )
  }
}
