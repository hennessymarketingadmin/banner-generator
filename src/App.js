import React, { Component } from 'react';
import './App.css';
import Banner from './components/banner.js';
import Create from './components/create.js';


class App extends Component {

  state = {
    create: false,
  }

  render() {
    return (
      <div>
        <Banner 
          // create={this.state.create}
        />

        {this.state.create ? <Create/>
        :
        <button
          onClick = {()=>{
            this.setState({create: true})
          }}
        >Get Started</button>
        }
      </div>
    );
  }
}

export default App;