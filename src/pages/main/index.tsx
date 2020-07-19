import * as React from "react"
import { Link } from "gatsby"
import { Row, Col } from 'react-flexbox-grid';
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { DevName } from './styles';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Row>
      <Col xs={6}>
        <DevName>Gabriel Husek<br/></DevName>
        <h2>Software Engineer</h2>
        <p>Text Text Text Full-stack Dev.
          Text text, text React, Redux, Node.js, Firebase
        </p>

        <p>
          Get in Touch
          [Icoooooons]
        </p>
      </Col>

      <Col>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </Col>
    </Row>

    <Row>
      <Col xs={12}>
        <h3>My Articles</h3>
      </Col>
      <Col xs={4}>
        Article 1
      </Col>

      <Col xs={4}>
        Article 2
      </Col>

      <Col xs={4}>
        Article 3
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
