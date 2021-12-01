import React, { useState } from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Create.css";
import "semantic-ui-css/semantic.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SERVER_URL from "../../utils/constants.js";
function Create() {
  const [prefix, setPrefix] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telNumber, settelNumber] = useState("");
  const [address1, setaddress1] = useState("");
  const [address2, setaddress2] = useState("");
  const [city, setcity] = useState("");
  const [postCode, setpostCode] = useState("");
  const [carType, setcarType] = useState("");
  const [engineSize, setengineSize] = useState("");
  const [additionalDrivers, setadditionalDrivers] = useState("");
  const [commercialPurposes, setCommercialPurposes] = useState("");
  const [outsideState, setOutsideState] = useState("");
  const [vehicleValue, setVehicleValue] = useState("");
  const [dateRegistered, setDateRegistered] = useState("");
  const [quote, setquote] = useState("");
  const [open, setOpen] = useState(false);


  function validateFormData(formData) {
    for (const [key, value] of Object.entries(formData)) {
      if (value === "") {
        alert(`Please enter ${key}!`);
        return false;
      }
    }
    return true;
  }

  const callMockAPI = () => {
    const formData = {
      prefix,
      firstName,
      lastName,
      telNumber,
      address1,
      address2,
      city,
      postCode,
      carType,
      engineSize,
      additionalDrivers,
      commercialPurposes,
      outsideState,
      vehicleValue,
      dateRegistered,
    };

    if (!validateFormData(formData)) {
      return;
    }
    const endpointURL = `${SERVER_URL}/capstone`;
    validateFormData(formData);
    notify();
    axios
      .post(endpointURL, formData)
      .then((response) => setquote(response.data.quote))
      .catch((err) => console.log(err));
  };
  function notify() {
    
    setOpen(true);
  }

  return (
    <>
      <div class="ui mini three item menu">
        <a href="http://demo-react-spring-demo-react-spring.allstatejenkins2.conygre.com/" class="item">
          Home
        </a>
        <a href="http://demo-react-spring-demo-react-spring.allstatejenkins2.conygre.com/Create" class="item">
          Get a Quote
        </a>
        <a href="http://demo-react-spring-demo-react-spring.allstatejenkins2.conygre.com/Admin" class="item">
          Admin Panel
        </a>
      </div>
      <div id="mainDiv">
        <div>
          <ToastContainer />
        </div>
        <div id="form">
          <div id="formContainer">
            <h2 class="personalDetails" id="personalDetails">
              {" "}
              <i class="user icon"></i> Please enter the following details:{" "}
            </h2>
            <Form>
              <div class="ui divided three column grid">
                <input
                  style={{ width: "97.5%" }}
                  placeholder="Prefix"
                  onChange={(e) => setPrefix(e.target.value)}
                />
                <div class="row">
                  <div class="column">
                    <div>
                      <Form.Field>
                        <input
                          placeholder="First Name"
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </Form.Field>
                    </div>
                  </div>
                  <div class="column">
                    <Form.Field>
                      <input
                        placeholder="Last Name"
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </Form.Field>
                  </div>
                  <div class="column">
                    <Form.Field id="telephone">
                      <Form.Input
                        fluid
                        placeholder="Telephone Number"
                        onChange={(e) => settelNumber(e.target.value)}
                      />
                    </Form.Field>
                  </div>
                </div>
                <div class="row">
                  <div class="column">
                    <Form.Field>
                      <input
                        placeholder="Address 1"
                        onChange={(e) => setaddress1(e.target.value)}
                      />
                    </Form.Field>
                  </div>
                  <div class="column">
                    <Form.Field>
                      <input
                        placeholder="Address 2"
                        onChange={(e) => setaddress2(e.target.value)}
                      />
                    </Form.Field>
                  </div>
                  <div class="column">
                    <Form.Field>
                      <input
                        placeholder="Address 2"
                        onChange={(e) => setcity(e.target.value)}
                      />
                    </Form.Field>
                  </div>
                </div>
              </div>
              <div class="ui centered two column grid">
                <div class="row">
                  <div class="column">
                    <Form.Field>
                      <input
                        placeholder="Postcode"
                        onChange={(e) => setpostCode(e.target.value)}
                      />
                    </Form.Field>
                  </div>
                </div>
                <div class="row">
                  <div class="column">
                    <Form.Field>
                      <select
                        id="usedOutside"
                        name="usedOutside"
                        onChange={(e) => setengineSize(e.target.value)}
                        class="custom-select"
                      >
                        <option value="">Engine Size</option>
                        <option value="1000">1000</option>
                        <option value="1600">1600</option>
                        <option value="2000">2000</option>
                        <option value="2500">2500</option>
                        <option value="3000">3000</option>
                        <option value="Other">Other</option>
                      </select>
                    </Form.Field>
                  </div>
                  <div class="column">
                    <Form.Field>
                      <select
                        id="additionalDrivers"
                        name="additionalDrivers"
                        onChange={(e) => setadditionalDrivers(e.target.value)}
                        class="custom-select"
                      >
                        <option value="">Additional drivers</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </Form.Field>
                  </div>
                  <div class="column" style={{ marginTop: "20px" }}>
                    <Form.Field>
                      <select
                        id="commercialPurposes"
                        name="commercialPurposes"
                        onChange={(e) => setCommercialPurposes(e.target.value)}
                        class="custom-select"
                      >
                        <option value="">Commercial Purposes</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </Form.Field>
                  </div>
                  <div class="column" style={{ marginTop: "20px" }}>
                    <Form.Field>
                      <select
                        id="outsideState"
                        name="outsideState"
                        onChange={(e) => setOutsideState(e.target.value)}
                        class="custom-select"
                      >
                        <option value="">Outside State?</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </Form.Field>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="column" style={{ marginTop: "20px" }}>
                  <div>
                    <Form.Field>
                      <select
                        id="carType"
                        name="carType"
                        onChange={(e) => setcarType(e.target.value)}
                        class="custom-select"
                      >
                        <option value="">Car Type</option>
                        <option value="Cabriolet">Cabriolet</option>
                        <option value="Estate">Estate</option>
                        <option value="Hatchback">Hatchback</option>
                        <option value="Other">Other</option>
                      </select>
                    </Form.Field>
                  </div>
                </div>
                <div class="column" style={{ marginTop: "20px" }}>
                  <Form.Field>
                    <input
                      placeholder="Value of vehicle"
                      onChange={(e) => setVehicleValue(e.target.value)}
                    />
                  </Form.Field>
                </div>
                <div class="column" style={{ marginTop: "20px" }}>
                  <Form.Field id="date">
                    <input
                      type="date"
                      placeholder="Date registered"
                      onChange={(e) => setDateRegistered(e.target.value)}
                    />
                  </Form.Field>
                </div>
              </div>
              <Button
                class="buttonSubmit"
                id="submitButton"
                type="submit"
                onClick={callMockAPI}
                style={{ marginTop: "20px" }}
              >
                Submit
              </Button>
            </Form>
            <p>{quote}</p>
          </div>
        </div>
        <Modal size="tiny" open={open}>
          <Modal.Header>Quote Obtained</Modal.Header>
          <Modal.Content>
            <p>Your quote is £{quote}.</p>
          </Modal.Content>
          <Modal.Actions>
            <Button positive onClick={() => setOpen(false)}>
              Close
            </Button>
            <Button onClick={() => window.location.reload()}>
              Get Another Quote
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    </>
  );
}
export default Create;
