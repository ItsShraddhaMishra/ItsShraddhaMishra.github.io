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
  `},o=[{text:0,from:`2023`,to:`2026`,supervisor:{name:`Prof. Dr. Ruben Niederhagen`,url:`https://scholar.google.com/citations?user=mPNOzDAAAAAJ&hl=en`}},{text:1,from:`2023`,isBreak:!0},{text:2,from:`2022`,to:`2023`},{text:4,from:`2022`},{text:3,from:`2019`,to:`2022`,supervisor:{name:`Prof. Dr. Chi-Yi Tsai`,url:`https://scholar.google.com/citations?user=WbEw0RQAAAAJ&hl=en`}}];function s(e,t){return e.to===null?`${e.from} – ${t}`:e.to?`${e.from} – ${e.to}`:e.from}function c(e,n){return`
            <p class="career-meta">
              <span class="career-meta-label">${t(n)}:</span>
              <a
                href="${e.url}"
                target="_blank"
                rel="noopener noreferrer"
                dir="ltr"
              >${t(e.name)}</a>
            </p>`}var l={id:`experience`,render:({experience:e,ui:i})=>`
    <section class="content-panel experience-panel">
      <header class="experience-heading">
        <p class="section-kicker">${t(e.kicker)}</p>
        <h2>${t(e.title)}</h2>

        <div class="field-path">
          <p class="field-path-label">${t(e.fieldsLabel)}</p>
          <ol>
            ${e.fields.map(e=>`
            <li class="field-chip">${t(e)}</li>
            <li class="field-arrow" aria-hidden="true">↓</li>`).join(``)}
            <li class="field-chip field-path-next">
              <span>${t(e.nextLabel)}</span>
              ${t(e.nextField)}
            </li>
          </ol>
        </div>
      </header>

      <div class="career-timeline">
        ${o.map(a=>{let o=e.entries[a.text];return`
        <article class="career-entry${a.isBreak?` career-break`:``}">
          <div class="career-marker">
            <span class="career-year">${t(s(a,i.present))}</span>
            <span class="career-dot"></span>
          </div>

          <div class="career-details">
            ${a.isBreak?`<span class="career-break-label">${t(e.breakLabel)}</span>`:``}

            <h3>
              ${t(o.title)}
              ${o.org?`<span>· ${t(o.org)}</span>`:``}
            </h3>

            ${o.field?`<p class="career-field">${t(o.field)}</p>`:``}

            ${a.supervisor?c(a.supervisor,e.supervisorLabel):``}

            ${o.lab?`
            <p class="career-meta">
              <span class="career-meta-label">${t(e.labLabel)}:</span>
              ${t(o.lab)}
            </p>`:``}

            ${r(o.paragraphs)}

            ${o.skills.length?`
            <div class="career-skills">
              <span class="career-meta-label">${t(e.skillsLabel)}:</span>
              <div class="career-skill-tags">${n(o.skills)}</div>
            </div>`:``}
          </div>
        </article>`}).join(``)}
      </div>
    </section>
  `},u=`https://scholar.google.com/citations?user=O5pkUdUAAAAJ&hl=en`,d=[{years:`2019 – 2022`,thesis:`QSurfNet: A Hybrid Quantum Convolutional Neural Network for Surface Defect Recognition`,scholarChip:!0,supervisor:{name:`Prof. Dr. Chi-Yi Tsai`,url:`https://scholar.google.com/citations?user=WbEw0RQAAAAJ&hl=en`}},{years:`2014 – 2018`,thesis:`Transfer Learning Implementation in Image Classification with Machine Learning`,supervisor:{name:`Prof. Dr. Mukesh Kumar Chandrakar`,url:`https://scholar.google.com/citations?user=r7OcorcAAAAJ&hl=en`}},{years:`2012 – 2013`,isSchool:!0}];function f(e,n){let r=e.url?`<a href="${e.url}" target="_blank" rel="noopener noreferrer" dir="ltr">${t(e.name)}</a>`:`<span dir="ltr">${t(e.name)}</span>`;return`
            <p class="education-meta">
              <span class="career-meta-label">${t(n)}:</span>
              ${r}
            </p>`}var p={id:`education`,render:({education:e})=>`
    <section class="content-panel education-panel">
      <header class="education-heading">
        <p class="section-kicker">${t(e.kicker)}</p>
        <h2>${t(e.title)}</h2>
      </header>

      <div class="education-timeline">
        ${d.map((r,i)=>{let a=e.entries[i],o=r.scholarChip||a.tags.length>0;return`
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

            ${r.supervisor?f(r.supervisor,e.supervisorLabel):``}

            ${r.thesis?`
            <p>
              ${t(e.thesisLabel)}:
              <strong dir="ltr">${t(r.thesis)}</strong>
            </p>`:``}

            ${o?`
            <div class="education-highlights">
              ${r.scholarChip?`
              <a
                href="${u}"
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
  `},m=[{from:`2017/08`,to:`2018/06`},{from:`2019/09`,to:`2022/08`,labFrom:3},{from:`2022/04`,to:`2022/06`},{from:`2022/09`,to:`2023/03`},{from:`2023/11`,to:`2026/11`,labFrom:0},{from:`2026/11`,to:null}],h={id:`research`,render:({research:e,experience:r,ui:a})=>`
    <section class="content-panel research-panel">
      <div class="research-journey">
        <div class="journey-map">
          ${m.map((o,s)=>{var c;let l=e.journey[s];return`
          <article class="journey-entry">
            <div class="journey-range">
              <span class="journey-index">${i(s)}</span>
              <span class="journey-date">${t(o.from)} — ${t((c=o.to)==null?a.present:c)}</span>
            </div>

            <div class="journey-path" aria-hidden="true"></div>

            <div class="journey-body">
              <h3>${t(l.title)} <span>· ${t(l.org)}</span></h3>
              ${o.labFrom===void 0?``:`
              <p class="journey-lab">
                <span class="career-meta-label">${t(r.labLabel)}:</span>
                ${t(r.entries[o.labFrom].lab)}
              </p>`}
              <div class="journey-tags">
                ${n(l.tags)}
              </div>
              <p>${t(l.text)}</p>
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
  `},g=[{name:`TraceFlow`},{name:`QSurfNet`,complete:!0,link:`https://link.springer.com/article/10.1007/s11128-023-03930-5`}],_={id:`projects`,render:({projects:e})=>`
    <section class="content-panel projects-panel">
      <p class="section-kicker">${t(e.kicker)}</p>
      <h2>${t(e.title)}</h2>

      <div class="project-grid">
        ${g.map((i,a)=>{let o=e.items[a];return`
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
  `},v={displayName:`Shraddha Mishra`,scholarUrl:`https://scholar.google.com/citations?user=O5pkUdUAAAAJ&hl=en`,totalCitations:31,hIndex:2,i10Index:1,generatedAt:`2026-11-16T03:39:15.271647+00:00`,publications:[{title:`QSurfNet: a hybrid quantum convolutional neural network for surface defect recognition: S. Mishra, C.-Y. Tsai`,year:`2023`,citations:25,url:`https://scholar.google.com/citations?view_op=view_citation&hl=en&user=O5pkUdUAAAAJ&citation_for_view=O5pkUdUAAAAJ%3A9yKSN-GCB0IC`},{title:`Design of superior parameterized quantum circuits for quantum image classification`,year:`2022`,citations:6,url:`https://scholar.google.com/citations?view_op=view_citation&hl=en&user=O5pkUdUAAAAJ&citation_for_view=O5pkUdUAAAAJ%3Ad1gkVwhDpl0C`},{title:`QSurfNet: 用於表面缺陷識別的混合量子卷積神經網絡.`,year:`2022`,citations:0,url:`https://scholar.google.com/citations?view_op=view_citation&hl=en&user=O5pkUdUAAAAJ&citation_for_view=O5pkUdUAAAAJ%3AqjMakFHDy7sC`}]};function y(e,n){var r,i;let a=t(e.title),o=e.year||n.yearUnavailable,s=(r=e.citations)==null?0:r,c=(i=e.url)==null?void 0:i.trim(),l=c?`
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
  `}function b(e){return`
    <div class="scholar-metrics">
      <article>
        <span>${t(e.totalCitations)}</span>
        <strong>${t(v.totalCitations)}</strong>
      </article>

      <article>
        <span dir="ltr">h-index</span>
        <strong>${t(v.hIndex)}</strong>
      </article>

      <article>
        <span dir="ltr">i10-index</span>
        <strong>${t(v.i10Index)}</strong>
      </article>
    </div>
  `}function x(e){return v.scholarUrl?`
    <a
      class="scholar-profile-link"
      href="${t(v.scholarUrl)}"
      target="_blank"
      rel="noopener noreferrer"
    >
      ${t(e.viewScholar)}
    </a>
  `:``}var S={id:`publications`,render:({publications:e})=>{var n;let r=(n=v.publications)==null?[]:n,i=r.length?r.map(t=>y(t,e)).join(``):`
        <article class="publication-empty">
          <p>${t(e.none)}</p>
        </article>
      `;return`
      <section class="content-panel publications-panel">
        <header class="publications-heading">
          <p class="section-kicker">${t(e.kicker)}</p>
          <h2>${t(e.title)}</h2>

          ${b(e)}
          ${x(e)}
        </header>

        <div class="publication-list">
          ${i}
        </div>
      </section>
    `}},C=4,w=[a,l,p,S,h,_,{id:`skills`,render:({skills:e})=>`
    <section class="content-panel skills-panel">
      <header class="skills-heading">
        <p class="section-kicker">${t(e.kicker)}</p>
        <h2>${t(e.title)}</h2>

        <dl class="core-strengths" aria-label="${t(e.strengthsLabel)}">
          ${e.strengths.map(e=>`
          <div class="core-strength">
            <dt>${t(e.title)}</dt>
            <dd>${e.tags.map(e=>`<span>${t(e)}</span>`).join(``)}</dd>
          </div>`).join(``)}
        </dl>

        ${r(e.intro,`skills-introduction`)}
      </header>

      <div class="skills-matrix">
        ${e.groups.map((e,r)=>`
        <article class="skill-group${r===C?` skill-group-ai`:``}">
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
        <article class="personality-card${a===e.cards.length-1?` personality-card-featured`:``}"${a===e.cards.length-1?` data-label="${t(e.featuredLabel)}"`:``}>
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
  `}];function T(e){if(!e)return{start(){},stop(){}};let t=e.getContext(`2d`),n=[`$`,`€`,`£`,`¥`,`₹`,`₩`,`₽`,`₿`,`﷼`,`₪`,`₫`,`฿`,`₦`,`₱`],r=1500,i=window.matchMedia(`(pointer: coarse)`).matches?1.5:2,a=[],o=0,s=0,c=null,l=null,u=null,d=null,f=!1;function p(){return document.documentElement.dataset.theme||`dark`}function m(){return p()===`light`?`#ff3f95`:`#28ff78`}function h(){return p()===`light`?`rgba(255, 249, 252, 0.15)`:`rgba(0, 0, 0, 0.09)`}function g(){return p()===`light`?`rgba(255, 249, 252, 0.96)`:`rgba(3, 16, 9, 0.96)`}function _(n=!1){let r=e.getBoundingClientRect();if(r.width<2||r.height<2||!n&&Math.abs(r.width-o)<1&&Math.abs(r.height-s)<140)return;o=r.width,s=r.height;let c=Math.min(window.devicePixelRatio||1,i);e.width=Math.max(1,Math.floor(r.width*c)),e.height=Math.max(1,Math.floor(r.height*c)),t.setTransform(c,0,0,c,0,0);let l=Math.max(1,Math.floor(r.width/14));a.length!==l&&(a=Array.from({length:l},()=>Math.floor(Math.random()*-40))),d&&(d.x=Math.min(d.x,Math.max(d.radius,r.width-d.radius)))}function v(e,n,r){let i=m();t.save(),t.fillStyle=i,t.font=`14px "Share Tech Mono", "Segoe UI Symbol", "Noto Sans Symbols 2", monospace`,t.textAlign=`left`,t.textBaseline=`alphabetic`,t.shadowColor=i,t.shadowBlur=2,t.fillText(r,e,n),t.restore()}function y(){if(!f||d)return;let t=e.clientWidth;d={x:12+Math.random()*Math.max(1,t-24),y:-24,previousX:null,previousY:null,radius:12,fallSpeed:4.8+Math.random()*1.2,flipPhase:Math.random()*Math.PI*2,flipSpeed:.58+Math.random()*.22,drift:(Math.random()-.5)*.35}}function b(){if(!f)return;u!==null&&window.clearTimeout(u);let e=r+Math.random()*(4e3-r);u=window.setTimeout(()=>{y(),u=null},e)}function x(){if(!d||d.previousX===null||d.previousY===null)return;let e=d.radius*1.55;t.save(),t.fillStyle=g(),t.beginPath(),t.arc(d.previousX,d.previousY,e,0,Math.PI*2),t.fill(),t.restore()}function S(){if(!d)return;x();let n=Math.cos(d.flipPhase),r=Math.max(.14,Math.abs(n)),i=n>=0;t.save(),t.translate(d.x,d.y),t.scale(r,1),t.shadowColor=`rgba(255, 220, 90, 0.95)`,t.shadowBlur=i?18:10;let a=t.createRadialGradient(-4,-5,1,0,0,d.radius);a.addColorStop(0,`#fff9cf`),a.addColorStop(.18,`#ffe98a`),a.addColorStop(.45,`#ffd447`),a.addColorStop(.75,`#f3b51f`),a.addColorStop(1,`#d89400`),t.beginPath(),t.arc(0,0,d.radius,0,Math.PI*2),t.fillStyle=a,t.fill(),t.lineWidth=1.6,t.strokeStyle=`rgba(255, 247, 186, 0.95)`,t.stroke(),t.beginPath(),t.arc(0,0,d.radius*.72,0,Math.PI*2),t.lineWidth=1,t.strokeStyle=`rgba(255, 231, 120, 0.75)`,t.stroke(),r>.35&&(t.shadowBlur=0,t.fillStyle=`rgba(168, 95, 0, 0.9)`,t.font=`bold ${d.radius+1}px "Segoe UI Symbol", sans-serif`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(i?`$`:`₿`,0,1)),t.beginPath(),t.fillStyle=`rgba(255, 255, 255, 0.42)`,t.arc(-d.radius*.28,-d.radius*.34,d.radius*.18,0,Math.PI*2),t.fill(),t.restore(),d.previousX=d.x,d.previousY=d.y,d.flipPhase+=d.flipSpeed,d.y+=d.fallSpeed,d.x+=d.drift,d.y>e.clientHeight+d.radius*2&&(d=null,b())}function C(){let r=e.clientWidth,i=e.clientHeight;t.fillStyle=h(),t.fillRect(0,0,r,i);for(let e=0;e<a.length;e+=1){let t=e*14,r=a[e]*14,o=n[Math.floor(Math.random()*n.length)];v(t,r,o),r>i&&Math.random()>.975&&(a[e]=0),a[e]+=1}S()}function w(){f||(f=!0,_(),C(),l=window.setInterval(C,63),b())}function T(){f=!1,l!==null&&(window.clearInterval(l),l=null),u!==null&&(window.clearTimeout(u),u=null)}function E(){T(),d=null,t.clearRect(0,0,e.clientWidth,e.clientHeight)}function D(){window.clearTimeout(D.timeoutId),D.timeoutId=window.setTimeout(()=>_(),160)}return`ResizeObserver`in window?(c=new ResizeObserver(D),c.observe(e)):window.addEventListener(`resize`,D),{start:w,pause:T,stop:E}}var E={meta:{title:`Shraddha Mishra | ML Systems Researcher & R&D Engineer`},ui:{digitalCv:`DIGITAL CV`,navigation:`CV navigation`,sections:`CV sections`,downloadCv:`Download Her CV`,toggleTheme:`Toggle Theme`,switchToLight:`Switch to light theme`,switchToDark:`Switch to dark theme`,themeDark:`Dark · Green / Black`,themeLight:`Light · White / Pink`,language:`Language`,chooseLanguage:`Choose language`,openNavigation:`Open navigation`,closeNavigation:`Close navigation`,present:`Present`},menu:{profile:`Profile`,experience:`Experience`,education:`Education`,publications:`Publications`,research:`Research`,projects:`Projects`,skills:`Skills`,personality:`Personality`,contact:`Contact`},profile:{kicker:`Research · System Design · FinTech`,copy:`Machine-learning systems researcher building reproducible infrastructure, experimental frameworks, and dependable technical systems.`,focusLabel:`Focus`,focusValue:`ML Systems`,interestsLabel:`Interests`,interestsValue:`Systems Design; Financial Decision Systems; Decision-Making under Uncertainty`,locationLabel:`Location`,locationValue:`Taiwan / Remote`},experience:{kicker:`Professional Timeline`,title:`Experience`,breakLabel:`Planned Transition`,supervisorLabel:`Research Supervisor`,labLabel:`Laboratory`,skillsLabel:`Skills Acquired`,fieldsLabel:`Fields Explored`,fields:[`Computer Vision`,`Quantum Machine Learning`,`Software Development & MLOps`,`Deep Learning for Hardware Security`],nextLabel:`Next:`,nextField:`Machine Learning in Finance`,entries:[{title:`Research Assistant`,org:`Academia Sinica, Taiwan`,field:`Deep Learning for Hardware Security · DL-SCA`,lab:`Advanced Cryptographic Engineering (ACE) Lab · Post-Quantum Cryptography Laboratory Group · Institute of Information Science (IIS)`,paragraphs:[`Conducted research on deep-learning side-channel analysis (DL-SCA) of AES implementations: defined the research questions of fidelity, auditability, generality and cost; surveyed fifteen existing DL-SCA tools and frameworks; and identified a research-infrastructure gap in DL-SCA studies.`,`Delivered TraceFlow, a framework for reproducible DL-SCA experiments, and used it to reproduce three published studies across four public trace datasets (ASCAD fixed-key, AES_RD, DPAv4, AES_HD) in 1,795 automated experiment runs, spanning hold-out and k-fold training, imported released models, and full and budgeted attacks, with key-recovery reports and artifact provenance.`,`Carried forward: a rigorous standard for evaluating probabilistic models, and the engineering discipline required to make research results reproducible, auditable and verifiable at scale.`],skills:[`Side-Channel Analysis`,`Probabilistic Model Evaluation`,`Research Infrastructure`,`Reproducibility Engineering`,`Experiment at Scale`,`Tamper-Evident Artifacts`,`Containerized GPU Training`,`Scientific Writing`]},{title:`Career Break`,org:``,field:``,lab:``,paragraphs:[`Undertook a planned career break to return from industry to research and to realign my work with long-term academic goals.`],skills:[]},{title:`Natural Language Processing Engineer`,org:`Aiello Inc., Taiwan`,field:`MLOps · Backend Engineering`,lab:``,paragraphs:[`Developed and maintained backend APIs and service scripts for the company’s ChatGPT-based SaaS product, VOCOL.`,`Contributed to algorithm-level performance improvements, major Docker image-size reduction, CI/CD efficiency, deployment reliability, and secure secret handling.`],skills:[]},{title:`Research Assistant`,org:`Tamkang University, Taiwan`,field:`Quantum Machine Learning · Computer Vision`,lab:`Robotic Vision Lab · Division of Artificial Intelligence & Internet of Things · Department of Electrical and Computer Science Engineering`,paragraphs:[`Initiated and led the department’s first exploratory research direction in quantum computing for computer vision, including the proposal of viable quantum machine-learning applications and of the research methodology.`,`Designed and evaluated multiple parameterized quantum circuits (PQCs), identifying high-performing architectures for image-feature extraction as quantum neural networks.`,`Implemented the best-performing circuit as a quantum convolutional layer and created QSurfNet by augmenting Professor Tsai’s SurfNet network for surface-defect recognition with a single QCNN layer; the work was published in Quantum Information Processing (Springer) and at ICCAE 2022, Australia.`,`Carried forward: the confidence to open an unfamiliar research direction independently, and a method of systematic architecture search and comparative evaluation.`],skills:[`Quantum Machine Learning`,`Parameterized Quantum Circuits`,`Hybrid Neural Networks`,`Computer Vision`,`Research Methodology`,`Scientific Writing`]},{title:`Deep Learning Engineer`,org:`Statement Cloud Digital Technology Co., Ltd., Taiwan`,field:`Computer Vision · Backend Engineering`,lab:``,paragraphs:[`Developed datasets, an image-recognition prototype, and model training and monitoring components for automated Taiwanese receipt recognition.`],skills:[]}]},education:{kicker:`Academic Foundation`,title:`Education`,thesisLabel:`Thesis`,supervisorLabel:`Research Supervisor`,publicationsChip:`2 Publications`,scholarTitle:`Open Google Scholar profile`,entries:[{degree:`Master of Engineering`,field:`Artificial Intelligence & Internet of Things`,institution:`Tamkang University · Taiwan`,lines:[`Laboratory: Robotic Vision Lab · Division of Artificial Intelligence & Internet of Things · Department of Electrical and Computer Science Engineering`,`GPA: 3.906 / 4 · Cumulative Percentage: 88.99% · Thesis Score: 91 / 100 · Papers Published: 2`],tags:[`Quantum Machine Learning`,`Computer Vision`]},{degree:`Bachelor of Engineering`,field:`Electrical & Electronics Engineering`,institution:`Bhilai Institute of Technology · India`,lines:[`Department of Electrical and Electronics Engineering`,`Cumulative Performance Index: 7.59 · Percentage: 68.13%`],tags:[]},{degree:`Senior Secondary Education`,field:`Central Board of Secondary Education`,institution:`Allahabad Public School · Prayagraj, India`,lines:[`Percentage: 87%`],tags:[]}]},research:{kicker:`Research Direction`,title:`Research`,journey:[{title:`Early Adopter`,org:`Bachelor’s Final-Year Project, India`,tags:[`Pattern Recognition`,`AI`],text:`In my final year of undergraduate study, I turned to artificial intelligence and completed an introductory project on image classification. That experience first directed me toward pattern recognition as a research direction.`},{title:`Master’s Research`,org:`Tamkang University, Taiwan`,tags:[`Quantum Machine Learning`,`Computer Vision`],text:`During my master’s degree, I examined whether quantum computing could meaningfully improve pattern-recognition systems. My results indicated that it can, particularly for image data, leading to my work on hybrid quantum-classical learning for visual recognition.`},{title:`Deep Learning Engineer`,org:`StatementCloud, Taiwan`,tags:[`Project Planning`,`Computer Vision`,`Automation`],text:`At StatementCloud, I worked on receipt-scanning software, developed datasets, and contributed to the design of a tailored solution for users. This experience deepened my understanding of project planning, automation, APIs, and the systematic engineering that real-world computer-vision systems require.`},{title:`NLP MLOps Engineer`,org:`Aiello, Taiwan`,tags:[`MLOps`,`Automation`,`Production ML`],text:`At Aiello, I gained my first substantial exposure to MLOps. I learned how larger ML products are organized, maintained, automated, and deployed in production environments, strengthening my interest in operationally stable machine-learning systems.`},{title:`Research Assistant`,org:`Academia Sinica, Taiwan`,tags:[`DL-SCA`,`Research Infrastructure`,`Probabilistic Evaluation`,`Reproducibility`],text:`At Academia Sinica, deep-learning side-channel analysis became my schooling in research method. A DL-SCA model outputs a probability distribution over key-dependent values, and its success lies in how that evidence accumulates across traces, measured by guessing entropy, key rank and the number of traces needed to recover the key, rather than by accuracy. Models with near-random accuracy can still recover the key, and results shift with the data split, the seed and the attack budget. I learned to judge probabilistic models through rank-based, test-trace budget-aware metrics and through variance across repeated runs. Because published results proved difficult to reproduce, I built TraceFlow, and I will carry its practice into my doctoral research: configuration as code, traceable runs, provenance, tamper-evident artifacts for verifiable and auditable results, and faithful reruns.`},{title:`Towards a PhD`,org:`Independent Preparation, Taiwan`,tags:[`Decision-Making under Uncertainty`,`Engineering Mathematics`,`Risk-Aware Learning`,`Multi-Agent Systems`],text:`One question has run through all of my work: how can a learning system arrive at the best possible decision, and how can we trust that it did? In my master’s research, I pursued it at the level of the model, searching for the circuit architecture that decided best from image data. At Academia Sinica, I pursued it at the level of the evidence, building infrastructure that makes research decisions reproducible and verifiable at scale. In my PhD, I intend to pursue it at the level of the decision itself: autonomous, risk-aware and reliable decision-making among adaptive and adversarial agents under regime shift. Financial markets will be my most demanding testbed, not the boundary of the work. In preparation, I am strengthening my foundation in engineering mathematics and studying the methods on which such decisions rest.`}],future:[`My work has progressed steadily from building AI models to building dependable systems around them, and from one field to the next. I have repeatedly taken on roles in fields where I had no prior background, including quantum machine learning, receipt recognition, production NLP backends and cryptographic side-channel analysis, and delivered working, documented results in each.`,`I intend to investigate autonomous, risk-aware decision-making among adaptive and adversarial agents under regime shift, and to engineer systems that remain reliable on difficult, assumption-violating data. Financial markets are my intended testbed, because they demand robustness, adaptive reasoning, and disciplined execution under risk.`]},projects:{kicker:`Selected Research Systems`,title:`Projects`,viewPublication:`View Publication`,items:[{status:`2/2 Manuscript in Preparation`,paragraphs:[`An extensible framework for reproducible deep-learning side-channel analysis.`,`TraceFlow enables researchers to define, run, monitor and rerun DL-SCA experiments from configuration alone. Every run becomes a verifiable record of its results, figures and provenance, so that a published result can be reproduced, audited and compared.`],tags:[`Research Infrastructure`,`MLOps`,`Side-Channel Analysis`,`Reproducibility`],availability:`Manuscript in preparation. Source code will be released following publication.`},{status:`Published Research`,paragraphs:[`A hybrid quantum-classical convolutional neural network developed during my master’s research for surface-defect recognition.`,`The project investigated whether parameterized quantum circuits could improve image-feature extraction when a quantum convolutional neural layer is integrated with a classical convolutional architecture.`],tags:[`Quantum Machine Learning`,`Computer Vision`,`Hybrid Neural Networks`,`Surface Inspection`],availability:`Research results are publicly available through the associated publications. The original research implementation is not currently released as a public repository.`}]},publications:{kicker:`Research Output`,title:`Publications`,totalCitations:`Total Citations`,citations:`citations`,yearUnavailable:`Year unavailable`,viewScholar:`View Google Scholar Profile`,none:`No publications are currently available.`},skills:{kicker:`Technical Capability`,title:`Skills`,strengthsLabel:`Core technical strengths`,strengths:[{title:`Reproducibility Engineering`,tags:[`Reproducible Research`,`Experiment Tracking`,`Data Provenance`,`Configuration Management`,`Deterministic ML`]},{title:`End-to-End Ownership`,tags:[`Research Engineering`,`System Design`,`Software Architecture`,`Project Proposals`,`Project Planning`,`Technical Leadership`]},{title:`Learning a New Field and Delivering`,tags:[`Cross-Disciplinary Research`,`Deep-Learning Side-Channel Analysis`,`MLOps Practices`,`Quantum Machine Learning`,`Computer Vision`]},{title:`Research Infrastructure at Scale`,tags:[`ML Systems`,`MLOps`,`Workflow Orchestration`,`GPU Computing`,`Docker`,`Automation`,`Environment Configuration`,`Fallback Planning`,`Two-Level Fallback Exception Handling`]},{title:`Bridging Research and Production`,tags:[`Production ML`,`Backend Development`,`API Development`,`Unit Testing`,`Software Quality`,`Correctness before Speed`]}],intro:[`I build research and software systems across languages and technology stacks. My primary strength is not attachment to a single language, but the ability to translate a technical vision into a structured, testable, and maintainable implementation.`,`I work extensively with AI coding agents as engineering collaborators: defining architecture, decomposing requirements, reviewing generated code, identifying failures, validating behavior, and integrating each component into the wider system.`],groups:[{title:`Systems & Software Development`,text:`Modular architecture, requirements decomposition, interface design, refactoring, debugging, validation, and maintainable implementation.`,tags:[`System Architecture`,`Modular Design`,`API Design`,`Testing`,`Debugging`,`Code Review`,`Project Planning`]},{title:`Programming & Application Development`,text:`Active development across scientific computing, systems programming, automation, browser-based applications, and VS Code panel integrations.`,tags:[`Python`,`C++`,`Java`,`JavaScript`,`HTML`,`CSS`,`Shell`,`VS Code Extensions`]},{title:`Machine Learning & Research Engineering`,text:`Development of reproducible ML experiments, research pipelines, model-evaluation workflows, and scientific software.`,tags:[`PyTorch`,`Keras`,`Deep Learning`,`Computer Vision`,`Experiment Design`,`Model Evaluation`,`Probabilistic Model Evaluation`,`Scientific Computing`]},{title:`MLOps & Automation`,text:`Automation of experiments, builds, deployments, artifact management, configuration, and repeatable development workflows.`,tags:[`Docker`,`Containerization`,`Linux`,`Git`,`GitHub Actions`,`CI/CD`,`YAML`,`Configuration-as-Code`,`Experiment Tracking`,`Experiment at Scale`,`Artifact Management`,`Provenance`,`Tamper-Evident Artifacts`]},{title:`AI-Augmented Engineering`,text:`Direction of AI coding agents throughout the software lifecycle, with retained responsibility for architecture, correctness, security, integration, and final technical decisions.`,tags:[`Agentic Development`,`Prompted Implementation`,`Code Verification`,`Failure Analysis`,`Iterative Refactoring`,`Human-in-the-Loop Engineering`]},{title:`Research Communication`,text:`Technical documentation, experimental reporting, publication development, and clear communication of complex system behavior.`,tags:[`LaTeX`,`Scientific Writing`,`Technical Documentation`,`Vector Graphics`,`Data Visualization`]}]},personality:{kicker:`Working Style`,title:`Personality`,featuredLabel:`Core Value`,summary:`I am a perceptive, independent, and highly structured technical professional. I work best when given clear ownership of a meaningful problem and sufficient space to examine it deeply.`,cards:[{title:`Independent Execution`,text:`I am comfortable taking responsibility for a project from initial architecture through implementation, validation, refinement, and final delivery.`,tags:[`Autonomy`,`Execution Ownership`,`Disciplined Execution`]},{title:`Deep Technical Focus`,text:`I produce my strongest work in quiet, low-interruption environments where I can maintain context, investigate complex behavior, and build coherent solutions without unnecessary fragmentation.`,tags:[`Deep Work`,`Sustained Focus`,`Context Retention`]},{title:`Structured Problem Solving`,text:`I naturally organize complex work into clear components, interfaces, dependencies, and validation stages. I prefer systems that are understandable, traceable, and deliberately designed.`,tags:[`Systematic Thinking`,`Structure & Organization`,`Separation of Concerns`]},{title:`Quality Awareness`,text:`I notice inconsistencies quickly and tend to investigate them until the underlying cause is understood. I value correctness, maintainability, and evidence over superficial completion.`,tags:[`Validation`,`Debugging`,`Quality Control`]},{title:`High Context Sensitivity`,text:`I am sensitive to subtle changes in systems, environments, and communication. In technical work, this helps me identify small discrepancies, hidden assumptions, and points of friction that may otherwise be overlooked.`,tags:[`Pattern Awareness`,`Attention to Detail`,`Context-Aware Design`]},{title:`Focused Collaboration`,text:`I collaborate best through clear objectives, thoughtful technical discussion, written documentation, and defined responsibilities. I prefer purposeful communication over frequent meetings or continuously interrupted workflows.`,tags:[`Clear Communication`,`Documentation`,`Focused Collaboration`]},{title:`Cross-Cultural Communication`,text:`Since 2019, Taiwan has been my home. I do not merely work here; I live as part of the local community, sharing everyday life with neighbours and friends of every generation, hosting, helping where I can, and gathering many happy memories. Teaching undergraduate English at Tamkang University, and working fluently in English and Hindi, have taught me to communicate with clarity and care across languages and cultures.`,tags:[`Community Life`,`Multilingual Communication`,`Teaching`,`Cultural Adaptability`]},{title:`Human-Centered Engineering`,text:`I pair analytical discipline with empathy for the people who use, maintain, and depend on technical systems. I care not only about whether a system works, but also about whether it is understandable, dependable, and practical for its intended users.`,tags:[`Empathy`,`User Awareness`,`Responsible Engineering`]}]},contact:{kicker:`Research & Professional Inquiries`,title:`Contact`,intro:`Open to research collaboration, technical discussion, and opportunities involving machine-learning systems, reproducible research, and autonomous decision-making.`,email:`Email`}},D=`modulepreload`,O=function(e){return`/`+e},k={},A=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute(`nonce`));function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=O(t,n),t=s(t),t in k)return;k[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:D,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},j=[{code:`en`,name:`English`,lang:`en`,dir:`ltr`},{code:`zh-TW`,name:`繁體中文`,lang:`zh-Hant-TW`,dir:`ltr`},{code:`zh-CN`,name:`简体中文`,lang:`zh-Hans-CN`,dir:`ltr`},{code:`de`,name:`Deutsch`,lang:`de`,dir:`ltr`},{code:`de-CH`,name:`Deutsch (Schweiz)`,lang:`de-CH`,dir:`ltr`},{code:`ru`,name:`Русский`,lang:`ru`,dir:`ltr`},{code:`ar`,name:`العربية`,lang:`ar`,dir:`rtl`},{code:`es`,name:`Español`,lang:`es`,dir:`ltr`}],ee={"zh-TW":()=>A(()=>import(`./zh-TW-BWmh9Me0.js`),[]),"zh-CN":()=>A(()=>import(`./zh-CN-jGotV9Mi.js`),[]),de:()=>A(()=>import(`./de-803rgmTw.js`),[]),"de-CH":()=>A(()=>import(`./de-CH-BduB15Zg.js`),[]),ru:()=>A(()=>import(`./ru-CX4bPt-t.js`),[]),ar:()=>A(()=>import(`./ar-9aDo6R3n.js`),[]),es:()=>A(()=>import(`./es-SRdvf0HS.js`),[])},M=`digital-cv-language`,N={en:E},P=new Set,F=`en`,I=E;function L(e){return j.some(t=>t.code===e)}function te(e){let t=String(e||``).toLowerCase();if(!t)return null;if(t.startsWith(`zh`))return t.includes(`hant`)||t.endsWith(`-tw`)||t.endsWith(`-hk`)||t.endsWith(`-mo`)?`zh-TW`:`zh-CN`;if(t===`de-ch`||t===`gsw`||t.startsWith(`gsw-`))return`de-CH`;let n=t.split(`-`)[0],r=j.find(e=>e.code.toLowerCase()===n);return r?r.code:null}function ne(){var e;try{let e=localStorage.getItem(M);if(e&&L(e))return e}catch{}let t=(e=navigator.languages)!=null&&e.length?navigator.languages:[navigator.language];for(let e of t){let t=te(e);if(t)return t}return`en`}function R(){return F}function re(){return I}function z(e){var t,n;let r=t=>e.split(`.`).reduce((e,t)=>e==null?void 0:e[t],t);return(t=(n=r(I))==null?r(E):n)==null?e:t}function ie(e){return P.add(e),()=>P.delete(e)}function ae(e){var t,n,r;let i=(t=j.find(t=>t.code===e))==null?j[0]:t,a=document.documentElement;a.lang=i.lang,a.dataset.locale=i.code,a.dataset.dir=i.dir,document.title=(n=(r=I.meta)==null?void 0:r.title)==null?E.meta.title:n}async function B(e,{remember:t=!0}={}){let n=L(e)?e:`en`;if(!N[n])try{N[n]=(await ee[n]()).default}catch(e){return console.error(`Could not load language "${n}".`,e),F}if(F=n,I=N[n],ae(n),t)try{localStorage.setItem(M,n)}catch{}return P.forEach(e=>e(n)),n}function oe(e=document){e.querySelectorAll(`[data-i18n]`).forEach(e=>{e.textContent=z(e.dataset.i18n)}),e.querySelectorAll(`[data-i18n-attr]`).forEach(e=>{e.dataset.i18nAttr.split(`,`).forEach(t=>{let[n,r]=t.split(`:`).map(e=>e.trim());n&&r&&e.setAttribute(n,z(r))})})}function se({target:e,sections:t,onSelect:n}){let r=document.createDocumentFragment();return t.forEach((t,i)=>{let a=document.createElement(`button`);a.type=`button`,a.className=`menu-item`,a.dataset.section=t.id;let o=document.createElement(`span`);o.className=`menu-index`,o.textContent=String(i+1).padStart(2,`0`);let s=document.createElement(`span`);s.className=`menu-label`,s.textContent=z(`menu.${t.id}`),a.append(o,s),a.addEventListener(`mouseenter`,()=>{a.classList.add(`is-previewing`)}),a.addEventListener(`mouseleave`,()=>{a.classList.remove(`is-previewing`)}),a.addEventListener(`click`,()=>{e.querySelectorAll(`.menu-item`).forEach(e=>{e.classList.toggle(`is-active`,e===a)}),n(t.id)}),i===0&&a.classList.add(`is-active`),r.appendChild(a)}),e.replaceChildren(r),ce(),{relabel(){e.querySelectorAll(`.menu-item`).forEach(e=>{let t=e.querySelector(`.menu-label`);t&&(t.textContent=z(`menu.${e.dataset.section}`))})}}}function ce(){let e=document.querySelector(`#matrix-rain`);if(!e||e.dataset.matrixStarted===`true`)return;e.dataset.matrixStarted=`true`;let t=T(e),n=!1,r=()=>{n&&!document.hidden?t.start():t.pause()};`IntersectionObserver`in window?new IntersectionObserver(e=>{n=e.some(e=>e.intersectionRatio>.02),r()},{threshold:[0,.02,.1]}).observe(e):n=!0,document.addEventListener(`visibilitychange`,r),r()}var V=170,le=.3,H=30,U=48,ue=.6,W=6,de=1.4,G=.3,fe=.25;function pe(e){if(!e)return{open(){},close(){},relabel(){}};let t=document.documentElement,n=document.querySelector(`#drawer-handle`),r=!1,i=0,a=``,o=0,s=0,c=0,l=()=>{let n=getComputedStyle(e).getPropertyValue(`--drawer-peek`),r=parseFloat(getComputedStyle(t).fontSize);s=(parseFloat(n)||1)*r,c=e.offsetWidth};l(),window.addEventListener(`resize`,l,{passive:!0}),`ResizeObserver`in window&&new ResizeObserver(l).observe(e);let u=()=>Math.max(1,c-s),d=t=>{i=Math.min(1,Math.max(0,t)),!o&&(o=requestAnimationFrame(()=>{o=0;let t=i.toFixed(3);t!==a&&(a=t,e.style.setProperty(`--drawer-pull`,t),n==null||n.style.setProperty(`--drawer-pull`,t))}))},f=t=>{e.classList.toggle(`is-dragging`,t),n==null||n.classList.toggle(`is-dragging`,t)},p=()=>{n==null||n.setAttribute(`aria-label`,z(r?`ui.closeNavigation`:`ui.openNavigation`))},m=t=>{r=t,e.classList.toggle(`is-open`,t),f(!1),d(+!!t),n&&(n.classList.toggle(`is-open`,t),n.setAttribute(`aria-expanded`,String(t)),p())};window.addEventListener(`pointermove`,e=>{if(e.pointerType!==`mouse`)return;let t=e.clientX;if(r){t>c+U&&m(!1);return}let n=t-s;if(n<=H){m(!0);return}if(n>=V){d(0);return}let i=1-(n-H)/(V-H);d(le*i*i)},{passive:!0}),t.addEventListener(`mouseleave`,()=>{m(!1)});let h=null,g=0;window.addEventListener(`touchstart`,t=>{if(t.touches.length!==1){h=null;return}let i=t.touches[0],a=!!(n&&n.contains(t.target)),o=e.contains(t.target),s=i.clientX<=window.innerWidth*ue;if(!r&&!s&&!a){h=null;return}h={startX:i.clientX,startY:i.clientY,lastX:i.clientX,lastTime:t.timeStamp,velocity:0,startPull:+!!r,dragging:!1,insideDrawer:o,onHandle:a}},{passive:!0}),window.addEventListener(`touchmove`,e=>{if(!h)return;let t=e.touches[0],n=t.clientX-h.startX,i=t.clientY-h.startY;if(!h.dragging){if(Math.abs(n)<W&&Math.abs(i)<W)return;let a=Math.abs(i)<=Math.abs(n)*de,o=h.onHandle||(r?n<0:n>0);if(!a||!o){h=null;return}h.dragging=!0,h.startX=t.clientX,h.lastX=t.clientX,h.lastTime=e.timeStamp,f(!0)}e.cancelable&&e.preventDefault();let a=Math.max(1,e.timeStamp-h.lastTime),o=(t.clientX-h.lastX)/a;h.velocity=h.velocity*.4+o*.6,h.lastX=t.clientX,h.lastTime=e.timeStamp,d(h.startPull+(t.clientX-h.startX)/u())},{passive:!1});let _=e=>{if(Math.abs(e)>fe){m(e>0);return}m(r?i>1-G:i>G)};return window.addEventListener(`touchend`,e=>{if(!h)return;let t=h;if(h=null,t.dragging){_(t.velocity),g=e.timeStamp+400;return}if(!t.onHandle){if(!r&&t.insideDrawer){m(!0),e.preventDefault();return}r&&!t.insideDrawer&&m(!1)}}),window.addEventListener(`touchcancel`,()=>{h!=null&&h.dragging&&_(h.velocity),h=null}),window.addEventListener(`click`,e=>{e.timeStamp<g&&(e.preventDefault(),e.stopPropagation())},!0),n==null||n.addEventListener(`click`,()=>{m(!r)}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&r&&m(!1)}),e.classList.add(`has-magnet`),n==null||n.classList.add(`is-ready`),{open:()=>m(!0),close:()=>m(!1),relabel:p}}function me({toggle:e,menu:t}){if(!e||!t)return{relabel(){}};let n=!1;function r(r){n=r,t.hidden=!r,e.setAttribute(`aria-expanded`,String(r)),e.classList.toggle(`is-open`,r)}function i(){let e=R();t.querySelectorAll(`.language-option`).forEach(t=>{let n=t.dataset.locale===e;t.classList.toggle(`is-current`,n),t.setAttribute(`aria-checked`,String(n))})}j.forEach(n=>{let i=document.createElement(`button`);i.type=`button`,i.className=`language-option`,i.dataset.locale=n.code,i.setAttribute(`role`,`menuitemradio`),i.setAttribute(`lang`,n.lang),i.setAttribute(`dir`,n.dir),i.textContent=n.name,i.addEventListener(`click`,async()=>{r(!1),i.classList.add(`is-loading`),await B(n.code),i.classList.remove(`is-loading`),e.focus({preventScroll:!0})}),t.appendChild(i)}),e.addEventListener(`click`,e=>{if(e.stopPropagation(),r(!n),n){var i,a;(i=(a=t.querySelector(`.is-current`))==null?t.firstElementChild:a)==null||i.focus({preventScroll:!0})}}),document.addEventListener(`click`,i=>{n&&!t.contains(i.target)&&i.target!==e&&r(!1)}),t.addEventListener(`keydown`,n=>{let i=[...t.querySelectorAll(`.language-option`)],a=i.indexOf(document.activeElement);n.key===`Escape`?(n.stopPropagation(),r(!1),e.focus({preventScroll:!0})):(n.key===`ArrowDown`||n.key===`ArrowUp`)&&(n.preventDefault(),i[(a+(n.key===`ArrowDown`?1:-1)+i.length)%i.length].focus({preventScroll:!0}))});function a(){e.setAttribute(`aria-label`,z(`ui.chooseLanguage`)),e.setAttribute(`title`,z(`ui.language`)),t.setAttribute(`aria-label`,z(`ui.chooseLanguage`)),i()}return r(!1),a(),{relabel:a}}var K={dark:{nameKey:`ui.themeDark`,switchKey:`ui.switchToLight`,next:`light`,frame:`#020603`},light:{nameKey:`ui.themeLight`,switchKey:`ui.switchToDark`,next:`dark`,frame:`#fffcfd`}};function he({toggle:e,label:t}){let n=localStorage.getItem(`digital-cv-theme`),r=n&&K[n]?n:`dark`;function i(){let n=K[r];t.textContent=z(n.nameKey),e.setAttribute(`aria-label`,z(n.switchKey)),e.setAttribute(`title`,z(`ui.toggleTheme`))}function a(e){var t;r=e,document.documentElement.dataset.theme=e,(t=document.querySelector(`meta[name="theme-color"]`))==null||t.setAttribute(`content`,K[e].frame),i(),localStorage.setItem(`digital-cv-theme`,e)}return e.addEventListener(`click`,()=>{a(K[r].next)}),a(r),{relabel:i}}var q,J=document.querySelector(`#main-view`),ge=document.querySelector(`#section-menu`),_e=document.querySelector(`#theme-toggle`),ve=document.querySelector(`#theme-name`),Y=`profile`,X=20;function Z(){for(let e of J.querySelectorAll(`h2`)){e.style.fontSize=``;for(let t=0;t<4;t+=1){let t=e.clientWidth,n=e.scrollWidth;if(!t||n<=t+1)break;let r=parseFloat(getComputedStyle(e).fontSize),i=Math.max(X,t/n*r*.98);if(e.style.fontSize=`${i}px`,i===X)break}}}var Q=0;window.addEventListener(`resize`,()=>{cancelAnimationFrame(Q),Q=requestAnimationFrame(Z)},{passive:!0}),(q=document.fonts)==null||q.ready.then(Z);function $(){var e;let t=(e=w.find(e=>e.id===Y))==null?w[0]:e;J.innerHTML=t.render(re()),J.dataset.section=t.id,Z()}function ye(e){Y=e,J.classList.add(`is-changing`),window.setTimeout(()=>{$(),J.classList.remove(`is-changing`),J.focus({preventScroll:!0})},140)}async function be(){await B(ne(),{remember:!1});let e=pe(document.querySelector(`#cv-drawer`)),t=window.matchMedia(`(hover: none), (pointer: coarse)`),n=se({target:ge,sections:w,onSelect:n=>{ye(n),t.matches&&e.close()}}),r=he({toggle:_e,label:ve}),i=me({toggle:document.querySelector(`#language-toggle`),menu:document.querySelector(`#language-menu`)});function a(){oe(),n.relabel(),r.relabel(),i.relabel(),e.relabel(),$()}ie(a),a()}be();