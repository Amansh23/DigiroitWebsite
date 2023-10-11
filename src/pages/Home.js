import React from "react";
import video1 from "../videos/video (2160p) (4).mp4";
import video2 from "../videos/pexels-mikhail-nilov-7534244 (1080p).mp4";
import video3 from "../videos/video1.mp4";

export const Home = () => {
  return (
    <>
      {/* <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide-to={0}
      className=""
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide-to={1}
      aria-label="Slide 2"
      className=""
    />
    <button
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide-to={2}
      aria-label="Slide 3"
      className="active"
      aria-current="true"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item">
      <svg
        className="bd-placeholder-img"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
      </svg>
      <div className="container">
        <div className="carousel-caption text-start">
          <h1>Example headline.</h1>
          <p className="opacity-75">
            Some representative placeholder content for the first slide of the
            carousel.
          </p>
          <p>
            <a className="btn btn-lg btn-primary" href="#">
              Sign up today
            </a>
          </p>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <svg
        className="bd-placeholder-img"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
      </svg>
      <div className="container">
        <div className="carousel-caption">
          <h1>Another example headline.</h1>
          <p>
            Some representative placeholder content for the second slide of the
            carousel.
          </p>
          <p>
            <a className="btn btn-lg btn-primary" href="#">
              Learn more
            </a>
          </p>
        </div>
      </div>
    </div>
    <div className="carousel-item active">
      <svg
        className="bd-placeholder-img"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
      </svg>
      <div className="container">
        <div className="carousel-caption text-end">
          <h1>One more for good measure.</h1>
          <p>
            Some representative placeholder content for the third slide of this
            carousel.
          </p>
          <p>
            <a className="btn btn-lg btn-primary" href="#">
              Browse gallery
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#myCarousel"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#myCarousel"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div> */}

      <div
        id="myCarousel"
        className="carousel slide mb-6"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators my-custom-class-slides">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={0}
            className="active"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={1}
            aria-label="Slide 2"
            className=""
          />
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={2}
            aria-label="Slide 3"
            className=""
            aria-current="true"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <video
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                outline: "none",
                border: "none",
              }}
              autoPlay
              loop
              muted
              src={video3}
              typeof=".mp4"
            />
            <div className="overlay"></div>
            <div className="container my-custom-class ">
              <div className="carousel-caption text-start">
                <h1>Unlock Digital Success with Digiroit Technologies</h1>
                <p>Your Partner in Digital Transformation and Innovation</p>
                <p>
                  <a
                    className="btn btn-lg btn-outline-light rounded-5"
                    href="#"
                  >
                    Learn more&nbsp;
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <video
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                outline: "none",
                border: "none",
              }}
              autoPlay
              loop
              muted
              src={video2}
              typeof=".mp4"
            />
            <div className="overlay"></div>
            <div className="container my-custom-class-center">
              <div className="carousel-caption">
                <h1>Custom Software Solutions Tailored to Your Needs</h1>
                <p>Empowering Businesses with Cutting-Edge Technology</p>
                <p>
                  <a
                    className="btn btn-lg btn-outline-light rounded-5"
                    href="#"
                  >
                    Explore Solutions&nbsp;
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <video
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                outline: "none",
                border: "none",
              }}
              autoPlay
              loop
              muted
              src={video1}
              typeof=".mp4"
            />
            <div className="overlay"></div>
            <div className="container my-custom-class-right">
              <div className="carousel-caption text-end">
                <h1>Securing Your Digital World</h1>
                <p>Protecting Your Data, Assets, and Reputation</p>
                <p>
                  <a
                    className="btn btn-lg btn-outline-light rounded-5"
                    href="#"
                  >
                    Get in Touch&nbsp;
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>

      <div className="container pt-5">
        {/* <video className="background-video" preload="true" autoPlay loop muted>
        <source src="/videos/video1.mp4" type="video/mp4" />
        <source src="/videos/video1.ogg" type="video/ogv" />
        <source src="/videos/video1.webm" type="video/webm" />
      </video>
      <div className="container py-6 py-md-7 text-white z-index-20">
        <div className="row">
          <div className="col-xl-10">
            <div className="text-center text-lg-start">
       
              <h1 className="display-3 fw-bold text-shadow">
                Digiroit for your success
              </h1>
            </div>
      
          </div>
        </div>
      </div> */}

        <div className="col-lg-8 mx-auto text-center pt-5">
          <h6 className="mb-4">What We Do</h6>
          <h3 className="fs-1 mb-4">
            We design & build brands, campaigns & digital projects for
            businesses
          </h3>
          <p className="lead mb-4">
            At Digiroit Technologies, we specialize in leveraging technology to
            drive innovation and transform businesses. Our comprehensive range
            of services is designed to meet your unique needs and empower you in
            the digital age.
          </p>
        </div>

        <div className="container px-4 py-3" id="featured-3">
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="px-3">
              <div className="feature col">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center icon-bg bg-gradient fs-2 mb-3">
                  <i className="bi bi-globe"></i>
                </div>
                <h3 className="fs-3 text-body-emphasis">
                  Digital Transformation
                </h3>
                <p>
                  We partner with businesses to navigate the complex landscape
                  of digital transformation. Our tailored strategies and
                  solutions enable you to adapt, grow, and excel in today's
                  ever-changing world.
                </p>
                <a href="#" className="icon-link">
                  Learn more
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="px-3">
              <div className="feature col">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center icon-bg bg-gradient fs-2 mb-3">
                  <i className="bi bi-code-slash"></i>
                </div>
                <h3 className="fs-3  text-body-emphasis">
                  Software Development
                </h3>
                <p>
                  Our expert development team is dedicated to bringing your
                  vision to life. From custom web and mobile applications to
                  enterprise software, we create solutions that fuel your
                  success.
                </p>
                <a href="#" className="icon-link">
                  Learn more
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="px-3">
              <div className="feature col">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center icon-bg bg-gradient fs-2 mb-3">
                  <i className="bi bi-robot"></i>
                </div>
                <h3 className="fs-3  text-body-emphasis">AI & ML</h3>
                <p>
                  Unleash AI and machine learning for valuable insights,
                  streamlined processes, and data-driven decisions that propel
                  your business.
                </p>
                <a href="#" className="icon-link">
                  Learn more
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="px-3">
              <div className="feature col">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center icon-bg bg-gradient fs-2 mb-3">
                  <i className="bi bi-fingerprint"></i>
                </div>
                <h3 className="fs-3  text-body-emphasis">Cybersecurity</h3>
                <p>
                  Protecting your data and assets is non-negotiable. Our
                  state-of-the-art cybersecurity solutions ensure that you stay
                  one step ahead of evolving threats.
                </p>
                <a href="#" className="icon-link">
                  Learn more
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="px-3">
              <div className="feature col">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center icon-bg bg-gradient fs-2 mb-3">
                  <i className="bi bi-file-check"></i>
                </div>
                <h3 className="fs-3  text-body-emphasis">IT Consulting</h3>
                <p>
                  Our IT consulting services provide strategic technology
                  guidance to optimize your IT infrastructure, enhance security,
                  and align technology with your business goals.
                </p>
                <a href="#" className="icon-link">
                  Learn more
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="px-3">
              <div className="feature col">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center icon-bg bg-gradient fs-2 mb-3">
                  <i className="bi bi-people"></i>
                </div>
                <h3 className="fs-3  text-body-emphasis">US Staffing</h3>
                <p>
                  Our US staffing services connect businesses with top talent
                  across various industries. We streamline the hiring process,
                  ensuring you have the right team to achieve your goals.
                </p>
                <a href="#" className="icon-link">
                  Learn more
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="col-lg-12 mx-auto text-center py-5">
          <h6 className="mb-4">Why Choose Us</h6>
          <h3 className="fs-1 mb-4">
            Exceptional Services and Benefits That Set Us Apart
          </h3>
          <div className="row px-lg-4">
            <div className="col-md-6  p-lg-5 text-end">
              {/* <img
                src="/pexels-leeloo-thefirst-5428836.jpg"
                className=" img-fluid why-section-img align-middle"
              /> */}
              <h5 className="">Experience Matters:</h5>
              <p>
                With over decade of industry experience, we bring a wealth of
                knowledge and expertise to every project. Our seasoned team has
                successfully delivered solutions across various industries.
              </p>

              <h5 className="mt-4">Innovation at the Core:</h5>
              <p>
                We're not just technology enthusiasts; we're innovators. We stay
                on the cutting edge of emerging technologies to ensure your
                business stays ahead of the curve.
              </p>
              <h5 className="mt-4">Tailored Solutions:</h5>
              <p>
                We understand that every business is unique. Our solutions are
                custom-built to address your specific needs, ensuring a perfect
                fit.
              </p>

              <h5 className="mt-4">Client-Centric Approach:</h5>
              <p>
                Your success is our success. We're committed to delivering value
                and exceeding your expectations. See what our satisfied clients
                have to say.
              </p>
            </div>
            <div className="col-md-6 text-start p-lg-5">
              <h5 className="">Proven Track Record:</h5>
              <p>
                Don't just take our word for it. Our track record speaks for
                itself. We've helped numerous businesses achieve their goals,
                whether it's digital transformation, software development, AI
                implementation, or enhancing cybersecurity. Read what our
                satisfied clients have to say about their experiences with us.
              </p>

              <h5 className="mt-4">Comprehensive Services:</h5>
              <p>
                From digital transformation and software development to AI and
                machine learning, we offer a comprehensive suite of services to
                address all your technology needs. Whether you're a startup or
                an established enterprise, we have the expertise to support you.
              </p>
              <h5 className="mt-4">Commitment to Security:</h5>
              <p>
                In an era of increasing cybersecurity threats, we take your
                security seriously. Our cybersecurity solutions are designed to
                safeguard your data and assets, providing peace of mind in an
                ever-evolving digital landscape.
              </p>
            </div>
            <p>
              When you choose Digiroit Technologies, you're choosing a partner
              dedicated to your success. We're committed to helping you achieve
              your business objectives, leverage technology effectively, and
              thrive in the digital age.
            </p>
          </div>
          <button
            className="btn btn-dark p-3 my-1 rounded-5 shadow text-center"
            type="button"
          >
            More about us
            <i className="bi bi-arrow-right p-2"></i>
          </button>
        </div>
        <hr />
        <div className="col-lg-12 mx-auto text-center py-5">
          <h6 className="mb-4">Recent Projects</h6>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-2">
            <div className="col">
              <div className="card ">
                {/* <svg
                  className="bd-placeholder-img card-img rounded-5"
                  width="100%"
                  height={225}
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                </svg> */}

                <img
                  src="/taskey1.webp"
                  className="bd-placeholder-img card-img rounded-5"
                  width={"100%"}
                  height={225}
                  style={{boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)"}}
                />

                <div className="card-body text-start ">
                  <h5 className="card-title">Taskey</h5>
                  <p className="card-text">Task management application</p>
                  {/* <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card ">
                {/* <svg
                  className="bd-placeholder-img card-img rounded-5"
                  width="100%"
                  height={225}
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                </svg> */}

                    <img
                  src="/grhamStays.png"
                  className="bd-placeholder-img card-img rounded-5"
                  width={"100%"}
                  height={225}
                  style={{boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)"}}

                />

                <div className="card-body text-start ">
                  <h5 className="card-title">Grhamstays</h5>
                  <p className="card-text">An airbnb competitor</p>
                  {/* <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card ">
                {/* <svg
                  className="bd-placeholder-img card-img rounded-5"
                  width="100%"
                  height={225}
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                > */}
               

                  {/* <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                </svg> */}

                    <img
                  src="/img3.jpg"
                  className="bd-placeholder-img card-img rounded-5"
                  width={"100%"}
                  height={225}
                  style={{boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)"}}

                   />

                <div className="card-body text-start ">
                  <h5 className="card-title">Amazing</h5>
                  <p className="card-text">School leadership platform</p>
                  {/* <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <p className="text-end">
            <a className="text-decoration-none" href="#">
              View all
              <i className="bi bi-arrow-right p-2"></i>
            </a>
          </p>
        </div>
       

        <section className="container p-4 ">
          <div className="row rounded-5 p-2 text-center bg-testimonials ">
            <div className="bg-testimonials-slide rounded-5">
              <h3 className="h3 bg-testimonials-h3 ">Client Testimonial</h3>

              <div className="col-lg-8 p-0 ">
                <div
                  id="carouselExampleIndicators1"
                  className="carousel slide "
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators testimonial-indicator  ">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators1"
                      data-bs-slide-to={0}
                      className="active"
                      aria-label="Slide 1"
                      aria-current="true"
                    />
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators1"
                      data-bs-slide-to={1}
                      aria-label="Slide 2"
                      className=""
                    />
                  </div>
                  <div className="carousel-inner" id="testimonial-it">
                    {/* <div className="bg-img"></div> */}
                    <div className="carousel-item active">
                      <p className="bg-testimonials-p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam quis lectus et erat pulvinar dictum sit amet at
                        felis. Nunc pharetra lorem ac cursus interdum. Nunc
                        pellentesque aliquam justo, vel convallis dolor molestie
                        vel. Suspendisse placerat diam nec ex rutrum, nec
                        commodo mi scelerisque. Sed et ex sed odio aliquet
                        consequat. In pellentesque mattis lorem, sed tempus orci
                        mattis et.
                      </p>
                      <p
                        className="my-2"
                        style={{
                          marginBottom: "20px",
                          fontSize: 18,
                          fontWeight: 600,
                          color: "black",
                        }}
                      >
                        Somenak Martin
                        <br />
                        Founder | Matkoi
                      </p>
                    </div>
                    <div className="carousel-item ">
                      <p className="bg-testimonials-p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam quis lectus et erat pulvinar dictum sit amet at
                        felis. Nunc pharetra lorem ac cursus interdum. Nunc
                        pellentesque aliquam justo, vel convallis dolor molestie
                        vel. Suspendisse placerat diam nec ex rutrum, nec
                        commodo mi scelerisque. Sed et ex sed odio aliquet
                        consequat. In pellentesque mattis lorem, sed tempus orci
                        mattis et.
                      </p>
                      <p
                        className="my-2"
                        style={{
                          fontSize: 18,
                          fontWeight: 600,
                          color: "black",
                          marginBottom: "20px",
                        }}
                      >
                        Somenak Martin
                        <br />
                        Founder | Matkoi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="col-lg-12 mx-auto text-center py-5">
          <h6 className="mb-4">Recent Projects</h6>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-2">
            <div className="col">
              <div className="card ">
                <svg
                  className="bd-placeholder-img card-img rounded-5"
                  width="100%"
                  height={225}
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                </svg>

                <img
                  src="/taskey1.webp"
                  className="bd-placeholder-img card-img rounded-5"
                  width={"100%"}
                  height={225}
                />

                <div className="card-body text-start ">
                  <h5 className="card-title">Taskey</h5>
                  <p className="card-text">Task management application</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card ">
                <svg
                  className="bd-placeholder-img card-img rounded-5"
                  width="100%"
                  height={225}
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                </svg>
                <div className="card-body text-start ">
                  <h5 className="card-title">Grhamstays</h5>
                  <p className="card-text">An airbnb competitor</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card ">
                <svg
                  className="bd-placeholder-img card-img rounded-5"
                  width="100%"
                  height={225}
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                </svg>
                <div className="card-body text-start ">
                  <h5 className="card-title">Amazing</h5>
                  <p className="card-text">School leadership platform</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-end">
            <a className="text-decoration-none" href="#">
              View all
              <i className="bi bi-arrow-right p-2"></i>
            </a>
          </p>
        </div> */}
        <div className="col-md-12  p-4">
          <div className="h-100 p-5 text-bg-dark rounded-5 text-center shadow">
            <h2>Ready to Collaborate?</h2>
            <p>
              Embark on your digital journey with Digiroit Technologies. Let's
              connect and explore how we can transform your business.
            </p>
            <button className="btn btn-outline-light" type="button">
              Contact Now
            </button>
          </div>
        </div>
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
    </>
  );
};
