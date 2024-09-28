import React from 'react'
import Adminpanel from '../Adminpanel'
import SideBar from '../SideBar'
import { useNavigate } from 'react-router-dom'; // For navigation
import { FaArrowLeft } from 'react-icons/fa'; // Import back arrow icon
import Button from 'react-bootstrap/Button'

import { Bar } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register chart components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);


function AttendancePage() {

        // For navigation
        const navigate = useNavigate();

        const handleBack = () => {
            navigate('/dashboard'); // Change '/dashboard' to your actual dashboard route
        };

        // Mock data for employee attendance per month
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Attendance in Days',
                data: [22, 20, 25, 26, 21, 24, 23, 22, 24, 20, 23, 21], // Attendance per month
                backgroundColor: 'rgba(0, 255, 0, 0.7)', // Lime background color
                borderColor: 'rgba(0, 255, 0, 1)', // Lime border color
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
                max: 30, // Maximum value for days in a month
                title: {
                    display: true,
                    text: 'Days Attended'
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
                            </div>
                            <div>
                            <div className="container mt-4">
                                <Card>
                                    <Card.Header className="bg-primary text-white">
                                        <h4>Employee Attendance Monthly-2023</h4>
                                    </Card.Header>
                                    <Card.Body>
                                        {/* Bar chart component */}
                                        <div style={{ maxWidth: '100%', height: 'auto' }}>
                                        <Bar data={data} options={options} />
                                        </div>
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

export default AttendancePage
