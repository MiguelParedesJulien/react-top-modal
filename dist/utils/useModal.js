"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

const useModal = () => {
  const [showModal, setShowModal] = (0, _react.useState)(false);
  const [activeModal, setActiveModal] = (0, _react.useState)("");
  const [isLoading, setIsLoading] = (0, _react.useState)(false);

  const handleOpenModal = (val) => {
    setActiveModal(val);
    setShowModal(!showModal);

    if (!showModal) {
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(!showModal);
    setActiveModal("");
  };

  const toggleSpinner = () => {
    setIsLoading(!isLoading);
  };

  return {
    showModal,
    activeModal,
    handleOpenModal,
    handleCloseModal,
    isLoading,
    toggleSpinner,
  };
};

var _default = useModal;
exports.default = _default;
