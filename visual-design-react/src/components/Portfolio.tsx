import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';
import { useNavigate } from 'react-router-dom';

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
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

const PortfolioMinimal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding-left: 5vw;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding-left: 0;
    align-items: center;
  }
`;

const PfMinTitle = styled(motion.div)`
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  color: ${theme.colors.accentCyan};
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 2rem;
  opacity: 0.7;
`;

const PfMinItem = styled(motion.div)<{ $isActive?: boolean }>`
  font-family: ${theme.fonts.heading};
  font-size: clamp(3rem, 6vw, 6rem);
  font-weight: 800;
  color: ${(props) => (props.$isActive ? theme.colors.textWhite : 'rgba(255, 255, 255, 0.1)')};
  line-height: 1.1;
  cursor: pointer;
  transition: all 0.5s ease;
  position: relative;
  -webkit-text-stroke: ${(props) => (props.$isActive ? '0px' : '1px rgba(255, 255, 255, 0.1)')};
  text-shadow: ${(props) =>
    props.$isActive ? '0 0 30px rgba(0, 240, 255, 0.3)' : 'none'};

  &:hover {
    color: ${theme.colors.textWhite};
    -webkit-text-stroke: 0px;
    text-shadow: 0 0 30px rgba(0, 240, 255, 0.3);
    transform: translateX(20px);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 3rem;
  }
`;

const PfMinDesc = styled(motion.div)`
  font-size: 1rem;
  color: ${theme.colors.textGray};
  margin-top: 0.5rem;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;

  ${PfMinItem}:hover + & {
    opacity: 1;
    transform: translateY(0);
  }
`;

const portfolioItems = [
  { id: 'brand', text: 'Brand Identity', desc: 'Corporate Branding, Logo Design, Visual Systems' },
  { id: 'uxui', text: 'UX/UI Design', desc: 'Web & Mobile Interfaces, User Experience Research' },
  { id: 'motion', text: 'Motion Graphics', desc: '2D/3D Animation, Kinetic Typography, Video Editing' },
  { id: 'editorial', text: 'Editorial', desc: 'Book Design, Magazine Layout, Typography' },
];

export const Portfolio = () => {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/portfolio/${id}`);
  };

  return (
    <Section id="portfolio">
      <Container>
        <PortfolioMinimal>
          <PfMinTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Portfolio
          </PfMinTitle>
          {portfolioItems.map((item, index) => (
            <div key={item.id}>
              <PfMinItem
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onClick={() => handleClick(item.id)}
                whileHover={{ x: 20 }}
              >
                {item.text}
              </PfMinItem>
              <PfMinDesc>{item.desc}</PfMinDesc>
            </div>
          ))}
        </PortfolioMinimal>
      </Container>
    </Section>
  );
};

