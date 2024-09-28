import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
    const [activeLink, setActiveLink] = useState(null); // State to track active link

    // Load active link from localStorage when the component is mounted
    useEffect(() => {
        const savedActiveLink = localStorage.getItem('activeLink');
        if (savedActiveLink) {
            setActiveLink(savedActiveLink);
        }
    }, []);

    const navigate =useNavigate();

    function handleClick(e, linkName, url) {
        e.preventDefault(); // Prevent the default anchor behavior

        // Set active link in state and also save it to localStorage
        setActiveLink(linkName);
        localStorage.setItem('activeLink', linkName);

        // Redirect to the URL
        setTimeout(() => {
           
           navigate(url) // window.location.href = url; // Redirect after 10 milliseconds
        }, 10);
    }

    return (
        <>
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    </a>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li className="nav-item">
                            <Link
                                href="/"
                                className="nav-link align-middle px-0"
                                style={{
                                    color: activeLink === 'home' ? 'yellow' : 'white',
                                    backgroundColor: activeLink === 'home' ? '#343a40' : 'transparent'
                                }}
                                onClick={(e) => handleClick(e, 'home', '/')}
                            >
                                <i className="fs-4 bi-house"></i>
                                <span className="ms-1 d-none d-sm-inline">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/dashboard"
                                className="nav-link px-0 align-middle"
                                style={{
                                    color: activeLink === 'dashboard' ? 'yellow' : 'white',
                                    backgroundColor: activeLink === 'dashboard' ? '#343a40' : 'transparent'
                                }}
                                onClick={(e) => handleClick(e, 'dashboard', '/dashboard')}
                            >
                                <i className="fs-4 bi-speedometer2"></i>
                                <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/timesheets"
                                className="nav-link px-0 align-middle"
                                style={{
                                    color: activeLink === 'timesheets' ? 'yellow' : 'white',
                                    backgroundColor: activeLink === 'timesheets' ? '#343a40' : 'transparent'
                                }}
                                onClick={(e) => handleClick(e, 'timesheets', '/timesheets')}
                            >
                                <i className="fs-4 bi-table"></i>
                                <span className="ms-1 d-none d-sm-inline">TimeSheets</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/claims"
                                className="nav-link px-0 align-middle"
                                style={{
                                    color: activeLink === 'claims' ? 'yellow' : 'white',
                                    backgroundColor: activeLink === 'claims' ? '#343a40' : 'transparent'
                                }}
                                onClick={(e) => handleClick(e, 'claims', '/claims')}
                            >
                                <i className="fs-4 bi-bootstrap"></i>
                                <span className="ms-1 d-none d-sm-inline">Claims</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/projects"
                                className="nav-link px-0 align-middle"
                                style={{
                                    color: activeLink === 'projects' ? 'yellow' : 'white',
                                    backgroundColor: activeLink === 'projects' ? '#343a40' : 'transparent'
                                }}
                                onClick={(e) => handleClick(e, 'projects', '/projects')}
                            >
                                <i className="fs-4 bi-grid"></i>
                                <span className="ms-1 d-none d-sm-inline">Projects</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/taxinfo"
                                className="nav-link px-0 align-middle"
                                style={{
                                    color: activeLink === 'taxinfo' ? 'yellow' : 'white',
                                    backgroundColor: activeLink === 'taxinfo' ? '#343a40' : 'transparent'
                                }}
                                onClick={(e) => handleClick(e, 'taxinfo', '/taxinfo')}
                            >
                                <i className="fs-4 bi-people"></i>
                                <span className="ms-1 d-none d-sm-inline">TaxInfo</span>
                            </Link>
                        </li>
                    </ul>
                    <hr />
                </div>
            </div>
        </>
    );
}

export default SideBar;



//2nd one --------2
// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';


// const SideBar = () => {
//     const [activeLink, setActiveLink] = useState(null); // State to track active link

//     function handleClick(e, linkName, url) {
//         e.preventDefault(); // Prevent the default anchor behavior
//         setActiveLink(linkName); // Set the active link
//         window.location.href = url; // Redirect to the URL
//     }

//     return (
//         <>
//             <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
//                 <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
//                     <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
//                     </a>
//                     <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
//                         <li className="nav-item">
//                             <a 
//                                 href="/" 
//                                 className="nav-link align-middle px-0" 
//                                 style={{
//                                     color: activeLink === 'home' ? 'yellow' : 'white',
//                                     backgroundColor: activeLink === 'home' ? '#343a40' : 'transparent'
//                                 }}
//                                 onClick={(e) => handleClick(e, 'home', '/')}
//                             >
//                                 <i className="fs-4 bi-house"></i> 
//                                 <span className="ms-1 d-none d-sm-inline">Home</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a 
//                                 href="/dashboard" 
//                                 className="nav-link px-0 align-middle" 
//                                 style={{
//                                     color: activeLink === 'dashboard' ? 'yellow' : 'white',
//                                     backgroundColor: activeLink === 'dashboard' ? '#343a40' : 'transparent'
//                                 }}
//                                 onClick={(e) => handleClick(e, 'dashboard', '/dashboard')}
//                             >
//                                 <i className="fs-4 bi-speedometer2"></i> 
//                                 <span className="ms-1 d-none d-sm-inline">Dashboard</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a 
//                                 href="/timesheets" 
//                                 className="nav-link px-0 align-middle" 
//                                 style={{
//                                     color: activeLink === 'timesheets' ? 'yellow' : 'white',
//                                     backgroundColor: activeLink === 'timesheets' ? '#343a40' : 'transparent'
//                                 }}
//                                 onClick={(e) => handleClick(e, 'timesheets', '/timesheets')}
//                             >
//                                 <i className="fs-4 bi-table"></i> 
//                                 <span className="ms-1 d-none d-sm-inline">TimeSheets</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a 
//                                 href="/claims" 
//                                 className="nav-link px-0 align-middle" 
//                                 style={{
//                                     color: activeLink === 'claims' ? 'yellow' : 'white',
//                                     backgroundColor: activeLink === 'claims' ? '#343a40' : 'transparent'
//                                 }}
//                                 onClick={(e) => handleClick(e, 'claims', '/claims')}
//                             >
//                                 <i className="fs-4 bi-bootstrap"></i> 
//                                 <span className="ms-1 d-none d-sm-inline">Claims</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a 
//                                 href="/projects" 
//                                 className="nav-link px-0 align-middle" 
//                                 style={{
//                                     color: activeLink === 'projects' ? 'yellow' : 'white',
//                                     backgroundColor: activeLink === 'projects' ? '#343a40' : 'transparent'
//                                 }}
//                                 onClick={(e) => handleClick(e, 'projects', '/projects')}
//                             >
//                                 <i className="fs-4 bi-grid"></i> 
//                                 <span className="ms-1 d-none d-sm-inline">Projects</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a 
//                                 href="/taxinfo" 
//                                 className="nav-link px-0 align-middle" 
//                                 style={{
//                                     color: activeLink === 'taxinfo' ? 'yellow' : 'white',
//                                     backgroundColor: activeLink === 'taxinfo' ? '#343a40' : 'transparent'
//                                 }}
//                                 onClick={(e) => handleClick(e, 'taxinfo', '/taxinfo')}
//                             >
//                                 <i className="fs-4 bi-people"></i> 
//                                 <span className="ms-1 d-none d-sm-inline">TaxInfo</span>
//                             </a>
//                         </li>
//                     </ul>
//                     <hr />
//                 </div>
//             </div>
//         </>
//     );
// }

// export default SideBar;



//3rd one ---------3
// import React, { useState } from 'react';

// const SideBar = () => {
//     const [activeLink, setActiveLink] = useState(null); // State to track active link

//     function handleClick(e, linkName, url) {
//         e.preventDefault(); // Prevent the default anchor behavior
//         setActiveLink(linkName); // Set the active link
//         setTimeout(() => {
//             window.location.href = url; // Redirect to the URL after a short delay
//         }, 100); // Delay the redirection by 100 milliseconds
//     }

//     return (
//         <>
//             <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
//                 <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
//                     <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
//                     </a>
//                     <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
//                         <li className="nav-item">
//                             <a 
//                                 href="/" 
//                                 className="nav-link align-middle px-0" 
//                                 style={{
//                                     color: activeLink === 'home' ? 'yellow' : 'white',
//                                     backgroundColor: activeLink === 'home' ? '#343a40' : 'transparent'
//                                 }}
//                                 onClick={(e) => handleClick(e, 'home', '/')}
//                             >
//                                 <i className="fs-4 bi-house"></i> 
//                                 <span className="ms-1 d-none d-sm-inline">Home</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a 
//                                 href="/dashboard" 
//                                 className="nav-link px-0 align-middle" 
//                                 style={{
//                                     color: activeLink === 'dashboard' ? 'yellow' : 'white',
//                                     backgroundColor: activeLink === 'dashboard' ? '#343a40' : 'transparent'
//                                 }}
//                                 onClick={(e) => handleClick(e, 'dashboard', '/dashboard')}
//                             >
//                                 <i className="fs-4 bi-speedometer2"></i> 
//                                 <span className="ms-1 d-none d-sm-inline">Dashboard</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a 
//                                 href="/timesheets" 
//                                 className="nav-link px-0 align-middle" 
//                                 style={{
//                                     color: activeLink === 'timesheets' ? 'yellow' : 'white',
//                                     backgroundColor: activeLink === 'timesheets' ? '#343a40' : 'transparent'
//                                 }}
//                                 onClick={(e) => handleClick(e, 'timesheets', '/timesheets')}
//                             >
//                                 <i className="fs-4 bi-table"></i> 
//                                 <span className="ms-1 d-none d-sm-inline">TimeSheets</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a 
//                                 href="/claims" 
//                                 className="nav-link px-0 align-middle" 
//                                 style={{
//                                     color: activeLink === 'claims' ? 'yellow' : 'white',
//                                     backgroundColor: activeLink === 'claims' ? '#343a40' : 'transparent'
//                                 }}
//                                 onClick={(e) => handleClick(e, 'claims', '/claims')}
//                             >
//                                 <i className="fs-4 bi-bootstrap"></i> 
//                                 <span className="ms-1 d-none d-sm-inline">Claims</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a 
//                                 href="/projects" 
//                                 className="nav-link px-0 align-middle" 
//                                 style={{
//                                     color: activeLink === 'projects' ? 'yellow' : 'white',
//                                     backgroundColor: activeLink === 'projects' ? '#343a40' : 'transparent'
//                                 }}
//                                 onClick={(e) => handleClick(e, 'projects', '/projects')}
//                             >
//                                 <i className="fs-4 bi-grid"></i> 
//                                 <span className="ms-1 d-none d-sm-inline">Projects</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a 
//                                 href="/taxinfo" 
//                                 className="nav-link px-0 align-middle" 
//                                 style={{
//                                     color: activeLink === 'taxinfo' ? 'yellow' : 'white',
//                                     backgroundColor: activeLink === 'taxinfo' ? '#343a40' : 'transparent'
//                                 }}
//                                 onClick={(e) => handleClick(e, 'taxinfo', '/taxinfo')}
//                             >
//                                 <i className="fs-4 bi-people"></i> 
//                                 <span className="ms-1 d-none d-sm-inline">TaxInfo</span>
//                             </a>
//                         </li>
//                     </ul>
//                     <hr />
//                 </div>
//             </div>
//         </>
//     );
// }

// export default SideBar;



//1st one ------1
// import React from 'react'
// const SideBar = () => {

//     function setActive(e) {
//         // Remove active class from all links
//         const links = document.querySelectorAll('#menu .nav-link');
//         links.forEach(link => {
//             link.classList.remove('active');
//             link.style.color = 'white';
//             link.style.backgroundColor = '';
//         });

//         // Add active class to the clicked link
//         const element = e.currentTarget; // Get the clicked element

//         element.classList.add('active');
//         element.style.color = 'yellow';
//         element.style.backgroundColor = '#343a40';
//     }
       
//   return (
//     <>
    
//     {/* <div class="container-fluid">
//     <div class="row   flex-nowrap"> */}
//         <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
//             <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
//                 <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
//                 </a>
//                 <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start " id="menu">
//                     <li class="nav-item">
//                         <a href="/" class="nav-link align-middle px-0 " onClick={setActive} >
//                             <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="/dashboard" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white  " onClick={setActive}>
//                             <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline ">Dashboard</span> </a>

//                     </li>
//                     <li>
//                         <a href="/timesheets" class="nav-link px-0 align-middle text-white" onClick={setActive}>
//                             <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">TimeSheets</span></a>
//                     </li>
//                     <li>
//                         <a href="/claims" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white" onClick={setActive}>
//                             <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Claims</span></a>
//                     </li>
//                     <li>
//                         <a href="/projects" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white" onClick={setActive}>
//                             <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Projects</span> </a>
//                     </li>
//                     <li>
//                         <a href="/taxinfo" class="nav-link px-0 align-middle text-white" onClick={setActive}>
//                             <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">TaxInfo</span> </a>
//                     </li>
//                 </ul>
//                 <hr/>

//             </div>
//         </div>
       
//     </>
//   )
// }

// export default SideBar
