/* eslint-disable react/prop-types */
import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ContentWrapper from '../components/styles/ContentWrapper';
import PostShareButtons from '../components/PostShareButtons';
import RichTextRenderer from '../components/RichTextRenderer';

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
      description={post.summary.text}
      canonicalPath={`/blog/${post.slug}`}
      og={{ type: 'article', published_time: post.publishedDate, tags: post.tags || [] }}
    />

    <Wrapper>
      <PostMetadata>
        {metadata.author} — <time dateTime={post.publishedDate}>{post.formattedPublishedDate}</time>
      </PostMetadata>
      <h1 className="title">{post.title}</h1>

      <RichTextRenderer richText={post.content} />

      <PostShareButtons canonicalUrl={post.slug} title={post.title} summary={post.summary.text} />
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
      publishedDate: PropTypes.string.isRequired,
      formattedPublishedDate: PropTypes.string.isRequired,
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
      publishedDate
      formattedPublishedDate: publishedDate(formatString: "MMMM DD, YYYY", locale: "en_GB")
      id
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData(layout: CONSTRAINED, width: 600)
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
  max-width: 65ch;
  min-height: 65vh;
  margin: 0 auto;
`;

const PostMetadata = styled.address`
  font-size: 1.6rem;
  text-align: center;
  margin: 0 auto 0.8rem;
`;

const PaginationNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  padding: 8rem 0 2.4rem;
  gap: 4rem;

  & div:last-of-type {
    text-align: right;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(20rem, 32rem));
    justify-content: space-between;
    gap: 2.4rem;
  }
`;

const PaginationLink = styled(Link)`
  display: flex;
  flex-flow: column nowrap;

  & small {
    font-size: 1.2rem;
    color: var(--color-gray);
    text-transform: uppercase;
  }

  & span {
    font-size: 2.2rem;
  }
`;
