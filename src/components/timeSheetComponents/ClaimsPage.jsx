import React from 'react'
import { OverlayTrigger } from 'react-bootstrap'
import { Popover } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

  

const ClaimsPage = () => {

 //popup close or open
 const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

 const [alertShow, setalertShow] = useState(false);
 const handleAlertClose = () => setalertShow(false);
  const handleAlertShow = () => {
    
    setalertShow(true);
    setShow(false);
  }

// State to manage form input values
const [travelDetails, setTravelDetails] = useState({
  from: "",
  to:"",
  expenses: "",
  date: "",
});

const [internetDetails, setInternetDetails] = useState({
  brand: "",
  plan: "",
  price: "",
  date: "",
});

const [overtimeDetails, setOvertimeDetails] = useState({
  date: "",
  overtime: "",
  amount: "",
});

const [showAlert, setShowAlert] = useState(false);

const [errors, setErrors] = useState({}); // Validation errors state

  // Function to reset form fields
  const resetForm = () => {
    setTravelDetails({ from: '', to: '', expenses: '', date: '' });
    setInternetDetails({ brand: '', plan: '', price: '', date: '' });
    setOvertimeDetails({ date: '', overtime: '', amount: '' });
  };

  // Function to validate form inputs
  const validateForm = (formType) => {
    let errors = {};

    if (formType === 'travel') {
      if (!travelDetails.from) errors.from = 'From field is required';
      if (!travelDetails.to) errors.to = 'To field is required';
      if (!travelDetails.expenses) errors.expenses = 'Expenses field is required';
      if (!travelDetails.date) errors.date = 'Date field is required';
    }

    if (formType === 'internet') {
      if (!internetDetails.brand) errors.brand = 'Brand field is required';
      if (!internetDetails.plan) errors.plan = 'Plan field is required';
      if (!internetDetails.price) errors.price = 'Price field is required';
      if (!internetDetails.date) errors.date = 'Date field is required';
    }

    if (formType === 'overtime') {
      if (!overtimeDetails.date) errors.date = 'Date field is required';
      if (!overtimeDetails.overtime) errors.overtime = 'Overtime field is required';
      if (!overtimeDetails.amount) errors.amount = 'Amount field is required';
    }

    return errors;
  };



// Function to handle form submission
const handleSubmit = (event,formType) => {

  event.preventDefault();
  // Validate form inputs
  const formErrors = validateForm(formType);
  setErrors(formErrors);

  // If no errors, proceed with form submission
  if (Object.keys(formErrors).length === 0) {
    setShowAlert(true); // Show success alert
    setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
    resetForm(); // Reset form fields
  }
  // setShowAlert(true); // Show success alert
  // setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
};

const data = [{ claimType: 'Travel', claimAmt: '250.00' , submissionDate: '10/10/2023', processedDate: '15/10/2023'},
            { claimType: 'Internet', claimAmt: '750.00' , submissionDate: '20/11/2023', processedDate: '26/11/2023'},
            { claimType: 'Overtime', claimAmt: '1000.00' , submissionDate: '02/01/2024', processedDate: '06/01/2024'} ];

  return (


    <div>

      <h2 className='text-success'>Sumbit new claims</h2>
        <div className="container mt-4">
      {showAlert && (
        <Alert variant="success">Successfully claimed your expenses!</Alert>
      )}

      <Accordion defaultActiveKey="0" >
        {/* Travel Charges Accordion */}
        <Accordion.Item eventKey="0" className='bg-secondary fw-bold' >
          <Accordion.Header  >Travel Charges</Accordion.Header>
          <Accordion.Body>
          <Form onSubmit={(e) => handleSubmit(e, 'travel')}>
              <Form.Group controlId="formFrom">
                <Form.Label>From</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=" From"
                  value={travelDetails.from}
                  onChange={(e) =>
                    setTravelDetails({ ...travelDetails, from: e.target.value })
                  }
                />
                 {errors.from && <Alert variant="danger">{errors.from}</Alert>}
              </Form.Group>
              <Form.Group controlId="formto" className="mt-2">
                <Form.Label>To</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Destination"
                  value={travelDetails.to}
                  onChange={(e) =>
                    setTravelDetails({ ...travelDetails, to: e.target.value })
                  }
                />
                {errors.to && <Alert variant="danger">{errors.to}</Alert>}
              </Form.Group>
              <Form.Group controlId="formExpenses" className="mt-2">
                <Form.Label>Expenses</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter expenses"
                  value={travelDetails.expenses}
                  onChange={(e) =>
                    setTravelDetails({
                      ...travelDetails,
                      expenses: e.target.value,
                    })
                  }
                />
                  {errors.expenses && <Alert variant="danger">{errors.expenses}</Alert>}
              </Form.Group>
              <Form.Group controlId="formDate" className="mt-2">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  value={travelDetails.date}
                  onChange={(e) =>
                    setTravelDetails({ ...travelDetails, date: e.target.value })
                  }
                />
                  {errors.date && <Alert variant="danger">{errors.date}</Alert>}
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3">
                Submit Travel Charges
              </Button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>

        {/* Internet Charges Accordion */}
        <Accordion.Item eventKey="1" className='bg-secondary fw-bold' >
          <Accordion.Header>Internet Charges</Accordion.Header>
          <Accordion.Body>
          <Form onSubmit={(e) => handleSubmit(e, 'internet')}>
          <Form.Group controlId="formBrand">
                <Form.Label>Internet Brand</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter brand"
                  value={internetDetails.brand}
                  onChange={(e) =>
                    setInternetDetails({
                      ...internetDetails,
                      brand: e.target.value,
                    })
                  }
                />
                  {errors.brand && <Alert variant="danger">{errors.brand}</Alert>}
              </Form.Group>

              <Form.Group controlId="formPlan" className="mt-2">
                <Form.Label>Internet Plan</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter plan"
                  value={internetDetails.plan}
                  onChange={(e) =>
                    setInternetDetails({
                      ...internetDetails,
                      plan: e.target.value,
                    })
                  }
                />
                  {errors.plan && <Alert variant="danger">{errors.plan}</Alert>}
              </Form.Group>

              <Form.Group controlId="formPrice" className="mt-2">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter price"
                  value={internetDetails.price}
                  onChange={(e) =>
                    setInternetDetails({
                      ...internetDetails,
                      price: e.target.value,
                    })
                  }
                />
                  {errors.price && <Alert variant="danger">{errors.price}</Alert>}
              </Form.Group>
              
              <Form.Group controlId="formNetDate" className="mt-2">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  value={internetDetails.date}
                  onChange={(e) =>
                    setInternetDetails({ ...internetDetails, date: e.target.value })
                  }
                />
                  {errors.date && <Alert variant="danger">{errors.date}</Alert>}
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3">
                Submit Internet Charges
              </Button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>

        {/* Overtime Charges Accordion */}
        <Accordion.Item eventKey="2" className='bg-secondary fw-bold' >
          <Accordion.Header>Overtime Charges</Accordion.Header>
          <Accordion.Body>
          <Form onSubmit={(e) => handleSubmit(e, 'overtime')}>
          <Form.Group controlId="formOTDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  value={overtimeDetails.date}
                  onChange={(e) =>
                    setOvertimeDetails({
                      ...overtimeDetails,
                      date: e.target.value,
                    })
                  }
                />
                 {errors.date && <Alert variant="danger">{errors.date}</Alert>}
              </Form.Group>

              <Form.Group controlId="formOvertime" className="mt-2">
                <Form.Label>Overtime Hours</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter overtime hours"
                  value={overtimeDetails.overtime}
                  onChange={(e) =>
                    setOvertimeDetails({
                      ...overtimeDetails,
                      overtime: e.target.value,
                    })
                  }
                />
                  {errors.overtime && <Alert variant="danger">{errors.overtime}</Alert>}
              </Form.Group>

              <Form.Group controlId="formFare" className="mt-2">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Amount"
                  value={overtimeDetails.amount}
                  onChange={(e) =>
                    setOvertimeDetails({
                      ...overtimeDetails,
                      amount: e.target.value,
                    })
                  }
                />
                  {errors.amount && <Alert variant="danger">{errors.amount}</Alert>}
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3">
                Submit Overtime Charges
              </Button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
               
<div>
  <div className='mt-5'>
  <h1 className='text-success '>Processed Claims</h1>
  <Table responsive striped bordered variant="warning"> 
    <thead >
        <tr>
        <th >ClaimType</th>
        <th>ClaimAmount</th>
        <th>SubmissionDate</th>
        <th>ProcessedDate</th>
        </tr>
    </thead>
    <tbody>
        {
        data.map((item) => (
        <tr> 
        <td>{item.claimType }</td>
        <td>{item.claimAmt }</td>
        <td>{item.submissionDate} </td>
        <td>{item.processedDate} </td>
        </tr>
        ))
        }
    </tbody>
</Table>
<div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 999 }}>
      <Alert show={alertShow} variant="success" >
        <Alert.Heading>Info</Alert.Heading>
        <p>Time Sheet subimtted successfully..!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={ handleAlertClose} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>
      </div>
  </div>
  </div>
    </div>
  )
}

export default ClaimsPage
