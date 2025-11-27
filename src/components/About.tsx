import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';
import { educationData, careerData, awardsData } from '../data/contentData';
import type { ResumeItem } from '../types';

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${theme.spacing.sectionPadding};
  background: ${theme.colors.bgNavy};
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 2;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: clamp(3rem, 6vh, 6rem);
  background: linear-gradient(to right, #fff, #8892B0);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: ${theme.fonts.heading};
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(2rem, 4vw, 4rem);
  align-items: start;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const AboutCol = styled(motion.div)`
  h3 {
    font-size: clamp(1.5rem, 2vw, 2rem);
    color: ${theme.colors.accentCyan};
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: ${theme.fonts.heading};

    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: linear-gradient(90deg, ${theme.colors.accentCyan}, transparent);
    }
  }
`;

const ResumeItem = styled.div`
  background: ${theme.colors.glassBg};
  border: 1px solid ${theme.colors.glassBorder};
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  transition: all 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateX(5px);
    border-color: ${theme.colors.accentCyan};
  }
`;

const ResumeDate = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 0.9rem;
  color: ${theme.colors.accentCyan};
  font-weight: 600;
  margin-bottom: 0.3rem;
`;

const ResumeTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
  color: ${theme.colors.textWhite};
`;

const ResumeDesc = styled.div`
  font-size: 0.9rem;
  color: ${theme.colors.textGray};
`;

const ResumeList = ({ items }: { items: ResumeItem[] }) => (
  <>
    {items.map((item, index) => (
      <ResumeItem key={index}>
        <ResumeDate>{item.date}</ResumeDate>
        <ResumeTitle>{item.title}</ResumeTitle>
        <ResumeDesc>{item.description}</ResumeDesc>
      </ResumeItem>
    ))}
  </>
);

export const About = () => {
  return (
    <Section id="about">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Nice to Meet You
        </SectionTitle>
        <AboutGrid>
          <AboutCol
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Education</h3>
            <ResumeList items={educationData} />
          </AboutCol>
          <AboutCol
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Career</h3>
            <ResumeList items={careerData} />
          </AboutCol>
          <AboutCol
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3>Awards</h3>
            <ResumeList items={awardsData} />
          </AboutCol>
        </AboutGrid>
      </Container>
    </Section>
  );
};

