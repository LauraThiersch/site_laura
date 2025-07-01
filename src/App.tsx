import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Importa os estilos principais da aplicação

// Importa os componentes de layout
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

// Importa os componentes de página
import Home from './pages/Home/home';
import Sobre from './pages/Sobre/sobre';
import Atendimentos from './pages/Atendimentos/atendimentos';
import Contato from './pages/Contato/contato';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Componente de cabeçalho, presente em todas as páginas */}
        <main className="main-content">
          {/* O elemento <main> é semântico e indica o conteúdo principal da página atual.
              Ele é crucial para SEO, pois sinaliza aos motores de busca onde o conteúdo mais relevante está. */}
          <Routes>
            {/* Define as rotas para cada página */}
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/atendimentos" element={<Atendimentos />} />
            <Route path="/contato" element={<Contato />} />
            {/* Rotas futuras podem ser adicionadas aqui (ex: /blog, /artigos) */}
          </Routes>
        </main>
        <Footer /> {/* Componente de rodapé, presente em todas as páginas */}
      </div>
    </Router>
  );
}

export default App;
