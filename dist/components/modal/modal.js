"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

require("./modal.css");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Spinner = _interopRequireDefault(require("../Spinner/Spinner"));

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * React component allowing to create a modal with different customization parameters
 * @param {object} isOpen - Allows you to display the modal
 * @param {bool} showModal - Allows you to display the modal
 * @param {string} activeModal - Allows you to display the modal
 * @param {func} close - Function allows you to remove the modal
 * @param {array} children - Array containing the body of the modal
 * @param {bool} addCloseEscape - Allows to add the functionality of modal closure using the 'Esc' key
 * @param {bool} addCloseOverlay - Allows to add the functionality of modal closing by clicking on the overlay
 * @param {bool} addCloseIcon - Allows to add or not the modal closing icon
 * @param {string} customClassName - Allows you to customize the class name of each element
 * @param {bool} addFooterButton - Allows to add or not a button present in the footer of the modal
 * @param {bool} spinner - Allows to add or not a spinner during the loading of the modal
 * @return {void}
 */
const Modal = (_ref) => {
  let {
    isOpen = {
      showModal: false,
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
  } = _ref;
  (0, _react.useEffect)(() => {
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
    ? /*#__PURE__*/ _reactDom.default.createPortal(
        /*#__PURE__*/ _react.default.createElement(
          "div",
          {
            className: "modalOverlay ".concat(customClassName ? "modalOverlay-" + customClassName : ""),
            onClick: addCloseOverlay ? closeModal : null,
          },
          /*#__PURE__*/ _react.default.createElement(
            "aside",
            {
              className: "modalWrapper ".concat(customClassName ? "modalWrapper-" + customClassName : ""),
            },
            /*#__PURE__*/ _react.default.createElement(
              "section",
              {
                className: "modal ".concat(customClassName ? "modal-" + customClassName : ""),
                onClick: (e) => e.stopPropagation(),
              },
              /*#__PURE__*/ _react.default.createElement(
                "header",
                {
                  className: "modalHeader ".concat(customClassName ? "modalHeader-" + customClassName : ""),
                },
                addCloseIcon &&
                  /*#__PURE__*/ _react.default.createElement(
                    "button",
                    {
                      "aria-label": "Close",
                      className: "modalCloseButton ".concat(customClassName ? "modalCloseButton-" + customClassName : ""),
                      "data-dismiss": "modal",
                      onClick: close,
                      type: "button",
                    },
                    /*#__PURE__*/ _react.default.createElement("i", {
                      className: "fas fa-times",
                    })
                  )
              ),
              /*#__PURE__*/ _react.default.createElement(
                "section",
                {
                  className: "modalSection ".concat(customClassName ? "modalSection-" + customClassName : ""),
                },
                children
              ),
              /*#__PURE__*/ _react.default.createElement(
                "footer",
                {
                  className: "modalFooter ".concat(customClassName ? "modalFooter-" + customClassName : ""),
                },
                addFooterButton &&
                  /*#__PURE__*/ _react.default.createElement(
                    "button",
                    {
                      className: "modalButton ".concat(customClassName ? "modalButton-" + customClassName : ""),
                      onClick: close,
                    },
                    "Close Modal"
                  )
              )
            )
          )
        ),
        document.body
      )
    : spinner
    ? /*#__PURE__*/ _reactDom.default.createPortal(
        /*#__PURE__*/ _react.default.createElement(_Spinner.default, {
          customClassName: customClassName,
        }),
        document.body
      )
    : null;
};

Modal.defaultProps = {
  addCloseEscape: false,
  addCloseOverlay: false,
  addCloseIcon: true,
  addFooterButton: false,
  spinner: false,
};
Modal.propTypes = {
  close: _propTypes.default.func.isRequired,
  addCloseEscape: _propTypes.default.bool,
  addCloseOverlay: _propTypes.default.bool,
  addCloseIcon: _propTypes.default.bool,
  customClassName: _propTypes.default.string,
  addFooterButton: _propTypes.default.bool,
  spinner: _propTypes.default.bool,
};
var _default = Modal;
exports.default = _default;
