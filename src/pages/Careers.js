import React, { useState } from 'react'

export const Careers = () => {

  const [isVisible, setisVisible] = useState(false)

   const desc = () => {
   setisVisible(true)
   }

   const Close = () =>{
    setisVisible(false)
   }


  return (
    <div className='p-5'  >
        <div className='col-md-12 mt-5 d-flex flex-column justify-content-center align-items-center  p-4'>
            <h1 className='fs-1 fw-bold '>Latest jobs</h1>
        </div>
        <div className='col-md-12 mt-5 d-flex shadow  justify-content-between align-items-start p-5 carrier1'>
            <div>
            <h3 className='text-info'>Latest jobs</h3>
            <h6 className='mt-3'>Location Bengaluru, Karnataka, India Category Other Posted Date September 21st 2023 Job ID P-100042</h6>
            <h5 className='mt-3'>Job Requirements. Test Job Ad....</h5>
            </div>
            <div >
            <button id='descId' onClick={desc} className="btn  btn-outline-dark mt-5" type="button">
              Apply Now
            </button>
            </div>
        </div>

      { isVisible === true ? (
        <div className='overlay'>
        <div  className='description-box d-flex flex-column justify-content-start align-items-center shadow '>
              <div onClick={Close} className='btn btn-outline-dark corssbtn'> <i class="bi bi-x-lg"></i> </div>
            <div className='col-md-12 w-75 border-bottom'>
            <h1>Full Stack Developer</h1>
            <div className='d-flex mt-3'>
              <h6> <i class="bi bi-geo-alt"></i>Indore, India</h6>
              <h6 className='ms-5'> <i class="bi bi-award-fill"></i>Experience - 1 Year </h6>
            </div>
            </div>
            <div className=' w-75 col-md-12 mt-3'>
            <h5 className='text-danger'>Roles and Responsibilites</h5>
                  <div className='col-md-12 d-flex justify-content-start align-items-center'>
                  <i style={{marginRight:"20px"}} class="bi bi-arrow-return-right"></i>
                  <p> Knowledge of multiple front-end languages and libraries (e.g. HTML/ CSS, JavaScript, XML, jQuery)</p>
                  </div>
                  <div className='col-md-12 d-flex justify-content-start align-items-center'>
                  <i style={{marginRight:"20px"}} class="bi bi-arrow-return-right"></i>
                  <p> Knowledge of multiple front-end languages and libraries (e.g. HTML/ CSS, JavaScript, XML, jQuery)</p>
                  </div>
                  <div className='col-md-12 d-flex justify-content-start align-items-center'>
                  <i style={{marginRight:"20px"}} class="bi bi-arrow-return-right"></i>
                  <p> Knowledge of multiple front-end languages and libraries (e.g. HTML/ CSS, JavaScript, XML, jQuery)</p>
                  </div>
              <h5  className='text-danger'>Skills Requirment</h5>
                  <div className='col-md-12 d-flex justify-content-start align-items-center'>
                  <i style={{marginRight:"20px"}} class="bi bi-arrow-return-right"></i>
                  <p> HTML/ CSS, JavaScript, XML, jQuery</p>
                  </div> 
                  <button  className="btn btn-outline-dark mt-2" type="button">
                  Apply Now
                </button>
            </div>
            </div>
            </div>
      ) :   (false)  }
    
    </div>    
  )
}
