import React from 'react'
import { Link } from 'gatsby'
import { InlineWidget } from "react-calendly";


import NavBar from '../components/navbar'
import Skills from './skills'
import About from './about'
import Intro from './intro'
import Links from './liens'

import "../styles.scss"


const IndexPage = () => {
  return (
    <div className="intro"> 
      <NavBar />
      <div className="content">
        <div className="book">
          <h2>Ali Hammami</h2>
          <h3>Web Développeur</h3>
          <p>Prenez un rendez-vous téléphonique et réflichissons ensemble à une solution adaptée à vos besoins </p>
          <button><Link to="/prise-de-rendez-vous">Reserver un rendez-vous téléphonique</Link></button>
          <p>Vous pouvez également me contacter par mail à cette adresse: <a href="mailto:ali.hammami.pro@gmail.com">ali.hammami.pro@gmail.com</a></p>
        </div>
        <Intro />
        <Skills />
        <About />  
        <Links /> 
        <p style={{textAlign: "center",}}>© 2022 Ali Hammami - Créé avec Gatsby, déployé sur Netlify</p> 
      </div>
    </div>
  )
}
export default IndexPage