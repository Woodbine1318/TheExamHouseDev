import { Link } from 'gatsby';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ContentWrapper from '../components/styles/ContentWrapper';

const ExamTutorsLondonCentrePage = () => (
  <Layout>
    <SEO
      title="Exam Tutors & London Exam Centre"
      description="Our state of the art centre in the heart of Victoria, London provides GCSE and A level exam preparation."
    />

    <ContentWrapper>
      <h1 className="title">
        The Exam House is focused on delivery quality{' '}
        <b>GCSE & A level training at our Exam tutors & London Exam Centre</b>.
      </h1>

      <p>
        GCSE & A level training at our Exam tutors & London Exam Centre. Training for pupils across the popular subjects
        in our London Tuition Centre.
      </p>

      <p>We strongly believe that pupils best chance of success is to teach to the exam.</p>

      <p>
        We believe this gives pupils get the best chance of getting the highest grade in <b>GCSE or A level</b> with the
        least amount of school time. <Link to="/fast-gcse-courses">Fast tracked and effective</Link>.
      </p>

      <p>
        Our state of the art centre in the heart of <b>Victoria</b>, London provides{' '}
        <b>GCSE and A level exam preparation</b>.
      </p>

      <p>
        While the Exam House runs exams across the GCSE & A level exam boards. We provide the best possible preparation
        to sit the exams.
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

      <StaticImage src="../images/centres/london-exam-centre.png" alt="" />
      <StaticImage src="../images/aqa.png" alt="AQA" />
      <StaticImage src="../images/edexcel-full.png" alt="EDEXCEL Approved Centre" />
    </ContentWrapper>
  </Layout>
);

export default ExamTutorsLondonCentrePage;
