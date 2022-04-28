/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./App.css";
import axios from "axios";
import { API } from "./constant";

function App() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${API}/data`).then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="App">
      ALL USERS
      <div>
        {users?.map((user) => {
          return (
            <div key={user.id}>
              <div>
                {user.id}:{user.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
