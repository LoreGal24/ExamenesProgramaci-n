import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Feedback from './Feedback';
import '../Game.css';

function Game() {
  const location = useLocation();
  const playerName = location.state?.name || 'Jugador';
  const [numero, setNumero] = useState(null);
  const [答え, set答え] = useState('');
  const [試してみた, set試してみた] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [buttonName, setButtonName]=useState("Adivinar")
  const navigate = useNavigate();

  useEffect(() => {
    setNumero(Math.floor(Math.random() * 100) + 1);
  }, []);

  const Adivinar = () => {
    console.log(numero)
    const NumeroCorrecto = parseInt(答え);
    if(buttonName==="Intentar de nuevo?"){
      navigate('/')
    }
    if (!isNaN(NumeroCorrecto)) {
      set試してみた(試してみた + 1);

      if (NumeroCorrecto === numero) {
        setFeedback('¡Correcto!');
        setGameOver(true);
        setButtonName("Intentar de nuevo?")
      } else if (NumeroCorrecto < numero) {
        setFeedback('Muy bajo');
      } else {
        setFeedback('Muy alto');
      }
    }
  };

  const InputValue = (event) => {
    set答え(event.target.value);
  };

  return (
    <div className="game-container">
      <h1>¡Hola, {playerName}!</h1>
      <div className="number-box">
        {gameOver ? numero : '?'}
      </div>
      <input
        type="number"
        value={答え}
        onChange={InputValue}
        placeholder="Tu adivinanza"
      />
      <button onClick={Adivinar}>{buttonName}</button>
      <Feedback メッセージ={feedback} />
      <p>Intentos: {試してみた}</p>
    </div>
  );
}

export default Game;