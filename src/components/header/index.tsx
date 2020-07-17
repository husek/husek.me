import * as React from "react"
import { Link } from "gatsby"
import { Wave, HeaderWrapper, HeaderContent } from "./styles"

const Header = () => (
  <HeaderWrapper>
    <Wave
      fill='#fff'
      paused={false}
      options={{
        height: 130,
        amplitude: 10,
        speed: 0.18,
        points: 8
      }}
    />
    <HeaderContent>
      <h1>
        <Link to="/">
          Logo here
        </Link>
      </h1>
    </HeaderContent>
  </HeaderWrapper>
);

export default Header
