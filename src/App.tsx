import React, {Component} from 'react';
import './styles/App.css'
import Header from './components/Header';
import Main from './components/main-comp/Main';

class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    )
  }
}


export default App;
