"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, Download, Mail, Clock } from "lucide-react";

export default function ConfirmacaoCompraPack100Livros() {
  const [isClient, setIsClient] = useState(false);

  // Garante que está no cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Meta Pixel: Evento Purchase
  useEffect(() => {
    if (!isClient) return;

    // Envia evento de conversão para Facebook Pixel
    if (window.fbq) {
      window.fbq("track", "Purchase", {
        value: 19.9,
        currency: "BRL",
        content_ids: ["pack-100-books"],
        content_name: "Pack 100 Livros de Inglês",
        content_type: "product",
        num_items: 1,
      });
    }

    // Envia evento para Google Tag Manager
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "purchase",
      page_name: "pack-100-livros-ingles-confirmacao",
      ecommerce: {
        transaction_id: new Date().getTime().toString(),
        value: 19.9,
        currency: "BRL",
        items: [
          {
            item_id: "pack-100-books",
            item_name: "Pack 100 Livros de Inglês",
            price: 19.9,
            quantity: 1,
          },
        ],
      },
    });
  }, [isClient]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-8 sm:py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header de Sucesso */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 text-center mb-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Check className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            🎉 Compra Confirmada!
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4">
            Parabéns! Seu acesso ao{" "}
            <strong>Pack 100 Livros de Inglês</strong> foi confirmado.
          </p>

          <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-r-xl">
            <p className="text-sm sm:text-base text-green-800 font-semibold">
              ✅ Pagamento processado com sucesso
            </p>
          </div>
        </div>

        {/* Instruções */}
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
            <Mail className="w-6 h-6 text-blue-500" />
            Próximos Passos
          </h2>

          <div className="space-y-4 sm:space-y-6">
            {/* Passo 1 */}
            <div className="flex gap-3 sm:gap-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  📧 Verifique seu e-mail
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Você receberá instruções detalhadas sobre como acessar os 100
                  livros, áudios e flash cards na plataforma MemoBeIc.
                </p>
              </div>
            </div>

            {/* Passo 2 */}
            <div className="flex gap-3 sm:gap-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  📱 Baixe o App Memobelc
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mb-3">
                  Enquanto aguarda, baixe o aplicativo oficial para ter acesso
                  completo à plataforma.
                </p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.anonymous.memobelc&hl=pt_BR"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold hover:from-green-400 hover:to-emerald-500 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Baixar App no Google Play
                  </Button>
                </a>
              </div>
            </div>

            {/* Passo 3 */}
            <div className="flex gap-3 sm:gap-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  👤 Crie sua conta
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Após baixar o app, crie sua conta usando o{" "}
                  <strong>mesmo e-mail da compra</strong> para facilitar a
                  liberação do acesso.
                </p>
              </div>
            </div>

            {/* Passo 4 */}
            <div className="flex gap-3 sm:gap-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">4</span>
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  ⏰ Aguarde a liberação
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Seu acesso será liberado em até <strong>24 horas</strong>.
                  Você receberá uma notificação por e-mail assim que estiver
                  tudo pronto!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Box de Aviso */}
        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-4 sm:p-6 mb-6">
          <div className="flex gap-3 items-start">
            <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                ⚠️ Importante
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Verifique sua caixa de{" "}
                <strong>spam/lixo eletrônico</strong> caso não encontre nosso
                e-mail na caixa de entrada.
              </p>
            </div>
          </div>
        </div>

        {/* Logo e Footer */}
        <div className="text-center">
          <Image
            src="/logo_memobelc.png"
            alt="MemoBeIc Logo"
            width={120}
            height={120}
            className="mx-auto mb-4 opacity-80"
          />
          <p className="text-xs sm:text-sm text-gray-600">
            Dúvidas? Entre em contato:{" "}
            <a
              href="mailto:contato@memobelc.com"
              className="text-blue-600 hover:underline"
            >
              contato@memobelc.com
            </a>
          </p>
          <p className="text-xs text-gray-500 mt-2">
            © 2026 MemoBeIc - Todos os direitos reservados
          </p>
        </div>
      </div>
    </div>
  );
}
