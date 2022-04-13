import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Taeyong Kim</h1>
      <header>
        <Link to="/">Home</Link>
        <Link to="/meme">Meme</Link>
      </header>

      <img alt="Taeyong Kim" src="https://secureservercdn.net/50.62.174.189/xze.68b.myftpupload.com/wp-content/themes/custom-theme/public/images/portraits/taeyong_portrait.jpg" />
      
      <table>
        <tr>
            <th>Player</th>
            <th>Games Played</th>
            <th>Goals Scored</th>
        </tr>
        <tr>
        <td>Lionel Messi</td>
        <td>827</td>
        <td>689</td>
        </tr>
        <tr>
        <td>Cristiano Ronaldo</td>
        <td>920</td>
        <td>688</td>
        </tr>
        <tr>
        <td>Robert Lewandowski</td>
        <td>726</td>
        <td>524</td>
        </tr>
      </table>

      <footer>
        <h2>footer</h2>
      </footer>
    </div>
  );
}

export default Home;