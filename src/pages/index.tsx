import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Skills from './skills'
import About from './about'
import Intro from './intro'
import "../styles.scss"


const IndexPage = () => {
  return (
    <div className="intro"> 
      {/* <header>
        <nav>
          <div>
            <span>Web Developpeur </span>
            <span>Ali Hammami</span>
          </div>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">Liens</Link></li>
            <li><Link to="/skills">Contact</Link></li>
          </ul>
      </nav>
      </header> */}
      <header>
        <div>
          <span style={{fontWeight: 100, fontSize: "15px"}}>Web Developpeur</span>
          <span style={{fontWeight: 500, fontSize: "25px"}}>Ali Hammami</span>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">Liens</Link></li>
            <li><Link to="/skills">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <div className="content">
        <Intro />
        <About />
        <Skills />
      </div>
    </div>
  )
}
export default IndexPage