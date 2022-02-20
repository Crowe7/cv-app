import React, { Component } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default class Header extends Component {
  constructor(props:boolean) {
    super(props);
    this.state = {
      checked: false
    }
  }
  render() {
    return (
      <div>
        <h1>CV application</h1>
        <FormGroup>
          <FormControlLabel control={<Switch />} label="Label" />
        </FormGroup>
      </div>
    )
  }
}
