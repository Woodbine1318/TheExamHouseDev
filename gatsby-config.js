// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: `The Exam House`,
    description: `GCSE & A level Exam Centre for AQA, Edexcel, OCR & Cambridge International. Including Private Candidates for Home educated, excluded or adult learners.`,
    author: `The Exam House`,
    siteUrl: 'https://theexamhouse.co.uk',
    siteDomain: 'theexamhouse.co.uk',
    contactInfo: {
      phone: '02071128105',
      email: 'Exams@theexamhouse.co.uk',
      address: 'BYT Tuition Centre, 128 Chesham High Street, Buckinghamshire HP5 1EB NCN Centre number 52230',
    },
    socialMedia: {
      linkedin: 'https://www.linkedin.com/company/the-exam-house/',
    },
    links: {
      privateCandidateAssessedGrades:
        'https://www.eventbrite.co.uk/e/private-candidate-centre-assessed-grades-tickets-135532813293',
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Exam House`,
        short_name: `TEH`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-gatsby-cloud`,
    'gatsby-plugin-eslint',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulBlogPost } }) =>
              allContentfulBlogPost.edges.map(({ node: post }) => ({
                title: post.title,
                date: post.publishedDate,
                description: post.summary.text,
                url: `${site.siteMetadata.siteUrl}/${post.slug}`,
                guid: `${site.siteMetadata.siteUrl}/${post.slug}`,
              })),
            query: `
              {
                allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
                  edges {
                    node {
                      title
                      slug
                      summary {
                        text: summary
                      }
                      publishedDate
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'The Exam House Blog',
          },
        ],
      },
    },
  ],
};
