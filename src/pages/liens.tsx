import * as React from 'react'
import Layout from '../components/layout'

import GithubLogo from '../images/github.svg';
import InstaLogo from '../images/instagram.svg';
import LinkedinLogo from '../images/linkedin.svg';

import NavBar from '../components/navbar'



import '../styles/link.scss'

const Link = () => {
  return (
    <div className="linkDiv">
      <Layout pageTitle="Mes réseaux sociaux">
        <div className="linkContent">
          <img onClick={()=> window.open('https://www.github.com')} src={GithubLogo} alt="Github Logo" />
          <img onClick={()=> window.open('https://www.linkedin.com')} src={LinkedinLogo} alt="Linkedin Logo" />
          <img onClick={()=> window.open('https://www.instagram.com')} src={InstaLogo} alt="Instagram Logo" />
        </div>
      </Layout>
    </div>
  )
}
export default Link