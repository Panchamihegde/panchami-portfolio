/**
 * Panchami Hegde - Portfolio JavaScript
 * Modern, Interactive, Clean Vanilla JS
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------------
     1. Dynamic Typewriter Effect for Hero
     ------------------------------------------------------------------------ */
  const typingElement = document.getElementById('typing-text');
  const phrases = [
    'Aspiring Software Engineer',
    'Python Developer',
    'AI & Generative AI Builder',
    'Computer Engineering Student',
    'Backend API Builder',
    'Problem Solver'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 95;
  const deletingSpeed = 45;
  const pauseTime = 1800;

  function typeEffect() {
    if (!typingElement) return;

    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    let timeout = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentPhrase.length) {
      timeout = pauseTime;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      timeout = 350;
    }

    setTimeout(typeEffect, timeout);
  }

  typeEffect();

  /* ------------------------------------------------------------------------
     2. Dark / Light Theme Toggle & Persistence
     ------------------------------------------------------------------------ */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlRoot = document.documentElement;

  // Retrieve user's previous preference from localStorage or default to dark
  const savedTheme = localStorage.getItem('panchami_theme') || 'dark';
  htmlRoot.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlRoot.setAttribute('data-theme', newTheme);
      localStorage.setItem('panchami_theme', newTheme);
      showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode`);
    });
  }

  /* ------------------------------------------------------------------------
     3. Header Sticky & ScrollSpy Active Links
     ------------------------------------------------------------------------ */
  const header = document.getElementById('header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('back-to-top');

  function handleScroll() {
    const scrollY = window.pageYOffset || window.scrollY;

    // Header background blur on scroll
    if (scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (scrollY > 400) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }

    // ScrollSpy active link detection
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial invocation

  // Back to top click event
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ------------------------------------------------------------------------
     4. Mobile Navigation Drawer
     ------------------------------------------------------------------------ */
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      hamburgerBtn.classList.toggle('active', isOpen);
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when clicking outside menu
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && 
          !navMenu.contains(e.target) && 
          !hamburgerBtn.contains(e.target)) {
        navMenu.classList.remove('open');
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ------------------------------------------------------------------------
     5. Project Category Filtering
     ------------------------------------------------------------------------ */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active button style
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category').split(' ');

        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 40);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 220);
        }
      });
    });
  });

  /* ------------------------------------------------------------------------
     6. Exact Project Details Data & Modal Logic
     ------------------------------------------------------------------------ */
  const projectData = {
    resumai: {
      title: 'AI Resume Analyzer & ATS Checker',
      badge: 'Python • FastAPI • PyPDF2 • JavaScript',
      image: 'assets/images/project-resume-analyzer.svg',
      desc: 'ResumAI is an AI-powered web application that compares a candidate resume against specific job descriptions to estimate Applicant Tracking System (ATS) compatibility. It extracts text and skills from uploaded PDF resumes, identifies keyword gaps, computes an ATS compatibility score, and provides actionable suggestions for resume optimization.',
      features: [
        'PDF Resume Ingestion: Extracts text accurately from uploaded resumes using PyPDF2.',
        'Job Description Matching: Evaluates resume content against technical requirements and target roles.',
        'ATS Compatibility Scoring: Calculates a quantifiable match percentage based on skills, education, and keywords.',
        'Skill Gap Analysis: Highlights matched keywords and explicitly reports missing skills needed for the role.',
        'Improvement Recommendations: Generates targeted suggestions to refine bullet points and improve recruiter visibility.',
        'FastAPI REST API: Asynchronous backend endpoints handling file uploads, text parsing, and scoring algorithms.'
      ],
      tech: ['Python', 'FastAPI', 'PyPDF2', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'REST API'],
      github: 'https://github.com/Panchamihegde/ResumAI'
    },
    interviewcoach: {
      title: 'Multi-Agent AI Interview Coach',
      badge: 'Python • FastAPI • React • Hugging Face • AI Agents',
      image: 'assets/images/project-interview-coach.svg',
      desc: 'The Multi-Agent AI Interview Coach is an intelligent preparation platform leveraging collaborative AI agents to conduct tailored technical interviews. It personalizes interview questions from resumes and job descriptions, evaluates candidate responses, scores conceptual depth and communication, and generates actionable constructive feedback.',
      features: [
        'Autonomous Multi-Agent Architecture: Coordinates specialized agents (Interviewer Agent, Evaluator Agent, Feedback Coach).',
        'Personalized Question Generation: Synthesizes dynamic technical and scenario-based questions from candidate resumes and job descriptions.',
        'Candidate Response Evaluation: Analyzes spoken/written responses for technical accuracy, STAR method structure, and depth using Hugging Face models.',
        'Performance Scoring: Generates quantitative rubrics across problem-solving, system design, and communication skills.',
        'Actionable Feedback Reports: Provides concrete tips, model answers, and confidence-building advice for subsequent rounds.'
      ],
      tech: ['Python', 'FastAPI', 'React', 'Hugging Face', 'AI Agents', 'Prompt Engineering', 'NLP'],
      github: 'https://github.com/Panchamihegde'
    },
    secureair: {
      title: 'SecureAir – Wi-Fi Honeypot & Rogue AP Detector',
      badge: 'Python • Flask • Raspberry Pi • Network Security',
      image: 'assets/images/project-secureair.svg',
      desc: 'SecureAir is an IoT-based wireless network defense system deployed on a Raspberry Pi (Final Year Engineering Project). It continuously scans radio frequencies for rogue Wi-Fi access points and Evil Twin attacks, activates decoy honeypot traps to observe unauthorized probing, and streams real-time threat telemetry to an interactive monitoring dashboard.',
      features: [
        'Real-Time Rogue AP Detection: Sniffs 802.11 beacon frames to detect spoofed SSIDs, unauthorized BSSIDs, and abnormal signal strengths.',
        'Wireless Honeypot Decoy: Deploys virtual access point traps to log unauthorized client probes and deceptive connection attempts.',
        'Hardware Edge Deployment: Engineered to run autonomously on a low-power Raspberry Pi with dedicated wireless monitoring adapters.',
        'Live Monitoring Dashboard: Flask-powered web interface visualizing detected access points, signal charts, and security events.',
        'Automated Alert Dispatch: Triggers real-time security alerts and logs historical telemetry for network audit trails.'
      ],
      tech: ['Python', 'Flask', 'Raspberry Pi', 'Scapy / 802.11 Protocols', 'WebSockets', 'Network Security'],
      github: 'https://github.com/Panchamihegde'
    }
  };

  const projectModal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const detailTriggers = document.querySelectorAll('.project-detail-trigger');

  function openProjectModal(projectId) {
    const data = projectData[projectId];
    if (!data || !modalBody || !projectModal) return;

    modalBody.innerHTML = `
      <img src="${data.image}" alt="${data.title}" class="modal-project-img" />
      <span class="project-badge ai-badge" style="margin-bottom: 0.75rem; display: inline-block;">${data.badge}</span>
      <h3 class="modal-project-title" id="modal-title">${data.title}</h3>
      <p class="modal-desc">${data.desc}</p>
      
      <h4 class="modal-section-title">Key Architectural Features:</h4>
      <ul class="modal-features-list">
        ${data.features.map(f => `<li><i class="fa-solid fa-circle-check"></i> <span>${f}</span></li>`).join('')}
      </ul>

      <h4 class="modal-section-title">Technologies Used:</h4>
      <div class="modal-tags">
        ${data.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>

      <div class="modal-actions">
        <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <i class="fa-brands fa-github"></i> ${data.github.includes('ResumAI') ? 'View GitHub Repository' : 'Visit GitHub Profile'}
        </a>
        <button class="btn btn-outline" id="modal-inner-close">Close Details</button>
      </div>
    `;

    projectModal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Hook internal close button
    const innerClose = document.getElementById('modal-inner-close');
    if (innerClose) {
      innerClose.addEventListener('click', closeProjectModal);
    }
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  detailTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = btn.getAttribute('data-project');
      openProjectModal(projId);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('open')) {
      closeProjectModal();
    }
  });

  /* ------------------------------------------------------------------------
     7. Copy Email & Phone to Clipboard with Toast Notification
     ------------------------------------------------------------------------ */
  const emailAddress = 'panchamihegde0010@gmail.com';
  const phoneNumber = '+917045275699';

  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      copyToClipboard(emailAddress, 'Email copied to clipboard: ' + emailAddress);
    });
  }

  const copyPhoneBtn = document.getElementById('copy-phone-btn');
  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', () => {
      copyToClipboard('+91 7045275699', 'Phone number copied to clipboard: +91 7045275699');
    });
  }

  function copyToClipboard(text, successMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg);
      }).catch(() => {
        fallbackCopyText(text, successMsg);
      });
    } else {
      fallbackCopyText(text, successMsg);
    }
  }

  function fallbackCopyText(text, successMsg) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    showToast(successMsg);
  }

  /* ------------------------------------------------------------------------
     8. Toast Notification Utility
     ------------------------------------------------------------------------ */
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  let toastTimeout;

  function showToast(msg) {
    if (!toast || !toastMessage) return;
    clearTimeout(toastTimeout);
    toastMessage.textContent = msg;
    toast.classList.add('show');

    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }

  /* ------------------------------------------------------------------------
     9. Dynamic Year Update
     ------------------------------------------------------------------------ */
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

});
