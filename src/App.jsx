import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("yashpz");
  const [roomId, setRoomId] = useState("95069");

  const handleSubmitJoin = () => {
    navigate(`/room/${roomId}?username=${username}`);
  };

  return (
    <>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h1>Join Room</h1>

      <form onSubmit={handleSubmitJoin} className="join-form">
        <input
          type="text"
          autoFocus
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="text"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          placeholder="Room ID"
        />
        <button type="submit">Join Room</button>
      </form>
    </>
  );
}

export default App;
