import * as React from 'react'
import { InlineWidget } from "react-calendly";

import Layout from '../components/layout'


import NavBar from '../components/navbar'



import '../styles/meeting.scss'

const Meeting = () => {
  return (
    <div>
      <NavBar/>
      <div className="linkDiv">
        <Layout pageTitle="Rendez-vous">
          <div className="meetingContent">
            <InlineWidget url="https://calendly.com/ali-hammami-pro/rendez-vous-de-30-minutes" />
          </div>
        </Layout>
      </div>
    </div>
  )
}
export default Meeting