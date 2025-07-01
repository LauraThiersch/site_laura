// src/hooks/usePageTracking.ts
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 🎯 INTERFACE PARA PARÂMETROS DE RASTREAMENTO PERSONALIZADOS
// Baseada na nossa estratégia SEO matadora para Dra Laura Thiersch
interface PageTrackingParams {
  area_especialidade: string;
  segmento_paciente: string;
  foco_conversao: string;
  pagina_tipo: string;
  palavras_chave: string;
}

// 🚀 DECLARAÇÃO GLOBAL PARA GTAG
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// 🎯 HOOK PERSONALIZADO PARA RASTREAMENTO DE PÁGINAS
// Otimizado para nossa estratégia de neuropediatra BH
const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Verifica se o gtag está disponível
    if (!window.gtag) {
      console.warn('Google Analytics gtag not available.');
      return;
    }

    // 💡 MAPEAMENTO INTELIGENTE DE PÁGINAS BASEADO NA NOSSA ESTRATÉGIA
    const getPageParams = (pathname: string): PageTrackingParams => {
      switch (pathname) {
        case '/':
          return {
            area_especialidade: 'neuropediatria_geral',
            segmento_paciente: 'tea_tdah_epilepsia_bh',
            foco_conversao: 'agendamento_whatsapp',
            pagina_tipo: 'home_landing',
            palavras_chave: 'neuropediatra_belo_horizonte_tea_tdah_epilepsia'
          };
        
        case '/sobre':
          return {
            area_especialidade: 'formacao_experiencia',
            segmento_paciente: 'pais_interessados_qualificacao',
            foco_conversao: 'confianca_credibilidade',
            pagina_tipo: 'sobre_medica',
            palavras_chave: 'dra_laura_thiersch_formacao_ufmg_fhemig'
          };
        
        case '/atendimento':
          return {
            area_especialidade: 'servicos_consultas',
            segmento_paciente: 'pacientes_potenciais',
            foco_conversao: 'informacoes_agendamento',
            pagina_tipo: 'servicos_detalhes',
            palavras_chave: 'consulta_neuropediatra_bh_tea_tdah_epilepsia'
          };
        
        case '/contato':
          return {
            area_especialidade: 'contato_agendamento',
            segmento_paciente: 'conversao_final',
            foco_conversao: 'agendamento_direto',
            pagina_tipo: 'contato_conversao',
            palavras_chave: 'agendar_consulta_neuropediatra_funcionarios_bh'
          };
        
        default:
          return {
            area_especialidade: 'pagina_generica',
            segmento_paciente: 'visitante_geral',
            foco_conversao: 'navegacao_site',
            pagina_tipo: 'outras_paginas',
            palavras_chave: 'neuropediatra_belo_horizonte'
          };
      }
    };

    // 🎯 OBTER PARÂMETROS ESPECÍFICOS DA PÁGINA
    const pageParams = getPageParams(location.pathname);

    // 🚀 ENVIAR EVENTO DE PAGE_VIEW OTIMIZADO PARA GA4
    const eventParams = {
      page_path: location.pathname + location.search,
      page_location: window.location.href,
      page_title: document.title, // Título otimizado pelo Helmet
      // Parâmetros personalizados baseados na nossa estratégia matadora
      ...pageParams,
      // Dados adicionais para análise
      timestamp: new Date().toISOString(),
      user_agent_type: /Mobile|Android|iPhone|iPad/.test(navigator.userAgent) ? 'mobile' : 'desktop',
      referrer_source: document.referrer || 'direct_access'
    };

    // Enviar para GA4
    window.gtag('event', 'page_view', eventParams);

    // 📊 EVENTO ADICIONAL PARA ANÁLISE DE FUNIL DE CONVERSÃO
    window.gtag('event', 'navegacao_site_neuropediatra', {
      event_category: 'Navegacao',
      event_label: `Visitou: ${location.pathname}`,
      area_interesse: pageParams.area_especialidade,
      potencial_conversao: pageParams.foco_conversao,
      palavras_chave_pagina: pageParams.palavras_chave
    });

    // Log para debug (você pode remover em produção)
    console.log(`🎯 Página rastreada: ${location.pathname}`);
    console.log(`📊 Especialidade: ${pageParams.area_especialidade}`);
    console.log(`🚀 Foco conversão: ${pageParams.foco_conversao}`);
    console.log(`🔍 Palavras-chave: ${pageParams.palavras_chave}`);

  }, [location]); // Dispara toda vez que a rota muda

  return null; // Hook não retorna nada visível
};

export default usePageTracking;
