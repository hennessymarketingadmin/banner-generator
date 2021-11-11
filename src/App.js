import React, { Component } from 'react';
import './App.css';
import Banner from './components/banner.js';
import Create from './components/create.js';
import HomeImg from './components/images/homeImg.png';

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
        <div className='homeContainer'>
          <div className='home'>
            <div className='homeContainerLeft'>
              <img src={HomeImg} alt='Home'/>
            </div>
            <div className='homeContainerRight'>
              <h1 className='homeHeader'>Bring</h1>
              <h1 className='homeHeader'>Your Product</h1>
              <h1 className='homeHeader'>To Life</h1>
              <button
                className='PinkBtn'
                onClick = {()=>{
                  this.setState({create: true})
                }}
                >Get Started</button>
            </div>
          </div>
        </div>
        }
      </div>
    );
  }
}

export default App;