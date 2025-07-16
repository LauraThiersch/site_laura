import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import BlogCard from '../../components/BlogCard/blogCard';
import BlogSidebar from '../../components/BlogSidebar/blogSidebar';
import AdvancedSchema from '../../components/SchemaOrg/advancedSchema';
import './blog.css';
import { siteConfig } from '../../siteConfig';

// Interface para os artigos do blog
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

const BlogPage: React.FC = () => {
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<BlogArticle[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const articlesPerPage = 6;

  const blogArticles = useMemo<BlogArticle[]>(() => [
    {
      id: '1',
      title: 'Sinais Precoces de TEA: O que Observar nos Primeiros Anos',
      excerpt: 'Descubra os sinais precoces do Transtorno do Espectro Autista que podem ser observados desde os primeiros meses de vida da criança.',
      content: 'Conteúdo completo do artigo...',
      category: 'TEA',
      tags: ['sinais TEA', 'autismo precoce', 'TEA sintomas', 'desenvolvimento infantil'],
      author: 'Dra. Laura Thiersch',
      publishDate: '2024-01-15',
      readTime: 8,
      image: '/images/blog/sinais-tea-precoce.jpg',
      slug: 'sinais-precoses-tea-observar',
      featured: true
    },
    {
      id: '2',
      title: 'Diagnóstico de TEA: Processo Completo e Abordagem Multidisciplinar',
      excerpt: 'Entenda como é realizado o diagnóstico do TEA, quais profissionais participam e como a família deve se preparar.',
      content: 'Conteúdo completo do artigo...',
      category: 'TEA',
      tags: ['diagnóstico TEA', 'avaliação autismo', 'TEA BH', 'multidisciplinar'],
      author: 'Dra. Laura Thiersch',
      publishDate: '2024-01-10',
      readTime: 12,
      image: '/images/blog/diagnostico-tea-processo.jpg',
      slug: 'diagnostico-tea-processo-completo'
    },
    {
      id: '3',
      title: 'TDAH em Crianças: Sintomas e Diagnóstico por Idade',
      excerpt: 'Conheça os sintomas do TDAH em diferentes faixas etárias e quando procurar ajuda especializada.',
      content: 'Conteúdo completo do artigo...',
      category: 'TDAH',
      tags: ['TDAH sintomas', 'hiperatividade', 'déficit atenção', 'diagnóstico TDAH'],
      author: 'Dra. Laura Thiersch',
      publishDate: '2024-01-08',
      readTime: 10,
      image: '/images/blog/tdah-criancas-sintomas.jpg',
      slug: 'tdah-criancas-sintomas-diagnostico'
    },
    {
      id: '4',
      title: 'Tratamento do TDAH: Abordagens Eficazes e Individualizadas',
      excerpt: 'Descubra as diferentes opções de tratamento para TDAH, desde intervenções comportamentais até medicamentos.',
      content: 'Conteúdo completo do artigo...',
      category: 'TDAH',
      tags: ['tratamento TDAH', 'medicação TDAH', 'terapia TDAH', 'abordagem multimodal'],
      author: 'Dra. Laura Thiersch',
      publishDate: '2024-01-05',
      readTime: 15,
      image: '/images/blog/tratamento-tdah-abordagens.jpg',
      slug: 'tratamento-tdah-abordagens-eficazes'
    },
    {
      id: '5',
      title: 'Epilepsia Infantil: Primeiros Socorros e Segurança',
      excerpt: 'Aprenda como agir durante uma crise epiléptica e quais medidas de segurança adotar no dia a dia.',
      content: 'Conteúdo completo do artigo...',
      category: 'Epilepsia',
      tags: ['epilepsia infantil', 'crise convulsiva', 'primeiros socorros', 'segurança'],
      author: 'Dra. Laura Thiersch',
      publishDate: '2024-01-03',
      readTime: 9,
      image: '/images/blog/epilepsia-primeiros-socorros.jpg',
      slug: 'epilepsia-infantil-primeiros-socorros'
    },
    {
      id: '6',
      title: 'Tratamento da Epilepsia Infantil: Controle e Qualidade de Vida',
      excerpt: 'Conheça as opções de tratamento para epilepsia infantil e como garantir uma vida normal para a criança.',
      content: 'Conteúdo completo do artigo...',
      category: 'Epilepsia',
      tags: ['tratamento epilepsia', 'medicação antiepiléptica', 'controle crises', 'qualidade vida'],
      author: 'Dra. Laura Thiersch',
      publishDate: '2024-01-01',
      readTime: 11,
      image: '/images/blog/tratamento-epilepsia-controle.jpg',
      slug: 'tratamento-epilepsia-infantil-controle'
    },
    {
      id: '7',
      title: 'Atraso no Desenvolvimento: Quando Procurar Ajuda Especializada',
      excerpt: 'Saiba identificar sinais de atraso no desenvolvimento e quando é necessário buscar avaliação médica.',
      content: 'Conteúdo completo do artigo...',
      category: 'Desenvolvimento',
      tags: ['atraso desenvolvimento', 'marco desenvolvimento', 'avaliação infantil', 'neuropediatra'],
      author: 'Dra. Laura Thiersch',
      publishDate: '2023-12-28',
      readTime: 7,
      image: '/images/blog/atraso-desenvolvimento-ajuda.jpg',
      slug: 'atraso-desenvolvimento-quando-procurar-ajuda'
    },
    {
      id: '8',
      title: 'Dificuldades Escolares: Causas Neurológicas e Abordagem',
      excerpt: 'Entenda como problemas neurológicos podem afetar o desempenho escolar e como identificar essas dificuldades.',
      content: 'Conteúdo completo do artigo...',
      category: 'Desenvolvimento',
      tags: ['dificuldades escolares', 'problemas aprendizagem', 'neurologia escolar', 'desempenho acadêmico'],
      author: 'Dra. Laura Thiersch',
      publishDate: '2023-12-25',
      readTime: 13,
      image: '/images/blog/dificuldades-escolares-causas.jpg',
      slug: 'dificuldades-escolares-causas-neurologicas'
    },
    {
      id: '9',
      title: 'Como Escolher um Neuropediatra: Dicas para Pais',
      excerpt: 'Orientações importantes para escolher o neuropediatra ideal para seu filho e o que considerar na seleção.',
      content: 'Conteúdo completo do artigo...',
      category: 'Dicas',
      tags: ['escolher neuropediatra', 'neuropediatra BH', 'especialista infantil', 'consulta neuropediatra'],
      author: 'Dra. Laura Thiersch',
      publishDate: '2023-12-22',
      readTime: 6,
      image: '/images/blog/escolher-neuropediatra-dicas.jpg',
      slug: 'como-escolher-neuropediatra-dicas-pais'
    },
    {
      id: '10',
      title: 'Preparando a Primeira Consulta: O que Levar e Como se Preparar',
      excerpt: 'Guia completo para preparar a primeira consulta com o neuropediatra e aproveitar ao máximo o atendimento.',
      content: 'Conteúdo completo do artigo...',
      category: 'Dicas',
      tags: ['primeira consulta', 'preparação consulta', 'neuropediatra', 'documentos consulta'],
      author: 'Dra. Laura Thiersch',
      publishDate: '2023-12-20',
      readTime: 8,
      image: '/images/blog/primeira-consulta-preparacao.jpg',
      slug: 'preparando-primeira-consulta-neuropediatra'
    }
  ], []);

  useEffect(() => {
    setArticles(blogArticles);
    setFilteredArticles(blogArticles);
  }, [blogArticles]);

  // Filtrar artigos por categoria e busca
  useEffect(() => {
    let filtered = articles;

    // Filtrar por categoria
    if (selectedCategory !== 'Todos') {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    // Filtrar por busca
    if (searchTerm) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredArticles(filtered);
    setCurrentPage(1);
  }, [selectedCategory, searchTerm, articles, blogArticles]);

  // Paginação
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Blog - Neuropediatria em BH | Dra. Laura Thiersch</title>
        <meta name="description" content="Artigos educativos sobre TEA, TDAH, Epilepsia e desenvolvimento infantil. Dra. Laura Thiersch, neuropediatra em Belo Horizonte." />
        <meta name="keywords" content="blog neuropediatria, TEA blog, TDAH blog, epilepsia infantil blog, desenvolvimento infantil, Dra. Laura Thiersch" />
        <link rel="canonical" href={`${siteConfig.baseUrl}/blog`} />
      </Helmet>

      {/* Schema.org para Blog */}
      <AdvancedSchema pageType="blog" />

      <main className="blog-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <h1 style={{ color: '#222', textAlign: 'center', marginBottom: '0.5rem' }}>Blog Educativo</h1>
            <p style={{ color: '#222', textAlign: 'center', marginBottom: '2rem', fontSize: '1.15rem' }}>
              Artigos e informações sobre neuropediatria, desenvolvimento infantil, TEA, TDAH e epilepsia. Conhecimento para pais e cuidadores.
            </p>
          </div>
        </section>

        {/* Conteúdo Principal */}
        <section className="blog-content-section">
          <div className="container">
            <div className="blog-layout">
              {/* Coluna Principal */}
              <div className="blog-main">
                {/* Barra de Busca e Filtros */}
                <div className="blog-controls">
                  <div className="search-container">
                    <input
                      type="text"
                      placeholder="Buscar artigos..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="search-input"
                    />
                    <button className="search-button">
                      <span>🔍</span>
                    </button>
                  </div>
                  
                  <div className="category-filters">
                    <button
                      className={`category-btn ${selectedCategory === 'Todos' ? 'active' : ''}`}
                      onClick={() => setSelectedCategory('Todos')}
                    >
                      Todos
                    </button>
                    <button
                      className={`category-btn ${selectedCategory === 'TEA' ? 'active' : ''}`}
                      onClick={() => setSelectedCategory('TEA')}
                    >
                      TEA
                    </button>
                    <button
                      className={`category-btn ${selectedCategory === 'TDAH' ? 'active' : ''}`}
                      onClick={() => setSelectedCategory('TDAH')}
                    >
                      TDAH
                    </button>
                    <button
                      className={`category-btn ${selectedCategory === 'Epilepsia' ? 'active' : ''}`}
                      onClick={() => setSelectedCategory('Epilepsia')}
                    >
                      Epilepsia
                    </button>
                    <button
                      className={`category-btn ${selectedCategory === 'Desenvolvimento' ? 'active' : ''}`}
                      onClick={() => setSelectedCategory('Desenvolvimento')}
                    >
                      Desenvolvimento
                    </button>
                    <button
                      className={`category-btn ${selectedCategory === 'Dicas' ? 'active' : ''}`}
                      onClick={() => setSelectedCategory('Dicas')}
                    >
                      Dicas
                    </button>
                  </div>
                </div>

                {/* Resultados da Busca */}
                {searchTerm && (
                  <div className="search-results">
                    <p>
                      {filteredArticles.length} artigo(s) encontrado(s) para "{searchTerm}"
                    </p>
                  </div>
                )}

                {/* Lista de Artigos */}
                <div className="articles-grid">
                  {currentArticles.length > 0 ? (
                    currentArticles.map(article => (
                      <BlogCard key={article.id} article={article} />
                    ))
                  ) : (
                    <div className="no-results">
                      <p>Nenhum artigo encontrado.</p>
                      <button 
                        className="btn-secondary"
                        onClick={() => {
                          setSearchTerm('');
                          setSelectedCategory('Todos');
                        }}
                      >
                        Limpar filtros
                      </button>
                    </div>
                  )}
                </div>

                {/* Paginação */}
                {totalPages > 1 && (
                  <div className="pagination">
                    <button
                      className="pagination-btn"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      ← Anterior
                    </button>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <button
                        key={page}
                        className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </button>
                    ))}
                    
                    <button
                      className="pagination-btn"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      Próxima →
                    </button>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <BlogSidebar 
                articles={articles}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Precisa de Ajuda Especializada?</h2>
            <p>
              Se você identificou sinais de TEA, TDAH ou epilepsia em seu filho, 
              agende uma consulta para avaliação especializada.
            </p>
            <div className="cta-buttons">
              <Link to="/agendar-consulta" className="btn-appointment">
                Agendar Consulta
              </Link>
              <a 
                href="https://wa.me/5531985486226" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogPage; 