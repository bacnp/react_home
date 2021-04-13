import React, { Component } from 'react';
// import { MDBProgress } from 'mdbreact';
// import Slider from 'react-slick';
// import CountUp from 'react-countup';
import Header from '../layout/Header';
import {Link} from 'react-router-dom';

export class Greetings extends Component {
    render() {
        // var slick_slider = {
        //   dots: false,
        //   arrow: false,
        //   autoplay: true,
        //   infinite: true,
        //   speed: 500,
        //   slidesToShow: 4,
        //   slidesToScroll: 1,

        //   responsive: [{

        //     breakpoint: 1199,
        //     settings: {
        //     slidesToShow: 3,
        //     slidesToScroll: 3
        //     }
        // },
        // {
      
        //     breakpoint: 1024,
        //     settings: {
        //     slidesToShow: 3,
        //     slidesToScroll: 3
        //     }
        // },
        // {
      
        //     breakpoint: 767,
        //     settings: {
        //         slidesToShow: 2,
        //         slidesToScroll: 2
        //     }
        // },
        // {
        //     breakpoint: 480,
        //     settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1
        //     }
        // }]
        // };
        return (
            <div className="site-main">
                <Header />
                {/* page-title */}
                <div className="ttm-page-title-row">
                    <div className="container-xl">
                    <div className="row">
                        <div className="col-md-12"> 
                        <div className="title-box text-center">
                            <div className="page-title-heading">
                            <h1 className="title">Greetings</h1>
                            </div>{/* /.page-title-captions */}
                            <div className="breadcrumb-wrapper">
                            <span>
                              <Link title="Homepage" to="/" ><i className="ti ti-home" />&nbsp;&nbsp;Home</Link>
                            </span>
                            <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                            <span>About Us : : Greetings</span>
                            </div>  
                        </div>
                        </div>{/* /.col-md-12 */}  
                    </div>{/* /.row */}  
                    </div>{/* /.container */}                      
                </div>
                {/* page-title end*/}
                {/* Company section */}
                <section className="ttm-row aboutus-section clearfix">
                    <div className="container-xl">
 
                  <div className="col-md-12">
                    {/* section title */}
                    <div className="section-title text-center with-desc clearfix">
                      <div className="title-header">

                        <h2 className="title">“ WE CARE. WE COMMIT. WE ARE YOUR TRUE PARTNER. ”</h2>
                      </div>
                    </div>{/* section title end */}
                  </div>
                  <div className="row">{/* row */}
                        <div className="col-lg-6">
                        <div className="position-relative">
                            {/* ttm_single_image-wrapper */}
                            <div className="ttm_single_image-wrapper text-sm-center mr-35 res-991-m-0">
                            <img className="img-fluid" src="./images/temp/greetings_1.png" title="single-img-nine" alt="single-img-nine" />
                            </div>{/* ttm_single_image-wrapper end */}
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="res-991-mt-30">
                            {/* section title */}
                            <div className="section-title with-desc clearfix">

                            <div className="title-desc">
                                <p>React Plus HOLDINGS is committed to uphold this Mission Statement.</p>

                                <p>This statement also expresses my strong aspirations over the past 10 years since the company was founded. Thanks to the support of our customers, we have been able to overcome all challenges by working together as one.</p>

                                <p>At React Plus HOLDINGS, we always work together in solidarity to put our clients' best interests first to meet all their requirements. I strongly believe that by doing our utmost best, we have become a trusted partner and the number one choice of clients.</p>
                            </div>
                            </div>{/* section title end */}
                        </div>
                        </div>

                        </div>
                    </div>
                </section>
                {/* Companysection end*/}
                                <section className="ttm-row.zero-padding-section clearfix">
 
                                {/* aboutus-section */}

                    <div className="container-xl">
                    <div className="row">{/* row */}

                        <div className="col-lg-6">
                        <div className="res-991-mt-30">
                            {/* section title */}
                            <div className="section-title with-desc clearfix">

                            <div className="title-desc">
                                <p>Starting with offshore development for Japanese clients, VNEXT HOLDINGS has conquered this fastidious market with quality products comparable to those of local companies. Along with providing our core services, we are now expanding to modern technology areas such as Artificial Intelligence and Blockchain development, to meet the higher requirements of our clients. Our understanding of the needs and culture of the Japanese market in particular and Asia in general is a solid stepping stone for making a greater impression in other countries.</p>
                                <p>As a representative of Vietnamese IT companies, I believe that cooperation in the Information Technology sector is just the first step of Vietnam's collaboration with the world. It is my hope that the effort and commitment of the VNEXT HOLDINGS as a whole will contribute to the connection and development of Vietnamese society and international cooperation.</p>
                            </div>
                            </div>{/* section title end */}
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="position-relative">
                            {/* ttm_single_image-wrapper */}
                            <div className="ttm_single_image-wrapper text-sm-center mr-35 res-991-m-0">
                            <img className="img-fluid" src="./images/temp/greetings_2.png" title="single-img-nine" alt="single-img-nine" />
                            </div>{/* ttm_single_image-wrapper end */}
                        </div>
                        </div>
                        </div>
                    </div>
                    </section>
                {/* CEO */}

              <div className="container-xl mb-5">
              <div className="section-title text-center with-desc clearfix">
                      <div className="title-header">
                        <h2 className="title">CEO Profile</h2>
                      </div>
                    </div>
                <div className="row no-gutters align-items-center">{/* row */}
                  <div className="col-lg-6 res-991-text-center res-991-mb-40">
                    {/* ttm_single_image-wrapper */}
                    <div className="ttm_single_image-wrapper">
                      <img className="img-fluid" src="./images/temp/CEO.png" title="single-img-two" alt="CEO" />
                    </div>{/* ttm_single_image-wrapper end */}
                  </div>
                  <div className="col-lg-6">
                    <div className="spacing-4 ttm-bgcolor-grey">
                      {/* section title */}
                      <div className="section-title with-desc clearfix">
                        <div className="title-header">
                          <h5>LUONG XUAN HAI</h5>
                        </div>
                        <div className="title-desc">
                        <p>2009: Work as Java Engineer</p>
                        <p>2011: Founded WeTask Platform with friend from Harvard Business School (Boston, M.A, U.S)</p>
                        <p>2014: Founded VnValley – An Apple Watch Application Development Company with engineers from Google and DropBox</p>
                        <p>2015: Founded Sphinx JSC - JavaScript Company (Sold in 2017)</p>
                        <p>2018: Founded The First One (thefirstone.jp) an BPO and Testing Company</p>
                        <p>2018: Founded React-Plus.com, React and React Native company</p>
                        </div>
                      </div>{/* section title end */}

                      {/* separator */}
                      <div className="separator">
                        <div className="sep-line mt-4 mb-4" />
                      </div>
                      {/* separator */}
                      <div className="row align-items-center">
                        <div className="col-md-3 col-lg-4 col-5">
                          <div className="text-left pt-15">
                            <img className="img-fluid" src="./images/temp/CEO-signature.png" alt="CEO-signature" />
                          </div>
                        </div>
                        <div className="col-md-9 col-lg-8 col-7">
                          {/*  featured-icon-box */} 
                          <div className="featured-icon-box without-icon text-left pt-15">
                            <div className="featured-content">{/*  featured-content */}
                              <div className="featured-title">{/*  featured-title */}
                                <h5>LUONG XUAN HAI</h5>
                              </div>
                              <div className="featured-desc">{/*  featured-desc */}
                                <p>Chairman &amp; Founder React+</p>
                              </div>
                            </div>
                          </div>{/*  featured-icon-box END */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* row end */}
                {/* row */}
                <div className="row">
                </div>{/* row end*/}
              </div>

            {/* CEO */}
            </div>
            )
    }
}


export default Greetings;