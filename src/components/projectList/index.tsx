import * as React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { MDXRendererProps } from 'gatsby-plugin-mdx';

interface props {
  posts: MDXRendererProps[]
}

const ProjectList = ({ posts }: props) => (
  <Row>
    {posts.map(({ node }) => {
      const { title, link, description } = node.frontmatter;
      return (
        <Col xs={4} key={link}>
          <h3>
            <a href={`${link}`} target="_blank" rel="noreferrer">
              {title}
            </a>
          </h3>
          <p
            dangerouslySetInnerHTML={{
              __html: description
            }}
          />
        </Col>
      );
    })}
  </Row>
);

export default ProjectList;
