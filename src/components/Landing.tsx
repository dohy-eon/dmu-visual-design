import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';
import { ParticlesCanvas } from './ParticlesCanvas';

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${theme.spacing.sectionPadding};
  background: radial-gradient(circle at 50% 50%, #112240 0%, #050A14 100%);
  text-align: center;
  align-items: center;
  position: relative;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 2;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 8rem);
  font-weight: 800;
  line-height: 1;
  margin-bottom: 2rem;
  white-space: nowrap;
  margin-top: -5vh;
  position: relative;
  z-index: 2;
  font-family: ${theme.fonts.heading};
`;

const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: ${theme.colors.textGray};
  letter-spacing: 2px;
  position: relative;
  z-index: 2;
`;

export const Landing = () => {
  const text = 'DESIGN YOUR FUTURE';

  return (
    <Section id="landing">
      <ParticlesCanvas />
      <Container>
        <HeroTitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {text.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                delay: index * 0.05,
                duration: 0.8,
                ease: [0.2, 1, 0.3, 1],
              }}
              style={{ display: 'inline-block' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          동양미래대학교 시각디자인과 | 학사학위 전공심화과정
        </HeroSubtitle>
      </Container>
    </Section>
  );
};

