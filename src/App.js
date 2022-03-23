import React from "react";
import Modal from "lib/components/modal/modal";
import useModal from "lib/utils/useModal";
import "App.css";

const App = () => {
  const { isShowing: showModal, toggle: toggleModal } = useModal();
  const { isShowing: showModalWithCloseEsc, toggle: toggleModalWithCloseEsc } = useModal();
  const { isShowing: showModalWithCloseOverlay, toggle: toggleModalWithCloseOverlay } = useModal();
  const { isShowing: showModalWithFooterButton, toggle: toggleModalWithFooterButton } = useModal();
  const { isShowing: showModalWithSpinner, toggle: toggleModalSpinner, isLoading: showSpinner, toggleSpinner } = useModal();
  const { isShowing: showModalWithClassName, toggle: toggleModalWithClassName } = useModal();

  /**
   * Function allowing to display the loader during the indicated time
   * @return {void}
   */
  const spinnerTimer = () => {
    toggleSpinner();

    setTimeout(() => {
      toggleModalSpinner();
    }, 1000);
  };

  return (
    <>
      <main className="salut">
        <button type="submit" className="buttonDefault" onClick={toggleModal}>
          Modal (classic Modal)
        </button>
        <Modal isShowing={showModal} hide={toggleModal} addCloseIcon={true}>
          <h1>Hello, Modal 1 </h1>
          <p>bla bla bla 1</p>
        </Modal>

        <button type="submit" className="buttonDefault" onClick={toggleModalWithCloseEsc}>
          Modal (with closeEscape)
        </button>
        <Modal isShowing={showModalWithCloseEsc} hide={toggleModalWithCloseEsc} addCloseIcon={true} addCloseEscape={true}>
          <h1>Hello, Modal 2 </h1>
          <p>bla bla bla 2</p>
        </Modal>

        <button type="submit" className="buttonDefault" onClick={toggleModalWithCloseOverlay}>
          Modal (with closeOverlay)
        </button>
        <Modal isShowing={showModalWithCloseOverlay} hide={toggleModalWithCloseOverlay} addCloseIcon={true} addCloseOverlay={true}>
          <h1>Hello, Modal 3 </h1>
          <p>bla bla bla 3</p>
        </Modal>

        <button type="submit" className="buttonDefault" onClick={toggleModalWithFooterButton}>
          Modal (with footerButton)
        </button>
        <Modal isShowing={showModalWithFooterButton} hide={toggleModalWithFooterButton} addCloseIcon={false} addCloseOverlay={true} addFooterButton={true}>
          <h1>Hello, Modal 4 </h1>
          <p>bla bla bla 4</p>
        </Modal>
        <button type="submit" className="buttonDefault" onClick={spinnerTimer}>
          Modal (with loader after 1s)
        </button>
        <Modal isShowing={showModalWithSpinner} hide={toggleModalSpinner} spinner={showSpinner} addCloseIcon={false} addCloseOverlay={true} addFooterButton={true}>
          <h1>Hello, Modal 5 </h1>
          <p>bla bla bla 5 </p>
        </Modal>
        <button type="submit" className="buttonDefault" onClick={toggleModalWithClassName}>
          Modal (with customClassName)
        </button>
        <Modal isShowing={showModalWithClassName} hide={toggleModalWithClassName} addCloseIcon={false} addCloseOverlay={true} addFooterButton={true} customClassName="custom">
          <h1>Hello, Modal 6 </h1>
          <p>bla bla bla 6</p>
        </Modal>
      </main>
    </>
  );
};

export default App;
