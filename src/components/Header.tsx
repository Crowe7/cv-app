import React, { Component } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box'


type MyState = {
  checked?: boolean
  mode?: string
}

export default class Header extends Component<MyState> {
  state: MyState = {
    checked: true,
    mode: "Edit"
  }

  handleChange = (e:React.ChangeEvent<HTMLInputElement>) => { // this is probably very wrong and very bad
    if(this.state.checked === false) {
      this.setState({checked: true, mode: "Edit"})
    }
    else if(this.state.checked === true) {
      this.setState({checked: false, mode: "Preview"})
    }
  }
  render() {
    return (
      <Box sx={{display: "flex", position: "sticky", top: 0, width: "600px", justifyContent: "center", marginLeft: "20px", paddingBottom: "50px", paddingTop: "15px"}}>
        <Box sx={{position: "absolute"}}>
          <h1>CV application</h1>
        </Box>
        <FormGroup>
          <FormControlLabel sx={{paddingLeft: "400px"}} control={<Switch checked={this.state.checked} onChange={this.handleChange} />} label={`${this.state.mode}`} />
        </FormGroup>
      </Box>
    )
  }
}
