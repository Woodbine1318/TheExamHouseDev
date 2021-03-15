import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ContentWrapper from '../components/styles/ContentWrapper';

const BasingstokeCentrePage = () => (
  <Layout>
    <SEO
      title="Basingstoke GCSE  & A level Tuition Centre"
      description="Our state of the art centre in the heart of Basingstoke, Hampshire, provides GCSE and A level exam preparation."
    />

    <ContentWrapper>
      <h1 className="title">Basingstoke GCSE & A level Tuition Centre</h1>

      <p>
        The Exam House is focused on delivery quality <b>GCSE &A level</b> exam training for pupils across the popular
        subjects with our <b>Exam Tutors</b>.
      </p>

      <p>
        We strongly believe that pupils best chance of success is to teach to the exam. How else can we get the best
        chance of getting the highest grade.
      </p>

      <address>
        Chineham Shopping Centre, 24, Chineham, <b>Basingstoke</b> RG24 8BQ
      </address>

      <p>
        <a href="tel:01494 911655">01494 911655 </a>
      </p>

      <p>
        Our state of the art centre in the heart of <b>Basingstoke, Hampshire</b> Buckinghamshire provides quality
        <b> GCSE and A level exam preparation</b>.
      </p>

      <StaticImage src="../images/centres/wycombe-2.jpg" alt="" />

      <p>Our GCSE and A level courses include centre assessed grades.</p>

      <p>
        <b>NOW INCLUDING CENTRE ASSESSED GRADES</b>
      </p>
    </ContentWrapper>
  </Layout>
);

export default BasingstokeCentrePage;
