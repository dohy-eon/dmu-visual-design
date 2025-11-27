import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';

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

const IntroBox = styled(motion.div)`
  text-align: center;
  max-width: 900px;
  margin: 0 auto 4rem;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(0, 240, 255, 0.05), transparent);
  border: 1px solid ${theme.colors.glassBorder};
  border-radius: 20px;
  backdrop-filter: blur(10px);

  p {
    font-size: clamp(1.1rem, 1.5vw, 1.3rem);
    color: ${theme.colors.textGray};

    strong {
      color: ${theme.colors.accentCyan};
    }
  }
`;

const ProcessDiagram = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProcessStep = styled(motion.div)<{ $highlight?: boolean }>`
  background: ${theme.colors.glassBg};
  border: 1px solid
    ${(props) => (props.$highlight ? theme.colors.accentCyan : theme.colors.glassBorder)};
  padding: 2rem;
  border-radius: 15px;
  width: clamp(200px, 20vw, 250px);
  text-align: center;
  position: relative;
  transition: transform 0.3s;
  background: ${(props) =>
    props.$highlight ? 'rgba(0, 240, 255, 0.1)' : theme.colors.glassBg};

  &:hover {
    transform: translateY(-10px);
    border-color: ${theme.colors.accentCyan};
    box-shadow: 0 0 20px rgba(0, 240, 255, 0.1);
  }

  h4 {
    color: ${(props) => (props.$highlight ? theme.colors.accentCyan : theme.colors.textWhite)};
    margin-bottom: 0.5rem;
    font-family: ${theme.fonts.heading};
  }

  p {
    color: ${theme.colors.textGray};
  }
`;

const CurriculumVisual = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const GradeBox = styled.div`
  background: ${theme.colors.glassBg};
  border: 1px solid ${theme.colors.glassBorder};
  padding: 2.5rem;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${theme.colors.accentCyan};
  }

  h4 {
    font-size: 1.8rem;
    color: ${theme.colors.textWhite};
    margin-bottom: 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 1rem;
    font-family: ${theme.fonts.heading};
  }
`;

const CurrCategory = styled.div`
  margin-bottom: 1.5rem;
`;

const CurrCatTitle = styled.span`
  font-size: 1rem;
  color: ${theme.colors.accentCyan};
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: inline-block;
  background: rgba(0, 240, 255, 0.1);
  padding: 0.2rem 0.8rem;
  border-radius: 20px;
`;

const CurrJob = styled.div`
  font-size: 0.85rem;
  color: ${theme.colors.textGray};
  margin-bottom: 0.5rem;
  font-style: italic;
`;

const CurrList = styled.ul`
  list-style: none;
  color: ${theme.colors.textWhite};
  font-size: 0.95rem;
  line-height: 1.6;
`;

export const Introduce = () => {
  return (
    <Section id="introduce">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Introduce
        </SectionTitle>

        <IntroBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>
            <strong>학사학위 전공심화과정</strong>은 전문학사 취득 후 1~2년의 추가 교육을 통해
            <br />
            4년제 대학교 졸업과 동등한 <strong>학사학위</strong>를 취득하는 제도입니다.
          </p>
        </IntroBox>

        <ProcessDiagram
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ProcessStep whileHover={{ y: -10 }}>
            <h4>전문대 2년제</h4>
            <p>졸업</p>
          </ProcessStep>
          <ProcessStep whileHover={{ y: -10 }}>
            <h4>전공심화 2년</h4>
            <p>3·4학년 과정 이수</p>
          </ProcessStep>
          <ProcessStep $highlight whileHover={{ y: -10 }}>
            <h4>학사학위 취득</h4>
            <p>4년제 대졸 동등 학력</p>
          </ProcessStep>
          <ProcessStep whileHover={{ y: -10 }}>
            <h4>대학원 진학</h4>
            <p>가능</p>
          </ProcessStep>
        </ProcessDiagram>

        <CurriculumVisual
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GradeBox>
            <h4>3학년 Curriculum</h4>
            <CurrCategory>
              <CurrCatTitle>기초 실습</CurrCatTitle>
              <CurrJob>텍스트 / 비디오</CurrJob>
              <CurrList>
                <li>인포그래픽디자인 / 북디자인</li>
                <li>영상디자인</li>
              </CurrList>
            </CurrCategory>
            <CurrCategory>
              <CurrCatTitle>핵심 직무</CurrCatTitle>
              <CurrJob>UX / BX</CurrJob>
              <CurrList>
                <li>디지털프로덕트테크닉 / 기획</li>
                <li>브랜드캐릭터 / 콘텐츠디자인</li>
              </CurrList>
            </CurrCategory>
            <CurrCategory>
              <CurrCatTitle>심화 이론</CurrCatTitle>
              <CurrJob>이론 / 실습</CurrJob>
              <CurrList>
                <li>디자인프로젝트세미나1</li>
                <li>디자인사</li>
              </CurrList>
            </CurrCategory>
          </GradeBox>
          <GradeBox>
            <h4>4학년 Curriculum</h4>
            <CurrCategory>
              <CurrCatTitle>기초 실습</CurrCatTitle>
              <CurrJob>텍스트 / 비디오</CurrJob>
              <CurrList>
                <li>3D영상디자인</li>
                <li>포트폴리오</li>
              </CurrList>
            </CurrCategory>
            <CurrCategory>
              <CurrCatTitle>핵심 직무</CurrCatTitle>
              <CurrJob>UX / BX</CurrJob>
              <CurrList>
                <li>디지털프로덕트제작 / 서비스디자인</li>
                <li>브랜드산학협력 / 통합커뮤니케이션</li>
              </CurrList>
            </CurrCategory>
            <CurrCategory>
              <CurrCatTitle>심화 이론</CurrCatTitle>
              <CurrJob>이론 / 실습</CurrJob>
              <CurrList>
                <li>실험디자인스튜디오</li>
                <li>디자인프로젝트세미나2 / 글쓰기</li>
              </CurrList>
            </CurrCategory>
          </GradeBox>
        </CurriculumVisual>
      </Container>
    </Section>
  );
};

