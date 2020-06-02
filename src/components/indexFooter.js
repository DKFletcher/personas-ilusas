import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import indexModule from '../components/index.module.css'

const IndexFooter = (props) => {

  const indexQuery = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `);
    return (
      <footer className={indexModule.siteFoot}>
        &copy;  {indexQuery.site.siteMetadata.title} {new Date().getFullYear()}
      </footer>
    )
}
export default  IndexFooter
// export default function Footer(props) {
//   return (
//     <StaticQuery
//       query={graphql`
//         query HeadingQuery {
//           site {
//             siteMetadata {
//               title
//             }
//           }
//         }
//       `}
//       render={(data) => (
//         <footer className="site-foot">
//           &copy; {new Date().getFullYear()} <Link to={`/`}>{"siteTitle"}</Link>{" "}
//           &mdash; Built with{" "}
//           <a
//             href="https://gatsbyjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Gatsby
//           </a>
//         </footer>
//       )}
//     />
//   );
// }
