module.exports = {
  siteMetadata: {
    title: `The Exam House`,
    description: `GCSE & A level Exam Centre for AQA, Edexcel, OCR & Cambridge International. Including Private Candidates for Home educated, excluded or adult learners.`,
    author: `The Exam House`,
    siteUrl: 'https://theexamhouse.co.uk',
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    'gatsby-plugin-eslint',
    'gatsby-plugin-styled-components',
  ],
};
