import React from 'react'
import { useNavigate } from 'react-router-dom';

const AdminCards = () => {

  const navigate = useNavigate();

  const handleTextClick = (path) => {
    navigate(path); // Redirect to /another-page
    
  };
  return (
<>

<div class="row mt-0 g-3 ">
  <div class="col-6">
    <div class="card hover-card" onClick={() => handleTextClick('/paypage')} style={{ cursor: 'pointer', color: 'blue' }}>
    <img src="images/coins.png" alt="Logo" width="40%" height="20%" class="d-inline-block align-text-top mt-2  mb-3 "></img>
    <div class="card-body">
        <h5 class="card-title fw-bold  stretched-link" >Pay</h5>
        <p class="card-text fw-bold text-primary-emphasis"> $20,00,000</p>
      </div>
    </div>
  </div>
  <div class="col-6">
    <div class="card hover-card" onClick={() => handleTextClick('/certificationspage')} style={{ cursor: 'pointer', color: 'blue' }}>
    <img src="images/certificate.png" alt="Logo" width="40%" height="20%" class="d-inline-block align-text-top mt-2 m-2 "></img>
    <div class="card-body">
        <h5 class="card-title  fw-bold stretched-link " >Certification's</h5>
        <p class="card-text  fw-bold text-primary-emphasis">100<sup>+</sup></p>
      </div>
    </div>
  </div>
  <div class="col-6">
    <div class="card hover-card" onClick={() => handleTextClick('/objectivespage')} style={{ cursor: 'pointer', color: 'blue' }}>
    <img src="images/objectives.png" alt="Logo" width="40%" height="20%" class="d-inline-block align-text-top mt-2   "></img>
    <div class="card-body">
        <h5 class="card-title fw-bold stretched-link " >Performance</h5>
        <p class="card-text  fw-bold text-primary-emphasis">Performance was good</p>
      </div>
    </div>
  </div>
  <div class="col-6">
    <div class="card hover-card "  onClick={() => handleTextClick('/attendancepage')} style={{ cursor: 'pointer', color: 'blue' }}>
    <img src="images/attendance.png" alt="Logo" width="40%" height="20%" class="d-inline-block align-text-top mt-2  "></img>
    <div class="card-body">
        <h5 class="card-title fw-bold   " >Attendance</h5>
        <p class="card-text fw-bold text-success">98%</p>
      </div>
    </div>
  </div>
  <div class="col-6">
    <div class="card hover-card" onClick={() => handleTextClick('/leavepage')} style={{ cursor: 'pointer', color: 'blue' }}>
    <img src="images/leave.png" alt="Logo" width="40%" height="20%" class="d-inline-block align-text-top mt-1  m-2 "></img>
    <div class="card-body">
        <h5 class="card-title fw-bold  stretched-link " >Leave</h5>
        <p class="card-text  fw-bold text-danger"> 2%</p>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default AdminCards
