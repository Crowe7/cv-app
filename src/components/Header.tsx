import React, { Component, ChangeEventHandler } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box'

type MyProps = {
  checked: boolean | undefined,
  mode: string | undefined
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}


export default class Header extends Component<MyProps> {


  render() {
    const {checked, mode, handleChange} = this.props
    return (
      <Box sx={{display: "flex", position: "sticky", top: 0, width: "100%", justifyContent: "center", marginLeft: "20px", paddingBottom: "20px", paddingTop: "15px", color: "white", zIndex: 9001, backgroundColor: "#005F73"}}>
        <Box sx={{position: "absolute"}}>
          <h1>CV application</h1>
        </Box>
        <FormGroup>
          <FormControlLabel sx={{paddingLeft: "400px"}} control={<Switch checked={checked} onChange={handleChange} />} label={`${mode}`} />
        </FormGroup>
      </Box>
    )
  }
}
