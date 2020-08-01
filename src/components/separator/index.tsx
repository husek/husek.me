import * as React from "react"
import { Col, Row } from 'react-flexbox-grid';
import { SeparatorWrapper } from "./styles"

const Separator = React.memo(() => (
  <SeparatorWrapper>
    <Row>
      <Col xs={12} />
    </Row>
  </SeparatorWrapper>
));

export default Separator;

