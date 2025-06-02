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
      
      <section className="intro-section">
        <h1 className="home-title">Fundamentos da Programação</h1>
        <p className="home-description">
          Este projeto foi criado para te guiar pelos conceitos essenciais da programação de forma simples, visual e acessível.
        </p>
        <button className="study-button" onClick={() => navigate('/fundamentos')}>
          Explorar Teoria
        </button>
      </section>

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

      <section className="video-section">
        <h2 className="home-subtitle">Conheça o projeto em vídeo</h2>
        <div className="video-wrapper">
          <iframe 
            src="https://www.youtube.com/embed/f8mv4UbHJM4?si=Cl5M7efk6hP9d0uC" 
            title="Apresentação do Projeto"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </section>

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

      <section className="cta-section">
        <h2 className="home-subtitle">Pronto para aprender na prática?</h2>
        <p className="home-description">Clique no botão abaixo e comece sua jornada praticando agora mesmo!</p>
        <button className="study-button" onClick={() => navigate('/exercicios')}>
          Começar a Praticar
        </button>
      </section>
    </div>
  );
};

export default Home;
