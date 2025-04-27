import React, { useState } from "react";
import "./index.css";
import CR7Image from './assets/ronaldo_img.webp'

const ProfileCard = ({ name, bio, initialBgColor }) => {
  const [bgColor, setBgColor] = useState(initialBgColor);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    setBgColor("linear-gradient(135deg, #FFD700, #FFA07A)");
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setBgColor(initialBgColor);
  };

  return (
    <div
      className={`profile-card ${hovered ? "hovered" : ""}`}
      style={{ background: bgColor, color: hovered ? "#800000" : "#800000" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={CR7Image} alt={name} className="profile-pic" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-bio">{bio}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <ProfileCard
        name="Cristiano Ronaldo"
        
        

        bio="Portuguese professional footballer, widely regarded as one of the greatest players of all time"
        initialBgColor="linear-gradient(135deg,rgb(128, 232, 255),rgb(255, 255, 255), rgb(112, 224, 255))" 
      />
    </div>
  );
};

export default App;