import { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
    if (!isShowing) {
      setIsLoading(false);
    }
  };

  const toggleSpinner = () => {
    setIsLoading(!isLoading);
  };

  return {
    isShowing,
    toggle,
    isLoading,
    toggleSpinner,
  };
};

export default useModal;
