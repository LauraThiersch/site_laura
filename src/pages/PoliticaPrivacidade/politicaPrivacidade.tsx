import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../siteConfig';
import './politicaPrivacidade.css';

const PoliticaPrivacidade: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade - Dra. Laura Thiersch | Neuropediatra</title>
        <meta 
          name="description" 
          content="Política de Privacidade da Dra. Laura Thiersch. Saiba como coletamos, usamos e protegemos suas informações pessoais."
        />
        <meta 
          name="keywords" 
          content="política de privacidade, dra laura thiersch, neuropediatra bh, proteção de dados, lgpd"
        />
        <link rel="canonical" href={`${siteConfig.baseUrl}/politica-de-privacidade`} />
      </Helmet>

      <div className="politica-privacidade-container">
        <div className="politica-privacidade-content">
          <header className="politica-header">
            <h1>Política de Privacidade</h1>
            <p className="politica-subtitle">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </header>

          <section className="politica-section">
            <h2>1. Introdução</h2>
            <p>
              A Dra. Laura Thiersch ("nós", "nosso", "nossa") está comprometida em proteger 
              sua privacidade. Esta Política de Privacidade explica como coletamos, usamos e 
              protegemos suas informações pessoais quando você visita nosso site.
            </p>
          </section>

          <section className="politica-section">
            <h2>2. Informações que Coletamos</h2>
            <h3>2.1 Informações Fornecidas por Você</h3>
            <ul>
              <li>Nome e informações de contato</li>
              <li>Informações sobre a criança (idade, sintomas)</li>
              <li>Mensagens enviadas através do formulário de contato</li>
              <li>Preferências de comunicação</li>
            </ul>

            <h3>2.2 Informações Coletadas Automaticamente</h3>
            <ul>
              <li>Endereço IP e informações do dispositivo</li>
              <li>Dados de navegação e uso do site</li>
              <li>Informações de cookies e tecnologias similares</li>
            </ul>
          </section>

          <section className="politica-section">
            <h2>3. Como Usamos Suas Informações</h2>
            <p>Usamos suas informações para:</p>
            <ul>
              <li>Responder suas consultas e solicitações</li>
              <li>Agendar consultas e atendimentos</li>
              <li>Melhorar nosso site e serviços</li>
              <li>Enviar informações relevantes sobre neuropediatria</li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </section>

          <section className="politica-section">
            <h2>4. Google Analytics e Cookies</h2>
            <p>
              Este site usa Google Analytics para analisar o tráfego e melhorar sua experiência. 
              O Google Analytics coleta informações sobre como você usa nosso site, incluindo:
            </p>
            <ul>
              <li>Páginas visitadas</li>
              <li>Tempo gasto em cada página</li>
              <li>Como você chegou ao nosso site</li>
              <li>Informações do dispositivo e navegador</li>
            </ul>

            <div className="google-analytics-info">
              <h3>Como o Google usa informações</h3>
              <p>
                O Google pode usar as informações coletadas para personalizar anúncios e 
                melhorar seus serviços. Para mais detalhes sobre como o Google coleta e 
                processa dados, visite:
              </p>
              <a 
                href="https://www.google.com/policies/privacy/partners/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="google-policy-link"
              >
                Como o Google usa informações de sites ou apps que usam nossos serviços
              </a>
            </div>

            <h3>4.1 Tipos de Cookies que Usamos</h3>
            <ul>
              <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento do site</li>
              <li><strong>Cookies de Analytics:</strong> Google Analytics para análise de tráfego</li>
              <li><strong>Cookies de Marketing:</strong> Google Ads para rastreamento de conversões</li>
              <li><strong>Cookies de Preferências:</strong> Para lembrar suas escolhas</li>
            </ul>
          </section>

          <section className="politica-section">
            <h2>5. Compartilhamento de Informações</h2>
            <p>
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
              exceto:
            </p>
            <ul>
              <li>Com seu consentimento explícito</li>
              <li>Para cumprir obrigações legais</li>
              <li>Com prestadores de serviços essenciais (ex: Google Analytics)</li>
              <li>Para proteger nossos direitos e segurança</li>
            </ul>
          </section>

          <section className="politica-section">
            <h2>6. Segurança dos Dados</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais para proteger 
              suas informações pessoais contra acesso não autorizado, alteração, divulgação 
              ou destruição.
            </p>
          </section>

          <section className="politica-section">
            <h2>7. Seus Direitos (LGPD)</h2>
            <p>
              Conforme a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:
            </p>
            <ul>
              <li><strong>Acesso:</strong> Solicitar informações sobre seus dados pessoais</li>
              <li><strong>Correção:</strong> Solicitar correção de dados incorretos</li>
              <li><strong>Exclusão:</strong> Solicitar exclusão de seus dados pessoais</li>
              <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
              <li><strong>Revogação:</strong> Revogar consentimento a qualquer momento</li>
              <li><strong>Oposição:</strong> Opor-se ao processamento de seus dados</li>
            </ul>

            <p>
              Para exercer seus direitos, entre em contato conosco através dos dados abaixo.
            </p>
          </section>

          <section className="politica-section">
            <h2>8. Retenção de Dados</h2>
            <p>
              Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir 
              as finalidades descritas nesta política, a menos que a lei exija um período 
              de retenção mais longo.
            </p>
          </section>

          <section className="politica-section">
            <h2>9. Menores de Idade</h2>
            <p>
              Nosso site não é destinado a menores de 18 anos. Não coletamos intencionalmente 
              informações pessoais de menores de idade. Se você é pai ou responsável e acredita 
              que seu filho nos forneceu informações pessoais, entre em contato conosco.
            </p>
          </section>

          <section className="politica-section">
            <h2>10. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos 
              que você revise esta política regularmente para se manter informado sobre 
              como protegemos suas informações.
            </p>
          </section>

          <section className="politica-section">
            <h2>11. Contato</h2>
            <p>
              Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como 
              tratamos suas informações pessoais, entre em contato conosco:
            </p>
            
            <div className="contato-info">
              <p><strong>Dra. Laura Thiersch</strong></p>
              <p><strong>Endereço:</strong> Rua Turquesa, 347 - Belo Horizonte, MG</p>
              <p><strong>Telefone:</strong> {siteConfig.contact.phone}</p>
              <p><strong>WhatsApp:</strong> {siteConfig.contact.whatsapp}</p>
              <p><strong>Email:</strong> {siteConfig.contact.email}</p>
            </div>
          </section>

          <footer className="politica-footer">
            <Link to="/" className="voltar-link">
              ← Voltar ao site
            </Link>
          </footer>
        </div>
      </div>
    </>
  );
};

export default PoliticaPrivacidade; 