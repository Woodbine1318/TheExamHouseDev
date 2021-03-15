import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ContentWrapper from '../components/styles/ContentWrapper';

const IndexPage = ({
  data: {
    site: {
      siteMetadata: { contactInfo, socialMedia, links },
    },
  },
}) => (
  <Layout>
    <SEO title="GCSE & A Level Exam Centre" />

    <ContentWrapper>
      <p>
        Telephone:&nbsp;
        <a href={`tel:${contactInfo.phone}`} aria-label="Call us">
          {contactInfo.phone}
        </a>
        &nbsp; Email:
        <a href={`mailto:${contactInfo.email}`}> {contactInfo.email}</a>
      </p>

      <h1>The leading private candidate exam centre across the subjects and exam boards</h1>
      <p>Your Private Candidate Exam Centre</p>

      <ImageGrid>
        <StaticImage src="../images/ocr.png" alt="OCR" />
        <StaticImage src="../images/edexcel-full.png" alt="Edexcel Approved Centre" />
        <StaticImage src="../images/cambridge-asessment.png" alt="Cambridge Assesment International Education" />
        <StaticImage src="../images/aqa.png" alt="AQA" />
      </ImageGrid>

      <p>
        <b>
          The Exam House <abbr title="General Certificate of Secondary Education">GCSE</abbr> & A level Exam Centre
        </b>
        &nbsp; or pupils and private candidates. Including access arrangements. Alongside our exam tutors.
      </p>

      <ul className="list-bare">
        <li>
          AQA <abbr title="General Certificate of Secondary Education">GCSE</abbr> & A Level exam centre
        </li>
        <li>
          Cambridge International <abbr title="General Certificate of Secondary Education">GCSE</abbr> & A Level exam
          centre
        </li>
        <li>
          Edexcel <abbr title="General Certificate of Secondary Education">GCSE</abbr> & A Level exam centre
        </li>
        <li>
          <abbr title="Oxford Cambridge and RSA">OCR</abbr>&nbsp;
          <abbr title="General Certificate of Secondary Education">GCSE</abbr> & A Level exam centre
        </li>
        <li>Computer Based Exams</li>
        <li>
          Fast Track <abbr title="Association of Chartered Certified Accountants">ACCA</abbr> courses
        </li>
        <li>Centre Assessed Grades</li>
      </ul>

      <StaticImage src="../images/acca.png" alt="ACCA Think Ahead" />

      <h2>
        Exam Tutors for our fast <abbr title="General Certificate of Secondary Education">GCSE</abbr> & A level courses
        and exams #Tutors&Exams
      </h2>

      <p>
        The <Link to="/blog">Exam Blog</Link> is regularly updated with the latest exam news and opinion on the exam
        industry.
      </p>

      <span>The Exams are at:</span>
      <address>{contactInfo.address}</address>

      <HalfColumns>
        <StaticImage src="../images/teacher-and-student.jpg" alt="" />

        <div>
          <h2>
            The Exam House brings full access to exams. Be it home educators, distance learners or excluded exam
            candidates. A safe, warm and open exam environment.
          </h2>

          <p>
            Including EHC plans and access arrangements across the equalities act of 2010. Quality&nbsp;
            <abbr title="General Certificate of Secondary Education">GCSE</abbr> & A level private candidate Exam centre
            for AQA, Edexcel, <abbr title="Oxford Cambridge and RSA">OCR</abbr> and Cambridge International
          </p>
        </div>
      </HalfColumns>

      <h2>
        Our Q and A for <a href={links.privateCandidateAssessedGrades}>private candidates and centre assessed grades</a>
      </h2>

      <StaticImage src="../images/calendar.jpg" alt="" width={300} />

      <h2>
        Our <Link to="/tuition-centres">Tuition & Exam Centres</Link>
      </h2>

      <HalfColumns>
        <StaticImage src="../images/exams.png" alt="" />

        <div>
          <h2>Full exam services for pupils and candidates at our exam centre. </h2>
          <p>
            Across the <abbr title="General Certificate of Secondary Education">GCSE</abbr> and A level exam boards.
            Including <abbr title="Assessment and Qualifications Alliance">AQA</abbr>, Edexcel,&nbsp;
            <abbr title="Oxford Cambridge and RSA">OCR</abbr> and Cambridge International
          </p>
        </div>
      </HalfColumns>

      <h2>The Leading Independent Private Candidate Exam Centre</h2>
      <p>
        While offering the widest choice of exams for&nbsp;
        <abbr title="General Certificate of Secondary Education">GCSE</abbr> and A level. Whilst deploying&nbsp;
        <Link to="/computer-based-exams">Computer Based Exams</Link> for a range of professions.
      </p>

      <p>
        We also bring&nbsp;
        <b>
          fast <abbr title="General Certificate of Secondary Education">GCSE</abbr> and A levels
        </b>
        &nbsp; along with <b>exam centre</b> services to pupils and <b>outside candidates</b>.
      </p>

      <nav>
        <ul className="list-bare">
          <li>
            <Link to="/fast-gcse-courses">
              Fast <abbr title="General Certificate of Secondary Education">GCSE</abbr> Courses
            </Link>
          </li>
          <li>
            <Link to="/fast-track-a-level-courses">Fast Track A level Courses</Link>
          </li>
          <li>
            <Link to="/gcse-exam-centre">
              <abbr title="General Certificate of Secondary Education">GCSE</abbr> Exam Centre
            </Link>
          </li>
          <li>
            <Link to="/access-arrangements">Access Arrangements</Link>
          </li>
          <li>
            <Link to="/the-process">Our Process</Link>
          </li>
          <li>
            <Link to="/home-schooling">Home Schooling Clients </Link>
          </li>
          <li>
            <Link to="/partnerships">Partnerships</Link>
          </li>
          <li>
            <Link to="/blog/what-are-centre-assessed-grades">Centre Assessed Grades</Link>
          </li>
          <li>
            <Link to="/a-level-science-practical-endorsement">A Level Science Practicals</Link>
          </li>
        </ul>

        <p>
          A hort piece on <Link to="/blog/why-we-have-exams">why we have exams</Link>
        </p>
        <p>
          Follow us on <a href={socialMedia.linkedin}>Linkedin</a>
        </p>
      </nav>

      <h2>
        <abbr title="Assessment and Qualifications Alliance">AQA</abbr>, Edexcel,&nbsp;
        <abbr title="Oxford Cambridge and RSA">OCR</abbr> and Cambridge international Exam Centre
      </h2>
      <p>#tuition #tutors&exams</p>
      <p>#examcentres</p>

      <p>Assessing the candidates outside the mainstream! #homeed #privatecandidates #distancelearning</p>

      <HalfColumns>
        <StaticImage src="../images/bright-young-things.jpg" alt="" />

        <div>
          <h2>Quality Access Arrangements</h2>
          <p>
            For <abbr title="General Certificate of Secondary Education">GCSE</abbr> and A level candidates at the Exam
            House. Providing help and support across the file compiling. Including EHC plans
          </p>
        </div>
      </HalfColumns>

      <ImageGrid column>
        <StaticImage src="../images/edexcel.png" alt="EDEXCEL" />
        <StaticImage src="../images/cambridge-asessment.png" alt="Cambridge Assessment International Education" />
      </ImageGrid>

      <ul className="list-bare">
        <li>
          <abbr title="Assessment and Qualifications Alliance">AQA</abbr> exam centre
        </li>
        <li>Cambridge International exam centre</li>
        <li>Edexcel exam centre</li>
        <li>
          <abbr title="Oxford Cambridge and RSA">OCR</abbr> exam centre
        </li>
        <li>Access Arrangements</li>
        <li>Tutors & Exams</li>
        <li>Private Candidates</li>
      </ul>

      <ImageGrid column>
        <StaticImage src="../images/aqa.png" alt="AQA" />
        <StaticImage src="../images/ukrlp.png" alt="UK Register of Learning Providers" />
        <StaticImage src="../images/ucas.png" alt="UCAS" />
      </ImageGrid>
    </ContentWrapper>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        contactInfo: PropTypes.shape({
          phone: PropTypes.string,
          email: PropTypes.string,
          address: PropTypes.string,
        }),
        socialMedia: PropTypes.shape({
          linkedin: PropTypes.string,
        }),
        links: PropTypes.shape({
          privateCandidateAssessedGrades: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};

export default IndexPage;

// PAGE QUERY

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        contactInfo {
          phone
          email
          address
        }

        socialMedia {
          linkedin
        }

        links {
          privateCandidateAssessedGrades
        }
      }
    }
  }
`;

// STYLES

const HalfColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: center;
  gap: 3.2rem;
  margin: 8rem 0;
`;

const ImageGrid = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 8rem 0;

  & > .gatsby-image-wrapper:not(:last-of-type) {
    margin-bottom: 3.2rem;
  }

  @media (min-width: 768px) {
    flex-direction: ${(props) => (props.column ? 'column' : 'row')};

    & > .gatsby-image-wrapper:not(:last-of-type) {
      margin-bottom: ${(props) => (props.column ? '3.2rem' : '0')};
      margin-right: ${(props) => (props.column ? 0 : '3.2rem')};
    }
  }
`;
