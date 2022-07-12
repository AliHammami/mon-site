import * as React from 'react'
import './layout.scss'

const Layout = ({ pageTitle, children }: {pageTitle: string, children: React.ReactNode}) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout