import { useState } from "react";
import axios from "axios";
import "./first.css";
import { Link } from "react-router-dom";
const FirstComponent = () => {
  const [result, setResult] = useState([]);
  const [id, setId] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/configurations/${id}`
      );
      setResult(response.data["configuration"]["data"]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main_first_div">
      <Link to="/second">
        <button className="update_button">Update Data</button>
      </Link>
      <div className="top">
        <h2>Fetch Config</h2>
        <div className="top_input_wrapper">
          <form method="post">
            <label htmlFor="myLabel">Config to load (configId) </label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </form>
          <button onClick={fetchData}>Submit</button>
        </div>
      </div>
      {result.length > 0 && (
        <div className="result">
          {result.map((row, index) => (
            <div key={index}>{row.join(",")}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FirstComponent;
