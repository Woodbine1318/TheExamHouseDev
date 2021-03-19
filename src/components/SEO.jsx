/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ description, lang, canonicalPath, title, og }) => {
  const {
    site: { siteMetadata: metadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `,
  );

  const canonicalUrl = `${metadata.siteUrl}${canonicalPath}`;
  const isArticleScheme = og.type === 'article';

  return (
    <Helmet title={title} titleTemplate={`%s — ${metadata.title}`}>
      <html lang={lang} dir="ltr" />

      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover" />

      <meta name="description" content={description || metadata.description} />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={og.type} />
      <meta property="og:site_name" content={metadata.title} />
      <meta property="og:title" content={title || metadata.title} />
      <meta property="og:description" content={description || metadata.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="en_GB" />

      {isArticleScheme ? (
        <meta property="article:published_time" content={new Date(og.published_time).toISOString()} />
      ) : null}
      {isArticleScheme ? <meta property="article:author" content={metadata.author} /> : null}
      {isArticleScheme && og.tags
        ? og.tags.map((t, i) => <meta property="og:tag" content={t} key={`tag-${t}-${i}`} />)
        : null}

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title || metadata.title} />
      <meta name="twitter:creator" content={metadata.author} />
      <meta name="twitter:description" content={description || metadata.description} />
      <meta name="twitter:url" content={canonicalUrl} />
    </Helmet>
  );
};

SEO.propTypes = {
  lang: PropTypes.string,
  canonicalPath: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  og: PropTypes.shape({
    type: PropTypes.oneOf(['website', 'article']),
    published_time: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
};

SEO.defaultProps = {
  lang: 'en',
  canonicalPath: '',
  description: '',
  og: { type: 'website' },
};

export default SEO;
