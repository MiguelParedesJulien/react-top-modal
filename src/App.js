import React from "react";
import Modal from "components/modal/modal";
import useModal from "utils/useModal";
import "App.css";

function App() {
  const { isShowing: show1, toggle: toggle1 } = useModal();

  return (
    <>
      <main className="salut">
        <button type="submit" className="buttonDefault" onClick={toggle1}>
          Modal (with header)
        </button>
        <Modal isShowing={show1} hide={toggle1} addCloseEscape={true}>
          <h1>Hello, je suis un titre </h1>
          <p>bla bla bla</p>
        </Modal>
      </main>
    </>
  );
}

export default App;
