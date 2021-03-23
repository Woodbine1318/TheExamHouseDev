import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ContentWrapper from '../components/styles/ContentWrapper';

const TuitionCentresPage = () => (
  <Layout>
    <SEO
      title="Tuition Centres"
      description="The Exam House and our tuition centres are focused on delivery quality GCSE & A level exam training by our Exam Tutors."
    />

    <Content>
      <h1>Our Tuition Centres</h1>

      <nav aria-label="Tuition centres">
        <ul>
          <li>
            <Link to="/st-albans-gcse-a-level-tuition-centre">35 Ridgemont Road. St Albans. Hertfordshire AL1 3AH</Link>
          </li>
          <li>
            <Link to="/exam-tutors-london-exam-centre">
              London Tutors & Exam Centre, 8a Lower Grosvenor Place, London. Sw1W 0EN
            </Link>
          </li>
          <li>
            <Link to="/acton-gcse-a-level-tuition-centre">Acton The Oaks Centre, Acton, London W3</Link>
          </li>
          <li>
            <Link to="/maidenhead-gcse-a-level-tuition-centre">12 Maidenhead High street, Berkshire SL6 1QJ</Link>
          </li>
          <li>
            <Link to="/harrow-gcse-a-level-tuition-centre">219 Kenton Ln, Harrow. London HA3 8RP</Link>
          </li>
          <li>
            <Link to="/high-wycombe-gcse-a-level-tuition-centre">41 - 43 Castle Street High Wycombe</Link>
          </li>
          <li>
            <Link to="/aylesbury-gcse-a-level-exam-and-tuition-centre">47 High Street, Aylesbury, Buckinghamshire</Link>
          </li>
        </ul>
      </nav>

      <nav aria-label="Tuition Centres coming soon">
        <h2>Coming soon!</h2>

        <ul>
          <li>
            <Link to="/bedford-gcse-and-a-level-tuition-centre">Bedford Tuition Centre</Link>
          </li>
          <li>
            <Link to="/basingstoke-tuition-centre">Basingstoke Tuition Centre</Link>
          </li>
          <li>
            <Link to="/aylesbury-gcse-a-level-exam-and-tuition-centre">Aylesbury Tuition Centre</Link>
          </li>
        </ul>
      </nav>

      <p>
        All of these tuition centres teach GCSEs and A levels. Currently it is just our Chesham tuition centre which is:
      </p>

      <ul>
        <li>AQA exam centre</li>
        <li>Cambridge International exam centre</li>
        <li>Edexcel exam centre</li>
        <li>OCR exam centre</li>
      </ul>
    </Content>
  </Layout>
);

export default TuitionCentresPage;

const Content = styled(ContentWrapper)`
  & nav {
    margin-bottom: 4rem;
  }

  & li {
    margin-bottom: 0.8rem;
  }

  > ul:last-child {
    list-style-type: initial;
    padding-left: 1.6rem;
  }
`;
