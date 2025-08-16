import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);
  const [account, setAccount] = useState('');

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      axios
        .get("/api/Account")
        .then((response) => {
          setAccount(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  });

  return (
    <>
   <div style={{ textAlign: "center", margin: "20px" }}>
      <h1>Welcome {account.username}</h1>
   </div>
      <h1>Jokes ka Pitara</h1>
      <p>JOKES: {jokes.length}</p>

      {jokes?.map((joke: any) => (
        <div key={joke.id}>
          <h3>{joke.setup}</h3>
          <p>{joke.punchline}</p>
        </div>
      ))}
    </>
  );
}

export default App;