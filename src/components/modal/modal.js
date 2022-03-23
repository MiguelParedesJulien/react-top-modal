import { FaTimes } from "react-icons/fa";
import React, { useEffect } from "react";
import ReactDom from "react-dom";
import "components/modal/modal.css";

function Modal({ isShowing, hide, children, addCloseEscape }) {
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
          <div className="modalOverlay">
            <div className="modalWrapper">
              <aside className="modal">
                <header className="modalHeader">
                  <button aria-label="Close" className="modalCloseButton" data-dismiss="modal" onClick={hide} type="button">
                    <FaTimes />
                  </button>
                </header>
                <section className="modalSection">{children}</section>
                <footer className="modalFooter">
                  <button className="modalButton" onClick={hide}>
                    Close Modal
                  </button>
                </footer>
              </aside>
            </div>
          </div>
        </>,
        document.getElementById("portal")
      )
    : "";
}

export default Modal;
