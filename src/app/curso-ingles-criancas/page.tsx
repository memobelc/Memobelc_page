"use client";
import { useState } from "react";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  CheckCircleIcon,
  StarIcon,
  ClockIcon,
  TrophyIcon,
  BrainIcon,
  TargetIcon,
  LightningIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  PlayCircleIcon,
  UsersIcon,
  GlobeIcon,
  ChatCircleDotsIcon,
  GraduationCapIcon,
  HeartIcon,
} from "@phosphor-icons/react/dist/ssr";
import logo from "../../../public/logo.png";

export default function CursoInglesCriancasPage() {
  const [showVideo, setShowVideo] = useState(true);

  const benefits = [
    {
      icon: ChatCircleDotsIcon,
      title: "Conversação desde o Primeiro Dia",
      description: "Seu filho vai falar inglês naturalmente, sem decoreba ou gramática chata",
    },
    {
      icon: UsersIcon,
      title: "Aulas ao Vivo Semanais",
      description: "Turmas pequenas com professores nativos, toda semana, no conforto de casa",
    },
    {
      icon: LightningIcon,
      title: "Resultados em 3 Meses",
      description: "Veja seu filho conversando em inglês com confiança em pouco tempo",
    },
    {
      icon: HeartIcon,
      title: "Aprendizado Divertido",
      description: "Metodologia lúdica que faz as crianças amarem aprender inglês",
    },
  ];

  const methodology = [
    {
      icon: PlayCircleIcon,
      title: "Aulas Interativas",
      description: "Jogos, músicas e atividades que prendem a atenção das crianças",
    },
    {
      icon: GlobeIcon,
      title: "Professores Nativos",
      description: "Instrutores qualificados com experiência em ensino infantil",
    },
    {
      icon: BrainIcon,
      title: "Metodologia Natural",
      description: "Aprende como aprendeu português: ouvindo, repetindo e praticando",
    },
    {
      icon: TrophyIcon,
      title: "Acompanhamento Personalizado",
      description: "Relatórios de progresso e feedback constante para os pais",
    },
  ];

  const testimonials = [
    {
      name: "Ana Paula, mãe do Lucas (8 anos)",
      text: "Em apenas 2 meses, meu filho já está falando frases completas em inglês! As aulas são tão divertidas que ele nem percebe que está estudando.",
      rating: 5,
    },
    {
      name: "Carlos Eduardo, pai da Sofia (6 anos)",
      text: "A melhor decisão que tomamos! A Sofia adora as aulas e já consegue se comunicar com crianças de outros países. Incrível!",
      rating: 5,
    },
    {
      name: "Mariana, mãe do Pedro (10 anos)",
      text: "O Pedro tinha muita dificuldade com inglês na escola. Agora, depois de 3 meses no curso, ele é um dos melhores da turma!",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "Qual a idade ideal para começar?",
      answer: "Nosso curso é indicado para crianças de 5 a 12 anos. A metodologia é adaptada para cada faixa etária, garantindo o melhor aprendizado.",
    },
    {
      question: "Como funcionam as aulas ao vivo?",
      answer: "As aulas acontecem uma vez por semana, em horários flexíveis. São turmas pequenas (máximo 6 alunos) para garantir atenção individualizada. Tudo acontece online, no conforto da sua casa.",
    },
    {
      question: "Meu filho não sabe nada de inglês, pode participar?",
      answer: "Claro! O curso é perfeito para iniciantes. Começamos do zero e a metodologia natural faz com que as crianças aprendam de forma intuitiva, sem pressão.",
    },
    {
      question: "E se meu filho faltar uma aula?",
      answer: "Todas as aulas são gravadas e ficam disponíveis na plataforma. Seu filho pode assistir quando quiser e ainda terá suporte para tirar dúvidas.",
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "A maioria das crianças começa a falar frases simples já nas primeiras semanas. Em 3 meses, você verá uma evolução significativa na conversação do seu filho.",
    },
    {
      question: "Preciso comprar material?",
      answer: "Não! Todo o material didático é digital e está incluído no curso. Você recebe acesso a jogos, atividades, vídeos e muito mais.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#219ae7] via-[#1a8cd8] to-[#0f7bc4] text-white py-16 md:py-24 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Image
                src={logo}
                alt="Logo Memobelc"
                width={180}
                height={100}
                className="mx-auto object-contain"
                priority
              />
            </div>

            <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm mb-6 animate-pulse">
              🎓 MATRÍCULAS ABERTAS - VAGAS LIMITADAS
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Seu Filho Falando{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                Inglês Fluente
              </span>
              <br />
              em Aulas ao Vivo
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Curso de conversação para crianças com aulas remotas semanais.
              Aprendizado rápido, divertido e natural. Prepare seu filho para o
              futuro!
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircleIcon size={20} weight="fill" />
                <span className="text-sm font-semibold">Aulas ao Vivo Semanais</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircleIcon size={20} weight="fill" />
                <span className="text-sm font-semibold">Professores Nativos</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircleIcon size={20} weight="fill" />
                <span className="text-sm font-semibold">Resultados em 3 Meses</span>
              </div>
            </div>

            <Button
              onClick={() => {
                const element = document.getElementById("matricula");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-lg font-bold px-10 py-6 rounded-full shadow-2xl hover:shadow-3xl transform transition-all duration-300 hover:scale-105"
            >
              QUERO MATRICULAR MEU FILHO AGORA
              <ArrowRightIcon size={24} className="ml-2" weight="bold" />
            </Button>

            <p className="text-sm mt-4 text-white/80">
              ⚠️ Últimas vagas disponíveis - Turmas com limite de alunos
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Você Já Se Preocupou Com Isso?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                "Meu filho vai ficar para trás sem saber inglês?",
                "As aulas tradicionais são chatas e ele não aprende?",
                "Como preparar meu filho para um mundo globalizado?",
                "Ele vai perder oportunidades no futuro?",
                "Será que está na hora certa de começar?",
                "E se ele não gostar e desistir?",
              ].map((problem, index) => (
                <div
                  key={index}
                  className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 flex items-start gap-4"
                >
                  <div className="bg-orange-500 rounded-full p-2 flex-shrink-0">
                    <span className="text-white font-bold">?</span>
                  </div>
                  <p className="text-gray-800 font-semibold text-lg">{problem}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                A Solução Está Aqui!
              </h3>
              <p className="text-lg">
                Dê ao seu filho a oportunidade de aprender inglês de forma natural,
                divertida e eficaz. O futuro dele começa agora!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video/Content Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Veja Como Funciona o Curso
              </h2>
              <p className="text-lg text-gray-600">
                Conheça nossa metodologia e veja crianças aprendendo inglês de forma natural
              </p>
            </div>

            {/* Toggle between video and text version */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setShowVideo(true)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  showVideo
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <PlayCircleIcon size={20} className="inline mr-2" weight="fill" />
                Versão com Vídeo
              </button>
              <button
                onClick={() => setShowVideo(false)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  !showVideo
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Versão Texto
              </button>
            </div>

            {showVideo ? (
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-video relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600">
                    <div className="text-center text-white">
                      <PlayCircleIcon size={80} weight="fill" className="mx-auto mb-4 opacity-80" />
                      <p className="text-xl font-semibold">Vídeo de Apresentação do Curso</p>
                      <p className="text-sm mt-2 opacity-80">
                        (Substitua por seu vídeo do YouTube/Vimeo)
                      </p>
                    </div>
                    {/* Placeholder - substitua pelo iframe do seu vídeo */}
                    {/* <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/SEU_VIDEO_ID"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe> */}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200">
                <div className="max-w-4xl mx-auto space-y-8">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                      Como Seu Filho Vai Aprender Inglês
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Nosso curso foi desenvolvido especialmente para crianças, com uma
                      metodologia que transforma o aprendizado de inglês em uma experiência
                      divertida e natural. Seu filho vai aprender da mesma forma que aprendeu
                      português: ouvindo, repetindo e praticando em situações reais.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {methodology.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={index}
                          className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-3">
                              <Icon size={24} className="text-white" weight="fill" />
                            </div>
                            <h4 className="font-bold text-lg text-gray-900">
                              {item.title}
                            </h4>
                          </div>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                    <h4 className="font-bold text-xl mb-4 text-blue-900">
                      O Que Torna Nosso Curso Especial:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-gray-700">
                          <CheckCircleIcon size={20} className="text-blue-600" weight="fill" />
                          <span>Aulas ao vivo toda semana com professores nativos</span>
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                          <CheckCircleIcon size={20} className="text-blue-600" weight="fill" />
                          <span>Turmas pequenas (máximo 6 alunos)</span>
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                          <CheckCircleIcon size={20} className="text-blue-600" weight="fill" />
                          <span>Foco total em conversação desde o primeiro dia</span>
                        </li>
                      </ul>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-gray-700">
                          <CheckCircleIcon size={20} className="text-blue-600" weight="fill" />
                          <span>Metodologia lúdica e divertida</span>
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                          <CheckCircleIcon size={20} className="text-blue-600" weight="fill" />
                          <span>Material didático digital incluso</span>
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                          <CheckCircleIcon size={20} className="text-blue-600" weight="fill" />
                          <span>Acompanhamento de progresso para os pais</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200">
                    <h4 className="font-bold text-xl mb-3 text-gray-900">
                      🎯 Resultados que Você Vai Ver:
                    </h4>
                    <div className="space-y-2 text-gray-700">
                      <p className="flex items-start gap-2">
                        <span className="text-yellow-600 font-bold">✓</span>
                        <span>
                          <strong>1ª Semana:</strong> Seu filho já vai entender e responder comandos simples em inglês
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-yellow-600 font-bold">✓</span>
                        <span>
                          <strong>1º Mês:</strong> Começará a formar frases e se comunicar em situações básicas
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-yellow-600 font-bold">✓</span>
                        <span>
                          <strong>3º Mês:</strong> Estará conversando com confiança sobre temas do dia a dia
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-yellow-600 font-bold">✓</span>
                        <span>
                          <strong>6º Mês:</strong> Fluência em conversação para a idade, preparado para o futuro
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
              Por Que Escolher Este Curso Para Seu Filho?
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12">
              Diferenciais que fazem toda a diferença no aprendizado
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                      <Icon size={32} className="text-white" weight="fill" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-lg">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
              O Que Os Pais Estão Dizendo
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12">
              Centenas de famílias já transformaram o futuro dos filhos
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon
                        key={i}
                        size={20}
                        className="text-yellow-400"
                        weight="fill"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Section */}
      <section id="matricula" className="py-16 md:py-24 bg-gradient-to-br from-[#219ae7] via-[#1a8cd8] to-[#0f7bc4] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm mb-6 inline-block animate-pulse">
              🎓 MATRÍCULAS ABERTAS - VAGAS LIMITADAS
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Garante a Vaga do Seu Filho Agora
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Turmas pequenas garantem atenção individualizada. Não perca esta oportunidade!
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8 border-2 border-white/20">
              <div className="text-center mb-8">
                <p className="text-2xl mb-4">Investimento Mensal</p>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-3xl line-through opacity-60">R$ 497,00</span>
                  <span className="text-5xl md:text-6xl font-bold text-yellow-300">
                    R$ 297,00
                  </span>
                </div>
                <p className="text-xl mb-6">
                  Ou em 3x de <span className="font-bold">R$ 99,00</span> sem juros
                </p>
                <p className="text-sm text-white/80">
                  *Taxa de matrícula única de R$ 97,00 (primeira mensalidade)
                </p>
              </div>

              <div className="bg-white/20 rounded-xl p-6 mb-6 text-left">
                <h3 className="font-bold text-xl mb-4">O Que Está Incluído:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircleIcon size={24} weight="fill" />
                    <span>4 aulas ao vivo por mês (1 por semana)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircleIcon size={24} weight="fill" />
                    <span>Turmas pequenas (máximo 6 alunos)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircleIcon size={24} weight="fill" />
                    <span>Professores nativos qualificados</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircleIcon size={24} weight="fill" />
                    <span>Material didático digital completo</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircleIcon size={24} weight="fill" />
                    <span>Acesso a gravações das aulas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircleIcon size={24} weight="fill" />
                    <span>Relatórios de progresso mensais</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircleIcon size={24} weight="fill" />
                    <span>Suporte via WhatsApp para pais</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircleIcon size={24} weight="fill" />
                    <span>Comunidade exclusiva de alunos</span>
                  </li>
                </ul>
              </div>

              <Button
                onClick={() => {
                  // Aqui você pode adicionar o link de checkout/matrícula
                  window.location.href = "https://app.memobelc.com";
                }}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xl font-bold px-10 py-6 rounded-full shadow-2xl hover:shadow-3xl transform transition-all duration-300 hover:scale-105 mb-4"
              >
                SIM, QUERO MATRICULAR MEU FILHO AGORA
                <ArrowRightIcon size={24} className="ml-2" weight="bold" />
              </Button>

              <div className="flex items-center justify-center gap-2 text-sm">
                <ShieldCheckIcon size={20} weight="fill" />
                <span>Matrícula 100% Segura</span>
              </div>
            </div>

            <div className="bg-red-500/20 border-2 border-red-400 rounded-xl p-6">
              <p className="text-xl font-bold mb-2">⏰ ÚLTIMAS VAGAS!</p>
              <p>
                As turmas têm limite de 6 alunos para garantir qualidade. Não perca
                esta oportunidade de dar ao seu filho o melhor futuro possível.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 border-2 border-green-200 text-center">
              <div className="bg-green-500 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon size={40} className="text-white" weight="fill" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Garantia de Satisfação
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Se nas primeiras 2 semanas você não estiver satisfeito com o curso,
                devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.
              </p>
              <p className="text-xl font-bold text-gray-900">
                Estamos confiantes de que seu filho vai amar aprender inglês conosco!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Perguntas Frequentes
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                >
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#219ae7] via-[#1a8cd8] to-[#0f7bc4] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Dê ao Seu Filho o Futuro que Ele Merece
            </h2>
            <p className="text-xl mb-8 text-white/90">
              O inglês é a língua do futuro. Prepare seu filho hoje para as
              oportunidades de amanhã!
            </p>
            <Button
              onClick={() => {
                const element = document.getElementById("matricula");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xl font-bold px-10 py-6 rounded-full shadow-2xl hover:shadow-3xl transform transition-all duration-300 hover:scale-105"
            >
              MATRICULAR MEU FILHO AGORA
              <ArrowRightIcon size={24} className="ml-2" weight="bold" />
            </Button>
            <p className="text-sm mt-4 text-white/80">
              🎓 Matrículas abertas - Vagas limitadas por turma
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

