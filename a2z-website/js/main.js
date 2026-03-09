/* ==========================================
   MAIN JAVASCRIPT
   ========================================== */

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile Menu Toggle
navToggle?.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Close menu when link is clicked
document.querySelectorAll('.navbar-nav a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
  });
});

// Set active nav link
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
}

setActiveNavLink();

// ==========================================
// Accordion Functionality
// ==========================================

document.querySelectorAll('.accordion-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const isOpen = trigger.classList.contains('open');
    
    // Close all other accordions
    document.querySelectorAll('.accordion-trigger').forEach(t => {
      if (t !== trigger && t.classList.contains('open')) {
        t.classList.remove('open');
        t.nextElementSibling.classList.remove('open');
      }
    });
    
    // Toggle current accordion
    trigger.classList.toggle('open');
    trigger.nextElementSibling.classList.toggle('open');
    trigger.setAttribute('aria-expanded', !isOpen);
  });
});

// ==========================================
// Smooth Scroll for Anchor Links
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// ==========================================
// Intersection Observer for Scroll Reveals
// ==========================================

const revealElements = document.querySelectorAll('.scroll-reveal');

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = `slideUp 0.8s ease-out forwards`;
      const delay = entry.target.classList.value.match(/scroll-reveal-delay-(\d)/);
      if (delay) {
        entry.target.style.animationDelay = `${delay[1] * 0.1}s`;
      }
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

revealElements.forEach(element => {
  observer.observe(element);
});

// ==========================================
// Counter Animation for Stats
// ==========================================

function animateCounter(element, target, duration = 2000) {
  let current = 0;
  const increment = target / (duration / 16);
  
  const counter = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + (element.getAttribute('data-suffix') || '');
      clearInterval(counter);
    } else {
      element.textContent = Math.floor(current) + (element.getAttribute('data-suffix') || '');
    }
  }, 16);
}

// Initialize counters when visible
const statsSection = document.querySelector('.stats');
if (statsSection) {
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
        entry.target.classList.add('animated');
        entry.target.querySelectorAll('.stat-number').forEach(stat => {
          const target = parseInt(stat.getAttribute('data-target')) || parseInt(stat.textContent);
          animateCounter(stat, target);
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  statsObserver.observe(statsSection);
}

// ==========================================
// Form Validation
// ==========================================

const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    
    // Basic validation
    let isValid = true;
    for (let [key, value] of formData) {
      if (!value.trim()) {
        isValid = false;
        break;
      }
    }
    
    if (!isValid) {
      alert('Please fill in all fields');
      return;
    }
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', Object.fromEntries(formData));
    alert('Thank you! We\'ll be in touch soon.');
    contactForm.reset();
  });
}

// ==========================================
// Lazy Loading Images
// ==========================================

if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ==========================================
// Utility Functions
// ==========================================

// Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Add scroll spy for navbar
const scrollSpy = debounce(() => {
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}, 100);

window.addEventListener('scroll', scrollSpy);

// ==========================================
// Copy to Clipboard
// ==========================================

function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Copied to clipboard');
    });
  } else {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
}

// ==========================================
// Theme Management
// ==========================================

function initTheme() {
  const isDark = true; // Always dark mode
  document.documentElement.style.colorScheme = 'dark';
}

initTheme();

// ==========================================
// Shutter Text Effect (Navbar A2Z)
// ==========================================

function initShutterText() {
  const navLogo = document.querySelector('.navbar-logo');
  if (!navLogo) return;

  // Find the text node containing "A2Z"
  let textNode = null;
  for (const node of navLogo.childNodes) {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() === 'A2Z') {
      textNode = node;
      break;
    }
  }
  if (!textNode) return;

  // Build the shutter wrapper: one .shutter-char per character
  const wrapper = document.createElement('span');
  wrapper.className = 'shutter-text-wrapper';

  'A2Z'.split('').forEach((char, i) => {
    const charEl = document.createElement('span');
    charEl.className = 'shutter-char';
    charEl.style.setProperty('--i', i);

    ['shutter-main', 'shutter-top', 'shutter-mid', 'shutter-bot'].forEach(cls => {
      const span = document.createElement('span');
      span.className = cls;
      span.textContent = char;
      charEl.appendChild(span);
    });

    wrapper.appendChild(charEl);
  });

  navLogo.replaceChild(wrapper, textNode);
}

initShutterText();

// ==========================================
// Console Message
// ==========================================

console.log('%cA2Z - IA Automation', 'color: #A8C8F0; font-size: 20px; font-weight: bold;');
console.log('%cTransformez votre entreprise avec l\'automatisation intelligente', 'color: #C4A0DC; font-size: 14px;');
console.log('%chttps://a2z-ia.com', 'color: #E8A0C0; font-size: 12px;');
