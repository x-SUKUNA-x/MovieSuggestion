import { useState } from "react";
import "./styles.css";


// all movies list
var movieList = {

  Thriller: [
    {
      name: "Badla",
      director: "Sujoy Ghosh",
      cast: "Amitabh Bachchan, Taapsee Panu",
      rating: "7.8/10",
      year: "2019",
      description: "A dynamic young entrepreneur finds herself locked in a hotel room with the corpse of her dead lover. She hires a prestigious lawyer to defend her and they work together to figure out what actually happened.",
      image: "https://m.media-amazon.com/images/M/MV5BYjZiMzIzYTctNDViZi00OWNmLWFmN2YtMmI2OWJiZWViMmY3XkEyXkFqcGdeQXVyNTYwMzA0MTM@._V1_.jpg"

    },

    {
      name: "Detective Byomkesh Bakshy!",
      director: "Dibakar Banerjee",
      cast: "Sushant Singh Rajput",
      rating: "7.7/10",
      year: "2015",
      description: "While investigating the disappearance of a chemist, a detective uncovers a larger conspiracy to unsettle Calcutta.",
      image: "https://m.media-amazon.com/images/M/MV5BYTU1N2VmODMtMjQxZi00ZGRmLWIyZTEtMjg3YmNkZDNjNTc1XkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_.jpg"
    },


    {
      name: "Joker",
      director: "Todd Philips",
      cast: "Joaquin Phoenix",
      rating: "8.4/10",
      year: "2019",
      description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
      image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/924607fa629851bc686d925ab8a63e70_480x.progressive.jpg?v=1573572635"
    },

    {
      name: "John Wick",
      director: "Chad StahelskiDavid Leitch",
      cast: "Keanu Reeves",
      rating: "7.4/10",
      year: "2014",
      description: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
      image: "https://m.media-amazon.com/images/I/81F5PF9oHhL._AC_SL1500_.jpg"
    },

    {
      name: "Casino Royale",
      director: "Martin Campbell",
      cast: "Daniel Craig",
      rating: "8.0/10",
      year: "2006",
      description: "After earning 00 status and a licence to kill, Secret Agent James Bond sets out on his first mission as 007. Bond must defeat a private banker funding terrorists in a high-stakes game of poker at Casino Royale, Montenegro.",
      image: "https://m.media-amazon.com/images/I/617AgXANWGL._AC_SL1024_.jpg"
    }
  ],

  Action: [
    {
      name: "Ant-Man",
      director: "Peyton Reed",
      cast: "Paul Rudd",
      rating: "7.3/10",
      year: "2015",
      description: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, pull off a plan that will save the world.",
      image: "https://m.media-amazon.com/images/I/51jqtx8KltL._AC_.jpg"
    },


    {
      name: "Hobbs & Shaw",
      director: "David Leitch",
      cast: "Dwayne Johnson, Jason Statham, Idris Elba",
      rating: "6.4/10",
      year: "2019",
      description: "Lawman Luke Hobbs (Dwayne 'The Rock' Johnson) and outcast Deckard Shaw (Jason Statham) form an unlikely alliance when a cyber-genetically enhanced villain threatens the future of humanity.",
      image: "https://m.media-amazon.com/images/M/MV5BOTIzYmUyMmEtMWQzNC00YzExLTk3MzYtZTUzYjMyMmRiYzIwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg"
    },

    {
      name: "6 Underground",
      director: "Michael Bay",
      cast: "Ryan Reynolds",
      rating: "6.1/10",
      year: "2019",
      description: "Six individuals from all around the globe, each the very best at what they do, have been chosen not only for their skill, but for a unique desire to delete their pasts to change the future.",
      image: "https://m.media-amazon.com/images/I/61Sqs2aF8fL._AC_SY879_.jpg"
    },

    {
      name: "Extraction",
      director: "Sam Hargrave",
      cast: "Chris Hemsworth,Randeep Hooda",
      rating: "6.7/10",
      year: "2020",
      description: "Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he's enlisted to rescue the kidnapped son of an imprisoned international crime lord.",
      image: "https://m.media-amazon.com/images/I/71lpcnTVFXL._SL1500_.jpg"
    },

    {
      name: "Pirates of the Caribbean",
      director: "Joachim RønningEspen Sandberg",
      cast: "Johnny Depp",
      rating: "6.5/10",
      year: "2017",
      description: "Captain Jack Sparrow is pursued by old rival Captain Salazar and a crew of deadly ghosts who have escaped from the Devil's Triangle. They're determined to kill every pirate at sea...notably Jack.",
      image: "https://m.media-amazon.com/images/I/61OYUw-EJLL._AC_.jpg"
    },

    {
      name: "Iron Man",
      director: "Jon Favreau",
      cast: "Robert Downey Jr.",
      rating: "7.9/10",
      year: "2008",
      description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
      image: "https://m.media-amazon.com/images/I/51WoeTa7ZHL._AC_.jpg"
    },
  ],

  Comedy: [
    {
      name: "Hera Pheri",
      director: "Priyadarshan",
      cast: "Akshay Kumar, Paresh Rawal, Suniel Shetty",
      rating: "8.2/10",
      year: "2000",
      description: "Three unemployed men look for answers to all their money problems - but when their opportunity arrives, will they know what to do with it?",
      image: "https://m.media-amazon.com/images/M/MV5BNDU3NDU5YmUtOWUwZC00NDczLTg4NGEtNGJiNDU5ZDgxZDY1XkEyXkFqcGdeQXVyODMyODMxNDY@._V1_.jpg"
    },

    {
      name: "3 Idiots",
      director: "Rajkumar Hirani",
      cast: "Aamir Khan, Madhavan, Sharman Joshi",
      rating: "8.4/10",
      year: "2009",
      description: "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them 'idiots'.",
      image: "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg"
    },

    {
      name: "Dhol",
      director: "Priyadarshan, Aman Ullah",
      cast: "Sharman Joshi, Kunal Khemu, Tusshar Kapoor, Rajpal Yadav",
      rating: "6.4/10",
      year: "2007",
      description: "Four lazy friends try to woo a rich girl, in order to live a wealthy lifestyle. Their plan, however goes horribly wrong after they get embroiled with a notorious criminal.",
      image: "https://m.media-amazon.com/images/M/MV5BOTRiZDE0MjMtMDA0MS00MzU4LWFhMDctYTYwMmU2ZDFmMjViXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"
    },

    {
      name: "Deadpool",
      director: "Tim Miller",
      cast: "Ryan Reynolds",
      rating: "8.0/10",
      year: "2016",
      description: "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.",
      image: "https://m.media-amazon.com/images/I/51qRj51ht8L._AC_.jpg"
    },

    {
      name: "American Pie",
      director: "Paul Weitz, Chris Weitz",
      cast: "Chris Klein,Jason Biggs,Thomas Ian Nicholas",
      rating: "7.0/10",
      year: "1999",
      description: "Four teenage boys enter a pact to lose their virginity by prom night.",
      image: "https://m.media-amazon.com/images/I/61HqHOUj08L._AC_SL1500_.jpg"
    },
  ],

  Fiction: [
    {
      name: "Interstellar",
      director: "Christopher Nolan",
      cast: "Matthew McConaughey, Jessica Chastain,",
      rating: "8.6/10",
      year: "2014",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      image: "https://m.media-amazon.com/images/I/91obuWzA3XL._AC_SL1500_.jpg"
    },


    {
      name: "Inception",
      director: "Christopher Nolan",
      cast: "Leonardo DiCaprio",
      rating: "8.8/10",
      year: "2010",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      image: "https://m.media-amazon.com/images/I/5103Iag9c9L._AC_.jpg"
    },

    {
      name: "The Martian",
      director: "Ridley Scott",
      cast: "Matt Damon, Jessica Chastain",
      rating: "8.0/10",
      year: "2015",
      description: "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.",
      image: "https://m.media-amazon.com/images/I/A1rjuidemEL._AC_SL1500_.jpg"
    },


    {
      name: "Rise of the Planet of the Apes",
      director: "Rupert Wyatt",
      cast: "James Franco, Andy Serkis",
      rating: "7.5/10",
      year: "2011",
      description: "A substance designed to help the brain repair itself gives advanced intelligence to a chimpanzee who leads an ape uprising.",
      image: "https://m.media-amazon.com/images/I/81yWc81CqmL._AC_SL1500_.jpg"
    },

    {
      name: "Gravity",
      director: "Alfonso Cuarón",
      cast: "Sandra Bullock, George Clooney",
      rating: "7.7/10",
      year: "2013",
      description: "Two astronauts work together to survive after an accident leaves them stranded in space.",
      image: "https://m.media-amazon.com/images/I/81DNIBr-eSL._AC_SL1500_.jpg"
    }
  ],

  Series: [
    {
      name: "The Flash",
      director: "Greg Berlanti, Geoff Johns, Andrew Kreisberg",
      cast: "Grant Gustin, Candice Patton, Tom Cavanagh",
      rating: "7.6/10",
      year: "2014",
      description: "After being struck by lightning, Barry Allen wakes up from his coma to discover he's been given the power of super speed, becoming the next Flash, fighting crime in Central City.",
      image: "https://m.media-amazon.com/images/I/51SaO9oxn5L._AC_.jpg"
    },


    {
      name: "Money Heist",
      director: "Álex Pina",
      cast: "Úrsula Corberó, Pedro Alonso, Álvaro Morte",
      rating: "8.3/10",
      year: "2017",
      description: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
      image: "https://m.media-amazon.com/images/I/61boFr6SYZL._SL1000_.jpg"
    },

    {
      name: "Death Note",
      director: "Tetsuro Araki",
      cast: "Brad Swaile, Ryô Naitô, Brian Drummond",
      rating: "9.0/10",
      year: "2006",
      description: "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.",
      image: "https://m.media-amazon.com/images/M/MV5BODkzMjhjYTQtYmQyOS00NmZlLTg3Y2UtYjkzN2JkNmRjY2FhXkEyXkFqcGdeQXVyNTM4MDQ5MDc@._V1_.jpg"
    },

    {
      name: "The Family Man",
      director: "Krishna D.K, Raj Nidimoru",
      cast: "Manoj Bajpai, Samantha Akkineni, Sharib Hashmi",
      rating: "8.8/10",
      year: "2019",
      description: "A working man from the National Investigation Agency tries to protect the nation from terrorism, but he also needs to keep his family safe from his secret job.",
      image: "https://m.media-amazon.com/images/M/MV5BMzRjZWVmMzItNTdmYS00OWEzLTgyOGUtNThiNTU2ZThlYjY0XkEyXkFqcGdeQXVyMTIxMDk2NDE4._V1_.jpg"
    },

    {
      name: "Mirzapur",
      director: "Puneet Krishna, Karan Anshuman",
      cast: "Pankaj Tripathi, Ali Fazal, Divyendu Sharma",
      rating: "8.4/10",
      year: "2018",
      description: "A shocking incident at a wedding procession ignites a series of events entangling the lives of two families in the lawless city of Mirzapur.",
      image: "https://m.media-amazon.com/images/M/MV5BMjEzNzMwNjAzMl5BMl5BanBnXkFtZTgwMTI4MzY3NjM@._V1_.jpg"
    },

    {
      name: "Apharan",
      director: "Siddharth Sengupta",
      cast: "Arunoday Singh",
      rating: "8.3/10",
      year: "2018",
      description: "Rudra Srivastava, a senior inspector with Uttarakhand police is lured into kidnapping a young girl at her request. The plot begins as a simple plan to extort money in exchange for her release.",
      image: "https://img.starbiz.com/resize/750x-/2020/09/23/apaharan-web-series-download-1-6592.jpg"
    }
  ]

};

var genreList = Object.keys(movieList);



function App() {
  const [genre, genreData] = useState("Thriller");

  function listGenreHandler(genre) {
    genreData(genre);

  }


  return (
    // body
    <div className="App">
      <div className="header">
        <div className="container">
          <div className="space">
            <div className="space1"></div>
            <div className="space2"></div>
          </div>

          <h1 id="heading"><span role="img" aria-label="movie camera emoji">
            🎥
          </span> Movies And Series Recommendation App
          </h1>
        </div>
      </div>


      <div className="container subHead-Conti">
        <div className="subHeadings">
          {
            genreList.map((genre, index) => {
              return <p key={index} onClick={() => listGenreHandler(genre)}>{genre}</p>
            })

          }
        </div>
      </div>

      <div className="conatiner movieList-conti">
        {
          movieList[genre].map((movies, index) => {
            return (
              <div className="movies-card">
                <div key={index} className="moviesCard-Content">
                  <div className="poster">
                    <img src={movies.image} alt="poster" />
                  </div>
                  <div key={index} className="movieDetails">
                    <p id="movie-title">{movies.name}</p>
                    <p>Director - {movies.director}</p>
                    <p>Cast - {movies.cast}</p>
                    <p>IMDB - {movies.rating}</p>
                    <p>Year - {movies.year}</p>
                    <p>{movies.description}</p>
                  </div>
                </div>
              </div>
            );
          })
        }

      </div>


      <div className="conatiner mainConti">
      </div>


      <footer>
        <div className="container footerConti">
          <div className="copyright">
            <h2 className="copyrightText">
              Movies And Series Recommendation App
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
