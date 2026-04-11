import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get(process.env.REACT_APP_API_URL);
      setData(res.data);
    } catch (err) {
      alert("Backend not connected yet");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>CloudScale 🚀</h1>
      <button onClick={fetchData}>Call Backend</button>

      {data && (
        <div>
          <p><b>Message:</b> {data.message}</p>
          <p><b>Server:</b> {data.server}</p>
        </div>
      )}
    </div>
  );
}

export default App;