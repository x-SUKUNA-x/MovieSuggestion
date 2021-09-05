import { useState } from "react";
import "./styles.css";

var movieList = {

  Thriller: [
    {
      name: "Badla",
      director: "Sujoy Ghosh",
      cast: "Amitabh Bachchan, Taapsee Panu",
      rating: "7.8/10",
      year: "2019",
      description: "A dynamic young entrepreneur finds herself locked in a hotel room with the corpse of her dead lover. She hires a prestigious lawyer to defend her and they work together to figure out what actually happened.",
      image: ""


    }, {}, {}, {}
  ],

  Action: [],

  Comedy: [],

  Science_Fiction: [],

  Series: []


};

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

      <div className="conatiner mainConti">
      </div>

      <footer>
        <div className="container footerConti">
          <div className="copyright">
            <h2 className="copyrightText">
              Movie And Series Recommendation App
            </h2>
            <p id="cp" className="copyrightText">Copyright &copy; 2021</p>
          </div>

          <div className="socialMedia">
            <a
              href="https://github.com/singhsduos/Movies-Or-Series-Reccomendation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/neelesh-singh-b58a6b152/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://twitter.com/singhs_duos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </div>
        </div>

      </footer>
    </div>
  );
}

export default App;
