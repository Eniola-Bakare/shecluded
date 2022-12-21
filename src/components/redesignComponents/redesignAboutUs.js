import React from 'react'
import Footer from './redesignFooter'
import Navbar from './redesignNavbar'
import RedesignCallToDownload from './redesignCallToDownload'

const redesignAboutUs = () => {
  return (
    <>
    
      <div className="about-page-wrapper">
        <Navbar />

        {/* <div className="about-content"> */}

          <div className="about-hero-section row d-flex flex-xl-row flex-column mx-auto justify-content-center align-items-center align-items-xl-start justify-content-xl-between">
            <div className="about-hero-text col-12 col-xl-6 col-12 d-flex flex-column px-0 align-items-center align-items-xl-start mb-5 mb-lg-0">
              <p className='about-us mb-0'>ABOUT US</p>
              <h1 className="about-hero mb-0">We Hold Your Hands To <span>Finance Your Future</span></h1>
              <p className="about-hero-desc ">We are a female-focused company that believes in your future enough to finance it. We provide financial services such as growth loans and insurance to female entrepreneurs in various sectors of the economy. We believe that we can bridge the inequality gap by providing equal opportunities and a level-playing field for women to dream and become.</p>
            </div>
            <div className="about-hero-image col-12 col-xl-5 px-0">
              <img src={require ('../../assets/newRedesign-assets/about-hero.png')} alt="image of a woman" />
            </div>
          </div>

          <div className="about-services row d-flex flex-md-row flex-column p-5 mx-auto">
            <div className="about-servies-para what-we-do col-12 col-xl-4 p-3 mt-5 mb-5">
              <p className="about-services-title" id='what-we-do'>WHAT WE DO</p>
              <p className="about-services-desc">Shecluded provides a range of innovative financial opportunities for growth and the maintenance of financial growth for women entrepreneurs. On one hand, we grant you access to growth loans that helps you scale your business and build assets. On the other hand, we provide insurance that protects this growth we aim to foster. Shecluded aims to invest $1.3billion in loans to 200,000 Black-women entrepreneurs over the next ten years.</p>
            </div>

            <div className="about-servies-para who-we-serve col-12 col-xl-4 p-3 mt-5 mb-5">
              <p className="about-services-title" id='who-we-serve'>WHO WE SERVE</p>
              <p className="about-services-desc">Shecluded mission is to serve the female entrepreneur as a trusted financial partner by providing financial services from Growth Loans to Insurance policies that encourage and sustain her economic growth and viability.</p>
            </div>

            <div className="about-servies-para what-we-believe col-12 col-xl-4 p-3 mt-5 mb-5">
              <p className="about-services-title" id='what-we-believe'>WHAT WE BELIEVE</p>
              <p className="about-services-desc">Creating a finance company for women can unlock new markets, attract and lead to innovation of new products or services. 
              <br></br>
              <br></br>
              Our network spans 162 countries and jurisdictions across six continents, including a physical presence in 96 markets, the largest of any bank.</p>
            </div>
          </div>

          <div className="about-note ">
            <p className="about-note-para px-lg-5 mx-5">What started as a little white reader is now a powerful ecosystem of commerce solutions.</p>
          </div>

          <div className="about-figures d-flex flex-column justify-content-center justify-content-xl-start align-items-center align-items-xl-start mx-auto mt-5 ">
            <p className="about-figures-title mb-5">Today Our Work Is More,<span> Important And Impactful Than Ever</span></p>
            
            <div className="about-figures-sub row d-flex flex-column flex-xl-row justify-content-xl-between">

              <div className="about-figures-img-div col-12 col-xl-5 mb-5 mb-xl-0">
                <img src={require ('../../assets/newRedesign-assets/about-figures.png')} alt="image of a woman" />
              </div>

              <div className="about-figures-number-div px-0 pr-0 col-12 col-xl-6 d-flex flex-wrap justify-content-around justify-content-xl-between flex-align-start">
                <div className="about-figures-number-div-desc d-flex flex-column align-items-center align-items-xl-start">
                  <p className="title">3500+</p>
                  <p className="desc">Women have received loans and we plan to give more</p>
                </div>
                <div className="about-figures-number-div-desc d-flex flex-column align-items-center align-items-xl-start">
                  <p className="title">36%</p>
                  <p className="desc">Percentage of women who got their first business loan. </p>
                </div>
                <div className="about-figures-number-div-desc d-flex flex-column align-items-center align-items-xl-start">
                  <p className="title">400+</p>
                  <p className="desc">Businesses launched through Shecluded </p>
                </div>
                <div className="about-figures-number-div-desc d-flex flex-column align-items-center align-items-xl-start">
                  <p className="title">$1.1mn</p>
                  <p className="desc">Amount In Loans Disbursed</p>
                </div>
                <div className="about-figures-number-div-desc d-flex flex-column align-items-center align-items-xl-start">
                  <p className="title">1500+</p>
                  <p className="desc">Members in our community</p>
                </div>
              </div>
            </div>
          </div>

          <RedesignCallToDownload />
        {/* </div> */}

        <Footer />
      </div>
    </>
  )
}

export default redesignAboutUs