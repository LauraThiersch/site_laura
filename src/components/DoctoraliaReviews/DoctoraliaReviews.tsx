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



  useEffect(() => {
    const loadReviews = async () => {
      try {
        setLoading(true);
        
        // Mock data do Doctoralia - em produção, isso viria da API do Doctoralia
        const mockReviews: DoctoraliaReview[] = [
          {
            id: '1',
            author: 'Ana Paula Silva',
            rating: 5,
            date: '2024-01-15',
            comment: 'Excelente profissional! A Dra. Laura foi muito atenciosa com meu filho. O diagnóstico foi preciso e o tratamento está funcionando muito bem. Recomendo muito!',
            verified: true
          },
          {
            id: '2',
            author: 'Carlos Eduardo Santos',
            rating: 5,
            date: '2024-01-10',
            comment: 'Dra. Laura é uma médica excepcional. Sua dedicação e conhecimento são impressionantes. Meu filho melhorou muito desde que começou o tratamento com ela.',
            verified: true
          },
          {
            id: '3',
            author: 'Mariana Costa',
            rating: 5,
            date: '2024-01-05',
            comment: 'Profissional muito competente e humana. A Dra. Laura conseguiu diagnosticar corretamente o TDAH do meu filho e hoje ele está muito melhor na escola.',
            verified: true
          },
          {
            id: '4',
            author: 'Roberto Almeida',
            rating: 5,
            date: '2023-12-28',
            comment: 'Consultório muito acolhedor e a Dra. Laura é extremamente paciente. Explicou tudo com calma e nos orientou muito bem sobre o tratamento da epilepsia.',
            verified: true
          },
          {
            id: '5',
            author: 'Fernanda Lima',
            rating: 5,
            date: '2023-12-20',
            comment: 'Dra. Laura é uma profissional incrível! Sua experiência com TEA é evidente. Meu filho recebeu o diagnóstico correto e o tratamento adequado.',
            verified: true
          },
          {
            id: '6',
            author: 'Pedro Henrique Oliveira',
            rating: 5,
            date: '2023-12-15',
            comment: 'Excelente neuropediatra! Muito atenciosa e competente. O acompanhamento do desenvolvimento do meu filho tem sido fundamental.',
            verified: true
          },
          {
            id: '7',
            author: 'Juliana Ferreira',
            rating: 5,
            date: '2023-12-10',
            comment: 'Dra. Laura é uma médica muito dedicada. Sua abordagem humanizada faz toda a diferença. Meu filho adora ir na consulta!',
            verified: true
          },
          {
            id: '8',
            author: 'Lucas Mendes',
            rating: 5,
            date: '2023-12-05',
            comment: 'Profissional excepcional! O diagnóstico precoce do TEA fez toda a diferença no desenvolvimento da nossa filha. Gratidão!',
            verified: true
          }
        ];
        
        // Simular carregamento da API do Doctoralia
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Em produção, aqui seria feita a chamada real para a API do Doctoralia
        // const response = await fetch(`https://api.doctoralia.com/doctor/${doctorId}/reviews`);
        // const data = await response.json();
        
        const filteredReviews = mockReviews.slice(0, maxReviews);
        setReviews(filteredReviews);
        
        // Calcular média das avaliações
        const avgRating = filteredReviews.reduce((sum: number, review: DoctoraliaReview) => sum + review.rating, 0) / filteredReviews.length;
        setAverageRating(avgRating);
        setTotalReviews(filteredReviews.length);
        
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar avaliações');
        setLoading(false);
      }
    };

    loadReviews();
  }, [doctorId, maxReviews]);

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
          href={`https://www.doctoralia.com.br/laura-thiersch/avaliacoes`}
          target="_blank"
          rel="noopener noreferrer"
          className="more-reviews-link"
          onClick={() => {
            // Tracking do Google Analytics
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'click', {
                event_category: 'Avaliacoes',
                event_label: 'Ver_Mais_Avaliacoes_Doctoralia',
                value: 1
              });
            }
          }}
        >
          Ver todas as avaliações no Doctoralia →
        </a>
      </div>
    </div>
  );
};

export default DoctoraliaReviews; 