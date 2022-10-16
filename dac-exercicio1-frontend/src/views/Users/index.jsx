import React, { useState, useEffect } from "react";
import api from "../../service/Api";
import UserInfo from "../../components/UserInfo";

export default function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/allUsers").then((response) => {
      setData(response.data);
    });
  }, [0]);

  return <div>{data.length > 1 ? <UserInfo data={data} /> : "Hoho"}</div>;
}
