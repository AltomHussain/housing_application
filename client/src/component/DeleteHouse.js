import React, { useState, useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { GetAllHouses,allHouses, setAllHouses } from "../component/Context/GetAllHouses";
 import { toast } from "react-toastify";
export default function DeleteHouse({id}) {
      const { allHouses, setAllHouses } = useContext(GetAllHouses);
      console.log(allHouses);
 const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);
const handleDelete = (id) =>{
    fetch(`/api/house/${id}`, {
      method: "DELETE",
    })
  

      .then(setAllHouses(allHouses.filter((house) => house.house_id !== id)))
      .then(handleClose())
      .then(console.log("deleted successfully"))
      .then(toast.success("deleted successfully 😜"))
          .then((window.location = "/home"))
      .catch((error) => console.log(error));
}
 return (
   <>
     <Button variant="danger" onClick={handleShow}>
       DELETE
     </Button>

     <Modal show={show} onHide={handleClose}>
       <Modal.Header closeButton>
         <Modal.Title>Delete House</Modal.Title>
       </Modal.Header>
       <Modal.Body>Are you sure you want to delete this house 🤔?</Modal.Body>
       <Modal.Footer>
         <Button variant="secondary" onClick={handleClose}>
           Close
         </Button>
         <Button variant="primary" onClick={()=>handleDelete(id)}>
        YES DELETE
         </Button>
       </Modal.Footer>
     </Modal>
   </>
 );
}
