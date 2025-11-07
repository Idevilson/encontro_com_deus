import { Link } from "react-router-dom";
import "../styles/Home.css";
import logoIEQ from "../imagens/logoIEQ.png";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <img src={logoIEQ} alt="Logo IEQ" className="home-logo" />
        <h1 className="home-title">Igreja do Evangelho Quadrangular</h1>
        <h2 className="home-subtitle">REDENÇÃO - PA: CAPITAL DO AVIVAMENTO</h2>

        <Link to="/encontro-com-deus" className="home-button">
          <span className="button-icon">✨</span>
          Encontro com Deus
          <span className="button-arrow">→</span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
