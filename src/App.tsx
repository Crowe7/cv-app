import React, {Component} from 'react';
import './styles/App.css'
import Header from './components/Header';
import Main from './components/main-comp/Main';
import Box from '@mui/material/Box'

class App extends Component {

  render() {
    return (
      <Box sx={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
        <Header/>
        <Main/>
      </Box>
    )
  }
}


export default App;
