import React from 'react'
import Adminpanel from './Adminpanel'
import SideBar from './SideBar'
import AdminCards from './AdminCards'
import AdminTable from './AdminTable'

const Dashboard = () => {
  return (
    <>
        <Adminpanel></Adminpanel> 
        
    <div class="container-fluid">
        <div class="row   flex-nowrap">
            <SideBar></SideBar>
            <div class="col mt-3">          
              <div className='row h-99 ' >
                <div><AdminCards></AdminCards></div>
              </div>
              <div className='row mt-5' >
                <div><AdminTable></AdminTable></div>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard
