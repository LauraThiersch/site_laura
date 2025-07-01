import React from 'react';
import './faq.css';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  // Utilizamos <details> e <summary> para máxima semântica e acessibilidade nativa.
  // O navegador lida automaticamente com o estado aberto/fechado e atributos ARIA.
  return (
    <details 
      className="faq-item" 
      itemScope // Indica que o elemento contém dados de um item
      itemProp="mainEntity" // Relaciona este elemento ao item principal do esquema FAQPage
      itemType="https://schema.org/Question" // Define este elemento como uma Pergunta no Schema.org
    >
      <summary className="faq-question" itemProp="name">
        <h3 className="faq-question-text">{question}</h3> {/* Título da pergunta */}
        {/* O ícone de expandir/colapsar é manipulado via CSS para <details> */}
        <span className="faq-icon" aria-hidden="true"></span> 
      </summary>
      
      <div 
        className="faq-answer" 
        itemScope // Indica que este elemento também contém dados de um item
        itemProp="acceptedAnswer" // Define que esta é a resposta aceita para a pergunta
        itemType="https://schema.org/Answer" // Define este elemento como uma Resposta no Schema.org
      >
        <p itemProp="text">{answer}</p> {/* Texto da resposta */}
      </div>
    </details>
  );
};

interface FAQProps {
  items: FAQItemProps[];
  title?: string;
}

const FAQ: React.FC<FAQProps> = ({ 
  items, 
  title = "Perguntas Frequentes sobre Neuropediatria em Belo Horizonte" // Título SEO-friendly por padrão
}) => {
  // Geração do Schema Markup JSON-LD para FAQPage: CRUCIAL para Rich Snippets no Google.
  // Isso ajuda o Google a exibir suas FAQs diretamente nos resultados de busca.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section 
      className="faq-section" 
      aria-labelledby="faq-section-title" // Associa a seção ao seu título para acessibilidade
      itemScope // Indica que a seção é um item para o Schema.org
      itemType="https://schema.org/WebPage" // Pode ser WebPage, Service, ou outro tipo relevante
    >
      {/* Script JSON-LD para o Schema Markup da FAQPage. Renderizado diretamente no HTML. */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <div className="container">
        <h2 id="faq-section-title" className="section-title">
          {title} {/* Título principal da seção */}
          {/* Subtítulo com palavras-chave específicas da Dra. Laura para SEO */}
          <span className="subtitle">Dra. Laura Thiersch - Especialista em TEA, TDAH e Epilepsia Infantil</span>
        </h2>
        <div className="faq-container">
          {items.map((item, index) => (
            <FAQItem 
              key={`faq-${index}`} // Chave única para renderização de listas
              question={item.question} 
              answer={item.answer} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
