import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import ContentWrapper from '../../components/styles/ContentWrapper';

const ContentfulBlogPost = ({ data: { contentfulBlogPost: post } }) => (
  <Layout>
    <SEO title={post.title} description={post.summary.text} />

    <ContentWrapper>
      <h1 className="title">{post.title}</h1>

      {renderRichText(post.content)}
    </ContentWrapper>
  </Layout>
);

ContentfulBlogPost.propTypes = {
  data: PropTypes.shape({
    contentfulBlogPost: PropTypes.shape({
      title: PropTypes.string.isRequired,
      summary: PropTypes.shape({
        text: PropTypes.string.isRequired,
      }).isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      id: PropTypes.string.isRequired,
      content: PropTypes.shape({
        raw: PropTypes.string.isRequired,
        references: PropTypes.arrayOf(PropTypes.object),
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ContentfulBlogPost;

export const query = graphql`
  query BlogPost($id: String) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      summary {
        text: summary
      }
      tags
      publishedDate
      id
      content {
        raw
        references {
          gatsbyImageData
        }
      }
    }
  }
`;
