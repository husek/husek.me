import * as React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { MDXRendererProps } from 'gatsby-plugin-mdx';
import Layout from '../layout/layout';
import SEO from '../layout/seo';
import Separator from '../../components/separator';
import Icon from '../../components/icon';
import {
  DevIntro, DevName, ContactCol, Experience
} from './styles';
import BlogPosts from '../../components/blogPost';
import ProjectList from '../../components/projectList';
// @ts-ignore
import ObiWan from './assets/hellothere.png';
// @ts-ignore
import Husek from './assets/husek.jpg';

interface props {
  blogPosts: MDXRendererProps[];
  projects: MDXRendererProps[];
}

const IndexPage = ({ blogPosts, projects }: props) => (
  <Layout>
    <SEO title="Gabriel Husek - Senior Software Engineer" />
    <Row>
      <DevIntro xs={12} md={7}>
        <Row middle="xs" style={{ marginBottom: '2em', padding: '0.5em', marginTop: '1.2em' }}>
          <Col xs={12} md={4} lg={5}>
            <img alt="Husek" src={Husek} />
          </Col>
          <Col xs={12} md={8} lg={6}>
            <DevName>Gabriel Husek</DevName>
            <h3>Senior Software Engineer</h3>
            <h4>Montréal - Quebéc - Canada</h4>
          </Col>
        </Row>

        <p>
          Hello there <img width="30px" src={ObiWan} alt="Why, hello there" />
        </p>

        <p>
          I'm a full-stack engineer, working in the field for a little bit longer than a decade now. Some of
          my specializations are: {' '}
          <strong>Node.js, React.js, React Native, Redux, GraphQL,</strong> and <strong>server-side rendering</strong>.
        </p>

        <p>
          I've successfully built and delivered products for companies based in North America, Europe, and South
          America. From 5-person startups to Fortune 500 companies, I've engineered solutions of all kinds, such
          as {' '}
          <strong>Web Apps, Mobile Apps, Micro-services and APIs.</strong>
        </p>


        <p>
          Aside from all that, I've been working with <strong>TypeScript</strong> for a couple of years now,
          on both back-end and front-end projects {' '}
          <a href="https://github.com/husek/husek.me">(like the page you are reading right now)</a>.
        </p>

        <Separator />
        <Row middle="xs">
          <Col style={{ marginRight: '2.5em' }}>
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
        </Row>
        <Separator />
      </DevIntro>

      <Col xs={12} md={4} mdOffset={1}>
        <h2>Experience</h2>
        <Experience>
          <h4>Senior Software Engineer @<a href="https://videri.com/">Videri</a></h4>
          <small>React, Redux-Saga, React Native, TypeScript, Styled-Components, Ember.js, Canvas, Node.js,
            Next.js</small>

          <p>
            Currently working on Creative Studio, a photoshop-esque drag-and-drop web app, empowering the user to
            compose
            their own 'dashboards' and export them to their Canvases.
          </p>
          <p>
            The user can select Widgets from all kinds (images, video, weather, twitch, youtube), customize them,
            connect them to external sources/conditionals and display them.
          </p>
        </Experience>

        <Experience>
          <h4>Lead Software Engineer @<a href="https://nestready.ai">NestReady</a></h4>
          <small>React, Redux, GraphQL, Node.js, ElasticSearch, PostgreSQL, Firebase, K8s, GCP</small>

          <p>
            Wrote a whitelabel application, currently being used by some of the largest banks in Canada and multiple
            credit unions in the USA.
          </p>

          <p>
            This platform is a one-stop-shop for acquiring real estate and applying for a mortgage, sold as a SaaS.
          </p>

        </Experience>

        <Experience>
          <h4>Senior Full-Stack Engineer @<a href="https://oktium.com">Oktium</a></h4>
          <small>React, Redux, SSR, WebRTC, Node.js, MongoDB, Redis, AWS, Docker</small>
          <p>
            Ported the iOS app to the Web, allowing calls from browser-to-device, device-to-browser and its associated
            actions (one click checkout, schedule appointments etc).
          </p>

          <p>Responsible for the Stripe/recurring payment micro-service implementation.</p>
        </Experience>

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
      <Col xs={12}>
        <ProjectList posts={projects} />
      </Col>
    </Row>

    <Separator />


    <Row>
      <Col xs={12}>
        <h2>Articles</h2>
      </Col>
      <Col xs={12}>
        <BlogPosts posts={blogPosts} />
      </Col>
    </Row>

    <Separator />

  </Layout>
);

export default IndexPage;
