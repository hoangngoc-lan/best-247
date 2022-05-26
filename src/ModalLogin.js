import { Modal } from "react-bootstrap";

export default function ModalLogin({ show, setShow }) {
  return (
    <Modal show={show} centered>
      <Modal.Body className="best247-bg-black p-0">
        <div className="title pt-5">
          <h2 className="text-center best247-color-yellow">Best247</h2>
          <p className="text-center best247-color-light">
            Welcome to the best247 admin system
          </p>
        </div>

        <div className="form">
          <div className="data-user px-5 mt-4">
            <input
              type="text"
              placeholder="Account Name"
              className="best247-bg-black-2 best247-rounded-12 w-100 border-0 text-white px-3 py-2"
              style={{ outline: "none" }}
            />
            <input
              type="password"
              placeholder="Password"
              className="best247-bg-black-2 best247-rounded-12 w-100 border-0 text-white px-3 py-2 mt-4"
              style={{ outline: "none" }}
            />
          </div>

          <div className="submit px-5 mt-2 mb-5 pb-4">
            <div className="custom-control custom-switch">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customSwitch1"
              />
              <label
                className="custom-control-label text-white"
                for="customSwitch1"
              >
                Remember password
              </label>
            </div>
            <button
              className="w-100 mt-4 p-3 border-0 best247-bg-yellow font-weight-bold best247-rounded-12"
              type="button"
            >
              Login
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
