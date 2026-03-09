/* ==========================================
   ADVANCED ANIMATIONS & EFFECTS
   ========================================== */

// ==========================================
// Mouse Tracking for Cards
// ==========================================

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
  });
});

// ==========================================
// Parallax Scroll Effect
// ==========================================

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const heroSection = document.getElementById('hero');
  
  if (heroSection) {
    const particlesCanvas = heroSection.querySelector('canvas');
    if (particlesCanvas) {
      particlesCanvas.style.transform = `translateY(${scrollTop * 0.5}px)`;
    }
  }
});

// ==========================================
// Gradient Text Animation
// ==========================================

function animateGradientText() {
  const gradientTexts = document.querySelectorAll('.gradient-text, .gradient-text-secondary');
  
  gradientTexts.forEach(element => {
    const text = element.textContent;
    element.innerHTML = '';
    
    text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.animationDelay = `${index * 50}ms`;
      element.appendChild(span);
    });
  });
}

// Call on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', animateGradientText);
} else {
  animateGradientText();
}

// ==========================================
// Button Ripple Effect
// ==========================================

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.position = 'absolute';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.background = 'rgba(255, 255, 255, 0.5)';
    ripple.style.borderRadius = '50%';
    ripple.style.pointerEvents = 'none';
    ripple.style.animation = 'ripple 0.6s ease-out';
    
    // Add animation keyframes if not already present
    if (!document.querySelector('style[data-ripple]')) {
      const style = document.createElement('style');
      style.setAttribute('data-ripple', 'true');
      style.textContent = `
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
    
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  });
});

// ==========================================
// Text Reveal Animation on Scroll
// ==========================================

const textRevealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('p, h1, h2, h3, h4, h5, h6').forEach(element => {
  if (!element.classList.contains('scroll-reveal')) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    textRevealObserver.observe(element);
  }
});

// ==========================================
// Animated Counter
// ==========================================

function animateValue(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    element.textContent = value + (element.getAttribute('data-suffix') || '');
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };
  requestAnimationFrame(step);
}

// ==========================================
// Intersection Observer for Animations
// ==========================================

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      animationObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('[data-animate]').forEach(element => {
  animationObserver.observe(element);
});

// ==========================================
// Cursor Glow Effect (Optional)
// ==========================================

function initCursorGlow() {
  const style = document.createElement('style');
  style.textContent = `
    body {
      cursor: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8" fill="rgba(168,200,240,0.3)"/></svg>') 12 12, auto;
    }
    
    a, button {
      cursor: pointer;
    }
  `;
  document.head.appendChild(style);
}

// Uncomment to enable custom cursor
// initCursorGlow();

// ==========================================
// Scroll-triggered Stagger Animation
// ==========================================

function staggerElements(selector, delay = 100) {
  const elements = document.querySelectorAll(selector);
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animate-in');
        }, index * delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  elements.forEach(el => {
    el.classList.add('will-animate');
    observer.observe(el);
  });
}

// Apply stagger to cards
staggerElements('.card', 150);
staggerElements('.timeline-item', 100);

// ==========================================
// Smooth Page Transitions
// ==========================================

function setupPageTransitions() {
  const links = document.querySelectorAll('a:not([target])');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Don't prevent default for hash links or external links
      if (href.startsWith('#') || href.startsWith('http')) {
        return;
      }
      
      e.preventDefault();
      
      // Fade out
      document.body.style.opacity = '0.7';
      document.body.style.transition = 'opacity 0.3s ease';
      
      setTimeout(() => {
        window.location.href = href;
      }, 300);
    });
  });
  
  // Fade in on page load
  window.addEventListener('load', () => {
    document.body.style.opacity = '1';
  });
}

setupPageTransitions();

// ==========================================
// Floating Animation
// ==========================================

const floatingStyle = document.createElement('style');
floatingStyle.textContent = `
  @keyframes float-up {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
  
  .float-animation {
    animation: float-up 3s ease-in-out infinite;
  }
`;
document.head.appendChild(floatingStyle);

// ==========================================
// Blob Animation Background (Advanced)
// ==========================================

function createBlobAnimation() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes blob {
      0%, 100% {
        transform: translate(0, 0) scale(1);
      }
      33% {
        transform: translate(30px, -50px) scale(1.1);
      }
      66% {
        transform: translate(-20px, 20px) scale(0.9);
      }
    }
    
    .blob-bg {
      position: fixed;
      bottom: 0;
      right: 0;
      width: 500px;
      height: 500px;
      background: linear-gradient(135deg, rgba(168, 200, 240, 0.1), rgba(232, 160, 192, 0.05));
      border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
      animation: blob 7s infinite;
      z-index: -1;
      pointer-events: none;
      filter: blur(80px);
    }
  `;
  document.head.appendChild(style);
}

createBlobAnimation();

// ==========================================
// Performance Optimization
// ==========================================

// Throttle scroll events
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Lazy load animations for better performance
document.addEventListener('DOMContentLoaded', () => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      // Load additional animations only when idle
      console.log('Page ready for additional effects');
    });
  }
});

console.log('Animations initialized ✨');
