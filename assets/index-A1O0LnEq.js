(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#039;`)}var t=e;function n(e=[]){return e.map(e=>`<span>${t(e)}</span>`).join(``)}function r(e=[],n=``){let r=n?` class="${n}"`:``;return e.map(e=>`<p${r}>${t(e)}</p>`).join(``)}function i(e){return String(e+1).padStart(2,`0`)}var a={id:`profile`,render:({profile:e})=>`
    <section class="content-panel hero-panel">
      <p class="section-kicker">${t(e.kicker)}</p>
      <h2 dir="ltr">Shraddha Mishra</h2>
      <p class="hero-copy">${t(e.copy)}</p>
      <div class="signal-grid">
        <article><span>${t(e.focusLabel)}</span><strong>${t(e.focusValue)}</strong></article>
        <article><span>${t(e.interestsLabel)}</span><strong>${t(e.interestsValue)}</strong></article>
        <article><span>${t(e.locationLabel)}</span><strong>${t(e.locationValue)}</strong></article>
      </div>
    </section>
  `},o=[{from:`2023`,to:null},{from:`2023`,isBreak:!0},{from:`2022`,to:`2023`},{from:`2019`,to:`2022`},{from:`2022`}];function s(e,t){return e.to===null?`${e.from} — ${t}`:e.to?`${e.from} — ${e.to}`:e.from}var c={id:`experience`,render:({experience:e,ui:n})=>`
    <section class="content-panel experience-panel">
      <header class="experience-heading">
        <p class="section-kicker">${t(e.kicker)}</p>
        <h2>${t(e.title)}</h2>
      </header>

      <div class="career-timeline">
        ${o.map((i,a)=>{let o=e.entries[a];return`
        <article class="career-entry${i.isBreak?` career-break`:``}">
          <div class="career-marker">
            <span class="career-year">${t(s(i,n.present))}</span>
            <span class="career-dot"></span>
          </div>

          <div class="career-details">
            ${i.isBreak?`<span class="career-break-label">${t(e.breakLabel)}</span>`:``}

            <h3>
              ${t(o.title)}
              ${o.org?`<span>· ${t(o.org)}</span>`:``}
            </h3>

            ${r(o.paragraphs)}
          </div>
        </article>`}).join(``)}
      </div>
    </section>
  `},l=`https://scholar.google.com/citations?user=O5pkUdUAAAAJ&hl=en`,u=[{years:`2019 — 2022`,thesis:`QSurfNet: A Hybrid Quantum Convolutional Neural Network for Surface Defect Recognition`,scholarChip:!0},{years:`2014 — 2018`,thesis:`Transfer Learning Implementation in Image Classification with Machine Learning`},{years:`2012 — 2013`,isSchool:!0}],d={id:`education`,render:({education:e})=>`
    <section class="content-panel education-panel">
      <header class="education-heading">
        <p class="section-kicker">${t(e.kicker)}</p>
        <h2>${t(e.title)}</h2>
      </header>

      <div class="education-timeline">
        ${u.map((r,i)=>{let a=e.entries[i],o=r.scholarChip||a.tags.length>0;return`
        <article class="education-entry${r.isSchool?` education-school`:``}">
          <div class="education-marker">
            <span class="education-year">${t(r.years)}</span>
            <span class="education-dot"></span>
          </div>

          <div class="education-details">
            <h3>
              ${t(a.degree)}
              <span>· ${t(a.field)}</span>
            </h3>

            <p class="education-institution">${t(a.institution)}</p>

            ${a.lines.map(e=>`<p>${t(e)}</p>`).join(``)}

            ${r.thesis?`
            <p>
              ${t(e.thesisLabel)}:
              <strong dir="ltr">${t(r.thesis)}</strong>
            </p>`:``}

            ${o?`
            <div class="education-highlights">
              ${r.scholarChip?`
              <a
                href="${l}"
                target="_blank"
                rel="noopener noreferrer"
                title="${t(e.scholarTitle)}"
              >${t(e.publicationsChip)} ↗</a>`:``}
              ${n(a.tags)}
            </div>`:``}
          </div>
        </article>`}).join(``)}
      </div>
    </section>
  `},f=[{from:`2017/08`,to:`2018/06`},{from:`2019/09`,to:`2022/08`},{from:`2022/04`,to:`2022/06`},{from:`2022/09`,to:`2023/03`},{from:`2023/11`,to:null}],p={id:`research`,render:({research:e,ui:r})=>`
    <section class="content-panel research-panel">
      <div class="research-journey">
        <div class="journey-map">
          ${f.map((a,o)=>{var s;let c=e.journey[o];return`
          <article class="journey-entry">
            <div class="journey-range">
              <span class="journey-index">${i(o)}</span>
              <span class="journey-date">${t(a.from)} — ${t((s=a.to)==null?r.present:s)}</span>
            </div>

            <div class="journey-path" aria-hidden="true"></div>

            <div class="journey-body">
              <h3>${t(c.title)} <span>· ${t(c.org)}</span></h3>
              <div class="journey-tags">
                ${n(c.tags)}
              </div>
              <p>${t(c.text)}</p>
            </div>
          </article>`}).join(``)}
        </div>

        <div class="research-heading">
          <p class="section-kicker">${t(e.kicker)}</p>
          <h2>${t(e.title)}</h2>

          <div class="research-future">
            ${e.future.map(e=>`<p>${t(e)}</p>`).join(``)}
          </div>
        </div>
      </div>
    </section>
  `},m=[{name:`TraceFlow`},{name:`QSurfNet`,complete:!0,link:`https://link.springer.com/article/10.1007/s11128-023-03930-5`}],h={id:`projects`,render:({projects:e})=>`
    <section class="content-panel projects-panel">
      <p class="section-kicker">${t(e.kicker)}</p>
      <h2>${t(e.title)}</h2>

      <div class="project-grid">
        ${m.map((i,a)=>{let o=e.items[a];return`
        <article class="project-card">
          <div class="project-status${i.complete?` project-status-complete`:``}">
            <span class="status-dot"></span>
            ${t(o.status)}
          </div>

          <h3 dir="ltr">${t(i.name)}</h3>

          ${r(o.paragraphs)}

          <div class="project-tags">
            ${n(o.tags)}
          </div>

          <p class="project-availability">${t(o.availability)}</p>

          ${i.link?`
          <a
            class="project-link"
            href="${i.link}"
            target="_blank"
            rel="noopener noreferrer"
          >
            ${t(e.viewPublication)}
          </a>`:``}
        </article>`}).join(``)}
      </div>
    </section>
  `},g={displayName:`Shraddha Mishra`,scholarUrl:`https://scholar.google.com/citations?user=O5pkUdUAAAAJ&hl=en`,totalCitations:31,hIndex:2,i10Index:1,generatedAt:`2026-09-08T07:14:53.396821+00:00`,publications:[{title:`QSurfNet: a hybrid quantum convolutional neural network for surface defect recognition: S. Mishra, C.-Y. Tsai`,year:`2023`,citations:25,url:`https://scholar.google.com/citations?view_op=view_citation&hl=en&user=O5pkUdUAAAAJ&citation_for_view=O5pkUdUAAAAJ%3A9yKSN-GCB0IC`},{title:`Design of superior parameterized quantum circuits for quantum image classification`,year:`2022`,citations:6,url:`https://scholar.google.com/citations?view_op=view_citation&hl=en&user=O5pkUdUAAAAJ&citation_for_view=O5pkUdUAAAAJ%3Ad1gkVwhDpl0C`},{title:`QSurfNet: 用於表面缺陷識別的混合量子卷積神經網絡.`,year:`2022`,citations:0,url:`https://scholar.google.com/citations?view_op=view_citation&hl=en&user=O5pkUdUAAAAJ&citation_for_view=O5pkUdUAAAAJ%3AqjMakFHDy7sC`}]};function _(e,n){var r,i;let a=t(e.title),o=e.year||n.yearUnavailable,s=(r=e.citations)==null?0:r,c=(i=e.url)==null?void 0:i.trim(),l=c?`
      <a
        href="${t(c)}"
        target="_blank"
        rel="noopener noreferrer"
      >
        ${a}
      </a>
    `:a;return`
    <article class="publication-entry">
      <span class="publication-index">${t(o)}</span>

      <div class="publication-details">
        <h3 dir="auto">${l}</h3>

        <div class="publication-meta">
          <span>${t(s)} ${t(n.citations)}</span>
        </div>
      </div>
    </article>
  `}function v(e){return`
    <div class="scholar-metrics">
      <article>
        <span>${t(e.totalCitations)}</span>
        <strong>${t(g.totalCitations)}</strong>
      </article>

      <article>
        <span dir="ltr">h-index</span>
        <strong>${t(g.hIndex)}</strong>
      </article>

      <article>
        <span dir="ltr">i10-index</span>
        <strong>${t(g.i10Index)}</strong>
      </article>
    </div>
  `}function y(e){return g.scholarUrl?`
    <a
      class="scholar-profile-link"
      href="${t(g.scholarUrl)}"
      target="_blank"
      rel="noopener noreferrer"
    >
      ${t(e.viewScholar)}
    </a>
  `:``}var b={id:`publications`,render:({publications:e})=>{var n;let r=(n=g.publications)==null?[]:n,i=r.length?r.map(t=>_(t,e)).join(``):`
        <article class="publication-empty">
          <p>${t(e.none)}</p>
        </article>
      `;return`
      <section class="content-panel publications-panel">
        <header class="publications-heading">
          <p class="section-kicker">${t(e.kicker)}</p>
          <h2>${t(e.title)}</h2>

          ${v(e)}
          ${y(e)}
        </header>

        <div class="publication-list">
          ${i}
        </div>
      </section>
    `}},x=4,S=[a,c,d,b,p,h,{id:`skills`,render:({skills:e})=>`
    <section class="content-panel skills-panel">
      <header class="skills-heading">
        <p class="section-kicker">${t(e.kicker)}</p>
        <h2>${t(e.title)}</h2>

        <div class="core-strengths" aria-label="${t(e.strengthsLabel)}">
          ${n(e.strengths)}
        </div>

        ${r(e.intro,`skills-introduction`)}
      </header>

      <div class="skills-matrix">
        ${e.groups.map((e,r)=>`
        <article class="skill-group${r===x?` skill-group-ai`:``}">
          <span class="skill-index">${i(r)}</span>

          <div>
            <h3>${t(e.title)}</h3>
            <p>${t(e.text)}</p>

            <div class="skill-tags">
              ${n(e.tags)}
            </div>
          </div>
        </article>`).join(``)}
      </div>
    </section>
  `},{id:`personality`,render:({personality:e})=>`
    <section class="content-panel personality-panel">
      <header class="personality-heading">
        <p class="section-kicker">${t(e.kicker)}</p>
        <h2>${t(e.title)}</h2>

        <p class="personality-summary">${t(e.summary)}</p>
      </header>

      <div class="personality-grid">
        ${e.cards.map((r,a)=>`
        <article class="personality-card${a===e.cards.length-1?` personality-card-featured`:``}">
          <span class="personality-index">${i(a)}</span>

          <div>
            <h3>${t(r.title)}</h3>

            <p>${t(r.text)}</p>

            <div class="personality-tags">
              ${n(r.tags)}
            </div>
          </div>
        </article>`).join(``)}
      </div>
    </section>
  `},{id:`contact`,render:({contact:e})=>`
    <section class="content-panel contact-panel">
      <p class="section-kicker">${t(e.kicker)}</p>
      <h2>${t(e.title)}</h2>

      <p class="contact-intro">${t(e.intro)}</p>

      <div class="contact-links">
        <a
          href="mailto:its.shraddha.mishra@gmail.com"
          class="contact-link"
        >
          <span class="contact-link-label">${t(e.email)}</span>
          <span class="contact-link-detail" dir="ltr">
            its.shraddha.mishra@gmail.com
          </span>
        </a>

        <a
          href="https://github.com/ItsShraddhaMishra"
          class="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="contact-link-label" dir="ltr">GitHub</span>
          <span class="contact-link-detail" dir="ltr">
            ItsShraddhaMishra
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/shraddha-mishra-b25728186/"
          class="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="contact-link-label" dir="ltr">LinkedIn</span>
          <span class="contact-link-detail" dir="ltr">
            Shraddha Mishra
          </span>
        </a>
      </div>
    </section>
  `}];function C(e){if(!e)return{start(){},stop(){}};let t=e.getContext(`2d`),n=[`$`,`€`,`£`,`¥`,`₹`,`₩`,`₽`,`₿`,`﷼`,`₪`,`₫`,`฿`,`₦`,`₱`],r=1500,i=window.matchMedia(`(pointer: coarse)`).matches?1.5:2,a=[],o=0,s=0,c=null,l=null,u=null,d=null,f=!1;function p(){return document.documentElement.dataset.theme||`dark`}function m(){return p()===`light`?`#ff3f95`:`#28ff78`}function h(){return p()===`light`?`rgba(255, 249, 252, 0.15)`:`rgba(0, 0, 0, 0.09)`}function g(){return p()===`light`?`rgba(255, 249, 252, 0.96)`:`rgba(3, 16, 9, 0.96)`}function _(n=!1){let r=e.getBoundingClientRect();if(r.width<2||r.height<2||!n&&Math.abs(r.width-o)<1&&Math.abs(r.height-s)<140)return;o=r.width,s=r.height;let c=Math.min(window.devicePixelRatio||1,i);e.width=Math.max(1,Math.floor(r.width*c)),e.height=Math.max(1,Math.floor(r.height*c)),t.setTransform(c,0,0,c,0,0);let l=Math.max(1,Math.floor(r.width/14));a.length!==l&&(a=Array.from({length:l},()=>Math.floor(Math.random()*-40))),d&&(d.x=Math.min(d.x,Math.max(d.radius,r.width-d.radius)))}function v(e,n,r){let i=m();t.save(),t.fillStyle=i,t.font=`14px "Share Tech Mono", "Segoe UI Symbol", "Noto Sans Symbols 2", monospace`,t.textAlign=`left`,t.textBaseline=`alphabetic`,t.shadowColor=i,t.shadowBlur=2,t.fillText(r,e,n),t.restore()}function y(){if(!f||d)return;let t=e.clientWidth;d={x:12+Math.random()*Math.max(1,t-24),y:-24,previousX:null,previousY:null,radius:12,fallSpeed:4.8+Math.random()*1.2,flipPhase:Math.random()*Math.PI*2,flipSpeed:.58+Math.random()*.22,drift:(Math.random()-.5)*.35}}function b(){if(!f)return;u!==null&&window.clearTimeout(u);let e=r+Math.random()*(4e3-r);u=window.setTimeout(()=>{y(),u=null},e)}function x(){if(!d||d.previousX===null||d.previousY===null)return;let e=d.radius*1.55;t.save(),t.fillStyle=g(),t.beginPath(),t.arc(d.previousX,d.previousY,e,0,Math.PI*2),t.fill(),t.restore()}function S(){if(!d)return;x();let n=Math.cos(d.flipPhase),r=Math.max(.14,Math.abs(n)),i=n>=0;t.save(),t.translate(d.x,d.y),t.scale(r,1),t.shadowColor=`rgba(255, 220, 90, 0.95)`,t.shadowBlur=i?18:10;let a=t.createRadialGradient(-4,-5,1,0,0,d.radius);a.addColorStop(0,`#fff9cf`),a.addColorStop(.18,`#ffe98a`),a.addColorStop(.45,`#ffd447`),a.addColorStop(.75,`#f3b51f`),a.addColorStop(1,`#d89400`),t.beginPath(),t.arc(0,0,d.radius,0,Math.PI*2),t.fillStyle=a,t.fill(),t.lineWidth=1.6,t.strokeStyle=`rgba(255, 247, 186, 0.95)`,t.stroke(),t.beginPath(),t.arc(0,0,d.radius*.72,0,Math.PI*2),t.lineWidth=1,t.strokeStyle=`rgba(255, 231, 120, 0.75)`,t.stroke(),r>.35&&(t.shadowBlur=0,t.fillStyle=`rgba(168, 95, 0, 0.9)`,t.font=`bold ${d.radius+1}px "Segoe UI Symbol", sans-serif`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(i?`$`:`₿`,0,1)),t.beginPath(),t.fillStyle=`rgba(255, 255, 255, 0.42)`,t.arc(-d.radius*.28,-d.radius*.34,d.radius*.18,0,Math.PI*2),t.fill(),t.restore(),d.previousX=d.x,d.previousY=d.y,d.flipPhase+=d.flipSpeed,d.y+=d.fallSpeed,d.x+=d.drift,d.y>e.clientHeight+d.radius*2&&(d=null,b())}function C(){let r=e.clientWidth,i=e.clientHeight;t.fillStyle=h(),t.fillRect(0,0,r,i);for(let e=0;e<a.length;e+=1){let t=e*14,r=a[e]*14,o=n[Math.floor(Math.random()*n.length)];v(t,r,o),r>i&&Math.random()>.975&&(a[e]=0),a[e]+=1}S()}function w(){f||(f=!0,_(),C(),l=window.setInterval(C,63),b())}function T(){f=!1,l!==null&&(window.clearInterval(l),l=null),u!==null&&(window.clearTimeout(u),u=null)}function E(){T(),d=null,t.clearRect(0,0,e.clientWidth,e.clientHeight)}function D(){window.clearTimeout(D.timeoutId),D.timeoutId=window.setTimeout(()=>_(),160)}return`ResizeObserver`in window?(c=new ResizeObserver(D),c.observe(e)):window.addEventListener(`resize`,D),{start:w,pause:T,stop:E}}var w={meta:{title:`Shraddha Mishra | ML Systems Researcher & R&D Engineer`},ui:{digitalCv:`DIGITAL CV`,navigation:`CV navigation`,sections:`CV sections`,downloadCv:`Download Her CV`,toggleTheme:`Toggle Theme`,switchToLight:`Switch to light theme`,switchToDark:`Switch to dark theme`,themeDark:`Dark · Green / Black`,themeLight:`Light · White / Pink`,language:`Language`,chooseLanguage:`Choose language`,openNavigation:`Open navigation`,closeNavigation:`Close navigation`,present:`Present`},menu:{profile:`Profile`,experience:`Experience`,education:`Education`,publications:`Publications`,research:`Research`,projects:`Projects`,skills:`Skills`,personality:`Personality`,contact:`Contact`},profile:{kicker:`Research · System Design · FinTech`,copy:`Machine-learning systems researcher building reproducible infrastructure, experimental frameworks, and dependable technical systems.`,focusLabel:`Focus`,focusValue:`ML Systems`,interestsLabel:`Interests`,interestsValue:`Systems Design; Financial Decision Systems; Decision-Making under Uncertainty`,locationLabel:`Location`,locationValue:`Taiwan / Remote`},experience:{kicker:`Professional Timeline`,title:`Experience`,breakLabel:`Planned Transition`,entries:[{title:`Research Assistant`,org:`Academia Sinica`,paragraphs:[`Researching machine-learning approaches for side-channel analysis and cryptographic threats.`,`Designed and implemented an autonomous, YAML-policy-driven MLOps system for reproducible experimentation, controlled execution, and failure analysis.`]},{title:`Career Break`,org:``,paragraphs:[`Undertook a planned career break to return from industry to research and to realign my work with long-term academic goals.`]},{title:`Natural Language Processing Engineer`,org:`Aiello Inc.`,paragraphs:[`Developed and maintained backend APIs and service scripts for the company’s ChatGPT-based SaaS product, VOCOL.`,`Contributed to algorithm-level performance improvements, major Docker image-size reduction, CI/CD efficiency, deployment reliability, and secure secret handling.`]},{title:`Research Assistant`,org:`Robotic Vision Lab, Tamkang University`,paragraphs:[`Initiated the department’s exploratory research direction in quantum computing for computer vision.`,`Designed parameterized quantum circuits and integrated a selected QCNN layer into a hybrid quantum-classical architecture, resulting in QSurfNet.`]},{title:`Deep Learning Engineer`,org:`Statement Cloud Digital Technology`,paragraphs:[`Developed datasets, an image-recognition prototype, and model training and monitoring components for automated Taiwanese receipt recognition.`]}]},education:{kicker:`Academic Foundation`,title:`Education`,thesisLabel:`Thesis`,publicationsChip:`2 Publications`,scholarTitle:`Open Google Scholar profile`,entries:[{degree:`Master of Engineering`,field:`Artificial Intelligence & Internet of Things`,institution:`Tamkang University · Taiwan`,lines:[`Robotic Vision Lab under Professor Chi-Yi Tsai.`,`GPA: 3.906 / 4 · Cumulative Percentage: 88.99% · Thesis Score: 91 / 100`],tags:[`Quantum Machine Learning`,`Computer Vision`]},{degree:`Bachelor of Engineering`,field:`Electrical & Electronics Engineering`,institution:`Bhilai Institute of Technology · India`,lines:[`Cumulative Performance Index: 7.59`,`Research Supervisor: Professor Mukesh Kumar Chandrakar`],tags:[]},{degree:`Senior Secondary Education`,field:`Central Board of Secondary Education`,institution:`Allahabad Public School · Prayagraj, India`,lines:[`Final Percentage: 87%`],tags:[]}]},research:{kicker:`Research Direction`,title:`Research`,journey:[{title:`Early Adopter`,org:`Bachelor’s Final-Year Project`,tags:[`Pattern Recognition`,`AI`],text:`In my final year of undergraduate study, I turned to artificial intelligence and completed an introductory project on image classification. That experience first directed me toward pattern recognition as a research direction.`},{title:`Master’s Research`,org:`Tamkang University`,tags:[`Quantum Machine Learning`,`Computer Vision`],text:`During my master’s degree, I examined whether quantum computing could meaningfully improve pattern-recognition systems. My results indicated that it can, particularly for image data, leading to my work on hybrid quantum-classical learning for visual recognition.`},{title:`Deep Learning Engineer`,org:`StatementCloud`,tags:[`Project Planning`,`Computer Vision`,`Automation`],text:`At StatementCloud, I worked on receipt-scanning software, developed datasets, and contributed to the design of a tailored solution for users. This experience deepened my understanding of project planning, automation, APIs, and the systematic engineering that real-world computer-vision systems require.`},{title:`NLP MLOps Engineer`,org:`Aiello`,tags:[`MLOps`,`Automation`,`Production ML`],text:`At Aiello, I gained my first substantial exposure to MLOps. I learned how larger ML products are organized, maintained, automated, and deployed in production environments, strengthening my interest in operationally stable machine-learning systems.`},{title:`Research Assistant`,org:`Academia Sinica`,tags:[`System Development`,`Reproducible Research`,`Security ML`],text:`At Academia Sinica, I observed a research-infrastructure gap in the side-channel analysis community, particularly around extensibility, automation, and reproducibility. That led me to design and build TraceFlow, a system intended to support more rigorous and scalable experimentation.`}],future:[`My work has progressed steadily from building AI models to building dependable systems around them. Across research and industry, I have developed strengths in independent project execution, applied automation, and stable AI-system development.`,`I intend to investigate autonomous decision-making under uncertainty and to engineer systems that operate reliably on difficult, assumption-violating data. Financial data is my intended testbed for this work, because it demands robustness, adaptive reasoning, and disciplined execution under risk.`]},projects:{kicker:`Selected Research Systems`,title:`Projects`,viewPublication:`View Publication`,items:[{status:`Active Development`,paragraphs:[`An extensible research framework for reproducible deep-learning side-channel analysis.`,`TraceFlow coordinates experiment configuration, dataset handling, model execution, evaluation, artifact management, and automated model selection through a modular and policy-driven system.`],tags:[`Research Infrastructure`,`MLOps`,`Side-Channel Analysis`,`Reproducibility`],availability:`Paper in preparation. Source code will be released following publication.`},{status:`Published Research`,paragraphs:[`A hybrid quantum-classical convolutional neural network developed during my master’s research for surface-defect recognition.`,`The project investigated whether parameterized quantum circuits could improve image-feature extraction when a quantum convolutional neural layer is integrated with a classical convolutional architecture.`],tags:[`Quantum Machine Learning`,`Computer Vision`,`Hybrid Neural Networks`,`Surface Inspection`],availability:`Research results are publicly available through the associated publications. The original research implementation is not currently released as a public repository.`}]},publications:{kicker:`Research Output`,title:`Publications`,totalCitations:`Total Citations`,citations:`citations`,yearUnavailable:`Year unavailable`,viewScholar:`View Google Scholar Profile`,none:`No publications are currently available.`},skills:{kicker:`Technical Capability`,title:`Skills`,strengthsLabel:`Core technical strengths`,strengths:[`System Architecture`,`Validation`,`Debugging`,`Disciplined Execution`,`Structure & Organization`,`Automation`],intro:[`I build research and software systems across languages and technology stacks. My primary strength is not attachment to a single language, but the ability to translate a technical vision into a structured, testable, and maintainable implementation.`,`I work extensively with AI coding agents as engineering collaborators: defining architecture, decomposing requirements, reviewing generated code, identifying failures, validating behavior, and integrating each component into the wider system.`],groups:[{title:`Systems & Software Development`,text:`Modular architecture, requirements decomposition, interface design, refactoring, debugging, validation, and maintainable implementation.`,tags:[`System Architecture`,`Modular Design`,`API Design`,`Testing`,`Debugging`,`Code Review`]},{title:`Programming & Application Development`,text:`Active development across scientific computing, systems programming, automation, and browser-based applications.`,tags:[`Python`,`C++`,`JavaScript`,`HTML`,`CSS`,`Shell`,`SQL`]},{title:`Machine Learning & Research Engineering`,text:`Development of reproducible ML experiments, research pipelines, model-evaluation workflows, and scientific software.`,tags:[`PyTorch`,`Deep Learning`,`Computer Vision`,`Experiment Design`,`Model Evaluation`,`Scientific Computing`]},{title:`MLOps & Automation`,text:`Automation of experiments, builds, deployments, artifact management, configuration, and repeatable development workflows.`,tags:[`Docker`,`Linux`,`Git`,`GitHub Actions`,`CI/CD`,`YAML`,`Experiment Tracking`,`Artifact Management`]},{title:`AI-Augmented Engineering`,text:`Direction of AI coding agents throughout the software lifecycle, with retained responsibility for architecture, correctness, security, integration, and final technical decisions.`,tags:[`Agentic Development`,`Prompted Implementation`,`Code Verification`,`Failure Analysis`,`Iterative Refactoring`,`Human-in-the-Loop Engineering`]},{title:`Research Communication`,text:`Technical documentation, experimental reporting, publication development, and clear communication of complex system behavior.`,tags:[`LaTeX`,`Scientific Writing`,`Technical Documentation`,`Vector Graphics`,`Data Visualization`]}]},personality:{kicker:`Working Style`,title:`Personality`,summary:`I am a perceptive, independent, and highly structured technical professional. I work best when given clear ownership of a meaningful problem and sufficient space to examine it deeply.`,cards:[{title:`Independent Execution`,text:`I am comfortable taking responsibility for a project from initial architecture through implementation, validation, refinement, and final delivery.`,tags:[`Autonomy`,`Execution Ownership`,`Disciplined Execution`]},{title:`Deep Technical Focus`,text:`I produce my strongest work in quiet, low-interruption environments where I can maintain context, investigate complex behavior, and build coherent solutions without unnecessary fragmentation.`,tags:[`Deep Work`,`Sustained Focus`,`Context Retention`]},{title:`Structured Problem Solving`,text:`I naturally organize complex work into clear components, interfaces, dependencies, and validation stages. I prefer systems that are understandable, traceable, and deliberately designed.`,tags:[`Systematic Thinking`,`Structure & Organization`,`Separation of Concerns`]},{title:`Quality Awareness`,text:`I notice inconsistencies quickly and tend to investigate them until the underlying cause is understood. I value correctness, maintainability, and evidence over superficial completion.`,tags:[`Validation`,`Debugging`,`Quality Control`]},{title:`High Context Sensitivity`,text:`I am sensitive to subtle changes in systems, environments, and communication. In technical work, this helps me identify small discrepancies, hidden assumptions, and points of friction that may otherwise be overlooked.`,tags:[`Pattern Awareness`,`Attention to Detail`,`Context-Aware Design`]},{title:`Focused Collaboration`,text:`I collaborate best through clear objectives, thoughtful technical discussion, written documentation, and defined responsibilities. I prefer purposeful communication over frequent meetings or continuously interrupted workflows.`,tags:[`Clear Communication`,`Documentation`,`Focused Collaboration`]},{title:`Human-Centered Engineering`,text:`I pair analytical discipline with empathy for the people who use, maintain, and depend on technical systems. I care not only about whether a system works, but also about whether it is understandable, dependable, and practical for its intended users.`,tags:[`Empathy`,`User Awareness`,`Responsible Engineering`]}]},contact:{kicker:`Research & Professional Inquiries`,title:`Contact`,intro:`Open to research collaboration, technical discussion, and opportunities involving machine-learning systems, reproducible research, and autonomous decision-making.`,email:`Email`}},T=`modulepreload`,E=function(e){return`/`+e},D={},O=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute(`nonce`));function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=E(t,n),t=s(t),t in D)return;D[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:T,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},k=[{code:`en`,name:`English`,lang:`en`,dir:`ltr`},{code:`zh-TW`,name:`繁體中文`,lang:`zh-Hant-TW`,dir:`ltr`},{code:`zh-CN`,name:`简体中文`,lang:`zh-Hans-CN`,dir:`ltr`},{code:`de`,name:`Deutsch`,lang:`de`,dir:`ltr`},{code:`de-CH`,name:`Deutsch (Schweiz)`,lang:`de-CH`,dir:`ltr`},{code:`ru`,name:`Русский`,lang:`ru`,dir:`ltr`},{code:`ar`,name:`العربية`,lang:`ar`,dir:`rtl`},{code:`es`,name:`Español`,lang:`es`,dir:`ltr`}],ee={"zh-TW":()=>O(()=>import(`./zh-TW-CTFFgU9i.js`),[]),"zh-CN":()=>O(()=>import(`./zh-CN-Is0PX8s8.js`),[]),de:()=>O(()=>import(`./de-fl2Ql0Nb.js`),[]),"de-CH":()=>O(()=>import(`./de-CH-WiYgo9MM.js`),[]),ru:()=>O(()=>import(`./ru-QtimeZBK.js`),[]),ar:()=>O(()=>import(`./ar-CzagKh-A.js`),[]),es:()=>O(()=>import(`./es-CnfE7Tw_.js`),[])},A=`digital-cv-language`,j={en:w},M=new Set,N=`en`,P=w;function F(e){return k.some(t=>t.code===e)}function te(e){let t=String(e||``).toLowerCase();if(!t)return null;if(t.startsWith(`zh`))return t.includes(`hant`)||t.endsWith(`-tw`)||t.endsWith(`-hk`)||t.endsWith(`-mo`)?`zh-TW`:`zh-CN`;if(t===`de-ch`||t===`gsw`||t.startsWith(`gsw-`))return`de-CH`;let n=t.split(`-`)[0],r=k.find(e=>e.code.toLowerCase()===n);return r?r.code:null}function I(){var e;try{let e=localStorage.getItem(A);if(e&&F(e))return e}catch{}let t=(e=navigator.languages)!=null&&e.length?navigator.languages:[navigator.language];for(let e of t){let t=te(e);if(t)return t}return`en`}function L(){return N}function R(){return P}function z(e){var t,n;let r=t=>e.split(`.`).reduce((e,t)=>e==null?void 0:e[t],t);return(t=(n=r(P))==null?r(w):n)==null?e:t}function ne(e){return M.add(e),()=>M.delete(e)}function re(e){var t,n,r;let i=(t=k.find(t=>t.code===e))==null?k[0]:t,a=document.documentElement;a.lang=i.lang,a.dataset.locale=i.code,a.dataset.dir=i.dir,document.title=(n=(r=P.meta)==null?void 0:r.title)==null?w.meta.title:n}async function B(e,{remember:t=!0}={}){let n=F(e)?e:`en`;if(!j[n])try{j[n]=(await ee[n]()).default}catch(e){return console.error(`Could not load language "${n}".`,e),N}if(N=n,P=j[n],re(n),t)try{localStorage.setItem(A,n)}catch{}return M.forEach(e=>e(n)),n}function ie(e=document){e.querySelectorAll(`[data-i18n]`).forEach(e=>{e.textContent=z(e.dataset.i18n)}),e.querySelectorAll(`[data-i18n-attr]`).forEach(e=>{e.dataset.i18nAttr.split(`,`).forEach(t=>{let[n,r]=t.split(`:`).map(e=>e.trim());n&&r&&e.setAttribute(n,z(r))})})}function V({target:e,sections:t,onSelect:n}){let r=document.createDocumentFragment();return t.forEach((t,i)=>{let a=document.createElement(`button`);a.type=`button`,a.className=`menu-item`,a.dataset.section=t.id;let o=document.createElement(`span`);o.className=`menu-index`,o.textContent=String(i+1).padStart(2,`0`);let s=document.createElement(`span`);s.className=`menu-label`,s.textContent=z(`menu.${t.id}`),a.append(o,s),a.addEventListener(`mouseenter`,()=>{a.classList.add(`is-previewing`)}),a.addEventListener(`mouseleave`,()=>{a.classList.remove(`is-previewing`)}),a.addEventListener(`click`,()=>{e.querySelectorAll(`.menu-item`).forEach(e=>{e.classList.toggle(`is-active`,e===a)}),n(t.id)}),i===0&&a.classList.add(`is-active`),r.appendChild(a)}),e.replaceChildren(r),H(),{relabel(){e.querySelectorAll(`.menu-item`).forEach(e=>{let t=e.querySelector(`.menu-label`);t&&(t.textContent=z(`menu.${e.dataset.section}`))})}}}function H(){let e=document.querySelector(`#matrix-rain`);if(!e||e.dataset.matrixStarted===`true`)return;e.dataset.matrixStarted=`true`;let t=C(e),n=!1,r=()=>{n&&!document.hidden?t.start():t.pause()};`IntersectionObserver`in window?new IntersectionObserver(e=>{n=e.some(e=>e.intersectionRatio>.02),r()},{threshold:[0,.02,.1]}).observe(e):n=!0,document.addEventListener(`visibilitychange`,r),r()}var U=170,W=.3,G=30,K=48,q=.6,J=6,ae=1.4,Y=.3,oe=.25;function se(e){if(!e)return{open(){},close(){},relabel(){}};let t=document.documentElement,n=document.querySelector(`#drawer-handle`),r=!1,i=0,a=0,o=()=>{let n=getComputedStyle(e).getPropertyValue(`--drawer-peek`),r=parseFloat(getComputedStyle(t).fontSize);return(parseFloat(n)||1)*r},s=()=>Math.max(1,e.offsetWidth-o()),c=e=>{i=Math.min(1,Math.max(0,e)),!a&&(a=requestAnimationFrame(()=>{a=0,t.style.setProperty(`--drawer-pull`,i.toFixed(3))}))},l=t=>{e.classList.toggle(`is-dragging`,t),n==null||n.classList.toggle(`is-dragging`,t)},u=()=>{n==null||n.setAttribute(`aria-label`,z(r?`ui.closeNavigation`:`ui.openNavigation`))},d=t=>{r=t,e.classList.toggle(`is-open`,t),l(!1),c(+!!t),n&&(n.classList.toggle(`is-open`,t),n.setAttribute(`aria-expanded`,String(t)),u())};window.addEventListener(`pointermove`,t=>{if(t.pointerType!==`mouse`)return;let n=t.clientX;if(r){n>e.offsetWidth+K&&d(!1);return}let i=n-o();if(i<=G){d(!0);return}if(i>=U){c(0);return}let a=1-(i-G)/(U-G);c(W*a*a)},{passive:!0}),t.addEventListener(`mouseleave`,()=>{d(!1)});let f=null,p=0;window.addEventListener(`touchstart`,t=>{if(t.touches.length!==1){f=null;return}let i=t.touches[0],a=!!(n&&n.contains(t.target)),o=e.contains(t.target),s=i.clientX<=window.innerWidth*q;if(!r&&!s&&!a){f=null;return}f={startX:i.clientX,startY:i.clientY,lastX:i.clientX,lastTime:t.timeStamp,velocity:0,startPull:+!!r,dragging:!1,insideDrawer:o,onHandle:a}},{passive:!0}),window.addEventListener(`touchmove`,e=>{if(!f)return;let t=e.touches[0],n=t.clientX-f.startX,i=t.clientY-f.startY;if(!f.dragging){if(Math.abs(n)<J&&Math.abs(i)<J)return;let a=Math.abs(i)<=Math.abs(n)*ae,o=f.onHandle||(r?n<0:n>0);if(!a||!o){f=null;return}f.dragging=!0,f.startX=t.clientX,f.lastX=t.clientX,f.lastTime=e.timeStamp,l(!0)}e.cancelable&&e.preventDefault();let a=Math.max(1,e.timeStamp-f.lastTime),o=(t.clientX-f.lastX)/a;f.velocity=f.velocity*.4+o*.6,f.lastX=t.clientX,f.lastTime=e.timeStamp,c(f.startPull+(t.clientX-f.startX)/s())},{passive:!1});let m=e=>{if(Math.abs(e)>oe){d(e>0);return}d(r?i>1-Y:i>Y)};return window.addEventListener(`touchend`,e=>{if(!f)return;let t=f;if(f=null,t.dragging){m(t.velocity),p=e.timeStamp+400;return}if(!t.onHandle){if(!r&&t.insideDrawer){d(!0),e.preventDefault();return}r&&!t.insideDrawer&&d(!1)}}),window.addEventListener(`touchcancel`,()=>{f!=null&&f.dragging&&m(f.velocity),f=null}),window.addEventListener(`click`,e=>{e.timeStamp<p&&(e.preventDefault(),e.stopPropagation())},!0),n==null||n.addEventListener(`click`,()=>{d(!r)}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&r&&d(!1)}),e.classList.add(`has-magnet`),n==null||n.classList.add(`is-ready`),{open:()=>d(!0),close:()=>d(!1),relabel:u}}function ce({toggle:e,menu:t}){if(!e||!t)return{relabel(){}};let n=!1;function r(r){n=r,t.hidden=!r,e.setAttribute(`aria-expanded`,String(r)),e.classList.toggle(`is-open`,r)}function i(){let e=L();t.querySelectorAll(`.language-option`).forEach(t=>{let n=t.dataset.locale===e;t.classList.toggle(`is-current`,n),t.setAttribute(`aria-checked`,String(n))})}k.forEach(n=>{let i=document.createElement(`button`);i.type=`button`,i.className=`language-option`,i.dataset.locale=n.code,i.setAttribute(`role`,`menuitemradio`),i.setAttribute(`lang`,n.lang),i.setAttribute(`dir`,n.dir),i.textContent=n.name,i.addEventListener(`click`,async()=>{r(!1),i.classList.add(`is-loading`),await B(n.code),i.classList.remove(`is-loading`),e.focus({preventScroll:!0})}),t.appendChild(i)}),e.addEventListener(`click`,e=>{if(e.stopPropagation(),r(!n),n){var i,a;(i=(a=t.querySelector(`.is-current`))==null?t.firstElementChild:a)==null||i.focus({preventScroll:!0})}}),document.addEventListener(`click`,i=>{n&&!t.contains(i.target)&&i.target!==e&&r(!1)}),t.addEventListener(`keydown`,n=>{let i=[...t.querySelectorAll(`.language-option`)],a=i.indexOf(document.activeElement);n.key===`Escape`?(n.stopPropagation(),r(!1),e.focus({preventScroll:!0})):(n.key===`ArrowDown`||n.key===`ArrowUp`)&&(n.preventDefault(),i[(a+(n.key===`ArrowDown`?1:-1)+i.length)%i.length].focus({preventScroll:!0}))});function a(){e.setAttribute(`aria-label`,z(`ui.chooseLanguage`)),e.setAttribute(`title`,z(`ui.language`)),t.setAttribute(`aria-label`,z(`ui.chooseLanguage`)),i()}return r(!1),a(),{relabel:a}}var X={dark:{nameKey:`ui.themeDark`,switchKey:`ui.switchToLight`,next:`light`},light:{nameKey:`ui.themeLight`,switchKey:`ui.switchToDark`,next:`dark`}};function le({toggle:e,label:t}){let n=localStorage.getItem(`digital-cv-theme`),r=n&&X[n]?n:`dark`;function i(){let n=X[r];t.textContent=z(n.nameKey),e.setAttribute(`aria-label`,z(n.switchKey)),e.setAttribute(`title`,z(`ui.toggleTheme`))}function a(e){r=e,document.documentElement.dataset.theme=e,i(),localStorage.setItem(`digital-cv-theme`,e)}return e.addEventListener(`click`,()=>{a(X[r].next)}),a(r),{relabel:i}}var Z=document.querySelector(`#main-view`),ue=document.querySelector(`#section-menu`),de=document.querySelector(`#theme-toggle`),fe=document.querySelector(`#theme-name`),Q=`profile`;function $(){var e;let t=(e=S.find(e=>e.id===Q))==null?S[0]:e;Z.innerHTML=t.render(R()),Z.dataset.section=t.id}function pe(e){Q=e,Z.classList.add(`is-changing`),window.setTimeout(()=>{$(),Z.classList.remove(`is-changing`),Z.focus({preventScroll:!0})},140)}async function me(){await B(I(),{remember:!1});let e=se(document.querySelector(`#cv-drawer`)),t=window.matchMedia(`(hover: none), (pointer: coarse)`),n=V({target:ue,sections:S,onSelect:n=>{pe(n),t.matches&&e.close()}}),r=le({toggle:de,label:fe}),i=ce({toggle:document.querySelector(`#language-toggle`),menu:document.querySelector(`#language-menu`)});function a(){ie(),n.relabel(),r.relabel(),i.relabel(),e.relabel(),$()}ne(a),a()}me();