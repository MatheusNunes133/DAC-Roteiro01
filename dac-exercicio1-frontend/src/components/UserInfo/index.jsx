import React from "react";
import "../../styles/Users/users.css";

export default function UserInfo({ data }) {
  return (
    <div id="container-users">
      <div>
        <p>Usuários</p>
        <div className="info-users">
          <p>ID: {data[0].id}</p>
          <p>Nome: {data[0].name}</p>
          <p>Email: {data[0].email}</p>
          <p>Telefone: {data[0].phone}</p>
        </div>
        <div className="info-users">
          <p>ID: {data[1].id}</p>
          <p>Nome: {data[1].name}</p>
          <p>Email: {data[1].email}</p>
          <p>Telefone: {data[1].phone}</p>
        </div>
      </div>
    </div>
  );
}
