import React from 'react'

const RedesignCallToDownload = () => {
  return (
    <div className="download-section">
			<div className="download-text">
				<p className='download-title'>START BUILDING TODAY</p>
				<p className='download-desc'>Download the Shecluded app</p>
			</div>
			<div className="download-images">
				<img src={require ('../../assets/newRedesign-assets/googlePlay.png')} alt="Google Download Icon" />
				<img src={require ('../../assets/newRedesign-assets/appleStore.png')} alt="Applestore Icon" />
			</div>
  </div>
  )
}

export default RedesignCallToDownload