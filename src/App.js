import { useState } from "react";
import "./styles.css";



function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="container">
          <div className="space">
            <div className="space1"></div>
            <div className="space2"></div>
          </div>

          <h1 id="heading"><span role="img" aria-label="movie camera emoji">
            🎥
          </span>  Movie And Series Recommendation App
          </h1>
        </div>
      </div>

      <div className="container subHead-Conti">
        <div className="subHeadings">
          <p>Thriller</p>
          <p>Action</p>
          <p>Comedy</p>
          <p>Science Fiction</p>
          <p>Series</p>
        </div>
      </div>
    </div>
  );
}

export default App;
