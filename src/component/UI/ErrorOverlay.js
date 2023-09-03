import React from "react";
import ReactDOM from "react-dom";

import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorOverlay.module.css";

const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};
const Model = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p> {props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onConfirm}> Okay </Button>
      </footer>
    </Card>
  );
};

const ErrorOverlay = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Model
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorOverlay;
