// 


import React from 'react';
import Table from 'react-bootstrap/Table';
import Adminpanel from '../Adminpanel';
import SideBar from '../SideBar';
import { useNavigate } from 'react-router-dom'; // For navigation
import { FaArrowLeft } from 'react-icons/fa'; // Import back arrow icon
import Button from 'react-bootstrap/Button'

const PayPage = () => {

    const data = [
        { Id: '1', Name: 'Sai', Jan: '1000$', Feb: '900$', Mar: '1040$', Apr: '1100$', May: '1000$', Jun: '1000$', Jul: '1100$', Aug: '1000$', Sep: '1000$', Oct: '900$', Nov: '1000$', Dec: '1000$' },
        { Id: '2', Name: 'manoj', Jan: '800$', Feb: '800$', Mar: '740$', Apr: '800$', May: '800$', Jun: '800$', Jul: '800$', Aug: '800$', Sep: '800$', Oct: '800$', Nov: '800$', Dec: '800$' },
        { Id: '3', Name: 'pawan', Jan: '1100$', Feb: '1100$', Mar: '1140$', Apr: '1000$', May: '1100$', Jun: '1100$', Jul: '1100$', Aug: '1000$', Sep: '1100$', Oct: '1100$', Nov: '1100$', Dec: '1100$' },
        { Id: '4', Name: 'sam', Jan: '1050$', Feb: '1050$', Mar: '1050$', Apr: '1050$', May: '1050$', Jun: '1050$', Jul: '1050$', Aug: '1050$', Sep: '1000$', Oct: '1050$', Nov: '1050$', Dec: '1050$' },
        { Id: '5', Name: 'ramesh', Jan: '2000$', Feb: '2000$', Mar: '2040$', Apr: '1900$', May: '2000$', Jun: '2000$', Jul: '2000$', Aug: '2000$', Sep: '2000$', Oct: '200$', Nov: '2000$', Dec: '2000$' },
        { Id: '6', Name: 'harish', Jan: '500$', Feb: '500$', Mar: '540$', Apr: '500$', May: '500$', Jun: '500$', Jul: '500$', Aug: '500$', Sep: '500$', Oct: '500$', Nov: '500$', Dec: '500$' },
        { Id: '7', Name: 'Sandeep', Jan: '5000$', Feb: '4900$', Mar: '5040$', Apr: '5000$', May: '5000$', Jun: '5000$', Jul: '5000$', Aug: '5000$', Sep: '5000$', Oct: '4900$', Nov: '5000$', Dec: '5000$' }
    ];

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
                                <h1>Payment's</h1>
                                <Table responsive striped bordered variant="info">
                                    <thead>
                                        <tr>
                                            <th rowSpan={2}>#</th>
                                            <th rowSpan={2}>Name</th>
                                            <th colSpan={12}>Salary</th>
                                        </tr>
                                        <tr>
                                            <th>Jan</th>
                                            <th>Feb</th>
                                            <th>Mar</th>
                                            <th>Apr</th>
                                            <th>May</th>
                                            <th>Jun</th>
                                            <th>Jul</th>
                                            <th>Aug</th>
                                            <th>Sep</th>
                                            <th>Oct</th>
                                            <th>Nov</th>
                                            <th>Dec</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((item) => (
                                                <tr >
                                                    <td>{item.Id}</td>
                                                    <td>{item.Name}</td>
                                                    <td>{item.Jan}</td>
                                                    <td>{item.Feb}</td>
                                                    <td>{item.Mar}</td>
                                                    <td>{item.Apr}</td>
                                                    <td>{item.May}</td>
                                                    <td>{item.Jun}</td>
                                                    <td>{item.Jul}</td>
                                                    <td>{item.Aug}</td>
                                                    <td>{item.Sep}</td>
                                                    <td>{item.Oct}</td>
                                                    <td>{item.Nov}</td>
                                                    <td>{item.Dec}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </div>

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
    );
};

export default PayPage;
