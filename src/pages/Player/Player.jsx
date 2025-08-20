import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTYzYmQ4ODg3Yzk0ZTlhMTdjNTU5ZmYxNjcxMGI0MSIsIm5iZiI6MTY5NjY4MjY4Ni44MTIsInN1YiI6IjY1MjE1MmJlYzFmZmJkMDBjNDhiZTk5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O3F19USR1rCNmwgp-DU4xP3GjsrIap6QYz12MDGdVGs",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.results && response.results.length > 0) {
          setApiData(response.results[0]);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  if (!apiData) return <p>Loading...</p>;

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt="back-arrow"
        onClick={() => {navigate("/")}} />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
