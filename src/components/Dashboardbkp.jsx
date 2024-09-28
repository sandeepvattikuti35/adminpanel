import React from 'react'
import AdminTable from './AdminTable';
import Adminpanel from './Adminpanel';
import AdminCards from './AdminCards';

const Dashboardbkp = () => {
  return (
    <>
    <Adminpanel></Adminpanel>
    <div class="container-fluid">
    <div class="row   flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <a href="/" class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="/adminpanel" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span> </a>
                    </li>
                    <li>
                        <a href="/timesheets" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">TimeSheets</span></a>
                    </li>
                    <li>
                        <a href="/claims" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Claims</span></a>
                    </li>
                    <li>
                        <a href="/projects" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Projects</span> </a>
                    </li>
                    <li>
                        <a href="/taxinfo" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">TaxInfo</span> </a>
                    </li>
                </ul>
                <hr/>
                {/* <div class="dropdown pb-4">
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a class="dropdown-item" href="#">New project...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr class="dropdown-divider"/>
                        </li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div> */}
            </div>
        </div>
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

export default Dashboardbkp
