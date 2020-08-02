import * as React from 'react';
import { Link } from 'gatsby';
import { Row, Col } from 'react-flexbox-grid';
import { MDXRendererProps } from 'gatsby-plugin-mdx';

interface props {
  posts: MDXRendererProps[]
}

const BlogPosts = ({ posts }: props) => (
  <Row>
    {posts.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug;
      return (
        <Col xs={4} key={node.fields.slug}>
          <h3>
            <Link
              to={`/blog${node.fields.slug}`}
            >
              {title}
            </Link>
          </h3>
          <small>{node.frontmatter.date}</small>
          <p
            dangerouslySetInnerHTML={{
              __html: node.frontmatter.description || node.excerpt
            }}
          />
        </Col>
      );
    })}
  </Row>
);

export default BlogPosts;
