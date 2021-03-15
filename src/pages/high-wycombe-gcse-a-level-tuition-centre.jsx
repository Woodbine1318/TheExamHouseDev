import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ContentWrapper from '../components/styles/ContentWrapper';

const HighWycombeCentrePage = () => (
  <Layout>
    <SEO
      title="High Wycombe GCSE  & A level Tuition Centre"
      description="Our state of the art centre in the heart of High Wycombe, Buckinghamshire provides GCSE and A level exam preparation."
    />

    <ContentWrapper>
      <h1 className="title">High Wycombe GCSE & A level Tuition Centre</h1>

      <p>
        The Exam House is focused on delivery quality <b>GCSE & A level exam</b> training for pupils with our{' '}
        <b>Exam Tutors</b> across the popular subjects in our Maidenhead Centre.
      </p>

      <p>
        We strongly believe that pupils best chance of success is to teach to the exam. How else can we get the best
        chance of getting the highest grade.{' '}
      </p>

      <p>
        <a href="tel:01494 911655 ">01494 911655 </a>
      </p>
      <address>41-43 Castle St, High Wycombe HP13 6RN</address>

      <p>
        Our state of the art centre in the heart of <b>High Wycombe</b>, Buckinghamshire provides{' '}
        <b>GCSE and A level exam preparation</b>.
      </p>

      <p>We are:</p>

      <ul>
        <li>AQA Exam centre</li>
        <li>Cambridge International Exam centre</li>
        <li>Edexcel exam centre</li>
        <li>OCR exam centre</li>
      </ul>

      <p>
        <a href="https://www.meetup.com/The-Exam-House/events/270649193">
          https://www.meetup.com/The-Exam-House/events/270649193
        </a>
      </p>

      <StaticImage src="../images/meetup.png" alt="" />

      <p>
        If you are interested in Our <b>GCSE and A level Tuition centre</b> in High Wycombe Get in touch with the number
        below. We would be thrilled to help you smash the GCSEs or A levels.
      </p>

      <StaticImage src="../images/centres/wycombe.png" alt="" />
      <StaticImage src="../images/aqa.png" alt="AQA" />
      <StaticImage src="../images/centres/wycombe-2.jpg" alt="" />
      <StaticImage src="../images/ucas.png" alt="UCAS" />
    </ContentWrapper>
  </Layout>
);

export default HighWycombeCentrePage;
