import React from 'react'
import  Table  from 'react-bootstrap/Table';

const ProjectsPage = () => {

  const data = [{Id:'1', ProjectName:'Management System', FromDate: '02/01/2022', ToDate: '08/01/2023' , ProjectBudget: '$2,000'},
    {Id:'2', ProjectName:'Opticals website', FromDate: '20/05/2023', ToDate: '18/06/2023' , ProjectBudget: '$200'},
    {Id:'3', ProjectName:'E-commerce', FromDate: '19/01/2023', ToDate: '28/01/2025' , ProjectBudget: '$50,000'},
    {Id:'4', ProjectName:'Food Delivery App', FromDate: '25/09/2023', ToDate: '08/01/2024' , ProjectBudget: '$10,000'} ];

  return (
    <div >
    <div>
    <Table responsive striped bordered variant="success"> 
    <thead >
        <tr>
          <th>#</th>
        <th>Project Name</th>
        <th>FromDate</th>
        <th>ToDate</th>
        <th>ProjectBudget</th>
        </tr>
    </thead>
    <tbody>
        {
        data.map((item) => (
        <tr > 
        <td>{item.Id}</td>
        <td>{item.ProjectName}</td>
        <td>{item.FromDate }</td>
        <td>{item.ToDate} </td>
        <td>{item.ProjectBudget} </td>
        </tr>
        ))
        }
    </tbody>
    </Table>
    </div>
</div>
  )
}

export default ProjectsPage
