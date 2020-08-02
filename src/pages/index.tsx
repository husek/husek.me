import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRendererProps } from 'gatsby-plugin-mdx';
import Main from '../containers/main';


export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        articles: allMdx(filter: {fileAbsolutePath: {regex: "/content/blog/"}}, limit: 3, sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                    }
                }
            }
        }
        projects: allMdx(filter: {fileAbsolutePath: {regex: "/content/projects/"}}, limit: 3, sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                    }
                }
            }
        }
    }
`;

interface props {
  data?: MDXRendererProps
}

const Index = ({ data }: props) => {
  const { edges: posts } = data.articles;
  const { edges: projects } = data.projects;
  return <Main blogPosts={posts} projects={projects} />;
};

export default Index;
