import React from 'react';
import { Bot, Calendar, Zap, FolderHeart, Lock, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import logoImg from './assets/logo-removebg-preview.png';
import { CinematicHero } from './components/ui/premium-legal-hero';

const Logo = () => (
  <div className="flex items-center">
    <img 
      src={logoImg} 
      alt="A2Z Consulting Logo" 
      className="h-24 md:h-32 object-contain"
      onError={(e) => {
        e.currentTarget.style.display = 'none';
        e.currentTarget.nextElementSibling?.classList.remove('hidden');
      }}
    />
    <div className="hidden flex items-center font-display font-bold text-3xl tracking-tighter">
      <span className="text-gradient">A</span>
      <svg className="w-6 h-6 mx-0.5 text-soft-pink transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="url(#arrow-grad)" strokeWidth="3">
        <defs>
          <linearGradient id="arrow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E8A0C0" />
            <stop offset="100%" stopColor="#C4A0DC" />
          </linearGradient>
        </defs>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
      <span className="text-gradient">Z</span>
    </div>
  </div>
);

const smoothTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

export default function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-glow-accent selection:text-white overflow-x-hidden">
      {/* Background wireframe/glow effects */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-lavender-blue blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-violet-mid blur-[120px]" />
        
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Navbar Separée */}
      <nav className="absolute top-0 left-0 w-full px-8 py-8 md:px-12 md:py-10 z-[100] flex items-center justify-start pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...smoothTransition, duration: 1 }}
          className="pointer-events-auto"
        >
          <Logo />
        </motion.div>
      </nav>

      <CinematicHero />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-32">
        
        {/* Section 1 - Refonte Premium Verticale */}
        <section className="mb-40 max-w-5xl mx-auto">
          <motion.h2 
            className="font-display font-bold text-3xl md:text-4xl mb-20 flex items-center justify-center md:justify-start gap-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={smoothTransition}
          >
            <span className="w-12 h-1 bg-gradient-primary rounded-full hidden md:block"></span>
            3 GOULOTS D'ÉTRANGLEMENT & SOLUTIONS
          </motion.h2>

          <div className="flex flex-col gap-16 md:gap-24">
            {/* Bloc 1 */}
            <motion.div 
              className="bg-card-bg/40 border border-white/10 p-8 md:p-12 rounded-[2.5rem] hover:border-glow-accent/30 hover:bg-card-bg/60 transition-all duration-500 ease-out shadow-2xl backdrop-blur-md group"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...smoothTransition, delay: 0.1 }}
            >
              <div className="flex flex-col md:flex-row gap-10 md:gap-16">
                {/* Left Side: 30% */}
                <div className="md:w-[35%] flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-20 h-20 rounded-3xl bg-dark-bg/80 border border-white/10 flex items-center justify-center mb-6 group-hover:border-lavender-blue/50 group-hover:scale-105 transition-all duration-500 ease-out shadow-inner">
                    <Bot className="w-10 h-10 text-lavender-blue glow-icon" />
                  </div>
                  <h3 className="font-display font-bold text-2xl md:text-3xl leading-tight text-white/90">
                    1. LA COLLECTE <br className="hidden md:block" /> ET LE TRI DES PIÈCES
                  </h3>
                </div>

                {/* Right Side: 70% */}
                <div className="md:w-[65%] space-y-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <h4 className="text-soft-pink font-bold uppercase tracking-widest text-xs opacity-80 flex items-center gap-2">
                      <span className="w-4 h-px bg-soft-pink/40"></span> Le Constat
                    </h4>
                    <p className="text-grey-text text-lg leading-relaxed brightness-110">
                      La réception fragmentée des fiches de salaires, impôts et décomptes LPP impose à votre back-office <span className="text-white/80">(Mmes Dridah, Heleno, Menoud)</span> un travail de tri et de relance manuel extrêmement chronophage.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lavender-blue font-bold uppercase tracking-widest text-xs opacity-80 flex items-center gap-2">
                      <span className="w-4 h-px bg-lavender-blue/40"></span> Le Processus Automatisé
                    </h4>
                    <p className="text-grey-text text-lg leading-relaxed">
                      Un portail d'onboarding chiffré. Le système détecte la nature des documents, valide la complétude du dossier et relance le client automatiquement sans intervention humaine.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bloc 2 */}
            <motion.div 
              className="bg-card-bg/40 border border-white/10 p-8 md:p-12 rounded-[2.5rem] hover:border-glow-accent/30 hover:bg-card-bg/60 transition-all duration-500 ease-out shadow-2xl backdrop-blur-md group"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...smoothTransition, delay: 0.2 }}
            >
              <div className="flex flex-col md:flex-row gap-10 md:gap-16">
                {/* Left Side: 30% */}
                <div className="md:w-[35%] flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-20 h-20 rounded-3xl bg-dark-bg/80 border border-white/10 flex items-center justify-center mb-6 group-hover:border-soft-pink/50 group-hover:scale-105 transition-all duration-500 ease-out shadow-inner">
                    <Calendar className="w-10 h-10 text-soft-pink glow-icon" />
                  </div>
                  <h3 className="font-display font-bold text-2xl md:text-3xl leading-tight text-white/90">
                    2. SÉCURISATION <br className="hidden md:block" /> DES DÉLAIS
                  </h3>
                </div>

                {/* Right Side: 70% */}
                <div className="md:w-[65%] space-y-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <h4 className="text-soft-pink font-bold uppercase tracking-widest text-xs opacity-80 flex items-center gap-2">
                      <span className="w-4 h-px bg-soft-pink/40"></span> Le Constat
                    </h4>
                    <p className="text-grey-text text-lg leading-relaxed brightness-110">
                      La transcription manuelle des ordonnances et convocations judiciaires dans vos agendas partagés est le processus le plus critique, nécessitant une vigilance de tous les instants.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lavender-blue font-bold uppercase tracking-widest text-xs opacity-80 flex items-center gap-2">
                      <span className="w-4 h-px bg-lavender-blue/40"></span> Le Processus Automatisé
                    </h4>
                    <p className="text-grey-text text-lg leading-relaxed">
                      Une IA lit le courrier entrant, extrait les dates butoirs, calcule le <em className="not-italic text-white/80">dies a quo</em>, et injecte directement les délais dans les agendas de l'équipe <span className="text-white/80">(Mmes Abbas, Corthay)</span> avec une cascade de rappels.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bloc 3 */}
            <motion.div 
              className="bg-card-bg/40 border border-white/10 p-8 md:p-12 rounded-[2.5rem] hover:border-glow-accent/30 hover:bg-card-bg/60 transition-all duration-500 ease-out shadow-2xl backdrop-blur-md group"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...smoothTransition, delay: 0.3 }}
            >
              <div className="flex flex-col md:flex-row gap-10 md:gap-16">
                {/* Left Side: 30% */}
                <div className="md:w-[35%] flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-20 h-20 rounded-3xl bg-dark-bg/80 border border-white/10 flex items-center justify-center mb-6 group-hover:border-violet-mid/50 group-hover:scale-105 transition-all duration-500 ease-out shadow-inner">
                    <FolderHeart className="w-10 h-10 text-violet-mid glow-icon" />
                  </div>
                  <h3 className="font-display font-bold text-2xl md:text-3xl leading-tight text-white/90">
                    3. CONVENTIONS <br className="hidden md:block" /> DE MÉDIATION
                  </h3>
                </div>

                {/* Right Side: 70% */}
                <div className="md:w-[65%] space-y-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <h4 className="text-soft-pink font-bold uppercase tracking-widest text-xs opacity-80 flex items-center gap-2">
                      <span className="w-4 h-px bg-soft-pink/40"></span> Le Constat
                    </h4>
                    <p className="text-grey-text text-lg leading-relaxed brightness-110">
                      Bien que les accords de principe soient trouvés en séance, formaliser les calculs de contributions d'entretien et le partage LPP exige encore des heures de double saisie.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lavender-blue font-bold uppercase tracking-widest text-xs opacity-80 flex items-center gap-2">
                      <span className="w-4 h-px bg-lavender-blue/40"></span> Le Processus Automatisé
                    </h4>
                    <p className="text-grey-text text-lg leading-relaxed">
                      Un flux génère instantanément le squelette juridique de la convention en s'appuyant sur des tableaux financiers dynamiques, vous livrant un document prêt pour la validation finale.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-40">
          <motion.div 
            className="bg-gradient-to-br from-card-bg to-[#151515] border border-white/10 p-12 md:p-20 rounded-[2.5rem] relative overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={smoothTransition}
          >
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-glow-accent/10 rounded-full blur-[80px]"></div>
            
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-14 flex items-center gap-5">
              <ShieldCheck className="w-12 h-12 text-glow-accent glow-icon" />
              INFRASTRUCTURE (LE BOUCLIER LÉGAL)
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex gap-5">
                <div className="mt-1">
                  <Lock className="w-7 h-7 text-lavender-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-lg md:text-xl mb-3 text-white">Conformité nLPD & Secret Professionnel</h4>
                  <p className="text-grey-text leading-relaxed">Les modèles d'IA sont privés et ne s'entraînent pas sur vos données. Hermétisme total garanti.</p>
                </div>
              </div>
              
              <div className="flex gap-5">
                <div className="mt-2">
                  {/* Swiss Flag Icon representation */}
                  <div className="w-6 h-6 bg-red-600 rounded-sm flex items-center justify-center shadow-lg">
                    <div className="w-3 h-1 bg-white absolute"></div>
                    <div className="w-1 h-3 bg-white absolute"></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg md:text-xl mb-3 text-white">Hébergement Local</h4>
                  <p className="text-grey-text leading-relaxed">Serveurs situés exclusivement en Suisse (Tier IV). Intégration transparente à vos outils actuels.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 3 (CTA) */}
        <section className="text-center max-w-4xl mx-auto mb-24 mt-20">
          <motion.div 
            className="mb-14"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={smoothTransition}
          >
            <div className="text-sm md:text-base font-semibold uppercase tracking-[0.3em] text-grey-text mb-4">PROCHAINE ÉTAPE</div>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl text-glow-accent tracking-tight leading-tight">
              (L'APPEL DE CADRAGE 15 MIN)
            </h2>
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-2xl text-grey-text mb-16 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...smoothTransition, delay: 0.1 }}
          >
            L'automatisation de ces processus permet de récupérer environ <strong className="text-white font-semibold">13 à 15 heures par semaine</strong> sur un secrétariat juridique structuré comme le vôtre. Pour valider la faisabilité technique, un audit de 15 min est nécessaire.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...smoothTransition, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <a 
              href="https://calendly.com/a2z-iamaster/audit-de-faisabilite-a2z-consulting-clone" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-primary rounded-full font-bold text-white text-lg tracking-wide hover:shadow-[0_0_30px_rgba(212,160,255,0.4)] transition-all duration-300 flex items-center gap-3 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10">PLANIFIER UN CADRAGE TECHNIQUE (15 MIN)</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="mt-4 text-sm text-grey-text/70 flex items-center gap-2">
              <Lock className="w-3 h-3" />
              Échange strictement confidentiel, sans engagement commercial.
            </p>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 pt-8 pb-4 text-center">
          <motion.div 
            className="inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-sm text-violet-mid glow-icon tracking-wider">
              https://a2z-ia.ch/synthese-brodard-avocats
            </span>
          </motion.div>
        </footer>

      </div>
    </div>
  );
}
