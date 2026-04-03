import React from 'react';
import { Bot, Calendar, Zap, FolderHeart, Lock, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import logoImg from './assets/logo-removebg-preview.png';

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
      <nav className="absolute top-0 left-0 w-full px-8 py-8 md:px-12 md:py-10 z-50 flex items-center justify-start">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...smoothTransition, duration: 1 }}
        >
          <Logo />
        </motion.div>
      </nav>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40 pb-20 md:pt-48 md:pb-32">
        
        {/* Header */}
        <header className="mb-32">
          
          <div className="mt-8 max-w-4xl mx-auto text-center md:text-left">
            <motion.h1 
              className="font-display font-bold text-[2.5rem] leading-[1.1] sm:text-5xl md:text-7xl mb-8 text-center md:text-left break-words"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...smoothTransition, delay: 0.1 }}
            >
              <span className="block">SYNTHÈSE OPÉRATIONNELLE</span>
              <span className="text-grey-text/70 block text-3xl sm:text-4xl md:text-7xl mt-4 md:mt-0">
                <span className="hidden md:inline-block mr-2">—</span>
                <span className="block md:hidden w-16 h-1 bg-gradient-to-r from-transparent via-grey-text/30 to-transparent mx-auto mb-5 rounded-full"></span>
                BRODARD AVOCATS SA
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-lavender-blue font-medium mb-12"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...smoothTransition, delay: 0.2 }}
            >
              Désengorger votre back-office pour fluidifier la sortie des dossiers en Droit de la Famille.
            </motion.p>
            
            <motion.div 
              className="bg-card-bg/40 border border-white/5 p-8 md:p-10 rounded-3xl backdrop-blur-md shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...smoothTransition, delay: 0.3 }}
            >
              <p className="text-lg md:text-xl leading-relaxed text-grey-text">
                <strong className="text-white font-semibold">Bonjour Maître Brodard,</strong><br/><br/>
                Avec une équipe de 11 collaborateurs (7 juristes pour 4 collaborateurs support), la friction logistique pèse sur vos opérations. Voici 3 flux sécurisés pour neutraliser ces goulots d'étranglement.
              </p>
            </motion.div>
          </div>
        </header>

        {/* Section 1 */}
        <section className="mb-40 flex flex-col items-center">
          <motion.h2 
            className="font-display font-bold text-3xl md:text-4xl mb-20 flex items-center gap-5 w-full max-w-[900px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={smoothTransition}
          >
            <span className="w-12 h-1 bg-gradient-primary rounded-full"></span>
            3 GOULOTS D'ÉTRANGLEMENT & SOLUTIONS
          </motion.h2>

          <div className="w-full max-w-[900px] flex flex-col gap-16">
            {/* Bloc 1 */}
            <motion.div 
              className="bg-[#111111] border border-white/5 p-8 md:p-12 rounded-[2rem] hover:border-glow-accent/30 transition-all duration-500 ease-out shadow-2xl relative overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...smoothTransition, delay: 0.1 }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-lavender-blue/5 rounded-full blur-[80px] group-hover:bg-lavender-blue/10 transition-all duration-500 pointer-events-none"></div>
              
              <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start relative z-10">
                {/* Icône et Titre */}
                <div className="md:w-5/12 flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-dark-bg border border-white/10 flex items-center justify-center mb-8 shadow-inner">
                    <Bot className="w-8 h-8 text-lavender-blue" />
                  </div>
                  <h3 className="font-display font-bold text-2xl md:text-3xl leading-snug">
                    1. LA COLLECTE ET LE TRI DES PIÈCES EN DIVORCE / MPUC
                  </h3>
                </div>

                {/* Constat / Solution */}
                <div className="md:w-7/12 flex flex-col gap-8 text-base md:text-[1.1rem] leading-[1.7] font-sans">
                  
                  <div className="flex flex-col gap-3">
                    <span className="text-soft-pink font-extrabold tracking-widest uppercase text-xs flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-soft-pink glow-icon" /> LE CONSTAT
                    </span>
                    <p className="text-grey-text">
                      La réception fragmentée des fiches de salaires, impôts et décomptes LPP impose à votre back-office (Mmes Dridah, Heleno, Menoud) un travail de tri et de relance manuel extrêmement chronophage.
                    </p>
                  </div>

                  <div className="w-full h-[1px] bg-white/5"></div>

                  <div className="flex flex-col gap-3">
                    <span className="text-lavender-blue font-extrabold tracking-widest uppercase text-xs flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-lavender-blue glow-icon" /> LE PROCESSUS AUTOMATISÉ
                    </span>
                    <p className="text-white font-medium">
                      Un portail d'onboarding chiffré. Le système détecte la nature des documents, valide la complétude du dossier et relance le client automatiquement sans intervention humaine.
                    </p>
                  </div>

                </div>
              </div>
            </motion.div>

            {/* Bloc 2 */}
            <motion.div 
              className="bg-[#111111] border border-white/5 p-8 md:p-12 rounded-[2rem] hover:border-glow-accent/30 transition-all duration-500 ease-out shadow-2xl relative overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...smoothTransition, delay: 0.2 }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-glow-accent/5 rounded-full blur-[80px] group-hover:bg-glow-accent/10 transition-all duration-500 pointer-events-none"></div>

              <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start relative z-10">
                <div className="md:w-5/12 flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-dark-bg border border-white/10 flex items-center justify-center mb-8 shadow-inner relative">
                    <Calendar className="w-8 h-8 text-soft-pink relative z-10" />
                    <Zap className="w-4 h-4 text-glow-accent absolute top-2 right-2 opacity-50" />
                  </div>
                  <h3 className="font-display font-bold text-2xl md:text-3xl leading-snug">
                    2. LA SÉCURISATION DES DÉLAIS PROCÉDURAUX (TRIBUNAUX VAUDOIS)
                  </h3>
                </div>

                <div className="md:w-7/12 flex flex-col gap-8 text-base md:text-[1.1rem] leading-[1.7] font-sans">
                  
                  <div className="flex flex-col gap-3">
                    <span className="text-soft-pink font-extrabold tracking-widest uppercase text-xs flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-soft-pink glow-icon" /> LE CONSTAT
                    </span>
                    <p className="text-grey-text">
                      La transcription manuelle des ordonnances et convocations judiciaires dans vos agendas partagés est le processus le plus critique, nécessitant une vigilance de tous les instants.
                    </p>
                  </div>

                  <div className="w-full h-[1px] bg-white/5"></div>

                  <div className="flex flex-col gap-3">
                    <span className="text-lavender-blue font-extrabold tracking-widest uppercase text-xs flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-lavender-blue glow-icon" /> LE PROCESSUS AUTOMATISÉ
                    </span>
                    <p className="text-white font-medium">
                      Une IA lit le courrier entrant, extrait les dates butoirs, calcule le <em className="not-italic text-[#E8A0C0]">dies a quo</em>, et injecte directement les délais dans les agendas de l'équipe (Mmes Abbas, Corthay) avec une cascade de rappels.
                    </p>
                  </div>

                </div>
              </div>
            </motion.div>

            {/* Bloc 3 */}
            <motion.div 
              className="bg-[#111111] border border-white/5 p-8 md:p-12 rounded-[2rem] hover:border-glow-accent/30 transition-all duration-500 ease-out shadow-2xl relative overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...smoothTransition, delay: 0.3 }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-mid/5 rounded-full blur-[80px] group-hover:bg-violet-mid/10 transition-all duration-500 pointer-events-none"></div>

              <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start relative z-10">
                <div className="md:w-5/12 flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-dark-bg border border-white/10 flex items-center justify-center mb-8 shadow-inner">
                    <FolderHeart className="w-8 h-8 text-violet-mid" />
                  </div>
                  <h3 className="font-display font-bold text-2xl md:text-3xl leading-snug">
                    3. L'INDUSTRIALISATION DES CONVENTIONS DE MÉDIATION
                  </h3>
                </div>

                <div className="md:w-7/12 flex flex-col gap-8 text-base md:text-[1.1rem] leading-[1.7] font-sans">
                  
                  <div className="flex flex-col gap-3">
                    <span className="text-soft-pink font-extrabold tracking-widest uppercase text-xs flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-soft-pink glow-icon" /> LE CONSTAT
                    </span>
                    <p className="text-grey-text">
                       Bien que les accords de principe soient trouvés en séance, formaliser les calculs de contributions d'entretien et le partage LPP exige encore des heures de double saisie.
                    </p>
                  </div>

                  <div className="w-full h-[1px] bg-white/5"></div>

                  <div className="flex flex-col gap-3">
                    <span className="text-lavender-blue font-extrabold tracking-widest uppercase text-xs flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-lavender-blue glow-icon" /> LE PROCESSUS AUTOMATISÉ
                    </span>
                    <p className="text-white font-medium">
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
