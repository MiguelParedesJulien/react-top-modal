import React from "react";
import PropTypes from "prop-types";
import "./spinner.css";

const Spinner = (props) => {
  return (
    <div className={`modalOverlay ${props.customClassName ? "modalOverlay-" + props.customClassName : ""}`}>
      <aside className={`modalWrapper ${props.customClassName ? "modalWrapper-" + props.customClassName : ""}`} aria-modal aria-hidden tabIndex={-1} role="dialog">
        <section className={`modal ${props.customClassName ? "modal-" + props.customClassName : ""}`}>
          <article className={`modalSection ${props.customClassName ? "modalBody-" + props.customClassName : ""}`}>
            <div className={`spinner ${props.customClassName ? "loader-" + props.customClassName : ""}`}></div>
          </article>
        </section>
      </aside>
    </div>
  );
};

Spinner.propTypes = {
  customClassName: PropTypes.string,
};

export default Spinner;
