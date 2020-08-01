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

const isBrowser = typeof window !== 'undefined';


const Layout = React.memo<props>(({ children }) => {
  const isDark = isBrowser ? window.matchMedia('(prefers-color-scheme: dark)') : {
    matches: true,
    addListener: () => null
  };

  const [currentTheme, setCurrentTheme] = React.useState(isDark.matches ? 'dark' : 'light');
  const toggleTheme = () => setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');

  React.useEffect(() => {
    isDark.addListener(event => {
      setCurrentTheme(event.matches ? 'dark' : 'light');
    });
  }, []);


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
                Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
              </Col>
            </Row>
          </Grid>
        </footer>
      </ThemeProvider>
    </>
  );
});

export default Layout;
