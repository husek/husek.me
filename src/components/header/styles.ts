import styled from 'styled-components';
import ReactWave from 'react-wavify'
import { Col } from 'react-flexbox-grid'
import Icon from "../icon"

const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.accentColor};
  background: ${({ theme }) => theme.splashColor};
  margin-bottom: 1.45rem;
  height: 170px;
`;

const HeaderContent = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  padding-top: 20px;
  h1 {
    margin: 0; 
    padding: 0;
    margin-left: 15px;
   
    svg {
       color: ${({ theme }) => theme.contrastColor};
    }
    a {
      color: ${({ theme }) => theme.logoColor};
      font-family: 'CarlsonAntique', sans-serif;
      text-decoration: none;
    }
  }
`;

const ThemeChangerWrapper = styled(Col)`
  position: absolute;
  text-align: right;
  top: 1em;
`;

const ThemeChanger = styled(Icon)`
  cursor: pointer;
`;

const Wave = styled(ReactWave)`
  overflow: visible;
  height: 260px
`;

export { HeaderWrapper, Wave, HeaderContent, ThemeChangerWrapper, ThemeChanger };
