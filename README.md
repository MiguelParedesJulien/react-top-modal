[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

## Get started

### Examples

- [Live Demo](https://modal-top-react.netlify.app)
- [Code Example](https://github.com/MiguelParedesJulien/react-top-modal/blob/master/src/App.js)

### Prerequisites for install

- You need [Git](https://git-scm.com) to clone the repository
- You need [Node](https://nodejs.org/en/) (v16.10.0) to run the npm commands

### Installation

- using NPM  
  `$ npm install react-top-modal`
- using yarn  
  `$ yarn install react-top-modal`

Link to access the package [here](https://www.npmjs.com/package/modal-top)

### Basic Usage

Import the Modal component and useModal Hook in your React components:

```js
import { Modal, useModal } from "react-top-modal";
```

After you've imported the Modal component and useModal Hook, you're ready to start using Modal inside your components! 🎉
(isOpen & close are required)

```js
import React from "react";
import Modal, { useModal } from "react-top-modal";

const App = () => {
  const { showModal, activeModal, handleOpenModal, handleCloseModal } = useModal();

  return (
    <>
      <button type="button" className="buttonDefault" onClick={() => handleOpenModal("classic")}>
        Modal (classic Modal)
      </button>
      <Modal isOpen={showModal && activeModal === "classic"} close={handleCloseModal}>
        <h2>classic</h2>
      </Modal>
    </>
  );
};

export default App;
```

### Features

- Add content in modal using createPortal 🚪
- Close the modal with Esc key ⌨️
- Close the modal on click overlay 🖱
- Display a closing icon in the header ✖️
- Customize the className of each element ⏺
- Display a close button in the footer 🅱️
- Add a spinner before the modal displays ♾

### Props

| Props           |   Type   | Required | Default |                                                                                                   Description |
| :-------------- | :------: | :------: | :-----: | ------------------------------------------------------------------------------------------------------------: |
| isOpen          |  Object  | Required |    -    | An object containing two props, 'showModal' & 'activeModal', this object passed to modal allows to display it |
| showModal       |   Bool   | Required |  False  |                                                                         State allows you to display the modal |
| activeModal     |  String  | Required |    -    |                                                         Add a string to identify which modal should be opened |
| Close           | Function | Required |    -    |                                                                       Function allows you to remove the modal |
| addCloseEscape  |   Bool   | Optional |  False  |                                          Allows to add the functionality of modal closure using the 'Esc' key |
| addCloseOverlay |   Bool   | Optional |  False  |                                   Allows to add the functionality of modal closing by clicking on the overlay |
| addCloseIcon    |   Bool   | Optional |  True   |                                          If true, a closing icon will be displayed in the header of the modal |
| customClassName |  String  | Optional |    -    |                                                        Allows you to customize the class name of each element |
| addFooterButton |   Bool   | Optional |  False  |                                          If true, a close button will be displayed in the footer of the modal |
| spinner         |   Bool   | Optional |  False  |                                Allows to add a loader which will be displayed during the loading of the modal |

### Modal with close Esc

You have the possibility to add the functionality of modal closure using the 'Esc' key by adding the props 'addCloseEsc' with the value 'true'.

```js
import React from "react";
import Modal, { useModal } from "react-top-modal";

const App = () => {
  const { showModal, activeModal, handleOpenModal, handleCloseModal } = useModal();

  return (
    <>
      <button type="button" className="buttonDefault" onClick={() => handleOpenModal("closeEscape")}>
        Modal (with closeEscape)
      </button>
      <Modal isOpen={showModal && activeModal === "closeEscape"} close={handleCloseModal} addCloseEscape={true}>
        <h2>closeEscape</h2>
      </Modal>
    </>
  );
};

export default App;
```

### Modal with Close Overlay

You have the option to add the functionality of modal closing using the overlay click by adding the props 'addCloseOverlay' with the value 'true'.

```js
import React from "react";
import Modal, { useModal } from "react-top-modal";

const App = () => {
  const { showModal, activeModal, handleOpenModal, handleCloseModal } = useModal();

  return (
    <>
      <button type="button" className="buttonDefault" onClick={() => handleOpenModal("closeOverlay")}>
        Modal (with closeOverlay)
      </button>
      <Modal isOpen={showModal && activeModal === "closeOverlay"} close={handleCloseModal} addCloseOverlay={true}>
        <h2>closeOverlay</h2>
      </Modal>
    </>
  );
};

export default App;
```

### Modal with footerButton

You have the possibility to add a close button in the footer by adding the props 'addFooterButton' with the value 'true'.

```js
import React from "react";
import Modal, { useModal } from "react-top-modal";

const App = () => {
  const { showModal, activeModal, handleOpenModal, handleCloseModal } = useModal();

  return (
    <>
      <button type="button" className="buttonDefault" onClick={() => handleOpenModal("footerButton")}>
        Modal (with footerButton)
      </button>
      <Modal isOpen={showModal && activeModal === "footerButton"} close={handleCloseModal} addFooterButton={true} addCloseIcon={false}>
        <h2>footerButton</h2>
      </Modal>
    </>
  );
};

export default App;
```

### Modal with Spinner

You have the option to add a spinner when you expect an asynchronous function.
Launch the spinner, the toggle will automatically close it and make the modal appear once your data has been recovered.

```js
import React from "react";
import Modal, { useModal } from "react-top-modal";

const App = () => {
  const { showModal, activeModal, handleOpenModal, handleCloseModal, isLoading, toggleSpinner } = useModal();

  const spinnerTimer = () => {
    toggleSpinner();

    setTimeout(() => {
      handleOpenModal("spinner");
    }, 1000);
  };
  return (
    <>
      <button type="button" className="buttonDefault" onClick={spinnerTimer}>
        Modal (with spinner 1s)
      </button>
      <Modal isOpen={showModal && activeModal === "spinner"} close={handleCloseModal} spinner={isLoading}>
        <h2>spinner</h2>
      </Modal>
    </>
  );
};

export default App;
```

### Dependencies

- [@testing-library/jest-dom](https://github.com/testing-library/jest-dom#installation): v5.16.2,
- [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/): v12.1.4,
- [@testing-library/react-hooks](https://www.npmjs.com/package/@testing-library/react-hooks): v7.0.2,
- [@testing-library/user-event](https://www.npmjs.com/package/@testing-library/user-event): v12.8.3,
- [react](https://reactjs.org): v17.0.2,
- [react-dom](https://www.npmjs.com/package/react-dom): v17.0.2,
- [react-scripts](https://www.npmjs.com/package/react-scripts): v5.0.0,

## Auteur

- [Miguel Paredes Julien](https://github.com/MiguelParedesJulien)
