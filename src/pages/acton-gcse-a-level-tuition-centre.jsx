import { graphql, Link } from 'gatsby';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ContentWrapper from '../components/styles/ContentWrapper';

const ActonCentrePage = ({
  data: {
    site: {
      siteMetadata: { contactInfo },
    },
  },
}) => (
  <Layout>
    <SEO
      title="Acton GCSE & A Level Tuition Centre"
      description="Based in the Oaks Shopping centre we are the only exam prep centre in Acton open to all."
    />

    <ContentWrapper>
      <h1 className="title">Acton GCSE & A Level Tuition Centre</h1>

      <p>
        Get in touch on tel: <a href="tel:02077230506">02077230506</a>
        <br />
        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
      </p>

      <p>
        The Exam House along with the Exam Tutors are excited to be launching the{' '}
        <b>Acton GCSE & A level Tuition centre</b> in 2020. Based in the Oaks Shopping centre we are the only exam prep
        centre in <b>Acton</b> open to all.
      </p>

      <p>
        Whether you are tackling GCSEs or A levels outside of school or you need a top up just before the exam, The Exam
        house in Acton is built for you.
      </p>

      <p>We do nothing else but prepare candidates for exams in the fastest time possible.</p>

      <p>
        We strongly believe that pupils best chance of success is to teach to the exam rather than the long courses in
        schools and colleges.
      </p>

      <p>
        We believe this gives pupils get the best chance of getting the highest grade in <b>GCSE or A level</b> with the
        least amount of school time. <Link to="/fast-gcse-courses">Fast tracked and effective.</Link>
      </p>

      <StaticImage src="../images/centres/london-exam-centre.png" alt="" />
      <StaticImage src="../images/ucas.png" alt="UCAS" />
      <StaticImage src="../images/edexcel-full.png" alt="EDEXCEL Approved Centre" />
    </ContentWrapper>
  </Layout>
);

ActonCentrePage.propTypes = {
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

export default ActonCentrePage;

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
