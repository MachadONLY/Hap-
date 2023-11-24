import "../scss/Cabecalho.scss";
import profile from "../assets/profile.svg";
import { useState, useEffect } from "react";

export default function Cabecalho() {

  const userLogado = JSON.parse(sessionStorage.getItem("user-object"));
  const [user] = useState(userLogado);

  const handleLogout = () => {
    sessionStorage.removeItem("user-object");
    sessionStorage.removeItem("token-user");
    window.location = "/";
  };

  if (sessionStorage.getItem("token-user")) {
    return (
      <>
        <header>
          <nav>
            <ul>
              <h1>Hap +</h1>
              <div className="profile">
                <img src={profile} alt="icone de perfil" />
                <p>Olá {user.name}</p>
              </div>
              <li>Global Solution - Engenharia de Software</li>
              <div className="logout-button">
                <button onClick={handleLogout} className="botao-log">LOGOUT</button>
                <p>{user.email}</p>
              </div>
            </ul>
          </nav>
        </header>
      </>
    );    
  } else {
    return (
      <>
        <header>
          <nav>
            <ul>
              <h1>Hap +</h1>
              <li>Plataforma de Telemedicina</li>
              <li>Global Solution - Engenharia de Software</li>
            </ul>
          </nav>
        </header>
      </>
    );
  }
}
