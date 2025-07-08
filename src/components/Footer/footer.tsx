import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

// DECLARAÇÃO GLOBAL PARA GTAG (PARA EVITAR ERROS DE TIPAGEM)
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Componente de ícone SVG para redes sociais
const SocialIcon: React.FC<{
  href: string;
  ariaLabel: string;
  title: string;
  icon: React.ReactNode;
  onClick?: () => void;
}> = ({ href, ariaLabel, title, icon, onClick }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    title={title}
    itemProp="sameAs"
    onClick={onClick}
    className="social-icon-link"
  >
    {icon}
  </a>
);

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

  // Ícones SVG para redes sociais
  const socialIcons = {
    whatsapp: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
      </svg>
    ),
    instagram: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    facebook: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    doctoralia: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
        <path d="M12 10c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S12.83 10 12 10z"/>
      </svg>
    )
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
              <span itemProp="addressLocality"> Belo Horizonte</span>,
              <span itemProp="addressRegion"> MG</span>,
              <span itemProp="postalCode"> 30180-000</span>
              {/* Sugestão de CEP para Belo Horizonte - Sion */}
            </p>
            {/* Adicionar um link para o Google Maps para SEO local */}
            <p>
              <a
                href="https://maps.google.com/?q=Rua+Grão+Mogol,+Belo+Horizonte,+MG"
                
                rel="noopener noreferrer"
                aria-label="Ver endereço da Dra. Laura Thiersch no Google Maps"
                title="Localização da clínica Dra. Laura Thiersch no Google Maps"
                itemProp="hasMap"
              >
                Ver no Mapa
              </a>
            </p>
          </div>

          {/* Seção de Redes Sociais com Ícones (Schema.org: sameAs) */}
          <div className="footer-social">
            <h4 className="footer-title">Redes Sociais</h4>
            <nav className="social-links" aria-label="Redes Sociais da Dra. Laura Thiersch">
              <SocialIcon
                href="https://wa.me/5531995626630"
                ariaLabel="WhatsApp da Dra. Laura Thiersch"
                title="Entre em contato via WhatsApp com a Dra. Laura Thiersch Neuropediatra"
                icon={socialIcons.whatsapp}
                onClick={() => handleFooterClick('whatsapp', 'WhatsApp_Footer')}
              />
              <SocialIcon
                href="https://instagram.com/lauraneuroped/"
                ariaLabel="Instagram da Dra. Laura Thiersch"
                title="Siga a Dra. Laura Thiersch no Instagram"
                icon={socialIcons.instagram}
              />
              <SocialIcon
                href="https://www.facebook.com/lauraneuroped/"
                ariaLabel="Facebook da Dra. Laura Thiersch"
                title="Siga a Dra. Laura Thiersch no Facebook"
                icon={socialIcons.facebook}
              />
              <SocialIcon
                href="https://www.doctoralia.com.br/laura-maria-silva-thiersch/neurologista-pediatrico/belo-horizonte"
                ariaLabel="Perfil da Dra. Laura Thiersch no Doctoralia"
                title="Veja o perfil da Dra. Laura Thiersch no Doctoralia"
                icon={socialIcons.doctoralia}
              />
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
