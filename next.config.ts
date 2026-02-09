import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  eslint: {
    // Permite que o build continue mesmo com alguns warnings do ESLint
    // Ainda falha em erros críticos
    ignoreDuringBuilds: false,
  },
  typescript: {
    // Mantém verificação de tipos rigorosa
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
