import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';
import { timelineData } from '../data/contentData';

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${theme.spacing.sectionPadding};
  background: ${theme.colors.bgDark};
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

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto 5rem;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(-50%);

    @media (max-width: ${theme.breakpoints.mobile}) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)<{ $isOdd?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6rem;
  flex-direction: ${(props) => (props.$isOdd ? 'row-reverse' : 'row')};

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: row !important;
  }
`;

const TDot = styled.div`
  width: 20px;
  height: 20px;
  background: ${theme.colors.bgDark};
  border: 4px solid ${theme.colors.accentCyan};
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;

  @media (max-width: ${theme.breakpoints.mobile}) {
    left: 20px;
  }
`;

const TContent = styled.div<{ $isOdd?: boolean }>`
  width: 45%;
  text-align: ${(props) => (props.$isOdd ? 'right' : 'left')};

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: calc(100% - 60px);
    margin-left: 60px;
    text-align: left !important;
  }
`;

const TDate = styled.div`
  color: ${theme.colors.accentCyan};
  font-weight: 700;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const TTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${theme.colors.textWhite};
  font-family: ${theme.fonts.heading};
`;

const TDesc = styled.div`
  color: ${theme.colors.textGray};
`;

const CtaContainer = styled(motion.div)`
  text-align: center;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const CtaButton = styled.a`
  display: inline-block;
  background: ${theme.colors.accentCyan};
  color: ${theme.colors.bgDark};
  font-size: clamp(1.2rem, 2vw, 1.8rem);
  font-weight: 800;
  padding: clamp(1rem, 2vw, 1.5rem) clamp(3rem, 5vw, 5rem);
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 0 30px rgba(0, 240, 255, 0.4);
  font-family: ${theme.fonts.heading};

  &:hover {
    transform: scale(1.05) translateY(-5px);
    box-shadow: 0 0 50px rgba(0, 240, 255, 0.6);
  }
`;

const ContactInfo = styled.div`
  color: ${theme.colors.textGray};
  font-size: 1rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;

  strong {
    color: ${theme.colors.accentCyan};
  }
`;

export const Apply = () => {
  return (
    <Section id="apply">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          How to Apply
        </SectionTitle>

        <Timeline>
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              $isOdd={index % 2 === 0}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <TDot style={{ top: `${index * 6}rem` }} />
              <TContent $isOdd={index % 2 === 0}>
                <TDate>{item.date}</TDate>
                <TTitle>{item.title}</TTitle>
                <TDesc>{item.description}</TDesc>
              </TContent>
            </TimelineItem>
          ))}
        </Timeline>

        <CtaContainer
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <CtaButton href="http://www.jinhakapply.com/" target="_blank" rel="noopener noreferrer">
            지금 지원하기
          </CtaButton>
          <ContactInfo>
            <span>궁금한 점이 있다면?</span>
            <strong>Instagram: @expectation_62</strong>
          </ContactInfo>
        </CtaContainer>
      </Container>
    </Section>
  );
};

