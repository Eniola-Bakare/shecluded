import React, { useState, useRef } from "react";
import axios from "axios";
import swal from "sweetalert";
import { UPLOAD_PRESET, UPLOAD_URL } from "../../../utils";
import { timeOut, profileUrl } from "../../../api/rootUrls";
import Alert from "../../shared/alert";
import Preloader from "../../shared/preloader";

const UploadIdCard = ({ fetchedRequestBody }) => {
  const [state, setState] = useState({
    idCard: "",
    idCardName: "Choose ID Card",
    isLoading: false,
    errorMessage: ""
  });
  const closeModal = useRef();
  const onChangeIdCard = event => {
    let file = event.target.files[0];
    let reader = new FileReader();
    let name = event.target.name;
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = e => {
        setState({
          ...state,
          idCardName: file.name,
          [name]: e.target.result
        });
      };
    }
  };
  const updateIdCard = async (e, uri = state.idCard) => {
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
        url: UPLOAD_URL,
        method: "post",
        data: data
      });
      let image = await file.data.secure_url;
      let reqBody = {
        ...fetchedRequestBody,
        idFile: image
      };
      const result = await axios({
        method: "put",
        url: `${profileUrl}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        data: reqBody,
        timeout: timeOut
      });
      if (result.data.respCode === "Successful") {
        window.location.reload();
        swal("Successful Update", "ID Card has been updated.", "success");
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
  const { idCardName, isLoading, errorMessage } = state;
  if (isLoading) {
    return <Preloader />;
  }
  return (
    <div
      className="modal fade"
      id="IdcardModalCenter"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="IdcardModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Upload ID Card
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
                    name="idCard"
                    accept="image/*"
                    onChange={onChangeIdCard}
                    className="custom-file-input"
                    id="idCard"
                  />
                  <label className="custom-file-label" htmlFor="idCard">
                    {idCardName}
                  </label>
                </div>
                <div className="input-group-append">
                  <button
                    className="btn btn-success"
                    disabled={!state.idCard}
                    onClick={updateIdCard}
                  >
                    Upload
                  </button>
                </div>
              </div>
            </form>
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

export default UploadIdCard;
