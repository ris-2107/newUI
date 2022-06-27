import axios from "axios";
import React, { useEffect, useState } from "react";
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
} from "react-bootstrap";

import {
  AiOutlineReload,
  AiOutlineLink,
  AiOutlineShareAlt,
  AiOutlineFlag,
} from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

require("bootstrap/dist/css/bootstrap.min.css");

const Container2 = (props) => {
  const navigate = useNavigate();
  const [nftData, setNftData] = useState([{}]);
  useEffect(() => {
    axios
      .get("https://shortgun-backend.herokuapp.com/nft/getNFTs")
      .then((response) => {
        console.log(response.data);
        setNftData(response.data);
      })
      .catch((error) => {
        console.log(error);
        window.alert("Internal Server Error ");
      });
  }, []);

  //bid placing
  const submitHandler = async (id) => {
    console.log(id);

    await axios
      .post("https://shortgun-backend.herokuapp.com/nft/buyNFTs", {
        // nftID: "62a42ed7cc03d00c218c8dca",
        // nftID: nftData[0]._id,
        nftID: id,
        buyerEmail: "srijan@gmail.com",
        // buyerEmail: localStorage.getItem("buyerEmail"),
      })
      .then((response) => {
        alert("NFT Buying Success. Creator Updated");
        console.log(response);
        console.log(id);
        navigate("/profile", {
          state: {
            nftID: id
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div
        classNameName="d-flex justify-content-center border-bottom"
        style={{ float: "right" }}
      >
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
            <AiOutlineReload />{" "}
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
            <AiOutlineShareAlt />{" "}
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
            <AiOutlineFlag />{" "}
          </Button>
        </ButtonGroup>
      </div>
      <div style={{ margin: "2%" }}>
        <div>
          <h3 style={{ color: "#6739B7" }}>{props.nftName}</h3>
          <h1>#214</h1>
          <h5>
            Owned by{" "}
            <span style={{ color: "#6739B7" }}>{props.nftOwnerName}</span>{" "}
            <span>
              <FaHeart />
            </span>
          </h5>
        </div>
        <div>
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  Sale ends May 30, 2022 at 8:27am IST
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div className="accordion-body">
                  <strong>Top Bid</strong>
                  <br />
                  <div
                    style={{
                      fontSize: "32px",
                    }}
                  >
                    $39.99
                  </div>
                  ($39.95)
                  <br />
                  <Button
                    style={{
                      margin: "3%",
                      padding: "0.5% 5%",
                      backgroundColor: "#6739B7",
                      fontSize: "large",
                    }}
                    onClick={() => {
                      console.log(props.nftId);
                      console.log(props);
                      submitHandler(props.nftId);
                    }}
                  >
                    Place Bid
                  </Button>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Listings
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Price</th>
                        <th scope="col">USD Price</th>
                        <th scope="col">Expiration</th>
                        <th scope="col">From</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>29.8 SOL</td>
                        <td>$58,276.89</td>
                        <td>8 days</td>
                        <td>Ruby.sol</td>
                      </tr>
                      <tr>
                        <td>50 SOL</td>
                        <td>$58,276.89</td>
                        <td>8 days</td>
                        <td>Ruby.sol</td>
                      </tr>
                      {/* <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2
                className="accordion-header"
                id="panelsStayOpen-headingThreeThree"
              >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThreeThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThreeThree"
                >
                  Offers
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThreeThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThreeThree"
              >
                <div className="accordion-body">
                  <table className="table" style={{overflowX:"auto"}}>
                    <thead>
                      <tr>
                        <th scope="col">Price</th>
                        <th scope="col">USD Price</th>
                        <th scope="col">Floor Difference</th>
                        <th scope="col">Expiration</th>
                        <th scope="col">From</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>29.8 SOL</td>
                        <td>$58,276.89</td>
                        <td>100% below</td>
                        <td>8 days</td>
                        <td>3D19F2</td>
                      </tr>
                      <tr>
                        <td>50 SOL</td>
                        <td>$58,276.89</td>
                        <td>100% below</td>
                        <td>8 days</td>
                        <td>3D19F2</td>
                      </tr>
                      {/* <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  Price History
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className="accordion-body">
                  {/* <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container2;
