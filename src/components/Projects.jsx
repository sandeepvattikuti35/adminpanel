import React from 'react'

import Adminpanel from './Adminpanel'
import SideBar from './SideBar'
import ProjectsPage from './timeSheetComponents/ProjectsPage'

const Projects = () => {
  return (
    <>
        <Adminpanel></Adminpanel> 
        
    <div class="container-fluid">
        <div class="row   flex-nowrap">
            <SideBar></SideBar>
            <div class="col mt-3">     
              <h1 className=' text-success mx-4 '>Projects </h1>     
              <div className='row h-99 ' >
                <div><ProjectsPage></ProjectsPage></div>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Projects
