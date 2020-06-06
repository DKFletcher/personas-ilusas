import React from "react"

import { graphql, useStaticQuery } from "gatsby"

const Footer = props => {
  const indexQuery = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <footer className="site-foot">
      {props.noFoot ? null : (
        <div>
          &copy; {indexQuery.site.siteMetadata.title} {new Date().getFullYear()}
        </div>
      )}
    </footer>
  )
}
export default Footer
