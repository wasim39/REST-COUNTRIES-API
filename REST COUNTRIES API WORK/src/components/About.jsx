import React from "react";

import { useParams, Link } from "react-router-dom";

function About({ data }) {
  var { name } = useParams();

  var mainData = data.filter((res) => {
    return res.common === name;
  });

  console.log(mainData[0]);

  return (
    // <center>
    <React.Fragment>
    <div className="container text-center ">
      <div >
      <div className="d-flex flex-column align-items-center width 75%">
        <div class="col-sm-6 ">
          <div class="card bg-warning ">
            <div class="card-body ">
              <img src={mainData[0].flag}></img>
              <br />
              <h4>
                <a href={mainData[0].map} target="_blank">
                  {mainData[0].map}
                </a>
              </h4>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
        <center>
          <div class="col-sm-6" >
            <div class="card" >
              <div class="card-body">
                <h5>Currency/Currencies: {mainData[0].curr}</h5>
                <h5>Region: {mainData[0].reg}</h5>
                <h5>Subregion: {mainData[0].subreg}</h5>
                <h5>Languages: {mainData[0].languages}</h5>
                <a
                  class="btn btn-danger"
                  data-bs-toggle="modal"
                  href="#exampleModalToggle"
                  role="button">EDIT LANGUAGE</a>
              </div>
            </div>
          </div>
          </center>
      </div>
      </div>
      <div
        class="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalToggleLabel">
                CHANGE LANGUAGES
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <label>Add Your Languages: </label>
                <input
                  className="form-control"
                  type="text"
                  id="message"
                  name="message"
                />
                <button class="btn btn-success btn-sm my-2">
                  Add new language
                </button>
                <p className="mb-0">
                  {Object.values(
                    ...mainData[0].languages,
                    mainData[0].languages
                  ).join(", ")}
                </p>
              </form>
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                SAVE
              </button>
              <button
                class="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>

      <Link to="/FormInput" className="btn btn-info">
        RETURN HOME
      </Link>

      </div>

      </React.Fragment>
    // {/* </center>   */}
  );
  
}

export default About;
