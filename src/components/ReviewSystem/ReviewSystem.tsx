import React, { useState } from 'react';
import './reviewSystem.css';

interface ReviewFormData {
  name: string;
  email: string;
  rating: number;
  comment: string;
  childAge: string;
  specialty: string;
  consent: boolean;
}

interface ReviewFormErrors {
  name?: string;
  email?: string;
  rating?: string;
  comment?: string;
  childAge?: string;
  specialty?: string;
  consent?: string;
}

interface ReviewSystemProps {
  onSubmit?: (data: ReviewFormData) => void;
  className?: string;
}

const ReviewSystem: React.FC<ReviewSystemProps> = ({
  onSubmit,
  className = ''
}) => {
  const [formData, setFormData] = useState<ReviewFormData>({
    name: '',
    email: '',
    rating: 0,
    comment: '',
    childAge: '',
    specialty: '',
    consent: false
  });
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<ReviewFormErrors>({});

  const specialties = [
    'TEA (Autismo)',
    'TDAH',
    'Epilepsia',
    'Atraso no Desenvolvimento',
    'Outros'
  ];

  const ageRanges = [
    '0-2 anos',
    '3-5 anos',
    '6-8 anos',
    '9-12 anos',
    '13-18 anos'
  ];

  const validateForm = (): boolean => {
    const newErrors: ReviewFormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    if (formData.rating === 0) {
      newErrors.rating = 'Avaliação é obrigatória';
    }

    if (!formData.comment.trim()) {
      newErrors.comment = 'Comentário é obrigatório';
    } else if (formData.comment.length < 10) {
      newErrors.comment = 'Comentário deve ter pelo menos 10 caracteres';
    }

    if (!formData.childAge) {
      newErrors.childAge = 'Idade da criança é obrigatória';
    }

    if (!formData.specialty) {
      newErrors.specialty = 'Especialidade é obrigatória';
    }

    if (!formData.consent) {
      newErrors.consent = 'É necessário concordar com os termos';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simular envio para API
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Tracking do Analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'submit_review', {
          event_category: 'Avaliacoes',
          event_label: 'Avaliacao_Propria_Site',
          value: formData.rating
        });
      }

      // Chamar callback se fornecido
      if (onSubmit) {
        onSubmit(formData);
      }

      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        rating: 0,
        comment: '',
        childAge: '',
        specialty: '',
        consent: false
      });

      // Esconder mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);

    } catch (error) {
      console.error('Erro ao enviar avaliação:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof ReviewFormData, value: string | number | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Limpar erro do campo quando usuário começa a digitar
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  const renderStars = (rating: number, interactive = false) => {
    return (
      <div className="stars-container">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className={`star-button ${star <= rating ? 'filled' : 'empty'}`}
            onClick={() => interactive && handleInputChange('rating', star)}
            onMouseEnter={() => interactive && setHoveredRating(star)}
            onMouseLeave={() => interactive && setHoveredRating(0)}
            disabled={!interactive}
            aria-label={`${star} estrela${star > 1 ? 's' : ''}`}
          >
            ★
          </button>
        ))}
      </div>
    );
  };

  if (submitSuccess) {
    return (
      <div className={`review-system success ${className}`}>
        <div className="success-message">
          <div className="success-icon">✓</div>
          <h3>Obrigado pela sua avaliação!</h3>
          <p>Sua avaliação foi enviada com sucesso e será revisada antes de ser publicada.</p>
          <button 
            type="button" 
            className="new-review-btn"
            onClick={() => setSubmitSuccess(false)}
          >
            Enviar Nova Avaliação
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`review-system ${className}`}>
      <div className="review-header">
        <h2>Deixe sua Avaliação</h2>
        <p>Compartilhe sua experiência com a Dra. Laura Thiersch</p>
      </div>

      <form onSubmit={handleSubmit} className="review-form">
        {/* Informações pessoais */}
        <div className="form-section">
          <h3>Informações Pessoais</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Nome completo *</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={errors.name ? 'error' : ''}
                placeholder="Seu nome completo"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail *</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={errors.email ? 'error' : ''}
                placeholder="seu@email.com"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
          </div>
        </div>

        {/* Informações da consulta */}
        <div className="form-section">
          <h3>Informações da Consulta</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="childAge">Idade da criança *</label>
              <select
                id="childAge"
                value={formData.childAge}
                onChange={(e) => handleInputChange('childAge', e.target.value)}
                className={errors.childAge ? 'error' : ''}
              >
                <option value="">Selecione a idade</option>
                {ageRanges.map(age => (
                  <option key={age} value={age}>{age}</option>
                ))}
              </select>
              {errors.childAge && <span className="error-message">{errors.childAge}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="specialty">Especialidade *</label>
              <select
                id="specialty"
                value={formData.specialty}
                onChange={(e) => handleInputChange('specialty', e.target.value)}
                className={errors.specialty ? 'error' : ''}
              >
                <option value="">Selecione a especialidade</option>
                {specialties.map(specialty => (
                  <option key={specialty} value={specialty}>{specialty}</option>
                ))}
              </select>
              {errors.specialty && <span className="error-message">{errors.specialty}</span>}
            </div>
          </div>
        </div>

        {/* Avaliação */}
        <div className="form-section">
          <h3>Sua Avaliação</h3>
          <div className="rating-section">
            <label>Avaliação *</label>
            <div className="rating-container">
              {renderStars(hoveredRating || formData.rating, true)}
              <span className="rating-text">
                {formData.rating > 0 ? `${formData.rating} estrela${formData.rating > 1 ? 's' : ''}` : 'Clique para avaliar'}
              </span>
            </div>
            {errors.rating && <span className="error-message">{errors.rating}</span>}
          </div>
        </div>

        {/* Comentário */}
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="comment">Comentário *</label>
            <textarea
              id="comment"
              value={formData.comment}
              onChange={(e) => handleInputChange('comment', e.target.value)}
              className={errors.comment ? 'error' : ''}
              placeholder="Compartilhe sua experiência com a Dra. Laura Thiersch..."
              rows={4}
            />
            <div className="char-count">
              {formData.comment.length}/500 caracteres
            </div>
            {errors.comment && <span className="error-message">{errors.comment}</span>}
          </div>
        </div>

        {/* Consentimento */}
        <div className="form-section">
          <div className="consent-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(e) => handleInputChange('consent', e.target.checked)}
                className={errors.consent ? 'error' : ''}
              />
              <span className="checkmark"></span>
              Concordo em compartilhar minha avaliação publicamente no site da Dra. Laura Thiersch *
            </label>
            {errors.consent && <span className="error-message">{errors.consent}</span>}
          </div>
        </div>

        {/* Botão de envio */}
        <div className="form-actions">
          <button
            type="submit"
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="spinner"></div>
                Enviando...
              </>
            ) : (
              'Enviar Avaliação'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewSystem; 