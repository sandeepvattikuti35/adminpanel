import React from 'react'
import Adminpanel from '../Adminpanel'
import SideBar from '../SideBar'
import { useNavigate } from 'react-router-dom'; // For navigation
import { FaArrowLeft } from 'react-icons/fa'; // Import back arrow icon
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const CertificationsPage = () => {

        // For navigation
        const navigate = useNavigate();

        const handleBack = () => {
            navigate('/dashboard'); // Change '/dashboard' to your actual dashboard route
        };
    
    const data=[
        {Id:'1', CourseName:'Java Full Stack', EmpName:'Sai',Email:'sai@gmail.com',CertifiedOrNot:'certified',CertificationProvidedBy:'Oracle Technologies'},
        {Id:'2', CourseName:'Manogo Database ', EmpName:'mahi',Email:'mahi@gmail.com',CertifiedOrNot:'certified',CertificationProvidedBy:'IBM '},
        {Id:'3', CourseName:'Python', EmpName:'Sam',Email:'sam@gmail.com',CertifiedOrNot:'certified',CertificationProvidedBy:'Wipro '},
        {Id:'4', CourseName:'Azure', EmpName:'kill',Email:'kill@gmail.com',CertifiedOrNot:'certified',CertificationProvidedBy:'Sun micro services '},
    ]

  return (
    <div>

      <Adminpanel></Adminpanel>

            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <SideBar></SideBar>
                    <div className="col mt-3">
                        <div className='row h-99 '>
                            <div>
                            <h1>Certification's</h1>
                            </div>
                            <div>
                            <Table responsive striped bordered variant="info">
                                    <thead>
                                        <tr>
                                            <th >#</th>
                                            <th >CourseName</th>
                                            <th>Employee Name</th>
                                            <th>Email</th>
                                            <th>CertifiedOrNot</th>
                                            <th>CertificationProvidedBy</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((item) => (
                                                <tr>
                                                    <td>{item.Id}</td>
                                                    <td>{item.CourseName}</td>   
                                                    <td>{item.EmpName}</td> 
                                                    <td>{item.Email}</td>
                                                    <td>{item.CertifiedOrNot}</td> 
                                                    <td>{item.CertificationProvidedBy}</td>                                           </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>

                            </div>

                            <div>
                                {/* Back Button with Arrow Icon */}
                                    <div className="row mt-5">
                                        <Button variant="primary" onClick={handleBack} className="d-flex align-items-center w-auto">
                                            <FaArrowLeft className="me-2" /> Back to Dashboard
                                        </Button>
                                    </div>
                            </div>
                         </div>
                    </div>
                </div>
           </div>
            
    </div>
  )
}

export default CertificationsPage
