import React from 'react';
import { Link } from "react-router-dom";

function Meme() {
  return (
    <div>
      <h1>Taeyong Kim</h1>
      <header>
        <Link to="/">Home</Link>
        <Link to="/meme">Meme</Link>
      </header>

      <img alt="Taeyong Kim's favorite meme" class="fullscreen-img" src="https://images.fineartamerica.com/images-medium-large-5/waving-bear-john-ferrante.jpg" />

      <footer>
        <h2>footer</h2>
      </footer>
    </div>
  );
}

export default Meme;