import { Route, Routes } from "react-router-dom";
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";

function App() {
  return (
    <>
      <div className="app">
        <div className="company_head">
          <h2>CodeRower Software Pvt Ltd.(Assignment)</h2>
          <p>Name:Rahul Santosh Munj</p>
        </div>
        <Routes>
          <Route path="/" element={<FirstComponent />} />
          <Route path="/second" element={<SecondComponent />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
