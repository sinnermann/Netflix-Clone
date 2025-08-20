import "./Home.css";
import Navbar from "../../components/NavBar/NavBar";
import hero_bannner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_bannner} alt="hero-image" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="title" className="caption-img" />
          <p>
            "The Protector" is a Turkish fantasy drama series on Netflix. It
            follows Hakan, a young man in modern Istanbul who discovers he's
            part of an ancient order tasked with protecting the city from
            immortal enemies. He embraces his destiny as "The Protector,"
            navigating a world of magic, secrets, and a fight for Istanbul's
            survival.
          </p>
          <div className="hero_btns">
            <button className="btn">
              <img src={play_icon} alt="play" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="info" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Picks for You"} category={"now_playing"}/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
