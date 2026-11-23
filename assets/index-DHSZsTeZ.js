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
  `},o=[{text:0,carried:!0,from:`2023`,to:`2026`,fields:[3,2],supervisor:{name:`Prof. Dr. Ruben Niederhagen`,url:`https://scholar.google.com/citations?user=mPNOzDAAAAAJ&hl=en`}},{text:1,from:`2023`,isBreak:!0,fields:[]},{text:2,from:`2022`,to:`2023`,fields:[2]},{text:4,from:`2022`,fields:[0,2]},{text:3,carried:!0,from:`2019`,to:`2022`,fields:[1,0],supervisor:{name:`Prof. Dr. Chi-Yi Tsai`,url:`https://scholar.google.com/citations?user=WbEw0RQAAAAJ&hl=en`}}];function s(e,t){return e.to===null?`${e.from} – ${t}`:e.to?`${e.from} – ${e.to}`:e.from}function c(e,n){if(!n||!e.length)return r(e);let i=e[e.length-1].match(/^([^:：]{1,40}[:：])\s*(.*)$/s);return i?`${r(e.slice(0,-1))}
            <p class="career-carried"><span class="career-carried-label">${t(i[1])}</span> ${t(i[2])}</p>`:r(e)}function l(e,n){return`
            <p class="career-meta">
              <span class="career-meta-label">${t(n)}:</span>
              <a
                href="${e.url}"
                target="_blank"
                rel="noopener noreferrer"
                dir="ltr"
              >${t(e.name)}</a>
            </p>`}var u={id:`experience`,render:({experience:e,ui:r})=>`
    <section class="content-panel experience-panel">
      <header class="experience-heading">
        <p class="section-kicker">${t(e.kicker)}</p>
        <h2>${t(e.title)}</h2>

        <div class="field-path">
          <p class="field-path-label">${t(e.fieldsLabel)}</p>
          <ol>
            ${e.fields.map((e,n)=>`
            <li class="field-chip" data-field="${n}">${t(e)}</li>
            <li class="field-arrow" aria-hidden="true">↓</li>`).join(``)}
            <li class="field-chip field-path-next">
              <span>${t(e.nextLabel)}</span>
              ${t(e.nextField)}
            </li>
          </ol>
        </div>
      </header>

      <div class="career-timeline">
        <span class="field-strip-sentinel" aria-hidden="true"></span>
        <div class="field-strip" data-label="${t(e.fieldsLabel)}" aria-hidden="true">
          ${e.fields.map((e,n)=>`
          <span data-field="${n}">${t(e)}</span>`).join(``)}
        </div>
        ${o.map(i=>{let a=e.entries[i.text];return`
        <article
          class="career-entry${i.isBreak?` career-break`:``}"
          data-fields="${i.fields.join(` `)}"
        >
          <div class="career-marker">
            <span class="career-year">${t(s(i,r.present))}</span>
            <span class="career-dot"></span>
          </div>

          <div class="career-details">
            ${i.isBreak?`<span class="career-break-label">${t(e.breakLabel)}</span>`:``}

            <h3>
              ${t(a.title)}
              ${a.org?`<span>· ${t(a.org)}</span>`:``}
            </h3>

            ${i.supervisor?l(i.supervisor,e.supervisorLabel):``}

            ${a.lab?`
            <p class="career-meta">
              <span class="career-meta-label">${t(e.labLabel)}:</span>
              ${t(a.lab)}
            </p>`:``}

            ${c(a.paragraphs,i.carried)}

            ${a.skills.length?`
            <div class="career-skills">
              <span class="career-meta-label">${t(e.skillsLabel)}:</span>
              <div class="career-skill-tags">${n(a.skills)}</div>
            </div>`:``}
          </div>
        </article>`}).join(``)}
      </div>
    </section>
  `,mount(e){d==null||d.disconnect(),f==null||f.disconnect();let t=e.querySelector(`.field-strip`),n=e.querySelector(`.field-strip-sentinel`);t&&n&&(f=new IntersectionObserver(([e])=>{t.classList.toggle(`is-stuck`,!e.isIntersecting&&e.boundingClientRect.top<0)}),f.observe(n));let r=[...e.querySelectorAll(`[data-field]`)],i=[...e.querySelectorAll(`.career-entry`)];if(!r.length||!i.length)return;let a=new Set,o=null,s=null,c=()=>{var e,n,c,l;let u=(e=i.find(e=>a.has(e)))==null?null:e,d=(n=(c=s)==null?o:c)==null?u:n,f=new Set(((l=d==null?void 0:d.dataset.fields)==null?``:l).split(` `).filter(Boolean));for(let e of r)e.classList.toggle(`is-active`,f.has(e.dataset.field));t==null||t.classList.toggle(`has-fields`,f.size>0)};for(let e of i)e.addEventListener(`pointerenter`,t=>{t.pointerType===`mouse`&&(s=e,c())}),e.addEventListener(`pointerleave`,t=>{t.pointerType===`mouse`&&(s===e&&(s=null),c())}),e.addEventListener(`pointerdown`,t=>{t.pointerType!==`mouse`&&(o=e,c())});d=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting?a.add(t.target):a.delete(t.target);o=null,c()},{rootMargin:`-45% 0px -45% 0px`});for(let e of i)d.observe(e)}},d=null,f=null,p=`https://scholar.google.com/citations?user=O5pkUdUAAAAJ&hl=en`,m=[{years:`2019 – 2022`,thesis:`QSurfNet: A Hybrid Quantum Convolutional Neural Network for Surface Defect Recognition`,scholarChip:!0,supervisor:{name:`Prof. Dr. Chi-Yi Tsai`,url:`https://scholar.google.com/citations?user=WbEw0RQAAAAJ&hl=en`}},{years:`2014 – 2018`,thesis:`Transfer Learning Implementation in Image Classification with Machine Learning`,supervisor:{name:`Prof. Dr. Mukesh Kumar Chandrakar`,url:`https://scholar.google.com/citations?user=r7OcorcAAAAJ&hl=en`}},{years:`2012 – 2013`,isSchool:!0}];function h(e,n){let r=e.url?`<a href="${e.url}" target="_blank" rel="noopener noreferrer" dir="ltr">${t(e.name)}</a>`:`<span dir="ltr">${t(e.name)}</span>`;return`
            <p class="education-meta">
              <span class="career-meta-label">${t(n)}:</span>
              ${r}
            </p>`}var g={id:`education`,render:({education:e})=>`
    <section class="content-panel education-panel">
      <header class="education-heading">
        <p class="section-kicker">${t(e.kicker)}</p>
        <h2>${t(e.title)}</h2>
      </header>

      <div class="education-timeline">
        ${m.map((r,i)=>{let a=e.entries[i],o=r.scholarChip||a.tags.length>0;return`
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

            ${r.supervisor?h(r.supervisor,e.supervisorLabel):``}

            ${r.thesis?`
            <p>
              ${t(e.thesisLabel)}:
              <strong dir="ltr">${t(r.thesis)}</strong>
            </p>`:``}

            ${o?`
            <div class="education-highlights">
              ${r.scholarChip?`
              <a
                href="${p}"
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
  `},_=[{from:`2017/08`,to:`2018/06`},{from:`2019/09`,to:`2022/08`,labFrom:3},{from:`2022/04`,to:`2022/06`},{from:`2022/09`,to:`2023/03`},{from:`2023/11`,to:`2026/11`,labFrom:0},{from:`2026/11`,to:null}],v={id:`research`,render:({research:e,experience:r,ui:a})=>`
    <section class="content-panel research-panel">
      <div class="research-journey">
        <div class="journey-map">
          ${_.map((o,s)=>{var c;let l=e.journey[s];return`
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
  `},y=[{name:`TraceFlow`},{name:`QSurfNet`,complete:!0,link:`https://link.springer.com/article/10.1007/s11128-023-03930-5`}],b={id:`projects`,render:({projects:e})=>`
    <section class="content-panel projects-panel">
      <p class="section-kicker">${t(e.kicker)}</p>
      <h2>${t(e.title)}</h2>

      <div class="project-grid">
        ${y.map((i,a)=>{let o=e.items[a];return`
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
  `},x={displayName:`Shraddha Mishra`,scholarUrl:`https://scholar.google.com/citations?user=O5pkUdUAAAAJ&hl=en`,totalCitations:31,hIndex:2,i10Index:1,generatedAt:`2026-11-23T16:28:38.550885+00:00`,publications:[{title:`QSurfNet: a hybrid quantum convolutional neural network for surface defect recognition: S. Mishra, C.-Y. Tsai`,year:`2023`,citations:25,url:`https://scholar.google.com/citations?view_op=view_citation&hl=en&user=O5pkUdUAAAAJ&citation_for_view=O5pkUdUAAAAJ%3A9yKSN-GCB0IC`},{title:`Design of superior parameterized quantum circuits for quantum image classification`,year:`2022`,citations:6,url:`https://scholar.google.com/citations?view_op=view_citation&hl=en&user=O5pkUdUAAAAJ&citation_for_view=O5pkUdUAAAAJ%3Ad1gkVwhDpl0C`},{title:`QSurfNet: 用於表面缺陷識別的混合量子卷積神經網絡.`,year:`2022`,citations:0,url:`https://scholar.google.com/citations?view_op=view_citation&hl=en&user=O5pkUdUAAAAJ&citation_for_view=O5pkUdUAAAAJ%3AqjMakFHDy7sC`}]};function S(e,n){var r,i;let a=t(e.title),o=e.year||n.yearUnavailable,s=(r=e.citations)==null?0:r,c=(i=e.url)==null?void 0:i.trim(),l=c?`
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
  `}function C(e){return`
    <div class="scholar-metrics">
      <article>
        <span>${t(e.totalCitations)}</span>
        <strong>${t(x.totalCitations)}</strong>
      </article>

      <article>
        <span dir="ltr">h-index</span>
        <strong>${t(x.hIndex)}</strong>
      </article>

      <article>
        <span dir="ltr">i10-index</span>
        <strong>${t(x.i10Index)}</strong>
      </article>
    </div>
  `}function w(e){return x.scholarUrl?`
    <a
      class="scholar-profile-link"
      href="${t(x.scholarUrl)}"
      target="_blank"
      rel="noopener noreferrer"
    >
      ${t(e.viewScholar)}
    </a>
  `:``}var T={id:`publications`,render:({publications:e})=>{var n;let r=(n=x.publications)==null?[]:n,i=r.length?r.map(t=>S(t,e)).join(``):`
        <article class="publication-empty">
          <p>${t(e.none)}</p>
        </article>
      `;return`
      <section class="content-panel publications-panel">
        <header class="publications-heading">
          <p class="section-kicker">${t(e.kicker)}</p>
          <h2>${t(e.title)}</h2>

          ${C(e)}
          ${w(e)}
        </header>

        <div class="publication-list">
          ${i}
        </div>
      </section>
    `}},E=4,D={id:`skills`,render:({skills:e})=>`
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
        <article class="skill-group${r===E?` skill-group-ai`:``}">
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
  `},O={id:`personality`,render:({personality:e})=>`
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
  `},k=`research@mishra.ai`,A=5,j=[{label:`GitHub`,href:`https://github.com/ItsShraddhaMishra`},{label:`LinkedIn`,href:`https://www.linkedin.com/in/shraddha-mishra-b25728186/`},{label:`ORCID`,href:`https://orcid.org/0000-0003-3548-6592`}],M=[a,u,g,T,v,b,D,O,{id:`contact`,render:({contact:e})=>`
    <section class="content-panel contact-panel">
      <p class="section-kicker">${t(e.kicker)}</p>
      <h2>${t(e.title)}</h2>

      <p class="contact-intro">${t(e.intro)}</p>

      <div class="contact-links">
        <div
          class="contact-link contact-email"
          data-open="false"
          style="--show-time: ${A}s"
        >
          <button
            type="button"
            class="contact-email-toggle"
            aria-controls="contact-email-panel"
          >
            <span class="contact-link-label">${t(e.email)}</span>
          </button>

          <div class="contact-email-panel" id="contact-email-panel" hidden>
            <a class="contact-email-address" href="mailto:${k}" dir="ltr">${k}</a>
            <button
              type="button"
              class="contact-copy"
              data-copy="${k}"
              data-label="${t(e.copy)}"
              data-done="${t(e.copied)}"
              aria-live="polite"
            >${t(e.copy)}</button>
          </div>
        </div>

        ${j.map(e=>`
        <a
          href="${e.href}"
          class="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="contact-link-label" dir="ltr">${e.label}</span>
        </a>`).join(``)}
      </div>
    </section>
  `,mount(e){let t=e.querySelector(`.contact-email`);if(!t)return;let n=t.querySelector(`.contact-email-toggle`),r=t.querySelector(`.contact-email-panel`),i=t.querySelector(`.contact-copy`),a=0,o=0;t.addEventListener(`click`,e=>{t.dataset.open!==`true`&&(e.preventDefault(),t.dataset.open=`true`,n.hidden=!0,r.hidden=!1,i.focus({preventScroll:!0}),clearTimeout(o),o=setTimeout(()=>{let e=t.contains(document.activeElement);t.dataset.open=`false`,r.hidden=!0,n.hidden=!1,i.textContent=i.dataset.label,i.classList.remove(`is-done`),e&&n.focus({preventScroll:!0})},A*1e3))}),i.addEventListener(`click`,async()=>{let e=i.dataset.copy,t=!1;try{await navigator.clipboard.writeText(e),t=!0}catch{let n=document.createElement(`textarea`);n.value=e,n.setAttribute(`readonly`,``),n.style.position=`fixed`,n.style.opacity=`0`,document.body.append(n),n.select();try{t=document.execCommand(`copy`)}catch{t=!1}n.remove()}t&&(i.textContent=i.dataset.done,i.classList.add(`is-done`),clearTimeout(a),a=setTimeout(()=>{i.textContent=i.dataset.label,i.classList.remove(`is-done`)},1800))})}}],N={message:`DECRYPTED·`,glyphs:`0123456789abcdef`,font:`"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`,cellSize:null,lensRadius:null,fps:30,mutation:.025,base:.11,breath:.06,lensBoost:.45,waveBoost:.55,waveSpeed:11,levels:9,scrollWithPage:!0,paintBackground:!0,zIndex:-1,fgVar:`--cipher-fg`,bgVar:`--cipher-bg`,fg:null,bg:null,rippleIgnore:`a,button,input,select,textarea,summary,label,[role="button"],[contenteditable],[data-no-ripple]`,canvas:null,autostart:!0};function P(e={}){var t;let n={...N,...e},r=matchMedia(`(prefers-reduced-motion: reduce)`).matches,i=document.documentElement,a=!!n.canvas,o=n.canvas||document.createElement(`canvas`);a||(o.setAttribute(`aria-hidden`,`true`),o.className=`cipher-background`,Object.assign(o.style,{position:`fixed`,left:`0`,top:`0`,width:`100vw`,height:`100vh`,pointerEvents:`none`,zIndex:String(n.zIndex),display:`block`}),document.body.prepend(o));let s=o.getContext(`2d`),c=matchMedia(`(pointer: coarse)`).matches,l=()=>a?o.getBoundingClientRect():{left:0,top:0,width:innerWidth,height:innerHeight},u=document.createElement(`canvas`).getContext(`2d`),d=(e,t)=>{u.fillStyle=`#000`,u.fillStyle=t,u.fillStyle=e||t;let n=u.fillStyle;if(n[0]===`#`)return[1,3,5].map(e=>parseInt(n.slice(e,e+2),16));let r=n.match(/[\d.]+/g);return r?r.slice(0,3).map(Number):[0,0,0]},f=e=>getComputedStyle(i).getPropertyValue(e).trim(),p=e=>!e||e===`transparent`||/rgba\(.*,\s*0\)$/.test(e),m=[],h=`#000`;function g(){let e=getComputedStyle(document.body),t=getComputedStyle(i),r=n.fg||f(n.fgVar)||e.color,a=n.bg||f(n.bgVar)||(p(e.backgroundColor)?t.backgroundColor:e.backgroundColor),o=d(r,`#d8d8d8`),s=d(p(a)?`#070707`:a,`#070707`);h=`rgb(${s.join(`,`)})`,m=Array.from({length:n.levels},(e,t)=>{let r=.08+.92*(t/(n.levels-1))**1.15;return`rgb(${o.map((e,t)=>Math.round(s[t]+(e-s[t])*r)).join(`,`)})`})}let _=0,v=0,y=14,b=0,x=0,S=[],C=140,w=new Float32Array,T=new Float32Array,E=new Uint8Array,D=[],O=()=>n.glyphs[Math.random()*n.glyphs.length|0];function k(){let e=l();if(e.width<2||e.height<2)return;_=e.width,v=e.height;let t=Math.min(devicePixelRatio||1,c?1.5:2,Math.sqrt(4e6/Math.max(1,_*v)));o.width=Math.round(_*t),o.height=Math.round(v*t),s.setTransform(t,0,0,t,0,0);let r=a?c:_<640;y=n.cellSize||(r?11:14),C=n.lensRadius||(r?90:a?110:140),b=Math.ceil(_/y)+1,x=Math.ceil(v/y)+2,S=Array.from({length:b*x},O);let i=b*x;w=new Float32Array(i),T=new Float32Array(i),E=new Uint8Array(i);for(let e=0;e<i;e++)w[e]=Math.random()*Math.PI*2,T[e]=.35+Math.random()*1.3,E[e]=+(Math.random()<.5);D=Array.from({length:x},()=>Math.random()*997|0)}let A={x:-1e4,y:-1e4,tx:-1e4,ty:-1e4},j=[],M=(e,t)=>{A.tx=e,A.ty=t,A.x<-9e3&&(A.x=e,A.y=t)},P=e=>M(e.clientX,e.clientY),F=e=>{let t=e.touches[0];t&&M(t.clientX,t.clientY)},I=()=>{A.tx=A.ty=A.x=A.y=-1e4},L=e=>{if(!(n.rippleIgnore&&e.target.closest&&e.target.closest(n.rippleIgnore))){if(a){let t=l();if(e.clientX<t.left||e.clientX>t.left+t.width||e.clientY<t.top||e.clientY>t.top+t.height)return}R(e.clientX,e.clientY),M(e.clientX,e.clientY)}};function R(e,t){j.push({x:e,y:t,r:0})}let z=0,B=0,V=!0,H=r?140:1e3/(innerWidth<640?Math.min(n.fps,24):n.fps);function U(e){if(B=requestAnimationFrame(U),!V||document.hidden||e-z<H||(z=e,(!S.length||!_)&&(k(),!S.length||!_)))return;let t=l(),i=t.left,o=t.top;A.x+=(A.tx-A.x)*.25,A.y+=(A.ty-A.y)*.25,n.paintBackground?(s.fillStyle=h,s.fillRect(0,0,_,v)):s.clearRect(0,0,_,v),s.font=`${Math.round(y*.82)}px ${n.font}`,s.textBaseline=`middle`,s.textAlign=`center`;let c=S.length,u=r?0:c*n.mutation|0;for(let e=0;e<u;e++){let e=Math.random()*c|0;S[e]=O(),Math.random()<.3&&(E[e]^=1)}let d=Math.hypot(_,v);for(let e of j)e.r+=n.waveSpeed;j=j.filter(e=>e.r<d);let f=n.scrollWithPage&&!a?scrollY:0,p=Math.floor(f/y),g=f-p*y,M=m.length,N=m.map(()=>[]),P=e*.0015,F=e/160|0,I=n.message||` `;for(let e=0;e<x;e++){let t=e*y-g+y/2,r=((p+e)%x+x)%x,a=r*b,s=D[r]||0;for(let e=0;e<b;e++){let r=e*y+y/2,c=a+e,l=Math.hypot(r+i-A.x,t+o-A.y),u=l<C?1-l/C:0,f=0;for(let e of j){let n=(Math.hypot(r+i-e.x,t+o-e.y)-e.r)/26;f=Math.max(f,Math.exp(-n*n)*(1-e.r/d))}let p=n.base+n.breath*Math.sin(P*T[c]+w[c])+u*n.lensBoost+f*n.waveBoost,m=Math.min(M-1,Math.max(0,Math.floor(p*M)));if(m===0&&E[c])continue;let h=u>.3||f>.4?I[(e+s+F)%I.length]:S[c];N[m].push(r,t,h)}}for(let e=0;e<M;e++){let t=N[e];if(t.length){s.fillStyle=m[e];for(let e=0;e<t.length;e+=3)s.fillText(t[e+2],t[e],t[e+1])}}A.tx>-9e3&&(s.strokeStyle=m[Math.min(2,M-1)],s.beginPath(),s.arc(A.x-i,A.y-o,C,0,Math.PI*2),s.stroke())}let W=0,G=()=>{clearTimeout(W),W=setTimeout(k,120)},K=a&&`ResizeObserver`in window?new ResizeObserver(G):null;K&&K.observe(o);let q=new MutationObserver(g);q.observe(i,{attributes:!0,attributeFilter:[`class`,`data-theme`,`style`]}),q.observe(document.body,{attributes:!0,attributeFilter:[`class`,`data-theme`,`style`]});let J=matchMedia(`(prefers-color-scheme: dark)`);return(t=J.addEventListener)==null||t.call(J,`change`,g),addEventListener(`pointermove`,P,{passive:!0}),addEventListener(`touchmove`,F,{passive:!0}),addEventListener(`pointerdown`,L,{passive:!0}),addEventListener(`resize`,G),i.addEventListener(`pointerleave`,I),g(),k(),V=n.autostart,B=requestAnimationFrame(U),{canvas:o,ripple:R,refreshColors:g,setMessage(e){n.message=e},start(){V=!0},resume(){V=!0},pause(){V=!1},stop(){var e;cancelAnimationFrame(B),q.disconnect(),K&&K.disconnect(),(e=J.removeEventListener)==null||e.call(J,`change`,g),removeEventListener(`pointermove`,P),removeEventListener(`touchmove`,F),removeEventListener(`pointerdown`,L),removeEventListener(`resize`,G),i.removeEventListener(`pointerleave`,I),a||o.remove()}}}var F={meta:{title:`Shraddha Mishra | ML Systems Researcher & R&D Engineer`},ui:{digitalCv:`DIGITAL CV`,navigation:`CV navigation`,sections:`CV sections`,downloadCv:`Download Her CV`,toggleTheme:`Toggle Theme`,switchToLight:`Switch to light theme`,switchToDark:`Switch to dark theme`,themeDark:`Dark · Green / Black`,themeLight:`Light · White / Pink`,language:`Language`,chooseLanguage:`Choose language`,openNavigation:`Open navigation`,closeNavigation:`Close navigation`,present:`Present`},menu:{profile:`Profile`,experience:`Experience`,education:`Education`,publications:`Publications`,research:`Research`,projects:`Projects`,skills:`Skills`,personality:`Personality`,contact:`Contact`},profile:{kicker:`Research · System Design · FinTech`,copy:`Machine-learning systems researcher building reproducible infrastructure, experimental frameworks, and dependable technical systems.`,focusLabel:`Focus`,focusValue:`ML Systems`,interestsLabel:`Interests`,interestsValue:`Systems Design; Financial Decision Systems; Decision-Making under Uncertainty`,locationLabel:`Location`,locationValue:`Taiwan / Remote`},experience:{kicker:`Professional Timeline`,title:`Experience`,breakLabel:`Planned Transition`,supervisorLabel:`Research Supervisor`,labLabel:`Laboratory`,skillsLabel:`Skills Acquired`,fieldsLabel:`Fields Explored`,fields:[`Computer Vision`,`Quantum Machine Learning`,`Software Development & MLOps`,`Deep Learning for Hardware Security`],nextLabel:`Next:`,nextField:`Machine Learning in Finance`,entries:[{title:`Research Assistant`,org:`Academia Sinica, Taiwan`,field:`Deep Learning for Hardware Security · DL-SCA`,lab:`Advanced Cryptographic Engineering (ACE) Lab · Post-Quantum Cryptography Laboratory Group · Institute of Information Science (IIS)`,paragraphs:[`Conducted research on deep-learning side-channel analysis (DL-SCA) of AES implementations: defined the research questions of fidelity, auditability, generality and cost; surveyed fifteen existing DL-SCA tools and frameworks; and identified a research-infrastructure gap in DL-SCA studies.`,`Delivered TraceFlow, a framework for reproducible DL-SCA experiments, and used it to reproduce three published studies across four public trace datasets (ASCAD fixed-key, AES_RD, DPAv4, AES_HD) in 1,795 automated experiment runs, spanning hold-out and k-fold training, imported released models, and full and budgeted attacks, with key-recovery reports and artifact provenance.`,`Carried forward: a rigorous standard for evaluating probabilistic models, and the engineering discipline required to make research results reproducible, auditable and verifiable at scale.`],skills:[`Side-Channel Analysis`,`Probabilistic Model Evaluation`,`Research Infrastructure`,`Reproducibility Engineering`,`Experiment at Scale`,`Tamper-Evident Artifacts`,`Containerized GPU Training`,`CLI–UI Integration`,`Scientific Writing`]},{title:`Career Break`,org:``,field:``,lab:``,paragraphs:[`Undertook a planned career break to return from industry to research and to realign my work with long-term academic goals.`],skills:[]},{title:`Natural Language Processing Engineer`,org:`Aiello Inc., Taiwan`,field:`MLOps · Backend Engineering`,lab:``,paragraphs:[`Developed and maintained backend APIs and service scripts for the company’s ChatGPT-based SaaS product, VOCOL.`,`Contributed to algorithm-level performance improvements, major Docker image-size reduction, CI/CD efficiency, deployment reliability, and secure secret handling.`],skills:[]},{title:`Research Assistant`,org:`Tamkang University, Taiwan`,field:`Quantum Machine Learning · Computer Vision`,lab:`Robotic Vision Lab · Division of Artificial Intelligence & Internet of Things · Department of Electrical and Computer Science Engineering`,paragraphs:[`Initiated and led the department’s first exploratory research direction in quantum computing for computer vision, including the proposal of viable quantum machine-learning applications and of the research methodology.`,`Designed and evaluated multiple parameterized quantum circuits (PQCs), identifying high-performing architectures for image-feature extraction as quantum neural networks.`,`Implemented the best-performing circuit as a quantum convolutional layer and created QSurfNet by augmenting Professor Tsai’s SurfNet network for surface-defect recognition with a single QCNN layer; the work was published in Quantum Information Processing (Springer) and at ICCAE 2022, Australia.`,`Carried forward: the confidence to open an unfamiliar research direction independently, and a method of systematic architecture search and comparative evaluation.`],skills:[`Quantum Machine Learning`,`Parameterized Quantum Circuits`,`Hybrid Neural Networks`,`Computer Vision`,`Research Methodology`,`Scientific Writing`]},{title:`Deep Learning Engineer`,org:`Statement Cloud Digital Technology Co., Ltd., Taiwan`,field:`Computer Vision · Backend Engineering`,lab:``,paragraphs:[`Developed datasets, an image-recognition prototype, and model training and monitoring components for automated Taiwanese receipt recognition.`],skills:[]}]},education:{kicker:`Academic Foundation`,title:`Education`,thesisLabel:`Thesis`,supervisorLabel:`Research Supervisor`,publicationsChip:`2 Publications`,scholarTitle:`Open Google Scholar profile`,entries:[{degree:`Master of Engineering`,field:`Artificial Intelligence & Internet of Things`,institution:`Tamkang University · Taiwan`,lines:[`Laboratory: Robotic Vision Lab · Division of Artificial Intelligence & Internet of Things · Department of Electrical and Computer Science Engineering`,`GPA: 3.906 / 4 · Cumulative Percentage: 88.99% · Thesis Score: 91 / 100 · Papers Published: 2`],tags:[`Quantum Machine Learning`,`Computer Vision`]},{degree:`Bachelor of Engineering`,field:`Electrical & Electronics Engineering`,institution:`Bhilai Institute of Technology · India`,lines:[`Department of Electrical and Electronics Engineering`,`Cumulative Performance Index: 7.59 · Percentage: 68.13%`],tags:[]},{degree:`Senior Secondary Education`,field:`Central Board of Secondary Education`,institution:`Allahabad Public School · Prayagraj, India`,lines:[`Percentage: 87%`],tags:[]}]},research:{kicker:`Research Direction`,title:`Research`,journey:[{title:`Early Adopter`,org:`Bachelor’s Final-Year Project, India`,tags:[`Pattern Recognition`,`AI`],text:`In my final year of undergraduate study, I turned to artificial intelligence and completed an introductory project on image classification. That experience first directed me toward pattern recognition as a research direction.`},{title:`Master’s Research`,org:`Tamkang University, Taiwan`,tags:[`Quantum Machine Learning`,`Computer Vision`],text:`During my master’s degree, I examined whether quantum computing could meaningfully improve pattern-recognition systems. My results indicated that it can, particularly for image data, leading to my work on hybrid quantum-classical learning for visual recognition.`},{title:`Deep Learning Engineer`,org:`StatementCloud, Taiwan`,tags:[`Project Planning`,`Computer Vision`,`Automation`],text:`At StatementCloud, I worked on receipt-scanning software, developed datasets, and contributed to the design of a tailored solution for users. This experience deepened my understanding of project planning, automation, APIs, and the systematic engineering that real-world computer-vision systems require.`},{title:`NLP MLOps Engineer`,org:`Aiello, Taiwan`,tags:[`MLOps`,`Automation`,`Production ML`],text:`At Aiello, I gained my first substantial exposure to MLOps. I learned how larger ML products are organized, maintained, automated, and deployed in production environments, strengthening my interest in operationally stable machine-learning systems.`},{title:`Research Assistant`,org:`Academia Sinica, Taiwan`,tags:[`DL-SCA`,`Research Infrastructure`,`Probabilistic Evaluation`,`Reproducibility`],text:`At Academia Sinica, deep-learning side-channel analysis became my schooling in research method. A DL-SCA model outputs a probability distribution over key-dependent values, and its success lies in how that evidence accumulates across traces, measured by guessing entropy, key rank and the number of traces needed to recover the key, rather than by accuracy. Models with near-random accuracy can still recover the key, and results shift with the data split, the seed and the attack budget. I learned to judge probabilistic models through rank-based, test-trace budget-aware metrics and through variance across repeated runs. Because published results proved difficult to reproduce, I built TraceFlow, and I will carry its practice into my doctoral research: configuration as code, traceable runs, provenance, tamper-evident artifacts for verifiable and auditable results, and faithful reruns.`},{title:`Towards a PhD`,org:`Independent Preparation, Taiwan`,tags:[`Decision-Making under Uncertainty`,`Engineering Mathematics`,`Risk-Aware Learning`,`Multi-Agent Systems`],text:`One question has run through all of my work: how can a learning system arrive at the best possible decision, and how can we trust that it did? In my master’s research, I pursued it at the level of the model, searching for the circuit architecture that decided best from image data. At Academia Sinica, I pursued it at the level of the evidence, building infrastructure that makes research decisions reproducible and verifiable at scale. In my PhD, I intend to pursue it at the level of the decision itself: autonomous, risk-aware and reliable decision-making among adaptive and adversarial agents under regime shift. Financial markets will be my most demanding testbed, not the boundary of the work. In preparation, I am strengthening my foundation in engineering mathematics and studying the methods on which such decisions rest.`}],future:[`My work has progressed steadily from building AI models to building dependable systems around them, and from one field to the next. I have repeatedly taken on roles in fields where I had no prior background, including quantum machine learning, receipt recognition, production NLP backends and cryptographic side-channel analysis, and delivered working, documented results in each.`,`I intend to investigate autonomous, risk-aware decision-making among adaptive and adversarial agents under regime shift, and to engineer systems that remain reliable on difficult, assumption-violating data. Financial markets are my intended testbed, because they demand robustness, adaptive reasoning, and disciplined execution under risk.`]},projects:{kicker:`Selected Research Systems`,title:`Projects`,viewPublication:`View Publication`,items:[{status:`2/2 Manuscript in Preparation`,paragraphs:[`An extensible framework for reproducible deep-learning side-channel analysis.`,`TraceFlow enables researchers to define, run, monitor and rerun DL-SCA experiments from configuration alone. Every run becomes a verifiable record of its results, figures and provenance, so that a published result can be reproduced, audited and compared.`],tags:[`Research Infrastructure`,`MLOps`,`Side-Channel Analysis`,`Reproducibility`],availability:`Manuscript in preparation. Source code will be released following publication.`},{status:`Published Research`,paragraphs:[`A hybrid quantum-classical convolutional neural network developed during my master’s research for surface-defect recognition.`,`The project investigated whether parameterized quantum circuits could improve image-feature extraction when a quantum convolutional neural layer is integrated with a classical convolutional architecture.`],tags:[`Quantum Machine Learning`,`Computer Vision`,`Hybrid Neural Networks`,`Surface Inspection`],availability:`Research results are publicly available through the associated publications. The original research implementation is not currently released as a public repository.`}]},publications:{kicker:`Research Output`,title:`Publications`,totalCitations:`Total Citations`,citations:`citations`,yearUnavailable:`Year unavailable`,viewScholar:`View Google Scholar Profile`,none:`No publications are currently available.`},skills:{kicker:`Technical Capability`,title:`Skills`,strengthsLabel:`Core technical strengths`,strengths:[{title:`Reproducibility Engineering`,tags:[`Reproducible Research`,`Experiment Tracking`,`Data Provenance`,`Configuration Management`,`Deterministic ML`]},{title:`End-to-End Ownership`,tags:[`Research Engineering`,`System Design`,`Software Architecture`,`Project Proposals`,`Project Planning`,`Technical Leadership`]},{title:`Learning a New Field and Delivering`,tags:[`Cross-Disciplinary Research`,`Deep-Learning Side-Channel Analysis`,`MLOps Practices`,`Quantum Machine Learning`,`Computer Vision`]},{title:`Research Infrastructure at Scale`,tags:[`ML Systems`,`MLOps`,`Workflow Orchestration`,`GPU Computing`,`Docker`,`Automation`,`Environment Configuration`,`Fallback Planning`,`Two-Level Fallback Exception Handling`]},{title:`Bridging Research and Production`,tags:[`Production ML`,`Backend Development`,`API Development`,`Unit Testing`,`Software Quality`,`Correctness before Speed`]}],intro:[`I build research and software systems across languages and technology stacks. My primary strength is not attachment to a single language, but the ability to translate a technical vision into a structured, testable, and maintainable implementation.`,`I work extensively with AI coding agents as engineering collaborators: defining architecture, decomposing requirements, reviewing generated code, identifying failures, validating behavior, and integrating each component into the wider system.`],groups:[{title:`Systems & Software Development`,text:`Modular architecture, requirements decomposition, interface design, refactoring, debugging, validation, and maintainable implementation.`,tags:[`System Architecture`,`Modular Design`,`API Design`,`Testing`,`Debugging`,`Code Review`,`Project Planning`]},{title:`Programming & Application Development`,text:`Active development across scientific computing, systems programming, automation, browser-based applications, and VS Code panel integrations.`,tags:[`Python`,`C++`,`Java`,`JavaScript`,`HTML`,`CSS`,`Shell`,`VS Code Extensions`]},{title:`Machine Learning & Research Engineering`,text:`Development of reproducible ML experiments, research pipelines, model-evaluation workflows, and scientific software.`,tags:[`PyTorch`,`Keras`,`Deep Learning`,`Computer Vision`,`Experiment Design`,`Model Evaluation`,`Probabilistic Model Evaluation`,`Scientific Computing`]},{title:`MLOps & Automation`,text:`Automation of experiments, builds, deployments, artifact management, configuration, and repeatable development workflows.`,tags:[`Docker`,`Containerization`,`Linux`,`Git`,`GitHub Actions`,`CI/CD`,`YAML`,`Configuration-as-Code`,`Experiment Tracking`,`Experiment at Scale`,`Artifact Management`,`Provenance`,`Tamper-Evident Artifacts`]},{title:`AI-Augmented Engineering`,text:`Direction of AI coding agents throughout the software lifecycle, with retained responsibility for architecture, correctness, security, integration, and final technical decisions.`,tags:[`Agentic Development`,`Prompted Implementation`,`Code Verification`,`Failure Analysis`,`Iterative Refactoring`,`Human-in-the-Loop Engineering`]},{title:`Research Communication`,text:`Technical documentation, experimental reporting, publication development, and clear communication of complex system behavior.`,tags:[`LaTeX`,`Scientific Writing`,`Technical Documentation`,`Vector Graphics`,`Data Visualization`]}]},personality:{kicker:`Working Style`,title:`Personality`,featuredLabel:`Core Value`,summary:`I am a perceptive, independent, and highly structured technical professional. I work best when given clear ownership of a meaningful problem and sufficient space to examine it deeply.`,cards:[{title:`Independent Execution`,text:`I am comfortable taking responsibility for a project from initial architecture through implementation, validation, refinement, and final delivery.`,tags:[`Autonomy`,`Execution Ownership`,`Disciplined Execution`]},{title:`Deep Technical Focus`,text:`I produce my strongest work in quiet, low-interruption environments where I can maintain context, investigate complex behavior, and build coherent solutions without unnecessary fragmentation.`,tags:[`Deep Work`,`Sustained Focus`,`Context Retention`]},{title:`Structured Problem Solving`,text:`I naturally organize complex work into clear components, interfaces, dependencies, and validation stages. I prefer systems that are understandable, traceable, and deliberately designed.`,tags:[`Systematic Thinking`,`Structure & Organization`,`Separation of Concerns`]},{title:`Quality Awareness`,text:`I notice inconsistencies quickly and tend to investigate them until the underlying cause is understood. I value correctness, maintainability, and evidence over superficial completion.`,tags:[`Validation`,`Debugging`,`Quality Control`]},{title:`High Context Sensitivity`,text:`I am sensitive to subtle changes in systems, environments, and communication. In technical work, this helps me identify small discrepancies, hidden assumptions, and points of friction that may otherwise be overlooked.`,tags:[`Pattern Awareness`,`Attention to Detail`,`Context-Aware Design`]},{title:`Focused Collaboration`,text:`I collaborate best through clear objectives, thoughtful technical discussion, written documentation, and defined responsibilities. I prefer purposeful communication over frequent meetings or continuously interrupted workflows.`,tags:[`Clear Communication`,`Documentation`,`Focused Collaboration`]},{title:`Cross-Cultural Communication`,text:`Since 2019, Taiwan has been my home. I do not merely work here; I live as part of the local community, sharing everyday life with neighbours and friends of every generation, hosting, helping where I can, and gathering many happy memories. Teaching undergraduate English at Tamkang University, and working fluently in English and Hindi, have taught me to communicate with clarity and care across languages and cultures.`,tags:[`Community Life`,`Multilingual Communication`,`Teaching`,`Cultural Adaptability`]},{title:`Human-Centered Engineering`,text:`I pair analytical discipline with empathy for the people who use, maintain, and depend on technical systems. I care not only about whether a system works, but also about whether it is understandable, dependable, and practical for its intended users.`,tags:[`Empathy`,`User Awareness`,`Responsible Engineering`]}]},contact:{kicker:`Research & Professional Inquiries`,title:`Contact`,intro:`Open to research collaboration, technical discussion, and opportunities involving machine-learning systems, reproducible research, and autonomous decision-making.`,email:`Email`,copy:`Copy`,copied:`Copied`}},I=`modulepreload`,L=function(e){return`/`+e},R={},z=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute(`nonce`));function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=L(t,n),t=s(t),t in R)return;R[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:I,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},B=[{code:`en`,name:`English`,lang:`en`,dir:`ltr`},{code:`zh-TW`,name:`繁體中文`,lang:`zh-Hant-TW`,dir:`ltr`},{code:`zh-CN`,name:`简体中文`,lang:`zh-Hans-CN`,dir:`ltr`},{code:`de`,name:`Deutsch`,lang:`de`,dir:`ltr`},{code:`de-CH`,name:`Deutsch (Schweiz)`,lang:`de-CH`,dir:`ltr`},{code:`ru`,name:`Русский`,lang:`ru`,dir:`ltr`},{code:`ar`,name:`العربية`,lang:`ar`,dir:`rtl`},{code:`es`,name:`Español`,lang:`es`,dir:`ltr`}],V={"zh-TW":()=>z(()=>import(`./zh-TW-DFZbggOu.js`),[]),"zh-CN":()=>z(()=>import(`./zh-CN-Bnq5L0K4.js`),[]),de:()=>z(()=>import(`./de-D_YY4lQg.js`),[]),"de-CH":()=>z(()=>import(`./de-CH-D_MIbsgf.js`),[]),ru:()=>z(()=>import(`./ru-ComQcW7y.js`),[]),ar:()=>z(()=>import(`./ar-EsGmK1ub.js`),[]),es:()=>z(()=>import(`./es-CFG_3O3A.js`),[])},H=`digital-cv-language`,U={en:F},W=new Set,G=`en`,K=F;function q(e){return B.some(t=>t.code===e)}function J(e){let t=String(e||``).toLowerCase();if(!t)return null;if(t.startsWith(`zh`))return t.includes(`hant`)||t.endsWith(`-tw`)||t.endsWith(`-hk`)||t.endsWith(`-mo`)?`zh-TW`:`zh-CN`;if(t===`de-ch`||t===`gsw`||t.startsWith(`gsw-`))return`de-CH`;let n=t.split(`-`)[0],r=B.find(e=>e.code.toLowerCase()===n);return r?r.code:null}function ee(){var e;try{let e=localStorage.getItem(H);if(e&&q(e))return e}catch{}let t=(e=navigator.languages)!=null&&e.length?navigator.languages:[navigator.language];for(let e of t){let t=J(e);if(t)return t}return`en`}function te(){return G}function ne(){return K}function Y(e){var t,n;let r=t=>e.split(`.`).reduce((e,t)=>e==null?void 0:e[t],t);return(t=(n=r(K))==null?r(F):n)==null?e:t}function re(e){return W.add(e),()=>W.delete(e)}function ie(e){var t,n,r;let i=(t=B.find(t=>t.code===e))==null?B[0]:t,a=document.documentElement;a.lang=i.lang,a.dataset.locale=i.code,a.dataset.dir=i.dir,document.title=(n=(r=K.meta)==null?void 0:r.title)==null?F.meta.title:n}async function ae(e,{remember:t=!0}={}){let n=q(e)?e:`en`;if(!U[n])try{U[n]=(await V[n]()).default}catch(e){return console.error(`Could not load language "${n}".`,e),G}if(G=n,K=U[n],ie(n),t)try{localStorage.setItem(H,n)}catch{}return W.forEach(e=>e(n)),n}function oe(e=document){e.querySelectorAll(`[data-i18n]`).forEach(e=>{e.textContent=Y(e.dataset.i18n)}),e.querySelectorAll(`[data-i18n-attr]`).forEach(e=>{e.dataset.i18nAttr.split(`,`).forEach(t=>{let[n,r]=t.split(`:`).map(e=>e.trim());n&&r&&e.setAttribute(n,Y(r))})})}function se({target:e,sections:t,onSelect:n}){let r=document.createDocumentFragment();return t.forEach((t,i)=>{let a=document.createElement(`button`);a.type=`button`,a.className=`menu-item`,a.dataset.section=t.id;let o=document.createElement(`span`);o.className=`menu-index`,o.textContent=String(i+1).padStart(2,`0`);let s=document.createElement(`span`);s.className=`menu-label`,s.textContent=Y(`menu.${t.id}`),a.append(o,s),a.addEventListener(`mouseenter`,()=>{a.classList.add(`is-previewing`)}),a.addEventListener(`mouseleave`,()=>{a.classList.remove(`is-previewing`)}),a.addEventListener(`click`,()=>{e.querySelectorAll(`.menu-item`).forEach(e=>{e.classList.toggle(`is-active`,e===a)}),n(t.id)}),i===0&&a.classList.add(`is-active`),r.appendChild(a)}),e.replaceChildren(r),ce(),{relabel(){e.querySelectorAll(`.menu-item`).forEach(e=>{let t=e.querySelector(`.menu-label`);t&&(t.textContent=Y(`menu.${e.dataset.section}`))})}}}function ce(){let e=document.querySelector(`#matrix-rain`);if(!e||e.dataset.cipherStarted===`true`)return;e.dataset.cipherStarted=`true`;let t=P({canvas:e,autostart:!1,paintBackground:!1,message:`SHRADDHA·MISHRA·`,rippleIgnore:`input,select,textarea`}),n=!1,r=()=>{n&&!document.hidden?t.start():t.pause()};`IntersectionObserver`in window?new IntersectionObserver(e=>{n=e.some(e=>e.intersectionRatio>.02),r()},{threshold:[0,.02,.1]}).observe(e):n=!0,document.addEventListener(`visibilitychange`,r),r()}var le=170,ue=.3,X=30,de=48,fe=.6,pe=6,me=1.4,he=.3,ge=.25,_e=3e3;function ve(e){if(!e)return{open(){},close(){},relabel(){}};let t=document.documentElement,n=document.querySelector(`#drawer-handle`),r=!1,i=0,a=``,o=0,s=0,c=0,l=()=>{let n=getComputedStyle(e).getPropertyValue(`--drawer-peek`),r=parseFloat(getComputedStyle(t).fontSize);s=(parseFloat(n)||1)*r,c=e.offsetWidth};l(),window.addEventListener(`resize`,l,{passive:!0}),`ResizeObserver`in window&&new ResizeObserver(l).observe(e);let u=()=>Math.max(1,c-s),d=t=>{i=Math.min(1,Math.max(0,t)),!o&&(o=requestAnimationFrame(()=>{o=0;let t=i.toFixed(3);t!==a&&(a=t,e.style.setProperty(`--drawer-pull`,t),n==null||n.style.setProperty(`--drawer-pull`,t))}))},f=t=>{e.classList.toggle(`is-dragging`,t),n==null||n.classList.toggle(`is-dragging`,t)},p=()=>{n==null||n.setAttribute(`aria-label`,Y(r?`ui.closeNavigation`:`ui.openNavigation`))},m=window.matchMedia(`(hover: none), (pointer: coarse)`),h=0,g=()=>{clearTimeout(h),h=0},_=()=>{g(),r&&m.matches&&(h=setTimeout(()=>v(!1),_e))},v=t=>{r=t,e.classList.toggle(`is-open`,t),f(!1),d(+!!t),_(),n&&(n.classList.toggle(`is-open`,t),n.setAttribute(`aria-expanded`,String(t)),p())};window.addEventListener(`pointermove`,e=>{if(e.pointerType!==`mouse`)return;let t=e.clientX;if(r){t>c+de&&v(!1);return}let n=t-s;if(n<=X){v(!0);return}if(n>=le){d(0);return}let i=1-(n-X)/(le-X);d(ue*i*i)},{passive:!0}),t.addEventListener(`mouseleave`,()=>{v(!1)});let y=null,b=0;window.addEventListener(`touchstart`,t=>{if(g(),t.touches.length!==1){y=null;return}let i=t.touches[0],a=!!(n&&n.contains(t.target)),o=e.contains(t.target),s=i.clientX<=window.innerWidth*fe;if(!r&&!s&&!a){y=null;return}y={startX:i.clientX,startY:i.clientY,lastX:i.clientX,lastTime:t.timeStamp,velocity:0,startPull:+!!r,dragging:!1,insideDrawer:o,onHandle:a}},{passive:!0}),window.addEventListener(`touchmove`,e=>{if(!y)return;let t=e.touches[0],n=t.clientX-y.startX,i=t.clientY-y.startY;if(!y.dragging){if(Math.abs(n)<pe&&Math.abs(i)<pe)return;let a=Math.abs(i)<=Math.abs(n)*me,o=y.onHandle||(r?n<0:n>0);if(!a||!o){y=null;return}y.dragging=!0,y.startX=t.clientX,y.lastX=t.clientX,y.lastTime=e.timeStamp,f(!0)}e.cancelable&&e.preventDefault();let a=Math.max(1,e.timeStamp-y.lastTime),o=(t.clientX-y.lastX)/a;y.velocity=y.velocity*.4+o*.6,y.lastX=t.clientX,y.lastTime=e.timeStamp,d(y.startPull+(t.clientX-y.startX)/u())},{passive:!1});let x=e=>{if(Math.abs(e)>ge){v(e>0);return}v(r?i>1-he:i>he)};return window.addEventListener(`touchend`,e=>{if(_(),!y)return;let t=y;if(y=null,t.dragging){x(t.velocity),b=e.timeStamp+400;return}if(!t.onHandle){if(!r&&t.insideDrawer){v(!0),e.preventDefault();return}r&&!t.insideDrawer&&v(!1)}}),window.addEventListener(`touchcancel`,()=>{y!=null&&y.dragging&&x(y.velocity),y=null,_()}),e.addEventListener(`scroll`,_,{passive:!0,capture:!0}),window.addEventListener(`click`,e=>{e.timeStamp<b&&(e.preventDefault(),e.stopPropagation())},!0),n==null||n.addEventListener(`click`,()=>{v(!r)}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&r&&v(!1)}),e.classList.add(`has-magnet`),n==null||n.classList.add(`is-ready`),{open:()=>v(!0),close:()=>v(!1),relabel:p}}function ye({toggle:e,menu:t}){if(!e||!t)return{relabel(){}};let n=!1;function r(r){n=r,t.hidden=!r,e.setAttribute(`aria-expanded`,String(r)),e.classList.toggle(`is-open`,r)}function i(){let e=te();t.querySelectorAll(`.language-option`).forEach(t=>{let n=t.dataset.locale===e;t.classList.toggle(`is-current`,n),t.setAttribute(`aria-checked`,String(n))})}B.forEach(n=>{let i=document.createElement(`button`);i.type=`button`,i.className=`language-option`,i.dataset.locale=n.code,i.setAttribute(`role`,`menuitemradio`),i.setAttribute(`lang`,n.lang),i.setAttribute(`dir`,n.dir),i.textContent=n.name,i.addEventListener(`click`,async()=>{r(!1),i.classList.add(`is-loading`),await ae(n.code),i.classList.remove(`is-loading`),e.focus({preventScroll:!0})}),t.appendChild(i)}),e.addEventListener(`click`,e=>{if(e.stopPropagation(),r(!n),n){var i,a;(i=(a=t.querySelector(`.is-current`))==null?t.firstElementChild:a)==null||i.focus({preventScroll:!0})}}),document.addEventListener(`click`,i=>{n&&!t.contains(i.target)&&i.target!==e&&r(!1)}),t.addEventListener(`keydown`,n=>{let i=[...t.querySelectorAll(`.language-option`)],a=i.indexOf(document.activeElement);n.key===`Escape`?(n.stopPropagation(),r(!1),e.focus({preventScroll:!0})):(n.key===`ArrowDown`||n.key===`ArrowUp`)&&(n.preventDefault(),i[(a+(n.key===`ArrowDown`?1:-1)+i.length)%i.length].focus({preventScroll:!0}))});function a(){e.setAttribute(`aria-label`,Y(`ui.chooseLanguage`)),e.setAttribute(`title`,Y(`ui.language`)),t.setAttribute(`aria-label`,Y(`ui.chooseLanguage`)),i()}return r(!1),a(),{relabel:a}}var Z={dark:{nameKey:`ui.themeDark`,switchKey:`ui.switchToLight`,next:`light`,frame:`#020603`},light:{nameKey:`ui.themeLight`,switchKey:`ui.switchToDark`,next:`dark`,frame:`#fffcfd`}};function be({toggle:e,label:t}){let n=localStorage.getItem(`digital-cv-theme`),r=n&&Z[n]?n:`dark`;function i(){let n=Z[r];t.textContent=Y(n.nameKey),e.setAttribute(`aria-label`,Y(n.switchKey)),e.setAttribute(`title`,Y(`ui.toggleTheme`))}function a(e){var t;r=e,document.documentElement.dataset.theme=e,(t=document.querySelector(`meta[name="theme-color"]`))==null||t.setAttribute(`content`,Z[e].frame),i(),localStorage.setItem(`digital-cv-theme`,e)}return e.addEventListener(`click`,()=>{a(Z[r].next)}),a(r),{relabel:i}}var xe,Q=document.querySelector(`#main-view`),Se=document.querySelector(`#section-menu`),Ce=document.querySelector(`#theme-toggle`),we=document.querySelector(`#theme-name`),Te=`profile`,Ee=20;function $(){for(let e of Q.querySelectorAll(`h2`)){e.style.fontSize=``;for(let t=0;t<4;t+=1){let t=e.clientWidth,n=e.scrollWidth;if(!t||n<=t+1)break;let r=parseFloat(getComputedStyle(e).fontSize),i=Math.max(Ee,t/n*r*.98);if(e.style.fontSize=`${i}px`,i===Ee)break}}}var De=0;window.addEventListener(`resize`,()=>{cancelAnimationFrame(De),De=requestAnimationFrame($)},{passive:!0}),(xe=document.fonts)==null||xe.ready.then($);function Oe(){var e,t;let n=(e=M.find(e=>e.id===Te))==null?M[0]:e;Q.innerHTML=n.render(ne()),Q.dataset.section=n.id,(t=n.mount)==null||t.call(n,Q),$()}function ke(e){Te=e,Q.classList.add(`is-changing`),window.setTimeout(()=>{Oe(),Q.classList.remove(`is-changing`),Q.focus({preventScroll:!0})},140)}async function Ae(){await ae(ee(),{remember:!1});let e=ve(document.querySelector(`#cv-drawer`)),t=se({target:Se,sections:M,onSelect:e=>{ke(e)}}),n=be({toggle:Ce,label:we}),r=ye({toggle:document.querySelector(`#language-toggle`),menu:document.querySelector(`#language-menu`)});function i(){oe(),t.relabel(),n.relabel(),r.relabel(),e.relabel(),Oe()}re(i),i()}function je(){`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`/sw.js`).then(()=>navigator.serviceWorker.ready).then(e=>{var t;let n=performance.getEntriesByType(`resource`).map(e=>e.name).filter(e=>e.startsWith(window.location.origin));(t=e.active)==null||t.postMessage({type:`cache-loaded`,urls:[...new Set(n)]})}).catch(()=>{})})}Ae(),je();