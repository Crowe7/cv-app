import React, { Component } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';



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
      <div>
        <h1>CV application</h1>
        <FormGroup>
          <FormControlLabel control={<Switch checked={this.state.checked} onChange={this.handleChange} />} label={`${this.state.mode}`} />
        </FormGroup>
      </div>
    )
  }
}
