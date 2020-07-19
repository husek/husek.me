import styled from 'styled-components';
import ReactWave from 'react-wavify'

const HeaderWrapper = styled.header`
background: rgb(80,0,202);
background: linear-gradient(166deg, rgba(80,0,202,1) 0%, rgba(101,0,255,1) 51%, rgba(33,0,107,1) 100%);
  margin-bottom: 1.45rem;
  height: 170px;
`;

const HeaderContent = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  padding-top: 20px;
  h1 {
    margin-left: 15px;
    a {
      color: #fff;
      font-family: 'CarlsonAntique';
      text-decoration: none;
    }
  }
`;

const Wave = styled(ReactWave)`
  overflow: visible;
  height: 260px
`;

export { HeaderWrapper, Wave, HeaderContent };
