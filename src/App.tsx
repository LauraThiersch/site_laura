import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Importa os estilos principais da aplicação

// Importa os componentes de layout
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Breadcrumbs from './components/Breadcrumbs/breadcrumbs';

// 🚀 IMPORTA OS HOOKS DE OTIMIZAÇÃO
import usePageTracking from './hooks/usePageTracking';
import { usePreloadPages } from './hooks/usePreloadPages';

// 🎯 NOVO: Schema.org Avançado
import AdvancedSchema from './components/SchemaOrg/advancedSchema';

// 🎯 NOVO: Rich Snippets Avançados
import RichSnippets from './components/RichSnippets/richSnippets';

// 🎨 NOVO: Otimização de Fontes
import FontOptimizer from './components/FontOptimization/fontOptimizer';

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

// 🎯 NOVO COMPONENTE: PageTrackerRoutes
// Este componente será renderizado DENTRO do <Router>
// e é onde o usePageTracking() será chamado com segurança.
function PageTrackerRoutes() {
  // 💡 HOOKS DE OTIMIZAÇÃO sendo chamados DENTRO do contexto do <Router>
  usePageTracking(); 
  usePreloadPages(); // Preload das páginas para melhor performance

  return (
    <Routes>
      {/* Define as rotas para cada página - URLs otimizadas para SEO */}
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/sobre-dra-laura-thiersch" element={<Sobre />} />
      <Route path="/atendimentos" element={<Atendimentos />} />
      <Route path="/atendimentos-neuropediatria" element={<Atendimentos />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/contato-agendamento" element={<Contato />} />
      <Route path="/tea-tratamento-bh" element={<TEA />} />
      <Route path="/tdah-tratamento-bh" element={<TDAH />} />
      <Route path="/epilepsia-infantil-bh" element={<Epilepsia />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<ArticlePage />} />
      <Route path="/blog/tdah-criancas-sintomas-diagnostico" element={<Article2Page />} />
      <Route path="/blog/epilepsia-infantil-primeiros-socorros" element={<Article3Page />} />
      <Route path="/blog/diagnostico-tea-processo-completo" element={<Article4Page />} />
      <Route path="/blog/tratamento-tdah-abordagens-eficazes" element={<Article5Page />} />
      <Route path="/blog/tratamento-epilepsia-infantil-controle" element={<Article6Page />} />
      <Route path="/blog/atraso-desenvolvimento-quando-procurar-ajuda" element={<Article7Page />} />
      <Route path="/blog/dificuldades-escolares-causas-neurologicas" element={<Article8Page />} />
      {/* Redirecionamentos para URLs antigas (SEO) */}
      <Route path="/neuropediatra-belo-horizonte" element={<Home />} />
      <Route path="/neurologista-infantil-bh" element={<Home />} />
      {/* Rotas futuras podem ser adicionadas aqui (ex: /artigos) */}
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        {/* 🎯 Schema.org Avançado - Carregado em todas as páginas */}
        <AdvancedSchema pageType="home" />
        
        {/* 🚀 Otimização de Performance - Core Web Vitals */}
        {/* <PerformanceOptimizer pageType="home" /> */}
        
        {/* 🎯 Rich Snippets Avançados */}
        <RichSnippets pageType="home" />
        
        {/* 🎨 Otimização de Fontes */}
        <FontOptimizer />
        
        {/* Widget de métricas Core Web Vitals - só aparece em dev */}
        {process.env.NODE_ENV === 'development' && <WebVitalsWidget />}
        
        <Header /> {/* Componente de cabeçalho, presente em todas as páginas */}
        <Breadcrumbs /> {/* Breadcrumbs para navegação estruturada e SEO */}
        <main className="main-content">
          {/* O elemento <main> é semântico e indica o conteúdo principal da página atual.
          Ele é crucial para SEO, pois sinaliza aos motores de busca onde o conteúdo mais relevante está.
          */}
          {/* 🎯 Renderiza o novo componente que contém as rotas e o hook de rastreamento */}
          <Suspense fallback={<div>Carregando...</div>}>
            <PageTrackerRoutes /> 
          </Suspense>
        </main>
        <Footer /> {/* Componente de rodapé, presente em todas as páginas */}
      </div>
    </Router>
  );
}

export default App;
