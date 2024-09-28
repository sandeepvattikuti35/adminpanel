import React from 'react';
import Adminpanel from '../Adminpanel';
import SideBar from '../SideBar';
import { useNavigate } from 'react-router-dom'; // For navigation
import { FaArrowLeft } from 'react-icons/fa'; // Import back arrow icon
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const ObjectivesPage = () => {

    const data=[
        {Id:'1', Name:'Jhon',Role:'Accountant', BranLevel:'2.1', PerfOutcome:'Meet the Expectations' },
        {Id:'2', Name:'Harish',Role:'Chief Executive Officer (CEO)', BranLevel:'4.1', PerfOutcome:'Exceeded the Expectations' },
        {Id:'3', Name:'Sweety',Role:'SoftWare Engineer', BranLevel:'3.2', PerfOutcome:'OutStanding ' },
        {Id:'4', Name:'Raju',Role:'Senior JavaScript Developer', BranLevel:'2.5', PerfOutcome:'Below the Expectations' },
        {Id:'5', Name:'Vinitha',Role:'HR', BranLevel:'3.1', PerfOutcome:'Meet the Expectations' },
        {Id:'6', Name:'Nick',Role:'Backend Developer',BranLevel:'4.1' , PerfOutcome:'Meet the Expectations' },
        
      ]

        // For navigation
        const navigate = useNavigate();

        const handleBack = () => {
            navigate('/dashboard'); // Change '/dashboard' to your actual dashboard route
        };
    
  return (
    <div>
      <Adminpanel></Adminpanel>

            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <SideBar></SideBar>
                    <div className="col mt-3">
                        <div className='row h-99 '>
                            <div>
                            <div >
                                <h1>Employee Details</h1>
                                <Table responsive striped bordered variant="info">
                                    <thead>
                                        <tr>
                                        <th>#</th>
                                        <th>Name </th>  
                                        <th>Role</th>
                                        <th>Band Level</th>
                                        <th>Performance Outcome</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                        data.map((item) => (
                                            <tr>
                                                <td>{item.Id}</td>
                                                <td>{item.Name}</td>   
                                                <td>{item.Role}</td> 
                                                <td>{item.BranLevel}</td>
                                                <td>{item.PerfOutcome}</td> 
                                                </tr>
                                        ))
                                        }
                                    </tbody>
                                </Table>
                                
                                </div>                            </div>

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

export default ObjectivesPage
