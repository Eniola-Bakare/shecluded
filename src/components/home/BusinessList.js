import React, { useState , useEffect} from "react";
import homepageHeaderImage from "../../assets/yellowPage.png";
import InViewMonitor from "react-inview-monitor";
import Footer from "../shared/footer";
import NavBar from "../shared/navbar";
import { Link } from "react-router-dom";
import {BusinessData} from '../../consts'
import Pagination from "react-js-pagination";
import axios from 'axios';
import { BusinessList, timeOut } from '../../api/rootUrls';




const BusinessListing = () => {
    const [paginate, setPaginate] = useState({
        currentPage: 1,
        itemsCountPerPage: 4
      });

    const [yellowPageData, setYellowPageData] = useState([]);

      const handlePageChang = pageNumber => {
        setPaginate({ ...paginate, currentPage: pageNumber });
      };

      const lastItemIndex = paginate.currentPage * paginate.itemsCountPerPage;
      const firstItemIndex = lastItemIndex - paginate.itemsCountPerPage;
      const currentBlog = yellowPageData.slice(firstItemIndex, lastItemIndex);
      
    //   useEffect(() => {
    //     axios({
    //         url: `https://api.shecluded.com/api/v1/adminfrontend/yellowpage/delete/${16735}`,
    //         method: 'post',
    //         headers: {
    //                   'Content-Type': 'application/json',
    //               },
    //         timeout: timeOut
    //       }).then(result => {
    //         //   setYellowPageData([ ...result.data.respBody])
    //         console.log(result)
    //       })
    //   }, [])
    // {id: 16735, version: 0, delFlag: "N", createdAt: "2020-09-10T20:45:06.000+0000", updatedAt: "2020-09-10T20:45:06.000+0000", …}
    // 2: {id: 16734, version: 0, delFlag: "N", createdAt: "2020-09-10T20:42:33.000+0000", updatedAt: "2020-09-10T20:42:33.000+0000", …}
    // 3: {id: 16733, version: 0, delFlag: "N", createdAt: "2020-09-10T20:39:06.000+0000", updatedAt: "2020-09-10T20:39:06.000+0000", …}
    // 4: {id: 16732, version: 0, delFlag: "N", createdAt: "2020-09-10T20:35:04.000+0000", updatedAt: "2020-09-10T20:35:04.000+0000", …}
    // 5: {id: 16728, 

      useEffect(() => {
        axios({
            url: `${BusinessList}`,
            method: 'get',
            headers: {
                      'Content-Type': 'application/json',
                  },
            timeout: timeOut
          }).then(result => {
            //   setYellowPageData([ ...result.data.respBody])
              setYellowPageData([ ...result.data.respBody.slice(0,-6)])
          })
      }, [])
      console.log(yellowPageData)

//       address: "lekki lagos"
// businessName: "bridgetechinstitutes"
// createdAt: "2020-09-10T20:42:33.000+0000"
// delFlag: "Y"
// email: "ugwumadu116@gmail.com"
// facebook: "www.facebook.com/username"
// fullName: "Joel Ugwumadu"
// id: 16734
// image: "https://res.cloudinary.com/shecludedng/image/upload/v1599770552/b8dvqckrhruav34wan1y.jpg"
// instagram: "www.instagram.com/username"
// location: "lagos"
// phonenumber: "07064586146"
// registeredCompany: "bridgetechinstitutes"
// updatedAt: "2020-09-10T20:57:11.000+0000"
// version: 1
// website: "https://joel-ugwumadu.netlify.com/erererrere"

    return (
        <div>
            <NavBar />

				<div className="container-fluid main-container">
					<InViewMonitor
						classNameNotInView="vis-hidden"
						classNameInView="animated fadeInUp"
					>
						<div className="containerXXX">

							<div className="row main-header homepage-header">
								<div className="col-12 col-xl-4 col-lg-6 col-md-6 col-sm-12 header-text">
									<h1 className="title text-align-left">
                                    Connect with local businesses pretty much for anything in Nigeria 
                </h1>
									<p className="font-md pt-3  mb-5 shecluded-text-details">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget et fermentum id porttitor sed aliquet quam et. Est a, quam sed ullamcorper sed ut laoreet convallis laoreet. Nunc risus vel arcu gravida cras pulvinar luctus.
                </p>
									<p className="pt-2 mt-2">
										<Link to={"/add-business"} className="btn btn-shecluded btn-lg">
											List your business
                                        </Link>
									</p>
								</div>
								<div
									className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-none d-lg-block d-md-block"
									style={{ overflow: "hidden" }}
								>
									<div className="image-holder">
										<img
											className="img-fluid kkp"
											src={homepageHeaderImage}
											alt="woman teaching woman"
										/>
									</div>


								</div>
							</div>
						</div>

					</InViewMonitor>

				</div>

                <div className="business-search-form">
                    <form>

                    <div className="input-group col-md-4">
                        
                        <input className="form-control py-2 border border-left-0XX" type="search" placeholder="Search for a business" />
                    </div>

                    <div className="input-group col-md-4">
                      
                        <input className="form-control py-2 border border-left-0XX" type="search" placeholder="Enter loaction" />
                    </div>

                   
                    <button className="btn btn-shecluded btn-lgXX">Search</button>
                    </form>

                </div>

                <div className="container mt-4">
                    <h1>Business Listings</h1>
                    <p> Over 200+ businesses listed with Shecluded</p>

                    <div className="d-flex justify-content-between">
                        <div className="business-sector-filter">
                            <h4 className="m-0">Categories</h4>
                            <hr/>
                            <div className="d-flex align-items-center">
                                <div className="form-group col-12 text-body">
                                    <input type="checkbox"   name="agree" required className="form-check-input"/>
                                    <label className="form-check-label" style={{paddingLeft: "10px"}}>
                                        Shoes
                                    </label>
                                    
                                </div>
                                <div className="ronder-biz">
                                    3
                                </div>

                            </div>
                            <div className="d-flex align-items-center">
                                <div className="form-group col-12 text-body">
                                    <input type="checkbox"   name="agree" required className="form-check-input"/>
                                    <label className="form-check-label" style={{paddingLeft: "10px"}}>
                                        House
                                    </label>
                                    
                                </div>
                                <div className="ronder-biz">
                                    3
                                </div>

                            </div>
                            <div className="d-flex align-items-center">
                                <div className="form-group col-12 text-body">
                                    <input type="checkbox"   name="agree" required className="form-check-input"/>
                                    <label className="form-check-label" style={{paddingLeft: "10px"}}>
                                        Funiture
                                    </label>
                                    
                                </div>
                                <div className="ronder-biz">
                                    3
                                </div>

                            </div>
                            <div className="d-flex align-items-center">
                                <div className="form-group col-12 text-body">
                                    <input type="checkbox"   name="agree" required className="form-check-input"/>
                                    <label className="form-check-label" style={{paddingLeft: "10px"}}>
                                        Medicals
                                    </label>
                                    
                                </div>
                                <div className="ronder-biz">
                                    3
                                </div>

                            </div>
                            
                            
                        </div>

                        <div className="d-flex justify-content-center align-items-center flex-wrap">
                            {
                                currentBlog.map((item, i) => (
                                    <div key={i} className="business-card">
                                        <div className="buss-img-wrapper">
                                            <img src={item.image} alt="business details"/>
                                        </div>
                                        <div className="bus-text-wrapper">
                                        <h4 >{item.businessName}</h4>
                                        <p className="m-0" >{item.address.length > 120? item.address.slice(0, 120): item.address} </p>
                                        <div className="d-flex">
                                            <div className="mr-2">Owned by</div> <p className="m-0">{item.fullName} </p>
                                        </div>
                                        <div className="d-flex">
                                            <div className="mr-2">Mobile Number</div> <p className="m-0">{item.phonenumber} </p>
                                        </div>
                                        <div className="d-flex">
                                            <div className="mr-2">What we do</div> <p>
                                            {item.registeredCompany.length > 90? item.registeredCompany.slice(0, 90): item.registeredCompany} 
                                             </p>
                                        </div>
                                        <div className="d-flex">

                                            <div className="mx-2">
                                                <a href={item.website} target="_blank" rel="noopener noreferrer">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0)">
                                                <path d="M12.429 23.9848C14.2642 23.724 15.8731 21.8085 16.8856 18.9797C15.422 18.6519 13.9285 18.476 12.429 18.4551V23.9848Z" fill="black"/>
                                                <path d="M15.3611 23.5368C15.4696 23.5054 15.5776 23.4737 15.6849 23.439C15.7753 23.4099 15.8646 23.3784 15.9538 23.3472C16.0593 23.3108 16.1645 23.2733 16.2692 23.2335C16.3584 23.1996 16.4468 23.1636 16.5354 23.1275C16.6376 23.0846 16.7396 23.0419 16.8405 22.9989C16.9287 22.9602 17.0163 22.9196 17.1038 22.8787C17.2029 22.832 17.3015 22.7845 17.3993 22.7351C17.4852 22.6913 17.5708 22.6467 17.6567 22.6008C17.7528 22.5493 17.8483 22.4967 17.9432 22.4427C18.0291 22.3941 18.1118 22.3453 18.1954 22.295C18.2884 22.2379 18.3809 22.1807 18.4729 22.1235C18.5552 22.0711 18.6373 22.0179 18.7183 21.9631C18.8088 21.9021 18.898 21.8387 18.9868 21.7752C19.0666 21.718 19.146 21.6611 19.2239 21.6037C19.3098 21.5375 19.3977 21.469 19.4838 21.4003C19.5603 21.3394 19.6365 21.2788 19.7117 21.2162C19.7974 21.145 19.8794 21.0713 19.9626 20.9976C20.0355 20.9329 20.1088 20.8688 20.18 20.8024C20.2619 20.7259 20.3417 20.6468 20.4215 20.5682C20.4906 20.5 20.5605 20.4327 20.6282 20.3628C20.6407 20.3498 20.6527 20.3358 20.6657 20.3224C19.7301 19.8392 18.7447 19.4599 17.7267 19.1914C17.1972 20.8799 16.255 22.41 14.9854 23.6427C15.0201 23.6337 15.0549 23.6264 15.0897 23.6174C15.1814 23.5916 15.2714 23.5634 15.3611 23.5368Z" fill="black"/>
                                                <path d="M24.0002 12.4395H18.8572C18.8378 14.4475 18.5464 16.4436 17.9912 18.3736C19.1234 18.676 20.2161 19.1108 21.2465 19.6689C22.9383 17.6299 23.9067 15.0875 24.0002 12.4395Z" fill="black"/>
                                                <path d="M12.429 11.5805H17.9993C17.9776 9.64339 17.6934 7.71826 17.1549 5.85742C15.6038 6.21116 14.0196 6.40007 12.429 6.42101V11.5805Z" fill="black"/>
                                                <path d="M12.429 0.0351562V5.56488C13.9285 5.54373 15.422 5.36801 16.8856 5.04024C15.8731 2.2114 14.2642 0.295903 12.429 0.0351562Z" fill="black"/>
                                                <path d="M12.429 17.5989C14.0196 17.62 15.6038 17.809 17.1549 18.1627C17.6934 16.3019 17.9776 14.3765 17.9993 12.4395H12.429V17.5989Z" fill="black"/>
                                                <path d="M21.2465 4.35156C20.2161 4.90971 19.1234 5.3445 17.9912 5.64692C18.5464 7.57687 18.8378 9.573 18.8572 11.5811H24.0002C23.9065 8.93317 22.9381 6.39084 21.2465 4.35156Z" fill="black"/>
                                                <path d="M20.6668 3.7002C20.6543 3.68743 20.6423 3.6736 20.63 3.66041C20.5621 3.59046 20.4917 3.52302 20.4226 3.45495C20.343 3.37641 20.2637 3.29704 20.1816 3.2208C20.1106 3.15462 20.0371 3.092 19.9642 3.02603C19.881 2.95231 19.7979 2.87796 19.7124 2.80675C19.6383 2.74413 19.5623 2.68423 19.4869 2.62412C19.401 2.55459 19.313 2.48548 19.2247 2.41909C19.1472 2.36065 19.0686 2.3041 18.9897 2.24756C18.9 2.18305 18.81 2.11875 18.7187 2.05739C18.6384 2.00336 18.557 1.95058 18.4755 1.89885C18.3827 1.83916 18.2902 1.78073 18.1957 1.72418C18.113 1.67454 18.0294 1.62553 17.9456 1.57799C17.8497 1.52312 17.7536 1.46992 17.6566 1.41798C17.5707 1.37505 17.4851 1.32835 17.3992 1.28541C17.3006 1.23557 17.2011 1.1876 17.0991 1.14048C17.0132 1.09964 16.9261 1.05985 16.8377 1.0211C16.7361 0.976075 16.6335 0.935444 16.5311 0.89251C16.4427 0.856487 16.3548 0.820883 16.2655 0.786955C16.1614 0.747162 16.0559 0.709882 15.9503 0.673441C15.8611 0.642025 15.7719 0.610819 15.6814 0.581498C15.5742 0.546732 15.467 0.515107 15.3568 0.483273C15.2676 0.457094 15.1779 0.430496 15.0877 0.40662C15.0531 0.397195 15.0179 0.389865 14.9832 0.380859C16.2528 1.6136 17.1948 3.14352 17.7245 4.8322C18.7436 4.5637 19.7304 4.18421 20.6668 3.7002Z" fill="black"/>
                                                <path d="M0 11.5811H5.1429C5.16237 9.573 5.4537 7.57687 6.0087 5.64692C4.8767 5.34471 3.78408 4.90992 2.75366 4.35156C1.06184 6.39063 0.0934082 8.93317 0 11.5811Z" fill="black"/>
                                                <path d="M11.5711 23.9848V18.4551C10.0715 18.4762 8.57804 18.6519 7.1145 18.9797C8.1267 21.8085 9.7358 23.724 11.5711 23.9848Z" fill="black"/>
                                                <path d="M11.5711 12.4395H6.00073C6.02251 14.3765 6.30651 16.3019 6.84518 18.1627C8.39626 17.8087 9.98022 17.6198 11.5711 17.5989V12.4395Z" fill="black"/>
                                                <path d="M11.5711 0.0351562C9.7358 0.295903 8.1267 2.2114 7.1145 5.04024C8.57804 5.36822 10.0715 5.54394 11.5711 5.56488V0.0351562Z" fill="black"/>
                                                <path d="M11.5711 6.42101C9.98043 6.40007 8.39626 6.21116 6.84518 5.85742C6.30651 7.71826 6.02251 9.64339 6.00073 11.5805H11.5711V6.42101Z" fill="black"/>
                                                <path d="M9.01353 0.380859C8.97877 0.389865 8.944 0.397195 8.90923 0.406201C8.81834 0.430496 8.7287 0.457513 8.63822 0.483692C8.53057 0.515108 8.42376 0.546732 8.31569 0.58108C8.22459 0.61061 8.13495 0.642025 8.04531 0.673231C7.94038 0.710301 7.83525 0.747162 7.73137 0.786536C7.64173 0.820883 7.55335 0.856487 7.46454 0.892929C7.36255 0.935863 7.26034 0.978798 7.15961 1.02152C7.07122 1.06027 6.98389 1.1009 6.89635 1.14174C6.79728 1.18844 6.69864 1.23598 6.60083 1.28541C6.51496 1.32918 6.42909 1.374 6.34344 1.41966C6.2473 1.47118 6.15201 1.52396 6.05735 1.57799C5.97148 1.62595 5.88707 1.67517 5.80435 1.72543C5.71115 1.78156 5.619 1.83958 5.52726 1.89696C5.44475 1.94974 5.36286 2.00294 5.28181 2.05781C5.19133 2.11875 5.10211 2.18221 5.01331 2.24567C4.93351 2.30285 4.85414 2.35981 4.77602 2.41741C4.68827 2.48338 4.60449 2.55208 4.51611 2.62056C4.43987 2.68151 4.36301 2.74203 4.28845 2.80507C4.20258 2.87586 4.12111 2.94917 4.03839 3.02247C3.96508 3.08781 3.89115 3.15127 3.81953 3.21892C3.73806 3.29494 3.65868 3.3739 3.57909 3.45223C3.50998 3.52051 3.43961 3.58794 3.37175 3.65811C3.3594 3.67109 3.34746 3.68533 3.33447 3.69853C4.26981 4.1819 5.25542 4.56119 6.27348 4.82969C6.80294 3.14206 7.74456 1.61297 9.01353 0.380859Z" fill="black"/>
                                                <path d="M3.57707 20.5639C3.65686 20.6424 3.73624 20.7218 3.81813 20.7983C3.88934 20.8642 3.96264 20.9269 4.03573 20.9928C4.11888 21.0668 4.20202 21.1409 4.28747 21.2121C4.36161 21.2743 4.43722 21.3344 4.51303 21.3947C4.5989 21.4643 4.68456 21.5334 4.77546 21.6002C4.85274 21.6582 4.93128 21.7143 5.00981 21.7719C5.09945 21.8362 5.18993 21.9005 5.28124 21.9623C5.36146 22.0163 5.44293 22.0691 5.5244 22.1211C5.61718 22.1805 5.70975 22.239 5.8042 22.2955C5.88693 22.3454 5.97049 22.3942 6.05427 22.4419C6.15019 22.4968 6.24632 22.55 6.34329 22.6017C6.42895 22.6446 6.51482 22.6913 6.60069 22.7343C6.69933 22.7841 6.79881 22.8321 6.90081 22.8794C6.98668 22.9198 7.0738 22.9596 7.16218 22.9986C7.26376 23.0436 7.36617 23.0843 7.4688 23.1272C7.55718 23.1632 7.64514 23.1988 7.73436 23.2327C7.83845 23.2727 7.94401 23.31 8.04956 23.3465C8.13878 23.3777 8.228 23.4091 8.31848 23.4382C8.42571 23.473 8.53294 23.5048 8.6431 23.5364C8.73232 23.5626 8.82196 23.5892 8.91202 23.6133C8.94678 23.6227 8.98197 23.63 9.01673 23.639C7.74714 22.4061 6.8051 20.8762 6.27543 19.1875C5.25737 19.4562 4.27176 19.8355 3.33643 20.3191C3.34899 20.3319 3.36093 20.3457 3.3735 20.3589C3.43779 20.4284 3.50712 20.4958 3.57707 20.5639Z" fill="black"/>
                                                <path d="M2.75366 19.6689C3.78408 19.1108 4.8767 18.676 6.0087 18.3736C5.4537 16.4436 5.16237 14.4475 5.1429 12.4395H0C0.0936176 15.0873 1.06184 17.6297 2.75366 19.6689Z" fill="black"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0">
                                                <rect width="24" height="24" fill="white"/>
                                                </clipPath>
                                                </defs>
                                                </svg>


                                                </a>
                                          
                                            </div>
                                            

                                            <div className="mx-2">
                                                <a href={item.instagram} target="_blank" rel="noopener noreferrer">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0)">
                                                <path d="M23.5891 4.29272C23.3707 2.24597 21.7542 0.62915 19.7073 0.410889C14.5741 -0.136963 9.4259 -0.136963 4.29291 0.410889C2.24597 0.629333 0.629333 2.24597 0.410889 4.29272C-0.136963 9.42572 -0.136963 14.5741 0.410889 19.7071C0.629333 21.754 2.24597 23.3707 4.29272 23.5891C9.42572 24.137 14.5741 24.137 19.7073 23.5891C21.7542 23.3707 23.3707 21.754 23.5891 19.7071C24.137 14.5741 24.137 9.4259 23.5891 4.29272Z" fill="url(#paint0_radial)"/>
                                                <path d="M22.2837 5.1608C22.09 3.34457 20.6555 1.90994 18.8391 1.71603C14.2842 1.23007 9.71573 1.23007 5.1608 1.71603C3.34457 1.90994 1.90994 3.34457 1.71603 5.1608C1.23007 9.71573 1.23007 14.2842 1.71603 18.839C1.90994 20.6554 3.34457 22.09 5.1608 22.2837C9.71573 22.7699 14.2842 22.7699 18.839 22.2837C20.6554 22.09 22.09 20.6554 22.2837 18.839C22.7699 14.2842 22.7699 9.71573 22.2837 5.1608Z" fill="url(#paint1_linear)"/>
                                                <path d="M0.359619 19.209C0.376099 19.3749 0.393127 19.5408 0.410889 19.7067C0.629333 21.7534 2.24597 23.3701 4.29291 23.5885C9.4259 24.1364 14.5743 24.1364 19.7073 23.5885C21.7542 23.3701 23.3707 21.7534 23.5891 19.7067C23.6069 19.5408 23.6239 19.3749 23.6406 19.209H0.359619Z" fill="url(#paint2_linear)"/>
                                                <path d="M23.5891 19.7079C23.8835 16.9497 24.0193 14.1872 23.9974 11.4251L18.5115 5.93924C17.8262 5.15683 16.8251 4.66848 15.6489 4.62619C13.2299 4.53903 10.8032 4.54342 8.38379 4.62655C6.37439 4.69577 4.96924 6.04635 4.60889 8.0314C4.54535 8.38186 4.50726 8.73691 4.45728 9.08993V14.9094C4.48492 15.098 4.52557 15.2857 4.53821 15.4754C4.61877 16.6828 5.11499 17.7169 5.90948 18.4166L11.492 23.9989C14.2316 24.0182 16.9714 23.8819 19.7072 23.5899C21.7542 23.3714 23.3706 21.7548 23.5891 19.7079Z" fill="url(#paint3_linear)"/>
                                                <path d="M23.5892 19.7065C23.3709 21.7531 21.7539 23.3701 19.7073 23.5884C16.9719 23.8802 14.2316 24.0167 11.4923 23.9974L5.91821 18.4233C6.56439 18.989 7.40668 19.3334 8.38409 19.3702C10.8029 19.461 13.2302 19.4586 15.649 19.3715C17.8367 19.2924 19.4199 17.6732 19.4882 15.4854C19.561 13.1625 19.561 10.8336 19.4882 8.51074C19.457 7.50146 19.1027 6.6134 18.5153 5.94141L23.9977 11.4238C24.0193 14.1855 23.8834 16.9484 23.5892 19.7065Z" fill="url(#paint4_linear)"/>
                                                <path d="M14.8318 9.40155C14.129 8.63635 13.1207 8.15625 11.9999 8.15625C9.87695 8.15625 8.15576 9.87744 8.15576 12.0004C8.15576 13.1212 8.63586 14.1295 9.40106 14.8323L18.295 23.7263C18.7658 23.6852 19.2366 23.6396 19.707 23.5895C21.7539 23.371 23.3705 21.7544 23.589 19.7075C23.6392 19.2371 23.6848 18.7663 23.7258 18.2955L14.8318 9.40155Z" fill="url(#paint5_linear)"/>
                                                <path d="M23.9536 14.5856L16.7956 7.42786C16.6286 7.20868 16.3655 7.06641 16.0687 7.06641C15.5637 7.06641 15.1541 7.47583 15.1541 7.98102C15.1541 8.27783 15.2963 8.54095 15.5155 8.70795L23.8256 17.0182C23.882 16.2076 23.9246 15.3966 23.9536 14.5856Z" fill="url(#paint6_linear)"/>
                                                <path d="M4.45728 9.08993C4.50726 8.73691 4.54535 8.38186 4.60889 8.0314C4.96906 6.04635 6.37439 4.69577 8.38379 4.62655C10.8032 4.54342 13.2299 4.53903 15.6489 4.62619C17.8359 4.70492 19.4197 6.32431 19.488 8.51205C19.5607 10.8351 19.5607 13.1638 19.488 15.4869C19.4197 17.6746 17.8364 19.2939 15.649 19.3728C13.23 19.4601 10.8028 19.4623 8.38397 19.3715C6.19659 19.2893 4.68451 17.6662 4.53821 15.4752C4.52557 15.2857 4.48492 15.0978 4.45728 14.9092C4.45728 12.9694 4.45728 11.0296 4.45728 9.08993ZM12.002 18.0762C13.109 18.0762 14.2172 18.1093 15.3228 18.0685C17.0562 18.0042 18.1224 16.9697 18.1629 15.2379C18.2131 13.08 18.2131 10.9192 18.1629 8.76108C18.1224 7.02963 17.0555 5.97091 15.3228 5.93411C13.1235 5.8876 10.9218 5.88797 8.72253 5.93411C7.00299 5.97018 5.93365 7.00747 5.88696 8.71988C5.82764 10.9051 5.82764 13.0941 5.88696 15.2793C5.93365 16.9915 7.00299 18.0048 8.72272 18.0685C9.81439 18.1092 10.9088 18.0762 12.002 18.0762Z" fill="url(#paint7_linear)"/>
                                                <path d="M4.45728 9.08993C4.50726 8.73691 4.54535 8.38186 4.60889 8.0314C4.96906 6.04635 6.37439 4.69577 8.38379 4.62655C10.8032 4.54342 13.2299 4.53903 15.6489 4.62619C17.8359 4.70492 19.4197 6.32431 19.488 8.51205C19.5607 10.8351 19.5607 13.1638 19.488 15.4869C19.4197 17.6746 17.8364 19.2939 15.649 19.3728C13.23 19.4601 10.8028 19.4623 8.38397 19.3715C6.19659 19.2893 4.68451 17.6662 4.53821 15.4752C4.52557 15.2857 4.48492 15.0978 4.45728 14.9092C4.45728 12.9694 4.45728 11.0296 4.45728 9.08993ZM12.002 18.0762C13.109 18.0762 14.2172 18.1093 15.3228 18.0685C17.0562 18.0042 18.1224 16.9697 18.1629 15.2379C18.2131 13.08 18.2131 10.9192 18.1629 8.76108C18.1224 7.02963 17.0555 5.97091 15.3228 5.93411C13.1235 5.8876 10.9218 5.88797 8.72253 5.93411C7.00299 5.97018 5.93365 7.00747 5.88696 8.71988C5.82764 10.9051 5.82764 13.0941 5.88696 15.2793C5.93365 16.9915 7.00299 18.0048 8.72272 18.0685C9.81439 18.1092 10.9088 18.0762 12.002 18.0762Z" fill="white"/>
                                                <path d="M11.9999 8.15625C9.87695 8.15625 8.15576 9.87726 8.15576 12.0002C8.15576 14.1233 9.87695 15.8443 11.9999 15.8443C14.123 15.8443 15.844 14.1233 15.844 12.0002C15.844 9.87726 14.123 8.15625 11.9999 8.15625ZM11.9999 14.5208C10.6077 14.5208 9.47925 13.3923 9.47925 12.0002C9.47925 10.608 10.6077 9.47955 11.9999 9.47955C13.392 9.47955 14.5205 10.608 14.5205 12.0002C14.5205 13.3923 13.392 14.5208 11.9999 14.5208Z" fill="white"/>
                                                <path d="M16.9828 7.98102C16.9828 8.48602 16.5734 8.89545 16.0684 8.89545C15.5634 8.89545 15.1538 8.48602 15.1538 7.98102C15.1538 7.47583 15.5634 7.06641 16.0684 7.06641C16.5734 7.06641 16.9828 7.47583 16.9828 7.98102Z" fill="white"/>
                                                </g>
                                                <defs>
                                                <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.91986 20.9741) scale(26.4678)">
                                                <stop stop-color="#FAE100"/>
                                                <stop offset="0.0544" stop-color="#FADC04"/>
                                                <stop offset="0.1167" stop-color="#FBCE0E"/>
                                                <stop offset="0.1829" stop-color="#FCB720"/>
                                                <stop offset="0.2514" stop-color="#FE9838"/>
                                                <stop offset="0.3054" stop-color="#FF7950"/>
                                                <stop offset="0.4922" stop-color="#FF1C74"/>
                                                <stop offset="1" stop-color="#6C1CD1"/>
                                                </radialGradient>
                                                <linearGradient id="paint1_linear" x1="9.20494" y1="10.4278" x2="-31.4539" y2="-12.4428" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#A1B5D8" stop-opacity="0"/>
                                                <stop offset="0.3094" stop-color="#90A2BD" stop-opacity="0.309804"/>
                                                <stop offset="0.7554" stop-color="#7C8B9C" stop-opacity="0.756863"/>
                                                <stop offset="1" stop-color="#748290"/>
                                                </linearGradient>
                                                <linearGradient id="paint2_linear" x1="12" y1="21.1853" x2="12" y2="24.9263" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#FAE100" stop-opacity="0"/>
                                                <stop offset="0.3068" stop-color="#FCA800" stop-opacity="0.305882"/>
                                                <stop offset="0.6275" stop-color="#FE7300" stop-opacity="0.627451"/>
                                                <stop offset="0.8685" stop-color="#FF5200" stop-opacity="0.866667"/>
                                                <stop offset="1" stop-color="#FF4500"/>
                                                </linearGradient>
                                                <linearGradient id="paint3_linear" x1="10.6346" y1="10.6014" x2="4.69497" y2="4.66183" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#833AB4" stop-opacity="0"/>
                                                <stop offset="1" stop-color="#833AB4"/>
                                                </linearGradient>
                                                <linearGradient id="paint4_linear" x1="16.4485" y1="21.9502" x2="13.4839" y2="7.97447" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#833AB4" stop-opacity="0"/>
                                                <stop offset="1" stop-color="#833AB4"/>
                                                </linearGradient>
                                                <linearGradient id="paint5_linear" x1="17.5764" y1="17.5768" x2="5.66899" y2="5.66947" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#833AB4" stop-opacity="0"/>
                                                <stop offset="1" stop-color="#833AB4"/>
                                                </linearGradient>
                                                <linearGradient id="paint6_linear" x1="18.4597" y1="10.3721" x2="14.5222" y2="6.43454" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#833AB4" stop-opacity="0"/>
                                                <stop offset="1" stop-color="#833AB4"/>
                                                </linearGradient>
                                                <linearGradient id="paint7_linear" x1="16.7652" y1="7.26871" x2="7.05662" y2="16.9773" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#833AB4"/>
                                                <stop offset="0.0922" stop-color="#9C3495"/>
                                                <stop offset="0.2927" stop-color="#DC2546"/>
                                                <stop offset="0.392" stop-color="#FD1D1D"/>
                                                <stop offset="0.5589" stop-color="#FC6831"/>
                                                <stop offset="0.6887" stop-color="#FC9B40"/>
                                                <stop offset="0.7521" stop-color="#FCAF45"/>
                                                <stop offset="0.7806" stop-color="#FDB750"/>
                                                <stop offset="0.8656" stop-color="#FECB6A"/>
                                                <stop offset="0.9415" stop-color="#FFD87A"/>
                                                <stop offset="1" stop-color="#FFDC80"/>
                                                </linearGradient>
                                                <clipPath id="clip0">
                                                <rect width="24" height="24" fill="white"/>
                                                </clipPath>
                                                </defs>
                                                </svg>

                                                </a>                                      
                                            </div>

                                            <div className="mx-2">
                                                <a href={item.facebook} target="_blank" rel="noopener noreferrer">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                    <path d="M22.6752 4.24134e-08H1.32367C0.592529 0.000366253 -0.000183063 0.593445 4.24134e-08 1.32477V22.6763C0.000366253 23.4075 0.593445 24.0002 1.32477 24H22.6752C23.4067 24.0002 23.9998 23.4073 24 22.6758C24 22.6756 24 22.6754 24 22.6752V1.32367C23.9996 0.592529 23.4066 -0.000183063 22.6752 4.24134e-08Z" fill="#4267B2"/>
                                                    <path d="M16.5703 24.0004V14.7192H19.6992L20.168 11.0864H16.5703V8.77264C16.5703 7.72327 16.8616 7.00824 18.3664 7.00824H20.2734V3.76782C19.9417 3.72369 18.8033 3.625 17.4787 3.625C14.7131 3.625 12.8203 5.3125 12.8203 8.41284V11.0864H9.70312V14.7192H12.8203V24.0004H16.5703Z" fill="white"/>
                                                    </g>
                                                    <defs>
                                                    <clipPath id="clip0">
                                                    <rect width="24" height="24" fill="white"/>
                                                    </clipPath>
                                                    </defs>
                                                    </svg>

                                                </a>                                      
                                            </div>
                                            
                                            <div className="mx-2">
                                                <a href={`mailto:${item.email}`} class="contact">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#5F98D1"/>
                                                    <path d="M19.4913 6.91211H4.47936L9.91776 12.5749L11.4871 14.164C10.6333 13.9688 10.5804 13.8471 10.2021 13.5382C10.0036 13.3762 9.62015 12.9358 9.03778 12.341C7.21991 10.4847 4.13525 7.33483 4.13525 7.33483V16.6546L4.52268 17.042L4.47932 17.0872L11.3757 23.9836C11.5825 23.9942 11.7907 23.9996 12.0001 23.9996C18.6275 23.9996 24.0001 18.6271 24.0001 11.9996C24.0001 11.8006 23.995 11.6028 23.9854 11.4062L19.4913 6.91211Z" fill="#3A6DA1"/>
                                                    <path d="M4.13525 7.33594V16.6557L8.68015 11.977L4.13525 7.33594Z" fill="white"/>
                                                    <path d="M19.8648 7.33594V16.6557L15.3425 11.9958L19.8648 7.33594Z" fill="white"/>
                                                    <path d="M4.47949 6.91211H19.4914L13.5915 13.0555C13.1716 13.4927 12.5916 13.7398 11.9855 13.7398C11.3794 13.7398 10.7994 13.4927 10.3795 13.0555L4.47949 6.91211Z" fill="white"/>
                                                    <path d="M13.9319 13.3818C13.4257 13.9089 12.7163 14.2112 11.9855 14.2112C11.2548 14.2112 10.5453 13.909 10.0391 13.3819L9.03841 12.3398L4.47949 17.0867H19.4914L14.9326 12.3398L13.9319 13.3818Z" fill="white"/>
                                                    </svg>

                                                </a>
                                           
                                            </div>
                                        </div>

                                        </div>

                                    </div>
                                ))
                            }
                            
                            <div className="d-flex align-items-center justify-content-center my-3">
                                <Pagination
                                        activePage={paginate.currentPage}
                                        itemsCountPerPage={paginate.itemsCountPerPage}
                                        totalItemsCount={yellowPageData.length}
                                        pageRangeDisplayed={2}
                                        onChange={handlePageChang}
                                        firstPageText={<svg width="17" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.3085 5.76256L7.36396 1.70711C7.75449 1.31658 7.75449 0.683418 7.36396 0.292893C6.97344 -0.0976311 6.34027 -0.0976311 5.94975 0.292893L0.292893 5.94975C0.0538216 6.18882 -0.0388949 6.51882 0.0147438 6.82843C-0.0388949 7.13803 0.0538216 7.46803 0.292893 7.70711L5.94975 13.364C6.34027 13.7545 6.97344 13.7545 7.36396 13.364C7.75449 12.9734 7.75449 12.3403 7.36396 11.9497L3.17678 7.76256H24.5126C25.0648 7.76256 25.5126 7.31485 25.5126 6.76256C25.5126 6.21028 25.0648 5.76256 24.5126 5.76256H3.3085Z" fill="#222222"/>
                                        </svg>
                                        
                                        }
                                        lastPageText={<svg width="17" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.0666 6.76238L19.0412 2.73701C18.6507 2.34649 18.6507 1.71332 19.0412 1.3228L19.1014 1.26262C19.4919 0.872095 20.1251 0.872095 20.5156 1.26262L26.1725 6.91947C26.4193 7.16631 26.5101 7.51008 26.445 7.82824C26.5101 8.14641 26.4193 8.49018 26.1725 8.73701L20.5156 14.3939C20.1251 14.7844 19.4919 14.7844 19.1014 14.3939L19.0412 14.3337C18.6507 13.9432 18.6507 13.31 19.0412 12.9195L23.1983 8.76238H1C0.447715 8.76238 0 8.31466 0 7.76238C0 7.21009 0.447715 6.76238 1 6.76238H23.0666Z" fill="#222222"/>
                                        </svg>
                                        
                                        }
                                        />

                             </div>
                        </div>
                    </div>
                </div>





            <Footer />

        </div>
      );
}
 
export default BusinessListing;