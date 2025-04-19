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
    <div className="home-container">
      <section className="intro-section">
        <h1 className="home-title">Fundamentos da Programação</h1>
        <p className="home-description">
          Este projeto foi criado para te guiar pelos conceitos essenciais da programação de forma simples, visual e acessível.
        </p>
        <p className="home-description">
          Aqui você vai aprender desde os princípios básicos — como variáveis, tipos de dados e operadores — até conceitos fundamentais como estruturas de repetição, funções e orientação a objetos.
        </p>
        <p className="home-extra">
          Nossa missão é tornar a programação mais intuitiva e interessante para quem está começando, usando uma abordagem amigável e centrada na experiência do usuário.
        </p>
        <button className="study-button" onClick={() => navigate('/fundamentos')}>
          Explorar Fundamentos de JavaScript
        </button>
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
    </div>
  );
};

export default Home;
