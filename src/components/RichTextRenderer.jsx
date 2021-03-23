/* eslint-disable react/prop-types */
import React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { GatsbyImage } from 'gatsby-plugin-image/';
import { graphql, Link, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import youtubeEmbedUrl from '../utils/youtubeEmbedUrl';

const richTextConfig = (siteDomain) => ({
  renderNode: {
    [INLINES.HYPERLINK]: ({ data }, children) => {
      if (data.uri.includes(siteDomain)) {
        const start = data.uri.indexOf(siteDomain);
        const end = start + siteDomain.length;
        const url = data.uri.slice(end);

        return <Link to={url}>{children}</Link>;
      }

      return <a href={data.uri}>{children}</a>;
    },
    [BLOCKS.EMBEDDED_ASSET]: ({ data: { target } }) => (
      <>
        <GatsbyImage image={target.gatsbyImageData} alt="" />
      </>
    ),
    [INLINES.EMBEDDED_ENTRY]: ({ data: { target } }) => {
      const youtubeEmbed = youtubeEmbedUrl(target.url);

      if (youtubeEmbed)
        return (
          <IFrameWrapper>
            <iframe src={youtubeEmbed} title={target.title} />
          </IFrameWrapper>
        );

      return (
        <a href={target.url} target="_blank" rel="noreferrer">
          target.url
        </a>
      );
    },
  },
});

const RichTextRenderer = ({ richText }) => {
  const {
    site: {
      siteMetadata: { siteDomain },
    },
  } = useStaticQuery(graphql`
    query SiteDomainQuery {
      site {
        siteMetadata {
          siteDomain
        }
      }
    }
  `);

  return <>{renderRichText(richText, richTextConfig(siteDomain))}</>;
};

RichTextRenderer.propTypes = {
  richText: PropTypes.shape({
    raw: PropTypes.string.isRequired,
    references: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default RichTextRenderer;

// This must be a span since inline embeds are rendered within p
// and div cannot be descendent of p
const IFrameWrapper = styled.span`
  position: relative;
  display: block;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  padding-bottom: 56.25%;

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
