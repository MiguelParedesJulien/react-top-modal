import React from "react";
import Modal from "lib/components/modal/modal";
import useModal from "lib/utils/useModal";
import "App.css";

const App = () => {
  const { showModal, activeModal, handleOpenModal, handleCloseModal, isLoading, toggleSpinner } = useModal();

  /**
   * Function allowing to display the loader during the indicated time
   * @return {void}
   */
  const spinnerTimer = () => {
    toggleSpinner();

    setTimeout(() => {
      handleOpenModal("spinner");
    }, 1000);
  };

  return (
    <>
      <main className="salut">
        <button type="button" className="buttonDefault" onClick={() => handleOpenModal("classic")}>
          Modal (classic Modal)
        </button>
        <Modal isOpen={showModal && activeModal === "classic"} close={handleCloseModal} addCloseIcon={true}>
          <h2>classic</h2>
        </Modal>

        <button type="button" className="buttonDefault" onClick={() => handleOpenModal("closeEscape")}>
          Modal (with closeEscape)
        </button>
        <Modal isOpen={showModal && activeModal === "closeEscape"} close={handleCloseModal} addCloseIcon={true} addCloseEscape={true}>
          <h2>closeEscape</h2>
        </Modal>

        <button type="button" className="buttonDefault" onClick={() => handleOpenModal("closeOverlay")}>
          Modal (with closeOverlay)
        </button>
        <Modal isOpen={showModal && activeModal === "closeOverlay"} close={handleCloseModal} addCloseIcon={true} addCloseOverlay={true}>
          <h2>closeOverlay</h2>
        </Modal>

        <button type="button" className="buttonDefault" onClick={() => handleOpenModal("footerButton")}>
          Modal (with footerButton)
        </button>
        <Modal isOpen={showModal && activeModal === "footerButton"} close={handleCloseModal} addFooterButton={true} addCloseIcon={false}>
          <h2>footerButton</h2>
        </Modal>

        <button type="button" className="buttonDefault" onClick={() => handleOpenModal("customClassName")}>
          {" "}
          Modal (with customClassName)
        </button>
        <Modal isOpen={showModal && activeModal === "customClassName"} close={handleCloseModal} addCloseIcon={true} customClassName="custom">
          <h2>customClassName</h2>
        </Modal>
        <button type="button" className="buttonDefault" onClick={spinnerTimer}>
          Modal (with spinner 1s)
        </button>
        <Modal isOpen={showModal && activeModal === "spinner"} close={handleCloseModal} addCloseIcon={true} spinner={isLoading}>
          <h2>spinner</h2>
        </Modal>
      </main>
    </>
  );
};

export default App;
