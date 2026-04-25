/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  Instagram, 
  CheckCircle2, 
  Brain, 
  Users, 
  Clock, 
  FileText, 
  Search, 
  MessageCircle,
  Menu,
  X,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "5581982519461";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const INSTAGRAM_LINK = "https://www.instagram.com/adnajullianapsi/";
const INSTAGRAM_HANDLE = "@adnajullianapsi";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-brand-dark">
                Adna Juliana
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-primary font-medium">
                Neuropsicologia Clínica
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#inicio" className="text-sm font-medium hover:text-brand-primary transition-colors">Início</a>
              <a href="#servicos" className="text-sm font-medium hover:text-brand-primary transition-colors">Serviços</a>
              <a href="#sobre" className="text-sm font-medium hover:text-brand-primary transition-colors">Sobre</a>
              
              <div className="flex items-center space-x-4 border-l border-brand-border pl-8">
                <a 
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-muted hover:text-brand-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-brand-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:brightness-110 shadow-lg shadow-brand-primary/20 transition-all duration-300 flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-brand-bg border-b border-brand-primary/10 px-4 py-6 space-y-4"
          >
            <a href="#inicio" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Início</a>
            <a href="#servicos" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Serviços</a>
            <a href="#sobre" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Sobre</a>
            <div className="pt-4 flex flex-col gap-4">
              <a 
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-brand-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <Instagram className="w-5 h-5 mr-2" />
                Instagram
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center bg-brand-primary text-white py-3 rounded-full font-bold shadow-lg shadow-brand-primary/20"
                onClick={() => setIsMenuOpen(false)}
              >
                Conversar no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 pb-20 overflow-hidden lg:pt-48 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-brand-primary font-medium tracking-[0.2em] text-sm uppercase mb-4">
                Especialista em Neuropsicologia
              </h2>
              <h1 className="text-4xl md:text-6xl font-serif text-brand-dark leading-[1.1] mb-6">
                Compreensão <span className="text-accent italic">Cognitiva</span> e <span className="text-brand-primary italic">Emocional</span> para sua Saúde Mental.
              </h1>
              <p className="text-lg text-brand-muted mb-8 max-w-lg leading-relaxed">
                Realizo testes e avaliações neuropsicológicas completas para TDAH, TEA, Borderline e outros quadros clínicos. Atendimento ético, personalizado e acolhedor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary text-white rounded-full font-medium hover:opacity-90 shadow-lg shadow-brand-primary/20 transition-all duration-300 group"
                >
                  Agende sua Avaliação
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="flex items-center px-6 py-4 rounded-full border border-brand-primary/20 bg-brand-light">
                  <Phone className="w-5 h-5 text-brand-primary mr-3" />
                  <span className="text-sm font-medium text-brand-dark">(81) 98251-9461</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mt-12 lg:mt-0 relative"
            >
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://i.postimg.cc/j5nDzPHw/Whats-App-Image-2026-04-25-at-12-51-47-(1).jpg" 
                  alt="Psicóloga Adna Juliana" 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-brand-primary/20 rounded-full"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl"></div>
              
              <div className="absolute bottom-10 right-10 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl z-20 border border-brand-border">
                <p className="text-brand-primary font-bold text-lg">CRP 02/26892</p>
                <p className="text-brand-muted text-xs uppercase tracking-widest font-medium">Registro Profissional</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Highlight */}
      <section className="bg-brand-dark py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div {...fadeIn}>
              <Brain className="w-10 h-10 text-brand-primary mx-auto mb-4" />
              <h3 className="text-white text-xl font-serif mb-2">Neuropsicologia</h3>
              <p className="text-brand-light/60 text-sm">Avaliação detalhada das funções cognitivas.</p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <Users className="w-10 h-10 text-brand-primary mx-auto mb-4" />
              <h3 className="text-white text-xl font-serif mb-2">Humanização</h3>
              <p className="text-brand-light/60 text-sm">Escuta qualificada e acolhimento ético.</p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
              <MessageCircle className="w-10 h-10 text-brand-primary mx-auto mb-4" />
              <h3 className="text-white text-xl font-serif mb-2">Remoto</h3>
              <p className="text-brand-light/60 text-sm">Atendimento online para todo o Brasil.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-primary font-medium tracking-widest text-sm uppercase mb-4">Especialidades</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-brand-dark">Avaliações Completas</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Terapia Individual", 
                desc: "Processo focado no desenvolvimento de estratégias para lidar com ansiedade, estresse e crescimento pessoal.",
                icon: <Users className="w-5 h-5" />
              },
              { 
                title: "Terapia de Casais", 
                desc: "Superando obstáculos para uma relação saudável, melhorando a comunicação e o vínculo afetivo.",
                icon: <MessageCircle className="w-5 h-5" />
              },
              { 
                title: "Avaliação Neuropsicológica", 
                desc: "Investigação detalhada (TDAH, TEA, Borderline) com laudo técnico e orientações precisas.",
                icon: <Brain className="w-5 h-5" />
              },
              { 
                title: "Grupo Terapêutico", 
                desc: "Controlando a Ansiedade: 8 encontros focados em técnicas práticas para lidar com contextos ansiosos.",
                icon: <Users className="w-5 h-5" />
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl border border-brand-border bg-brand-bg/50 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-light text-brand-primary rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h4 className="text-xl font-serif text-brand-dark mb-4">{service.title}</h4>
                <p className="text-brand-muted text-sm leading-relaxed mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-xs text-brand-muted">
                    <CheckCircle2 className="w-3 h-3 text-brand-primary mr-2" />
                    Atendimento Humanizado
                  </li>
                  <li className="flex items-center text-xs text-brand-muted">
                    <CheckCircle2 className="w-3 h-3 text-brand-primary mr-2" />
                    Ética Profissional
                  </li>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="processo" className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-brand-primary font-medium tracking-widest text-sm uppercase mb-4">Metodologia</h2>
              <h3 className="text-3xl md:text-4xl font-serif mb-8">Como funciona a Avaliação Remota</h3>
              <div className="space-y-8">
                {[
                  { 
                    icon: <Users className="w-6 h-6" />, 
                    title: "1. Entrevista Individual e Familiar", 
                    text: "Coleta detalhada de informações sobre o histórico de desenvolvimento e sintomas." 
                  },
                  { 
                    icon: <Search className="w-6 h-6" />, 
                    title: "2. Aplicação de Testes e Escalas", 
                    text: "Utilização de instrumentos científicos para avaliar atenção, memória e comportamento." 
                  },
                  { 
                    icon: <FileText className="w-6 h-6" />, 
                    title: "3. Laudo Incluso e Encaminhamento", 
                    text: "Emissão de relatório técnico completo e diretrizes para os próximos passos." 
                  }
                ].map((step, i) => (
                  <motion.div 
                    key={i}
                    {...fadeIn}
                    transition={{ delay: i * 0.2 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-brand-primary/30 flex items-center justify-center text-brand-primary">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-serif mb-2">{step.title}</h4>
                      <p className="text-brand-light/60 text-sm leading-relaxed">{step.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-brand-primary/10 to-transparent rounded-full flex items-center justify-center p-12 text-center">
                <div className="max-w-xs">
                  <span className="text-brand-primary text-xs uppercase tracking-widest">Objetivo Final</span>
                  <p className="text-2xl font-serif mt-4 mb-2 italic">Entenda seu Perfil Cognitivo</p>
                  <p className="text-brand-light/40 text-xs">Transforme diagnóstico em ferramenta de evolução.</p>
                </div>
              </div>
              {/* Floating detail */}
              <div className="absolute top-0 right-0 p-8 border border-brand-primary/20 rounded-2xl bg-brand-dark/50 backdrop-blur-md">
                <Clock className="w-8 h-8 text-brand-primary mb-3" />
                <p className="text-sm font-medium">Sessão de Devolutiva</p>
                <p className="text-[10px] text-brand-light/50 font-serif lowercase italic">Ética e Acolhedora</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="https://i.postimg.cc/tTnshW3P/Whats-App-Image-2026-04-25-at-12-51-47-(4).jpg" 
                    alt="Psicóloga Adna Juliana em atendimento" 
                    className="rounded-2xl hover:grayscale transition-all duration-700 shadow-xl w-full aspect-[3/4] object-cover"
                  />
                </div>
                <div className="space-y-4 pt-12">
                  <img 
                    src="https://i.postimg.cc/tTnshW3W/Whats-App-Image-2026-04-25-at-12-51-47-(6).jpg" 
                    alt="Adna Juliana Profissional" 
                    className="rounded-2xl hover:grayscale transition-all duration-700 shadow-xl w-full aspect-[3/4] object-cover"
                  />
                  <img 
                    src="https://i.postimg.cc/wvR1hLXN/Whats-App-Image-2026-04-25-at-12-51-47-(5).jpg" 
                    alt="Adna Juliana" 
                    className="rounded-2xl hover:grayscale transition-all duration-700 shadow-xl w-full aspect-square object-cover"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div {...fadeIn} transition={{ delay: 0.3 }}>
              <h2 className="text-brand-primary font-medium tracking-widest text-sm uppercase mb-4">Sobre Adna Juliana</h2>
              <h3 className="text-3xl md:text-5xl font-serif text-brand-dark mb-6">Unindo ciência <span className="text-accent text-4xl">e</span> humanidade.</h3>
              <div className="space-y-6 text-brand-muted text-lg leading-relaxed">
                <p>
                  Adna Juliana é uma renomada psicóloga com uma vasta experiência na área da saúde mental. Nascida em Recife, ela sempre teve uma paixão pelo estudo da mente humana e um profundo desejo de ajudar os outros a superar seus desafios emocionais.
                </p>
                <p>
                  Dedica-se aos estudos e obteve seu diploma em Psicologia pela universidade Estácio de Sá. Durante sua formação, destacou-se em habilidades clínicas e pesquisa, conquistando reconhecimento por seu comprometimento e paixão pela área.
                </p>
                <p>
                  Ao longo de sua carreira, trabalhou em clínicas, hospitais e instituições de saúde mental, desenvolvendo uma reputação sólida como profissional compassiva, empática e altamente competente, capaz de estabelecer uma conexão genuína com seus pacientes.
                </p>
                <div className="pt-6 grid grid-cols-2 gap-6">
                  <div className="p-4 border border-brand-border rounded-xl bg-brand-light/20">
                    <p className="text-brand-primary font-bold">Registro Ativo</p>
                    <p className="text-sm">CRP 02/26892</p>
                  </div>
                  <div className="p-4 border border-brand-border rounded-xl bg-brand-light/20">
                    <p className="text-brand-primary font-bold">Especialista</p>
                    <p className="text-sm">Neuropsicologia</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="brand-gradient p-1 rounded-[40px] shadow-2xl">
            <div className="bg-brand-dark p-12 md:p-20 rounded-[38px] text-center">
              <h3 className="text-3xl md:text-5xl font-serif text-white mb-6">Pronto para iniciar sua jornada?</h3>
              <p className="text-brand-light/70 text-lg mb-10 max-w-xl mx-auto">
                Agende sua avaliação neuropsicológica agora e receba o suporte especializado que sua saúde mental merece.
              </p>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-brand-dark rounded-full font-bold text-lg hover:bg-brand-light hover:text-brand-primary transition-all duration-300 shadow-xl"
              >
                Agende pelo WhatsApp
                <Phone className="ml-3 w-5 h-5" />
              </a>
              <p className="mt-8 text-brand-light/40 text-xs uppercase tracking-widest">
                Avaliação ética e personalizada para sua saúde mental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-brand-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div>
              <span className="font-serif text-2xl font-bold text-brand-dark">Adna Juliana</span>
              <p className="mt-4 text-brand-muted text-sm leading-relaxed">
                Psicóloga Clínica e Especialista em Neuropsicologia. Transformando vidas através de diagnósticos precisos e suporte humanizado.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-brand-primary font-bold text-xs uppercase tracking-widest">Links rápidos</h4>
              <nav className="flex flex-col space-y-2">
                <a href="#servicos" className="text-sm hover:text-brand-primary transition-colors">Especialidades</a>
                <a href="#processo" className="text-sm hover:text-brand-primary transition-colors">O Processo</a>
                <a href="#sobre" className="text-sm hover:text-brand-primary transition-colors">Biografia</a>
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="text-brand-primary font-bold text-xs uppercase tracking-widest">Contato</h4>
              <div className="flex justify-center md:justify-start space-x-6">
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-brand-muted hover:text-brand-primary transition-colors flex flex-col items-center gap-2">
                  <Phone className="w-6 h-6" />
                  <span className="text-[10px] uppercase font-bold">WhatsApp</span>
                </a>
                <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer" className="text-brand-muted hover:text-brand-primary transition-colors flex flex-col items-center gap-2">
                  <Instagram className="w-6 h-6" />
                  <span className="text-[10px] uppercase font-bold">Instagram</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-brand-border text-center">
            <p className="text-[10px] text-brand-muted uppercase tracking-widest">
               &copy; {new Date().getFullYear()} Adna Juliana • Psicóloga Clínica CRP 02/26892 • Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
