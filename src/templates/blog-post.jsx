/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import RichTextRenderer from '../components/RichTextRenderer';
import ContentWrapper from '../components/styles/ContentWrapper';
import { PaginationNav, PaginationLink } from '../components/styles/PaginationNav';

const ContentfulBlogPost = ({
  pageContext: { next, previous },
  data: {
    site: { siteMetadata: metadata },
    contentfulBlogPost: post,
  },
}) => (
  <Layout>
    <SEO
      title={post.title}
      description={post.summary?.text}
      canonicalPath={`/blog/${post.slug}`}
      og={{ type: 'article', published_time: post.publishedDate || post.createdAt, tags: post.tags || [] }}
    />

    <Wrapper>
      <PostMetadata>
        {metadata.author} —{' '}
        <time dateTime={post.publishedDate || post.createdAt}>
          {post.formattedPublishedDate || post.formattedCreatedAt}
        </time>
      </PostMetadata>
      <h1 className="title">{post.title}</h1>

      <RichTextRenderer richText={post.content} />
    </Wrapper>

    <PaginationNav>
      <div>
        {previous ? (
          <PaginationLink to={`/blog/${previous.slug}`}>
            <small>Previous</small>
            <span>{previous.title}</span>
          </PaginationLink>
        ) : null}
      </div>

      <div>
        {next ? (
          <PaginationLink to={`/blog/${next.slug}`}>
            <small>Next</small>
            <span>{next.title}</span>
          </PaginationLink>
        ) : null}
      </div>
    </PaginationNav>
  </Layout>
);

ContentfulBlogPost.propTypes = {
  pageContext: PropTypes.shape({
    next: PropTypes.shape({
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
    previous: PropTypes.shape({
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }).isRequired,

  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        author: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,

    contentfulBlogPost: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      summary: PropTypes.shape({
        text: PropTypes.string.isRequired,
      }).isRequired,
      tags: PropTypes.arrayOf(PropTypes.string),
      createdAt: PropTypes.string.isRequired,
      formattedCreatedAt: PropTypes.string.isRequired,
      publishedDate: PropTypes.string,
      formattedPublishedDate: PropTypes.string,
      content: PropTypes.shape({
        raw: PropTypes.string.isRequired,
        references: PropTypes.arrayOf(PropTypes.object),
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ContentfulBlogPost;

export const query = graphql`
  query BlogPost($id: String!) {
    site {
      siteMetadata {
        author
      }
    }

    contentfulBlogPost(id: { eq: $id }) {
      title
      slug
      summary {
        text: summary
      }
      tags
      createdAt
      formattedCreatedAt: createdAt(formatString: "MMMM DD, YYYY", locale: "en_GB")
      publishedDate
      formattedPublishedDate: publishedDate(formatString: "MMMM DD, YYYY", locale: "en_GB")
      id
      content {
        raw
        references {
          ... on ContentfulAsset {
            __typename
            contentful_id
            id
            title
            gatsbyImageData(layout: CONSTRAINED, width: 800)
            file {
              contentType
              url
            }
          }
          ... on ContentfulVideoEmbed {
            contentful_id
            __typename
            url
          }
        }
      }
    }
  }
`;

const Wrapper = styled(ContentWrapper)`
  min-height: 65vh;
`;

const PostMetadata = styled.address`
  font-size: 1.6rem;
  text-align: center;
  margin: 0 auto 0.8rem;
`;
