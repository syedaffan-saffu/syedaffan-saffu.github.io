/* ============================================================
   Syed Affan Ali — portfolio interactions + EN/KR localization
   ============================================================ */

const I18N = {
  en: {
    "exp.mobile.intro":"Professional experience developing mobile applications with Flutter and Dart.",
    "exp.research.intro":"Academic and personal projects in robotics, IoT, and applied AI. Select a project for its description, tools, and repository.",
    "exp.tab.mobile":"Mobile Apps",
    "exp.tab.research":"Robotics, IoT & AI",
    "skip":"Skip to content",
    "nav.home":"Home","nav.about":"About","nav.experience":"Experience",
    "nav.projects":"Projects","nav.skills":"Skills","nav.contact":"Contact","nav.resume":"Resume",

    "hero.eyebrow":"Robotics · IoT · Applied AI",
    "hero.role":"Computer Systems Engineering Graduate",
    "hero.lead":"My primary interests are robotics, connected sensing, and applied AI. I build Arduino and ESP32 prototypes and explore how sensor data can support monitoring, mapping, and assistive systems.",
    "hero.cta1":"Explore my work","hero.cta2":"Get in touch",
    "hero.fact1":"Primary interest",
    "hero.fact2":"Connected sensing",
    "hero.fact3":"Selected engineering projects",
    "hero.fact4":"Pakistan · open to opportunities",

    "about.eyebrow":"Profile",
    "about.title":"Robotics, sensing, and intelligent systems.",
    "about.available":"Open to opportunities · Karachi, Pakistan",
    "about.p1":"Computer Systems Engineering graduate focused on robotics, IoT, and applied AI, with hands-on projects in assistive mobility, ultrasonic mapping, and sensor monitoring.",
    "about.p2":"My project work includes integrating sensors and motor control with Arduino and ESP boards, processing measurements in Python, and exploring machine learning for connected systems.",
    "about.p3":"I also have professional experience developing Flutter applications. My main direction for graduate study is to deepen my understanding of robotics, embedded intelligence, and reliable sensing.",
    "about.tag1":"Sensor Integration","about.tag2":"Embedded & IoT","about.tag3":"Robotics","about.tag4":"Applied AI",

    "exp.eyebrow":"Experience",
    "exp.title":"Project experience and professional work.",
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
    "proj.title":"Robotics, IoT, and applied AI projects.",
    "proj.f.all":"All","proj.f.mobile":"Mobile","proj.f.iot":"IoT","proj.f.ai":"AI",
    "proj.viewcode":"View code","proj.viewall":"View all on GitHub",
    "proj.p1.type":"Robotics · Sensing · Mapping",
    "proj.p1.title":"2D Ultrasonic Radar Mapping Prototype (Poor Man's LiDAR)",
    "proj.p1.body":"A low-cost 2D mapping prototype that rotates an HC-SR04 ultrasonic sensor with a stepper motor or servo, streams Angle,Distance readings from Arduino over USB serial, and visualizes the surrounding environment on a live Python polar plot.",
    "proj.p2.type":"IoT · Sensing · Data",
    "proj.p2.title":"Water Quality Monitoring System",
    "proj.p2.body":"Real-time pH, turbidity, and temperature sensing on Arduino, with a Python pipeline for normalization, remote visualization, anomaly detection, and threshold-based alerts.",
    "proj.p3.type":"Assistive Robotics · Control",
    "proj.p3.title":"Gesture-Controlled Smart Robotic Wheelchair",
    "proj.p3.body":"An assistive mobility prototype controlled through hand gestures, combining ESP and Arduino boards with gyroscope, sonar, proximity, and touch sensors, GSM connectivity, battery-management circuits, and responsive motor control.",
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
    "contact.title":"Research interests and opportunities.",
    "contact.intro":"Interested in graduate study and collaboration in robotics, IoT, and applied AI.",
    "contact.copy":"Copy email","contact.copied":"Copied!",

    "footer.rights":"All rights reserved.","footer.top":"Back to top"
  },
  ko: {
    "exp.mobile.intro":"Flutter와 Dart를 활용한 모바일 애플리케이션 개발 실무 경력입니다.",
    "exp.research.intro":"로보틱스, IoT, 응용 AI 분야의 학업 및 개인 프로젝트입니다. 프로젝트를 선택하면 설명, 사용 도구, 저장소를 확인할 수 있습니다.",
    "exp.tab.mobile":"모바일 앱",
    "exp.tab.research":"로보틱스, IoT & AI",
    "skip":"본문으로 건너뛰기",
    "nav.home":"홈","nav.about":"소개","nav.experience":"경력",
    "nav.projects":"프로젝트","nav.skills":"기술","nav.contact":"연락처","nav.resume":"이력서",

    "hero.eyebrow":"로보틱스 · IoT · 응용 AI",
    "hero.role":"컴퓨터 시스템 공학 학사",
    "hero.lead":"주요 관심 분야는 로보틱스, 연결형 센싱, 응용 AI입니다. Arduino와 ESP32 프로토타입을 만들고 센서 데이터를 모니터링, 매핑, 보조 시스템에 활용하는 방법을 탐구합니다.",
    "hero.cta1":"작업물 보기","hero.cta2":"연락하기",
    "hero.fact1":"주요 관심 분야",
    "hero.fact2":"연결형 센싱",
    "hero.fact3":"주요 공학 프로젝트",
    "hero.fact4":"파키스탄 · 기회에 열려 있음",

    "about.eyebrow":"프로필",
    "about.title":"로보틱스, 센싱, 지능형 시스템.",
    "about.available":"기회에 열려 있음 · 파키스탄 카라치",
    "about.p1":"로보틱스, IoT, 응용 AI에 관심을 둔 컴퓨터 시스템 공학 졸업생으로, 보조 이동 장치, 초음파 매핑, 센서 모니터링 프로젝트를 수행했습니다.",
    "about.p2":"Arduino와 ESP 보드에 센서와 모터 제어를 통합하고 Python으로 측정값을 처리하며, 연결형 시스템을 위한 머신러닝을 탐구합니다.",
    "about.p3":"Flutter 애플리케이션을 개발한 실무 경험도 있습니다. 대학원에서는 로보틱스, 임베디드 지능, 신뢰성 있는 센싱에 대한 이해를 심화하고자 합니다.",
    "about.tag1":"센서 통합","about.tag2":"임베디드 & IoT","about.tag3":"로보틱스","about.tag4":"응용 AI",

    "exp.eyebrow":"경력",
    "exp.title":"프로젝트 경험과 실무 경력.",
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
    "proj.title":"로보틱스, IoT, 응용 AI 프로젝트.",
    "proj.f.all":"전체","proj.f.mobile":"모바일","proj.f.iot":"IoT","proj.f.ai":"AI",
    "proj.viewcode":"코드 보기","proj.viewall":"GitHub에서 전체 보기",
    "proj.p1.type":"로보틱스 · 센싱 · 매핑",
    "proj.p1.title":"2D 초음파 레이더 매핑 프로토타입 (저비용 LiDAR)",
    "proj.p1.body":"스테퍼 모터 또는 서보로 HC-SR04 초음파 센서를 회전시키고, Arduino에서 Angle,Distance 측정값을 USB 시리얼로 전송한 뒤 Python 극좌표 그래프로 주변 환경을 실시간 시각화하는 저비용 2D 매핑 프로토타입입니다.",
    "proj.p2.type":"IoT · 센싱 · 데이터",
    "proj.p2.title":"수질 모니터링 시스템",
    "proj.p2.body":"Arduino에서 pH·탁도·온도를 실시간 측정하고, Python 파이프라인으로 정규화·원격 시각화·이상 탐지·임계값 알림을 처리합니다.",
    "proj.p3.type":"보조 로보틱스 · 제어",
    "proj.p3.title":"제스처 제어 스마트 로보틱 휠체어",
    "proj.p3.body":"손 제스처로 제어하는 보조 이동 시스템 프로토타입으로, ESP와 Arduino 보드에 자이로스코프·소나·근접·터치 센서, GSM 통신, 배터리 관리 회로, 반응형 모터 제어를 통합했습니다.",
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
    "contact.title":"연구 관심 분야와 기회.",
    "contact.intro":"로보틱스, IoT, 응용 AI 분야의 대학원 진학 및 협업에 관심이 있습니다.",
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

function initExperienceTabs(){
  const tabs = [...document.querySelectorAll('.experience-tabs [role="tab"]')];
  const activate = (selected)=>{
    tabs.forEach(tab=>{
      const active = tab === selected;
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
      document.getElementById(tab.getAttribute("aria-controls")).hidden = !active;
    });
    refreshTimeline();
  };
  tabs.forEach((tab, index)=>{
    tab.addEventListener("click", ()=>activate(tab));
    tab.addEventListener("keydown", event=>{
      let next;
      if(event.key === "ArrowRight") next = (index + 1) % tabs.length;
      if(event.key === "ArrowLeft") next = (index + tabs.length - 1) % tabs.length;
      if(event.key === "Home") next = 0;
      if(event.key === "End") next = tabs.length - 1;
      if(next === undefined) return;
      event.preventDefault();
      activate(tabs[next]);
      tabs[next].focus();
    });
  });
}

function refreshTimeline(){
  document.querySelectorAll(".timeline-item.open .timeline-details").forEach(details=>{
    details.style.maxHeight = details.scrollHeight + "px";
  });
}

function initFilters(){
  const filters = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll(".project-card");
  document.querySelectorAll('.experience-projects a').forEach(link=>{
    link.addEventListener("click", ()=>{
      document.querySelector('.filter[data-filter="all"]').click();
    });
  });
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
  initExperienceTabs();
  window.addEventListener("resize", refreshTimeline);
  initFilters();
  initReveal();
  initCopyEmail();
  initCounters();
  if(window.lucide) lucide.createIcons();
});
