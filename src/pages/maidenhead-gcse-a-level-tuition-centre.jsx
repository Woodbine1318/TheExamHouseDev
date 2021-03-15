import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ContentWrapper from '../components/styles/ContentWrapper';

const MaidenheadCentrePage = () => (
  <Layout>
    <SEO
      title="Maidenhead GCSE & A Level Tuition Centre"
      description="Our state of the art centre in the heart of Maidenhead, Berkshire provides GCSE and A level exam preparation."
    />

    <ContentWrapper>
      <h1 className="title">Maidenhead GCSE & A Level Tuition Centre</h1>
      <address>12 High St, Maidenhead SL6 1QJ</address>

      <p>
        <a href="tel:01628 200114">01628 200114</a>
      </p>

      <p>
        The Exam House is focused on delivery quality <b>GCSE & A level exam</b> training for pupils with our{' '}
        <b>Exam Tutors</b> across the popular subjects in our Maidenhead Centre.
      </p>

      <h2>Tutors and Exams</h2>

      <StaticImage src="../images/bright-young-things.jpg" alt="" />

      <p>We strongly believe that pupils best chance of success is to teach to the exam.</p>

      <address>12 High St, Maidenhead SL6 1QJ</address>
      <p>
        <a href="tel:01628 200114">01628 200114</a>
      </p>

      <p>
        We believe this gives pupils get the best chance of getting the highest grade in <b>GCSE or A level</b> with the
        least amount of school time. <Link to="/fast-gcse-courses">Fast tracked and effective.</Link>
      </p>

      <p>
        Our state of the art centre in the heart of <b>Maidenhead</b>, Berkshire provides <b>GCSE and A level exam</b>{' '}
        preparation.{' '}
      </p>

      <p>
        While the Exam House runs exams across the <b>GCSE & A level exam boards</b>. We provide the best possible
        preparation to sit the exams.{' '}
      </p>

      <StaticImage src="../images/centres/maidenhead.png" alt="" />
      <StaticImage src="../images/centres/maidenhead-2.jpg" alt="" />
    </ContentWrapper>
  </Layout>
);

export default MaidenheadCentrePage;
