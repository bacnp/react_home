import React, { Component } from 'react';
import { MDBProgress } from 'mdbreact';
import Slider from 'react-slick';
import CountUp from 'react-countup';
import Header from '../layout/Header';
import { HashLink as Link } from 'react-router-hash-link';

export class Lab_Develop extends Component {
    render() {
        var slick_slider = {
          dots: false,
          arrow: false,
          autoplay: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,

          responsive: [{

            breakpoint: 1199,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3
            }
        },
        {
      
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3
            }
        },
        {
      
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
        };
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
                            <h1 className="title">Lab Type Offshore Development</h1>
                            </div>{/* /.page-title-captions */}
                            <div className="breadcrumb-wrapper">
                            <span>
                            <Link title="Homepage" to="/" ><i className="ti ti-home" />&nbsp;&nbsp;Home</Link>
                            </span>
                            <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                            <span>Services : : Lab Type Offshore Development</span>
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
                        <h2 className="title">What Is Lab Type Offshore Development?</h2>
                      </div>
                    </div>{/* section title end */}
                    

                    <img className="img-fluid" src="./images/temp/EN3.png" />
                    <div className="col-md-8 offset-md-2 px-md-0 ">
                    <h5>For system and application development that requires a lot of cost, lab-type development is a development method that can flexibly respond to specifications while securing excellent human resources. In React Plus HOLDINGS' labo based development, development teams are created with both Japanese and Vietnamese members. No worries about offshore development or concerns about communication!</h5>
                    </div>
                    </div>
                    </div>

                </section>
                {/* Companysection end*/}
            {/* process-section */}
            <section className="ttm-row.zero-padding-section process-section clearfix">
              <div className="container-xl">
                <div className="row">
                  <div className="col-md-12">
                    {/* section title */}
                    <div className="section-title text-center with-desc clearfix">
                      <div className="title-header">

                        <h2 className="title"><span>Benefits</span></h2>
                      </div>
                    </div>{/* section title end */}
                  </div>
                </div>
                {/* row */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="ttm-processbox-wrapper">
                      <div className="ttm-processbox text-center">
                        <div className="ttm-box-image">
                          <img className="img-fluid" alt="step-one" title="step-one" src="./images/temp/step-one.jpg" />
                          <div className="process-num">
                            <span className="number">01</span>
                          </div>
                        </div>
                        <div className="featured-content">
                          <div className="featured-title"><h5>Full Cycle</h5></div>
                          <div className="ttm-box-description">Offering a full cycle of system/ application development with effective process</div>
                        </div>
                      </div>
                      <div className="ttm-processbox text-center">
                        <div className="ttm-box-image">
                          <img className="img-fluid" alt="step-two" title="step-two" src="./images/temp/step-two.jpg" />
                          <div className="process-num">
                            <span className="number">02</span>
                          </div>
                        </div>
                        <div className="featured-content">
                          <div className="featured-title"><h5>Increse Precision</h5></div>
                          <div className="ttm-box-description">Quick, specific domain and technology expertise acquisition</div>
                        </div>
                      </div>
                      <div className="ttm-processbox text-center">
                        <div className="ttm-box-image">
                          <img className="img-fluid" alt="step-three" title="step-three" src="./images/temp/step-three.jpg" />
                          <div className="process-num">
                            <span className="number">03</span>
                          </div>
                        </div>
                        <div className="featured-content">
                          <div className="featured-title"><h5>Reduced Cost</h5></div>
                          <div className="ttm-box-description">30% reduction in development costs</div>
                        </div>
                      </div>
                      <div className="ttm-processbox text-center res-991-mb-0">
                        <div className="ttm-box-image">
                          <img className="img-fluid" alt="step-four" title="step-four" src="./images/temp/step-four.jpg" />
                          <div className="process-num">
                            <span className="number">04</span>
                          </div>
                        </div>
                        <div className="featured-content">
                          <div className="featured-title"><h5>Elasticity</h5></div>
                          <div className="ttm-box-description">Quickly scale up and down, with no need to get into a long, burdensome hiring process</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{/* row end */}
              </div>
            </section>
            <section className="ttm-row aboutus-section clearfix">
                    <div className="container-xl">

                  <div className="col-md-12">
                    {/* section title */}
                    <div className="section-title text-center with-desc clearfix">
                      <div className="title-header">
                        <h2 className="title">Why Choose Us</h2>
                        
                      </div>
                    </div>{/* section title end */}
   
                    </div>
                    </div>
                    {/* aboutus-section */}

                    <div className="container-xl">
                    <div className="row">{/* row */}
                        <div className="col-lg-6">
                        <div className="position-relative">
                            {/* ttm_single_image-wrapper */}
                            <div className="ttm_single_image-wrapper text-sm-center mr-35 res-991-m-0">
                            <img className="img-fluid" src="./images/temp/lab_1.jpg" title="single-img-nine" alt="single-img-nine" />
                            </div>{/* ttm_single_image-wrapper end */}
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="res-991-mt-30">
                            {/* section title */}
                            <div className="section-title with-desc clearfix">
                            <div className="title-header">
                                {/* <h5>Lorem ipsum</h5> */}
                                <h2 className="title">React Plus HOLDINGS has been providing Lab-type Offshore Development for over 12 years.</h2>
                            </div>
                            <div className="title-desc">
                                <p>We have long-standing relationships with Japanese companies, as well as cooperative partnerships lasting as long as 10 years.</p>
                            </div>
                            </div>{/* section title end */}
                        </div>
                        </div>
                        </div>
                    </div>
                    </section>
                                    <section className="ttm-row.zero-padding-section clearfix">
 
                                {/* aboutus-section */}

                    <div className="container-xl">
                    <div className="row">{/* row */}

                        <div className="col-lg-6">
                        <div className="res-991-mt-30">
                            {/* section title */}
                            <div className="section-title with-desc clearfix">
                            <div className="title-header">
                                {/* <h5>Lorem ipsum</h5> */}
                                <h2 className="title">Flexible changes to number of personnel based on customers' need</h2>
                            </div>
                            <div className="title-desc">
                                <p>We can flexibly change the number of lab personnel according to changes in specifications. Labs consist of 3 people as per standards, but the team size can be adjusted as required.</p>
                            </div>
                            </div>{/* section title end */}
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="position-relative">
                            {/* ttm_single_image-wrapper */}
                            <div className="ttm_single_image-wrapper text-sm-center mr-35 res-991-m-0">
                            <img className="img-fluid" src="./images/temp/lab_2.jpg" title="single-img-nine" alt="single-img-nine" />
                            </div>{/* ttm_single_image-wrapper end */}
                        </div>
                        </div>
                        </div>
                    </div>
                    </section>
                                    <section className="ttm-row clearfix">
 
                                {/* aboutus-section */}

                    <div className="container-xl">
                    <div className="row">{/* row */}
                        <div className="col-lg-6">
                        <div className="position-relative">
                            {/* ttm_single_image-wrapper */}
                            <div className="ttm_single_image-wrapper text-sm-center mr-35 res-991-m-0">
                            <img className="img-fluid" src="./images/temp/lab_3.jpg" title="single-img-nine" alt="single-img-nine" />
                            </div>{/* ttm_single_image-wrapper end */}
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="res-991-mt-30">
                            {/* section title */}
                            <div className="section-title with-desc clearfix">
                            <div className="title-header">
                                {/* <h5>Lorem ipsum</h5> */}
                                <h2 className="title">Vietnamese Developers x Japanese Quality Control</h2>
                            </div>
                            <div className="title-desc">
                                <p>The Japanese QA team takes responsibility for ensuring the system developed by Vietnamese engineers meetthe same quality as Japanese companies' standard through test planning, test execution, quality assurance and issue tracking.</p>
                            </div>
                            </div>{/* section title end */}
                        </div>
                        </div>

                        </div>
                    </div>
                    </section>
                    <section className="ttm-row.zero-padding-section aboutus-section clearfix">
                    <div className="container-xl">

                  <div className="col-md-12">
                    {/* section title */}
                    <div className="section-title text-center with-desc clearfix">
                      <div className="title-header">
                        <h2 className="title">Our works</h2>
                        
                      </div>
                    </div>{/* section title end */}
                    <div className="content-inner active">
                              {/* row */}
                              <div className="row multi-columns-row ttm-boxes-spacing-10px ttm-bgcolor-white">
                                <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                                  {/* featured-imagebox */}
                                  <div className="featured-imagebox featured-imagebox-portfolio style2">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                      <img className="img-thumbnail-2" src="./images/temp/ec_site.jpg" alt="ec_site" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                      <div className="category">
                                        <p>Sales</p>
                                      </div>
                                      <div className="featured-title">
                                        <h5><Link to='/projects_web#project-1'>E-commerce Site</Link></h5>
                                      </div>
                                    </div>
                                  </div>{/* featured-imagebox */}
                                </div>
                                <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                                  {/* featured-imagebox */}
                                  <div className="featured-imagebox featured-imagebox-portfolio style2">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                      <img className="img-thumbnail-2" src="./images/temp/drag_and_drop_app_builder.jpg" alt="app builder" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                      <div className="category">
                                        <p>IT</p>
                                      </div>
                                      <div className="featured-title">
                                        <h5><Link to='/projects_web#project-2'>Drag and Drop Mobile Application Builder System</Link></h5>
                                      </div>
                                    </div>
                                  </div>{/* featured-imagebox */}
                                </div>
                                <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                                  {/* featured-imagebox */}
                                  <div className="featured-imagebox featured-imagebox-portfolio style2">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                      <img className="img-thumbnail-2" src="./images/temp/game_voice.jpg" alt="in_game_voice_chat" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                      <div className="category">
                                        <p>Media</p>
                                      </div>
                                      <div className="featured-title">
                                        <h5><Link to='/projects_app#project-4'>In-game Voice Chat Application</Link></h5>
                                      </div>
                                    </div>
                                  </div>{/* featured-imagebox */}
                                </div>
                                <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                                  {/* featured-imagebox */}
                                  <div className="featured-imagebox featured-imagebox-portfolio style2">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                      <img className="img-thumbnail-2" src="./images/temp/teacher_dispatch_management.jfif" alt="teacher_dispatch_management" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                      <div className="category">
                                        <p>Education</p>
                                      </div>
                                      <div className="featured-title">
                                        <h5><Link to='/projects_web#project-4'>English Teacher Dispatching Management System</Link></h5>
                                      </div>
                                    </div>
                                  </div>{/* featured-imagebox */}
                                </div>
                                <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                                  {/* featured-imagebox */}
                                  <div className="featured-imagebox featured-imagebox-portfolio style2">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                      <img className="img-thumbnail-2" src="./images/temp/english_learning.jpg" alt="english_learning_app" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                      <div className="category">
                                        <p>Education</p>
                                      </div>
                                      <div className="featured-title">
                                        <h5><Link to='/projects_app#project-2'>English Study App for Japanese</Link></h5>
                                      </div>
                                    </div>
                                  </div>{/* featured-imagebox */}
                                </div>
                                <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                                  {/* featured-imagebox */}
                                  <div className="featured-imagebox featured-imagebox-portfolio style2">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                      <img className="img-thumbnail-2" src="./images/temp/swim_record.jpg" alt="swim_record" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                      <div className="category">
                                        <p>Sports</p>
                                      </div>
                                      <div className="featured-title">
                                        <h5><Link to='/projects_web#project-6'>Swimming Record Storage System</Link></h5>
                                      </div>
                                    </div>
                                  </div>{/* featured-imagebox */}
                                </div> 
                              </div>{/* row end */}
                            </div>{/* content-inner */}{/* row end*/}
                    </div>
                    </div>
                    </section>               
 
            </div>
            )
    }
}


export default Lab_Develop;