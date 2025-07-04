import React from 'react';
import { Link } from 'react-router-dom';
import './blogCard.css';

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

interface BlogCardProps {
  article: BlogArticle;
}

const BlogCard: React.FC<BlogCardProps> = ({ article }) => {
  // Formatar data
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  // Obter cor da categoria
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'TEA':
        return '#FF6B6B';
      case 'TDAH':
        return '#4ECDC4';
      case 'Epilepsia':
        return '#45B7D1';
      case 'Desenvolvimento':
        return '#96CEB4';
      case 'Dicas':
        return '#FFEAA7';
      case 'Geral':
        return '#DDA0DD';
      default:
        return '#97A478';
    }
  };

  // Obter ícone da categoria
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'TEA':
        return '🧩';
      case 'TDAH':
        return '⚡';
      case 'Epilepsia':
        return '🧠';
      case 'Desenvolvimento':
        return '📈';
      case 'Dicas':
        return '💡';
      case 'Geral':
        return '📋';
      default:
        return '📄';
    }
  };

  return (
    <article className={`blog-card ${article.featured ? 'featured' : ''}`}>
      {/* Imagem do Artigo */}
      <div className="blog-card-image">
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            // Só troca para a imagem padrão se ainda não for ela
            if (!target.src.includes('default-article.jpg')) {
              target.src = '/images/blog/default-article.jpg';
            }
          }}
        />
        {article.featured && (
          <div className="featured-badge">
            <span>⭐ Destaque</span>
          </div>
        )}
      </div>

      {/* Conteúdo do Card */}
      <div className="blog-card-content">
        {/* Categoria */}
        <div className="blog-card-category">
          <span 
            className="category-icon"
            style={{ backgroundColor: getCategoryColor(article.category) }}
          >
            {getCategoryIcon(article.category)}
          </span>
          <span className="category-name">{article.category}</span>
        </div>

        {/* Título */}
        <h3 className="blog-card-title">
          <Link to={`/blog/${article.slug}`}>
            {article.title}
          </Link>
        </h3>

        {/* Resumo */}
        <p className="blog-card-excerpt">
          {article.excerpt}
        </p>

        {/* Tags */}
        <div className="blog-card-tags">
          {article.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="tag">
              #{tag}
            </span>
          ))}
          {article.tags.length > 3 && (
            <span className="tag-more">
              +{article.tags.length - 3} mais
            </span>
          )}
        </div>

        {/* Meta Informações */}
        <div className="blog-card-meta">
          <div className="meta-left">
            <span className="author">
              <span className="author-icon">👩‍⚕️</span>
              {article.author}
            </span>
            <span className="publish-date">
              <span className="date-icon">📅</span>
              {formatDate(article.publishDate)}
            </span>
          </div>
          <div className="meta-right">
            <span className="read-time">
              <span className="time-icon">⏱️</span>
              {article.readTime} min
            </span>
          </div>
        </div>

        {/* Botão Ler Mais */}
        <div className="blog-card-action">
          <Link to={`/blog/${article.slug}`} className="read-more-btn">
            Ler Artigo Completo
            <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard; 