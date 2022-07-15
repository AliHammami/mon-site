import * as React from 'react'
import Layout from '../components/layout'

import '../styles/intro.scss'

const Intro = () => {
  return (
    <div className="introDiv">
      <Layout pageTitle="Qui je suis en quelques mots">
        <div className="introParagraph">
          <p>Développeur depuis maintenant 3 ans après m'être lancé dans l'apprentissage du développement 
            web via dans un premier temps la plateforme OpenClassRoom puis par la suite la formation O'Clock. 
          </p>
          <p>Aujourd'hui j'ai acqui une expertise sur React grâce à mes 3 années chez Whire. Je me perfectionne également de plus en plus autour de l'écosystème Javascript (graphql, node, mongoDB, express), je reste 
            aussi en veille perpétuelle pour découvrir les dernières techno et apprendre les nouveautés sur celles que j'utilise déjà.
          </p>
        </div>
      </Layout>
    </div>
  )
}
export default Intro