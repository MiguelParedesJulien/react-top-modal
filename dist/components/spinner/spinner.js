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

require("lib/components/Spinner/Spinner.css");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Spinner = function Spinner(props) {
  return _jsx(
    "div",
    {
      className: "modalOverlay " + (props.customClassName ? "modalOverlay-" + props.customClassName : ""),
    },
    void 0,
    _jsx(
      "aside",
      {
        className: "modalWrapper " + (props.customClassName ? "modalWrapper-" + props.customClassName : ""),
        "aria-modal": true,
        "aria-hidden": true,
        tabIndex: -1,
        role: "dialog",
      },
      void 0,
      _jsx(
        "section",
        {
          className: "modal " + (props.customClassName ? "modal-" + props.customClassName : ""),
        },
        void 0,
        _jsx(
          "article",
          {
            className: "modalSection " + (props.customClassName ? "modalBody-" + props.customClassName : ""),
          },
          void 0,
          _jsx("div", {
            className: "spinner " + (props.customClassName ? "loader-" + props.customClassName : ""),
          })
        )
      )
    )
  );
};

Spinner.propTypes = {
  customClassName: _propTypes2.default.string,
};

exports.default = Spinner;
