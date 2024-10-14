import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Home.css';

const Home=()=> {
  const nameRef = useRef();
  const navigate = useNavigate();

  const startGame = () => {
    const playerName = nameRef.current.value;
    if (playerName!=="") {
      navigate('/game', { state: { name: playerName } });
    }
  };

  return (
    <div className="home-container">
      <h1>Bienvenido al Juego de Adivina el Número</h1>
      <input type="text" placeholder="Ingresa tu nombre" ref={nameRef} />
      <button onClick={startGame}>Comenzar Juego</button>
    </div>
  );
}

export default Home;