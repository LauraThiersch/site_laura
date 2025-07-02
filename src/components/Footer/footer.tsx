import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

// DECLARAÇÃO GLOBAL PARA GTAG (PARA EVITAR ERROS DE TIPAGEM)
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // FUNÇÃO DE RASTREAMENTO PARA CLIQUES NO RODAPÉ
  const handleFooterClick = (
    conversionType: 'whatsapp' | 'phone' | 'email',
    eventLabel: string
  ) => {
    if (window.gtag) {
      window.gtag('event', `Clique_${conversionType.charAt(0).toUpperCase() + conversionType.slice(1)}_Footer`, {
        event_category: 'Conversao_Footer',
        event_label: eventLabel,
        conversion_type: conversionType,
        contact_method: conversionType,
        area_conversao: 'neuropediatra_bh',
        localizacao_consultorio: 'prado_bh',
        value: 1,
        currency: 'BRL'
      });
      console.log(`🎯 Clique no ${conversionType} (Footer) rastreado: ${eventLabel}`);
    }
  };

  return (
    <footer
      className="footer"
      itemScope // Indica que este elemento é um item para o Schema.org
      itemType="https://schema.org/WPFooter" // Define como Rodapé de Página Web
    >
      <div className="container footer-container">
        <div className="footer-info">

          {/* Seção de Logo e Identidade da Clínica (Schema.org: Organization) */}
          <div
            className="footer-logo"
            itemScope // Indica que este elemento contém dados de uma organização
            itemType="https://schema.org/Organization" // Define como Organização
          >
            <h3 itemProp="name">Dra. Laura Thiersch</h3> {/* Nome da organização/pessoa */}
            <p itemProp="slogan">Neuropediatra em Belo Horizonte | TEA, TDAH e Epilepsia Infantil</p>
            {/* O slogan reforça as palavras-chave para SEO */}
          </div>

          {/* Seção de Contato (Schema.org: ContactPoint / PostalAddress) */}
          <div className="footer-contact">
            <h4 className="footer-title">Contato</h4>

            {/* Telefone */}
            <p>
              Telefone: <a
                href="tel:+5531995626630"
                itemProp="telephone"
                aria-label="Telefone da Dra. Laura Thiersch"
                title="Ligue para a Dra. Laura Thiersch"
                
                rel="noopener noreferrer"
                onClick={() => handleFooterClick('phone', 'Telefone_Footer')} // Rastreamento GA4
              >
                (31) 99562-6630
              </a>
            </p>

            {/* Email */}
            <p>
              Email: <a
                href="mailto:contato@lauraneuroped.com.br"
                itemProp="email"
                aria-label="Email da Dra. Laura Thiersch"
                title="Envie um email para a Dra. Laura Thiersch"
                
                rel="noopener noreferrer"
                onClick={() => handleFooterClick('email', 'Email_Footer')} // Rastreamento GA4
              >
                contato@lauraneuroped.com.br
              </a>
            </p>

            {/* Endereço Físico (Schema.org: PostalAddress) */}
            <p
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              Endereço:
              <span itemProp="streetAddress">Rua Turquesa, 347</span>,
              <span itemProp="addressLocality"> Prado</span>,
              <span itemProp="addressRegion"> Belo Horizonte</span> <span itemProp="addressRegion"> MG</span>,
              <span itemProp="postalCode"> 30411-177</span>
              {/* Sugestão de CEP para Belo Horizonte - Sion */}
            </p>
            {/* Adicionar um link para o Google Maps para SEO local */}
            <p>
              <a
                href="https://g.co/kgs/tWPeVGb"
                
                rel="noopener noreferrer"
                aria-label="Ver endereço da Dra. Laura Thiersch no Google Maps"
                title="Localização da clínica Dra. Laura Thiersch no Google Maps"
                itemProp="hasMap"
              >
                Ver no Mapa
              </a>
            </p>
          </div>

          {/* Seção de Redes Sociais (Schema.org: sameAs) */}
          <div className="footer-social">
            <h4 className="footer-title">Redes Sociais e Perfil Profissional</h4>
            <nav className="social-links" aria-label="Redes Sociais da Dra. Laura Thiersch">
              <a
                href="https://wa.me/5531995626630"
                
                rel="noopener noreferrer"
                aria-label="WhatsApp da Dra. Laura Thiersch"
                title="Entre em contato via WhatsApp com a Dra. Laura Thiersch Neuropediatra"
                itemProp="sameAs" // Indica que é o mesmo que (para social media)
                onClick={() => handleFooterClick('whatsapp', 'WhatsApp_Footer')} // Rastreamento GA4
              >
                WhatsApp
              </a>
              <a
                href="https://instagram.com/lauraneuroped/"
                
                rel="noopener noreferrer"
                aria-label="Instagram da Dra. Laura Thiersch"
                title="Siga a Dra. Laura Thiersch no Instagram"
                itemProp="sameAs"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/lauraneuroped/"
                
                rel="noopener noreferrer"
                aria-label="Facebook da Dra. Laura Thiersch"
                title="Siga a Dra. Laura Thiersch no Facebook"
                itemProp="sameAs"
              >
                Facebook
              </a>
              <a
                href="https://www.doctoralia.com.br/laura-maria-silva-thiersch/neurologista-pediatrico/belo-horizonte"
                
                rel="noopener noreferrer"
                aria-label="Perfil da Dra. Laura Thiersch no Doctoralia"
                title="Veja o perfil da Dra. Laura Thiersch no Doctoralia"
                itemProp="sameAs"
              >
                Doctoralia
              </a>
            </nav>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Dra. Laura Thiersch - Neuropediatra. Todos os direitos reservados.</p>
          <nav className="footer-links" aria-label="Links Legais do Rodapé">
            <Link
              to="/politica-de-privacidade"
              aria-label="Política de Privacidade"
              title="Leia nossa Política de Privacidade"
            >
              Política de Privacidade
            </Link>
            <Link
              to="/termos-de-uso"
              aria-label="Termos de Uso"
              title="Leia nossos Termos de Uso"
            >
              Termos de Uso
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
