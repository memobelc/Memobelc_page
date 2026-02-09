# ============================================
# DOCKERFILE OTIMIZADO PARA NEXT.JS + DOKPLOY
# Evita estouro de CPU com multi-stage build
# ============================================

# Etapa 1: Base de dependências
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copia arquivos de dependências
COPY package.json package-lock.json* ./

# Instala dependências de produção com cache otimizado
RUN npm ci --only=production --ignore-scripts && \
    cp -R node_modules /tmp/prod_node_modules && \
    npm ci --ignore-scripts

# Etapa 2: Build da aplicação
FROM node:20-alpine AS builder
WORKDIR /app

# Copia dependências da etapa anterior
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Desabilita telemetria do Next.js
ENV NEXT_TELEMETRY_DISABLED=1

# Build otimizado
# Usa standalone output (já configurado no next.config.ts)
RUN npm run build

# Etapa 3: Runner (imagem final)
FROM node:20-alpine AS runner
WORKDIR /app

# Cria usuário não-root por segurança
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Desabilita telemetria
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Copia apenas os arquivos necessários do build standalone
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Troca para usuário não-root
USER nextjs

# Expõe a porta (Dokploy irá mapear automaticamente)
EXPOSE 3001

# Variável de ambiente para porta
ENV PORT=3001
ENV HOSTNAME="0.0.0.0"

# Comando de inicialização
CMD ["node", "server.js"]
