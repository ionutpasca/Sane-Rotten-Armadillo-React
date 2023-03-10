import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import PagedsauygDsuagydsa from './views/pagedsauyg-dsuagydsa'
import Dsadsa from './views/dsadsa'
import Igydusyagduygsagyudsadsa from './views/igydusyagduygsagyudsadsa'
import Home1 from './views/home1'

const App = () => {
  return (
    <Router>
      <div>
        <Route
          component={PagedsauygDsuagydsa}
          exact
          path="/pagedsauyg-dsuagydsa"
        />
        <Route component={Dsadsa} exact path="/dsadsadsa" />
        <Route
          component={Igydusyagduygsagyudsadsa}
          exact
          path="/igydusyagduygsagyudsadsa"
        />
        <Route component={Home1} exact path="/home1" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
