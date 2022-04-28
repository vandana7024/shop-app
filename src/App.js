/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    axios.get("/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="App">
      <div>
        {users?.map((user) => {
          return (
            <div>
              <div>
                {user.id}:{user.name}
              </div>
              <div>{user.email}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
