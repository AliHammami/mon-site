import * as React from 'react'
import Layout from '../components/layout'
import '../styles/skills.scss'

const Skills = () => {
  return (
    <div className="container">
      <Layout pageTitle="Mes compétences en détails ?">
        <div className="skillsContent">
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