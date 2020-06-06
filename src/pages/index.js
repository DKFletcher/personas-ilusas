import React from "react";
import { graphql, StaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundImage from "gatsby-background-image";

import "../style/normalize.css";
import "../style/all.scss";
import indexStyle from '../components/index.module.css';
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;
  return (
    <BackgroundImage fluid={data.indexImage.childImageSharp.fluid}>
      <Layout 
      title={siteTitle} 
      path={location}
      isIndex={true}
      >
        <SEO
          title="home"
          keywords={[`Natasha Fletcher`, `visual`, `artist`, `personas ilusas`, `photography`, `installation`]}
        />
        <h2 className={indexStyle.businessName}>N. S. Fletcher</h2>
        <h3 className={indexStyle.businessDescription}>Visual Artist</h3>
        <h4 className={indexStyle.businessActivity}>Installation / Photography / Environmental Art</h4>
      </Layout>
    </BackgroundImage>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        profession
      }
    }
    indexImage: file(relativePath: { eq: "index-background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default (props) => (
  <StaticQuery
    query={indexQuery}
    render={(data) => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
);
