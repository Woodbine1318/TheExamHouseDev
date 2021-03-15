import { graphql, Link } from 'gatsby';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ContentWrapper from '../components/styles/ContentWrapper';

const HarrowCentrePage = ({
  data: {
    site: {
      siteMetadata: { contactInfo },
    },
  },
}) => (
  <Layout>
    <SEO
      title="Harrow GCSE & A Level Exam & Tuition Centre"
      description="Our state of the art centre in the heart of Harrow, London provides GCSE and A level exam preparation."
    />

    <ContentWrapper>
      <h1 className="title">Harrow GCSE & A Level Exam & Tuition Centre </h1>

      <p>
        Get in touch on tel: <a href="tel:02077230506">02077230506</a>
      </p>

      <address>219 Kenton Ln, Harrow HA3 8RP</address>

      <p>
        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
      </p>

      <p>
        The Exam House Harrow Exam and tuition centre at 129 Kenton Road is focused on delivery quality{' '}
        <b>GCSE & A level exam</b> training by our <b>Exam Tutors</b> for pupils across the popular subjects in our
        Harrow Tuition Centre.
      </p>

      <p>We strongly believe that pupils best chance of success is to teach to the exam.</p>

      <p>
        We believe this gives pupils get the best chance of getting the highest grade in <b>GCSE or A level</b> with the
        least amount of school time. <Link to="/fast-gcse-courses">Fast tracked and effective.</Link>
      </p>

      <p>
        Our state of the art centre in the heart of <b>Harrow</b>, London provides <b>GCSE and A level exam</b>{' '}
        preparation.
      </p>

      <p>
        While the Exam House runs exams across the GCSE & A level exam boards. We provide the best possible preparation
        to sit the exams.
      </p>

      <StaticImage src="../images/centres/st-albans-tuition-centre-3.png" alt="" />
      <StaticImage src="../images/bright-young-things.jpg" alt="" />
      <StaticImage src="../images/ucas.png" alt="UCAS" />
      <StaticImage src="../images/edexcel-full.png" alt="EDEXCEL Approved Centre" />
    </ContentWrapper>
  </Layout>
);

HarrowCentrePage.propTypes = {
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

export default HarrowCentrePage;

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
