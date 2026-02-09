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
} from "@phosphor-icons/react/dist/ssr";
import logo from "../../../public/logo.png";

export default function CursoMemorizacaoPage() {
  const [showVideo, setShowVideo] = useState(true);

  const benefits = [
    {
      icon: BrainIcon,
      title: "Memorização 10x Mais Rápida",
      description:
        "Técnicas comprovadas que aceleram seu aprendizado e fixação de conteúdo",
    },
    {
      icon: TargetIcon,
      title: "Resultados em 30 Dias",
      description:
        "Veja melhorias significativas já no primeiro mês de prática",
    },
    {
      icon: TrophyIcon,
      title: "Aprovação Garantida",
      description:
        "Método usado por milhares de aprovados em concursos e vestibulares",
    },
    {
      icon: ClockIcon,
      title: "Economize Tempo",
      description: "Estude menos e memorize mais com técnicas eficientes",
    },
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Aprovada em Medicina",
      text: "Consegui memorizar todo o conteúdo do ENEM em 3 meses. O método é incrível!",
      rating: 5,
    },
    {
      name: "João Santos",
      role: "Aprovado em Concurso Público",
      text: "Passei em 2º lugar no concurso dos meus sonhos. As técnicas de memorização mudaram minha vida!",
      rating: 5,
    },
    {
      name: "Ana Costa",
      role: "Estudante de Direito",
      text: "Minha média subiu 40% depois que comecei a usar essas técnicas. Recomendo demais!",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "Quanto tempo levo para ver resultados?",
      answer:
        "A maioria dos alunos começa a ver resultados já nas primeiras 2 semanas de prática. Em 30 dias, você terá uma melhoria significativa na sua capacidade de memorização.",
    },
    {
      question: "Preciso ter experiência prévia?",
      answer:
        "Não! O curso é desenvolvido para iniciantes e avançados. Você aprenderá tudo do zero, passo a passo.",
    },
    {
      question: "O curso funciona para qualquer tipo de conteúdo?",
      answer:
        "Sim! As técnicas podem ser aplicadas para estudos acadêmicos, concursos, idiomas, apresentações e qualquer tipo de informação que você precise memorizar.",
    },
    {
      question: "Tenho acesso vitalício?",
      answer:
        "Sim! Uma vez adquirido, você tem acesso vitalício a todo o conteúdo do curso, incluindo atualizações futuras.",
    },
    {
      question: "E se eu não ficar satisfeito?",
      answer:
        "Oferecemos garantia incondicional de 7 dias. Se não ficar satisfeito, devolvemos 100% do seu investimento, sem perguntas.",
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
              ⚡ OFERTA POR TEMPO LIMITADO
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Domine a{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                Arte da Memorização
              </span>
              <br />e Transforme Seus Estudos
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              O método completo que milhares de aprovados usam para memorizar
              qualquer conteúdo em tempo recorde
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircleIcon size={20} weight="fill" />
                <span className="text-sm font-semibold">+10.000 Alunos</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircleIcon size={20} weight="fill" />
                <span className="text-sm font-semibold">98% de Aprovação</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircleIcon size={20} weight="fill" />
                <span className="text-sm font-semibold">Garantia 7 Dias</span>
              </div>
            </div>

            <Button
              onClick={() => {
                const element = document.getElementById("oferta");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-lg font-bold px-10 py-6 rounded-full shadow-2xl hover:shadow-3xl transform transition-all duration-300 hover:scale-105"
            >
              QUERO GARANTIR MINHA VAGA AGORA
              <ArrowRightIcon size={24} className="ml-2" weight="bold" />
            </Button>

            <p className="text-sm mt-4 text-white/80">
              ⚠️ Últimas vagas disponíveis - Oferta termina em breve
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Você Já Passou Por Isso?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                "Estudar horas e horas, mas esquecer tudo na prova",
                "Ler e reler o mesmo conteúdo sem conseguir fixar",
                "Sentir que sua memória está falhando",
                "Ver outros passarem enquanto você fica para trás",
                "Perder oportunidades por não conseguir memorizar",
                "Frustração ao esquecer o que estudou ontem",
              ].map((problem, index) => (
                <div
                  key={index}
                  className="bg-red-50 border-2 border-red-200 rounded-xl p-6 flex items-start gap-4"
                >
                  <div className="bg-red-500 rounded-full p-2 flex-shrink-0">
                    <span className="text-white font-bold">✗</span>
                  </div>
                  <p className="text-gray-800 font-semibold text-lg">
                    {problem}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Se Você Se Identificou, Este Curso Foi Feito Para Você!
              </h3>
              <p className="text-lg">
                Pare de sofrer com a falta de memória. Aprenda técnicas
                comprovadas que transformarão seus estudos.
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
                Assista ao Vídeo e Descubra Como Funciona
              </h2>
              <p className="text-lg text-gray-600">
                Veja como milhares de alunos transformaram seus estudos
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
                <PlayCircleIcon
                  size={20}
                  className="inline mr-2"
                  weight="fill"
                />
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
                      <PlayCircleIcon
                        size={80}
                        weight="fill"
                        className="mx-auto mb-4 opacity-80"
                      />
                      <p className="text-xl font-semibold">
                        Vídeo de Apresentação do Curso
                      </p>
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
                      O Que Você Vai Aprender Neste Curso
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Este é o curso mais completo sobre memorização do Brasil.
                      Você vai dominar técnicas avançadas usadas por campeões de
                      memória, aprovados em concursos e estudantes de alto
                      desempenho.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-blue-100 rounded-lg p-2">
                          <BrainIcon
                            size={24}
                            className="text-blue-600"
                            weight="fill"
                          />
                        </div>
                        <h4 className="font-bold text-lg text-gray-900">
                          Técnicas de Repetição Espaçada
                        </h4>
                      </div>
                      <p className="text-gray-600">
                        Aprenda quando e como revisar para maximizar a retenção
                        de informações na memória de longo prazo.
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-purple-100 rounded-lg p-2">
                          <LightningIcon
                            size={24}
                            className="text-purple-600"
                            weight="fill"
                          />
                        </div>
                        <h4 className="font-bold text-lg text-gray-900">
                          Palácio da Memória
                        </h4>
                      </div>
                      <p className="text-gray-600">
                        Domine a técnica milenar usada por gênios para memorizar
                        grandes quantidades de informação rapidamente.
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-green-100 rounded-lg p-2">
                          <TargetIcon
                            size={24}
                            className="text-green-600"
                            weight="fill"
                          />
                        </div>
                        <h4 className="font-bold text-lg text-gray-900">
                          Associação e Mnemônicas
                        </h4>
                      </div>
                      <p className="text-gray-600">
                        Crie conexões poderosas na sua mente que tornam a
                        memorização natural e duradoura.
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-orange-100 rounded-lg p-2">
                          <TrophyIcon
                            size={24}
                            className="text-orange-600"
                            weight="fill"
                          />
                        </div>
                        <h4 className="font-bold text-lg text-gray-900">
                          Aplicação Prática
                        </h4>
                      </div>
                      <p className="text-gray-600">
                        Exercícios práticos e estudos de caso reais para você
                        aplicar imediatamente em seus estudos.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                    <h4 className="font-bold text-xl mb-3 text-blue-900">
                      + Bônus Exclusivos Inclusos:
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon
                          size={20}
                          className="text-blue-600"
                          weight="fill"
                        />
                        <span>Guia de Planejamento de Estudos</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon
                          size={20}
                          className="text-blue-600"
                          weight="fill"
                        />
                        <span>Templates Prontos para Uso</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon
                          size={20}
                          className="text-blue-600"
                          weight="fill"
                        />
                        <span>Comunidade Exclusiva de Alunos</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon
                          size={20}
                          className="text-blue-600"
                          weight="fill"
                        />
                        <span>Suporte Direto com Instrutor</span>
                      </li>
                    </ul>
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
              O Que Você Vai Conquistar
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12">
              Transforme seus estudos e alcance resultados extraordinários
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
                    <p className="text-gray-600 text-lg">
                      {benefit.description}
                    </p>
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
              O Que Nossos Alunos Estão Dizendo
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12">
              Mais de 10.000 alunos já transformaram seus estudos
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
                  <p className="text-gray-700 mb-6 italic">
                    {testimonial.text}
                  </p>
                  <div>
                    <p className="font-bold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section
        id="oferta"
        className="py-16 md:py-24 bg-gradient-to-br from-[#219ae7] via-[#1a8cd8] to-[#0f7bc4] text-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm mb-6 inline-block">
              ⚡ OFERTA ESPECIAL POR TEMPO LIMITADO
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Garanta Sua Vaga Agora com Desconto Exclusivo
            </h2>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8 border-2 border-white/20">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-3xl line-through opacity-60">
                  R$ 997,00
                </span>
                <span className="text-5xl md:text-6xl font-bold text-yellow-300">
                  R$ 497,00
                </span>
              </div>
              <p className="text-xl mb-6">
                Ou em 12x de <span className="font-bold">R$ 49,70</span> sem
                juros
              </p>

              <div className="bg-white/20 rounded-xl p-6 mb-6 text-left">
                <h3 className="font-bold text-xl mb-4">O Que Você Recebe:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircleIcon size={24} weight="fill" />
                    <span>Curso Completo de Memorização (40+ horas)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircleIcon size={24} weight="fill" />
                    <span>Acesso Vitalício a Todo Conteúdo</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircleIcon size={24} weight="fill" />
                    <span>Bônus Exclusivos (R$ 297 de valor)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircleIcon size={24} weight="fill" />
                    <span>Comunidade VIP de Alunos</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircleIcon size={24} weight="fill" />
                    <span>Suporte Direto com Instrutor</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircleIcon size={24} weight="fill" />
                    <span>Garantia Incondicional de 7 Dias</span>
                  </li>
                </ul>
              </div>

              <Button
                onClick={() => {
                  // Aqui você pode adicionar o link de checkout/pagamento
                  window.location.href = "https://app.memobelc.com";
                }}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xl font-bold px-10 py-6 rounded-full shadow-2xl hover:shadow-3xl transform transition-all duration-300 hover:scale-105 mb-4"
              >
                SIM, QUERO GARANTIR MINHA VAGA AGORA
                <ArrowRightIcon size={24} className="ml-2" weight="bold" />
              </Button>

              <div className="flex items-center justify-center gap-2 text-sm">
                <ShieldCheckIcon size={20} weight="fill" />
                <span>Pagamento 100% Seguro</span>
              </div>
            </div>

            <div className="bg-red-500/20 border-2 border-red-400 rounded-xl p-6">
              <p className="text-xl font-bold mb-2">⏰ ÚLTIMA CHANCE!</p>
              <p>
                Esta oferta especial termina em breve. Não perca esta
                oportunidade única de transformar seus estudos.
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
                <ShieldCheckIcon
                  size={40}
                  className="text-white"
                  weight="fill"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Garantia Incondicional de 7 Dias
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Teste o curso por 7 dias completos. Se por qualquer motivo você
                não ficar satisfeito, devolvemos 100% do seu investimento, sem
                perguntas, sem burocracia.
              </p>
              <p className="text-xl font-bold text-gray-900">
                Você não tem nada a perder e tudo a ganhar!
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
              Não Deixe Esta Oportunidade Passar
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Milhares de alunos já transformaram seus estudos. Agora é sua vez!
            </p>
            <Button
              onClick={() => {
                const element = document.getElementById("oferta");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xl font-bold px-10 py-6 rounded-full shadow-2xl hover:shadow-3xl transform transition-all duration-300 hover:scale-105"
            >
              GARANTIR MINHA VAGA AGORA
              <ArrowRightIcon size={24} className="ml-2" weight="bold" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
