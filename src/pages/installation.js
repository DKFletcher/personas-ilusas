import React from "react"
import { graphql, StaticQuery } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../style/normalize.css"
import "../style/all.scss"


import PostCard from "../components/postCard"


import "../style/normalize.css"
import "../style/all.scss"


const IllustrationCarousel = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  return (
    <Layout title={siteTitle} path={location.path}>
      <SEO
        title="Installation"
        keywords={[`Natasha Fletcher`, `visual`, `artist`, `personas ilusas`, `photography`, `installation`]}
      />
      {/* <Bio /> */}
      {data.site.siteMetadata.description && (
        <header className="page-head">
          <h2 className="page-head-title">
            Installation
          </h2>
        </header>
      )}
      <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        profession
      }
    }
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC}, 
      filter: { fileAbsolutePath: { regex: "/installation/" }}
    ){
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter{
            date(formatString: "MMMM D, YYYY")
            title
            description
            tags
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }  
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <IllustrationCarousel location={props.location} props data={data} {...props} />
    )}
  />
)
