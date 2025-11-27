import type { PortfolioCategory } from '../types';

export const portfolioData: Record<string, PortfolioCategory> = {
  editorial: {
    id: 'editorial',
    title: 'Editorial Design',
    subtitle: '출판·에디토리얼 기반 인쇄물 및 북 디자인 프로젝트',
    projects: [
      {
        id: 'project-mz',
        name: 'MZ 알잘딱깔쎈',
        description: 'MZ세대의 핫플레이스를 소개하는 트렌디한 리플렛 & 맵 디자인',
        images: [
          '/알잘딱깔쎈/01.jpg',
          '/알잘딱깔쎈/02.jpg',
          '/알잘딱깔쎈/03.jpg',
          '/알잘딱깔쎈/04.jpg',
          '/알잘딱깔쎈/05.jpg',
          '/알잘딱깔쎈/06.jpg',
        ],
      },
      {
        id: 'project-bagel',
        name: 'BAGELIST',
        description: '서울의 베이글 맛집을 기록한 에디토리얼 아카이브 북',
        images: [
          '/베이글리스트/인스타 업로드용-68.jpg',
          '/베이글리스트/인스타 업로드용-69.jpg',
          '/베이글리스트/인스타 업로드용-70.jpg',
          '/베이글리스트/인스타 업로드용-71.jpg',
          '/베이글리스트/인스타 업로드용-72.jpg',
          '/베이글리스트/인스타 업로드용-73.jpg',
          '/베이글리스트/인스타 업로드용-74.jpg',
        ],
      },
      {
        id: 'project-character',
        name: 'Nicole in Paris',
        description: '브랜드 캐릭터 디자인 및 굿즈 제작',
        images: Array.from({ length: 11 }, (_, i) => `/캐릭터/${String(i).padStart(2, '0')}.jpg`),
      },
    ],
  },
  brand: {
    id: 'brand',
    title: 'Brand Identity',
    subtitle: 'Corporate Branding, Logo Design, Visual Systems',
    projects: [
      {
        id: 'project-dipsa',
        name: '지구 온도계',
        description: '기후 위기 대응 캠페인 브랜딩',
        images: Array.from({ length: 31 }, (_, i) => `/디프사/${String(i).padStart(2, '0')}.jpg`),
      },
      {
        id: 'project-ttareungi',
        name: '따릉이',
        description: '서울자전거 따릉이 브랜드 리뉴얼 & 캐릭터 디자인',
        images: Array.from({ length: 22 }, (_, i) => `/따릉이/${String(i).padStart(2, '0')}.jpg`),
      },
      {
        id: 'project-willer',
        name: 'WILLER',
        description: '청소년 마약 앱 서비스',
        images: Array.from({ length: 12 }, (_, i) => `/윌러/${String(i).padStart(2, '0')}.jpg`),
      },
      {
        id: 'project-almang',
        name: 'ALMANG STORE',
        description: '제로웨이스트 샵 브랜딩 프로젝트',
        images: Array.from({ length: 9 }, (_, i) => `/알맹상점/${String(i).padStart(2, '0')}.jpg`),
      },
      {
        id: 'project-gwangd',
        name: 'IMC design',
        description: '브랜드 아이덴티티 & 영상 프로젝트',
        images: Array.from({ length: 8 }, (_, i) => `/imc-design/${String(i).padStart(2, '0')}.jpg`),
        videos: ['/imc-design/08.mp4'],
      },
    ],
  },
  uxui: {
    id: 'uxui',
    title: 'UX/UI Design',
    subtitle: 'Web & Mobile Interfaces, User Experience Research',
    projects: [
      {
        id: 'project-wednesday',
        name: 'WEDNESDAY',
        description: '사용자 경험 중심의 마이크르사이트 디자인',
        images: Array.from({ length: 9 }, (_, i) => `/웬즈데이/${String(i).padStart(2, '0')}.jpg`),
      },
      {
        id: 'project-kkomjirak',
        name: 'KKOMJIRAK',
        description: '뜨개인을 위한 공유 플랫폼',
        images: Array.from({ length: 7 }, (_, i) => `/꼼지락/${String(i).padStart(2, '0')}.jpg`),
      },
      {
        id: 'project-wiggle',
        name: 'WIGGLE',
        description: '위글위글 브랜드 웹 리디자인',
        images: Array.from({ length: 8 }, (_, i) => `/위글/${String(i).padStart(2, '0')}.jpg`),
      },
    ],
  },
  motion: {
    id: 'motion',
    title: 'Motion Graphics',
    subtitle: 'Video Editing, 2D/3D Motion, Visual Effects',
    projects: [
      {
        id: 'project-palace',
        name: '경복궁 궁중 축제 홍보 영상',
        description: '전통과 현대가 어우러진 궁중 축제 홍보 영상',
        videos: ['/imc-design/09.mp4'],
      },
      {
        id: 'project-motion',
        name: '모션그래픽',
        description: '다이내믹한 모션 그래픽스 작업',
        videos: ['/imc-design/08.mp4'],
      },
    ],
  },
};

