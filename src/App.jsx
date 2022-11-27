import React, {Component} from 'react'
import './App.css'
import Profile from './components/Profile/Profile'

class App extends Component {
  state={
    name: ""
  }
  render(){
    return (
      <div className="App">
        <Profile />
      </div>
    )
  }
  
}

export default App
