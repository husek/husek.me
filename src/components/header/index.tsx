import * as React from 'react';
import { Link } from 'gatsby';
import { Col, Row, Grid } from 'react-flexbox-grid';
import { useTheme } from 'styled-components';
import {
  Wave, HeaderWrapper, HeaderContent, ThemeChanger, ThemeChangerWrapper
} from './styles';
// @ts-ignore
import Logo from './assets/logo.inline.svg';


interface props {
  currentTheme: string;
  onChangeTheme(event: React.MouseEvent<HTMLDivElement>): void;
}

const Header = React.memo<props>(({ onChangeTheme, currentTheme }) => {
  const theme = useTheme();

  return (
    <HeaderWrapper>
      <Wave
        fill={theme.contrastColor}
        options={{
          height: 130,
          amplitude: 12,
          speed: 0.22,
          points: 2
        }}
      />
      <HeaderContent>
        <Grid>
          <Row middle="xs">
            <Col>
              <Logo width={90} color={theme.logoColor} />
            </Col>
            <Col>
              <h1 style={{
                margin: 0, padding: 0, marginLeft: '0.3em', color: theme.logoColor
              }}
              >
                <Link to="/">
                  HUSEK
                </Link>
              </h1>
            </Col>
            <ThemeChangerWrapper xs={12}>
              <Grid>
                <ThemeChanger
                  onClick={onChangeTheme}
                  name={currentTheme === 'dark' ? 'sun-o' : 'moon-o'}
                  color={theme.logoColor}
                />
              </Grid>
            </ThemeChangerWrapper>
          </Row>
        </Grid>
      </HeaderContent>
    </HeaderWrapper>
  );
});

export default Header;
