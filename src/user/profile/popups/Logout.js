import React from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";
import PropTypes from "prop-types";

const Logout = (props) => {
  return (
    <Modal {...props} className="modal">
      <Modal.Header
        closeButton
        className="modal__header"
        style={props.borderStyle}
      >
        <Modal.Title className="modal__title" style={props.borderStyle}>
          <div className="modal__main-title">Logout</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal__body" style={props.borderStyle}>
        <Form className="modal__form" style={props.borderStyle}>
          <Form.Row className="modal__row">
            <Form.Group
              as={Col}
              controlId="formGridFirstName"
              className="modal__group"
            >
              <Form.Label className="modal__message">
                Are you sure you want logout of Donut?
              </Form.Label>
            </Form.Group>
          </Form.Row>
        </Form>
      </Modal.Body>
      <div>
        <Button onClick={props.onHide} className="btn-curved">
          Yes
        </Button>
        <Button onClick={props.onHide} className="btn-curved-inactive">
          No
        </Button>
      </div>
    </Modal>
  );
};
Logout.propTypes = {
  onClick: PropTypes.func,
  show: PropTypes.bool,
  style: PropTypes.object,
};

export default Logout;
