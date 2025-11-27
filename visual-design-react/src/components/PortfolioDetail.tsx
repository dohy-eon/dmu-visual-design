import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';
import { portfolioData } from '../data/portfolioData';

const DetailWrapper = styled.div`
  min-height: 100vh;
  background: ${theme.colors.bgDark};
  padding-top: 100px;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  padding: 0 clamp(2rem, 5vw, 4rem);
`;

const DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${theme.colors.glassBorder};
`;

const BackBtn = styled.button`
  background: transparent;
  border: 1px solid ${theme.colors.accentCyan};
  color: ${theme.colors.accentCyan};
  padding: 0.8rem 2rem;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s;
  font-family: ${theme.fonts.heading};

  &:hover {
    background: ${theme.colors.accentCyan};
    color: ${theme.colors.bgDark};
  }
`;

const PfTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 800;
  color: #E6F1FF;
  margin-bottom: 0;
  font-family: ${theme.fonts.heading};
`;

const PfSub = styled.p`
  margin-top: 15px;
  font-size: 1rem;
  color: #8892B0;
  margin-bottom: 0;
`;

const ProjectGrid = styled.div`
  max-width: 900px;
  margin: 32px auto 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  padding: 0 20px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 20px;
  min-height: 80px;
  border-radius: 999px;
  background: ${theme.colors.glassBg};
  border: 1px solid ${theme.colors.glassBorder};
  cursor: pointer;
  transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
  text-align: center;

  &:hover {
    transform: translateY(-3px);
    border-color: ${theme.colors.accentCyan};
    box-shadow: 0 10px 30px rgba(0, 240, 255, 0.2);
  }
`;

const ProjectName = styled.h3`
  font-size: 1.4rem;
  font-weight: 900;
  color: #fff;
  margin: 0;
  line-height: 1.2;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: ${theme.fonts.heading};
`;

const ProjectSection = styled(motion.div)`
  padding: 40px 20px 80px;
`;

const ProjectTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
  text-align: left;
  font-family: ${theme.fonts.heading};
`;

const ProjectDescText = styled.p`
  text-align: left;
  color: ${theme.colors.textGray};
  margin-bottom: 2rem;
  font-size: 1rem;
  font-weight: 300;
`;

const DetailGallery = styled.div`
  width: 100%;
  margin: 20px 0 0;
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 6px 0 10px;
  scrollbar-width: thin;
  scrollbar-color: ${theme.colors.glassBorder} transparent;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.glassBorder};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const DetailCard = styled(motion.div)`
  flex: 0 0 400px;
  aspect-ratio: 1/1;
  border-radius: 18px;
  overflow: hidden;
  background: #050b16;
  border: 1px solid ${theme.colors.glassBorder};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
    border-color: ${theme.colors.accentCyan};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    background-color: #f5f5f5;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const PortfolioDetail = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const data = category ? portfolioData[category] : null;

  if (!data) {
    return <div>포트폴리오를 찾을 수 없습니다.</div>;
  }

  const scrollToProject = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <DetailWrapper>
      <Container>
        <DetailHeader>
          <BackBtn onClick={() => navigate('/')}>← Back to Home</BackBtn>
        </DetailHeader>

        <section>
          <PfTitle>{data.title}</PfTitle>
          <PfSub>{data.subtitle}</PfSub>

          <ProjectGrid>
            {data.projects.map((project) => (
              <ProjectCard
                key={project.id}
                onClick={() => scrollToProject(project.id)}
                whileHover={{ y: -3 }}
              >
                <ProjectName>{project.name}</ProjectName>
              </ProjectCard>
            ))}
          </ProjectGrid>
        </section>

        <div style={{ height: '100px' }} />

        {data.projects.map((project) => (
          <ProjectSection
            key={project.id}
            id={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ProjectTitle>{project.name}</ProjectTitle>
            <ProjectDescText>{project.description}</ProjectDescText>
            <DetailGallery>
              {project.images?.map((image, index) => (
                <DetailCard key={index} whileHover={{ y: -5 }}>
                  <img src={image} alt={`${project.name} ${index + 1}`} />
                </DetailCard>
              ))}
              {project.videos?.map((video, index) => (
                <DetailCard
                  key={`video-${index}`}
                  style={{ flex: '0 0 800px', aspectRatio: '16/9', background: '#000' }}
                  whileHover={{ y: -5 }}
                >
                  <video controls>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </DetailCard>
              ))}
            </DetailGallery>
          </ProjectSection>
        ))}

        <div style={{ height: '200px' }} />
      </Container>
    </DetailWrapper>
  );
};

