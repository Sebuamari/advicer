import { useState, useEffect } from 'react';
import './App.css';
import divider from "./images/pattern-divider-desktop.png";
import dice from "./images/icon-dice.png";

function App() {
  const [advice, setAdvice] = useState("");
  const [adviceID, setAdviceID] = useState("");
  const url = "https://api.adviceslip.com/advice";

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setAdvice(json.slip.advice);
      setAdviceID(json.slip.id);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const nextAdvice = () => {
    fetchData();
  }

  return (
    <div className="App">
      <div className='advice-container'>
        <p className='advice-number'>
          Advice #{adviceID}
        </p>
        <p className='advice'>
          "{advice}"
        </p>
        <div className='divider-and-button'>
          <img className='divider' src={divider} alt="desktop pattern divider"/>
          <button className='dice-button' onClick={() => nextAdvice()}><img className='dice' src={dice} alt="icon dice"/></button>
        </div>
      </div>
      <div className='footer'>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. <br/>
        Coded by <a href="https://www.linkedin.com/in/sebuamariam">Mariam Sebua</a>.
      </div>
    </div>
  );
}

export default App;
