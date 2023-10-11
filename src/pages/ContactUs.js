import React from 'react'

export const ContactUs = () => {
  return (
    <div>
       <div className='headerdiv-contactUS'>
        <h1 className='h1-portfolio' >We are here to</h1>
        <h1 className='h1-portfolio' >help you</h1>
        <h4 className='mt-5'>User experience business-to-business ramen pitch infrastructure seed</h4>
        <h4>money analytics channels burn rate</h4>
        </div>
        <div className='mapdiv mt-5'>
            <iframe title='myframe' width="1820" height="460"  src="https://maps.google.com/maps?q=22.752222304860116%2C+75.89470798127695&t=&z=13&ie=UTF8&iwloc=&output=embed">
            </iframe>

        </div>
        <div className='col-md-12 d-flex mt-3 bg-light justify-content-around align-items-center p-5 contactus1'>
          <div className='d-flex'>
            <div>
                <button className="btn btn-outline-dark p-3">
                <i class="bi bi-envelope"></i>
                  </button>
            </div>
            <div className='ms-4'>
              <h6>Email Us</h6>
              <a href='/#' className='link-body-emphasis text-decoration-none' >contact@digiroit.com</a>
            </div>
          </div>
          <div className='d-flex'>
            <div>
                <button className="btn btn-outline-dark p-3">
                <i class="bi bi-geo-fill"></i>
                  </button>
            </div>
            <div className='ms-4'>
              <h6>Visit Us</h6>
              <a href='/#' className='link-body-emphasis text-decoration-none' >1/6, Vijay Nagar, Indore, Madhya Pradesh</a>
            </div>
          </div>
          <div className='d-flex'>
            <div>
                <button className="btn btn-outline-dark p-3">
                <i class="bi bi-telephone-plus-fill"></i>
                  </button>
            </div>
            <div className='ms-4'>
              <h6>Call Us</h6>
              <a href='/#' className='link-body-emphasis text-decoration-none' >+91 958 932 9268</a>
            </div>
          </div>
        </div>
        <div className='col-md-12 mt-5 d-flex  justify-content-around align-items-center p-5 contactus2' >
            <div className='col-md-6  p-5'>
                <h3 className='fs-2 fw-bold'>Get in touch</h3>
                <p className='mt-5 fs-5'>
                Holy grail bandwidth stealth niche market freemium buyer traction. A/B testing paradigm shift stealth return on investment android startup user experience bootstrapping funding partnership agile development innovator network effects. Beta series A financing buzz creative.
                </p>
                <h5 className='mt-2  d-flex justify-content-start align-items-center'>
                   <i style={{marginRight:"20px"}} class="bi bi-plus-lg"></i>
                   Fully Responsive
                </h5>
                <h5 className='mt-2  d-flex justify-content-start align-items-center'>
                   <i style={{marginRight:"20px"}} class="bi bi-plus-lg"></i>
                   Multiple Pages
                </h5>
                <h5 className='mt-2  d-flex justify-content-start align-items-center'>
                   <i style={{marginRight:"20px"}} class="bi bi-plus-lg"></i>
                   Modular Component
                </h5>
                <h5 className='mt-2  d-flex justify-content-start align-items-center'>
                   <i style={{marginRight:"20px"}} class="bi bi-plus-lg"></i>
                   Create your website
                </h5>
            </div>
            <form className='col-md-6 p-5 contactus3' action='/privacy-policy'>
            <div className='col-md-6 w-100 mt-5  p-5'>
                <div class="mb-3">
                    <label class="form-label">Your Name *</label>
                    <input type="name" class="form-control" id="exampleFormControlInput1" required placeholder="name" />
                    </div>
                    <div class="mb-3">
                    <label class="form-label">Email Address *</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" required placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                    <label class="form-label">Message *</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <div class="col-12">
                     <button type="submit" class="btn btn-dark p-3 my-1 mt-5 shadow text-center">Send Message</button>
                    </div>
                </div>
            </div>
            </form>
        </div>
        <div className="container">
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
                <a href="/#" className="nav-link p-0 text-body-secondary">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/#" className="nav-link p-0 text-body-secondary">
                  About Us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/#" className="nav-link p-0 text-body-secondary">
                  Careers
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/#" className="nav-link p-0 text-body-secondary">
                  Portfolio
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/#" className="nav-link p-0 text-body-secondary">
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
              <a className="link-body-emphasis" href="/#">
                <i className="bi bi-linkedin" />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="/#">
                <i className="bi bi-instagram" />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="/#">
                <i className="bi bi-facebook" />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="/#">
                <i className="bi bi-twitter-x" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
