import '../../public/style.css'
import React from 'react'

//IMPORT COMPONENTS
import Home from './Home'
import Nav from './Nav'

const title = 'My Minimal React Webpack Babel Setup'

const App = () => {
  return (
    <div>
      <Home />
      <Nav />
    </div>
  )
}

export default App
