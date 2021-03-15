/* eslint-disable react/jsx-no-target-blank */
import { graphql, Link } from 'gatsby';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ContentWrapper from '../components/styles/ContentWrapper';

const AylesburyCentrePage = ({
  data: {
    site: {
      siteMetadata: { contactInfo },
    },
  },
}) => (
  <Layout>
    <SEO
      title="Aylesbury GCSE & A level Exam and Tuition Centre"
      description="Our state of the art centre in the heart of Aylesbury, provides GCSE and A level exam preparation."
    />

    <ContentWrapper>
      <h1 className="title">Aylesbury GCSE & A level Exam and Tuition Centre</h1>

      <p>
        The Exam House provides quality <b>Tutors & Exams</b> including Mock 11 plus, GCSE and A levels across the
        boards.
      </p>

      <p>
        Located in the heart of <b>Aylesbury</b>. 47 The High Street.{' '}
      </p>

      <p>
        Give us a call: <br />
        Contact: <a href="tel:01494 911116">01494 911116</a>
        <br />
        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
      </p>

      <StaticImage src="../images/bright-young-things-2.jpeg" alt="" />

      <p>
        Whether you are looking for Maths, English or 11 plus tutors and tuition. We partner with Bright Young Things.
        Along with <b>GCSE & A level Exams</b>.
      </p>

      <p>We are:</p>

      <ul>
        <li>AQA Exam centre</li>
        <li>Cambridge International Exam centre</li>
        <li>Edexcel exam centre</li>
        <li>OCR exam centre</li>
      </ul>

      <h2>11 plus tuition Aylesbury, 11 + Tutors in Aylesbury</h2>

      <p>
        We also <b>provide pupil referral unit</b> services across the age range to The Aylesbury area.
      </p>

      <p>We strongly believe that pupils best chance of success is to teach to the exam.</p>

      <p>
        We believe this gives pupils get the best chance of getting the highest grade in <b>GCSE or A level</b> with the
        least amount of school time. <Link to="/fast-gcse-courses">Fast tracked and effective.</Link>
      </p>

      <p>
        Our state of the art centre in the heart of <b>Aylesbury</b>, provides <b>GCSE and A level exam preparation</b>.
      </p>

      <p>
        While the Exam House runs exams across the GCSE & A level exam boards. We provide the best possible preparation
        to sit the exams.{' '}
      </p>

      <StaticImage src="../images/centres/aylesbury.jpg" alt="" />

      <h2>More about 11 plus exams in Buckinghamshire</h2>

      <p>The Secondary Transfer Test in Buckinghamshire includes two test papers.</p>

      <p>The first paper has comprehension, technical English and verbal reasoning questions.</p>

      <p>The second paper has non-verbal reasoning, spatial reasoning, and maths questions.</p>

      <p>
        Full 11 plus mock exams here at the Exam House. For more information and timelines go to the{' '}
        <a
          href="https://www.buckscc.gov.uk/services/education/school-admissions/moving-up-to-secondary-school/timeline-for-entry-in-2019/"
          target="_blank"
        >
          Bucks County council website
        </a>
        .
      </p>

      <p>Buckinghamshire Transfer test. In the real test, the qualifying score (STTS) of 121 or above. </p>

      <p>
        The STTS is calculated by age-standardising the three section scores and then adding them using the following
        weightings: verbal – 50%; mathematical – 25%; non-verbal – 25%.{' '}
      </p>

      <p>
        GL Assessment tests candidates using a variety of different question types – the majority of which are not
        covered in local state schools.{' '}
        <a
          href="https://www.gl-assessment.co.uk/products/11plus-series-11-plus-practice-papers/11plus-familiarisation-materials/"
          target="_blank"
        >
          Free familiarisation materials
        </a>{' '}
        are available on their website.
      </p>

      <StaticImage src="../images/centres/aylesbury-2.jpg" alt="" />

      <p>Our lab for science practical endorsement.</p>

      <StaticImage src="../images/centres/aylesbury-3.jpg" alt="Students making lab experiments" />
    </ContentWrapper>
  </Layout>
);

AylesburyCentrePage.propTypes = {
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

export default AylesburyCentrePage;

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
