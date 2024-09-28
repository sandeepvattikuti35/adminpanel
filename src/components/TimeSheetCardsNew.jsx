import React, { useState } from 'react';
import { Table, Button, Form, Modal, Alert } from 'react-bootstrap';

const TimeSheetCardsNew = () => {
  const [data, setData] = useState([
    { Id: 'week-1', StartDate: '02/01/2023', EndDate: '08/01/2023', Efforts: '40hrs' },
    { Id: 'week-2', StartDate: '02/01/2023', EndDate: '08/01/2023', Efforts: '40hrs' },
    { Id: 'week-3', StartDate: '02/01/2023', EndDate: '08/01/2023', Efforts: '40hrs' },
  ]);

  const [show, setShow] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [efforts, setEfforts] = useState('');
  const [alertShow, setAlertShow] = useState(false);
  const [error, setError] = useState('');
  const [id, setId] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleClose = () => {
    setShow(false);
    setError(''); // Reset error on close
  };

  const handleShow = () => {
    // Reset fields
    setStartDate('');
    setEndDate('');
    setEfforts('');
    setIsEditing(false);
    setShow(true);
  };

  const handleAlertClose = () => setAlertShow(false);

  const validateDate = (date) => {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    return regex.test(date);
  };

  const validateEfforts = (effort) => {
    const number = parseFloat(effort);
    return number > 0 && !isNaN(number);
  };

  const handleAlertShow = () => {
    if (!validateDate(startDate)) {
      setError('Start date is not in valid format (dd/mm/yyyy)');
      return;
    }
    if (!validateDate(endDate)) {
      setError('End date is not in valid format (dd/mm/yyyy)');
      return;
    }

    const [startDay, startMonth, startYear] = startDate.split('/').map(Number);
    const [endDay, endMonth, endYear] = endDate.split('/').map(Number);
    const start = new Date(startYear, startMonth - 1, startDay);
    const end = new Date(endYear, endMonth - 1, endDay);

    if (end <= start) {
      setError('End date should be after start date');
      return;
    }

    if (!validateEfforts(efforts)) {
      setError('Efforts should be a positive number');
      return;
    }

    // If all validations pass
    setError('');

    if (isEditing) {
      // Update existing entry
      setData((prevData) => 
        prevData.map((item) => 
          item.Id === id ? { ...item, StartDate: startDate, EndDate: endDate, Efforts: efforts } : item
        )
      );
    } else {
      // Add new entry
      setData((prevData) => [
        ...prevData,
        { Id: `week-${prevData.length + 1}`, StartDate: startDate, EndDate: endDate, Efforts: efforts }
      ]);
    }

    setAlertShow(true);
    setShow(false); // Close the modal after submission

    // Reset fields
    setStartDate('');
    setEndDate('');
    setEfforts('');
    setIsEditing(false);
  };

  const handleClick = (item) => {
    setId(item.Id);
    setStartDate(item.StartDate);
    setEndDate(item.EndDate);
    setEfforts(item.Efforts);
    setIsEditing(true);
    setShow(true);
  };

  return (
    <div>
      <div className='mb-5'>
        <Button className="btn btn-outline-danger card-title fw-bold" onClick={handleShow}>
          Add Time Sheet
        </Button>
      </div>
      <div>
        <Table responsive striped bordered variant="success">
          <thead>
            <tr>
              <th>StartDate</th>
              <th>EndDate</th>
              <th>Efforts</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.Id}>
                <td>{item.StartDate}</td>
                <td>{item.EndDate}</td>
                <td>{item.Efforts}</td>
                <td><Button onClick={() => handleClick(item)}>Edit</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton className='bg-primary'>
            <Modal.Title className='text-white'>TimeSheet</Modal.Title>
          </Modal.Header>
          <Modal.Body className='bg-light'>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form>
              <Form.Group controlId="startDate">
                <Form.Control
                  type="text"
                  placeholder='Start date in format dd/mm/yyyy'
                  className='border border-dark m-1 mb-2'
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="endDate">
                <Form.Control
                  type="text"
                  placeholder='End date in format dd/mm/yyyy'
                  className='border border-dark m-1 mb-2'
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="efforts">
                <Form.Control
                  type="text"
                  placeholder='Efforts in hrs'
                  className='border border-dark m-1'
                  value={efforts}
                  onChange={(e) => setEfforts(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer className='bg-primary'>
            <Button variant="dark" onClick={handleAlertShow}>
              Submit
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 999 }}>
          <Alert show={alertShow} variant="success" onClose={handleAlertClose} dismissible>
            <Alert.Heading>Info</Alert.Heading>
            <p>Time Sheet submitted successfully!</p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={handleAlertClose} variant="outline-success">
                Close me
              </Button>
            </div>
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default TimeSheetCardsNew;





// import React, { useState } from 'react';
// import { Table, Button, Form, Modal, Alert } from 'react-bootstrap';

// const TimeSheetCardsNew = () => {

// // const [listData,setListData]=useState([])
//   const data =  [
//     { Id: 'week-1', StartDate: '02/01/2023', EndDate: '08/01/2023', Efforts: '40hrs' },
//     { Id: 'week-2', StartDate: '02/01/2023', EndDate: '08/01/2023', Efforts: '40hrs' },
//     { Id: 'week-3', StartDate: '02/01/2023', EndDate: '08/01/2023', Efforts: '40hrs' },
//   ];

//   const [show, setShow] = useState(false);
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [efforts, setEfforts] = useState('');
//   const [alertShow, setAlertShow] = useState(false);
//   const [error, setError] = useState('');
//   const [id,setId]=useState('');

//   const handleClose = () => {
//     setShow(false);
//     setError(''); // Reset error on close
//   };

//   //modal show
//   const handleShow = () => {
//      // Reset fields
//      setStartDate('');
//      setEndDate('');
//      setEfforts('');
//     setShow(true);

//   }
//   const handleAlertClose = () => setAlertShow(false);


//   const validateDate = (date) => {
//     const regex = /^\d{2}\/\d{2}\/\d{4}$/;
//     return regex.test(date);
//   };

//   const validateEfforts = (effort) => {
//     const number = parseFloat(effort);
//     return number > 0 && !isNaN(number);
//   };

//   const handleAlertShow = () => {
//     if (!validateDate(startDate)) {
//       setError('Start date is not in valid format (dd/mm/yyyy)');
//       return;
//     }
//     if (!validateDate(endDate)) {
//       setError('End date is not in valid format (dd/mm/yyyy)');
//       return;
//     }

//     const [startDay, startMonth, startYear] = startDate.split('/').map(Number);
//     const [endDay, endMonth, endYear] = endDate.split('/').map(Number);
//     const start = new Date(startYear, startMonth - 1, startDay);
//     const end = new Date(endYear, endMonth - 1, endDay);

//     if (end <= start) {
//       setError('End date should be after start date');
//       return;
//     }

//     if (!validateEfforts(efforts)) {
//       setError('Efforts should be a positive number');
//       return;
//     }
    
//     // If all validations pass
//     setError('');
//     setAlertShow(true);
//     setShow(false); // Close the modal after submission
    
//     // Reset fields
//     setStartDate('');
//     setEndDate('');
//     setEfforts('');
//   };

//   const handleClick = (item) => {
   
//     setId(item.Id);
//     setStartDate(item.StartDate);
//     setEndDate(item.EndDate);
//     setEfforts(item.Efforts)
//     setShow(true);
    
    

//     //  alert(item.Id + "     " + item.StartDate);
//   };

//   return (
//     <div>
//       <div className='mb-5'>
//       <Button className="btn btn-outline-danger card-title fw-bold" onClick={handleShow}>
//         Add Time Sheet
//       </Button>
//       </div>
//       <div>
//         <Table responsive striped bordered variant="success">
//           <thead>
//             <tr>
//               <th>StartDate</th>
//               <th>EndDate</th>
//               <th>Efforts</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item) => (
//               <tr key={item.Id}>
//                 <td>{item.StartDate}</td>
//                 <td>{item.EndDate}</td>
//                 <td>{item.Efforts}</td>
//                 <td><Button onClick={() => handleClick(item)}>Edit</Button></td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>

//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header closeButton className='bg-primary'>
//             <Modal.Title className='text-white'>TimeSheet</Modal.Title>
//           </Modal.Header>
//           <Modal.Body className='bg-light'>
//             {error && <Alert variant="danger">{error}</Alert>}
//             <Form>
//               <Form.Group controlId="startDate">
//                 <Form.Control
//                   type="text"
//                   placeholder='Start date in format dd/mm/yyyy'
//                   className='border border-dark m-1 mb-2'
//                   value={startDate}
//                   onChange={(e) => setStartDate(e.target.value)}
//                 />
//               </Form.Group>
//               <Form.Group controlId="endDate">
//                 <Form.Control
//                   type="text"
//                   placeholder='End date in format dd/mm/yyyy'
//                   className='border border-dark m-1 mb-2'
//                   value={endDate}
//                   onChange={(e) => setEndDate(e.target.value)}
//                 />
//               </Form.Group>
//               <Form.Group controlId="efforts">
//                 <Form.Control
//                   type="text"
//                   placeholder='Efforts in hrs'
//                   className='border border-dark m-1'
//                   value={efforts}
//                   onChange={(e) => setEfforts(e.target.value)}
//                 />
//               </Form.Group>
//             </Form>
//           </Modal.Body>
//           <Modal.Footer className='bg-primary'>
//             <Button variant="dark" onClick={handleAlertShow}>
//               Submit
//             </Button>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//           </Modal.Footer>
//         </Modal>

//         <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 999 }}>
//           <Alert show={alertShow} variant="success" onClose={handleAlertClose} dismissible>
//             <Alert.Heading>Info</Alert.Heading>
//             <p>Time Sheet submitted successfully!</p>
//             <hr />
//             <div className="d-flex justify-content-end">
//               <Button onClick={handleAlertClose} variant="outline-success">
//                 Close me
//               </Button>
//             </div>
//           </Alert>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TimeSheetCardsNew;
