import React from 'react'
import Adminpanel from './Adminpanel'
import SideBar from './SideBar'
import TimeSheetCardsNew from './TimeSheetCardsNew'
// import TimeSheetCards from './timeSheetComponents/TimeSheetCards'
// import TimeSheetCards from './components/TimeSheetCards';

const TimeSheets = () => {
  return (
    <>
        <Adminpanel></Adminpanel>  
    <div class="container-fluid">
        <div class="row   flex-nowrap">
            <SideBar></SideBar>
            <div class="col mt-3">   
                <h1 className=' text-success mx-2 '>Time Sheets </h1>  

               <div className='row h-99 ' >
                <div><TimeSheetCardsNew></TimeSheetCardsNew></div>
              </div>
              <div className='row mt-5' >
                <div>
                  
                </div>
              </div>
               
            </div>
        </div>
    </div>
    </>
  )
}

export default TimeSheets
