import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);

  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTYzYmQ4ODg3Yzk0ZTlhMTdjNTU5ZmYxNjcxMGI0MSIsIm5iZiI6MTY5NjY4MjY4Ni44MTIsInN1YiI6IjY1MjE1MmJlYzFmZmJkMDBjNDhiZTk5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O3F19USR1rCNmwgp-DU4xP3GjsrIap6QYz12MDGdVGs",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);
  return (
    // THE FIRST VERSION WITH STATIC INFO

    // <div className="title-cards">
    //   <h2>{title ? title : "Popular on Netflix"}</h2>
    //   <div className="card-list" ref={cardsRef}>
    //     {cards_data.map((card, index) => {
    //       return (
    //         <div className="card" key={index}>
    //           <img src={card.image} alt="card-img" />
    //           <p>{card.name}</p>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
    // END OF STATIC VERSION

    //START OF API FETCH FOR MOVIES
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt="card-img"
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
    //END OF API FETCH FOR MOVIES
  );
};

export default TitleCards;
