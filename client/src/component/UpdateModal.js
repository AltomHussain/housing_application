import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
export default function UpdateModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(Modal.Label);
  return (
    <div>
      <Button variant="warning" onClick={handleShow}>
       Edit Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!
            <h6>Price</h6>
            <input type="text" placeholder="name" className="form-control"/>
            <h6>Description</h6>
            <textarea className="form-control"></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
