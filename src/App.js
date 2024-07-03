import React, { Component } from 'react';

import ImageComponent from './components/ImageComponent'
import FormComponent from './components/FormComponent'

import './App.css';

class App extends Component {
  render() {
    return(
      <>
        <div className='app'>
          <ImageComponent />
          <FormComponent />
        </div>
      </>
      
    )
  }
}

export default App;