import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import monitoringService from './services/MonitoringService';
import './App.css'; // Importa os estilos principais da aplicação

// Importa os componentes de layout
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp';

// 🚀 IMPORTA OS HOOKS DE OTIMIZAÇÃO
import usePageTracking from './hooks/usePageTracking';
import { usePreloadPages } from './hooks/usePreloadPages';
import { useScrollToTop } from './hooks/useScrollToTop';

// Schema.org Avançado
import AdvancedSchema from './components/SchemaOrg/advancedSchema';

// Rich Snippets Avançados
import RichSnippets from './components/RichSnippets/richSnippets';

// 🎨 NOVO: Otimização de Fontes
import FontOptimizer from './components/FontOptimization/fontOptimizer';

// Scroll para o topo
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

// Importa o widget de métricas Core Web Vitals (apenas para dev)
import WebVitalsWidget from './components/Performance/WebVitalsWidget';

// Lazy imports devem vir depois de todos os imports normais
const Home = lazy(() => import('./pages/Home/home'));
const Sobre = lazy(() => import('./pages/Sobre/sobre'));
const Atendimentos = lazy(() => import('./pages/Atendimentos/atendimentos'));
const Contato = lazy(() => import('./pages/Contato/contato'));
const TEA = lazy(() => import('./pages/TEA/tea'));
const TDAH = lazy(() => import('./pages/TDAH/tdah'));
const Epilepsia = lazy(() => import('./pages/Epilepsia/epilepsia'));
const Blog = lazy(() => import('./pages/Blog/blog'));
const ArticlePage = lazy(() => import('./pages/Blog/Article/article'));
const Article2Page = lazy(() => import('./pages/Blog/Article/article2'));
const Article3Page = lazy(() => import('./pages/Blog/Article/article3'));
const Article4Page = lazy(() => import('./pages/Blog/Article/article4'));
const Article5Page = lazy(() => import('./pages/Blog/Article/article5'));
const Article6Page = lazy(() => import('./pages/Blog/Article/article6'));
const Article7Page = lazy(() => import('./pages/Blog/Article/article7'));
const Article8Page = lazy(() => import('./pages/Blog/Article/article8'));
const Article9Page = lazy(() => import('./pages/Blog/Article/article9'));
const Article10Page = lazy(() => import('./pages/Blog/Article/article10'));
const Agendamento = lazy(() => import('./pages/Agendamento/agendamento'));
const Avaliacoes = lazy(() => import('./pages/Avaliacoes/avaliacoes'));

// 🎯 NOVO COMPONENTE: PageTrackerRoutes
// Este componente será renderizado DENTRO do <Router>
// e é onde o usePageTracking() será chamado com segurança.
function PageTrackerRoutes() {
  const location = useLocation();
  
  // 💡 HOOKS DE OTIMIZAÇÃO sendo chamados DENTRO do contexto do <Router>
  usePageTracking(); 
  usePreloadPages(); // Preload das páginas para melhor performance
  useScrollToTop(); // Scroll automático para o topo quando a rota mudar

  // 🚀 MONITORAMENTO AUTOMÁTICO
  useEffect(() => {
    // Gerar relatório de monitoramento quando a página muda
    setTimeout(() => {
      monitoringService.generateReport();
    }, 2000);
  }, [location.pathname]);

  return (
    <Routes>
      {/* Define as rotas para cada página */}
      <Route path="/" element={<Home />} />
      
      {/* URLs principais */}
      <Route path="/neuropediatria-belo-horizonte" element={<Home />} />
      <Route path="/neuropediatra-belo-horizonte" element={<Home />} />
      <Route path="/neurologista-infantil-belo-horizonte" element={<Home />} />
      
      {/* URLs de longa cauda - Protegidas da estratégia SEO */}
      <Route path="/neuropediatra-particular-bh" element={<Home />} />
      <Route path="/consulta-neuropediatra-prado" element={<Agendamento />} />
      <Route path="/tea-diagnostico-belo-horizonte" element={<TEA />} />
      <Route path="/tdah-tratamento-infantil-bh" element={<TDAH />} />
      <Route path="/epilepsia-infantil-neuropediatra" element={<Epilepsia />} />
      <Route path="/primeira-consulta-neuropediatra" element={<Agendamento />} />
      <Route path="/preparacao-consulta-neuropediatra" element={<Agendamento />} />
      
      {/* Páginas de especialidades */}
      <Route path="/tratamento-tea-autismo" element={<TEA />} />
      <Route path="/tea-tratamento-bh" element={<TEA />} />
      <Route path="/autismo-diagnostico-bh" element={<TEA />} />
      
      <Route path="/tdah-criancas-tratamento" element={<TDAH />} />
      <Route path="/tdah-tratamento-bh" element={<TDAH />} />
      <Route path="/deficit-atencao-hiperatividade-bh" element={<TDAH />} />
      
      <Route path="/epilepsia-infantil" element={<Epilepsia />} />
      <Route path="/epilepsia-infantil-bh" element={<Epilepsia />} />
      <Route path="/epilepsia-criancas-tratamento" element={<Epilepsia />} />
      
      {/* Páginas institucionais */}
      <Route path="/sobre-dra-laura" element={<Sobre />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/sobre-dra-laura-thiersch" element={<Sobre />} />
      
      <Route path="/atendimentos" element={<Atendimentos />} />
      <Route path="/atendimentos-neuropediatria" element={<Atendimentos />} />
      <Route path="/especialidades-neuropediatria" element={<Atendimentos />} />
      
      <Route path="/contato" element={<Contato />} />
      <Route path="/contato-agendamento" element={<Contato />} />
      
      {/* Blog com URLs otimizadas */}
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<ArticlePage />} />
      
      {/* Artigos específicos com URLs otimizadas */}
      <Route path="/blog/sinais-autismo-bebes" element={<Article2Page />} />
      <Route path="/blog/tdah-criancas-sintomas-diagnostico" element={<Article2Page />} />
      
      <Route path="/blog/epilepsia-infantil-primeiros-socorros" element={<Article3Page />} />
      <Route path="/blog/epilepsia-infantil-sintomas" element={<Article3Page />} />
      
      <Route path="/blog/diagnostico-tea-processo-completo" element={<Article4Page />} />
      <Route path="/blog/autismo-diagnostico-infantil" element={<Article4Page />} />
      
      <Route path="/blog/tratamento-tdah-abordagens-eficazes" element={<Article5Page />} />
      <Route path="/blog/tdah-tratamento-criancas" element={<Article5Page />} />
      
      <Route path="/blog/tratamento-epilepsia-infantil-controle" element={<Article6Page />} />
      <Route path="/blog/epilepsia-tratamento-criancas" element={<Article6Page />} />
      
      <Route path="/blog/atraso-desenvolvimento-quando-procurar-ajuda" element={<Article7Page />} />
      <Route path="/blog/atraso-desenvolvimento-neurologico" element={<Article7Page />} />
      
      <Route path="/blog/dificuldades-escolares-causas-neurologicas" element={<Article8Page />} />
      <Route path="/blog/dificuldades-escolares-criancas" element={<Article8Page />} />
      
      <Route path="/blog/como-escolher-neuropediatra-dicas-pais" element={<Article9Page />} />
      <Route path="/blog/neuropediatra-belo-horizonte-escolha" element={<Article9Page />} />
      
      <Route path="/blog/preparando-primeira-consulta-neuropediatra" element={<Article10Page />} />
      <Route path="/blog/primeira-consulta-neuropediatra" element={<Article10Page />} />
      
      {/* Agendamento */}
      <Route path="/agendar-consulta" element={<Agendamento />} />
      <Route path="/agendamento" element={<Agendamento />} />
      
      {/* Avaliações */}
      <Route path="/avaliacoes" element={<Avaliacoes />} />
      <Route path="/depoimentos" element={<Avaliacoes />} />
      <Route path="/avaliacoes-dra-laura-thiersch" element={<Avaliacoes />} />
      
      {/* URLs de suporte */}
      <Route path="/desenvolvimento-neurologico" element={<Atendimentos />} />
      <Route path="/convenios" element={<Contato />} />
      
      {/* Redirecionamentos para URLs antigas */}
      <Route path="/neuropediatra-belo-horizonte" element={<Home />} />
      <Route path="/neurologista-infantil-bh" element={<Home />} />
      {/* Rotas futuras podem ser adicionadas aqui (ex: /artigos) */}
    </Routes>
  );
}

// Componente para scroll automático até o hash/âncora
function ScrollToHashElement() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        {/* Skip link para acessibilidade */}
        <a href="#main-content" className="skip-link">Pular para o conteúdo principal</a>
        <ScrollToTop />
        <ScrollToHashElement />
        {/* Schema.org Avançado - Carregado em todas as páginas */}
        <AdvancedSchema pageType="home" />
        
        {/* 🚀 Otimização de Performance - Core Web Vitals */}
        {/* <PerformanceOptimizer pageType="home" /> */}
        
        {/* Rich Snippets Avançados */}
        <RichSnippets />
        
        {/* 🎨 Otimização de Fontes */}
        <FontOptimizer />
        
        {/* Widget de métricas Core Web Vitals - só aparece em dev */}
        {process.env.NODE_ENV === 'development' && <WebVitalsWidget />}
        
        <Header /> {/* Componente de cabeçalho, presente em todas as páginas */}
        <main className="main-content">
          {/* O elemento <main> é semântico e indica o conteúdo principal da página atual. */}
          {/* 🎯 Renderiza o novo componente que contém as rotas e o hook de rastreamento */}
          <Suspense fallback={<div>Carregando...</div>}>
            <PageTrackerRoutes /> 
          </Suspense>
        </main>
        <Footer /> {/* Componente de rodapé, presente em todas as páginas */}
        
        {/* 🚀 Botão Flutuante do WhatsApp - Presente em todas as páginas */}
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
