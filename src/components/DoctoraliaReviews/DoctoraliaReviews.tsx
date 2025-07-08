import React, { useEffect, useState } from 'react';
import './doctoraliaReviews.css';

interface DoctoraliaReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

interface DoctoraliaReviewsProps {
  doctorId?: string;
  maxReviews?: number;
  showRating?: boolean;
  showDate?: boolean;
  className?: string;
}

const DoctoraliaReviews: React.FC<DoctoraliaReviewsProps> = ({
  doctorId = 'laura-thiersch',
  maxReviews = 6,
  showRating = true,
  showDate = true,
  className = ''
}) => {
  const [reviews, setReviews] = useState<DoctoraliaReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);

  const realReviews: DoctoraliaReview[] = [
    {
      id: '1',
      author: 'Najla',
      rating: 5,
      date: '2024-10-22',
      comment: 'A Dra Laura é maravilhosa. Super atenciosa, detalhista e disponível!',
      verified: true
    },
    {
      id: '2',
      author: 'Raphaela Silva',
      rating: 5,
      date: '2024-10-22',
      comment: 'Gostei do atendimento prestado ao meu filho. A Dra Laura foi atenciosa, explicou as dúvidas que surgiram e foi carinhosa com o paciente.',
      verified: true
    },
    {
      id: '3',
      author: 'Fábio A. Luiz',
      rating: 5,
      date: '2024-09-24',
      comment: 'Bom atendimento, esclarecedor e muito produtivo. Respondendo todas as questões que tínhamos quanto ao tratamento e evolução do nosso filho. Parabéns.',
      verified: true
    },
    {
      id: '4',
      author: 'Paula B. K.',
      rating: 5,
      date: '2025-03-28',
      comment: 'Excelente! Cuidadosa, atenciosa, amamos o atendimento',
      verified: true
    },
    {
      id: '5',
      author: 'DR',
      rating: 5,
      date: '2024-10-22',
      comment: 'Ótima médica. Atenciosa, atenta aos detalhes. Faz a consulta sem pressa.',
      verified: true
    },
    {
      id: '6',
      author: 'Adilson pai do PEDRO',
      rating: 5,
      date: '2024-10-09',
      comment: 'Excelente profissional, atendimento com explicações de entendimento fácil',
      verified: true
    },
    {
      id: '7',
      author: 'Kathelen',
      rating: 5,
      date: '2024-09-10',
      comment: 'Excelente profissional,super atenciosa ,educada .Tirou todas as minhas dúvidas',
      verified: true
    },
    {
      id: '8',
      author: 'Sarah',
      rating: 5,
      date: '2024-09-03',
      comment: 'Nossa primeira impressão da Dra. Laura foi ótima. Eu e minha filha nos sentimos à vontade e acolhidas. Grandes expectativas em alcançar bons resultados com o auxílio da Dra.',
      verified: true
    },
  ];

  useEffect(() => {
    setLoading(true);
    const filteredReviews = realReviews.slice(0, maxReviews);
    setReviews(filteredReviews);
    const avgRating = filteredReviews.reduce((sum, review) => sum + review.rating, 0) / filteredReviews.length;
    setAverageRating(avgRating);
    setTotalReviews(filteredReviews.length);
    setLoading(false);
  }, [maxReviews]);

  const renderStars = (rating: number) => {
    return (
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= rating ? 'filled' : 'empty'}`}
            aria-label={`${star} estrela${star > 1 ? 's' : ''}`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className={`doctoralia-reviews loading ${className}`}>
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Carregando avaliações...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`doctoralia-reviews error ${className}`}>
        <p>Não foi possível carregar as avaliações no momento.</p>
      </div>
    );
  }

  return (
    <div className={`doctoralia-reviews ${className}`}>
      {/* Header com média das avaliações */}
      <div className="reviews-header">
        <div className="average-rating">
          <div className="rating-number">{averageRating.toFixed(1)}</div>
          <div className="rating-stars">
            {renderStars(Math.round(averageRating))}
          </div>
          <div className="rating-text">
            <span className="total-reviews">{totalReviews} avaliações</span>
            <span className="verified-badge">✓ Verificadas</span>
          </div>
        </div>
        <div className="doctoralia-badge">
          <img 
            src="https://www.doctoralia.com.br/favicon.ico" 
            alt="Doctoralia" 
            width="16" 
            height="16"
          />
          <span>Avaliações do Doctoralia</span>
        </div>
      </div>

      {/* Lista de avaliações */}
      <div className="reviews-list">
        {reviews.map((review) => (
          <article key={review.id} className="review-item" itemScope itemType="https://schema.org/Review">
            <div className="review-header">
              <div className="review-author">
                <strong itemProp="author" itemScope itemType="https://schema.org/Person">
                  <span itemProp="name">{review.author}</span>
                </strong>
                {review.verified && (
                  <span className="verified-icon" title="Avaliação verificada">✓</span>
                )}
              </div>
              <div className="review-meta">
                {showRating && (
                  <div className="review-rating" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content={review.rating.toString()} />
                    <meta itemProp="bestRating" content="5" />
                    {renderStars(review.rating)}
                  </div>
                )}
                {showDate && (
                  <time className="review-date" itemProp="datePublished" dateTime={review.date}>
                    {formatDate(review.date)}
                  </time>
                )}
              </div>
            </div>
            <blockquote className="review-comment" itemProp="reviewBody">
              "{review.comment}"
            </blockquote>
          </article>
        ))}
      </div>

      {/* Link para mais avaliações no Doctoralia */}
      <div className="reviews-footer">
        <a 
          href="https://www.doctoralia.com.br/laura-maria-silva-thiersch/neurologista-pediatrico/belo-horizonte#opinions"
          target="_blank"
          rel="noopener noreferrer"
          className="more-reviews-link"
        >
          Ver todas as avaliações no Doctoralia
        </a>
      </div>
    </div>
  );
};

export default DoctoraliaReviews; 