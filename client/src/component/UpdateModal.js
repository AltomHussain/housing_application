import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
export default function UpdateModal({
  id,
  houseType,
  description,
  houseSold,
  streetName,
  postcode,
  price,
  city,
  image,
  houseNumber,
  GetOneHouseDetail,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [updateInputs, setUpdateInputs] = useState({
    id,
    houseType,
    description,
    houseSold,
    streetName,
    postcode,
    price,
    city,
    image,
    houseNumber,
  });
  const handleUpdate = (e) => {
    let updateData = {
      ...updateInputs,
      [e.target.name]: e.target.value,
    };
    setUpdateInputs(updateData);
  };
  
  const editText = async (id) => {
      try {
          const res = await fetch(`/api/house/${id}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                  houseType: updateInputs.houseType,
                  houseDescription: updateInputs.description,
                  houseSold: updateInputs.houseSold,
                  streetName: updateInputs.streetName,
                  housePostcode: updateInputs.postcode,
                  housePrice: updateInputs.price,
                  houseCity: updateInputs.city,
                  houseImage: updateInputs.image,
                  houseNumber: updateInputs.houseNumber,
                }),
            });
            GetOneHouseDetail();
            handleClose();
        } catch (error) {
            console.log(error.message);
        }
    };


  const cancelUpdates = () => {
    setUpdateInputs({
      id,
      houseType,
      description,
      houseSold,
      streetName,
      postcode,
      price,
      city,
      image,
      houseNumber,
    });
    handleClose();
  };


  return (
    <div>
      <Button
        variant="warning"
        onClick={handleShow}
        data-target={`#id${updateInputs.id}`}
      >
        Edit Details
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        id={`id${updateInputs.id}`}

      >
        <Modal.Header closeButton onClick={() => cancelUpdates()}>
          <Modal.Title>Updating House Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Description</h6>
          <textarea
            className="form-control"
            name="description"
            onChange={handleUpdate}
            value={updateInputs.description}
          ></textarea>
          <h6>Price</h6>
          <input
            type="text"
            name="price"
            onChange={handleUpdate}
            value={updateInputs.price}
            placeholder="name"
            className="form-control"
          />
          <h6>House Image</h6>
          <input
            type="text"
            name="image"
            onChange={handleUpdate}
            value={updateInputs.image}
            placeholder="name"
            className="form-control"
          />
          <h6>House Type</h6>
          <input
            type="text"
            name="houseType"
            onChange={handleUpdate}
            value={updateInputs.houseType}
            placeholder="name"
            className="form-control"
          />
          <h6>
            Is this house sold? if <strong className="text-danger">YES</strong>{" "}
            please write <strong className="text-danger">true</strong>
            otherwise write <strong className="text-danger">false</strong>
          </h6>
          <input
            type="text"
            name="houseSold"
            onChange={handleUpdate}
            value={updateInputs.houseSold}
            placeholder="name"
            className="form-control"
          />
          <p></p>
          <h4>Address</h4>
          <h6>House Number</h6>
          <input
            type="text"
            name="houseNumber"
            onChange={handleUpdate}
            value={updateInputs.houseNumber}
            placeholder="name"
            className="form-control"
          />
          <h6>Street Name</h6>
          <input
            name="streetName"
            onChange={handleUpdate}
            value={updateInputs.streetName}
            type="text"
            placeholder="Street Name"
            className="form-control"
          />
          <h6>Located In</h6>
          <input
            name="city"
            onChange={handleUpdate}
            value={updateInputs.city}
            type="text"
            placeholder="Located In"
            className="form-control"
          />
          <h6>Postcode</h6>
          <input
            type="text"
            name="postcode"
            onChange={handleUpdate}
            value={updateInputs.postcode}
            placeholder="Postcode"
            className="form-control"
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => cancelUpdates()}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => editText(updateInputs.id)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
