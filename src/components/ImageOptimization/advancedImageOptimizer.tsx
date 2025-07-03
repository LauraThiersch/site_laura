import React, { useState, useEffect } from 'react';

interface AdvancedImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
}

const AdvancedImageOptimizer: React.FC<AdvancedImageOptimizerProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  placeholder
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isInView, setIsInView] = useState(priority);

  // Converter para WebP se suportado
  const getWebPSrc = (originalSrc: string) => {
    if (originalSrc.includes('.webp')) return originalSrc;
    
    const webpSrc = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    return webpSrc;
  };

  // Gerar srcset para diferentes tamanhos
  const generateSrcSet = (originalSrc: string) => {
    const sizes = [320, 640, 768, 1024, 1280, 1920];
    const webpSrc = getWebPSrc(originalSrc);
    
    return sizes
      .map(size => `${webpSrc}?w=${size} ${size}w`)
      .join(', ');
  };

  // Intersection Observer para lazy loading
  useEffect(() => {
    if (priority) return; // Não usar lazy loading para imagens prioritárias

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px 0px', // Carregar 50px antes da imagem entrar na viewport
        threshold: 0.1
      }
    );

    const imgElement = document.querySelector(`[data-src="${src}"]`);
    if (imgElement) {
      observer.observe(imgElement);
    }

    return () => {
      if (imgElement) {
        observer.unobserve(imgElement);
      }
    };
  }, [src, priority]);

  // Detectar suporte a WebP
  const [supportsWebP, setSupportsWebP] = useState(false);

  useEffect(() => {
    const checkWebPSupport = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const dataURL = canvas.toDataURL('image/webp');
        setSupportsWebP(dataURL.indexOf('data:image/webp') === 0);
      }
    };

    checkWebPSupport();
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  // Determinar a fonte da imagem
  const getImageSource = () => {
    if (!isInView && !priority) {
      return placeholder || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjI0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+';
    }

    if (supportsWebP) {
      return getWebPSrc(src);
    }

    return src;
  };

  const imageStyle: React.CSSProperties = {
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : 'auto',
    objectFit: 'cover',
    transition: 'opacity 0.3s ease-in-out',
    opacity: imageLoaded ? 1 : 0,
  };

  return (
    <div className={`advanced-image-container ${className}`}>
      <img
        src={getImageSource()}
        alt={alt}
        className={`advanced-image ${imageLoaded ? 'loaded' : 'loading'}`}
        style={imageStyle}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={handleImageLoad}
        onError={handleImageError}
        data-src={src}
        srcSet={isInView || priority ? generateSrcSet(src) : undefined}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      
      {/* Placeholder enquanto carrega */}
      {!imageLoaded && !priority && (
        <div 
          className="image-placeholder"
          style={{
            width: width ? `${width}px` : '100%',
            height: height ? `${height}px` : '200px',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        </div>
      )}

      {/* Fallback para erro */}
      {imageError && (
        <div 
          className="image-error"
          style={{
            width: width ? `${width}px` : '100%',
            height: height ? `${height}px` : '200px',
            backgroundColor: '#f8f8f8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #ddd',
            color: '#666',
            fontSize: '14px',
          }}
        >
          Imagem não disponível
        </div>
      )}

      <style dangerouslySetInnerHTML={{
        __html: `
          .advanced-image-container {
            position: relative;
            overflow: hidden;
          }

          .advanced-image {
            display: block;
            max-width: 100%;
            height: auto;
          }

          .advanced-image.loading {
            opacity: 0;
          }

          .advanced-image.loaded {
            opacity: 1;
          }

          .loading-spinner {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .spinner {
            width: 20px;
            height: 20px;
            border: 2px solid #f3f3f3;
            border-top: 2px solid #3498db;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .image-placeholder {
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;
          }

          @keyframes loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `
      }} />
    </div>
  );
};

export default AdvancedImageOptimizer; 