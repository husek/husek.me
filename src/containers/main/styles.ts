import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';

const DevIntro = styled(Col)`
 img {
  display: block;
  border-radius: 50%;
 }
 
 p img {
  display: inline;
 }
 h3 {
    color: ${({ theme }) => theme.boldColor};
    letter-spacing: 0.16em;
    margin-top: 0.1em;
    margin-left: 0.1em;
  }
  h4 {
    color: ${({ theme }) => theme.semiBoldColor};
    letter-spacing: 0.16em;
    margin-top: -1em;
    margin-left: 0.1em;
  }
  img {
    vertical-align: bottom;
    margin-left: 0.5em;
    margin-top: 0;
  }
`;


const DevName = styled.h1`
  background: ${({ theme }) => theme.accentColor};
  color: ${({ theme }) => theme.logoColor};
  display: inline-block;
  padding: 0.1em 0.3em;
  margin-bottom: 0.1em;
  font-family: CarlsonAntique, sans-serif;
  font-size: 2.5em;
  letter-spacing: 0.1em;
`;

const ContactCol = styled(Col)`
  margin-left: 1em;
  a {
    text-decoration: none;
    i {
      &:hover {
        color: ${({ theme }) => theme.linkColor};
      }
    }
  }
`;

const Experience = styled.div`
  margin: 3em 0;
  h4 {
    font-size: 1.2em;
    font-family: 'Roboto', sans-serif;
    letter-spacing: normal;
    margin-bottom: 0.8em;
  }
  
  small {
    color: ${({ theme }) => theme.semiBoldColor};
    display: block;
    margin-top: -0.7em;
    margin-bottom: 0.8em;
    line-height: 1.3em;
  }
`;


export {
  DevName,
  DevIntro,
  ContactCol,
  Experience
};
