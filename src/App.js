import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import HomePage from './components/pages/HomePage/HomePage'
import LoginPage from './components/pages/LoginPage/LoginPage'
import RegisterPage from './components/pages/RegisterPage/RegisterPage'
import ProfilePage from './components/pages/Profile/ProfilePage'
import AboutPage from './components/pages/AboutPage/AboutPage'
import TreePage from './components/pages/TreePage/TreePage'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={HomePage} />
          <div className="container">
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/body" component={TreePage} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
