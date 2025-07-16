import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../../siteConfig';
import './breadcrumbs.css';

interface BreadcrumbItem {
  label: string;
  path: string;
  isCurrent?: boolean;
}

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  
  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    
    const breadcrumbs: BreadcrumbItem[] = [
      {
        label: 'Home',
        path: '/',
        isCurrent: location.pathname === '/'
      }
    ];

    if (pathSegments.length > 0) {
      const pageMap: { [key: string]: string } = {
        'sobre': 'Sobre a Dra. Laura Thiersch',
        'sobre-dra-laura-thiersch': 'Sobre a Dra. Laura Thiersch',
        'atendimentos': 'Atendimentos em Neuropediatria',
        'atendimentos-neuropediatria': 'Atendimentos em Neuropediatria',
        'contato': 'Contato e Agendamento',
        'contato-agendamento': 'Contato e Agendamento',
        'neuropediatra-belo-horizonte': 'Neuropediatra em Belo Horizonte',
        'neurologista-infantil-bh': 'Neurologista Infantil BH'
      };

      pathSegments.forEach((segment, index) => {
        const path = '/' + pathSegments.slice(0, index + 1).join('/');
        const label = pageMap[segment] || segment;
        
        breadcrumbs.push({
          label,
          path,
          isCurrent: index === pathSegments.length - 1
        });
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  // Schema.org markup para breadcrumbs
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `${siteConfig.baseUrl}${item.path}`
    }))
  };

  return (
    <nav 
      className="breadcrumbs" 
      aria-label="Navegação breadcrumb"
      itemScope 
      itemType="https://schema.org/BreadcrumbList"
    >
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
      
      <ol className="breadcrumbs-list">
        {breadcrumbs.map((item, index) => (
          <li 
            key={item.path}
            className={`breadcrumb-item ${item.isCurrent ? 'current' : ''}`}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {item.isCurrent ? (
              <span itemProp="name">{item.label}</span>
            ) : (
              <Link 
                to={item.path}
                itemProp="item"
                aria-label={`Ir para ${item.label}`}
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            )}
            <meta itemProp="position" content={(index + 1).toString()} />
            {index < breadcrumbs.length - 1 && (
              <span className="breadcrumb-separator" aria-hidden="true">
                {' > '}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs; 