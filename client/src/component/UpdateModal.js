import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
export default function UpdateModal({
  id,
  houseType,
  Description,
  houseSold,
  streetName,
  postcode,
  price,
  city,
  image,
  houseNumber,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [updateInputs, setUpdateInputs] = useState({
    id,
    houseType,
    Description,
    houseSold,
    streetName,
    postcode,
    price,
    city,
    image,
    houseNumber,
  });

  return (
    <div>
      <Button variant="warning" onClick={handleShow}>
        Edit Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Updating House Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Description</h6>
          <textarea className="form-control"></textarea>
          <h6>Price</h6>
          <input type="text" placeholder="name" className="form-control" />
          <h6>House Image</h6>
          <input type="text" placeholder="name" className="form-control" />
          <h6>House Type</h6>
          <input type="text" placeholder="name" className="form-control" />
          <h6>Is this house sold</h6>
          <input type="text" placeholder="name" className="form-control" />
          <h4>Address</h4>
          <h6>House Number</h6>
          <input type="text" placeholder="name" className="form-control" />
          <h6>Street Name</h6>
          <input
            type="text"
            placeholder="Street Name"
            className="form-control"
          />
          <h6>Located In</h6>
          <input
            type="text"
            placeholder="Located In"
            className="form-control"
          />
          <h6>Postcode</h6>
          <input type="text" placeholder="Postcode" className="form-control" />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
