import React, { useState } from "react";
import "./Admin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  Modal } from "semantic-ui-react";
import axios from "axios";
import SERVER_URL from "../../utils/constants.js";

function Admin() {
  const [tableData, setTableData] = useState([]);
  const [ID, setID] = useState("");
  const [show, setShow] = useState(false);
  const [telNumber, settelNumber] = useState("");
  const [prefix, setprefix] = useState("");
  const [open, setOpen] = useState(false);
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [quote, setquote] = useState("");

  function getUser(e) {
    e.preventDefault();
    console.log(ID);

    const endpointURL = `${SERVER_URL}/capstone/applicant`;
    openModal();
    axios.get(endpointURL + `?id=${ID}`).then((response) => {
      console.log(response.data);
      setfirstName(response.data.firstName);
      setLastName(response.data.lastName);
      setquote(response.data.quote);
      settelNumber(response.data.telNumber);

    })
      .catch((err) =>
        console.log(err));
  }
  function deleteUser() {
    if (tableData) {
       const endpointURL = `${SERVER_URL}/capstone/delete`;
      axios
        .delete(endpointURL + `?id=${ID}`)
        .then(() => {
          notify();
        })
    }
  }

  function putUserPhone(e) {
    e.preventDefault();

   const endpointURL = `${SERVER_URL}/capstone/customerDetails`;

    if (telNumber.length === 11) {
      axios
        .put(endpointURL + `?id=${ID}&newTelephoneNumber=${telNumber}`)
        .then((response) => {
          console.log(response);
          telephoneUpdated();
          setTimeout(function () {
            window.location.reload();
          }, 5000);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Failed();
      setTimeout(function () {
        window.location.reload();
      }, 5000);
    }
  }
  function notify() {
    toast("Success, user deleted.");
    setTimeout(function () {
      window.location.reload();
    }, 5000);
  }

  function telephoneUpdated() {
    toast("Telephone Updated.");
  }

  function Failed() {
    toast("Failed, please try again.");

  }

  function openModal(){
    setOpen(true);
  }
  return (
    <div>
      <div class="ui mini three item menu">
        <a href="http://demo-react-spring-demo-react-spring.allstatejenkins2.conygre.com/" class="item">
          Home
        </a>
        <a href="http://demo-react-spring-demo-react-spring.allstatejenkins2.conygre.com/Create" class="item">
          Get a Quote
        </a>
        <a href="http://localhost:3000/Admin" class="item">
          Admin Panel
        </a>
      </div>
      <h1 style={{ marginTop: "70px" }}> Welcome to the Admin Panel </h1>
      <div>
        <ToastContainer />
      </div>
      <div class="formID">
        <Form>
          <Form.Group className="mb-3" controlId="formUserID">
          <h3 id = "customerView"> <i class="address card outline icon"></i>View a customer </h3>
            <Form.Label>User ID:</Form.Label>
            <Form.Control
              type="text"
              placeholder="ID"
              onChange={(e) => setID(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={getUser}>
            Submit
          </Button>
          <Modal size="tiny" open={open}>
            <Modal.Header>User Information:</Modal.Header>
            <Modal.Content>
              <p>First Name is: {firstName}</p>
              <p>Second Name is: {lastName}</p>
              <p>Quote Amount is: {quote}</p>
              <p>Telephone is: {telNumber}</p>
            </Modal.Content>
            <Modal.Actions>
              <Button positive onClick={() => setOpen(false)}>
                            Close
                          </Button>
                          <Button  onClick={() => deleteUser() }>
                            Delete User
                          </Button>
            </Modal.Actions>
          </Modal>
        </Form>
      </div>
      <div class="updateTelNumber">
        <h3 class="telNumberHeader"><i class="phone icon"></i>Update Telephone Number</h3>
        <div class="formID">
          <Form>
            <Form.Group className="mb-3" controlId="formUserID">
              <Form.Label>User ID:</Form.Label>
              <Form.Control
                type="text"
                placeholder="ID"
                onChange={(e) => setID(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formUserID">
              <Form.Label>Phone Number: </Form.Label>
              <Form.Control
                type="number"
                placeholder="Telephone Number"
                onChange={(e) => settelNumber(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={putUserPhone}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Admin;
