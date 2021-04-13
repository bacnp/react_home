import React, { Component } from 'react';
// import { MDBProgress } from 'mdbreact';
// import Slider from 'react-slick';
// import CountUp from 'react-countup';
import Header from '../layout/Header';
import {Link} from 'react-router-dom';

export class Visions extends Component {
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
                            <h1 className="title">Vision</h1>
                            </div>{/* /.page-title-captions */}
                            <div className="breadcrumb-wrapper">
                            <span>
                                <Link title="Homepage" to="/" ><i className="ti ti-home" />&nbsp;&nbsp;Home</Link>
                            </span>
                            <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                            <span>About Us : : Vision</span>
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
                        <h2 className="title">Vision</h2>
                      </div>
                    </div>{/* section title end */}

                    <div className="col-md-8 offset-md-2 px-md-0 ">
                    <h5>React Plus HOLDINGS aims to become a top high-tech company. We are also determined to create a cheerful working environment, contribute to social development, and build a prosperous society.</h5>
                    </div>
                    </div>
                    </div>

                </section>
                {/* Companysection end*/}
                <section className="ttm-row aboutus-section clearfix">
                    <div className="container-xl">

                  <div className="col-md-12">
                    {/* section title */}
                    <div className="section-title text-center with-desc clearfix">
                      <div className="title-header">
                        <h2 className="title">Misssion</h2>
                        
                      </div>
                    </div>{/* section title end */}
                    <div className="box-shadow content-tab">

                            <div className="content-inner active ml-5 mt-2 mb-2">
                                <p>1.To build a human-centered work environment and create opportunities for sustainable career development and satisfaction for all members.</p>
                                <p>2.To deliver trust and satisfaction to our customers, fulfill our long-term commitments, and become a trusted partner.</p>
                                <p>3.To join hands in building a prosperous society by applying advanced technology to improve production capacity and standards of living.</p>
                    </div>
                    </div>
                    </div>
                    </div>
                </section>
                <section className="ttm-row aboutus-section clearfix">
                    <div className="container-xl">

                  <div className="col-md-12">
                    {/* section title */}
                    <div className="section-title text-center with-desc clearfix">
                      <div className="title-header">
                        <h2 className="title">Core Values</h2>
                      </div>
                    </div>{/* section title end */}

                    {/* row */}
                    <div className="row mt-70 res-991-mt-30">
                        <div className="col-lg-4 res-991-mb-20">
                        {/*  featured-icon-box */} 
                        <div className="featured-icon-box left-icon style7 icon-align-top">
                            <div className="featured-icon">{/*  featured-icon */} 
                            <div className="ttm-icon ttm-textcolor-skincolor ttm-icon_element-size-md">
                                <i className="flaticon flaticon-system" />{/*  ttm-icon */} 
                            </div>
                            </div>
                            <div className="featured-content">{/*  featured-content */}
                            <div className="featured-title">{/*  featured-title */}
                                <h5>Transparency</h5>
                            </div>
                            <div className="featured-desc">{/*  featured-desc */}
                                <p>Transparency refers to complete, accurate and prompt information sharing from vision, strategy to achieved outcomes in a multidimensional manner.</p>
                            </div>
                            </div>
                        </div>{/*  featured-icon-box END */}
                        </div>
                        <div className="col-lg-4 res-991-mb-20">
                        {/*  featured-icon-box */} 
                        <div className="featured-icon-box left-icon style7 icon-align-top">
                            <div className="featured-icon">{/*  featured-icon */} 
                            <div className="ttm-icon ttm-textcolor-skincolor ttm-icon_element-size-md">
                                <i className="flaticon flaticon-data" />{/*  ttm-icon */} 
                            </div>
                            </div>
                            <div className="featured-content">{/*  featured-content */}
                            <div className="featured-title">{/*  featured-title */}
                                <h5>Creativity</h5>
                            </div>
                            <div className="featured-desc">{/*  featured-desc */}
                                <p>Creativity is a constant eagerness to learn, develop oneself in order to create breakthrough value for individuals, customers and organizations.</p>
                            </div>
                            </div>
                        </div>{/*  featured-icon-box END */}
                        </div>
                        <div className="col-lg-4">
                        {/*  featured-icon-box */} 
                        <div className="featured-icon-box left-icon style7 icon-align-top">
                            <div className="featured-icon">{/*  featured-icon */} 
                            <div className="ttm-icon ttm-textcolor-skincolor ttm-icon_element-size-md">
                                <i className="flaticon flaticon-analytics" />{/*  ttm-icon */} 
                            </div>
                            </div>
                            <div className="featured-content">{/*  featured-content */}
                            <div className="featured-title">{/*  featured-title */}
                                <h5>Trust</h5>
                            </div>
                            <div className="featured-desc">{/*  featured-desc */}
                                <p>Trust refers to each individuals’ trust and support of each other to fulfill their own tasks and contribute to the overall mission of the organization.</p>
                            </div>
                            </div>
                        </div>{/*  featured-icon-box END */}
                        </div>
                    </div>{/* row end*/}
                                        {/* row */}
                                        <div className="row mt-70 res-991-mt-30">
                        <div className="col-lg-4 res-991-mb-20">
                        {/*  featured-icon-box */} 
                        <div className="featured-icon-box left-icon style7 icon-align-top">
                            <div className="featured-icon">{/*  featured-icon */} 
                            <div className="ttm-icon ttm-textcolor-skincolor ttm-icon_element-size-md">
                                <i className="flaticon flaticon-chart" />{/*  ttm-icon */} 
                            </div>
                            </div>
                            <div className="featured-content">{/*  featured-content */}
                            <div className="featured-title">{/*  featured-title */}
                                <h5>Kindness</h5>
                            </div>
                            <div className="featured-desc">{/*  featured-desc */}
                                <p>Kindness means to respect freedom and uniqueness of each individual, to listen with care, speak with sincerity and act with integrity and to express gratitude.</p>
                            </div>
                            </div>
                        </div>{/*  featured-icon-box END */}
                        </div>
                        <div className="col-lg-4 res-991-mb-20">
                        {/*  featured-icon-box */} 
                        <div className="featured-icon-box left-icon style7 icon-align-top">
                            <div className="featured-icon">{/*  featured-icon */} 
                            <div className="ttm-icon ttm-textcolor-skincolor ttm-icon_element-size-md">
                                <i className="flaticon flaticon-content" />{/*  ttm-icon */} 
                            </div>
                            </div>
                            <div className="featured-content">{/*  featured-content */}
                            <div className="featured-title">{/*  featured-title */}
                                <h5>Solidarity</h5>
                            </div>
                            <div className="featured-desc">{/*  featured-desc */}
                                <p>Solidarity means working jointly towards a common goal, pushing each other forward, sharing difficulties and celebrating achievements together.</p>
                            </div>
                            </div>
                        </div>{/*  featured-icon-box END */}
                        </div>
                        <div className="col-lg-4">
                        {/*  featured-icon-box */} 
                        <div className="featured-icon-box left-icon style7 icon-align-top">
                            <div className="featured-icon">{/*  featured-icon */} 
                            <div className="ttm-icon ttm-textcolor-skincolor ttm-icon_element-size-md">
                                <i className="flaticon flaticon-mobile-app" />{/*  ttm-icon */} 
                            </div>
                            </div>
                            <div className="featured-content">{/*  featured-content */}
                            <div className="featured-title">{/*  featured-title */}
                                <h5>Commitment</h5>
                            </div>
                            <div className="featured-desc">{/*  featured-desc */}
                                <p> As a company, we are committed to give our employees a fair policy and working environment and to committed to deliver trust and satisfaction to our customers.</p>
                            </div>
                            </div>
                        </div>{/*  featured-icon-box END */}
                        </div>
                    </div>{/* row end*/}
                    </div>
                    </div>

                </section>
 
            </div>
            )
    }
}


export default Visions;