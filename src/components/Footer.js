import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import indexModule from "../components/index.module.css"

const Footer = props => {
  const indexQuery = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          business
        }
      }
    }
  `)
  return (
    <footer className={props.isIndex ? indexModule.siteFoot : `site-foot`}>
      {props.noFoot ? null : (
        <div>
          &copy; {indexQuery.site.siteMetadata.business}{" "}
          {new Date().getFullYear()}
        </div>
      )}
    </footer>
  )
}
export default Footer
