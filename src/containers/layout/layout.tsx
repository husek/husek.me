import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Header from '../../components/header';
import themes from '../../themes';
import GlobalStyles from './globalStyles';
import '../../fonts/fonts.css';


interface props {
  children: React.ReactNode
}


const Layout = React.memo<props>(({ children }) => {
  const [currentTheme, setCurrentTheme] = React.useState('dark');
  const toggleTheme = () => setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');

  return (
    <>
      <ThemeProvider theme={themes[currentTheme]}>
        <GlobalStyles />
        <Header onChangeTheme={toggleTheme} currentTheme={currentTheme} />
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
                Built with <a rel="noreferrer noopener" target="_blank" href="https://www.gatsbyjs.org">Gatsby</a>
              </Col>
            </Row>
          </Grid>
        </footer>
      </ThemeProvider>
    </>
  );
});

export default Layout;
