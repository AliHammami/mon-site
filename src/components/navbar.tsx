import React from 'react'
import { Link } from 'gatsby'

import "./navbar.scss"


const IndexPage = () => {
  return (
    <div> 
      <header>
        <div>
          <Link to="/">
            <span style={{fontWeight: 100, fontSize: "15px"}}>Web Developpeur</span>
            <span style={{fontWeight: 500, fontSize: "25px"}}>Ali Hammami</span>
          </Link>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/prise-de-rendez-vous">Rendez-vous</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
export default IndexPage