import React from 'react'
import Adminpanel from '../Adminpanel'
import SideBar from '../SideBar';
import { useNavigate } from 'react-router-dom'; // For navigation
import { FaArrowLeft } from 'react-icons/fa'; // Import back arrow icon
import Button from 'react-bootstrap/Button';

import { Bar } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register chart components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);


const LeavePage = () => {

        // For navigation
        const navigate = useNavigate();

        const handleBack = () => {
            navigate('/dashboard'); // Change '/dashboard' to your actual dashboard route
        };


        // Mock data for employee leaves per month
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Leaves in Days',
                data: [2, 5, 3, 1, 4, 2, 3, 1, 4, 5, 2, 3], // Leaves per month
                backgroundColor: 'rgba(255, 0, 0, 0.6)', // Red color for leaves
                borderColor: 'rgba(255, 0, 0, 1)', // Red border color
                borderWidth: 1
            }
        ]
    };

    // Options for customizing the chart
    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true, // Start the Y-axis from 0
                max: 10, // Maximum value for leaves in a month
                title: {
                    display: true,
                    text: 'Days on Leave'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Months'
                }
            }
        }
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
                            <div className="container mt-4">
                                    <Card>
                                        <Card.Header className="bg-danger text-white">
                                            <h4>Employee Leaves Monthly-2023</h4>
                                        </Card.Header>
                                        <Card.Body>
                                            {/* Bar chart component */}
                                            <Bar data={data} options={options} />
                                        </Card.Body>
                                    </Card>
                                </div>
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

export default LeavePage
