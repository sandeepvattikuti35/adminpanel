import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';

const TaxInfoPage = () => {

    const [showImage, setShowImage] = useState(false);

  const handleButtonClick = () => {
    setShowImage(true);
  };

//   handleImageDoubleClick
  const handleImageClose = () => {
    setShowImage(false);
  };

  const data=[{Id:'1', EmpName:'Abhi', Salary:'$10,000',TDS:'12%', finacialYear:'2021-2022'},
             {Id:'2', EmpName:'Bobby', Salary:'$3000',TDS:'9%', finacialYear:'2020-2021'},
             {Id:'3', EmpName:'Charlie', Salary:'$95,000',TDS:'25%', finacialYear:'2022-2023'},
             {Id:'4', EmpName:'Dinga', Salary:'$900',TDS:'5%', finacialYear:'2022-2023'},
             {Id:'5', EmpName:'Sandeep', Salary:'$1000',TDS:'8%', finacialYear:'2023-2024'},
  ]

  return (
    <div >
        <h1 className='text-success'>Tax Information</h1>
        <Button onClick={handleButtonClick}>Show Form 16</Button>
        <div style={{ display: 'flex', alignItems: 'center' , flexWrap:'wrap'}} >
      
      {showImage && (
        // <img
        //   src="images/form-16.png" // Replace with actual image URL
        //   alt="Form 16"
        //   style={{
        //     width: '60%',
        //     height: '40%',
        //     marginLeft: '10px', // Adjust this for spacing
        //     cursor: 'pointer'
        //   }}
        //   onDoubleClick={handleImageDoubleClick}
        // />
        <img
        src="images/form-16.png" // Replace with actual image URL
        alt="Form 16"
        style={{
          width: '70%', // 30% of the viewport width
          height: 'auto', // 40% of the viewport height
          marginLeft: '10px',
          marginTop: '10px',
          cursor: 'pointer',
          objectFit: 'contain',
          display: showImage ? 'block' : 'none' // Hide image until button click
        }}
        onClick={handleImageClose} // Single tap to close on mobile
        onDoubleClick={handleImageClose} // Double click to close on desktop
        className="img-fluid" // Bootstrap's responsive image class
      />
      )}
    </div>
        <div className='mt-5'>
    <Table responsive striped bordered variant="warning"> 
    <thead >
        <tr>
        <th>#</th>
        <th >Employee Name</th>
        <th>Salary</th>
        <th>TDS</th>
        <th>Financial Year</th>
        </tr>
    </thead>
    <tbody>
        {
        data.map((item) => (
        <tr> 
        <td>{item.Id }</td>
        <td>{item.EmpName }</td>
        <td>{item.Salary} </td>
        <td>{item.TDS} </td>
        <td>{item.finacialYear}</td>
        </tr>
        ))
        }
    </tbody>
</Table>
</div>
    </div>

  )
}

export default TaxInfoPage
