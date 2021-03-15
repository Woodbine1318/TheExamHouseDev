import { graphql, Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ContentWrapper from '../components/styles/ContentWrapper';

const StAlbansCentrePage = ({
  data: {
    site: {
      siteMetadata: { contactInfo },
    },
  },
}) => (
  <Layout>
    <SEO
      title="St Albans GCSE & A Level Tuition Centre"
      description="Our state of the art centre in the heart of St Albans, Hertfordshire provides GCSE and  A level exam preparation."
    />

    <ContentWrapper>
      <h1 className="title">St Albans GCSE & A Level Tuition Centre </h1>

      <address>35 Ridgemont Road. AL1 3AH</address>
      <p>
        Get in touch on tel: <a href="tel:02077230506">02077230506</a>
      </p>
      <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>

      <p>
        The Exam House is focused on delivery quality <b>GCSE & A level exam</b> training with our <b>Exam Tutors</b>{' '}
        for pupils across the popular subjects in our St Albans Centre
      </p>

      <StaticImage src="../images/centres/st-albans-tuition-centre.jpg" alt="" />

      <p>We strongly believe that pupils best chance of success is to teach to the exam.</p>

      <p>
        We believe this gives pupils get the best chance of getting the highest grade in <b>GCSE or A level</b> with the
        least amount of school time. Fast and Effective. <Link to="/fast-gcse-courses">Fast and Effective</Link>
      </p>

      <p>
        Our state of the art centre in the heart of <b>St Albans</b>, Hertfordshire provides{' '}
        <b>GCSE and A level exam preparation.</b>
      </p>

      <StaticImage src="../images/centres/st-albans-tuition-centre-2.png" alt="" />

      <p>We strip back the courses to get the what really matters in the exams and fast track the learning.</p>

      <p>
        If you are interested in Our <b>GCSE and A level Tuition centre</b> in <b>St Albans</b> Get in touch with the
        number below. We would be thrilled to help you smash the GCSEs or A levels.
      </p>

      <ul>
        <li>AQA exam centre</li>
        <li>Cambridge International exam centre</li>
        <li>Edexcel exam centre</li>
        <li>OCR exam centre</li>
        <li>Access Arrangements</li>
        <li>Tutors & Exams</li>
        <li>Private Candidates</li>
      </ul>

      <StaticImage src="../images/centres/st-albans-tuition-centre-3.png" alt="" />
    </ContentWrapper>
  </Layout>
);

StAlbansCentrePage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        contactInfo: PropTypes.shape({
          email: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};

export default StAlbansCentrePage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        contactInfo {
          email
        }
      }
    }
  }
`;
