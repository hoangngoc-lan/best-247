import { useState } from "react";
import ModalLogin from "./ModalLogin";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App vw-100 vh-100" style={{ backgroundColor: "#E5E5E5" }}>
      <button
        className="btn bg-primary text-white px-4 m-5"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Login
      </button>
      <ModalLogin show={showModal} setShow={setShowModal}></ModalLogin>
    </div>
  );
}

export default App;