import React from 'react';
import { Link } from 'react-router-dom';
import './blogSidebar.css';
import Newsletter from '../Newsletter/newsletter';
import SocialShare from '../SocialShare/socialShare';

// Interface para o artigo
interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'TEA' | 'TDAH' | 'Epilepsia' | 'Desenvolvimento' | 'Dicas' | 'Geral';
  tags: string[];
  author: string;
  publishDate: string;
  readTime: number;
  image: string;
  slug: string;
  featured?: boolean;
}

interface BlogSidebarProps {
  articles: BlogArticle[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({ 
  articles, 
  selectedCategory, 
  onCategoryChange 
}) => {
  // Contar artigos por categoria
  const getCategoryCount = (category: string) => {
    return articles.filter(article => article.category === category).length;
  };

  // Obter artigos mais populares (baseado em featured e data)
  const getPopularArticles = () => {
    return articles
      .sort((a, b) => {
        // Priorizar artigos em destaque
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        // Depois ordenar por data (mais recentes primeiro)
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      })
      .slice(0, 5);
  };

  // Obter tags mais populares
  const getPopularTags = () => {
    const tagCount: { [key: string]: number } = {};
    
    articles.forEach(article => {
      article.tags.forEach(tag => {
        tagCount[tag] = (tagCount[tag] || 0) + 1;
      });
    });

    return Object.entries(tagCount)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .map(([tag]) => tag);
  };

  // Formatar data
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit'
    });
  };

  const popularArticles = getPopularArticles();
  const popularTags = getPopularTags();

  return (
    <aside className="blog-sidebar">
      {/* Busca Rápida */}
      <div className="sidebar-widget search-widget">
        <h3 className="widget-title">
          <span className="widget-icon">🔍</span>
          Busca Rápida
        </h3>
        <div className="quick-search">
          <input
            type="text"
            placeholder="Digite sua busca..."
            className="quick-search-input"
          />
          <button className="quick-search-btn">
            <span>Buscar</span>
          </button>
        </div>
      </div>

      {/* Categorias */}
      <div className="sidebar-widget categories-widget">
        <h3 className="widget-title">
          <span className="widget-icon">📂</span>
          Categorias
        </h3>
        <ul className="categories-list">
          <li>
            <button
              className={`category-item ${selectedCategory === 'Todos' ? 'active' : ''}`}
              onClick={() => onCategoryChange('Todos')}
            >
              <span className="category-icon">📄</span>
              <span className="category-name">Todos os Artigos</span>
              <span className="category-count">({articles.length})</span>
            </button>
          </li>
          <li>
            <button
              className={`category-item ${selectedCategory === 'TEA' ? 'active' : ''}`}
              onClick={() => onCategoryChange('TEA')}
            >
              <span className="category-icon">🧩</span>
              <span className="category-name">TEA</span>
              <span className="category-count">({getCategoryCount('TEA')})</span>
            </button>
          </li>
          <li>
            <button
              className={`category-item ${selectedCategory === 'TDAH' ? 'active' : ''}`}
              onClick={() => onCategoryChange('TDAH')}
            >
              <span className="category-icon">⚡</span>
              <span className="category-name">TDAH</span>
              <span className="category-count">({getCategoryCount('TDAH')})</span>
            </button>
          </li>
          <li>
            <button
              className={`category-item ${selectedCategory === 'Epilepsia' ? 'active' : ''}`}
              onClick={() => onCategoryChange('Epilepsia')}
            >
              <span className="category-icon">🧠</span>
              <span className="category-name">Epilepsia</span>
              <span className="category-count">({getCategoryCount('Epilepsia')})</span>
            </button>
          </li>
          <li>
            <button
              className={`category-item ${selectedCategory === 'Desenvolvimento' ? 'active' : ''}`}
              onClick={() => onCategoryChange('Desenvolvimento')}
            >
              <span className="category-icon">📈</span>
              <span className="category-name">Desenvolvimento</span>
              <span className="category-count">({getCategoryCount('Desenvolvimento')})</span>
            </button>
          </li>
          <li>
            <button
              className={`category-item ${selectedCategory === 'Dicas' ? 'active' : ''}`}
              onClick={() => onCategoryChange('Dicas')}
            >
              <span className="category-icon">💡</span>
              <span className="category-name">Dicas</span>
              <span className="category-count">({getCategoryCount('Dicas')})</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Artigos Populares */}
      <div className="sidebar-widget popular-widget">
        <h3 className="widget-title">
          <span className="widget-icon">⭐</span>
          Artigos Populares
        </h3>
        <ul className="popular-articles-list">
          {popularArticles.map(article => (
            <li key={article.id} className="popular-article">
              <Link to={`/blog/${article.slug}`} className="popular-article-link">
                <div className="popular-article-image">
                  <img
                    src={article.image || '/images/blog/default-article.jpg'}
                    alt={article.title}
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/blog/default-article.jpg';
                    }}
                  />
                </div>
                <div className="popular-article-content">
                  <h4 className="popular-article-title">{article.title}</h4>
                  <div className="popular-article-meta">
                    <span className="popular-article-date">{formatDate(article.publishDate)}</span>
                    <span className="popular-article-category">{article.category}</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags Populares */}
      <div className="sidebar-widget tags-widget">
        <h3 className="widget-title">
          <span className="widget-icon">🏷️</span>
          Tags Populares
        </h3>
        <div className="tags-cloud">
          {popularTags.map((tag, index) => (
            <Link
              key={index}
              to={`/blog?tag=${encodeURIComponent(tag)}`}
              className="tag-item"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Sidebar */}
      <div className="sidebar-widget cta-widget">
        <h3 className="widget-title">
          <span className="widget-icon">👩‍⚕️</span>
          Precisa de Ajuda?
        </h3>
        <div className="cta-content">
          <p>
            Se você identificou sinais de TEA, TDAH ou epilepsia em seu filho, 
            agende uma consulta para avaliação especializada.
          </p>
          <div className="cta-buttons">
            <Link to="/contato" className="cta-btn primary">
              Agendar Consulta
            </Link>
            <a 
              href="https://wa.me/5531985486226" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-btn secondary"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="sidebar-widget newsletter-widget">
        <h3 className="widget-title">
          <span className="widget-icon">📧</span>
          Receba Novidades
        </h3>
        <Newsletter />
      </div>

      {/* Social Share */}
      <div className="sidebar-widget socialshare-widget">
        <SocialShare />
      </div>
    </aside>
  );
};

export default BlogSidebar; 