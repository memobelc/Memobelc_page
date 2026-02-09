"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Headphones,
  CreditCard as Cards,
  Check,
  Star,
  TrendingUp,
  Brain,
  Clock,
  Target,
  Award,
  Infinity,
} from "lucide-react";

export default function Pack100LivrosIngles() {
  const [isClient, setIsClient] = useState(false);
  const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL_1OO_BOOKS || "#";

  // Simulação de vagas (43% = 27 de 50) - Descomente se quiser usar
  // const totalSpots = 50;
  // const spotsTaken = 27;
  // const spotsRemaining = totalSpots - spotsTaken;
  // const percentageTaken = Math.round((spotsTaken / totalSpots) * 100);

  // Garante que está no cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Meta Pixel: Inicializa o Facebook Pixel
  useEffect(() => {
    if (!isClient) return;
    // Se o fbq já existe, não precisa carregar novamente
    if (window.fbq) {
      window.fbq("init", "2353250351769625");
      window.fbq("track", "PageView");
      return;
    }

    // Inicializa a função fbq antes de carregar o script
    type FbqFunction = {
      (...args: unknown[]): void;
      callMethod?: (...args: unknown[]) => void;
      queue: unknown[][];
      push: FbqFunction;
      loaded: boolean;
      version: string;
    };

    const fbqFunction = function (...args: unknown[]) {
      if (fbqFunction.callMethod) {
        fbqFunction.callMethod(...args);
      } else {
        fbqFunction.queue.push(args);
      }
    } as FbqFunction;

    fbqFunction.push = fbqFunction;
    fbqFunction.loaded = true;
    fbqFunction.version = "2.0";
    fbqFunction.queue = [];

    window.fbq = fbqFunction;

    // Carrega o script do Facebook Pixel
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";

    script.onload = () => {
      // Inicializa o pixel após o script carregar
      if (window.fbq) {
        window.fbq("init", "2353250351769625");
        window.fbq("track", "PageView");
      }
    };

    // Insere o script no DOM
    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }
  }, [isClient]);

  // GTM: Rastreia visualização da página
  useEffect(() => {
    if (!isClient) return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_name: "pack-100-livros-ingles",
      page_category: "sales_page",
      page_title: "Pack 100 Livros de Inglês",
      product_name: "Pack 100 Livros de Inglês",
      product_price: 19.9,
    });
  }, [isClient]);

  // GTM + Meta Pixel: Rastreia clique no checkout
  const handleCheckout = () => {
    // GTM - Google Tag Manager
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "begin_checkout",
      page_name: "pack-100-livros-ingles",
      ecommerce: {
        items: [
          {
            item_id: "pack-100-books",
            item_name: "Pack 100 Livros de Inglês",
            price: 19.9,
            quantity: 1,
            currency: "BRL",
          },
        ],
      },
    });

    // Meta Pixel - Facebook
    if (window.fbq) {
      window.fbq("track", "InitiateCheckout", {
        content_name: "Pack 100 Livros de Inglês",
        content_ids: ["pack-100-books"],
        content_type: "product",
        value: 19.9,
        currency: "BRL",
        num_items: 1,
      });
    }

    window.location.href = checkoutUrl;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#219ae7] via-[#1a8cd8] to-[#0f7bc4] text-white py-16 md:py-24">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <Image
                src="/logo.png"
                alt="MemoBeIc Logo"
                width={200}
                height={200}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>

            {/* Badge */}
            {/* <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-3 rounded-full font-bold text-sm md:text-base shadow-lg">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-center">OFERTA ESPECIAL - ACESSO VITALÍCIO</span>
            </div> */}

            {/* Contador de Vagas */}
            {/* <div className="bg-red-600 text-white px-4 py-4 md:px-6 md:py-5 rounded-2xl shadow-2xl border-4 border-red-400 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Users className="w-5 h-5 md:w-6 md:h-6" />
                <p className="text-base md:text-lg font-bold">VAGAS LIMITADAS!</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs md:text-sm font-semibold">
                  <span>{spotsTaken} vagas preenchidas</span>
                  <span>{spotsRemaining} vagas restantes</span>
                </div>
                <div className="w-full bg-red-900 rounded-full h-3 md:h-4 overflow-hidden">
                  <div 
                    className="bg-yellow-400 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${percentageTaken}%` }}
                  ></div>
                </div>
                <p className="text-center text-xs md:text-sm font-bold text-yellow-300">
                  🔥 {percentageTaken}% das vagas já foram preenchidas!
                </p>
              </div>
            </div> */}

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight drop-shadow-lg px-2">
              Domine o Inglês com{" "}
              <span className="text-yellow-300">100 Livros Completos</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed px-4">
              PDFs + Áudios + Flash Cards organizados em uma plataforma
              exclusiva.{" "}
              {/*<strong className="text-yellow-300">Acesso Vitalício</strong>*/}{" "}
              com o método de <strong>Repetição Espaçada</strong>.
            </p>

            {/* Hero Image */}
            <div className="relative max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto my-8 sm:my-12 px-4">
              <Image
                src="/english_learning.png"
                alt="Aprendizado de Inglês"
                width={600}
                height={600}
                className="object-contain drop-shadow-2xl mx-auto w-full h-auto"
                priority
              />
            </div>

            {/* CTA Button */}
            <div className="pt-6 px-4">
              <Button
                onClick={handleCheckout}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs sm:text-base md:text-xl lg:text-2xl font-bold hover:from-yellow-300 hover:to-orange-400 rounded-full px-3 sm:px-8 md:px-12 py-3 sm:py-6 md:py-8 shadow-2xl hover:shadow-3xl transform transition-all duration-300 hover:scale-105 border-2 sm:border-4 border-yellow-300 w-full text-center leading-tight"
              >
                🚀 QUERO COMEÇAR AGORA
              </Button>
              <p className="text-xs sm:text-sm text-white/80 mt-4 px-2">
                ✅ Acesso imediato após a compra | 🔒 Pagamento 100% seguro
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-2">
              Você já tentou aprender inglês mas...
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
              {[
                "📚 Os materiais ficam desorganizados e espalhados?",
                "🔄 Você estuda mas esquece tudo rapidamente?",
                "😰 Não consegue manter uma rotina de estudos?",
              ].map((problem, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border-2 border-red-200"
                >
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                    {problem}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 sm:p-6 rounded-r-xl mt-8">
              <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                ⚠️ Estudar sem um sistema organizado é perder tempo e dinheiro!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-2">
                A Solução Completa Para o Seu Inglês
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 px-4">
                Tudo que você precisa, organizado e otimizado para o seu
                aprendizado
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* 100 Livros */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border-2 border-green-200 transform transition-all duration-300 hover:scale-105">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                  100 Livros em PDF
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4 text-center">
                  Livros curtos, médios e longos organizados em 3 níveis de
                  dificuldade
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                    <span>Nível 1 (Iniciante)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                    <span>Nível 2 (Intermediário)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                    <span>Nível 3 (Avançado)</span>
                  </li>
                </ul>
              </div>

              {/* Audiobooks */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border-2 border-blue-200 transform transition-all duration-300 hover:scale-105">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <Headphones className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                  Áudios Completos
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4 text-center">
                  Ouça todos os livros narrados por nativos
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                    <span>Melhore sua pronúncia</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                    <span>Treine sua escuta</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                    <span>Estude enquanto dirige</span>
                  </li>
                </ul>
              </div>

              {/* Flash Cards */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border-2 border-purple-200 transform transition-all duration-300 hover:scale-105">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <Cards className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                  Flash Cards
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4 text-center">
                  Cartões inteligentes para cada livro
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 flex-shrink-0" />
                    <span>Vocabulário essencial</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 flex-shrink-0" />
                    <span>Revisão otimizada</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 flex-shrink-0" />
                    <span>Memorização eficiente</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#219ae7] to-[#0f7bc4] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center space-y-8 sm:space-y-12">
            <div>
              {/*<div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-bold text-sm md:text-base mb-4">
                <Infinity className="w-5 h-5" />
                <span>ACESSO VITALÍCIO GARANTIDO</span>
              </div>*/}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-2">
                🎯 Tudo na Plataforma MemoBeIc
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 px-4">
                Nada de arquivos espalhados! Acesse tudo em um só lugar.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl border border-white/20">
                <Target className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-300 mb-3 sm:mb-4 mx-auto" />
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Organização Total
                </h3>
                <p className="text-sm sm:text-base text-white/90">
                  Todos os 100 livros, áudios e flash cards perfeitamente
                  organizados por nível de dificuldade. Encontre o que precisa
                  em segundos!
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl border border-white/20">
                <Brain className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-300 mb-3 sm:mb-4 mx-auto" />
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Sistema Inteligente
                </h3>
                <p className="text-sm sm:text-base text-white/90">
                  A plataforma rastreia seu progresso e sugere o próximo livro
                  ideal para o seu nível. Aprendizado personalizado!
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl border border-white/20">
                <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-300 mb-3 sm:mb-4 mx-auto" />
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Acesso 24/7 Vitalício
                </h3>
                <p className="text-sm sm:text-base text-white/90">
                  Estude quando e onde quiser, <strong>para sempre</strong>.
                  Web, mobile ou tablet. Seu progresso sincronizado em todos os
                  dispositivos.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl border border-white/20">
                <Award className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-300 mb-3 sm:mb-4 mx-auto" />
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Resultados Garantidos
                </h3>
                <p className="text-sm sm:text-base text-white/90">
                  Sistema testado e aprovado por milhares de estudantes. Veja
                  seu inglês evoluir a cada dia!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spaced Repetition Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-bold mb-4 sm:mb-6 text-sm sm:text-base">
                <Brain className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>MÉTODO CIENTÍFICO</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
                O Poder da Repetição Espaçada
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
                Não é mágica, é ciência! Aprenda 10x mais rápido com o método
                comprovado pela neurociência.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-purple-200">
              <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg sm:text-xl">
                        1
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                        Memorização Permanente
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600">
                        Revise o conteúdo nos momentos certos, antes de
                        esquecer. O sistema calcula automaticamente quando você
                        precisa revisar cada flash card.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg sm:text-xl">
                        2
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                        Menos Tempo, Mais Resultado
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600">
                        Estudos mostram que a repetição espaçada reduz o tempo
                        de estudo em até 50% enquanto aumenta a retenção em
                        200%.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg sm:text-xl">
                        3
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                        Combate o Esquecimento
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600">
                        A &quot;Curva do Esquecimento&quot; mostra que
                        esquecemos 70% do que aprendemos em 24h. A repetição
                        espaçada reverte isso completamente!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 sm:p-8 rounded-2xl">
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                    Compare os Resultados:
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-red-100 border-l-4 border-red-500 p-3 sm:p-4 rounded-r-lg">
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">
                        ❌ Estudo Tradicional
                      </p>
                      <p className="text-xs sm:text-sm text-gray-700">
                        Retenção: 20% após 1 mês
                      </p>
                    </div>
                    <div className="bg-green-100 border-l-4 border-green-500 p-3 sm:p-4 rounded-r-lg">
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">
                        ✅ Com Repetição Espaçada
                      </p>
                      <p className="text-xs sm:text-sm text-gray-700">
                        Retenção: 80-90% após 1 mês
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-yellow-100 rounded-lg">
                    <p className="text-xs sm:text-sm font-bold text-center text-gray-900">
                      🧠 Você pode memorizar{" "}
                      <span className="text-purple-600">
                        4x mais vocabulário
                      </span>{" "}
                      no mesmo tempo!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center space-y-8 sm:space-y-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-2">
              Junte-se a Milhares de Estudantes
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  name: "Ana Silva",
                  text: "Em 3 meses já terminei 25 livros! O sistema de flash cards é perfeito para fixar o vocabulário.",
                  rating: 5,
                },
                {
                  name: "Carlos Mendes",
                  text: "Nunca imaginei que poderia aprender tanto ouvindo os áudios no trânsito. Valeu cada centavo!",
                  rating: 5,
                },
                {
                  name: "Juliana Costa",
                  text: "A organização da plataforma MemoBeIc fez toda diferença. Tudo em um só lugar, perfeito!",
                  rating: 5,
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 sm:p-6 rounded-2xl shadow-lg"
                >
                  <div className="flex gap-1 mb-3 sm:mb-4 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 italic">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <p className="text-sm sm:text-base font-bold text-gray-900">
                    - {testimonial.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-2">
                Veja Tudo que Você Vai Receber
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 px-4">
                Um pacote completo para transformar seu inglês!
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 md:p-12 rounded-3xl shadow-2xl border-2 sm:border-4 border-yellow-400">
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    icon: BookOpen,
                    text: "100 Livros em PDF (Níveis 1, 2 e 3)",
                    value: "",
                  },
                  {
                    icon: Headphones,
                    text: "100 Audiobooks Profissionais",
                    value: "",
                  },
                  {
                    icon: Cards,
                    text: "Flash Cards Inteligentes de Todos os Livros",
                    value: "",
                  },
                  {
                    icon: Infinity,
                    text: "Acesso à Plataforma MemoBeIc",
                    value: "",
                  },
                  {
                    icon: Brain,
                    text: "Sistema de Repetição Espaçada",
                    value: "",
                  },
                  {
                    icon: TrendingUp,
                    text: "Acompanhamento de Progresso",
                    value: "",
                  },
                  // { icon: Award, text: "Suporte Prioritário", value: "R$ 197" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between border-b border-gray-200 pb-3 sm:pb-4 gap-3"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 break-words">
                        {item.text}
                      </span>
                    </div>
                    <span className="text-sm sm:text-base text-gray-600 font-bold whitespace-nowrap">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t-4 border-gray-300">
                {/* <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-2">
                  <span className="text-xl sm:text-2xl font-bold text-gray-900">
                    Valor Total:
                  </span>
                  <span className="text-xl sm:text-2xl text-gray-500 line-through">
                    R$ 2.579
                  </span>
                </div> */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                  <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Hoje Apenas:
                  </span>
                  <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-green-600">
                    R$ 19,90
                  </span>
                </div>
                <p className="text-center text-red-600 font-bold text-lg sm:text-xl mt-4">
                  🔥 Economia de 97%
                </p>
              </div>

              <div className="mt-6 sm:mt-8">
                <Button
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs sm:text-lg md:text-xl lg:text-2xl font-bold hover:from-green-400 hover:to-emerald-500 rounded-full px-3 sm:px-6 py-3 sm:py-8 shadow-2xl transform transition-all duration-300 hover:scale-105 border-2 sm:border-4 border-green-400"
                >
                  <span className="text-center leading-tight block">
                    💳 GARANTIR MINHA VAGA AGORA
                  </span>
                </Button>
                <p className="text-center text-xs sm:text-sm text-gray-600 mt-4">
                  🔒 Pagamento 100% seguro e criptografado
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">
              ⚠️ ATENÇÃO: Oferta por Tempo Limitado!
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl px-4">
              Essa promoção especial pode encerrar a qualquer momento. Não perca
              a chance de transformar seu inglês com 99% de desconto!
            </p>

            {/* Contador de Vagas em Destaque */}
            {/* <div className="bg-white text-gray-900 px-4 py-5 sm:px-6 sm:py-6 rounded-2xl shadow-2xl border-4 border-yellow-400 max-w-lg mx-auto">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Users className="w-6 h-6 text-red-600" />
                <p className="text-lg sm:text-xl font-bold text-red-600">RESTAM APENAS {spotsRemaining} VAGAS!</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm font-semibold">
                  <span>{spotsTaken}/{totalSpots} preenchidas</span>
                  <span className="text-red-600">{spotsRemaining} restantes</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-red-600 to-orange-500 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${percentageTaken}%` }}
                  ></div>
                </div>
                <p className="text-center text-xs sm:text-sm font-bold text-red-600">
                  🔥 {percentageTaken}% já garantiram o acesso!
                </p>
              </div>
            </div> */}

            <div className="bg-white/20 backdrop-blur-lg p-6 sm:p-8 rounded-2xl border-2 border-white/50">
              <p className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                🎁 BÔNUS EXCLUSIVOS para os próximos {spotsRemaining} alunos:
              </p>
              <ul className="space-y-3 text-base sm:text-lg">
                <li className="flex items-start gap-3 text-left">
                  <span className="flex-shrink-0">✅</span>
                  <span>
                    <strong>Bônus 1:</strong> Os 100 Phrasal Verbs Mais Usados
                    (R$ 97)
                  </span>
                </li>
                <li className="flex items-start gap-3 text-left">
                  <span className="flex-shrink-0">✅</span>
                  <span>
                    <strong>Bônus 2:</strong> Frases mais Comuns Utilizadas em
                    Primeiras Viagens para o Exterior (R$ 87)
                  </span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-yellow-400 text-black rounded-xl">
                <p className="font-bold text-base sm:text-lg">
                  💰 BÔNUS TOTAIS: R$ 184 - GRÁTIS!
                </p>
              </div>
            </div>
            <Button
              onClick={handleCheckout}
              className="bg-white text-red-600 text-xs sm:text-lg md:text-xl lg:text-2xl font-bold hover:bg-gray-100 rounded-full px-3 sm:px-12 py-3 sm:py-8 shadow-2xl transform transition-all duration-300 hover:scale-105 w-full"
            >
              <span className="text-center leading-tight block">
                🚀 SIM, EU QUERO APROVEITAR!
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-8 sm:mb-12 px-2">
              Perguntas Frequentes
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  q: "Como funciona o acesso à plataforma?",
                  a: "Após a compra, você recebe imediatamente as credenciais de acesso por e-mail. Entre na plataforma MemoBeIc e comece a estudar instantaneamente!",
                },
                {
                  q: "Posso acessar de qualquer dispositivo?",
                  a: "Sim! A plataforma funciona em computador, tablet e smartphone. Seu progresso é sincronizado automaticamente em todos os dispositivos.",
                },
                {
                  q: "Os livros são adequados para iniciantes?",
                  a: "Perfeitamente! Temos livros classificados em 3 níveis (iniciante, intermediário e avançado). Você começa do seu nível e evolui no seu ritmo.",
                },
                {
                  q: "Quanto tempo tenho de acesso?",
                  a: "O acesso é VITALÍCIO! Você paga uma única vez e tem acesso para sempre, sem mensalidades ou taxas ocultas.",
                },
                {
                  q: "Como funcionam os flash cards?",
                  a: "Cada livro tem flash cards criados automaticamente com as palavras e expressões mais importantes. O sistema usa repetição espaçada para otimizar sua memorização.",
                },
                {
                  q: "Tem garantia?",
                  a: "Sim! Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro, sem perguntas.",
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 p-4 sm:p-6 rounded-xl border-2 border-gray-200"
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#219ae7] via-[#1a8cd8] to-[#0f7bc4] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">
              Está Pronto Para Dominar o Inglês?
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl px-4">
              100 livros completos + áudios + flash cards + plataforma
              exclusiva. Tudo que você precisa para finalmente conquistar a
              fluência!
            </p>

            <div className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl border-2 border-white/30">
              <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div>
                  <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-300">
                    100
                  </p>
                  <p className="text-xs sm:text-sm md:text-base text-white/90">
                    Livros Completos
                  </p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-300">
                    3
                  </p>
                  <p className="text-xs sm:text-sm md:text-base text-white/90">
                    Níveis de Dificuldade
                  </p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-300">
                    ∞
                  </p>
                  <p className="text-xs sm:text-sm md:text-base text-white/90">
                    Acesso Vitalício
                  </p>
                </div>
              </div>

              <div className="bg-yellow-400 text-black px-4 py-3 rounded-xl mb-6 font-bold text-base sm:text-lg md:text-xl">
                🎉 APENAS R$ 19,90 - PAGAMENTO ÚNICO!
              </div>

              <Button
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs sm:text-lg md:text-xl lg:text-2xl font-bold hover:from-yellow-300 hover:to-orange-400 rounded-full px-3 sm:px-6 py-3 sm:py-8 shadow-2xl transform transition-all duration-300 hover:scale-105 border-2 sm:border-4 border-yellow-300"
              >
                <span className="text-center leading-tight block">
                  🎯 COMEÇAR MINHA JORNADA AGORA
                </span>
              </Button>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  Acesso Imediato
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  Garantia de 7 Dias
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  Suporte Incluso
                </span>
              </div>
            </div>

            <p className="text-white/80 text-xs sm:text-sm">
              © 2026 MemoBeIc - Todos os direitos reservados
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
