"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});

var _slicedToArray = (function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
})();

var _react = require("react");

var useModal = function useModal() {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isShowing = _useState2[0],
    setIsShowing = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoading = _useState4[0],
    setIsLoading = _useState4[1];

  /**
   * Function allowing to change the state in order to make the modal appear or not
   * If the modal is displayed, we remove the spinner
   * @return {void}
   */

  var toggle = function toggle() {
    setIsShowing(!isShowing);
    if (!isShowing) {
      setIsLoading(false);
    }
  };

  /**
   * Function allowing to change the state in order to make the spinner appear or not
   * @return {void}
   */
  var toggleSpinner = function toggleSpinner() {
    setIsLoading(!isLoading);
  };

  return {
    isShowing: isShowing,
    toggle: toggle,
    isLoading: isLoading,
    toggleSpinner: toggleSpinner,
  };
};

exports.default = useModal;
