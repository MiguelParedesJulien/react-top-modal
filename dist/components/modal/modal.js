"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});

var _jsx = (function () {
  var REACT_ELEMENT_TYPE = (typeof Symbol === "function" && Symbol.for && Symbol.for("react.element")) || 0xeac7;
  return function createRawReactElement(type, props, key, children) {
    var defaultProps = type && type.defaultProps;
    var childrenLength = arguments.length - 3;
    if (!props && childrenLength !== 0) {
      props = {};
    }
    if (props && defaultProps) {
      for (var propName in defaultProps) {
        if (props[propName] === void 0) {
          props[propName] = defaultProps[propName];
        }
      }
    } else if (!props) {
      props = defaultProps || {};
    }
    if (childrenLength === 1) {
      props.children = children;
    } else if (childrenLength > 1) {
      var childArray = Array(childrenLength);
      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 3];
      }
      props.children = childArray;
    }
    return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : "" + key, ref: null, props: props, _owner: null };
  };
})();

var _fa = require("react-icons/fa");

require("lib/components/Modal/Modal.css");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Spinner = require("lib/components/Spinner/Spinner");

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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
var _ref2 = _jsx(_fa.FaTimes, {});

var Modal = function Modal(_ref) {
  var isShowing = _ref.isShowing,
    hide = _ref.hide,
    children = _ref.children,
    addCloseEscape = _ref.addCloseEscape,
    addCloseOverlay = _ref.addCloseOverlay,
    addCloseIcon = _ref.addCloseIcon,
    customClassName = _ref.customClassName,
    addFooterButton = _ref.addFooterButton,
    spinner = _ref.spinner;

  (0, _react.useEffect)(function () {
    return window.addEventListener("keyup", function (e) {
      if (addCloseEscape) {
        closeModalEvent(e);
      }
    });
  });

  /**
   * Function allowing to close the modal if it is present on the screen
   * @return {void}
   */
  var closeModal = function closeModal() {
    if (isShowing) {
      hide();
    }
  };

  /**
   * Function used to close the modal when the Esc key is clicked
   * @param {event} e
   * @return {void}
   */
  var closeModalEvent = function closeModalEvent(e) {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  return isShowing
    ? _reactDom2.default.createPortal(
        _jsx(
          "div",
          {},
          void 0,
          _jsx(
            "div",
            {
              className: "modalOverlay " + (customClassName ? "modalOverlay-" + customClassName : ""),
              onClick: addCloseOverlay ? closeModal : null,
            },
            void 0,
            _jsx(
              "aside",
              {
                className: "modalWrapper " + (customClassName ? "modalWrapper-" + customClassName : ""),
              },
              void 0,
              _jsx(
                "section",
                {
                  className: "modal " + (customClassName ? "modal-" + customClassName : ""),
                },
                void 0,
                _jsx(
                  "header",
                  {
                    className: "modalHeader " + (customClassName ? "modalHeader-" + customClassName : ""),
                  },
                  void 0,
                  addCloseIcon &&
                    _jsx(
                      "button",
                      {
                        "aria-label": "Close",
                        className: "modalCloseButton " + (customClassName ? "modalCloseButton-" + customClassName : ""),
                        "data-dismiss": "modal",
                        onClick: hide,
                        type: "button",
                      },
                      void 0,
                      _ref2
                    )
                ),
                _jsx(
                  "section",
                  {
                    className: "modalSection " + (customClassName ? "modalSection-" + customClassName : ""),
                  },
                  void 0,
                  children
                ),
                _jsx(
                  "footer",
                  {
                    className: "modalFooter " + (customClassName ? "modalFooter-" + customClassName : ""),
                  },
                  void 0,
                  addFooterButton &&
                    _jsx(
                      "button",
                      {
                        className: "modalButton " + (customClassName ? "modalButton-" + customClassName : ""),
                        onClick: hide,
                      },
                      void 0,
                      "Close Modal"
                    )
                )
              )
            )
          )
        ),
        document.getElementById("portal")
      )
    : spinner
    ? _reactDom2.default.createPortal(
        _jsx(_Spinner2.default, {
          customClassName: customClassName,
        }),
        document.getElementById("portal")
      )
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
  isShowing: _propTypes2.default.bool.isRequired,
  hide: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.array,
  addCloseEscape: _propTypes2.default.bool,
  addCloseOverlay: _propTypes2.default.bool,
  addCloseIcon: _propTypes2.default.bool,
  customClassName: _propTypes2.default.string,
  addFooterButton: _propTypes2.default.bool,
  spinner: _propTypes2.default.bool,
};

exports.default = Modal;
