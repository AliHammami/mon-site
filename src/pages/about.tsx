import * as React from 'react'
import Layout from '../components/layout'
import '../styles/about.scss'


const AboutPage = () => {
  return (
    <div className="aboutContainer">
      <Layout pageTitle="Ce que je peux faire pour vous et pourquoi faire appel à moi ?">
        <div className="aboutContent">
          <p>Je peux réaliser pour vous votre site web, ce qui est indispensable pour améliorer la visibilité de ses activités.
            Le développement de votre site web sera réalisé avec soin et répondra aux standards web du W3C le tout en html5 via React et css/scss.
            Votre site sera bien entendu résponsive design, c'est à dire adaptabé à tous les écrans (ordinateur, tablette, téléphone).
            Je peux également répondre à vos attentes en terme de développement back-end.
          </p>
        </div>
      </Layout>
    </div>
  )
}
export default AboutPage