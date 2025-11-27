import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
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
  flex: 0 0 auto;
  height: 400px;
  border-radius: 18px;
  overflow: hidden;
  background: #050b16;
  border: 1px solid ${theme.colors.glassBorder};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    border-color: ${theme.colors.accentCyan};
  }

  img {
    height: 100%;
    width: auto;
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

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(5, 10, 20, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0 80px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 60px;
    gap: 10px;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  max-height: 90vh;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 90vh;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid ${theme.colors.glassBorder};
  color: ${theme.colors.textWhite};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 300;
  transition: all 0.3s;
  z-index: 1001;

  &:hover {
    background: ${theme.colors.accentCyan};
    border-color: ${theme.colors.accentCyan};
    color: ${theme.colors.bgDark};
  }
`;

const NavButton = styled.button<{ position: 'left' | 'right' }>`
  position: relative;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid ${theme.colors.glassBorder};
  color: ${theme.colors.textWhite};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 300;
  transition: all 0.3s;
  z-index: 1002;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  &:hover:not(:disabled) {
    background: ${theme.colors.accentCyan};
    border-color: ${theme.colors.accentCyan};
    color: ${theme.colors.bgDark};
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    
    &:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: ${theme.colors.glassBorder};
      color: ${theme.colors.textWhite};
      transform: scale(1);
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 40px;
    height: 40px;
    font-size: 24px;
  }
`;

interface SelectedImageInfo {
  image: string;
  projectId: string;
  imageIndex: number;
}

export const PortfolioDetail = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const data = category ? portfolioData[category] : null;
  const [selectedImageInfo, setSelectedImageInfo] = useState<SelectedImageInfo | null>(null);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

  const getCurrentImageList = () => {
    if (!selectedImageInfo || !data) return [];
    const project = data.projects.find(p => p.id === selectedImageInfo.projectId);
    return project?.images || [];
  };

  const goToPreviousImage = () => {
    if (!selectedImageInfo || !data) return;
    const imageList = getCurrentImageList();
    const currentIndex = selectedImageInfo.imageIndex;
    
    if (currentIndex > 0) {
      setSlideDirection('right');
      setSelectedImageInfo({
        image: imageList[currentIndex - 1],
        projectId: selectedImageInfo.projectId,
        imageIndex: currentIndex - 1,
      });
    }
  };

  const goToNextImage = () => {
    if (!selectedImageInfo || !data) return;
    const imageList = getCurrentImageList();
    const currentIndex = selectedImageInfo.imageIndex;
    
    if (currentIndex < imageList.length - 1) {
      setSlideDirection('left');
      setSelectedImageInfo({
        image: imageList[currentIndex + 1],
        projectId: selectedImageInfo.projectId,
        imageIndex: currentIndex + 1,
      });
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedImageInfo || !data) return;
      
      if (e.key === 'Escape') {
        setSlideDirection(null);
        setSelectedImageInfo(null);
      } else if (e.key === 'ArrowLeft') {
        const project = data.projects.find(p => p.id === selectedImageInfo.projectId);
        const imageList = project?.images || [];
        const currentIndex = selectedImageInfo.imageIndex;
        
        if (currentIndex > 0) {
          setSlideDirection('right');
          setSelectedImageInfo({
            image: imageList[currentIndex - 1],
            projectId: selectedImageInfo.projectId,
            imageIndex: currentIndex - 1,
          });
        }
      } else if (e.key === 'ArrowRight') {
        const project = data.projects.find(p => p.id === selectedImageInfo.projectId);
        const imageList = project?.images || [];
        const currentIndex = selectedImageInfo.imageIndex;
        
        if (currentIndex < imageList.length - 1) {
          setSlideDirection('left');
          setSelectedImageInfo({
            image: imageList[currentIndex + 1],
            projectId: selectedImageInfo.projectId,
            imageIndex: currentIndex + 1,
          });
        }
      }
    };

    if (selectedImageInfo) {
      document.addEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImageInfo, data]);

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
                <DetailCard 
                  key={index} 
                  whileHover={{ y: -5 }}
                  onClick={() => {
                    setSlideDirection(null);
                    setSelectedImageInfo({
                      image,
                      projectId: project.id,
                      imageIndex: index,
                    });
                  }}
                >
                  <img src={image} alt={`${project.name} ${index + 1}`} />
                </DetailCard>
              ))}
              {project.videos?.map((video, index) => (
                <DetailCard
                  key={`video-${index}`}
                  style={{ flex: '0 0 800px', aspectRatio: '16/9', background: '#000' }}
                  whileHover={{ y: -5 }}
                >
                  <video 
                    controls 
                    preload="metadata"
                    playsInline
                    crossOrigin="anonymous"
                    onError={(e) => {
                      const target = e.target as HTMLVideoElement;
                      console.error('Video load error:', {
                        src: target.src,
                        error: target.error,
                        networkState: target.networkState,
                        readyState: target.readyState
                      });
                    }}
                    onLoadedMetadata={(e) => {
                      console.log('Video metadata loaded:', (e.target as HTMLVideoElement).src);
                    }}
                  >
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

      <AnimatePresence mode="wait">
        {selectedImageInfo && data && (() => {
          const project = data.projects.find(p => p.id === selectedImageInfo.projectId);
          if (!project || !project.images) return null;
          
          const imageList = project.images;
          const hasMultipleImages = imageList.length > 1;
          const canGoPrevious = selectedImageInfo.imageIndex > 0;
          const canGoNext = selectedImageInfo.imageIndex < imageList.length - 1;
          
          return (
            <ModalOverlay
              key="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setSlideDirection(null);
                setSelectedImageInfo(null);
              }}
            >
              <ModalContent
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <CloseButton onClick={() => {
                  setSlideDirection(null);
                  setSelectedImageInfo(null);
                }}>
                  ×
                </CloseButton>
                {hasMultipleImages && (
                  <NavButton 
                    position="left" 
                    disabled={!canGoPrevious}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (canGoPrevious) {
                        goToPreviousImage();
                      }
                    }}
                  >
                    ‹
                  </NavButton>
                )}
                <ImageContainer
                  key={selectedImageInfo.image}
                  initial={{ 
                    opacity: 0, 
                    x: slideDirection === 'left' ? 50 : slideDirection === 'right' ? -50 : 0 
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ 
                    opacity: 0, 
                    x: slideDirection === 'left' ? -50 : slideDirection === 'right' ? 50 : 0 
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ModalImage src={selectedImageInfo.image} alt="확대 이미지" />
                </ImageContainer>
                {hasMultipleImages && (
                  <NavButton 
                    position="right" 
                    disabled={!canGoNext}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (canGoNext) {
                        goToNextImage();
                      }
                    }}
                  >
                    ›
                  </NavButton>
                )}
              </ModalContent>
            </ModalOverlay>
          );
        })()}
      </AnimatePresence>
    </DetailWrapper>
  );
};

