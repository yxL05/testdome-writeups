import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function CharacterAttributes({ totalPoints }) {
  const [strength, setStrength] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [remPoints, setRemPoints] = useState(totalPoints);

  const handleAttributeChange = (event, attributeName) => {
    let newStrength, newSpeed;

    if (attributeName === "strength") {
      newStrength = event.target.value;
      setStrength(newStrength);

      newSpeed = Math.min(speed, totalPoints - newStrength)
      setSpeed(newSpeed);

    } else if (attributeName === "speed") {
      newSpeed = event.target.value;
      setSpeed(newSpeed);

      newStrength = Math.min(strength, totalPoints - newSpeed);
      setStrength(newStrength);
    }

    setRemPoints(totalPoints - newSpeed - newStrength);
  };

  return (
    <div>
      Character stats: <span id="points">{remPoints}</span> points
      <div>
        <input
          type="range"
          id="strength"
          min="0"
          max={totalPoints}
          value={strength}
          step="1"
          onChange={(event) => handleAttributeChange(event, "strength")}
        />
        Strength {strength}
      </div>
      <div>
        <input
          type="range"
          id="speed"
          min="0"
          max={totalPoints}
          value={speed}
          step="1"
          onChange={(event) => handleAttributeChange(event, "speed")}
        />
        Speed {speed}
      </div>
    </div>
  );
}

document.body.innerHTML = "<div id='root'></div>";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CharacterAttributes totalPoints={15} />);