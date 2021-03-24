import { graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import RichTextRenderer from '../components/RichTextRenderer';
import ContentWrapper from '../components/styles/ContentWrapper';

const ContentfulTuitionCentre = ({
  data: {
    site: {
      siteMetadata: { contactInfo },
    },
    contentfulTuitionCentre: centre,
  },
}) => (
  <Layout>
    <SEO title={centre.name} description={centre.summary.text} canonicalPath={`/${centre.slug}`} />

    <ContentWrapper>
      <h1 className="title">{centre.name}</h1>

      <address>{centre.address}</address>
      <p>
        Get in touch on tel: <a href={`tel:${centre.phone}`}>{centre.phone}</a>
      </p>

      <p>
        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
      </p>

      <RichTextRenderer richText={centre.content} />
    </ContentWrapper>
  </Layout>
);

ContentfulTuitionCentre.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        contactInfo: PropTypes.shape({
          email: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,

    contentfulTuitionCentre: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      summary: PropTypes.shape({
        text: PropTypes.string.isRequired,
      }).isRequired,
      address: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      content: PropTypes.shape({
        raw: PropTypes.string.isRequired,
        references: PropTypes.arrayOf(PropTypes.object),
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ContentfulTuitionCentre;

export const query = graphql`
  query TuitionCentre($slug: String!) {
    site {
      siteMetadata {
        contactInfo {
          email
        }
      }
    }

    contentfulTuitionCentre(slug: { eq: $slug }) {
      id
      slug
      name
      summary {
        text: summary
      }
      address
      phone
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData(layout: CONSTRAINED, width: 800)
          }
        }
      }
    }
  }
`;
