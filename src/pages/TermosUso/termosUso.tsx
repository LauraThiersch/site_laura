import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../siteConfig';
import './termosUso.css';

const TermosUso: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Termos de Uso - Dra. Laura Thiersch | Neuropediatra</title>
        <meta 
          name="description" 
          content="Termos de Uso do site da Dra. Laura Thiersch. Conheça as condições de uso e responsabilidades."
        />
        <meta 
          name="keywords" 
          content="termos de uso, dra laura thiersch, neuropediatra bh, condições de uso"
        />
        <link rel="canonical" href={`${siteConfig.baseUrl}/termos-de-uso`} />
      </Helmet>

      <div className="termos-uso-container">
        <div className="termos-uso-content">
          <header className="termos-header">
            <h1>Termos de Uso</h1>
            <p className="termos-subtitle">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </header>

          <section className="termos-section">
            <h2>1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e usar este site, você aceita estar vinculado a estes Termos de Uso. 
              Se você não concordar com qualquer parte destes termos, não deve usar nosso site.
            </p>
          </section>

          <section className="termos-section">
            <h2>2. Descrição do Serviço</h2>
            <p>
              Este site é propriedade da Dra. Laura Thiersch e fornece informações sobre 
              serviços de neuropediatria, incluindo:
            </p>
            <ul>
              <li>Informações sobre especialidades médicas</li>
              <li>Agendamento de consultas</li>
              <li>Formulários de contato</li>
              <li>Conteúdo educativo sobre neuropediatria</li>
              <li>Informações de contato e localização</li>
            </ul>
          </section>

          <section className="termos-section">
            <h2>3. Uso Aceitável</h2>
            <p>Você concorda em usar este site apenas para fins legítimos e de acordo com estes termos:</p>
            <ul>
              <li>Usar o site para obter informações sobre serviços médicos</li>
              <li>Entrar em contato para agendar consultas</li>
              <li>Ler conteúdo educativo sobre neuropediatria</li>
              <li>Navegar pelo site de forma responsável</li>
            </ul>
          </section>

          <section className="termos-section">
            <h2>4. Uso Proibido</h2>
            <p>Você não deve:</p>
            <ul>
              <li>Usar o site para fins ilegais ou não autorizados</li>
              <li>Transmitir vírus, malware ou código malicioso</li>
              <li>Tentar acessar áreas restritas do site</li>
              <li>Interferir no funcionamento do site</li>
              <li>Usar o site para spam ou conteúdo inadequado</li>
              <li>Violar direitos de propriedade intelectual</li>
            </ul>
          </section>

          <section className="termos-section">
            <h2>5. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo deste site, incluindo textos, imagens, logos, design e código, 
              é propriedade da Dra. Laura Thiersch e está protegido por leis de direitos autorais. 
              É proibida a reprodução sem autorização prévia.
            </p>
          </section>

          <section className="termos-section">
            <h2>6. Privacidade e Dados</h2>
            <p>
              O uso de suas informações pessoais é regido por nossa 
              <Link to="/politica-de-privacidade" className="politica-link">Política de Privacidade</Link>. 
              Ao usar este site, você concorda com a coleta e uso de informações conforme descrito 
              na política de privacidade.
            </p>
          </section>

          <section className="termos-section">
            <h2>7. Google Analytics</h2>
            <p>
              Este site usa Google Analytics para analisar o tráfego e melhorar a experiência 
              do usuário. O uso do Google Analytics está sujeito aos 
              <a 
                href="https://www.google.com/analytics/terms/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="google-terms-link"
              >
                Termos de Serviço do Google Analytics
              </a>.
            </p>
          </section>

          <section className="termos-section">
            <h2>8. Limitação de Responsabilidade</h2>
            <p>
              A Dra. Laura Thiersch não se responsabiliza por:
            </p>
            <ul>
              <li>Danos diretos, indiretos ou consequenciais</li>
              <li>Perda de dados ou interrupção do serviço</li>
              <li>Erros ou omissões no conteúdo</li>
              <li>Uso inadequado das informações fornecidas</li>
              <li>Problemas técnicos ou de conectividade</li>
            </ul>
            <p>
              O site é fornecido "como está" e "conforme disponível".
            </p>
          </section>

          <section className="termos-section">
            <h2>9. Isenção de Garantias</h2>
            <p>
              Não garantimos que o site estará sempre disponível, livre de erros ou que 
              as informações sejam sempre precisas ou atualizadas. O conteúdo é fornecido 
              apenas para fins informativos e não substitui consulta médica profissional.
            </p>
          </section>

          <section className="termos-section">
            <h2>10. Links Externos</h2>
            <p>
              Este site pode conter links para sites de terceiros. Não endossamos ou 
              nos responsabilizamos pelo conteúdo desses sites externos. O acesso a 
              sites de terceiros é feito por sua conta e risco.
            </p>
          </section>

          <section className="termos-section">
            <h2>11. Modificações</h2>
            <p>
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. 
              As modificações entrarão em vigor imediatamente após a publicação no site. 
              Recomendamos revisar periodicamente estes termos.
            </p>
          </section>

          <section className="termos-section">
            <h2>12. Lei Aplicável</h2>
            <p>
              Estes Termos de Uso são regidos pelas leis brasileiras. Qualquer disputa 
              será resolvida nos tribunais competentes de Belo Horizonte, Minas Gerais.
            </p>
          </section>

          <section className="termos-section">
            <h2>13. Disposições Gerais</h2>
            <p>
              Se qualquer disposição destes termos for considerada inválida, as demais 
              disposições permanecerão em vigor. A falha em fazer cumprir qualquer 
              disposição não constitui renúncia a esse direito.
            </p>
          </section>

          <section className="termos-section">
            <h2>14. Contato</h2>
            <p>
              Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:
            </p>
            
            <div className="contato-info">
              <p><strong>Dra. Laura Thiersch</strong></p>
              <p><strong>Endereço:</strong> Rua Turquesa, 347 - Belo Horizonte, MG</p>
              <p><strong>Telefone:</strong> {siteConfig.contact.phone}</p>
              <p><strong>WhatsApp:</strong> {siteConfig.contact.whatsapp}</p>
              <p><strong>Email:</strong> {siteConfig.contact.email}</p>
            </div>
          </section>

          <footer className="termos-footer">
            <Link to="/" className="voltar-link">
              ← Voltar ao site
            </Link>
          </footer>
        </div>
      </div>
    </>
  );
};

export default TermosUso; 