import React, { useState, useRef } from "react";
import axios from "axios";
import swal from "sweetalert";
import { UPLOAD_PRESET, UPLOAD_URL_FOR_VIDEO } from "../../../utils";
import { timeOut, updateVideoUrl } from "../../../api/rootUrls";
import Alert from "../../shared/alert";
import Preloader from "../../shared/preloader";

const UploadPitchVideo = ({ fetchedRequestBody }) => {
  const [state, setState] = useState({
    pitchVideo: "",
    pitchVideoName: "Choose a video",
    isLoading: false,
    errorMessage: ""
  });
  const closeModal = useRef();
  const onChangePitchVideo = event => {
    let file = event.target.files[0];
    let reader = new FileReader();
    let name = event.target.name;
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = e => {
        setState({
          ...state,
          pitchVideoName: file.name,
          [name]: e.target.result
        });
      };
    }
  };
  const updatePitchVideo = async (e, uri = state.pitchVideo) => {
    setState({
      ...state,
      isLoading: true
    });
    e.preventDefault();
    closeModal.current.click();
    try {
      const data = await new FormData();
      data.append("file", uri);
      data.append("upload_preset", UPLOAD_PRESET);

      const file = await axios({
        url: UPLOAD_URL_FOR_VIDEO,
        method: "post",
        data: data
      });
      let savedVideoUrl = await file.data.secure_url;
      let reqBody = {
        video: savedVideoUrl
      };
      const result = await axios({
        method: "post",
        url: `${updateVideoUrl}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        data: reqBody,
        timeout: timeOut
      });
      if (result.data.respCode === "Successful") {
        window.location.reload();
        swal("Successful Update", "Video has been uploaded.", "success");
        setState({
          ...state,
          isLoading: false,
          errorMessage: result.data.respDescription
        });
      } else {
        setState({
          ...state,
          isLoading: false,
          errorMessage: result.data.respDescription
        });
      }
    } catch (err) {
      setState({
        ...state,
        errorMessage: "Error occured while uploading file.",
        isLoading: false
      });
    }
  };
  const { token } = JSON.parse(sessionStorage.getItem("userData"));
  const { pitchVideoName, isLoading, errorMessage } = state;
  if (isLoading) {
    return <Preloader />;
  }
  return (
    <div
      className="modal fade"
      id="PitchVideoModalCenter"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="PitchVideoModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Upload Pitch Video
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              ref={closeModal}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {errorMessage.length ? <Alert message={errorMessage} /> : null}
            <form className="mt-5">
              <div className="input-group mb-3">
                <div className="custom-file">
                  <input
                    type="file"
                    name="pitchVideo"
                    accept="video/mp4,video/x-m4v,video/*"
                    onChange={onChangePitchVideo}
                    className="custom-file-input"
                    id="pitchVideo"
                  />
                  <label className="custom-file-label" htmlFor="pitchVideo">
                    {pitchVideoName}
                  </label>
                </div>
                <div className="input-group-append">
                  <button
                    className="btn btn-success"
                    disabled={!state.pitchVideo}
                    onClick={updatePitchVideo}
                  >
                    Upload
                  </button>
                </div>
              </div>
            </form>
            <small
              className="text-shecluded d-block col-12 col-md-12"
              htmlFor="name"
            >
              Maximum size is 20mb
            </small>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              ref={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPitchVideo;
