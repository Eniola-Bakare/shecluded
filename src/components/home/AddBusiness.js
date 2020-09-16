import React, {useState} from 'react';
import Footer from "../shared/footer";
import NavBar from "../shared/navbar";
import AddBusinessIMG from "../../assets/add-business.png";
// import Preloader from "../shared/preloader";
import axios from 'axios';
import Resizer from "react-image-file-resizer";
import { AddBusinessList, timeOut } from '../../api/rootUrls';
import swal from "sweetalert";
import IsLoadingData from "../shared/isLoadingData/isLoadingData";
import {
  UPLOAD_PRESET,
  UPLOAD_URL,
  MAX_PHOTO_SIZE,
  PHOTO_ERROR_MESSAGE
} from "../../utils";


import {Link} from 'react-router-dom'
const AddBusiness = () => {
  const [loading, setloading] = useState(false)
  
    const [inputData, setInputData] = useState({
        businessName: "",
        businessEmail: "",
        address: "",
        image: "",
        businessCity: "",
        fullName: "",
        agree: "",
        email:"",
        instagram: "www.instagram.com/username",
        facebook: "www.facebook.com/username",
        registeredCompany:"",
        location: "",
        phonenumber: "",
        website: "",

    })

    const handleChange = (e) => {
        setInputData({
          ...inputData,
          [e.target.name]: e.target.value,
        });
      };

      const handleProfilePicture = event => {
        let file = event.target.files[0];
    
        if (file.size / 1024 > MAX_PHOTO_SIZE) {
          return swal("Invalid input", PHOTO_ERROR_MESSAGE, "info");
        }
    
        let nameOfField = event.target.name;
        let value = event.target.value;
        value = value.split("\\")[2];
        if (file) {
          Resizer.imageFileResizer(
            file,
            300,
            300,
            "JPEG",
            50,
            0,
            uri => {
              setInputData({
                ...inputData,
                [nameOfField]: uri,
              });
            },
            "base64"
          );
        }
      };


    const handleSubmit = async (e) => {
        e.preventDefault()
        setloading(true)

        if (inputData.imageData) {
          try {
            let data = await new FormData();
            let data1 = data;
            data1.append("file", inputData.imageData);
            data1.append("upload_preset", UPLOAD_PRESET);
    
            const res1 = await fetch(UPLOAD_URL, {
              method: "POST",
              body: data1
            });
            const file1 = await res1.json();
            const image1 = file1.secure_url;
            
            const pp = await axios({
              url: `${AddBusinessList}`,
              method: 'post',
              headers: {
                        'Content-Type': 'application/json',
                    },
              data: {
                ...inputData,
                image:image1
              },
              timeout: timeOut
            })
            setloading(false)
            swal("Successful", "Your Business in now on shecluded yellow page", "success");
            setInputData({
              businessName: "",
              businessEmail: "",
              address: "",
              image: "",
              businessCity: "",
              fullName: "",
              agree: "",
              email:"",
              instagram: "www.instagram.com/username",
              facebook: "www.facebook.com/username",
              registeredCompany:"",
              location: "",
              phonenumber: "",
              website: "",
            })
            
          } catch (err) {
            setInputData({
              ...inputData,
              fetchingData: false,
              errorMessage: "Error Uploading Images"
            });
          }
        }
        
      };
    return ( 
        <div>
             <NavBar />

             <div className="d-flex justify-content-center align-items-center mt-5">
                 <h1 className="mt-3 mt-md-0"> Add your Business</h1>
             </div>

             <div className="d-flex justify-content-between ">
                 <div className='business-img'>
                     <img src={AddBusinessIMG} alt="Add business"/>
                 </div>
                 <div  className="business-form">
                     <p style={{color: "#363154",fontSize: "18px",letterSpacing: "0.03em"}}>Join our list of awsome mechanics and grow your business </p>
                     <h2 className="mt-5">Business Information</h2>
                     <form onSubmit={handleSubmit}>
                        <div class="form-row">
                          <div class="form-group col-md-8">
                            <label for="savingsEmergencyFund">
                            Business image*
                            </label>
                            {/* <input
                              type="text"
                              name="businessName"
                              value={inputData.businessName}
                              onChange={handleChange}
                              class="form-control"
                              required
                            /> */}
                            <input
                        className="form-control d-noneX"
                        // ref={profileImage}
                        onChange={handleProfilePicture}
                        name="imageData"
                        type="file"
                      />
                          </div>
                          
                        </div>
                        <div class="form-row">
                          <div class="form-group col-md-8">
                            <label for="savingsEmergencyFund">
                            Business name*
                            </label>
                            <input
                              type="text"
                              name="businessName"
                              value={inputData.businessName}
                              onChange={handleChange}
                              class="form-control"
                              required
                            />
                          </div>
                          
                        </div>
                        <div class="form-row">
                          <div class="form-group col-md-8">
                            <label for="savingsEmergencyFund">
                            Email address* 
                            </label>
                            <input
                              type="email"
                              name="businessEmail"
                              value={inputData.businessEmail}
                              onChange={handleChange}
                              class="form-control"
                              required
                            />
                          </div>
                          
                        </div>
                        <div class="form-row">
                          <div class="form-group col-md-8">
                            <label for="savingsEmergencyFund">
                            Phone number*
                            </label>
                            <input
                              type="text"
                              name="phonenumber"
                              required
                              value={inputData.phonenumber}
                              onChange={(e) => {
                                if(e.target.value.match(/^[0-9]*$/)){
                                    handleChange(e)
    
                                }
                              }}
                              class="form-control"
                              maxlength="11"

                            />
                          </div>
                          
                        </div>
                        <div class="form-row">
                          <div class="form-group col-md-8">
                            <label for="savingsEmergencyFund">
                            Web address(if available)
                            </label>
                            <input
                              type="text"
                              name="website"
                              value={inputData.website}
                              onChange={handleChange}
                              class="form-control"
                            />
                          </div>
                          
                        </div>
                        <div class="form-row">
                          <div class="form-group col-md-8">
                            <label for="savingsEmergencyFund">
                            Business Address* 
                            </label>
                            <input
                              type="text"
                              name="address"
                              value={inputData.address}
                              onChange={handleChange}
                              class="form-control"
                            />
                          </div>
                          
                        </div>

                        <div class="form-row">
                          <div class="form-group col-md-4">
                            <label for="savingsEmergencyFund">
                            State*
                            </label>
                            <input
                              type="text"
                              name="location"
                              value={inputData.location}
                              onChange={handleChange}
                              class="form-control"
                              required
                            />
                            
                          </div>
                          <div class="form-group col-md-4">
                            <label for="savingsEmergencyFund">
                            City*
                            </label>
                            <input
                              type="text"
                              name="businessCity"
                              value={inputData.businessCity}
                              onChange={handleChange}
                              class="form-control"
                              required
                            />
                          </div>
                          
                        </div>
                        <div class="form-row">
                          <div class="form-group col-md-8">
                            <label for="savingsEmergencyFund">
                            WHat do you do
                            </label>
                            <input
                              type="text"
                              name="registeredCompany"
                              value={inputData.registeredCompany}
                              onChange={handleChange}
                              class="form-control"
                            />
                          </div>
                          
                        </div>
                        <div class="form-row">
                          <div class="form-group col-md-8">
                            <label for="savingsEmergencyFund">
                            Instagram Handle
                            </label>
                            <input
                              type="text"
                              name="instagram"
                              value={inputData.instagram}
                              onChange={(e) => {
                                if(inputData.instagram.includes("www.instagram.com/") ){
                                    handleChange(e)
                                }else{
                                    setInputData({
                                    ...inputData,
                                    [e.target.name]: "www.instagram.com/"
                                  });
    
                                }
                              }}
                              class="form-control"
                            />
                          </div>
                          
                        </div>
                        <div class="form-row">
                          <div class="form-group col-md-8">
                            <label for="savingsEmergencyFund">
                            Facebook URL
                            </label>
                            <input
                              type="text"
                              name="facebook"
                              value={inputData.facebook}
                              onChange={(e) => {
                                if(inputData.facebook.includes("www.facebook.com/") ){
                                    handleChange(e)
                                }else{
                                    setInputData({
                                    ...inputData,
                                    [e.target.name]: "www.facebook.com/"
                                  });
    
                                }
                              }}
                              class="form-control"
                            />
                          </div>
                          
                        </div>
                        <h2 className="mt-4">Personal Information</h2>

                        <div class="form-row">
                          <div class="form-group col-md-8">
                            <label for="savingsEmergencyFund">
                            Full name*
                            </label>
                            <input
                              type="text"
                              name="fullName"
                              value={inputData.fullName}
                              onChange={handleChange}
                              class="form-control"
                              required
                            />
                          </div>
                          
                        </div>
                        <div class="form-row">
                          <div class="form-group col-md-8">
                            <label for="savingsEmergencyFund">
                            Email address*
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={inputData.email}
                              onChange={handleChange}
                              class="form-control"
                              required
                            />
                          </div>
                          
                        </div>
                        <div className="form-group col-12 text-body">
                            <input type="checkbox" value={inputData.agree} onChange={handleChange} name="agree" required className="form-check-input"/>
                            <label className="form-check-label" style={{paddingLeft: "10px"}}>
                                I agree to the Shecluded 
                                <Link to="/terms" className="text-shecludedXX" style={{color: "#EC008C"}}> Terms of Use </Link>
                            </label>
                            
                        </div>
                        <div className="d-flex justify-content-center">
                                
                                {
                                  loading? <IsLoadingData /> : (
                                    <button type="submit" className="btn btn-shecluded btn-lg">
                                      Add your business
                                    </button>
                                  )
                                }
                        </div>
                        
                        
                     </form>
                 </div>

             </div>

            <Footer />
        </div>
     );
}
 
export default AddBusiness;