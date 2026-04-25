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
  ChevronRight,
  Star
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

      {/* About Section - Moved to top as requested */}
      <section id="sobre" className="py-24 bg-brand-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <div className="flex flex-col gap-4 max-w-lg mx-auto lg:mx-0">
                <div className="grid grid-cols-2 gap-4">
                  <div className="group overflow-hidden rounded-2xl border-2 border-brand-gold/10 shadow-xl transition-all duration-500 hover:shadow-brand-gold/20">
                    <img 
                      src="https://i.postimg.cc/tTnshW3P/Whats-App-Image-2026-04-25-at-12-51-47-(4).jpg" 
                      alt="Psicóloga Adna Juliana em atendimento" 
                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="group overflow-hidden rounded-2xl border-2 border-brand-gold/10 shadow-xl transition-all duration-500 hover:shadow-brand-gold/20">
                    <img 
                      src="https://i.postimg.cc/tTnshW3W/Whats-App-Image-2026-04-25-at-12-51-47-(6).jpg" 
                      alt="Adna Juliana Profissional" 
                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="group overflow-hidden rounded-2xl border-2 border-brand-gold/10 shadow-xl transition-all duration-500 hover:shadow-brand-gold/20 w-1/2">
                    <img 
                      src="https://i.postimg.cc/wvR1hLXN/Whats-App-Image-2026-04-25-at-12-51-47-(5).jpg" 
                      alt="Adna Juliana" 
                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div {...fadeIn} transition={{ delay: 0.3 }}>
              <h2 className="text-brand-gold font-bold tracking-widest text-sm uppercase mb-4 flex items-center">
                <span className="w-8 h-[1px] bg-brand-gold mr-3"></span>
                Sobre a Doutora
              </h2>
              <h3 className="text-3xl md:text-5xl font-serif text-brand-dark mb-6">Unindo ciência <span className="text-accent text-4xl italic">e</span> humanidade.</h3>
              <div className="space-y-6 text-brand-muted text-lg leading-relaxed">
                <p>
                  <span className="text-brand-dark font-semibold text-xl">Adna Juliana, 28 anos</span>, é psicóloga especialista em <span className="gold-accent">Terapia Cognitivo-Comportamental (TCC)</span>, com uma trajetória marcada por superação, autoconhecimento e dedicação ao cuidado emocional. Sua história pessoal despertou desde cedo uma profunda sensibilidade para compreender o comportamento humano, levando-a a encontrar na psicologia não apenas uma profissão, mas um propósito de vida.
                </p>
                <p>
                  Formada pelo <span className="text-brand-dark font-medium underline decoration-brand-gold/30">Centro Universitário Estácio do Recife</span> e pós-graduada em TCC pela Faculdade Metropolitana de São Paulo, possui experiência clínica com atendimentos presenciais e online, incluindo atuação em clínicas, telemedicina e apoio emocional voluntário no CVV (Centro de Valorização da Vida).
                </p>
                <p>
                  Ao longo da carreira, acompanhou casos complexos envolvendo ansiedade, depressão, síndrome do pânico e situações de vulnerabilidade emocional, sempre com foco no acolhimento e na promoção de equilíbrio psicológico.
                </p>
                <p>
                  Seu trabalho é baseado em abordagens como <span className="gold-accent">TCC e DBT</span>, oferecendo terapias dinâmicas, objetivas e orientadas ao resultado. Atua com adolescentes, adultos, casais e famílias, ajudando seus pacientes a desenvolverem autoconhecimento, controle emocional e relações mais saudáveis.
                </p>
                <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-4 border border-brand-gold/20 rounded-xl bg-brand-light/30 shadow-sm">
                    <p className="text-brand-primary font-bold">Registro Profissional</p>
                    <p className="text-base font-serif italic">CRP 02/26892</p>
                  </div>
                  <div className="p-4 border border-brand-gold/20 rounded-xl bg-brand-light/30 shadow-sm">
                    <p className="text-brand-primary font-bold">Especialidade</p>
                    <p className="text-base font-serif italic">Neuropsicologia & TCC</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 pb-20 overflow-hidden lg:pt-48 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-brand-primary font-medium tracking-[0.2em] text-sm uppercase mb-4">
                Especialista em Neuropsicologia
              </h2>
              <h1 className="text-5xl md:text-7xl font-serif text-brand-dark leading-[1.1] mb-8">
                Sua Mente em <span className="text-gold">Equilíbrio</span>, sua Vida com <span className="text-accent italic">Propósito</span>.
              </h1>
              <p className="text-xl text-brand-muted mb-10 max-w-lg leading-relaxed">
                Acolhimento ético e suporte especializado para quem busca clareza emocional e diagnóstico preciso.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-10 py-5 bg-brand-primary text-white rounded-2xl font-bold hover:brightness-110 shadow-xl shadow-brand-primary/20 transition-all duration-300 group"
                >
                  Agendar minha Consulta
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="mt-16 lg:mt-0 relative flex justify-center"
            >
              <div className="relative w-full max-w-[500px]">
                <div className="absolute inset-0 bg-brand-gold/10 rounded-full blur-3xl scale-110"></div>
                <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative z-10 border-8 border-white ring-1 ring-brand-gold/10">
                  <img 
                    src="https://i.postimg.cc/j5nDzPHw/Whats-App-Image-2026-04-25-at-12-51-47-(1).jpg" 
                    alt="Psicóloga Adna Juliana" 
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-brand-gold/20 shadow-lg">
                    <p className="text-brand-gold font-bold text-sm mb-1 italic">Propósito de Vida</p>
                    <p className="text-brand-dark font-medium lowercase italic">Guiando você para ser dono(a) de si.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Highlight */}
      <section className="bg-brand-dark py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] gold-gradient opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="grid md:grid-cols-3 gap-16">
            <motion.div {...fadeIn}>
              <Brain className="w-12 h-12 text-brand-gold mx-auto mb-6" />
              <h3 className="text-white text-2xl font-serif mb-4">Neuropsicologia</h3>
              <p className="text-brand-light/60 text-base leading-relaxed">Investigação profunda das funções cognitivas com base científica.</p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <Users className="w-12 h-12 text-brand-gold mx-auto mb-6" />
              <h3 className="text-white text-2xl font-serif mb-4">Humanização</h3>
              <p className="text-brand-light/60 text-base leading-relaxed">Olhar empático e escuta qualificada para cada desafio pessoal.</p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
              <MessageCircle className="w-12 h-12 text-brand-gold mx-auto mb-6" />
              <h3 className="text-white text-2xl font-serif mb-4">Atendimento Online</h3>
              <p className="text-brand-light/60 text-base leading-relaxed">Conexão segura e acolhedora de onde você estiver.</p>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-full h-[1px] gold-gradient opacity-30"></div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-brand-gold font-bold tracking-[0.3em] text-xs uppercase mb-4">Especialidades e Atendimentos</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-brand-dark">Como Posso te <span className="text-accent underline decoration-brand-gold/20 italic">Auxiliar</span></h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Avaliação Neuropsicológica", 
                desc: "Investigação detalhada das funções cognitivas e comportamentais.",
                details: "O processo envolve anamnese clínica e aplicação de testes e escalas científicas rigorosas (TDAH, TEA, Borderline, entre outros). Emissão de Laudo neuropsicológico para fins acadêmicos, jurídicos e para autoconhecimento. As avaliações podem durar até 7 sessões, mas esse prazo pode ser estendido dependendo da complexidade do caso e dos testes neuro utilizados para garantir um diagnóstico preciso.",
                icon: <Brain className="w-6 h-6" />
              },
              { 
                title: "Terapia Individual", 
                desc: "Sessões dinâmicas com foco em ansiedade, depressão e autoconhecimento.",
                details: "Trabalho fundamentado em TCC e DBT. Dentro das estratégias, realizamos a verificação do humor e trabalhamos com metas da semana. O cuidado estende-se para além da sessão com acompanhamento pré e pós-consultas, garantindo um monitoramento constante de todo o processo do paciente.",
                icon: <Users className="w-6 h-6" />
              },
              { 
                title: "Terapia de Casais", 
                desc: "Mediação voltada para superar obstáculos e fortalecer vínculos.",
                details: "Focada em melhorar a comunicação e resolver conflitos recorrentes. O objetivo é ajudar o casal a encontrar um equilíbrio saudável, compreendendo as realidades individuais para construir uma relação mais autêntica e conectada.",
                icon: <MessageCircle className="w-6 h-6" />
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[32px] border border-brand-border bg-brand-bg/30 hover:bg-white hover:shadow-2xl transition-all duration-500 group relative border-t-4 border-t-transparent hover:border-t-brand-gold"
              >
                <div className="w-14 h-14 bg-brand-light text-brand-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-serif text-brand-dark mb-4">{service.title}</h4>
                <p className="text-brand-gold font-bold text-xs uppercase tracking-widest mb-6 block border-b border-brand-gold/10 pb-4">{service.desc}</p>
                <p className="text-brand-muted text-sm leading-relaxed mb-8 italic font-light">
                  {service.details}
                </p>
                <div className="pt-6 border-t border-brand-border flex items-center justify-between">
                  <span className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">Atendimento Ético</span>
                  <a href={WHATSAPP_LINK} className="text-brand-primary hover:text-brand-gold transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Detailed Methodology */}
      <section id="processo" className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-brand-gold font-medium tracking-widest text-sm uppercase mb-4">Metodologia Detalhada</h2>
              <h3 className="text-3xl md:text-5xl font-serif mb-12">Como funciona a <span className="text-brand-gold italic">Avaliação Neuropsicológica</span></h3>
              
              <div className="space-y-10">
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
                    className="flex gap-8 group"
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl border-2 border-brand-gold/30 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-300">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-serif mb-2 text-brand-gold">{step.title}</h4>
                      <p className="text-brand-light/60 text-sm leading-relaxed max-w-md">{step.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-16">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-10 py-5 gold-gradient text-white rounded-2xl font-bold text-lg hover:brightness-110 shadow-xl shadow-brand-gold/20 transition-all duration-300 group"
                >
                  Agendar Avaliação Agora
                  <ChevronRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-brand-gold/10 to-transparent rounded-full flex items-center justify-center p-12 text-center border border-brand-gold/5">
                <div className="max-w-xs">
                  <span className="text-brand-gold text-xs uppercase tracking-widest font-bold">Objetivo Final</span>
                  <p className="text-3xl md:text-4xl font-serif mt-6 mb-4 italic text-white">Entenda seu Perfil Cognitivo</p>
                  <p className="text-brand-light/40 text-sm">Transforme diagnóstico em uma ferramenta poderosa de evolução pessoal.</p>
                </div>
              </div>
              {/* Floating detail */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-8 p-10 border border-brand-gold/30 rounded-[32px] bg-white/5 backdrop-blur-xl shadow-2xl">
                <Clock className="w-10 h-10 text-brand-gold mb-6" />
                <p className="text-xl font-serif text-white mb-2 leading-tight">Sessão de Devolutiva</p>
                <p className="text-[11px] text-brand-gold uppercase tracking-[0.2em] font-bold italic">Ética e Acolhedora</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ebooks Section */}
      <section id="ebooks" className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-brand-gold font-bold tracking-[0.3em] text-xs uppercase mb-4">Materiais Terapêuticos</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-brand-dark">Ebooks <span className="text-accent underline decoration-brand-gold/20 italic">& Suporte</span></h3>
            <p className="mt-6 text-brand-muted max-w-2xl mx-auto text-lg italic">
              Desenvolvidos para oferecer ferramentas práticas e suporte imediato no seu cotidiano.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Ebook 1 */}
            <motion.div 
              {...fadeIn}
              className="group"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start bg-white p-8 rounded-[40px] shadow-xl border border-brand-border hover:shadow-2xl transition-all duration-500">
                <div className="w-full lg:w-1/2 aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group-hover:scale-[1.02] transition-transform duration-500">
                  <img 
                    src="https://i.postimg.cc/4Nw9trmJ/IMG-9039-JPG.jpg" 
                    alt="Capa Ebook Autocuidado" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-serif text-brand-dark">Caderno de Exercícios: Equilíbrio Emocional</h4>
                  <p className="text-brand-muted text-sm leading-relaxed line-clamp-6 lg:line-clamp-none italic">
                    Este caderno oferece um suporte emocional prático para quem busca equilíbrio, sendo ideal para quem ainda não iniciou um processo formal. Com 46 estratégias fundamentais, foca na regulação emocional através de mindfulness, reestruturação cognitiva e escrita terapêutica.
                  </p>
                  <div className="pt-4">
                    <a 
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center w-full py-4 gold-gradient text-white rounded-2xl font-bold hover:brightness-110 shadow-lg shadow-brand-gold/20 transition-all duration-300"
                    >
                      Quero adquirir este Ebook
                      <Phone className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Ebook 2 */}
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start bg-white p-8 rounded-[40px] shadow-xl border border-brand-border hover:shadow-2xl transition-all duration-500">
                <div className="w-full lg:w-1/2 aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group-hover:scale-[1.02] transition-transform duration-500">
                  <img 
                    src="https://i.postimg.cc/d3NJQmtj/IMG-9029.png" 
                    alt="Capa Ebook Neurociência" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full lg:w-1/2 space-y-4">
                  <h4 className="text-2xl font-serif text-brand-dark">Guia Estratégico: Clareza e Ação</h4>
                  <p className="text-brand-muted text-sm leading-relaxed line-clamp-6 lg:line-clamp-none italic">
                    Focado em neurociência comportamental para superar a procrastinação e desorganização. Com 46 exercícios práticos, oferece suporte imediato para transformar intenções em ações reais, organizando a mente e otimizando a produtividade diária.
                  </p>
                  <div className="pt-4">
                    <a 
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center w-full py-4 gold-gradient text-white rounded-2xl font-bold hover:brightness-110 shadow-lg shadow-brand-gold/20 transition-all duration-300"
                    >
                      Quero adquirir este Ebook
                      <Phone className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feedbacks Section */}
      <section id="feedbacks" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="text-brand-gold font-bold tracking-[0.3em] text-xs uppercase mb-4">Depoimentos</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6">O que meus <span className="text-accent underline decoration-brand-gold/20 italic">Pacientes</span> dizem</h3>
            <div className="flex justify-center gap-1 text-brand-gold mb-8">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "https://i.postimg.cc/FH9YHGZp/Captura-de-tela-2026-04-25-153400.png",
              "https://i.postimg.cc/dVqhVnBb/Captura-de-tela-2026-04-25-153425.png",
              "https://i.postimg.cc/CxFRxJN9/Captura-de-tela-2026-04-25-153450.png",
              "https://i.postimg.cc/rw8Dwgj6/Captura-de-tela-2026-04-25-153509.png",
              "https://i.postimg.cc/Gmc4mzK1/Captura-de-tela-2026-04-25-153528.png"
            ].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-bg p-4 rounded-3xl border border-brand-gold/10 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="overflow-hidden rounded-2xl bg-white shadow-inner">
                  <img 
                    src={img} 
                    alt={`Feedback do cliente ${i + 1}`} 
                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="gold-gradient p-0.5 rounded-[48px] shadow-2xl shadow-brand-gold/20">
            <div className="bg-brand-dark p-12 md:p-20 rounded-[47px] text-center">
              <h3 className="text-3xl md:text-5xl font-serif text-white mb-6">Comece sua <span className="text-gold">Jornada</span> com a Drª Adna</h3>
              <p className="text-brand-light/70 text-lg mb-10 max-w-xl mx-auto italic font-light">
                "Minha missão é guiar você no processo de se tornar dono(a) de si, desenvolvendo uma vida com mais clareza, autenticidade e propósito."
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-10 py-5 gold-gradient text-white rounded-2xl font-bold text-lg hover:brightness-110 shadow-lg transition-all duration-300"
                >
                  Falar no WhatsApp
                  <Phone className="ml-3 w-5 h-5" />
                </a>
                <a 
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-10 py-5 border-2 border-brand-gold/30 text-brand-gold rounded-2xl font-bold text-lg hover:bg-brand-gold/10 transition-all duration-300"
                >
                  Seguir no Instagram
                  <Instagram className="ml-3 w-5 h-5" />
                </a>
              </div>
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
