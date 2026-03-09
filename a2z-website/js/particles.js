/* ==========================================
   PARTICLE ANIMATION BACKGROUND
   ========================================== */

class ParticleBackground {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.particleCount = 50;
    this.resizeCanvas();
    this.initParticles();
    this.animate();
    
    window.addEventListener('resize', () => this.resizeCanvas());
  }
  
  resizeCanvas() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
  }
  
  initParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        color: this.getRandomColor()
      });
    }
  }
  
  getRandomColor() {
    const colors = [
      'rgba(168, 200, 240, ',  // Light blue
      'rgba(196, 160, 220, ',  // Purple
      'rgba(232, 160, 192, '   // Pink
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  drawParticle(particle) {
    this.ctx.fillStyle = particle.color + particle.opacity + ')';
    this.ctx.beginPath();
    this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    this.ctx.fill();
  }
  
  drawConnections() {
    const maxDistance = 150;
    
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * 0.2;
          this.ctx.strokeStyle = `rgba(168, 200, 240, ${opacity})`;
          this.ctx.lineWidth = 1;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
    }
  }
  
  updateParticles() {
    this.particles.forEach(particle => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Bounce off edges
      if (particle.x - particle.radius < 0 || particle.x + particle.radius > this.canvas.width) {
        particle.vx = -particle.vx;
      }
      if (particle.y - particle.radius < 0 || particle.y + particle.radius > this.canvas.height) {
        particle.vy = -particle.vy;
      }
      
      // Keep in bounds
      particle.x = Math.max(particle.radius, Math.min(this.canvas.width - particle.radius, particle.x));
      particle.y = Math.max(particle.radius, Math.min(this.canvas.height - particle.radius, particle.y));
      
      // Slight opacity variation
      particle.opacity += (Math.random() - 0.5) * 0.02;
      particle.opacity = Math.max(0.2, Math.min(0.8, particle.opacity));
    });
  }
  
  animate() {
    // Clear canvas with fade effect
    this.ctx.fillStyle = 'rgba(13, 13, 13, 0.05)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Update and draw
    this.updateParticles();
    this.drawConnections();
    this.particles.forEach(particle => this.drawParticle(particle));
    
    requestAnimationFrame(() => this.animate());
  }
}

// Initialize particle background when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new ParticleBackground('particlesCanvas');
  });
} else {
  new ParticleBackground('particlesCanvas');
}
