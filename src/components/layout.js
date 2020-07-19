import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Grid, Row, Col } from "react-flexbox-grid"
import Header from "./header/"
import 'react-flexbox-grid/dist/react-flexbox-grid.css';
import "../fonts/fonts.css";
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Grid>
        <Row>
          <Col xs={12}>
            <main>{children}</main>
          </Col>
        </Row>
      </Grid>
      <footer>
        <Grid>
          <Row between="xs">
            <Col>
              © {new Date().getFullYear()}
            </Col>
            <Col>
              Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
            </Col>
          </Row>
        </Grid>
      </footer>
    </>
  )
}

export default Layout
