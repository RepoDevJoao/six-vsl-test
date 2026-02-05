# 🎯 Six VSL Test - Página de Vendas com Rastreamento UTM

> Projeto desenvolvido como teste técnico para vaga de Desenvolvedor Front-end React no Grupo Six

## 📋 Sobre o Projeto

Página VSL (Video Sales Letter) responsiva com sistema completo de rastreamento UTM, desenvolvida para demonstrar habilidades em React, performance web e compreensão de marketing de resposta direta.

**Deploy ao vivo:** [https://six-vsl-test.vercel.app](https://six-vsl-test.vercel.app)

---

## ✨ Funcionalidades Implementadas

### 🎯 Core (Requisitos Obrigatórios)

- ✅ **Sistema de UTM Tracking**
  - Captura automática de parâmetros UTM da URL
  - Persistência em `localStorage`
  - Repasse entre páginas: VSL → Checkout → Obrigado
  - Suporte aos 5 parâmetros: `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`

- ✅ **Responsividade Mobile-First**
  - Layout adaptativo para mobile, tablet e desktop
  - Otimizado para dispositivos móveis (90% do tráfego)
  - Grid responsivo com Tailwind CSS

- ✅ **Performance Otimizada**
  - Lazy loading de iframe (vídeo)
  - Componentes React otimizados
  - Build otimizado com Vite
  - Meta tags SEO completas

---

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework JavaScript
- **Vite** - Build tool e dev server
- **React Router DOM** - Navegação entre páginas
- **Tailwind CSS** - Estilização utility-first
- **Vercel** - Deploy e hospedagem

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/RepoDevJoao/six-vsl-test.git

# Entre na pasta
cd six-vsl-test

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

Acesse: `http://localhost:5173`

### Para testar o sistema de UTM:
```
http://localhost:5173/?utm_source=facebook&utm_medium=cpc&utm_campaign=black-friday&utm_content=video-1
```

---

## 📂 Estrutura do Projeto
```
six-vsl-test/
├── src/
│   ├── hooks/           
│   │   └── useUTM.js    # Hook customizado para gerenciar UTMs
│   ├── pages/
│   │   ├── VSLPage.jsx      # Página principal (Video Sales Letter)
│   │   ├── CheckoutPage.jsx # Página de checkout
│   │   └── ThankYouPage.jsx # Página de confirmação
│   ├── utils/
│   │   └── plans.js     # Dados dos planos (centralizados)
│   ├── App.jsx
│   ├── main.jsx         # Entry point + rotas
│   └── index.css        # Tailwind imports
├── public/
├── index.html           # HTML base com meta tags SEO
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 📊 Métricas de Performance (Lighthouse)

> **Screenshots em anexo na pasta `/docs/lighthouse/`**

### Desktop
- Performance: 100/100
- Accessibility: 85/100
- Best Practices: 100/100
- SEO: 100/100

### Mobile
- Performance: 100/100
- Accessibility: 85/100
- Best Practices: 100/100
- SEO: 100/100

---

## 🔄 Fluxo de UTM (Exemplo)

1. **Usuário clica em anúncio do Facebook:**
```
   https://six-vsl-test.vercel.app/?utm_source=facebook&utm_medium=cpc&utm_campaign=lancamento
```

2. **VSL Page captura e salva UTMs no localStorage**

3. **Usuário clica em "Quero Este Plano" → vai para:**
```
   /checkout?plan=premium&utm_source=facebook&utm_medium=cpc&utm_campaign=lancamento
```

4. **Checkout mostra plano selecionado + UTMs preservados**

5. **Após finalizar compra → redireciona para:**
```
   /obrigado?utm_source=facebook&utm_medium=cpc&utm_campaign=lancamento
```

6. **Página Obrigado confirma compra com UTMs**

---

## 👨‍💻 Desenvolvedor

**João Vitor** - Full Stack Developer

- GitHub: (https://github.com/RepoDevJoao)
- LinkedIn: (https://www.linkedin.com/in/joaocoelhot/)

---

## 📄 Licença

Este projeto foi desenvolvido como teste técnico para o Grupo Six.