import React from "react"
import { Link } from "gatsby"

import Footer from "../components/Footer"

const Layout = props => {
  const { title, isIndex, noFoot, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div id="menu" className="site-head-container">
          <a
            className="nav-burger"
            href={`#menu`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>{" "}
              <div className="hamburger-text-menu-text hidden">Menu</div>
            </div>
          </a>
          <nav id="swup" className="site-head-left">
            <ul className="nav" role="menu">
              <li role="menuitem">
                <Link className="navItem" activeClassName="activeNavItem" to={`/about`}>
                  About
                </Link>
              </li>

              <li role="menuitem">
                <Link
                  className="navItem"
                  activeClassName="activeNavItem"
                  to={`/photography`}
                >
                  Photography
                </Link>
              </li>

              <li role="menuitem">
                <Link
                  className="navItem"
                  activeClassName="activeNavItem"
                  to={`/installation`}
                >
                  Installation
                </Link>
              </li>

              <li role="menuitem">
                <Link
                  className="navItem"
                  activeClassName="activeNavItem"
                  to={`/contact`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {title}
            </Link>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      {isIndex ? <Footer isIndex={true} /> : <Footer noFoot={noFoot} />}
    </div>
  )
}

export default Layout
