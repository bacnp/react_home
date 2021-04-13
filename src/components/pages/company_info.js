import React, { Component } from 'react';
// import { MDBProgress } from 'mdbreact';
// import Slider from 'react-slick';
// import CountUp from 'react-countup';
import Header from '../layout/Header';
import {Link} from 'react-router-dom';

export class Company_Info extends Component {
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
                            <h1 className="title">Company Info</h1>
                            </div>{/* /.page-title-captions */}
                            <div className="breadcrumb-wrapper">
                            <span>
                                <Link title="Homepage" to="/" ><i className="ti ti-home" />&nbsp;&nbsp;Home</Link>
                            </span>
                            <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                            <span>About Us : : Company Info</span>
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
                    <div className="row">
                  <div className="col-md-12">
                    {/* section title */}
                    <div className="section-title text-center with-desc clearfix">
                      <div className="title-header">

                        <h2 className="title">Company Info</h2>
                      </div>
                    </div>{/* section title end */}
                  </div>
                  <div className="row ml-2 mr-2">
                  <div className="title-desc">
                            <p>(Reference) React Plus has been providing outsourcing software development as our main service to Japan and many other Asian countries for more than 12 years. Together with passionate and talented employees, we are developing high quality products for our clients as well as for the society as a whole. In 2017, we had gradually established our brand in the Japanese market. Currently, we have expanded our business, establishing group companies and affiliated companies in Hanoi, Da Nang (React+ SOFTWARE JSC) and Tokyo (React+ Co., Ltd. ) with their own business specializations and advanced technologies.</p>
                </div>

                  </div>

                  <div className="section-title clearfix mt-5">
                    <h4 className="title">React+</h4>
                    </div>

                  <table class="table text-center strong ml-1 mr-1 " >
                    <tbody>
                    <tr>
                        <td class="text-right font-weight-600" >Business name</td>
                        <td class="text-left" >React Plus, JSC</td>
                    </tr>
                    <tr>
                        <td class="text-right font-weight-600" >Representative</td>
                        <td class="text-left" >Luong Xuan Hai</td>
                    </tr>
                    <tr>
                        <td class="text-right font-weight-600" >Capital</td>
                        <td class="text-left" >React Plus, JSC</td>
                    </tr>
                    <tr>
                        <td class="text-right font-weight-600" >Business name</td>
                        <td class="text-left" >20 million yen</td>
                    </tr>
                    <tr>
                        <td class="text-right font-weight-600" >Number of employees</td>
                        <td class="text-left" >56</td>
                    </tr>
                    <tr>
                        <td class="text-right font-weight-600" >Date of establishment</td>
                        <td class="text-left" >2018</td>
                    </tr>
                    <tr>
                        <td class="text-right font-weight-600" >Business content</td>
                        <td class="text-left" >React, React Native outsourcing</td>
                    </tr>
                    <tr>
                        <td class="text-right font-weight-600" >Location</td>
                        <td class="text-left" >7th Floor, Golden Field Building, 24 Nguyen Co Thach Street, Nam Tu Liem District, Hanoi</td>
                    </tr>
                    </tbody>
                </table>
                </div>
                    </div>

                </section>
                {/* Companysection end*/}

            </div>
            )
    }
}


export default Company_Info;