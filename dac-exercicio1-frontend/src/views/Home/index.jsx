import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Home/home.css";

export default function Home() {
  return (
    <div id="modal">
      <div id="modal-info">
        <p id="modal-title">Ver todos os usuários?</p>
        <Link to={"/users"}>
          <p>Clique aqui!</p>
        </Link>
      </div>
    </div>
  );
}
