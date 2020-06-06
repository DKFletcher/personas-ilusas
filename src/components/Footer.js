import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import indexModule from '../components/index.module.css'



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
    <footer className={props.isIndex ? indexModule.siteFoot : `site-foot`}>
      {console.log('isIndex: ', props.isIndex)}
      {props.noFoot ? null : (
        <div>
          &copy; {indexQuery.site.siteMetadata.title} {new Date().getFullYear()}
        </div>
      )}
    </footer>
  )
}
export default Footer
