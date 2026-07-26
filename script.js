const projects = [
  {
    title: "리프트리성형외과",
    category: "web",
    type: "Web · Mobile Design",
    image: "assets/liftree.png",
    detailImage: "assets/liftree-detail.png",
    year: "2026",
    role: "기획 · 디자인 · 퍼블리싱 90%",
    tools: "Figma, HTML, CSS, JavaScript",
    description:
      "병원의 전문성과 미적 철학을 효과적으로 전달해 브랜드 신뢰도를 강화하고, 프리미엄 고객층의 상담 전환을 유도하도록 설계했습니다. 시술 정보 중심의 구성을 넘어 병원의 철학, 의료진의 전문성, 미적 기준을 중심으로 콘텐츠를 재구성했습니다.",
    link: "https://liftreeps.com/",
  },
  {
    title: "마디바름한의원",
    category: "web",
    type: "Web · Mobile Design",
    image: "assets/madibareum.png",
    detailImage: "assets/madibareum-detail.jpg",
    year: "2026",
    role: "기획 · 디자인 · 퍼블리싱 100%",
    tools: "Figma, HTML, CSS, JavaScript",
    description:
      "한방재활의학과 전문성과 추나치료 중심 진료를 명확히 전달하기 위해 정보 구조와 신뢰 형성 흐름을 중심으로 설계했습니다. 질환별 원인·검사·치료 과정을 체계화해 사용자가 자신의 증상과 치료 방향을 쉽게 이해하도록 구성했습니다.",
    link: "https://madibareum.kr/",
  },
  {
    title: "서울아산나성수내과의원",
    category: "web",
    type: "Web · Mobile Design",
    image: "assets/rheumatism.png",
    detailImage: "assets/rheumatism-detail.jpg",
    year: "2026",
    role: "기획 · 디자인 · 퍼블리싱 100%",
    tools: "Figma, HTML, CSS, JavaScript",
    description:
      "류마티스 질환 전문성과 한양방 통합 진료의 강점을 명확히 전달하기 위해, 질환 이해부터 자가 체크, 검사, 치료 방향까지 이어지는 정보 흐름을 중심으로 설계했습니다. 대표원장의 임상 경험과 연구 이력, 정밀 검사 시스템, 비수술 통증 치료 항목을 함께 구성해 사용자가 진료의 필요성과 병원의 전문성을 자연스럽게 인식할 수 있도록 했습니다.",
    link: "https://sarc.co.kr/",
  },
  {
    title: "MTT Mall",
    category: "web",
    type: "B2B Commerce",
    image: "assets/mtt-mall.png",
    detailImage: "assets/mtt-mall-detail.jpg",
    year: "2025",
    role: "기획 · 디자인 · 퍼블리싱 100%",
    tools: "Figma, HTML, CSS, JavaScript",
    description:
      "병원·의원 실무자를 위한 B2B 쇼핑몰입니다. 빠른 상품 탐색, 가격 비교, 반복 구매가 가능하도록 카테고리와 상품 정보를 전면에 배치하고 ‘탐색 → 비교 → 구매 → 문의’가 자연스럽게 이어지는 실용적인 커머스 UI를 구축했습니다.",
  },
  {
    title: "병원·의료 취업포털",
    category: "web",
    type: "Matching Platform",
    image: "assets/medical-topteam.png",
    detailImage: "assets/medical-topteam-detail.jpg",
    year: "2025",
    role: "기획 · 디자인 · 퍼블리싱 100%",
    tools: "Figma, HTML, CSS, JavaScript",
    description:
      "병원 관계자와 의료 구직자를 구분해 각자의 목적에 맞는 진입 동선을 설계했습니다. 실제 현장의 문제를 먼저 제시하고 서비스가 해결책으로 이어지도록 스토리를 구성했으며, 조건 기반 인재 검색 UI도 직접 구현했습니다.",
  },
  {
    title: "리걸테크 산업 인식조사",
    category: "information",
    type: "Infographic",
    image: "assets/legaltech.png",
    detailImage: "assets/legaltech-detail.jpg",
    year: "2022",
    role: "디자인 100%",
    tools: "Illustrator, Photoshop",
    description:
      "법률 플랫폼 이용 의향, 기대 효과, 정보 탐색 행태 등 주요 조사 결과를 구조화한 인포그래픽입니다. 다양한 차트와 시각적 계층을 활용해 복잡한 통계를 빠르게 파악할 수 있도록 디자인했습니다.",
    link: "https://m.sedaily.com/amparticle/13377924",
  },
  {
    title: "로톡 변호사 이용 현황",
    category: "information",
    type: "Infographic",
    image: "assets/lawtalk-members.png",
    detailImage: "assets/lawtalk-members-detail.jpg",
    year: "2021",
    role: "디자인 100%",
    tools: "Illustrator, Photoshop",
    description:
      "로톡 등록 변호사의 구성과 광고 이용 현황을 분석한 인포그래픽입니다. 청년변호사 비율, 상담 성과와 광고비 구조를 핵심 데이터 중심으로 시각화했습니다.",
    link: "https://www.khan.co.kr/article/202105181107001",
  },
  {
    title: "뉴스 그래픽",
    category: "information",
    type: "Editorial Graphic",
    image: "assets/news-graphic.png",
    detailImage: "assets/news-graphic-detail.jpg",
    year: "2022",
    role: "디자인 100%",
    tools: "Illustrator, Photoshop",
    description:
      "짧은 기사 소비 환경에서 이미지 하나로도 핵심 내용을 이해하도록 제작한 뉴스 그래픽입니다. 불법 촬영 횟수를 GIF로 시각화해 범행 규모와 심각성을 직관적으로 전달했습니다.",
    link: "https://lawtalknews.co.kr/article/NKA82WJG290Z",
  },
  {
    title: "어린 범죄자들",
    category: "information",
    type: "Editorial Card News",
    image: "assets/young-criminals.png",
    detailImage: "assets/young-criminals-detail.jpg",
    year: "2022",
    role: "기획 · 디자인 100%",
    tools: "Illustrator, Photoshop",
    description:
      "촉법소년 범죄와 연령 기준 논쟁을 일반 독자가 쉽게 이해할 수 있도록 구성한 카드뉴스입니다. 사건의 배경부터 법적 기준, 사회적 인식과 제도 개선 논의까지 단계적으로 전달했습니다.",
    link: "https://lawtalknews.co.kr/article/TEOSTLQMCGAF",
  },
  {
    title: "진료 안내형 SNS",
    category: "visual",
    type: "Social Contents",
    image: "assets/medical-sns.png",
    year: "2025",
    role: "기획 · 디자인 100%",
    tools: "Figma, Photoshop",
    description:
      "병원의 진료 일정과 지원 정보를 모바일 피드에서 빠르게 인지할 수 있도록 디자인한 SNS 콘텐츠 시리즈입니다.",
  },
  {
    title: "의료 프로모션 SNS",
    category: "visual",
    type: "Social Promotion",
    image: "assets/promo-sns.png",
    year: "2025",
    role: "기획 · 디자인 100%",
    tools: "Figma, Photoshop",
    description:
      "건강검진과 의료 프로모션의 핵심 혜택이 즉시 읽히도록 강한 타이포그래피와 명확한 정보 위계로 구성했습니다.",
  },
  {
    title: "안과 홍보 전단지",
    category: "visual",
    type: "Print Design",
    image: "assets/eye-flyer.png",
    year: "2024",
    role: "기획 · 디자인 100%",
    tools: "Figma, Photoshop",
    description:
      "노안·백내장 관련 진료 정보를 신뢰감 있는 블루 톤과 명확한 CTA 구조로 정리한 병원 홍보 전단지입니다.",
  },
];

const aiProjects = [
  // {
  //   title: "AI Practice 01",
  //   category: "ai",
  //   type: "AI Practice",
  //   image: "assets/ai_practice3.jpg",
  //   detailImage: "assets/ai_practice_detail.jpg",
  //   year: "2026",
  //   role: "AI 이미지 실험 · 비주얼 디렉션",
  //   tools: "Nano Banana",
  //   description:
  //     "AI 툴을 활용해 이미지 콘셉트를 실험하고, 결과물을 포트폴리오용 비주얼로 정리한 작업입니다.",
  // },

  // {
  //   title: "AI Practice 02",
  //   category: "ai",
  //   type: "AI Practice",
  //   image: "assets/ai_practice2.jpg",
  //   detailImage: "assets/ai_practice_detail2.jpg",
  //   video: "assets/ai_practice.mp4",
  //   videoPoster: "assets/ai_practice4.jpg",
  //   year: "2026",
  //   role: "AI 이미지 실험 · 비주얼 디렉션",
  //   tools: "Nano Banana, firefly",
  //   description:
  //     "AI 툴을 활용해 이미지 콘셉트를 실험하고, 결과물을 포트폴리오용 비주얼로 정리한 작업입니다.",
  // },

  {
    title: "AI Practice 01",
    category: "ai",
    type: "AI Practice",
    image: "assets/ai_practice5.jpg",
    detailImage: "assets/ai_practice5_detail.jpg",
    year: "2026",
    role: "AI 이미지 실험 · 비주얼 디렉션",
    tools: "Chat GPT, firefly",
    description:
      "AI 툴을 활용해 이미지 콘셉트를 실험하고, 결과물을 포트폴리오용 비주얼로 정리한 작업입니다.",
  },

  {
    title: "AI Practice 02",
    category: "ai",
    type: "AI Practice",
    image: "assets/ai_practice6.png",
    detailImage: "assets/ai_practice6_detail.jpg",
    video: "assets/ai_practice2.mp4",
    videoPoster: "assets/ai_practice2_th.jpg",
    year: "2026",
    role: "AI 이미지 실험 · 비주얼 디렉션",
    tools: "Chat GPT, google flow, Nano Banana",
    description:
      "AI 툴을 활용해 이미지 콘셉트를 실험하고, 결과물을 포트폴리오용 비주얼로 정리한 작업입니다.",
  },
];

const grid = document.querySelector("#project-grid");
const aiGrid = document.querySelector("#Aiproject-grid");
const modal = document.querySelector("#project-modal");
const modalContent = modal.querySelector(".modal-content");
const categoryNames = {
  web: "Web Design",
  information: "Information Design",
  visual: "Visual Design",
  exhibition: "Exhibition Design",
  ai: "AI Practice",
};

function renderProjects(filter = "all") {
  grid.innerHTML = projects
    .map(
      (project, index) => `
    <article class="project-card ${filter !== "all" && project.category !== filter ? "is-hidden" : ""}"
      data-index="${index}" tabindex="0" role="button" aria-label="${project.title} 상세 보기">
      <div class="project-image">
        <img src="${project.image}" alt="${project.title} 프로젝트 이미지" loading="lazy">
      </div>
      <div class="project-meta">
        <h3>${project.title}</h3>
        <p>${project.type}</p>
        <span>${String(index + 1).padStart(2, "0")}</span>
      </div>
    </article>
  `,
    )
    .join("");
}

function renderAiProjects() {
  if (!aiGrid) return;

  aiGrid.innerHTML = aiProjects
    .map(
      (project, index) => `
    <article class="project-card"
      data-ai-index="${index}" tabindex="0" role="button" aria-label="${project.title} 상세 보기">
      <div class="project-image">
        <img src="${project.image}" alt="${project.title} 프로젝트 이미지" loading="lazy">
      </div>
      <div class="project-meta">
        <h3>${project.title}</h3>
        <p>${project.type}</p>
        <span>${String(index + 1).padStart(2, "0")}</span>
      </div>
    </article>
  `,
    )
    .join("");
}

function getProjectMedia(project) {
  if (project.video) {
    return `
      <img src="${project.detailImage || project.image}" alt="${project.title} 상세 이미지">
      <video controls playsinline poster="${project.videoPoster || project.detailImage || project.image}" aria-label="${project.title} 상세 영상">
        <source src="${project.video}" type="video/mp4">
        이 브라우저에서는 영상을 재생할 수 없습니다.
      </video>
    `;
  }

  return `<img src="${project.detailImage || project.image}" alt="${project.title} 상세 이미지">`;
}

function openProject(project) {
  modalContent.innerHTML = `
    <div class="modal-text">
      <div>
        <p class="eyebrow">${categoryNames[project.category]}</p>
        <h2>${project.title}</h2>
      </div>
      <div class="modal-copy">
        <p>${project.description}</p>
        <div class="modal-details">
          <div><span>Contribution</span>${project.role}</div>
          <div><span>Tools</span>${project.tools}</div>
        </div>
        ${project.link ? `<a class="modal-link" href="${project.link}" target="_blank" rel="noreferrer">Visit project ↗</a>` : ""}
      </div>
    </div>
    <div class="modal-hero">${getProjectMedia(project)}</div>
  `;
  modal.showModal();
  document.body.classList.add("modal-open");
}

renderProjects();
renderAiProjects();

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter.is-active").classList.remove("is-active");
    button.classList.add("is-active");
    renderProjects(button.dataset.filter);
  });
});

grid.addEventListener("click", (event) => {
  const card = event.target.closest(".project-card");
  if (card) openProject(projects[Number(card.dataset.index)]);
});
grid.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    const card = event.target.closest(".project-card");
    if (card) {
      event.preventDefault();
      openProject(projects[Number(card.dataset.index)]);
    }
  }
});

if (aiGrid) {
  aiGrid.addEventListener("click", (event) => {
    const card = event.target.closest(".project-card");
    if (card) openProject(aiProjects[Number(card.dataset.aiIndex)]);
  });

  aiGrid.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      const card = event.target.closest(".project-card");
      if (card) {
        event.preventDefault();
        openProject(aiProjects[Number(card.dataset.aiIndex)]);
      }
    }
  });
}

modal
  .querySelector(".modal-close")
  .addEventListener("click", () => modal.close());
modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.close();
});
modal.addEventListener("close", () =>
  document.body.classList.remove("modal-open"),
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);
document
  .querySelectorAll(".reveal")
  .forEach((element) => observer.observe(element));

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.addEventListener("click", () => {
  nav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
  menuButton.setAttribute("aria-expanded", "false");
});

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", (event) => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});
