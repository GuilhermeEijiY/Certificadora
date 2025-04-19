import React from 'react';
import './Footer.css'; // ou crie um Footer.css se preferir

const Footer = () => {
  return (
    <footer className="home-footer">
      <p>&copy; {new Date().getFullYear()} Projeto Fundamentos da Programação</p>
      <p>Desenvolvido por estudantes apaixonados por tecnologia e educação</p>
    </footer>
  );
};

export default Footer;
