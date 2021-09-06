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
      description: "A dynamic young entrepreneur finds herself locked in a hotel room with the corpse of her dead lover. She hires a prestigious lawyer to defend her.",
      image: "https://m.media-amazon.com/images/M/MV5BYjZiMzIzYTctNDViZi00OWNmLWFmN2YtMmI2OWJiZWViMmY3XkEyXkFqcGdeQXVyNTYwMzA0MTM@._V1_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=mSlgu8AQAd4",
    },

    {
      name: "Detective Byomkesh Bakshy!",
      director: "Dibakar Banerjee",
      cast: "Sushant Singh Rajput",
      rating: "7.7/10",
      year: "2015",
      description: "While investigating the disappearance of a chemist, a detective uncovers a larger conspiracy to unsettle Calcutta.",
      image: "https://m.media-amazon.com/images/M/MV5BYTU1N2VmODMtMjQxZi00ZGRmLWIyZTEtMjg3YmNkZDNjNTc1XkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=ZG--GOpi_0g",
    },


    {
      name: "Joker",
      director: "Todd Philips",
      cast: "Joaquin Phoenix",
      rating: "8.4/10",
      year: "2019",
      description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime.",
      image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/924607fa629851bc686d925ab8a63e70_480x.progressive.jpg?v=1573572635",
      youtubeLink: "https://www.youtube.com/watch?v=zAGVQLHvwOY",
    },

    {
      name: "John Wick",
      director: "Chad StahelskiDavid Leitch",
      cast: "Keanu Reeves",
      rating: "7.4/10",
      year: "2014",
      description: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
      image: "https://m.media-amazon.com/images/I/81F5PF9oHhL._AC_SL1500_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=C0BMx-qxsP4",
    },

    {
      name: "Casino Royale",
      director: "Martin Campbell",
      cast: "Daniel Craig",
      rating: "8.0/10",
      year: "2006",
      description: "After earning 00 status and a licence to kill, Secret Agent James Bond sets out on his first mission as 007.",
      image: "https://m.media-amazon.com/images/I/617AgXANWGL._AC_SL1024_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=36mnx8dBbGE",
    }
  ],

  Action: [
    {
      name: "Baahubali 2",
      director: "S.S.Rajamouli",
      cast: "Prabhas, Rana Daggubati",
      rating: "8.2/10",
      year: "2017",
      description: "When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom.",
      image: "https://m.media-amazon.com/images/M/MV5BODY0NTQ0MzctNmNlMi00MWUxLThmNTEtMGFhNjczYmVjYjcxXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=G62HrubdD6o",
    },

    {
      name: "Ant-Man",
      director: "Peyton Reed",
      cast: "Paul Rudd",
      rating: "7.3/10",
      year: "2015",
      description: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, and save the world.",
      image: "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_FMjpg_UX1000_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=pWdKf3MneyI",
    },


    {
      name: "Hobbs & Shaw",
      director: "David Leitch",
      cast: "Dwayne Johnson, Jason Statham, Idris Elba",
      rating: "6.4/10",
      year: "2019",
      description: "Lawman Hobbs ('The Rock') and outcast Deckard Shaw (Jason Statham) form an unlikely alliance to save people from cyber-genetically villan.",
      image: "https://m.media-amazon.com/images/M/MV5BOTIzYmUyMmEtMWQzNC00YzExLTk3MzYtZTUzYjMyMmRiYzIwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=HZ7PAyCDwEg",
    },

    {
      name: "6 Underground",
      director: "Michael Bay",
      cast: "Ryan Reynolds",
      rating: "6.1/10",
      year: "2019",
      description: "Six individuals from all around the globe, each the very best at what they do, have been chosen not only for their skill, but for a unique desire to delete their pasts to change the future.",
      image: "https://m.media-amazon.com/images/I/61Sqs2aF8fL._AC_SY879_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=YLE85olJjp8",
    },

    {
      name: "Extraction",
      director: "Sam Hargrave",
      cast: "Chris Hemsworth,Randeep Hooda",
      rating: "6.7/10",
      year: "2020",
      description: "Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he's enlisted to rescue the kidnapped kid.",
      image: "https://m.media-amazon.com/images/I/71lpcnTVFXL._SL1500_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=L6P3nI6VnlY",
    },

    {
      name: "Pirates Caraibes",
      director: "Joachim RønningEspen Sandberg",
      cast: "Johnny Depp",
      rating: "6.5/10",
      year: "2017",
      description: "Captain Jack fight with Captain Salazar and a crew of deadly ghosts who have escaped from the Devil's Triangle.",
      image: "https://images-na.ssl-images-amazon.com/images/I/A1oOBuoEdIL._RI_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=Hgeu5rhoxxY",
    },

    {
      name: "Iron Man",
      director: "Jon Favreau",
      cast: "Robert Downey Jr.",
      rating: "7.9/10",
      year: "2008",
      description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
      image: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=8ugaeA-nMTc",
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
      image: "https://m.media-amazon.com/images/M/MV5BNDU3NDU5YmUtOWUwZC00NDczLTg4NGEtNGJiNDU5ZDgxZDY1XkEyXkFqcGdeQXVyODMyODMxNDY@._V1_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=Nj4H-X3FAWU",
    },

    {
      name: "3 Idiots",
      director: "Rajkumar Hirani",
      cast: "Aamir Khan, Madhavan, Sharman Joshi",
      rating: "8.4/10",
      year: "2009",
      description: "Two friends are for searching their long lost companion, who inspired them to think differently.",
      image: "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=K0eDlFX9GMc",
    },

    {
      name: "Dhol",
      director: "Priyadarshan, Aman Ullah",
      cast: "Sharman Joshi, Kunal Khemu, Tusshar Kapoor, Rajpal Yadav",
      rating: "6.4/10",
      year: "2007",
      description: "Four lazy friends try to woo a rich girl, in order to live a wealthy lifestyle.",
      image: "https://m.media-amazon.com/images/M/MV5BOTRiZDE0MjMtMDA0MS00MzU4LWFhMDctYTYwMmU2ZDFmMjViXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=vqH2cV1T9WE",
    },

    {
      name: "Deadpool",
      director: "Tim Miller",
      cast: "Ryan Reynolds",
      rating: "8.0/10",
      year: "2016",
      description: "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.",
      image: "https://m.media-amazon.com/images/I/51qRj51ht8L._AC_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=ONHBaC-pfsk",
    },

    {
      name: "American Pie",
      director: "Paul Weitz, Chris Weitz",
      cast: "Chris Klein,Jason Biggs,Thomas Ian Nicholas",
      rating: "7.0/10",
      year: "1999",
      description: "Four teenage boys enter a pact to lose their virginity by prom night.",
      image: "https://m.media-amazon.com/images/I/61HqHOUj08L._AC_SL1500_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=iUZ3Yxok6N8",
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
      image: "https://m.media-amazon.com/images/I/91obuWzA3XL._AC_SL1500_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    },


    {
      name: "Inception",
      director: "Christopher Nolan",
      cast: "Leonardo DiCaprio",
      rating: "8.8/10",
      year: "2010",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      image: "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },

    {
      name: "The Martian",
      director: "Ridley Scott",
      cast: "Matt Damon, Jessica Chastain",
      rating: "8.0/10",
      year: "2015",
      description: "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.",
      image: "https://m.media-amazon.com/images/I/A1rjuidemEL._AC_SL1500_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=ej3ioOneTy8",
    },


    {
      name: "Rise of the Planet of the Apes",
      director: "Rupert Wyatt",
      cast: "James Franco, Andy Serkis",
      rating: "7.5/10",
      year: "2011",
      description: "A substance designed to help the brain repair itself gives advanced intelligence to a chimpanzee who leads an ape uprising.",
      image: "https://m.media-amazon.com/images/I/81yWc81CqmL._AC_SL1500_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=T3tidwW1gGM",
    },

    {
      name: "Gravity",
      director: "Alfonso Cuarón",
      cast: "Sandra Bullock, George Clooney",
      rating: "7.7/10",
      year: "2013",
      description: "Two astronauts work together to survive after an accident leaves them stranded in space.",
      image: "https://m.media-amazon.com/images/I/81DNIBr-eSL._AC_SL1500_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=OiTiKOy59o4",
    }
  ],

  Series: [
    {
      name: "The Flash",
      director: "Greg Berlanti, Geoff Johns, Andrew Kreisberg",
      cast: "Grant Gustin, Candice Patton, Tom Cavanagh",
      rating: "7.6/10",
      year: "2014",
      description: "After being struck by lightning, Barry Allen become the next Flash with super speed power, fighting crime in Central City.",
      image: "https://m.media-amazon.com/images/I/51SaO9oxn5L._AC_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=Yj0l7iGKh8g",
    },


    {
      name: "Money Heist",
      director: "Álex Pina",
      cast: "Úrsula Corberó, Pedro Alonso, Álvaro Morte",
      rating: "8.3/10",
      year: "2017",
      description: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
      image: "https://m.media-amazon.com/images/I/61boFr6SYZL._SL1000_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=8QkyLqmJCMM",
    },

    {
      name: "Death Note",
      director: "Tetsuro Araki",
      cast: "Brad Swaile, Ryô Naitô, Brian Drummond",
      rating: "9.0/10",
      year: "2006",
      description: "An intelligent high school student goes on a secret crusade to eliminate criminals by discovering a super powerful notebook by writing names.",
      image: "https://m.media-amazon.com/images/M/MV5BODkzMjhjYTQtYmQyOS00NmZlLTg3Y2UtYjkzN2JkNmRjY2FhXkEyXkFqcGdeQXVyNTM4MDQ5MDc@._V1_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=NlJZ-YgAt-c",
    },

    {
      name: "The Family Man",
      director: "Krishna D.K, Raj Nidimoru",
      cast: "Manoj Bajpai, Samantha Akkineni, Sharib Hashmi",
      rating: "8.8/10",
      year: "2019",
      description: "A working man from the National Investigation Agency tries to protect the nation from terrorism.",
      image: "https://m.media-amazon.com/images/M/MV5BMzRjZWVmMzItNTdmYS00OWEzLTgyOGUtNThiNTU2ZThlYjY0XkEyXkFqcGdeQXVyMTIxMDk2NDE4._V1_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=XatRGut65VI",
    },

    {
      name: "Mirzapur",
      director: "Puneet Krishna",
      cast: "Pankaj Tripathi, Ali Fazal, Divyendu Sharma",
      rating: "8.4/10",
      year: "2018",
      description: "A shocking incident at a wedding procession ignites a series of events entangling the lives of two families in the lawless city of Mirzapur.",
      image: "https://m.media-amazon.com/images/M/MV5BMjEzNzMwNjAzMl5BMl5BanBnXkFtZTgwMTI4MzY3NjM@._V1_.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=ZNeGF-PvRHY",
    },

    {
      name: "Apharan",
      director: "Siddharth Sengupta",
      cast: "Arunoday Singh",
      rating: "8.3/10",
      year: "2018",
      description: "Rudra Srivastava, a senior inspector with Uttarakhand police is lured into kidnapping a young girl at her request.",
      image: "https://img.starbiz.com/resize/750x-/2020/09/23/apaharan-web-series-download-1-6592.jpg",
      youtubeLink: "https://www.youtube.com/watch?v=CxNYucYVEkQ",
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
                    <a id="btn" href={movies.youtubeLink} target="_blank" rel="noopener noreferrer">Watch Trailer!</a>
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
