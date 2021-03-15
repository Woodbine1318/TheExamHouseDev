import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ContentWrapper from '../components/styles/ContentWrapper';

const BedfordCentrePage = () => (
  <Layout>
    <SEO
      title="Bedford GCSE & A level Tuition Centre"
      description="Our state of the art centre in the heart of Bedford, Bedfordshire provides GCSE and A level exam preparation along with Exam Centre in Bucks."
    />

    <ContentWrapper>
      <h1 className="title">Bedford GCSE & A level Tuition Centre</h1>
      <p>
        <b>Bedford GCSE & A level Tuition Centre</b>
      </p>

      <p>
        The Exam House is focused on delivery quality <b>GCSE &A level</b> exam training for pupils across the popular
        subjects with our <b>Exam Tutors</b>.
      </p>

      <StaticImage src="../images/coming-soon.jpg" alt="Coming Soon" />

      <p>
        Our state of the art centre in the heart of <b>Bedford</b>, Bedfordshire provides{' '}
        <b>GCSE and A level exam preparation along with Exam Centre in Bucks</b>.
      </p>

      <p>
        We believe this gives pupils get the best chance of getting the highest grade in <b>GCSE or A level</b> with the
        least amount of school time. <Link to="/fast-gcse-courses">Fast tracked and effective.</Link>
      </p>

      <p>
        While the Exam House runs exams across the <b>GCSE & A level exam boards</b>. We provide the best possible
        preparation to sit the exams.{' '}
      </p>

      <p>
        Our <Link to="/blog/bedford-gcse-a-level-tutors-and-exam-centre">Bedford press release.</Link>
      </p>

      <h2>The Exam House, Bedford GCSE & A level tutors and exam centre</h2>
      <ul>
        <li>94 % of our pupils pass GCSE and A Levels above C Grade.</li>
        <li>100 % pupils show strong growth in their GCSE and A level grade predictions</li>
        <li>80 % of pupils remain with us through to secondary support from GCSE to A level.</li>
        <li>
          Our OFSTED registered Bedford GCSE & A level tutors and exam centre is an excellent learning environment with
          small classes and a focussed atmosphere.
        </li>
        <li>
          All of our lessons are tutor lead and paper based with our resources that go beyond the curriculum and exam
          mark scheme.
        </li>
        <li>We aim for our pupils to have been stretched in their learning</li>
      </ul>

      <p>Other tuition centres include St Albans and High Wycombe Tuition centres adding to our list. </p>

      <StaticImage src="../images/centres/st-albans-tuition-centre-3.png" alt="" />

      <h2>Quality GCSE & A level Tuition in our Centre</h2>

      <ul>
        <li>AQA exam centre</li>
        <li>Cambridge International exam centre</li>
        <li>Edexcel exam centre</li>
        <li>OCR exam centre</li>
        <li>Access Arrangements</li>
        <li>Tutors & Exams</li>
        <li>Private Candidates</li>
      </ul>

      <StaticImage src="../images/centres/wycombe-2.jpg" alt="" />

      <h2>
        Our GCSE or A levels Exam Tutors work closely with you to achieve the top grades. Focussed and fast learning
        there is no better way to achieve top GCSE or A level grades .
      </h2>
    </ContentWrapper>
  </Layout>
);

export default BedfordCentrePage;
