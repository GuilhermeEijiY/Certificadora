import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import defaultAvatar from '../assets/default-avatar.png';

const developers = [
  {
    name: 'Ghabriel Jun Aizawa',
    role: 'Fullstack Developer',
    avatar: defaultAvatar,
  },
  {
    name: 'Guilherme Eiji Yoshida',
    role: 'UI/UX Designer',
    avatar: defaultAvatar,
  },
  {
    name: 'Murillo Tadeu Amadeu',
    role: 'Fullstack Developer',
    avatar: defaultAvatar,
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container rgb-background">
      
      {/* 1. Título + Intro */}
      <section className="intro-section">
        <h1 className="home-title">Fundamentos da Programação</h1>
        <p className="home-description">
          Este projeto foi criado para te guiar pelos conceitos essenciais da programação de forma simples, visual e acessível.
        </p>
        <button className="study-button" onClick={() => navigate('/fundamentos')}>
          Explorar Fundamentos de JavaScript
        </button>
      </section>

      {/* 2. Explicação do Projeto */}
      <section className="project-section">
        <h2 className="home-subtitle">Sobre o Projeto</h2>
        <p className="home-description">
          Este projeto oferece uma jornada interativa e prática através dos conceitos fundamentais da programação. 
          Ideal para iniciantes, ele combina explicações claras com exemplos visuais e exercícios interativos.
        </p>
        <p className="home-description">
          Desde variáveis até orientação a objetos, você aprenderá de forma progressiva e divertida.
        </p>
      </section>

      {/* 3. Vídeo da Equipe */}
      <section className="video-section">
        <h2 className="home-subtitle">Conheça o projeto em vídeo</h2>
        <div className="video-wrapper">
          <iframe 
            src="https://www.youtube.com/embed/SEU_VIDEO_ID_AQUI" 
            title="Apresentação do Projeto"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </section>

      {/* 4. Equipe */}
      <section className="dev-section">
        <h2 className="home-subtitle">Quem desenvolveu</h2>
        <div className="dev-list">
          {developers.map((dev, index) => (
            <div key={index} className="dev-card">
              <img src={dev.avatar} alt={`Avatar de ${dev.name}`} className="dev-avatar" />
              <div className="dev-info">
                <h3>{dev.name}</h3>
                <p>{dev.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Encerramento / Call to Action */}
      <section className="cta-section">
        <h2 className="home-subtitle">Pronto para aprender na prática?</h2>
        <p className="home-description">Clique no botão abaixo e comece sua jornada agora mesmo!</p>
        <button className="study-button" onClick={() => navigate('/fundamentos')}>
          Começar a Aprender
        </button>
      </section>
    </div>
  );
};

export default Home;
