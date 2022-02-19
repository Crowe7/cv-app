import React, {Component} from 'react';
import './styles/App.css'
import Header from './components/Header';

class App extends Component {
  constructor(props:any) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Header/>
      </div>
    )
  }
}


export default App;
