import React, { useState } from "react";
import "./Admin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

function Admin() {
  const [tableData, setTableData] = useState([]);
  const [ID, setID] = useState("");
  const [show, setShow] = useState(false);
  const [telNumber, settelNumber] = useState("");
  const [prefix, setprefix] = useState("");

  function getUser(e) {
    e.preventDefault();
    console.log(ID);

    const endpointURL = `http://localhost:8080/capstone/applicant`;

    axios.get(endpointURL+`?id=${ID}`).then((response) => {
      console.log(response.data);
      setTableData(response.data);
    })
    .catch((err)=>
      console.log(err));
}
  function deleteUser() {
    if (tableData) {
      const endpointURL = `http://localhost:8080/capstone/delete`;
      axios
        .delete(endpointURL + `?id=${ID}`)
        .then(() => {
          notify();
        })
      }
  }

  function putUserPhone(e) {
    e.preventDefault();

    const endpointURL = `http://localhost:8080/capstone/customerDetails`;

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
  return (
    <div>
      <div class="ui mini three item menu">
        <a href="http://localhost:3000/" class="item">
          Home
        </a>
        <a href="http://localhost:3000/Create" class="item">
          Get a Quote
        </a>
        <a href="http://localhost:3000/Admin" class="item">
          Admin Panel
        </a>
      </div>
      <h1 style = {{marginTop: "30px"}}> Welcome to the Admin Panel </h1>
      <h4 style = {{marginBottom: "80px"}}> Please enter an ID to continue </h4>
      <div>
        <ToastContainer />
      </div>
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
          <Button variant="primary" type="submit" onClick={getUser}>
            Submit
          </Button>
        </Form>
      </div>
      <div id = "table">
      <Container>
        <Row>
          <Col>
            <div>
              <Table style = {{width:"1000px"}}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Car Type</th>
                    <th>Quote Amount</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{tableData.id}</td>
                    <td>{tableData.firstName}</td>
                    <td>{tableData.lastName}</td>
                    <td>{tableData.carType}</td>
                    <td>{tableData.quote}</td>
                    <td>
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={deleteUser}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    <div class = "updateTelNumber">
      <h3 class="telNumberHeader">Update Telephone Number</h3>
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
