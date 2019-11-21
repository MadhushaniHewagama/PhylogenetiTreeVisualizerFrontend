import React, { Component } from 'react'
import { Link } from 'react-router-dom'
/*
const Test = (props) => (
  <p className="App-intro">
    testing funstional components
  </p>
)
<Test />
*/

class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Phylogenetic Tree Visualizer</h1>
          </div>
         
        </div>
        <div className="col-sm-7 mx-auto">
        <button className="btn btn-lg btn-secondary btn-block" > <Link to="/login" className="nav-link">
            Login
          </Link></button>
        <button className="btn btn-lg btn-secondary btn-block"><Link to="/register" className="nav-link">
            Register
          </Link></button>
          </div>
        
      </div>
    )
  }
}

export default HomePage
