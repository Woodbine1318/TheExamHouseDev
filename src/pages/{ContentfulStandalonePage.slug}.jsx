import { graphql } from 'gatsby';
import React from 'react';
import { PropTypes } from 'prop-types';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ContentWrapper from '../components/styles/ContentWrapper';
import RichTextRenderer from '../components/RichTextRenderer';

const ContentfulStandalonePage = ({ path, data: { contentfulStandalonePage: page } }) => (
  <Layout>
    <SEO title={page.title} description={page.summary.text} canonicalPath={path} />

    <h1 className="title">{page.title}</h1>

    <ContentWrapper>
      <RichTextRenderer richText={page.content} />
    </ContentWrapper>
  </Layout>
);

ContentfulStandalonePage.propTypes = {
  path: PropTypes.string.isRequired,
  data: PropTypes.shape({
    contentfulStandalonePage: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      summary: PropTypes.shape({
        text: PropTypes.string.isRequired,
      }).isRequired,
      content: PropTypes.shape({
        raw: PropTypes.string.isRequired,
        references: PropTypes.arrayOf(PropTypes.object).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ContentfulStandalonePage;

export const query = graphql`
  query StandalonePage($slug: String!) {
    contentfulStandalonePage(slug: { eq: $slug }) {
      id
      title
      summary {
        text: summary
      }
      content {
        raw
        references {
          ... on ContentfulTuitionCentre {
            __typename
            contentful_id
            id
            name
            slug
          }
          ... on ContentfulBlogPost {
            __typename
            contentful_id
            id
            slug
            title
          }
          ... on ContentfulAsset {
            __typename
            contentful_id
            id
            title
            gatsbyImageData(layout: CONSTRAINED, width: 600)
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
