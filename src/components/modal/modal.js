import { FaTimes } from "react-icons/fa";
import React, { useEffect } from "react";
import ReactDom from "react-dom";
import "components/modal/modal.css";

function Modal({ isShowing, hide, children, addCloseEscape, addCloseOverlay, addCloseIcon, customClassName, addButtonFooter }) {
  useEffect(() => {
    return window.addEventListener("keyup", (e) => {
      if (addCloseEscape) {
        closeModalEvent(e);
      }
    });
  });

  const closeModal = () => {
    if (isShowing) {
      hide();
    }
  };

  const closeModalEvent = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };
  return isShowing
    ? ReactDom.createPortal(
        <>
          <div className={`modalOverlay ${customClassName ? "modalOverlay-" + customClassName : ""}`} onClick={addCloseOverlay ? closeModal : null}>
            <aside className={`modal ${customClassName ? "modal-" + customClassName : ""}`}>
              <header className={`modalHeader ${customClassName ? "modalHeader-" + customClassName : ""}`}>
                {addCloseIcon && (
                  <button aria-label="Close" className={`modalCloseButton ${customClassName ? "modalCloseButton-" + customClassName : ""}`} data-dismiss="modal" onClick={hide} type="button">
                    <FaTimes />
                  </button>
                )}
              </header>
              <section className={`modalSection ${customClassName ? "modalSection-" + customClassName : ""}`}>{children}</section>
              <footer className={`modalFooter ${customClassName ? "modalFooter-" + customClassName : ""}`}>
                {addButtonFooter && (
                  <button className={`modalButton ${customClassName ? "modalButton-" + customClassName : ""}`} onClick={hide}>
                    Close Modal
                  </button>
                )}
              </footer>
            </aside>
          </div>
        </>,
        document.getElementById("portal")
      )
    : "";
}

export default Modal;
