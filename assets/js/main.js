/* ============================================================
   Syed Affan Ali — portfolio interactions + EN/KR localization
   ============================================================ */

const I18N = {
  en: {
    "skip":"Skip to content",
    "nav.home":"Home","nav.about":"About","nav.experience":"Experience",
    "nav.projects":"Projects","nav.skills":"Skills","nav.contact":"Contact","nav.resume":"Resume",

    "hero.eyebrow":"Mobile · Embedded · IoT · Applied AI",
    "hero.role":"Mobile & Embedded Systems Engineer",
    "hero.lead":"I build dependable mobile products that connect people, devices, and data — from offline-first apps to sensor-driven hardware.",
    "hero.cta1":"Explore my work","hero.cta2":"Get in touch",
    "hero.fact1":"Years building mobile apps",
    "hero.fact2":"Companies shipped work for",
    "hero.fact3":"Selected software & hardware projects",
    "hero.fact4":"Pakistan · open to opportunities",

    "about.eyebrow":"Profile",
    "about.title":"Software built for the real world.",
    "about.available":"Open to opportunities · Karachi, Pakistan",
    "about.p1":"Computer Systems Engineering graduate and Flutter developer with 1.5+ years of experience shipping responsive, offline-first mobile applications.",
    "about.p2":"My work sits where mobile software meets connected hardware: field data capture, sensor-driven systems, robotics, and practical AI. I care about clean architecture, resilient synchronization, and interfaces that stay useful outside ideal lab conditions.",
    "about.p3":"Alongside production mobile work, I build embedded and IoT projects with Arduino and ESP32 — integrating sensors, wireless telemetry, and Python data pipelines — and I'm actively growing toward AI, robotics, and edge-computing systems.",
    "about.tag1":"Mobile Developer","about.tag2":"Embedded & IoT","about.tag3":"Robotics","about.tag4":"Applied AI",

    "exp.eyebrow":"Experience",
    "exp.title":"Production work, from interface to field operation.",
    "exp.present":"Present",
    "exp.r1.role":"Mobile Application Developer",
    "exp.r1.body":"Build production Flutter feature modules with clean architecture and scalable state management, contributing through sprint cycles, code reviews, daily standups, and CI/CD workflows.",
    "exp.r2.role":"Mobile Developer · IoT & Connected Apps",
    "exp.r2.body":"Delivered responsive cross-platform Flutter interfaces, hardware-aware features (GeoLocation, Camera, Media), REST integrations, and offline synchronization using Provider, Bloc, IsarDB, SharedPreferences, and Dart isolates.",
    "exp.r3.role":"Flutter Front-End Developer",
    "exp.r3.body":"Translated Figma designs into high-fidelity cross-platform interfaces and built REST, JSON, and multipart data flows for monitoring and control-oriented applications.",
    "exp.r4.role":"Mobile Application Developer Intern",
    "exp.r4.body":"Built and deployed a Sugar Cane Trolley Registration app with native GeoLocation, image capture, Google Maps, nested navigation, and a resilient offline upload pipeline using Dart isolates.",

    "proj.eyebrow":"Selected projects",
    "proj.title":"Connected systems with tangible outcomes.",
    "proj.f.all":"All","proj.f.mobile":"Mobile","proj.f.iot":"IoT","proj.f.ai":"AI",
    "proj.viewcode":"View code","proj.viewall":"View all on GitHub",
    "proj.p1.type":"Production mobile app",
    "proj.p1.title":"Sugar Cane Trolley Registration",
    "proj.p1.body":"A deployed field app for real-time trolley registration: geo-tagged photo capture, Google Maps, and reliable offline-first background sync via Dart isolates for low-connectivity conditions.",
    "proj.p2.type":"IoT · Sensing · Data",
    "proj.p2.title":"Water Quality Monitoring System",
    "proj.p2.body":"Real-time pH, turbidity, and temperature sensing on Arduino, with a Python pipeline for normalization, remote visualization, anomaly detection, and threshold-based alerts.",
    "proj.p3.type":"Robotics · Control",
    "proj.p3.title":"Gesture-Controlled Robotic Arm",
    "proj.p3.body":"Accelerometer-driven hand tracking with servo actuation and smooth C++ motion interpolation, with an OpenCV hand-landmark control extension as an alternative input.",
    "proj.p4.type":"Applied AI · RAG",
    "proj.p4.title":"AI Document Q&A Agent",
    "proj.p4.body":"A retrieval-augmented document assistant with FAISS vector search, conversational memory, source citations, and a Streamlit upload-and-query interface.",
    "proj.p5.type":"Edge monitoring",
    "proj.p5.title":"Energy Anomaly Detection",
    "proj.p5.body":"An ESP32 prototype that streams electrical measurements for remote monitoring and flags unusual consumption patterns with a lightweight anomaly-detection model.",
    "proj.p6.type":"Prediction · Alerts",
    "proj.p6.title":"Smart Greenhouse System",
    "proj.p6.body":"Temperature, humidity, and light sensing on ESP32 with remote readings, a simple ML model for near-term condition prediction, and actionable threshold alerts.",

    "skills.eyebrow":"Capabilities",
    "skills.title":"A practical toolkit for connected products.",
    "skills.g1.title":"Mobile & Edge","skills.g2.title":"Embedded & IoT",
    "skills.g3.title":"AI & Vision","skills.g4.title":"Engineering",
    "skills.edu":"Education","skills.edu.deg":"B.E. Computer Systems Engineering",
    "skills.train":"Training","skills.train.t":"Flutter · Arduino & Robotics","skills.train.p":"MUET and Creativo, Karachi",
    "skills.lang":"Languages","skills.lang.t":"Urdu · English","skills.lang.p":"Native · IELTS Band 6.5",

    "contact.eyebrow":"Contact",
    "contact.title":"Let's build something that works beyond the demo.",
    "contact.intro":"Open to graduate research, mobile and connected-product roles, and collaboration in AI, robotics, and IoT.",
    "contact.copy":"Copy email","contact.copied":"Copied!",

    "footer.rights":"All rights reserved.","footer.top":"Back to top"
  },
  ko: {
    "skip":"본문으로 건너뛰기",
    "nav.home":"홈","nav.about":"소개","nav.experience":"경력",
    "nav.projects":"프로젝트","nav.skills":"기술","nav.contact":"연락처","nav.resume":"이력서",

    "hero.eyebrow":"모바일 · 임베디드 · IoT · 응용 AI",
    "hero.role":"모바일 & 임베디드 시스템 엔지니어",
    "hero.lead":"오프라인 우선 앱부터 센서 기반 하드웨어까지, 사람과 기기와 데이터를 연결하는 신뢰성 높은 모바일 제품을 만듭니다.",
    "hero.cta1":"작업물 보기","hero.cta2":"연락하기",
    "hero.fact1":"모바일 앱 개발 경력",
    "hero.fact2":"함께한 회사",
    "hero.fact3":"주요 소프트웨어 & 하드웨어 프로젝트",
    "hero.fact4":"파키스탄 · 기회에 열려 있음",

    "about.eyebrow":"프로필",
    "about.title":"현실 세계를 위한 소프트웨어.",
    "about.available":"기회에 열려 있음 · 파키스탄 카라치",
    "about.p1":"컴퓨터 시스템 공학 학사이자 Flutter 개발자로, 반응형·오프라인 우선 모바일 애플리케이션을 1.5년 이상 개발·배포해 왔습니다.",
    "about.p2":"제 작업은 모바일 소프트웨어와 연결형 하드웨어가 만나는 지점에 있습니다. 현장 데이터 수집, 센서 기반 시스템, 로보틱스, 실용적인 AI가 그 대상입니다. 깔끔한 아키텍처, 견고한 동기화, 그리고 이상적인 환경 밖에서도 유용한 인터페이스를 중요하게 생각합니다.",
    "about.p3":"프로덕션 모바일 개발과 함께 Arduino와 ESP32로 임베디드·IoT 프로젝트를 만들며 센서, 무선 텔레메트리, Python 데이터 파이프라인을 통합합니다. 또한 AI, 로보틱스, 엣지 컴퓨팅 시스템으로 역량을 넓혀가고 있습니다.",
    "about.tag1":"모바일 개발자","about.tag2":"임베디드 & IoT","about.tag3":"로보틱스","about.tag4":"응용 AI",

    "exp.eyebrow":"경력",
    "exp.title":"인터페이스부터 현장 운영까지, 실전 개발 경험.",
    "exp.present":"현재",
    "exp.r1.role":"모바일 애플리케이션 개발자",
    "exp.r1.body":"깔끔한 아키텍처와 확장 가능한 상태 관리를 적용해 프로덕션 Flutter 기능 모듈을 개발하며, 스프린트 주기·코드 리뷰·일일 스탠드업·CI/CD 워크플로에 기여합니다.",
    "exp.r2.role":"모바일 개발자 · IoT & 연결형 앱",
    "exp.r2.body":"반응형 크로스플랫폼 Flutter 인터페이스, 하드웨어 연동 기능(위치·카메라·미디어), REST 연동, 그리고 Provider·Bloc·IsarDB·SharedPreferences·Dart isolate를 활용한 오프라인 동기화를 구현했습니다.",
    "exp.r3.role":"Flutter 프런트엔드 개발자",
    "exp.r3.body":"Figma 디자인을 고해상도 크로스플랫폼 인터페이스로 구현하고, 모니터링·제어 중심 애플리케이션을 위한 REST·JSON·멀티파트 데이터 흐름을 구축했습니다.",
    "exp.r4.role":"모바일 애플리케이션 개발 인턴",
    "exp.r4.body":"네이티브 위치 기능, 이미지 캡처, Google Maps, 중첩 내비게이션, 그리고 Dart isolate 기반의 견고한 오프라인 업로드 파이프라인을 갖춘 사탕수수 트롤리 등록 앱을 개발·배포했습니다.",

    "proj.eyebrow":"주요 프로젝트",
    "proj.title":"실질적 성과를 내는 연결형 시스템.",
    "proj.f.all":"전체","proj.f.mobile":"모바일","proj.f.iot":"IoT","proj.f.ai":"AI",
    "proj.viewcode":"코드 보기","proj.viewall":"GitHub에서 전체 보기",
    "proj.p1.type":"프로덕션 모바일 앱",
    "proj.p1.title":"사탕수수 트롤리 등록 앱",
    "proj.p1.body":"실시간 트롤리 등록을 위한 현장 배포 앱입니다. 지오태그 사진 촬영, Google Maps, 그리고 저연결 환경을 위한 Dart isolate 기반 오프라인 우선 백그라운드 동기화를 제공합니다.",
    "proj.p2.type":"IoT · 센싱 · 데이터",
    "proj.p2.title":"수질 모니터링 시스템",
    "proj.p2.body":"Arduino에서 pH·탁도·온도를 실시간 측정하고, Python 파이프라인으로 정규화·원격 시각화·이상 탐지·임계값 알림을 처리합니다.",
    "proj.p3.type":"로보틱스 · 제어",
    "proj.p3.title":"제스처 제어 로봇 팔",
    "proj.p3.body":"가속도계 기반 손 추적과 서보 구동, 부드러운 C++ 모션 보간을 구현했으며, 대체 입력 방식으로 OpenCV 손 랜드마크 제어 확장을 적용했습니다.",
    "proj.p4.type":"응용 AI · RAG",
    "proj.p4.title":"AI 문서 질의응답 에이전트",
    "proj.p4.body":"FAISS 벡터 검색, 대화 메모리, 출처 인용, 그리고 Streamlit 업로드·질의 인터페이스를 갖춘 검색 증강(RAG) 문서 도우미입니다.",
    "proj.p5.type":"엣지 모니터링",
    "proj.p5.title":"에너지 이상 탐지",
    "proj.p5.body":"ESP32로 전기 측정값을 원격 모니터링용으로 스트리밍하고, 경량 이상 탐지 모델로 비정상 소비 패턴을 식별하는 프로토타입입니다.",
    "proj.p6.type":"예측 · 알림",
    "proj.p6.title":"스마트 온실 시스템",
    "proj.p6.body":"ESP32에서 온도·습도·조도를 센싱해 원격 판독하고, 간단한 ML 모델로 단기 상태를 예측하며 실행 가능한 임계값 알림을 제공합니다.",

    "skills.eyebrow":"역량",
    "skills.title":"연결형 제품을 위한 실용적 도구 모음.",
    "skills.g1.title":"모바일 & 엣지","skills.g2.title":"임베디드 & IoT",
    "skills.g3.title":"AI & 비전","skills.g4.title":"엔지니어링",
    "skills.edu":"학력","skills.edu.deg":"컴퓨터 시스템 공학 학사",
    "skills.train":"교육","skills.train.t":"Flutter · Arduino & 로보틱스","skills.train.p":"MUET 및 Creativo, 카라치",
    "skills.lang":"언어","skills.lang.t":"우르두어 · 영어","skills.lang.p":"모국어 · IELTS 6.5",

    "contact.eyebrow":"연락처",
    "contact.title":"데모를 넘어 실제로 작동하는 것을 함께 만들어요.",
    "contact.intro":"대학원 연구, 모바일 및 연결형 제품 직무, 그리고 AI·로보틱스·IoT 협업에 열려 있습니다.",
    "contact.copy":"이메일 복사","contact.copied":"복사됨!",

    "footer.rights":"All rights reserved.","footer.top":"맨 위로"
  }
};

function applyLang(lang){
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll(".lang-btn").forEach(b=>{
    const on = b.dataset.lang === lang;
    b.classList.toggle("active", on);
    b.setAttribute("aria-pressed", on ? "true" : "false");
  });
  try{ localStorage.setItem("lang", lang); }catch(e){}
  // keep copy-button label in sync with current language state
  document.querySelectorAll(".copy-email").forEach(btn=>{
    if(!btn.classList.contains("copied")){
      const span = btn.querySelector("[data-i18n]");
      if(span) span.textContent = dict["contact.copy"];
    }
  });
}

function initLang(){
  let saved = null;
  try{ saved = localStorage.getItem("lang"); }catch(e){}
  const nav = (navigator.language||"").toLowerCase().startsWith("ko") ? "ko" : "en";
  applyLang(saved || nav);
  document.querySelectorAll(".lang-btn").forEach(b=>{
    b.addEventListener("click", ()=> applyLang(b.dataset.lang));
  });
}

function initHeader(){
  const header = document.getElementById("site-header");
  const onScroll = ()=> header.classList.toggle("scrolled", window.scrollY > 12);
  onScroll(); window.addEventListener("scroll", onScroll, {passive:true});

  const toggle = document.querySelector(".menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  toggle.addEventListener("click", ()=>{
    const open = mobileNav.classList.toggle("show");
    mobileNav.hidden = !open;
    toggle.setAttribute("aria-expanded", open ? "true":"false");
  });
  mobileNav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
    mobileNav.classList.remove("show"); mobileNav.hidden = true;
    toggle.setAttribute("aria-expanded","false");
  }));
}

function initScrollSpy(){
  const links = [...document.querySelectorAll(".desktop-nav .nav-link")];
  const map = new Map();
  links.forEach(l=>{ const id=l.getAttribute("href").slice(1); const s=document.getElementById(id); if(s) map.set(s,l); });
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        links.forEach(l=>l.classList.remove("active"));
        const link = map.get(e.target); if(link) link.classList.add("active");
      }
    });
  },{rootMargin:"-45% 0px -50% 0px"});
  map.forEach((_,sec)=>obs.observe(sec));
}

function initTimeline(){
  document.querySelectorAll(".timeline-item").forEach(item=>{
    const trigger = item.querySelector(".timeline-trigger");
    const details = item.querySelector(".timeline-details");
    const setOpen = (open)=>{
      item.classList.toggle("open", open);
      trigger.setAttribute("aria-expanded", open?"true":"false");
      details.style.maxHeight = open ? details.scrollHeight + "px" : "0px";
    };
    // initial state
    setOpen(item.classList.contains("open"));
    trigger.addEventListener("click", ()=> setOpen(!item.classList.contains("open")));
  });
  // recompute open panels after language switch (text height changes)
  document.querySelectorAll(".lang-btn").forEach(b=>b.addEventListener("click",()=>{
    setTimeout(()=>{
      document.querySelectorAll(".timeline-item.open .timeline-details").forEach(d=>{
        d.style.maxHeight = d.scrollHeight + "px";
      });
    },60);
  }));
}

function initFilters(){
  const filters = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll(".project-card");
  filters.forEach(f=>f.addEventListener("click",()=>{
    filters.forEach(x=>{x.classList.remove("active");x.setAttribute("aria-pressed","false");});
    f.classList.add("active"); f.setAttribute("aria-pressed","true");
    const cat = f.dataset.filter;
    cards.forEach(c=>{
      const show = cat==="all" || (c.dataset.category||"").split(" ").includes(cat);
      c.classList.toggle("hide", !show);
    });
  }));
}

function initReveal(){
  const els = document.querySelectorAll(".section-heading, .about-layout, .timeline, .project-card, .skill-groups article, .education-strip, .contact-panel, .hero-facts");
  els.forEach(el=>el.classList.add("reveal"));
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); obs.unobserve(e.target); } });
  },{rootMargin:"0px 0px -8% 0px",threshold:.08});
  els.forEach(el=>obs.observe(el));
}

function initCopyEmail(){
  document.querySelectorAll(".copy-email").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      const email = btn.dataset.email;
      const span = btn.querySelector("span");
      const lang = document.documentElement.lang || "en";
      try{
        await navigator.clipboard.writeText(email);
        btn.classList.add("copied");
        if(span) span.textContent = I18N[lang]["contact.copied"];
        setTimeout(()=>{
          btn.classList.remove("copied");
          if(span) span.textContent = I18N[lang]["contact.copy"];
        },1800);
      }catch(e){ window.location.href = "mailto:"+email; }
    });
  });
}

function initCounters(){
  const facts = document.querySelectorAll(".hero-facts strong[data-count]");
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(!e.isIntersecting) return;
      const el = e.target; obs.unobserve(el);
      const target = parseFloat(el.dataset.count);
      const suffix = el.textContent.includes("+") ? "+" : "";
      const decimals = (el.dataset.count.split(".")[1]||"").length;
      let start=null; const dur=900;
      const step=(t)=>{
        if(!start) start=t;
        const p=Math.min((t-start)/dur,1);
        const val=(target*p).toFixed(decimals);
        el.textContent = val + suffix;
        if(p<1) requestAnimationFrame(step);
        else el.textContent = target.toFixed(decimals) + suffix;
      };
      if(!window.matchMedia("(prefers-reduced-motion:reduce)").matches) requestAnimationFrame(step);
    });
  },{threshold:.5});
  facts.forEach(f=>obs.observe(f));
}

document.addEventListener("DOMContentLoaded", ()=>{
  const y = document.getElementById("year"); if(y) y.textContent = new Date().getFullYear();
  initLang();
  initHeader();
  initScrollSpy();
  initTimeline();
  initFilters();
  initReveal();
  initCopyEmail();
  initCounters();
  if(window.lucide) lucide.createIcons();
});
