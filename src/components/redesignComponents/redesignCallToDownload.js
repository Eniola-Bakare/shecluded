import React from 'react'

const RedesignCallToDownload = () => {
  return (
    <div className="download-section mx-auto row px-xs-5 px-md-4 d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-center justify-content-lg-around">
			<div className="download-text pl-5 pl-lg-0 col-lg-8">
				<p className='download-title mb-0'>START BUILDING TODAY</p>
				<p className='download-desc mb-lg-0'>Download the Shecluded app</p>
			</div>
			<div className="download-images pl-5 pl-lg-0 col-lg-4 d-flex flex-row justify-content-lg-between align-items-end">
				<img className='mr-xs-5 mr-lg-0' src={require ('../../assets/newRedesign-assets/googlePlay.png')} alt="Google Download Icon" />
				<img src={require ('../../assets/newRedesign-assets/appleStore.png')} alt="Applestore Icon" />
			</div>
  </div>
  )
}

export default RedesignCallToDownload