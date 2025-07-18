# Site da Dra. Laura Thiersch - Neuropediatra BH

Site profissional da Dra. Laura Thiersch, neuropediatra em Belo Horizonte, especializada em TEA, TDAH e Epilepsia Infantil.

## 🏥 Sobre o Projeto

Site desenvolvido em React com foco em:
- **SEO otimizado** para neuropediatra em Belo Horizonte
- **Conversão de agendamentos** via Doctoralia
- **Experiência do usuário** mobile-first
- **Performance** e acessibilidade

## ✨ Funcionalidades Principais

### 📅 Sistema de Agendamento
- **Widget oficial Doctoralia** integrado
- **Widget customizado** como fallback
- **Página dedicada** em `/agendar-consulta`
- **Todos os botões** redirecionam para a agenda

### 📱 Botão Flutuante WhatsApp
- **Posição fixa** no lado direito
- **Sempre visível** em todas as páginas
- **Design responsivo** e animado
- **Rastreamento GA4** integrado

### 🎯 Páginas Especializadas
- **Home**: Apresentação e CTA principal
- **Sobre**: Biografia e formação
- **Atendimentos**: Especialidades e procedimentos
- **TEA**: Transtorno do Espectro Autista
- **TDAH**: Déficit de Atenção e Hiperatividade
- **Epilepsia**: Epilepsia Infantil
- **Blog**: Artigos educativos
- **Contato**: Informações de contato

## 🚀 Tecnologias

- **React 18** com TypeScript
- **React Router** para navegação
- **React Helmet** para SEO
- **Doctoralia API** para agendamentos
- **Google Analytics 4** para rastreamento
- **CSS3** com animações e responsividade

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Booking/           # Sistema de agendamento
│   ├── FloatingWhatsApp/  # Botão flutuante WhatsApp
│   ├── Header/           # Cabeçalho do site
│   ├── Footer/           # Rodapé do site
│   └── ...
├── pages/                # Páginas do site
├── services/             # APIs e serviços
├── hooks/                # Hooks customizados
└── styles/               # Estilos globais
```

## 🎯 Melhorias Implementadas

### ✅ Correções de Erros
- Removidas importações não utilizadas
- Corrigidos warnings do TypeScript
- Otimizado código para build

### ✅ Sistema de Agendamento Unificado
- **Todos os botões** agora redirecionam para `/agendar-consulta`
- **Página centralizada** com widget Doctoralia
- **Experiência consistente** em todo o site

### ✅ Botão Flutuante WhatsApp
- **Sempre visível** no canto inferior direito
- **Animações suaves** e responsivo
- **Rastreamento completo** de cliques
- **Acessibilidade** otimizada

## 🛠️ Scripts Disponíveis

### `npm start`
Inicia o servidor de desenvolvimento em [http://localhost:3000](http://localhost:3000)

### `npm run build`
Cria build de produção otimizado na pasta `build/`

### `npm test`
Executa os testes do projeto

## 📊 Analytics e Rastreamento

### Eventos Rastreados
- **Visualizações de página**
- **Cliques em botões de agendamento**
- **Interações com WhatsApp flutuante**
- **Conversões de contato**

### Métricas Principais
- Taxa de conversão de agendamentos
- Engajamento por página
- Origem do tráfego
- Comportamento mobile vs desktop

## 🎨 Design e UX

### Cores Principais
- **Verde**: #4CAF50 (agendamentos e CTAs)
- **Amarelo**: #F7BF3C (secundário)
- **WhatsApp**: #25D366 (botão flutuante)

### Responsividade
- **Mobile-first** design
- **Breakpoints**: 480px, 768px, 1024px
- **Touch-friendly** em dispositivos móveis

## 📈 SEO Otimizado

### Meta Tags
- Títulos únicos por página
- Descrições otimizadas
- Open Graph para redes sociais
- Schema.org markup

### URLs Amigáveis
- `/agendar-consulta` - Agendamento
- `/sobre` - Sobre a Dra. Laura
- `/tea-tratamento-bh` - TEA
- `/tdah-tratamento-bh` - TDAH
- `/epilepsia-infantil-bh` - Epilepsia

## 🚀 Deploy

O site está pronto para deploy em qualquer plataforma estática:
- Vercel
- Netlify
- GitHub Pages
- AWS S3

## 📞 Contato

**Dra. Laura Thiersch**
- **WhatsApp**: [Configurado via variáveis de ambiente]
- **Email**: [Configurado via variáveis de ambiente]
- **Endereço**: Rua Turquesa, 347 - Prado, BH

---

Desenvolvido com ❤️ para a Dra. Laura Thiersch
