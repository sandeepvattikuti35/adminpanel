// import React from 'react'

// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import Adminpanel from './Adminpanel';
// import { BrowserRouter, Navigate, useNavigate } from 'react-router-dom';

// function LandingPage() 
// {
//   //popup close or open
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const navigate =useNavigate();

//   //hold the input values and any invalid erros
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobileNo: "",
//     gender: "",
//     designation: ""
//   });
//   const [errors, setErrors] = useState({});

//   //user types in input fields it will triggered and set the new data into setFormData
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // form validation function 
//   const validateForm = () => {
//     const newErrors = {};

//     // Basic validation logic
//     if (!/^[A-Za-z]+$/.test(formData.firstName)) {
//       newErrors.firstName = "First name should contain only letters, no spaces.";
//     }
//     if (!/^[A-Za-z]+$/.test(formData.lastName)) {
//       newErrors.lastName = "Last name should contain only letters, no spaces.";
//     }
//     if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address.";
//     }
//     if (!/^\d{10}$/.test(formData.mobileNo)) {
//       newErrors.mobileNo = "Mobile number must be exactly 10 digits.";
//     }
//     if (!formData.gender) {
//       newErrors.gender = "Gender is required.";
//     }
//     if (!formData.designation) {
//       newErrors.designation = "Designation is required.";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };



//   const handleAdminPanel = () => {
//     if(validateForm())
//     {
//     setShow(false);
//     console.log('testing');
//     navigate ("/dashboard");
//     }
//   } ;

//   return (
    
//     <>
//     <Adminpanel></Adminpanel> 
    
//     {/* bg-secondary bg-opacity-50  */} 
//     <div class="container   " > 
//     <div class='row  pt-3  '>
//       <div class='col-12 ' >
//         <img src="images/meeting.png" alt="notfound" id='image ' className='mx-4' height='80%' width='90%'/> 
//       </div>
//       <div class='col  ' >
//         <div class="welcome  ">
//                 <h1 className=' fw-bolder text-Dark'>Welcome To Vinnag Ai</h1>
//                 <br />
//                 <p className='fw-bold'>      An Attendance Management System streamlines tracking and 
//                     managing student attendance, offering real time reports and reducing
//                     erros. It enables easy attendance marking, provides students access
//                     to records, and facilitates efficient report generation for administrators.

//                 </p>
//                 <br></br>
//                 <button class="btn btn-danger fw-bold px-2 py-1 m-2" onClick={handleShow} > Admin Panel</button>  &nbsp;&nbsp; &nbsp;&nbsp; <button class="btn btn-danger fw-bold px-2 py-1 m-2">Employee Panel</button>
//             </div>
//         </div>
//       <div >
//       <Modal show={show} onHide={handleClose}>
//             <Modal.Header closeButton className="bg-secondary">
//               <Modal.Title className="text-white">Admin Form</Modal.Title>
//             </Modal.Header>
//             <Modal.Body className="bg-light ">
//               <Form>
//                 <Form.Group controlId="exampleForm.ControlInput1">
//                   {/* First Name */}
//                   <Form.Label>First Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="FirstName"
//                     name="firstName"
//                     className='border border-dark'
//                     value={formData.firstName}
//                     onChange={handleInputChange}
//                     isInvalid={!!errors.firstName}
//                     required
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.firstName}
//                   </Form.Control.Feedback>
    
//                   {/* Last Name */}
//                   <Form.Label>Last Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="LastName"
//                     name="lastName"
//                     className='border border-dark'
//                     value={formData.lastName}
//                     onChange={handleInputChange}
//                     isInvalid={!!errors.lastName}
//                     required
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.lastName}
//                   </Form.Control.Feedback>
    
//                   {/* Email */}
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control
//                     type="email"
//                     placeholder="Email"
//                     name="email"
//                     className='border border-dark'
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     isInvalid={!!errors.email}
//                     required
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.email}
//                   </Form.Control.Feedback>
    
//                   {/* Mobile Number */}
//                   <Form.Label>Mobile No</Form.Label>
//                   <Form.Control
//                     type="tel"
//                     placeholder="MobileNo"
//                     name="mobileNo"
//                     className='border border-dark'
//                     value={formData.mobileNo}
//                     onChange={handleInputChange}
//                     isInvalid={!!errors.mobileNo}
//                     required
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.mobileNo}
//                   </Form.Control.Feedback>
    
//                   {/* Gender */}
//                   <Form.Label>Gender</Form.Label>
//                   <Form.Control
//                 as="select"
//                 name="gender"
//                 className='border border-dark'
//                 value={formData.gender}
//                 onChange={handleInputChange}
//                 isInvalid={!!errors.gender}
//                 required
//               >
//                 <option value="">Select Gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//                 <option value="Other">Other</option>
//               </Form.Control>
//                   <Form.Control.Feedback type="invalid">
//                     {errors.gender}
//                   </Form.Control.Feedback>
    
//                   {/* Designation */}
//                   <Form.Label>Designation</Form.Label>
//                   <Form.Control
//                 as="select"
//                 name="designation"
//                 className='border border-dark'
//                 value={formData.designation}
//                 onChange={handleInputChange}
//                 isInvalid={!!errors.designation}
//                 required
//               >
//                 <option value="">Select Designation</option>
//                 <option value="Manager">Manager</option>
//                 <option value="Developer">Developer</option>
//                 <option value="Tester">Tester</option>
//                 <option value="Intern">Intern</option>
//               </Form.Control>
//                   <Form.Control.Feedback type="invalid">
//                     {errors.designation}
//                   </Form.Control.Feedback>
//                 </Form.Group>
//               </Form>
//             </Modal.Body>
//             <Modal.Footer className="bg-secondary">
//               <Button variant="primary" onClick={handleAdminPanel}>
//                 Register
//               </Button>
//               <Button variant="dark" onClick={handleClose}>
//                 Close
//               </Button>
//             </Modal.Footer>
//           </Modal>
//         </div>
//     </div>
//     </div>
//     </>
//   )
// }

// export default LandingPage








import React from 'react';
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Adminpanel from './Adminpanel';
import { BrowserRouter, Navigate, useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

function LandingPage() {

  // Background images array
const images = [
  '/images/musemind.jpg',
  '/images/job.jpg',
  '/images/geometric.png',
  '/images/ai-generated.jpg',
  '/images/triangle.png'
];

const [currentImage, setCurrentImage] = useState(0);

  // Change background image every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    // Clear the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);


  // popup close or open
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  // hold the input values and any invalid errors
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    gender: "",
    designation: ""
  });
  const [errors, setErrors] = useState({});

  // user types in input fields, it will trigger and set the new data into setFormData
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // form validation function 
  const validateForm = () => {
    const newErrors = {};

    // Basic validation logic
    if (!/^[A-Za-z]+$/.test(formData.firstName)) {
      newErrors.firstName = "First name should contain only letters, no spaces.";
    }
    if (!/^[A-Za-z]+$/.test(formData.lastName)) {
      newErrors.lastName = "Last name should contain only letters, no spaces.";
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
      setShow(false);
      console.log('testing');
      navigate("/dashboard");
    }
  };

  return (
    <>
      <Adminpanel></Adminpanel>
      {/* Wrapper for the landing page content excluding Adminpanel */}
       {/* <div
      className="landing-content"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '87.5vh',
        overflowX: 'hidden',
      }}
    > */}
    

    <div className="container-fluid">
      <div className="row vh-15 mt-2">
        {/* Carousel section - takes 60% of the height */}
        {/* <div className="col-12 mt-3" style={{ height: '50vh', width: '100%' }}> */}
          <Carousel>
            {/* First Slide */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/ai-generated.jpg"
                alt="First slide"
                style={{ height: '50vh', objectFit: 'cover' }}
              />
            </Carousel.Item>
            {/* Second Slide */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/ai-boy.png"
                alt="Second slide"
                style={{ height: '50vh', objectFit: 'cover' }}
              />
            </Carousel.Item>
            {/* Third Slide */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/computer.jpg"
                alt="Third slide"
                style={{ height: '50vh', objectFit: 'cover' }}
              />
            </Carousel.Item>
          </Carousel>
        {/* </div> */}
        </div>
        <div className="row vh-10 m-1 p-3">
        {/* Welcome Matter section - takes 40% of the height */}
        {/* <div className="col-12 d-flex flex-column justify-content-center text-center bg-light"  
             style={{ height: '45vh' }}>*/}
          <h4 className="fw-bold ">Welcome To Vinnag Ai</h4>
          <p className="fs-6 ">
            An Attendance Management System streamlines tracking and managing student attendance, offering real-time reports and reducing errors. It enables easy attendance marking, provides students access to records, and facilitates efficient report generation for administrators.
          </p>
          <div>
            <br></br>
            <button className="btn btn-primary fw-bold  px-1   " onClick={handleShow}>Admin</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-primary fw-bold  px-1  ">Employee </button>
          {/* </div> */}
        </div>
      </div>
    </div>




      {/* <div className='container'>
        <div className="row  ">
          {/* Image and welcome text will be displayed side by side on large screens (col-lg-6 each) and stacked vertically on small screens (col-12 full width each) 
          <div className="col-12 col-lg-6   mt-3 bg-info">
            <img
              src="images/meeting.png"
              alt="notfound"
              className="img-fluid"
              style={{ height: 'auto', width: '100%' }}
            />
          </div>
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center mt-5 text-dark ">
            <div className="welcome ">
              <h1 className="fw-bolder ">Welcome To Vinnag Ai</h1>
              <br />
              <p className="fw-bold">
                An Attendance Management System streamlines tracking and managing student attendance, offering real-time reports and reducing errors. It enables easy attendance marking, provides students access to records, and facilitates efficient report generation for administrators.
              </p>
              <br />
              <button className="btn btn-danger fw-bold px-2 py-1 m-1" >Admin Panel</button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button className="btn btn-danger fw-bold px-2 py-1 m-1">Employee Panel</button>
            </div>
          </div>
        </div>
        </div> */}

        {/* Modal for Admin Form */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton className="bg-secondary">
            <Modal.Title className="text-white">Admin Form</Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-light">
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                {/* First Name */}
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="FirstName"
                  name="firstName"
                  className="border border-dark"
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
                  className="border border-dark"
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
                  className="border border-dark"
                  value={formData.email}
                  onChange={handleInputChange}
                  isInvalid={!!errors.email}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>

                {/* Mobile Number as Telephone */}
                <Form.Label>Mobile No</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="MobileNo"
                  name="mobileNo"
                  className="border border-dark"
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
                  className="border border-dark"
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
                  className="border border-dark"
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
          <Modal.Footer className="bg-secondary">
            <Button variant="primary" onClick={handleAdminPanel}>
              Register
            </Button>
            <Button variant="dark" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      {/* </div> */}
      </>
  
  );
}

export default LandingPage;
