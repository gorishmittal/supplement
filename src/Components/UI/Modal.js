import { Fragment } from "react";
import ReactDOM from 'react-dom';

import Styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={Styles.backdrop} onClick={props.onhideCarts}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={Styles.modal}>
      <div className={Styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onhideCarts={props.onhideCarts}></Backdrop>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
