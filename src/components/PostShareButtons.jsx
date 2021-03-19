import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin: 4rem auto;

  ul {
    list-style-type: none;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
  }

  li:not(:last-of-type) {
    margin-right: 1.6rem;
  }
`;

const PostShareButtons = ({ canonicalUrl, title, summary }) => {
  const {
    site: { siteMetadata: metadata },
  } = useStaticQuery(graphql`
    query PostShareButtonsQuery {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `);

  const encodedUrl = encodeURIComponent(`${metadata.siteUrl}/blog/${canonicalUrl}`);
  const encodedTitle = encodeURIComponent(title);
  const encodedSummary = encodeURIComponent(summary);

  return (
    <Container>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
            aria-label="Share on Twitter"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.linkedin.com/shareArticle?mini=true&source=${encodeURIComponent(
              metadata.title,
            )}&summary=${encodedSummary}&url=${encodedUrl}`}
            aria-label="Share on Linkedin"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.reddit.com/submit?url=${encodedUrl}`}
            aria-label="Share on Reddit"
          >
            Reddit
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.tumblr.com/share/link?url=${encodedUrl}`}
            aria-label="Share on Tumblr"
          >
            Tumblr
          </a>
        </li>
      </ul>
    </Container>
  );
};

PostShareButtons.propTypes = {
  canonicalUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default PostShareButtons;
