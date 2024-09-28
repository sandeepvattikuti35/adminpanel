import React from 'react'
import Adminpanel from './Adminpanel'
import SideBar from './SideBar'
import TaxInfoPage from './timeSheetComponents/TaxInfoPage'

const TaxInfo = () => {
  return (
    <>
        <Adminpanel></Adminpanel> 
        
    <div class="container-fluid">
        <div class="row   flex-nowrap">
            <SideBar></SideBar>
            <div class="col mt-3">          
              <div className='row h-99 ' >
                <div><TaxInfoPage></TaxInfoPage></div>
              </div>
              <div className='row mt-5' >
                <div></div>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default TaxInfo
