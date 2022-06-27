import React from "react";
import { Dropdown } from "react-bootstrap";

import {
  Card,
  Button,
  Container,
  Col,
  Row,
  Image,
  Form,
  ButtonGroup,
} from 'react-bootstrap';
import {BsGlobe,BsDiscord,BsTwitter} from 'react-icons/bs';
import {AiOutlineLink} from 'react-icons/ai'


require("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");
const Container1 = (props) => {
  return (
    <>
      <div>
        
        <div
          style={{
            alignContent: "center",
            // display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "2%",
          }}
        >
          <div style={{ margin: "10%" }}>
            <img
              style={{ borderRadius: "10px" }}
              // src="https://images.pexels.com/photos/12334012/pexels-photo-12334012.jpeg?cs=srgb&dl=pexels-luis-angel-ferrer-l%C3%B3pez-12334012.jpg&fm=jpg"
              src={props.nftImage}
              width="100%"
              height="100%"
              alt=""
            />
          </div>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Description
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body text-center">
                  <strong>Created By <span style={{ color: '#6739B7' }}>RUBY SOL.</span>{' '}</strong>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Properties
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  {/* <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow. */}
                  <div className="container">
        <div className="row text-center">

        <div className="col-sm-4 py-3 mb-3 py-sm-0">
            <div class="card" style={{backgroundColor:"#EAE0FF", border:"1px solid #6739B7", borderRadius:"9px"}}>
              <div class="card-body">
                <h5 class="card-title" style={{color:"#6739B7"}}>Background</h5>
                <p class="card-text" style={{color:"#353840", fontWeight:"500", fontSize:"18px"}} >
                  YELLOW
                </p>
                <p style={{color:"#707A83", fontWeight:"400", fontSize:"14px"}}>18% have this trait</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4 py-3 mb-3 py-sm-0">
            <div class="card" style={{backgroundColor:"#EAE0FF", border:"1px solid #6739B7", borderRadius:"9px"}}>
              <div class="card-body">
                <h5 class="card-title" style={{color:"#6739B7"}}>Background</h5>
                <p class="card-text" style={{color:"#353840", fontWeight:"500", fontSize:"18px"}} >
                  YELLOW
                </p>
                <p style={{color:"#707A83", fontWeight:"400", fontSize:"14px"}}>18% have this trait</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4 py-3 mb-3 py-sm-0">
            <div class="card" style={{backgroundColor:"#EAE0FF", border:"1px solid #6739B7", borderRadius:"9px"}}>
              <div class="card-body">
                <h5 class="card-title" style={{color:"#6739B7"}}>Background</h5>
                <p class="card-text" style={{color:"#353840", fontWeight:"500", fontSize:"18px"}}>
                  YELLOW
                </p>
                <p style={{color:"#707A83", fontWeight:"400", fontSize:"14px"}}>18% have this trait</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4 py-3 mb-3 py-sm-0" >
            <div class="card" style={{backgroundColor:"#EAE0FF", border:"1px solid #6739B7", borderRadius:"9px"}}>
              <div class="card-body">
                <h5 class="card-title" style={{color:"#6739B7"}}>Background</h5>
                <p class="card-text" style={{color:"#353840", fontWeight:"500", fontSize:"18px"}}>
                  YELLOW
                </p>
                <p style={{color:"#707A83", fontWeight:"400", fontSize:"14px"}}>18% have this trait</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4 py-3 mb-3 py-sm-0">
            <div class="card" style={{backgroundColor:"#EAE0FF", border:"1px solid #6739B7", borderRadius:"9px"}}>
              <div class="card-body">
                <h5 class="card-title" style={{color:"#6739B7"}}>Background</h5>
                <p class="card-text" style={{color:"#353840", fontWeight:"500", fontSize:"18px"}} >
                  YELLOW
                </p>
                <p style={{color:"#707A83", fontWeight:"400", fontSize:"14px"}}>18% have this trait</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4 py-3 mb-3 py-sm-0">
            <div class="card" style={{backgroundColor:"#EAE0FF", border:"1px solid #6739B7", borderRadius:"9px"}}>
              <div class="card-body">
                <h5 class="card-title" style={{color:"#6739B7"}}>Background</h5>
                <p class="card-text" style={{color:"#353840", fontWeight:"500", fontSize:"18px"}} >
                  YELLOW
                </p>
                <p style={{color:"#707A83", fontWeight:"400", fontSize:"14px"}}>18% have this trait</p>
              </div>
            </div>
          </div>


        </div>
      </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                      About Rugby
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                <div className='row'>
                  <div className="col-lg-4 col-md-4 col-12">
                  <img
                    style={{ borderRadius: "10px" }}
                    src="https://images.pexels.com/photos/12334012/pexels-photo-12334012.jpeg?cs=srgb&dl=pexels-luis-angel-ferrer-l%C3%B3pez-12334012.jpg&fm=jpg"
                    width="100%"
                    height="100%"
                    alt=""
                  />
                  </div>
                  <div className="col-lg-8 col-md-8 col-12">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </div>

              <div className="d-flex border-bottom" style={{ float:"left" }}>
                
              <ButtonGroup
                  style={{
                    display: "inline-block",
                    marginLeft: "10px",
                    display: "flex",
                    flexWrap: "nowrap",
                  }}
                >
                  <Button
                    variant="light"
                    style={{
                      border: "1px solid #3D3D3D",
                      borderRadius: "9px 0 0 9px",
                      height: "51px",
                      width: "50px",
                    }}
                  >
                    {" "}
                    <BsGlobe />{" "}
                  </Button>
                  <Button
                    variant="light"
                    style={{
                      border: "1px solid #3D3D3D",
                      borderRadius: "0 0 0 0",
                      height: "51px",
                      width: "50px",
                    }}
                  >
                    {" "}
                    <AiOutlineLink />{" "}
                  </Button>

                  <Button
                    variant="light"
                    style={{
                      border: "1px solid #3D3D3D",
                      borderRadius: "0 0 0 0",
                      height: "51px",
                      width: "50px",
                    }}
                  >
                    {" "}
                    <BsDiscord />{" "}
                  </Button>

                  <Button
                    variant="light"
                    style={{
                      border: "1px solid #3D3D3D",
                      borderRadius: "0 9px 9px 0",
                      height: "51px",
                      width: "50px",
                    }}
                  >
                    {" "}
                    <BsTwitter />{" "}
                  </Button>
                </ButtonGroup>
                </div>
                  
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container1;
