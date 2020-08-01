import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import { Grid, Row, Col } from "react-flexbox-grid"
import Header from "../../components/header"
import themes from '../../themes';
import GlobalStyles from "./globalStyles"
import "../../fonts/fonts.css"

const Layout = ({ children }) => {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)');


  const [currentTheme, setCurrentTheme] = useState(isDark.matches ? 'dark' : 'light');
  const toggleTheme = () => setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    isDark.addListener((event) => {
      setCurrentTheme(event.matches ? 'dark' : 'light');
    });
  }, []);

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
      <ThemeProvider theme={themes[currentTheme]}>
        <GlobalStyles />
        <Header siteTitle={data.site.siteMetadata.title} onChangeTheme={toggleTheme} currentTheme={currentTheme} />
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
      </ThemeProvider>
    </>
  )
}

export default Layout
