import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import './styles.css';

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      api
        .get('connections')
        .then((res) => res.data)
        .then((connection) => setTotalConnections(connection.total));
    } catch (error) {
      if (error) {
        setError('Não foi possível carregar o total de conexões');
      }
    }
  });

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Poffy logo" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={landingImg} alt="Imagem principal" className="hero-image" />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
          <span className="total-connections">
            {error
              ? error
              : `Total de ${totalConnections} conexões já realizadas`}
            <img src={purpleHeartIcon} alt="Coração" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Landing;
