import React, { Component, ChangeEvent } from 'react'
import GeneralBoxes from './GeneralBoxes';
import Box from '@mui/material/Box';

export interface GeneralInfoState {
    Name: string,
    PhoneNumber: string,
    Email: string,

}

type MyState = GeneralInfoState;

export default class GeneralInfo extends Component {
    state: MyState = {
        Name: '',
        PhoneNumber: '',
        Email: ''

    }

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({[e.target.name]: e.target.value})
    }

  render() {
    return (
        <Box>
            <Box sx={{padding: "10px", borderBottom: 3, borderColor: "#94D2BD"}}>
                <h1>Add Personal Information</h1>
            </Box>
            <Box>
                <GeneralBoxes handleChange={this.handleChange}/>
            </Box>
        </Box>

    )
  }
}
