import React from 'react'
import { Route } from 'react-router'
import { Switch } from 'react-router-dom'

//IMPORT COMPONENTS
import Projects from './Projects'
import About from './About'
import ProjectFluffTrainer from './ProjectFluffTrainer'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Projects} />
      <Route path="/about" component={About} />
      <Route path="/FluffTrainer" component={ProjectFluffTrainer} />
    </Switch>
  )
}

export default Routes
