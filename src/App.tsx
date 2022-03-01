import React, {Component} from 'react';
import './styles/App.css'
import Header from './components/Header';
import Main from './components/main-comp/Main';
import Box from '@mui/material/Box'

type MyState = {
  checked?: boolean
  mode?: string
}


class App extends Component {

  state: MyState = {
    checked: true,
    mode: "Edit",
  }

  handleChange = () => { // this is probably very wrong and very bad
    if(this.state.checked === false) {
      this.setState({checked: true, mode: "Edit"})

    }
    else if(this.state.checked === true) {
      this.setState({checked: false, mode: "Preview"})
    }
  }

  render() {
    return (
      <Box sx={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
        <Header handleChange={this.handleChange} checked={this.state.checked} mode={this.state.mode} />
        <Main Mode={this.state.checked}/>
      </Box>
    )
  }
}


export default App;
