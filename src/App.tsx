import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './pages/Home/home';
import Sobre from './pages/Sobre/sobre';
import Atendimentos from './pages/Atendimentos/atendimentos';
import Contato from './pages/Contato/contato';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          {/* A imagem de onda fica como background do main-content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/atendimentos" element={<Atendimentos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
