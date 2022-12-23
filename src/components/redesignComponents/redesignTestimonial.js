import React from 'react'

const redesignTestimonial = () => {
  return (
    <div className="building-for-women">
        <div className='build-image-div'>
          <img src={require ('../assets/forWomen.png')} alt="" />
        </div>
            <div className='women-text-wrapper'>
              <p className='women-title'>Building <span>For Women</span></p>
              <p className='women-desc'>"As my business grew, I knew I had to invest in a better laptop. I didn't have the chunck of money to purchase what I needed; a MacBook, so I reached out to shecluded, and they offered me a good loan and a good payment plan to get what I needed to optimize my process. The loan process and disbursement were fast and seamless."</p>
              {/* swipe controls */}
              <div className="swipe-testimonial">
                <div className="left-swipe swiper">
                  <img src={require ('../assets/rightArrow.png')} />
                </div>
                <div className="right-swipe swiper">
                  <img src={require ('../assets/leftArrow.png')} />
                </div>
              </div>
              <p className='swipe-name'>- Excellence</p>
            </div>
      </div>
  )
}

export default redesignTestimonial