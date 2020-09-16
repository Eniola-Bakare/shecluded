import React from "react";
import UploadPitchVideo from "./upload-video";

const PitchVideo = ({ profile: { video }, fetchedRequestBody }) => {
  return (
    <div>
      <h4>Pitch Video</h4>
      <div>
        <div className="row">
          <div className="col-md-8 col-sm-12 manage-profile-form-fields">
            <div className="text-center pitch-video">
              <video controls>
                <source src={video ? video : ""} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
              <small
                className="text-shecluded d-block"
                style={{ cursor: "pointer" }}
                htmlFor="name"
                data-toggle="modal"
                data-target="#PitchVideoModalCenter"
              >
                Click to update video
              </small>
            </div>
          </div>
        </div>
      </div>
      <UploadPitchVideo fetchedRequestBody={fetchedRequestBody} />
    </div>
  );
};
export default PitchVideo;
