import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';
import { benefitsData } from '../data/contentData';

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${theme.spacing.sectionPadding};
  background: #081020;
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

const HighlightBenefit = styled(motion.div)`
  background: linear-gradient(135deg, rgba(0, 240, 255, 0.1), transparent);
  border: 1px solid ${theme.colors.accentCyan};
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  margin-bottom: 4rem;
  box-shadow: 0 0 50px rgba(0, 240, 255, 0.05);
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

  h3 {
    font-size: 2rem;
    color: ${theme.colors.accentCyan};
    margin-bottom: 1rem;
    font-family: ${theme.fonts.heading};
  }

  p {
    color: ${theme.colors.textGray};
    font-size: 1.1rem;

    strong {
      color: ${theme.colors.accentCyan};
    }
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled(motion.div)`
  background: ${theme.colors.glassBg};
  border: 1px solid ${theme.colors.glassBorder};
  padding: 2.5rem;
  border-radius: 20px;
  text-align: center;
  transition: all 0.4s;

  &:hover {
    transform: scale(1.05) translateY(-10px);
    background: rgba(255, 255, 255, 0.05);
    border-color: ${theme.colors.accentCyan};
    box-shadow: 0 10px 40px rgba(0, 240, 255, 0.15);
  }
`;

const BenefitIcon = styled.span`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
`;

const BenefitTitle = styled.h4`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: ${theme.colors.textWhite};
  font-family: ${theme.fonts.heading};
`;

const BenefitDesc = styled.p`
  color: ${theme.colors.textGray};
  font-size: 0.95rem;
  white-space: pre-line;
`;

export const Benefits = () => {
  return (
    <Section id="benefits">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Benefits
        </SectionTitle>

        <HighlightBenefit
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>☀️ 주간 수업 운영 전환</h3>
          <p>
            기존 야간 과정에서 <strong>주간 과정</strong>으로 변경되었습니다.
            <br />
            더 쾌적한 환경에서 학업에 집중하고, 동기들과 활발하게 교류하세요.
          </p>
        </HighlightBenefit>

        <BenefitsGrid>
          {benefitsData.map((benefit, index) => (
            <BenefitCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <BenefitIcon>{benefit.icon}</BenefitIcon>
              <BenefitTitle>{benefit.title}</BenefitTitle>
              <BenefitDesc>{benefit.description}</BenefitDesc>
            </BenefitCard>
          ))}
        </BenefitsGrid>
      </Container>
    </Section>
  );
};

