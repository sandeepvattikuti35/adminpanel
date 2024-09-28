import React from 'react'

import Adminpanel from './Adminpanel'
import SideBar from './SideBar'
import ClaimsPage from './timeSheetComponents/ClaimsPage'


const Claims = () => {
  return (
    <>
        <Adminpanel></Adminpanel> 
        
    <div class="container-fluid">
        <div class="row   flex-nowrap">
            <SideBar></SideBar>
            <div class="col mt-3">    
      
              <div className='row h-99 ' >
                <h1></h1>
                <div><ClaimsPage></ClaimsPage></div>
              </div>
              <div className='row mt-5' >
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Claims
