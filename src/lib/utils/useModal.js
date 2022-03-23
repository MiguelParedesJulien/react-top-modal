import { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Function allowing to change the state in order to make the modal appear or not
   * If the modal is displayed, we remove the spinner
   * @return {void}
   */
  const toggle = () => {
    setIsShowing(!isShowing);
    if (!isShowing) {
      setIsLoading(false);
    }
  };

  /**
   * Function allowing to change the state in order to make the spinner appear or not
   * @return {void}
   */
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
