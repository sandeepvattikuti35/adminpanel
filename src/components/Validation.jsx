
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";


const Validation = () => {

        const [show, setShow] = useState(false);
        const [formData, setFormData] = useState({
          firstName: "",
          lastName: "",
          email: "",
          mobileNo: "",
          gender: "",
          designation: ""
        });
        const [errors, setErrors] = useState({});
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        const handleInputChange = (e) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
        };
      
        const validateForm = () => {
          const newErrors = {};
      
          // Basic validation logic
          if (!/^[A-Za-z]+$/.test(formData.firstName)) {
            newErrors.firstName = "First name should contain only letters.";
          }
          if (!/^[A-Za-z]+$/.test(formData.lastName)) {
            newErrors.lastName = "Last name should contain only letters.";
          }
          if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
          }
          if (!/^\d{10}$/.test(formData.mobileNo)) {
            newErrors.mobileNo = "Mobile number must be exactly 10 digits.";
          }
          if (!formData.gender) {
            newErrors.gender = "Gender is required.";
          }
          if (!formData.designation) {
            newErrors.designation = "Designation is required.";
          }
      
          setErrors(newErrors);
          return Object.keys(newErrors).length === 0;
        };
      
        const handleAdminPanel = () => {
          if (validateForm()) {
            //alert("Form submitted successfully!");
            // You can add logic to handle form submission here, like sending data to a server
            handleClose();
          }
        };
      
      return (
        <>
          <Button variant="primary" onClick={handleShow}>
            Open Admin Form
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="bg-warning">
              <Modal.Title className="text-white">Admin Form</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark text-white">
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  {/* First Name */}
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="FirstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    isInvalid={!!errors.firstName}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
    
                  {/* Last Name */}
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="LastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    isInvalid={!!errors.lastName}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
    
                  {/* Email */}
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    isInvalid={!!errors.email}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
    
                  {/* Mobile Number */}
                  <Form.Label>Mobile No</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="MobileNo"
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleInputChange}
                    isInvalid={!!errors.mobileNo}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.mobileNo}
                  </Form.Control.Feedback>
    
                  {/* Gender */}
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                as="select"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                isInvalid={!!errors.gender}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.gender}
                  </Form.Control.Feedback>
    
                  {/* Designation */}
                  <Form.Label>Designation</Form.Label>
                  <Form.Control
                as="select"
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
                isInvalid={!!errors.designation}
                required
              >
                <option value="">Select Designation</option>
                <option value="Manager">Manager</option>
                <option value="Developer">Developer</option>
                <option value="Tester">Tester</option>
                <option value="Intern">Intern</option>
              </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.designation}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer className="bg-warning">
              <Button variant="primary" onClick={handleAdminPanel}>
                Register
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
}

export default Validation


