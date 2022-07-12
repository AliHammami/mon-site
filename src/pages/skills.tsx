import * as React from 'react'
import Layout from '../components/layout'
import '../styles/skills.scss'

const Skills = () => {
  return (
    <div className="container">
      <Layout pageTitle="Mes compétences en détails ?">
        <div className="skillsContent">
          <p>Je peux réaliser pour vous votre site web ce qui est indispensable pour améliorer la visibilité de ses activités.
            Le développement de votre site web est réalisé avec soin et répond aux standards web du W3C le tout en html5 via React et css/scss.
            Votre site sera bien entendu résponsive design, c'est à dire adaptabé à tous les écrans (ordinateur, tablette, téléphone).
            Je peux également répondre à vos attentes en terme de développement back-end.
          </p>
          <div className="skillsDisplay">
            <div className="skillsBarContainer">
              <h2>Mes compétences front-end</h2>
              <div>
                <div>
                  <div>
                    <h3>HTML5</h3>
                  </div>
                  <div className="skillsBar">
                    <div className="skillsHtml"> &nbsp;&nbsp;</div>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>Css/Scss</h3>
                  </div>
                  <div className="skillsBar">
                    <div className="skillsCss"> &nbsp;&nbsp;</div>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>Javascript</h3>
                  </div>
                  <div className="skillsBar">
                    <div className="skillsJavascript"> &nbsp;&nbsp;</div>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>React</h3>
                  </div>
                  <div className="skillsBar">
                    <div className="skillsReact"> &nbsp;&nbsp;</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skillsBarContainer">
              <h2>Mes compétences back-end</h2>
              <div>
                <div>
                  <div>
                    <h3>NodeJs</h3>
                  </div>
                  <div className="skillsBar">
                    <div className="skillsNode"> &nbsp;&nbsp;</div>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>ExpressJs</h3>
                  </div>
                  <div className="skillsBar">
                    <div className="skillsExpress"> &nbsp;&nbsp;</div>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>MongoDB</h3>
                  </div>
                  <div className="skillsBar">
                    <div className="skillsMongo"> &nbsp;&nbsp;</div>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>GraphQl</h3>
                  </div>
                  <div className="skillsBar">
                    <div className="skillsGraph"> &nbsp;&nbsp;</div>
                  </div>
                </div>
                <div>
                  <div>
                    <h3>Prisma</h3>
                  </div>
                  <div className="skillsBar">
                    <div className="skillsPrisma"> &nbsp;&nbsp;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>

  )
}
export default Skills