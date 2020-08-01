import * as React from "react"
// import { Link } from "gatsby"
import { Row, Col } from "react-flexbox-grid"
import Layout from "../layout/layout"
import SEO from "../layout/seo"
import { DevIntro, DevName, ContactCol } from "./styles"
import Separator from "../../components/separator"
import Icon from "../../components/icon"
// @ts-ignore
import ObiWan from "./assets/hellothere.png"


const IndexPage = () => (
  <Layout>
    <SEO title="Gabriel Husek - Senior Software Engineer" />
    <Row>
      <DevIntro xs={7 }>
        <DevName>Gabriel Husek</DevName>
        <h3>Senior Software Engineer</h3>
        <h4>Montréal - Quebéc - Canada</h4>

        <p>
          Hello there <img width="30px" src={ObiWan} alt="Why, hello there" />
        </p>

        <p>
          I'm a full-stack engineer, working on the field for a little bit longer than a decade now.
          Some of my specializations are: {" "}
          <strong>Node.js, React.js, React Native, Redux, GraphQL</strong> and <strong>Server-side rendering</strong>.
        </p>

        <p>
          I've successfully built and delivered products for companies based in North America, Europe and South America.<br />
          From 5-people-startups to Fortune 500 companies, I've engineered solutions of all kinds, such as <strong>Web
          Apps, Mobile
          Apps, Micro-services and APIs.</strong>
        </p>


        <p>
          Aside from all that, I've been working with <strong>TypeScript</strong> for a couple of years now,
          on both backend projects as for Front-end projects {" "}
          <a href="https://github.com/husek/husek.me">(like the page you are reading right now)</a>.
        </p>

        <Separator />
        <Row middle="xs">
          <Col style={{ marginRight: "2.5em" }}>
            <p style={{ marginTop: 0, marginBottom: 0, padding: '0.5em' }}>
              <strong>Get in Touch</strong>
            </p>
          </Col>

          <ContactCol>
            <a href="https://github.com/husek/">
            <Icon name="github" size="2em" />
            </a>
          </ContactCol>

          <ContactCol>
            <a href="https://www.linkedin.com/in/husek/">
              <Icon name="linkedin" size="1.8em" />
            </a>
          </ContactCol>

          <ContactCol>
            <a href="mailto:husek@me.com">
              <Icon name="envelope-o" size="1.5em" />
            </a>
          </ContactCol>

          {/*<ContactCol>*/}
          {/*  <Icon name="file-text-o" size="1.3em" />*/}
          {/*</Col>*/}
        </Row>


      </DevIntro>

      <Col xs={4} xsOffset={1}>
        <h2>Experience</h2>
        <div>
          <h4>Senior Software Engineer @<a href="https://videri.com/">Videri North</a></h4>
          <p>
            From 5-people-startups to Fortune 500 companies, I've engineered solutions of all kinds, such as Web Apps, Mobile Apps, Micro-services and APIs.
          </p>
        </div>

        <Separator />
        <div>
          <h4>Lead Software Engineer @<a href="https://nestready.ai">NestReady</a></h4>
          <p>
            From 5-people-startups to Fortune 500 companies, I've engineered solutions of all kinds, such as Web Apps, Mobile Apps, Micro-services and APIs.
          </p>
        </div>

        <Separator />
        <div>
          <h4>Senior Full-Stack Engineer @<a href="https://oktium.com">Oktium</a></h4>
          <p>
            From 5-people-startups to Fortune 500 companies, I've engineered solutions of all kinds, such as Web Apps, Mobile Apps, Micro-services and APIs.
          </p>
        </div>

        <Separator />
        <div>
          <h4>... and a lot of other places, in the last 12 years.</h4>
        </div>
      </Col>

      <Separator />

    </Row>

    <Separator />

    <Row>
      <Col xs={12}>
        <h2>Projects</h2>
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

    <Separator />


    <Row>
      <Col xs={12}>
        <h2>Articles</h2>
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

    <Separator />

  </Layout>
)

export default IndexPage
