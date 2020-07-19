import * as React from "react"
import { Link } from "gatsby"
import { Col, Row, Grid } from 'react-flexbox-grid';
import logo from './logo.svg';
import { Wave, HeaderWrapper, HeaderContent } from "./styles"

const Header = React.memo(() => (
  <HeaderWrapper>
    <Wave
      fill="#fff"
      paused={false}
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
          <img src={logo} alt="husek.me Logo" width={95} height={95} />
        </Col>
        <Col>
          <h1>
            <Link to="/">
              HUSEK
            </Link>
          </h1>
        </Col>
      </Row>
      </Grid>
    </HeaderContent>
  </HeaderWrapper>
));

export default Header
