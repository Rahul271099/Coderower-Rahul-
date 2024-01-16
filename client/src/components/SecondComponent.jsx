import { useState } from "react";
import axios from "axios";
import "./second.css";

const SecondComponent = () => {
  const [configId, setConfigId] = useState("");
  const [remark, setRemark] = useState("");
  const [show, setShow] = useState(false);

  const updateRemark = async () => {
    try {
      await axios.put(`http://localhost:8080/api/configurations/${configId}`, {
        remark,
      });
      // setRemark(""); if you want to clear input you can use this lines
      // setConfigId(""); if you want to clear input you can use this lines
      setShow(true);
      alert("Remark updated successfully!");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="wrapper">
      <div className="main_div">
        <h2>Update response</h2>
        <div className="first_input main_input">
          <label htmlFor="mySecondLabel">Config to load (configId)</label>
          <input
            type="text"
            value={configId}
            onChange={(e) => setConfigId(e.target.value)}
          />
        </div>
        <div className="second_input main_input">
          <label htmlFor="myMessage">Remark</label>
          <textarea
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
          />
        </div>
        <button onClick={updateRemark}>Submit</button>
      </div>
      {show && <h3>{remark}</h3>}
    </div>
  );
};

export default SecondComponent;
