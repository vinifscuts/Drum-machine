import { useEffect, useState } from "react";
import "./index.css";
function App() {
  const [count, setCount] = useState("Click or Press a key");

  useEffect(() => {
    function handleKeyDown(e) {
      const key = e.key.toUpperCase();
      const audio = document.getElementById(key);
      if (audio) {
        audio.currentTime = 0;
        audio.play();
        const soundName = audio.parentElement.id;
        setCount(soundName);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const handleClick = (key) => {
    setCount(key);
    const audio = document.getElementById(key);
    const soundName = audio.parentElement.id;
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
    setCount(soundName);
  };

  return (
    <>
      <div id="drum-machine">
        <div id="display">
          <p>{count}</p>
        </div>
        <div className="pad">
          <button
            className="drum-pad"
            id="Cev_H2"
            onClick={() => handleClick("Q")}
          >
            Q<audio className="clip" id="Q" src="/audio/Cev_H2.mp3"></audio>
          </button>
          <button
            className="drum-pad"
            id="Dsc_Oh"
            onClick={() => handleClick("W")}
          >
            W<audio className="clip" id="W" src="/audio/Dsc_Oh.mp3"></audio>
          </button>
          <button
            className="drum-pad"
            id="Heater-1"
            onClick={() => handleClick("E")}
          >
            E<audio className="clip" id="E" src="/audio/Heater-1.mp3"></audio>
          </button>
          <button
            className="drum-pad"
            id="Heater-2"
            onClick={() => handleClick("A")}
          >
            A<audio className="clip" id="A" src="/audio/Heater-2.mp3"></audio>
          </button>
          <button
            className="drum-pad"
            id="Heater-3"
            onClick={() => handleClick("S")}
          >
            S<audio className="clip" id="S" src="/audio/Heater-3.mp3"></audio>
          </button>
          <button
            className="drum-pad"
            id="Heater-4"
            onClick={() => handleClick("D")}
          >
            D<audio className="clip" id="D" src="/audio/Heater-4_1.mp3"></audio>
          </button>
          <button
            className="drum-pad"
            id="Heater-6"
            onClick={() => handleClick("Z")}
          >
            Z<audio className="clip" id="Z" src="/audio/Heater-6.mp3"></audio>
          </button>
          <button
            className="drum-pad"
            id="Kick_n_Hat"
            onClick={() => handleClick("X")}
          >
            X<audio className="clip" id="X" src="/audio/Kick_n_Hat.mp3"></audio>
          </button>
          <button
            className="drum-pad"
            id="RP4_KICK"
            onClick={() => handleClick("C")}
          >
            C<audio className="clip" id="C" src="/audio/RP4_KICK_1.mp3"></audio>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
