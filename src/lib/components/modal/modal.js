import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Spinner from "../spinner/spinner";
import "./modal.css";

/**
 * React component allowing to create a modal with different customization parameters
 * @param {bool} isShowing - Allows you to display the modal
 * @param {func} hide - Allows you to remove the modal
 * @param {array} children - Array containing the body of the modal
 * @param {bool} addCloseEscape - Allows to add the functionality of modal closure using the 'Esc' key
 * @param {bool} addCloseOverlay - Allows to add the functionality of modal closing by clicking on the overlay
 * @param {bool} addCloseIcon - Allows to add or not the modal closing icon
 * @param {string} customClassName - Allows you to customize the class name of each element
 * @param {bool} addFooterButton - Allows to add or not a button present in the footer of the modal
 * @param {bool} spinner - Allows to add or not a spinner during the loading of the modal
 * @return {void}
 */
const Modal = ({
  isOpen = {
    showModal: true,
    activeModal: "",
  },
  close,
  children,
  addCloseEscape,
  addCloseOverlay,
  addCloseIcon,
  customClassName,
  addFooterButton,
  spinner,
}) => {
  useEffect(() => {
    return window.addEventListener("keyup", (e) => {
      if (addCloseEscape) {
        closeModalEvent(e);
      }
    });
  });

  /**
   * Function allowing to close the modal if it is present on the screen
   * @return {void}
   */
  const closeModal = () => {
    if (isOpen) {
      close();
    }
  };

  /**
   * Function used to close the modal when the Esc key is clicked
   * @param {event} e
   * @return {void}
   */
  const closeModalEvent = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };
  return isOpen
    ? ReactDOM.createPortal(
        <div>
          <div className={`modalOverlay ${customClassName ? "modalOverlay-" + customClassName : ""}`} onClick={addCloseOverlay ? closeModal : null}>
            <aside className={`modalWrapper ${customClassName ? "modalWrapper-" + customClassName : ""}`}>
              <section className={`modal ${customClassName ? "modal-" + customClassName : ""}`} onClick={(e) => e.stopPropagation()}>
                <header className={`modalHeader ${customClassName ? "modalHeader-" + customClassName : ""}`}>
                  {addCloseIcon && (
                    <button aria-label="Close" className={`modalCloseButton ${customClassName ? "modalCloseButton-" + customClassName : ""}`} data-dismiss="modal" onClick={close} type="button">
                      <i className="fas fa-times"></i>
                    </button>
                  )}
                </header>
                <section className={`modalSection ${customClassName ? "modalSection-" + customClassName : ""}`}>{children}</section>
                <footer className={`modalFooter ${customClassName ? "modalFooter-" + customClassName : ""}`}>
                  {addFooterButton && (
                    <button className={`modalButton ${customClassName ? "modalButton-" + customClassName : ""}`} onClick={close}>
                      Close Modal
                    </button>
                  )}
                </footer>
              </section>
            </aside>
          </div>
        </div>,
        document.getElementById("portal")
      )
    : spinner
    ? ReactDOM.createPortal(<Spinner customClassName={customClassName} />, document.getElementById("portal"))
    : null;
};

Modal.defaultProps = {
  isShowing: false,
  addCloseEscape: false,
  addCloseOverlay: false,
  addCloseIcon: true,
  addFooterButton: false,
  spinner: false,
};

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  children: PropTypes.object,
  addCloseEscape: PropTypes.bool,
  addCloseOverlay: PropTypes.bool,
  addCloseIcon: PropTypes.bool,
  customClassName: PropTypes.string,
  addFooterButton: PropTypes.bool,
  spinner: PropTypes.bool,
};

export default Modal;
