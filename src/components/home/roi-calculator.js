import React, {useState} from 'react';
import Inventory from './roi-calculator/inventory';
import Equipment from './roi-calculator/equipment';
import Marketing from './roi-calculator/marketing';
const RoI = () => {
	const [currentPage, setCurrentPage] =  useState("inventory")
		return (
			<div className="user-layout">
				
				<div className="dashboard-mainX">
					
					<div className="main-containerner-fluid loans-container">
					<div className="p-4">
                        <h3 className="mt-4">
						What are you looking to invest in?</h3>
                    </div>


					<div className="manage-profile-header justify-content-between">
            <div className={currentPage === "inventory" ? "activeX" : "personal-detailsX"}>
              <h6
                className={currentPage === "inventory" ? "active" : null}
                onClick={() => setCurrentPage("inventory")}
              >
                Inventory
              </h6>

            </div>

            <div className={currentPage === "Equipment" ? "activeX" : "personal-detailsX"}>
            <h6
              className={currentPage === "Equipment" ? "active" : null}
              onClick={() => setCurrentPage("Equipment")}
            >
              Equipment
            </h6>

            </div>
            <div className={currentPage === "Marketing" ? "activeX" : "personal-detailsX"}>
            <h6
              className={currentPage === "Marketing" ? "active" : null}
              onClick={() => setCurrentPage("Marketing")}
            >
			Marketing
            </h6>

            </div>
            
            
          </div>
       
						<div className="row my-5 mx-0">
							<div className="col-12 p-0">
								<div className="d-flex justify-content-center align-items-center roi-heading-content flex-column">
									<div className="my-3">
										<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
											<circle opacity="0.2" cx="40" cy="40" r="40" fill="#EC008C" fill-opacity="0.4"/>
											<path d="M29.903 35.4196H25.3868V30.339H27.0804V29.21H24.2578V36.5487H31.032V33.1616H29.903V35.4196Z" fill="#F0008C"/>
											<path d="M27.6449 32.363L26.915 31.6331L26.1167 32.4314L27.6449 33.9596L31.9956 29.6088L31.1973 28.8105L27.6449 32.363Z" fill="#F0008C"/>
											<path d="M45.1453 50.0967C43.5891 50.0967 42.3228 51.363 42.3228 52.9193C42.3228 54.4755 43.5891 55.7418 45.1453 55.7418C46.7016 55.7418 47.9679 54.4755 47.9679 52.9193C47.9679 51.363 46.7016 50.0967 45.1453 50.0967ZM45.1453 54.6128C44.2117 54.6128 43.4518 53.8529 43.4518 52.9193C43.4518 51.9857 44.2117 51.2257 45.1453 51.2257C46.0789 51.2257 46.8389 51.9857 46.8389 52.9193C46.8389 53.8529 46.0789 54.6128 45.1453 54.6128Z" fill="#F0008C"/>
											<path d="M55.3991 26.3945L49.2316 25.161L46.6788 36.5054L34.4194 34.0533V23H25.7179L22 26.7179V38.8065H28.221L26.6189 46.1774C25.9166 46.3061 25.3397 46.8315 25.1608 47.5452L24.8744 48.6899C24.8399 48.8283 24.8226 48.9705 24.8226 49.1133C24.8226 49.9556 25.4232 50.6776 26.2512 50.8311L40.0888 53.3935C40.3286 55.9735 42.5037 58 45.1452 58C47.9462 58 50.2258 55.721 50.2258 52.9194C50.2258 52.0996 50.026 51.3275 49.68 50.6414L52.5145 38.1692L50.7063 34.5811L51.8074 29.7629L54.4925 30.2998C54.6212 30.3258 54.7527 30.3387 54.8831 30.3387H55.0085C56.1064 30.3387 57 29.4451 57 28.3472C57 27.4009 56.3266 26.58 55.3991 26.3945ZM37.0162 35.7242L38.7282 36.0668L37.9713 38.7155L36.259 38.3729L37.0162 35.7242ZM39.8388 36.2887L41.5508 36.6314L40.7939 39.28L39.0816 38.9374L39.8388 36.2887ZM25.3871 24.9273V26.3871H23.9273L25.3871 24.9273ZM23.129 27.5161H26.5161V24.129H33.2903V37.6774H23.129V27.5161ZM34.4194 38.8065V35.2049L35.9056 35.5023L34.8378 39.2406L41.5932 40.5921L42.6613 36.8532L46.431 37.6074L44.1049 47.947C43.2443 48.1273 42.4659 48.5275 41.8248 49.083L27.754 46.2689L29.3765 38.8065H34.4194ZM25.9516 49.1133C25.9516 49.0626 25.958 49.0124 25.9704 48.9633L26.2565 47.8189C26.3485 47.4525 26.7289 47.2149 27.0947 47.2883L40.9496 50.0596C40.5116 50.6996 40.2203 51.446 40.1141 52.2504L26.4569 49.7213C26.1639 49.6665 25.9516 49.411 25.9516 49.1133ZM45.1452 56.871C42.9662 56.871 41.1935 55.0978 41.1935 52.9194C41.1935 50.741 42.9662 48.9677 45.1452 48.9677C47.3241 48.9677 49.0968 50.741 49.0968 52.9194C49.0968 55.0978 47.3241 56.871 45.1452 56.871ZM47.5388 48.4399L48.2787 45.2025L49.6946 45.4853L48.8043 49.403C48.4358 49.0201 48.0102 48.6935 47.5388 48.4399ZM49.4631 40.0196L50.8722 40.3013L49.9441 44.3838L48.5301 44.101L49.4631 40.0196ZM51.3237 38.3147L51.1222 39.2006L49.7145 38.9189L50.3115 36.3066L51.3237 38.3147ZM46.4757 48.0217C46.0942 47.9178 45.6962 47.8575 45.2846 47.8462L49.4587 29.2932L50.6994 29.5416L46.4757 48.0217ZM55.0085 29.2097H54.8831C54.826 29.2097 54.7695 29.2042 54.7138 29.1929L49.7065 28.1912L50.0902 26.4841L55.1766 27.5015C55.5791 27.5823 55.871 27.9379 55.871 28.3472C55.871 28.8224 55.4837 29.2097 55.0085 29.2097Z" fill="#F0008C"/>
											
										</svg>
									</div>
									<h2 >Calculate sample Inventory ROI</h2>
									<p className="my-3">
									This ROI calculator is intended for demonstration purposes only. Actual return <br /> on investment varies based on many external factors. Example Fee Rates <br /> are not guaranteed.
									</p>

								</div>
								

								<div className="mt-3">
									{{
										inventory: (<Inventory />),
										Equipment: (<Equipment />),
										Marketing: (<Marketing />),

									}[currentPage]}
									
								</div>
							</div>
						</div>					
					</div>
				</div>
			</div>
		)
}

export default RoI;