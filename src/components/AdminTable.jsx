import React from 'react'
import { Table } from 'react-bootstrap';


const AdminTable = () => {

const data=[
  {Id:'1', Name:'Jhon',Position:'Accountant', OfficeLoc:'BNG', Age:'33', StartDate:'28-08-2008' },
  {Id:'2', Name:'Harish',Position:'Chief Executive Officer (CEO)', OfficeLoc:'HYD', Age:'28', StartDate:'20-02-2019' },
  {Id:'3', Name:'Sweety',Position:'SoftWare Engineer', OfficeLoc:'BNG', Age:'35', StartDate:'10-10-2012' },
  {Id:'4', Name:'Raju',Position:'Senior JavaScript Developer', OfficeLoc:'HYD', Age:'24', StartDate:'30-03-2022' },
  {Id:'5', Name:'Vinitha',Position:'HR', OfficeLoc:'HYD', Age:'23', StartDate:'23-09-2023' },
  {Id:'6', Name:'Nick',Position:'Backend Developer', OfficeLoc:'BNG', Age:'44', StartDate:'20-07-2010' },
  
]

  return (
    <>
        
    {/* <div >
    <h1>Employee Details</h1>
    <Table responsive striped bordered variant="secondary">
          <thead>
              <tr>
              <th>#</th>
            <th>Name </th>  
            <th>Position</th>
            <th>OfficeLoc</th>
            <th>Age</th>
            <th>StartDate</th>
              </tr>
          </thead>
          <tbody>
              {
              data.map((item) => (
                  <tr>
                      <td>{item.Id}</td>
                      <td>{item.Name}</td>   
                      <td>{item.Position}</td> 
                      <td>{item.OfficeLoc}</td>
                      <td>{item.Age}</td> 
                      <td>{item.StartDate}</td>                        
                    </tr>
              ))
              }
          </tbody>
      </Table>
      
      </div> */}
      </> 
  )
}

export default AdminTable;






