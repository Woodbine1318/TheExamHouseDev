import { graphql, Link } from 'gatsby';
import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { PaginationNav, PaginationLink } from '../components/styles/PaginationNav';

const PaginatedBlog = ({ pageContext: { previousPage, nextPage }, data: { allContentfulBlogPost: posts } }) => (
  <Layout>
    <SEO title="Exam Blog" />

    <StyledNav>
      {posts.edges.map(({ node: post }) => (
        <article key={post.id}>
          <Link to={`/blog/${post.slug}`}>
            <span>{post.title}</span>
            <span>{post.summary?.text}</span>
            <time dateTime={post.publishedDate || post.createdAt}>
              {post.formattedPublishedDate || post.formattedCreatedAt}
            </time>
          </Link>
        </article>
      ))}

      <PaginationNav as="div">
        <div>{previousPage ? <PaginationLink to={previousPage}>Newer</PaginationLink> : null}</div>

        <div>{nextPage ? <PaginationLink to={nextPage}>Older</PaginationLink> : null}</div>
      </PaginationNav>
    </StyledNav>
  </Layout>
);

PaginatedBlog.propTypes = {
  pageContext: PropTypes.shape({
    previousPage: PropTypes.string,
    nextPage: PropTypes.string,
  }).isRequired,

  data: PropTypes.shape({
    allContentfulBlogPost: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            summary: PropTypes.shape({
              text: PropTypes.string.isRequired,
            }).isRequired,
            createdAt: PropTypes.string.isRequired,
            formattedCreatedAt: PropTypes.string.isRequired,
            publishedDate: PropTypes.string,
            formattedPublishedDate: PropTypes.string,
          }).isRequired,
        }),
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default PaginatedBlog;

export const query = graphql`
  query PaginatedBlogQuery($postsPerPage: Int!, $skip: Int!) {
    allContentfulBlogPost(limit: $postsPerPage, skip: $skip, sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          id
          slug
          title
          summary {
            text: summary
          }
          createdAt
          formattedCreatedAt: createdAt(formatString: "MMMM, DD YYYY", locale: "en_GB")
          publishedDate
          formattedPublishedDate: publishedDate(formatString: "MMMM, DD YYYY", locale: "en_GB")
        }
      }
    }
  }
`;

const StyledNav = styled.nav`
  text-align: center;

  & article {
    margin-bottom: 6rem;
  }

  & a:not(div > a) {
    font-size: 2.4rem;
    padding: 1.6rem 0;
    text-decoration: none;
  }

  & span + span {
    display: block;
    font-size: 1.6rem;
    margin-bottom: 1.6rem;
  }

  & time {
    display: block;
    font-size: 1.2rem;
    text-transform: uppercase;
  }
`;
