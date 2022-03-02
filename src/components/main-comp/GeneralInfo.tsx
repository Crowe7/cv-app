import React, {Component} from 'react'
import GeneralBoxes from './GeneralBoxes';
import Box from '@mui/material/Box';
import {GeneralInfoState} from './Main'

type MyProps = {
    handleChange: any // :(
    Info: GeneralInfoState
}

export default class GeneralInfo extends Component<MyProps> {

  render() {
      const {handleChange, Info} = this.props
    return (
        <Box>
            <Box sx={{padding: "10px", borderBottom: 3, borderColor: "#94D2BD"}}>
                <h1>Add Personal Information</h1>
            </Box>
            <Box>
                <GeneralBoxes handleChange={handleChange} Info={Info} />
            </Box>
        </Box>

    )
  }
}
