import styled from 'styled-components';
import ReactWave from 'react-wavify'

const HeaderWrapper = styled.header`
  background: #5000ca;
  margin-bottom: 1.45rem;
  height: 170px;
`;

const HeaderContent = styled.div`
  position: absolute;
  top: 0;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  h1 {
    margin: 0;
  }
`;

const Wave = styled(ReactWave)`
  overflow: visible;
  height: 260px
`;

export { HeaderWrapper, Wave, HeaderContent };
