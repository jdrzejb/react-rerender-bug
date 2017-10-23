import React, { Component } from 'react'
import Body from './components/Body'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Articles from './views/Articles/Articles'
import Insights from './views/Insights'

class Application extends Component {
  render () {
    return (
      <Router>
          <Body>
            <div>
              <Route path="/" component={Articles}/>
              <Route path="/insights" component={Insights}/>
            </div>
          </Body>
      </Router>
    )
  }
}

export default Application
