import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components';

const StyledBlogPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledArticle = styled.article`
  width: 80%;
  border-bottom: 1px solid rgba(238, 238, 238, 1);
  margin-bottom: 24px;
`;

const StyledTitle = styled.h2`
  color: rgba(66, 66, 66, 1);
  text-decoration: none;
`;

const StyledLink = styled(Link) `
  color: rgba(66, 66, 66, 1);
  text-decoration: none;
  font-size: 32px;
  font-weight: 100;
  text-transform: uppercase;
`;

export default function Index({ data, location }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <StyledBlogPostsContainer>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) =>
          <StyledArticle key={post.id}>
            <StyledTitle>
              <StyledLink to={post.frontmatter.path}>
                {post.frontmatter.title}
              </StyledLink>
            </StyledTitle>
            <p>
              {post.excerpt}
            </p>
          </StyledArticle>
        )}
    </StyledBlogPostsContainer>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
