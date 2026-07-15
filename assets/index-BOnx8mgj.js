(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={id:`profile`,label:`Profile`,render:()=>`
    <section class="content-panel hero-panel">
      <p class="section-kicker">Research · System Design · FinTech</p>
      <h2>Shraddha Mishra</h2>
      <p class="hero-copy">
        Machine learning systems researcher building reproducible infrastructure,
        experimental frameworks,<br> 
        and dependable technical systems.
      </p>
      <div class="signal-grid">
        <article><span>Focus</span><strong>ML Systems</strong></article>
        <article><span>Interests</span><strong>Systems Design; Financial Decision Systems; Decision-Making under Uncertainty </strong></article>
        <article><span>Location</span><strong>Taiwan / Remote</strong></article>
      </div>
    </section>
  `},t={id:`experience`,label:`Experience`,render:()=>`
    <section class="content-panel experience-panel">
      <header class="experience-heading">
        <p class="section-kicker">Professional Timeline</p>
        <h2>Experience</h2>
      </header>

      <div class="career-timeline">

        <article class="career-entry">
          <div class="career-marker">
            <span class="career-year">2023 — Present</span>
            <span class="career-dot"></span>
          </div>

          <div class="career-details">
            <h3>
              Research Assistant
              <span>· Academia Sinica</span>
            </h3>

            <p>
              Researching machine-learning approaches for side-channel analysis
              and cryptographic threats.
            </p>

            <p>
              Designed and implemented an autonomous, YAML-policy-driven MLOps
              system for reproducible experimentation, controlled execution,
              and failure analysis.
            </p>
          </div>
        </article>

        <article class="career-entry career-break">
          <div class="career-marker">
            <span class="career-year">2023</span>
            <span class="career-dot"></span>
          </div>

          <div class="career-details">
            <span class="career-break-label">Planned Transition</span>

            <h3>
              Career Break
            </h3>

            <p>
              Took a deliberate break to transition from industry back into
              research and realign my work with long-term academic goals.
            </p>
          </div>
        </article>

        <article class="career-entry">
          <div class="career-marker">
            <span class="career-year">2022 — 2023</span>
            <span class="career-dot"></span>
          </div>

          <div class="career-details">
            <h3>
              Natural Language Processing Engineer
              <span>· Aiello Inc.</span>
            </h3>

            <p>
              Developed and maintained backend APIs and service scripts for the
              company’s ChatGPT-based SaaS product, VOCOL.
            </p>

            <p>
              Contributed to algorithm-level performance improvements, major
              Docker image-size reduction, CI/CD efficiency, deployment
              reliability, and secure secret handling.
            </p>
          </div>
        </article>

        <article class="career-entry">
          <div class="career-marker">
            <span class="career-year">2019 — 2022</span>
            <span class="career-dot"></span>
          </div>

          <div class="career-details">
            <h3>
              Research Assistant
              <span>· Robotic Vision Lab, Tamkang University</span>
            </h3>

            <p>
              Initiated the department’s exploratory research direction in
              quantum computing for computer vision.
            </p>

            <p>
              Designed parameterized quantum circuits and integrated a selected
              QCNN layer into a hybrid quantum-classical architecture, resulting
              in QSurfNet.
            </p>
          </div>
        </article>

        <article class="career-entry">
          <div class="career-marker">
            <span class="career-year">2022</span>
            <span class="career-dot"></span>
          </div>

          <div class="career-details">
            <h3>
              Deep Learning Engineer
              <span>· Statement Cloud Digital Technology</span>
            </h3>

            <p>
              Developed datasets, an image-recognition prototype, and model
              training and monitoring components for automated Taiwanese
              receipt recognition.
            </p>
          </div>
        </article>

      </div>
    </section>
  `},n={id:`education`,label:`Education`,render:()=>`
    <section class="content-panel education-panel">
      <header class="education-heading">
        <p class="section-kicker">Academic Foundation</p>
        <h2>Education</h2>
      </header>

      <div class="education-timeline">

        <article class="education-entry">
          <div class="education-marker">
            <span class="education-year">2019 — 2022</span>
            <span class="education-dot"></span>
          </div>

          <div class="education-details">
            <h3>
              Master of Engineering
              <span>· Artificial Intelligence & Internet of Things</span>
            </h3>

            <p class="education-institution">
              Tamkang University · Taiwan
            </p>

            <p>
              Robotic Vision Lab under Professor Chi-Yi Tsai.
            </p>

            <p>
              GPA: 3.906 / 4 · Cumulative Percentage: 88.99% ·
              Thesis Score: 91 / 100
            </p>

            <p>
              Thesis:
              <strong>
                QSurfNet: A Hybrid Quantum Convolutional Neural Network
                for Surface Defect Recognition
              </strong>
            </p>

            <div class="education-highlights">
              <span>2 Publications</span>
              <span>Quantum Machine Learning</span>
              <span>Computer Vision</span>
            </div>
          </div>
        </article>

        <article class="education-entry">
          <div class="education-marker">
            <span class="education-year">2014 — 2018</span>
            <span class="education-dot"></span>
          </div>

          <div class="education-details">
            <h3>
              Bachelor of Engineering
              <span>· Electrical & Electronics Engineering</span>
            </h3>

            <p class="education-institution">
              Bhilai Institute of Technology · India
            </p>

            <p>
              Cumulative Performance Index: 7.59 · Top 2 Percentile ·
              First Division
            </p>

            <p>
              Research Supervisor: Professor Mukesh Kumar Chandrakar
            </p>

            <p>
              Thesis:
              <strong>
                Transfer Learning Implementation in Image Classification
                with Machine Learning
              </strong>
            </p>
          </div>
        </article>

        <article class="education-entry education-school">
          <div class="education-marker">
            <span class="education-year">2012 — 2013</span>
            <span class="education-dot"></span>
          </div>

          <div class="education-details">
            <h3>
              Senior Secondary Education
              <span>· Central Board of Secondary Education</span>
            </h3>

            <p class="education-institution">
              Allahabad Public School · Prayagraj, India
            </p>

            <p>
              Final Percentage: 87%
            </p>
          </div>
        </article>

      </div>
    </section>
  `},r={id:`research`,label:`Research`,render:()=>`
    <section class="content-panel research-panel">
      <div class="research-journey">
        <div class="journey-map">
          <article class="journey-entry">
            <div class="journey-range">
              <span class="journey-index">01</span>
              <span class="journey-date">2017/08 — 2018/06</span>
            </div>

            <div class="journey-path" aria-hidden="true"></div>

            <div class="journey-body">
              <h3>Early Adopter <span>· Bachelor’s Final-Year Project</span></h3>
              <div class="journey-tags">
                <span>Pattern Recognition</span>
                <span>AI</span>
              </div>
              <p>
                In my final year of undergraduate study, I naturally gravitated
                toward artificial intelligence and built an early beginner-level
                project around image classification. That experience first pulled
                me toward pattern recognition as a research direction.
              </p>
            </div>
          </article>

          <article class="journey-entry">
            <div class="journey-range">
              <span class="journey-index">02</span>
              <span class="journey-date">2019/09 — 2022/08</span>
            </div>

            <div class="journey-path" aria-hidden="true"></div>

            <div class="journey-body">
              <h3>Master’s Research <span>· Tamkang University</span></h3>
              <div class="journey-tags">
                <span>Quantum Machine Learning</span>
                <span>Computer Vision</span>
              </div>
              <p>
                During my master’s degree, I asked whether quantum computing
                could meaningfully improve pattern-recognition systems. My
                research showed that it could, particularly for image data,
                leading to my work on hybrid quantum-classical learning for
                visual recognition.
              </p>
            </div>
          </article>

          <article class="journey-entry">
            <div class="journey-range">
              <span class="journey-index">03</span>
              <span class="journey-date">2022/04 — 2022/06</span>
            </div>

            <div class="journey-path" aria-hidden="true"></div>

            <div class="journey-body">
              <h3>Deep Learning Engineer <span>· StatementCloud</span></h3>
              <div class="journey-tags">
                <span>Project Planning</span>
                <span>Computer Vision</span>
                <span>Automation</span>
              </div>
              <p>
                At StatementCloud, I worked on receipt-scanning software,
                developed dataset assets, and helped structure a custom practical
                solution for users. This experience deepened my understanding of
                project planning, automation, APIs, and how real-world computer
                vision systems must be engineered systematically.
              </p>
            </div>
          </article>

          <article class="journey-entry">
            <div class="journey-range">
              <span class="journey-index">04</span>
              <span class="journey-date">2022/09 — 2023/03</span>
            </div>

            <div class="journey-path" aria-hidden="true"></div>

            <div class="journey-body">
              <h3>NLP MLOPs Engineer <span>· Aiello</span></h3>
              <div class="journey-tags">
                <span>MLOps</span>
                <span>Automation</span>
                <span>Production ML</span>
              </div>
              <p>
                At Aiello, I had my first serious exposure to MLOps. I learned
                how larger ML products are organized, maintained, automated, and
                deployed in production environments, strengthening my interest in
                operationally stable machine-learning systems.
              </p>
            </div>
          </article>

          <article class="journey-entry">
            <div class="journey-range">
              <span class="journey-index">05</span>
              <span class="journey-date">2023/11 — Present</span>
            </div>

            <div class="journey-path" aria-hidden="true"></div>

            <div class="journey-body">
              <h3>Research Assistant <span>· Academia Sinica</span></h3>
              <div class="journey-tags">
                <span>System Development</span>
                <span>Reproducible Research</span>
                <span>Security ML</span>
              </div>
              <p>
                At Academia Sinica, I observed a research-infrastructure gap in
                the side-channel analysis community, particularly around
                extensibility, automation, and reproducibility. That led me to
                design and build TraceFlow, a system intended to support more
                rigorous and scalable experimentation.
              </p>
            </div>
          </article>
        </div>

        <div class="research-heading">
          <p class="section-kicker">Research Direction</p>
          <h2>Research</h2>

          <div class="research-future">
            <p>
              My journey has steadily moved from building AI models to building
              dependable systems around them. Across research and industry, I
              have developed strength in independent project execution, applied
              automation, and stable AI-system development.
            </p>

            <p>
              Looking ahead, I want to research autonomous decision-making under
              uncertainty and engineer systems that can operate reliably on
              difficult, assumption-breaking data. Financial data is my intended
              testbed for this work, because it demands robustness, adaptive
              reasoning, and disciplined execution under risk.
            </p>
          </div>
        </div>
      </div>
    </section>
  `},i={id:`projects`,label:`Projects`,render:()=>`
    <section class="content-panel projects-panel">
      <p class="section-kicker">Selected Research Systems</p>
      <h2>Projects</h2>

      <div class="project-grid">

        <article class="project-card">
          <div class="project-status">
            <span class="status-dot"></span>
            Active Development
          </div>

          <h3>TraceFlow</h3>

          <p>
            An extensible research framework for reproducible deep-learning
            side-channel analysis.
          </p>

          <p>
            TraceFlow coordinates experiment configuration, dataset handling,
            model execution, evaluation, artifact management, and automated
            model selection through a modular and policy-driven system.
          </p>

          <div class="project-tags">
            <span>Research Infrastructure</span>
            <span>MLOps</span>
            <span>Side-Channel Analysis</span>
            <span>Reproducibility</span>
          </div>

          <p class="project-availability">
            Paper in preparation. Source code will be released following
            publication.
          </p>
        </article>

        <article class="project-card">
          <div class="project-status project-status-complete">
            <span class="status-dot"></span>
            Published Research
          </div>

          <h3>QSurfNet</h3>

          <p>
            A hybrid quantum-classical convolutional neural network developed
            during my master’s research for surface-defect recognition.
          </p>

          <p>
            The project investigated whether parameterized quantum circuits
            could improve image-feature extraction when a 
            quantum convolutional neural layer is integrated with a
            classical convolutional architecture.
          </p>

          <div class="project-tags">
            <span>Quantum Machine Learning</span>
            <span>Computer Vision</span>
            <span>Hybrid Neural Networks</span>
            <span>Surface Inspection</span>
          </div>

          <p class="project-availability">
            Research results are publicly available through the associated
            publications. The original research implementation is not currently
            released as a public repository.
          </p>

          <a
            class="project-link"
            href="https://link.springer.com/article/10.1007/s11128-023-03930-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Publication
          </a>
        </article>

      </div>
    </section>
  `},a={updatedAt:`2026-07-11T05:27:52+00:00`,scholarUrl:`https://scholar.google.com/citations?user=O5pkUdUAAAAJ&hl=en`,scholarUserId:`O5pkUdUAAAAJ`,name:`Shraddha Mishra`,totalCitations:29,hIndex:2,i10Index:1,citesPerYear:{2023:2,2024:4,2025:14,2026:9},publications:[{title:`QSurfNet: a hybrid quantum convolutional neural network for surface defect recognition: S. Mishra, C.-Y. Tsai`,year:2023,citations:23,url:`https://link.springer.com/article/10.1007/s11128-023-03930-5`},{title:`Design of superior parameterized quantum circuits for quantum image classification`,year:2022,citations:6,url:`https://ieeexplore.ieee.org/abstract/document/9762420/`},{title:`QSurfNet: 用於表面缺陷識別的混合量子卷積神經網絡.`,year:2022,citations:0,url:`https://www.airitilibrary.com/Article/Detail/U0002-0308202215525000`}]};function o(e){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#039;`)}function s(e){let t=o(e.title),n=e.year||`Year unavailable`,r=e.citations??0,i=e.url?.trim(),a=i?`
      <a
        href="${o(i)}"
        target="_blank"
        rel="noopener noreferrer"
      >
        ${t}
      </a>
    `:t;return`
    <article class="publication-entry">
      <span class="publication-index">${o(n)}</span>

      <div class="publication-details">
        <h3>${a}</h3>

        <div class="publication-meta">
          <span>${o(r)} citations</span>
        </div>
      </div>
    </article>
  `}function c(){return`
    <div class="scholar-metrics">
      <article>
        <span>Total Citations</span>
        <strong>${o(a.totalCitations)}</strong>
      </article>

      <article>
        <span>h-index</span>
        <strong>${o(a.hIndex)}</strong>
      </article>

      <article>
        <span>i10-index</span>
        <strong>${o(a.i10Index)}</strong>
      </article>
    </div>
  `}function l(){return a.scholarUrl?`
    <a
      class="scholar-profile-link"
      href="${o(a.scholarUrl)}"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Google Scholar Profile
    </a>
  `:``}var u=[e,t,n,{id:`publications`,label:`Publications`,render:()=>{let e=a.publications??[],t=e.length?e.map(s).join(``):`
        <article class="publication-empty">
          <p>No publications are currently available.</p>
        </article>
      `;return`
      <section class="content-panel publications-panel">
        <header class="publications-heading">
          <p class="section-kicker">Research Output</p>
          <h2>Publications</h2>

          ${c()}
          ${l()}
        </header>

        <div class="publication-list">
          ${t}
        </div>
      </section>
    `}},r,i,{id:`skills`,label:`Skills`,render:()=>`
    <section class="content-panel skills-panel">
      <header class="skills-heading">
        <p class="section-kicker">Technical Capability</p>
        <h2>Skills</h2>

        <div class="core-strengths" aria-label="Core technical strengths">
          <span>System Architecture</span>
          <span>Validation</span>
          <span>Debugging</span>
          <span>Disciplined Execution</span>
          <span>Structure &amp; Organization</span>
          <span>Automation</span>
        </div>
        <p class="skills-introduction">
          I build research and software systems across languages and technology
          stacks. My primary strength is not attachment to a single language,
          but the ability to translate a technical vision into a structured,
          testable, and maintainable implementation.
        </p>

        <p class="skills-introduction">
          I work extensively with AI coding agents as engineering collaborators:
          defining architecture, decomposing requirements, reviewing generated
          code, identifying failures, validating behavior, and integrating each
          component into the wider system.
        </p>
      </header>

      <div class="skills-matrix">

        <article class="skill-group">
          <span class="skill-index">01</span>

          <div>
            <h3>Systems & Software Development</h3>
            <p>
              Modular architecture, requirements decomposition, interface
              design, refactoring, debugging, validation, and maintainable
              implementation.
            </p>

            <div class="skill-tags">
              <span>System Architecture</span>
              <span>Modular Design</span>
              <span>API Design</span>
              <span>Testing</span>
              <span>Debugging</span>
              <span>Code Review</span>
            </div>
          </div>
        </article>

        <article class="skill-group">
          <span class="skill-index">02</span>

          <div>
            <h3>Programming & Application Development</h3>
            <p>
              Active development across scientific computing, systems
              programming, automation, and browser-based applications.
            </p>

            <div class="skill-tags">
              <span>Python</span>
              <span>C++</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Shell</span>
              <span>SQL</span>
            </div>
          </div>
        </article>

        <article class="skill-group">
          <span class="skill-index">03</span>

          <div>
            <h3>Machine Learning & Research Engineering</h3>
            <p>
              Development of reproducible ML experiments, research pipelines,
              model-evaluation workflows, and scientific software.
            </p>

            <div class="skill-tags">
              <span>PyTorch</span>
              <span>Deep Learning</span>
              <span>Computer Vision</span>
              <span>Experiment Design</span>
              <span>Model Evaluation</span>
              <span>Scientific Computing</span>
            </div>
          </div>
        </article>

        <article class="skill-group">
          <span class="skill-index">04</span>

          <div>
            <h3>MLOps & Automation</h3>
            <p>
              Automation of experiments, builds, deployments, artifact
              management, configuration, and repeatable development workflows.
            </p>

            <div class="skill-tags">
              <span>Docker</span>
              <span>Linux</span>
              <span>Git</span>
              <span>GitHub Actions</span>
              <span>CI/CD</span>
              <span>YAML</span>
              <span>Experiment Tracking</span>
              <span>Artifact Management</span>
            </div>
          </div>
        </article>

        <article class="skill-group skill-group-ai">
          <span class="skill-index">05</span>

          <div>
            <h3>AI-Augmented Engineering</h3>
            <p>
              Experienced in directing AI coding agents throughout the software
              lifecycle while retaining responsibility for architecture,
              correctness, security, integration, and final technical decisions.
            </p>

            <div class="skill-tags">
              <span>Agentic Development</span>
              <span>Prompted Implementation</span>
              <span>Code Verification</span>
              <span>Failure Analysis</span>
              <span>Iterative Refactoring</span>
              <span>Human-in-the-Loop Engineering</span>
            </div>
          </div>
        </article>

        <article class="skill-group">
          <span class="skill-index">06</span>

          <div>
            <h3>Research Communication</h3>
            <p>
              Technical documentation, experimental reporting, publication
              development, and clear communication of complex system behavior.
            </p>

            <div class="skill-tags">
              <span>LaTeX</span>
              <span>Scientific Writing</span>
              <span>Technical Documentation</span>
              <span>Vector Graphics</span>
              <span>Data Visualization</span>
            </div>
          </div>
        </article>

      </div>
    </section>
  `},{id:`personality`,label:`Personality`,render:()=>`
    <section class="content-panel personality-panel">
      <header class="personality-heading">
        <p class="section-kicker">Working Style</p>
        <h2>Personality</h2>

        <p class="personality-summary">
          I am a perceptive, independent, and highly structured technical
          professional. I work best when given clear ownership of a meaningful
          problem and sufficient space to examine it deeply.
        </p>
      </header>

      <div class="personality-grid">

        <article class="personality-card">
          <span class="personality-index">01</span>

          <div>
            <h3>Independent Execution</h3>

            <p>
              I am comfortable taking responsibility for a project from initial
              architecture through implementation, validation, refinement, and
              final delivery.
            </p>

            <div class="personality-tags">
              <span>Autonomy</span>
              <span>Execution Ownership</span>
              <span>Disciplined Execution</span>
            </div>
          </div>
        </article>

        <article class="personality-card">
          <span class="personality-index">02</span>

          <div>
            <h3>Deep Technical Focus</h3>

            <p>
              My strongest work happens in quiet, low-interruption environments
              where I can maintain context, investigate complex behavior, and
              build coherent solutions without unnecessary fragmentation.
            </p>

            <div class="personality-tags">
              <span>Deep Work</span>
              <span>Sustained Focus</span>
              <span>Context Retention</span>
            </div>
          </div>
        </article>

        <article class="personality-card">
          <span class="personality-index">03</span>

          <div>
            <h3>Structured Problem Solving</h3>

            <p>
              I naturally organize complex work into clear components,
              interfaces, dependencies, and validation stages. I prefer systems
              that are understandable, traceable, and deliberately designed.
            </p>

            <div class="personality-tags">
              <span>Systematic Thinking</span>
              <span>Structure &amp; Organization</span>
              <span>Separation of Concerns</span>
            </div>
          </div>
        </article>

        <article class="personality-card">
          <span class="personality-index">04</span>

          <div>
            <h3>Quality Awareness</h3>

            <p>
              I notice inconsistencies quickly and tend to investigate them
              until the underlying cause is understood. I value correctness,
              maintainability, and evidence over superficial completion.
            </p>

            <div class="personality-tags">
              <span>Validation</span>
              <span>Debugging</span>
              <span>Quality Control</span>
            </div>
          </div>
        </article>

        <article class="personality-card">
          <span class="personality-index">05</span>

          <div>
            <h3>High Context Sensitivity</h3>

            <p>
              I am sensitive to subtle changes in systems, environments, and
              communication. In technical work, this helps me identify small
              discrepancies, hidden assumptions, and points of friction that
              may otherwise be overlooked.
            </p>

            <div class="personality-tags">
              <span>Pattern Awareness</span>
              <span>Attention to Detail</span>
              <span>Context-Aware Design</span>
            </div>
          </div>
        </article>

        <article class="personality-card">
          <span class="personality-index">06</span>

          <div>
            <h3>Focused Collaboration</h3>

            <p>
              I collaborate best through clear objectives, thoughtful technical
              discussion, written documentation, and defined responsibilities.
              I prefer purposeful communication over meeting-heavy or
              continuously interrupted workflows.
            </p>

            <div class="personality-tags">
              <span>Clear Communication</span>
              <span>Documentation</span>
              <span>Focused Collaboration</span>
            </div>
          </div>
        </article>

        <article class="personality-card personality-card-featured">
          <span class="personality-index">07</span>

          <div>
            <h3>Human-Centered Engineering</h3>

            <p>
              I pair analytical discipline with empathy for the people who use,
              maintain, and depend on technical systems. I care not only about
              whether a system works, but whether it is understandable,
              dependable, and practical for its intended users.
            </p>

            <div class="personality-tags">
              <span>Empathy</span>
              <span>User Awareness</span>
              <span>Responsible Engineering</span>
            </div>
          </div>
        </article>

      </div>
    </section>
  `},{id:`contact`,label:`Contact`,render:()=>`
    <section class="content-panel contact-panel">
      <p class="section-kicker">Got an interesting Project?</p>
      <h2>Contact Me!</h2>

      <p class="contact-intro">
        Open to research collaboration, technical discussion, and opportunities
        involving machine-learning systems, reproducible research, and
        autonomous decision-making.
      </p>

      <div class="contact-links">
        <a
          href="mailto:its.shraddha.mishra@gmail.com"
          class="contact-link"
        >
          <span class="contact-link-label">Email</span>
          <span class="contact-link-detail">
            its.shraddha.mishra@gmail.com
          </span>
        </a>

        <a
          href="https://github.com/ItsShraddhaMishra"
          class="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="contact-link-label">GitHub</span>
          <span class="contact-link-detail">
            ItsShraddhaMishra
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/shraddha-mishra-b25728186/"
          class="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="contact-link-label">LinkedIn</span>
          <span class="contact-link-detail">
            Shraddha Mishra
          </span>
        </a>
      </div>
    </section>
  `}];function d(e){if(!e)return{start(){},stop(){}};let t=e.getContext(`2d`),n=[`$`,`€`,`£`,`¥`,`₹`,`₩`,`₽`,`₿`,`﷼`,`₪`,`₫`,`฿`,`₦`,`₱`],r=1500,i=[],a=null,o=null,s=null,c=!1;function l(){return document.documentElement.dataset.theme||`dark`}function u(){return l()===`light`?`#ff3f95`:`#28ff78`}function d(){return l()===`light`?`rgba(255, 249, 252, 0.15)`:`rgba(0, 0, 0, 0.09)`}function f(){return l()===`light`?`rgba(255, 249, 252, 0.96)`:`rgba(3, 16, 9, 0.96)`}function p(){let n=e.getBoundingClientRect(),r=window.devicePixelRatio||1;e.width=Math.max(1,Math.floor(n.width*r)),e.height=Math.max(1,Math.floor(n.height*r)),t.setTransform(r,0,0,r,0,0);let a=Math.max(1,Math.floor(n.width/14));i=Array.from({length:a},()=>Math.floor(Math.random()*-40)),s&&(s.x=Math.min(s.x,Math.max(s.radius,n.width-s.radius)))}function m(e,n,r){let i=u();t.save(),t.fillStyle=i,t.font=`14px "Share Tech Mono", "Segoe UI Symbol", "Noto Sans Symbols 2", monospace`,t.textAlign=`left`,t.textBaseline=`alphabetic`,t.shadowColor=i,t.shadowBlur=2,t.fillText(r,e,n),t.restore()}function h(){if(!c||s)return;let t=e.clientWidth;s={x:12+Math.random()*Math.max(1,t-24),y:-24,previousX:null,previousY:null,radius:12,fallSpeed:4.8+Math.random()*1.2,flipPhase:Math.random()*Math.PI*2,flipSpeed:.58+Math.random()*.22,drift:(Math.random()-.5)*.35}}function g(){if(!c)return;o!==null&&window.clearTimeout(o);let e=r+Math.random()*(4e3-r);o=window.setTimeout(()=>{h(),o=null},e)}function _(){if(!s||s.previousX===null||s.previousY===null)return;let e=s.radius*1.55;t.save(),t.fillStyle=f(),t.beginPath(),t.arc(s.previousX,s.previousY,e,0,Math.PI*2),t.fill(),t.restore()}function v(){if(!s)return;_();let n=Math.cos(s.flipPhase),r=Math.max(.14,Math.abs(n)),i=n>=0;t.save(),t.translate(s.x,s.y),t.scale(r,1),t.shadowColor=`rgba(255, 220, 90, 0.95)`,t.shadowBlur=i?18:10;let a=t.createRadialGradient(-4,-5,1,0,0,s.radius);a.addColorStop(0,`#fff9cf`),a.addColorStop(.18,`#ffe98a`),a.addColorStop(.45,`#ffd447`),a.addColorStop(.75,`#f3b51f`),a.addColorStop(1,`#d89400`),t.beginPath(),t.arc(0,0,s.radius,0,Math.PI*2),t.fillStyle=a,t.fill(),t.lineWidth=1.6,t.strokeStyle=`rgba(255, 247, 186, 0.95)`,t.stroke(),t.beginPath(),t.arc(0,0,s.radius*.72,0,Math.PI*2),t.lineWidth=1,t.strokeStyle=`rgba(255, 231, 120, 0.75)`,t.stroke(),r>.35&&(t.shadowBlur=0,t.fillStyle=`rgba(168, 95, 0, 0.9)`,t.font=`bold ${s.radius+1}px "Segoe UI Symbol", sans-serif`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(i?`$`:`₿`,0,1)),t.beginPath(),t.fillStyle=`rgba(255, 255, 255, 0.42)`,t.arc(-s.radius*.28,-s.radius*.34,s.radius*.18,0,Math.PI*2),t.fill(),t.restore(),s.previousX=s.x,s.previousY=s.y,s.flipPhase+=s.flipSpeed,s.y+=s.fallSpeed,s.x+=s.drift,s.y>e.clientHeight+s.radius*2&&(s=null,g())}function y(){let r=e.clientWidth,a=e.clientHeight;t.fillStyle=d(),t.fillRect(0,0,r,a);for(let e=0;e<i.length;e+=1){let t=e*14,r=i[e]*14,o=n[Math.floor(Math.random()*n.length)];m(t,r,o),r>a&&Math.random()>.975&&(i[e]=0),i[e]+=1}v()}function b(){c||(c=!0,p(),y(),a=window.setInterval(y,63),g())}function x(){c=!1,s=null,a!==null&&(window.clearInterval(a),a=null),o!==null&&(window.clearTimeout(o),o=null),t.clearRect(0,0,e.clientWidth,e.clientHeight)}function S(){c&&(window.clearTimeout(S.timeoutId),S.timeoutId=window.setTimeout(p,200))}return window.addEventListener(`resize`,S),{start:b,stop:x}}function f({target:e,sections:t,onSelect:n}){let r=document.createDocumentFragment();t.forEach((t,i)=>{let a=document.createElement(`button`);a.type=`button`,a.className=`menu-item`,a.dataset.section=t.id,a.innerHTML=`
      <span class="menu-index">
        ${String(i+1).padStart(2,`0`)}
      </span>

      <span class="menu-label">
        ${t.label}
      </span>
    `,a.addEventListener(`mouseenter`,()=>{a.classList.add(`is-previewing`)}),a.addEventListener(`mouseleave`,()=>{a.classList.remove(`is-previewing`)}),a.addEventListener(`click`,()=>{e.querySelectorAll(`.menu-item`).forEach(e=>{e.classList.toggle(`is-active`,e===a)}),n(t.id)}),i===0&&a.classList.add(`is-active`),r.appendChild(a)}),e.replaceChildren(r);let i=document.querySelector(`#matrix-rain`);i&&i.dataset.matrixStarted!==`true`&&(d(i).start(),i.dataset.matrixStarted=`true`)}var p={dark:{name:`Dark · Green / Black`,next:`light`},light:{name:`Light · White / Pink`,next:`dark`}};function m({toggle:e,label:t}){let n=localStorage.getItem(`digital-cv-theme`),r=n&&p[n]?n:`dark`;function i(e){r=e,document.documentElement.dataset.theme=e,t.textContent=p[e].name,localStorage.setItem(`digital-cv-theme`,e)}e.addEventListener(`click`,()=>{i(p[r].next)}),i(r)}var h=document.querySelector(`#main-view`),g=document.querySelector(`#section-menu`),_=document.querySelector(`#theme-toggle`),v=document.querySelector(`#theme-name`);function y(e){let t=u.find(t=>t.id===e)??u[0];h.classList.add(`is-changing`),window.setTimeout(()=>{h.innerHTML=t.render(),h.dataset.section=t.id,h.classList.remove(`is-changing`),h.focus({preventScroll:!0})},140)}f({target:g,sections:u,onSelect:y}),m({toggle:_,label:v}),y(`profile`);