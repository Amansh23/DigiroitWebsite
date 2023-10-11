import React from 'react'

export const Portfolio = () => {

  return (
    <div>
        <div className='headerdiv'>
        <h1 className='h1-portfolio' >Portfolio</h1>
        <div className='w-50 mt-5 d-flex justify-content-between align-item-center portfolio1'>
          <h5>Filter by</h5>
          <a href='#' className='link-body-emphasis text-decoration-none' >All</a>
          <a href='#' className='link-body-emphasis text-decoration-none' >Design</a>
          <a href='#' className='link-body-emphasis text-decoration-none' >Branding</a>
          <a href='#' className='link-body-emphasis text-decoration-none' >Development</a>
          <a href='#' className='link-body-emphasis text-decoration-none' >Digital</a>
        </div>
        </div>
        <div className='col-md-12 d-flex flex-column justify-content-center align-items-center'>
           <div className='portfolio-div'>
             <div className='portfolio-img feature'>
               <div className='portfolio-img-img'><img src='/photo-1496171367470-9ed9a91ea931.avif'/></div>
               <div className='portfolio-img-content ms-3'>
                  <h5 className='mt-3  text-muted'>Hello Branding Identity</h5>
                  <h6 className='text-muted'> Branding</h6>
                </div>  
             </div>
             <div className='portfolio-img feature'>
               <div className='portfolio-img-img'><img src='/photo-1496171367470-9ed9a91ea931.avif'/></div>
               <div className='portfolio-img-content ms-3'>
                  <h5 className='mt-3 text-muted'>Visual Company</h5>
                  <h6 className='text-muted'>Design</h6>
                </div>  
             </div>
             <div className='portfolio-img feature'>
               <div className='portfolio-img-img'><img src='/photo-1496171367470-9ed9a91ea931.avif'/></div>
               <div className='portfolio-img-content ms-3'>
                  <h5 className='mt-3 text-muted'>Synphony App</h5>
                  <h6 className='text-muted'> Development</h6>
                </div>  
             </div>
          </div>
        </div>
        <div className="container portfolio3">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top ">
          <div className="col mb-3">
            <a
              href="/"
              className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
            >
              <img
                src="/logo_digiroit.png"
                alt="Logo"
                // width={30}
                height={30}
                className="d-inline-block align-text-center"
              />
            </a>
            <p className="text-body-secondary mt-5 lh-bs">
              Your trusted partner in next-generation technology solutions,
              empowering businesses to thrive in the digital age.
            </p>
          </div>
          <div className="col mb-3"></div>
          <div className="col mb-3">
          </div>
          <div className="col mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  About Us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Careers
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Portfolio
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Blogs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/privacy-policy" className="nav-link p-0 text-body-secondary">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="col mb-3">
            <h5>Contact</h5>
            <p>vijay nagar, Indore, MP India 452010</p>
            <p>
              contact@digiroit.com <br /> (+91) 958 932 9268
            </p>
          </div>
        </footer>
        <div className="d-flex flex-column flex-sm-row justify-content-between pb-4 mb-4">
          <p>© 2023 Digiroit Technologies Pvt Ltd | All rights reserved</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <i className="bi bi-linkedin" />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <i className="bi bi-instagram" />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <i className="bi bi-facebook" />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <i className="bi bi-twitter-x" />
              </a>
            </li>
          </ul>
        </div>
        </div>
    </div>
  )

}
