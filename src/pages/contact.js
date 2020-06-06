import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../style/normalize.css"
import "../style/all.scss"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout 
    title={siteTitle}
    isIndex={false}
    noFoot={true}
    >
      <SEO title="About" 
        keywords={[`Natasha Fletcher`, `visual`, `artist`, `personas ilusas`, `photography`, `installation`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="dynamic-styles">NSFVisualArts@gmail.com</h2>
        </div>
      </article>
      <footer className="post-content-footer"></footer>
    </Layout >
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    selfPortrait: file(
      relativePath: { eq: "2016-11-2916-15.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
