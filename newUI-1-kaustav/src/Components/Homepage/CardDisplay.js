import { useNavigate } from "react-router-dom";
import { Card, Button, Container, Col, Row, Image } from "react-bootstrap";
import "../Styles/HomePageStyles/CardDisplay.css";
import { GoInfo } from "react-icons/go";
import axios from "axios";
import { useEffect, useState } from "react";
require("bootstrap/dist/css/bootstrap.min.css");
const cardDetails = [
  {
    image: "https://www.journaldugeek.com/content/uploads/2022/03/nft-ape.jpg",
    avatar: "https://avatars.githubusercontent.com/u/55938092?v=4",
  },
  {
    image: "https://www.journaldugeek.com/content/uploads/2022/03/nft-ape.jpg",
    avatar: "https://avatars.githubusercontent.com/u/55938092?v=4",
  },
  {
    image: "https://www.journaldugeek.com/content/uploads/2022/03/nft-ape.jpg",
    avatar: "https://avatars.githubusercontent.com/u/55938092?v=4",
  },
];

// let nftData = null;
// let flag = 0;
let navigate;

const Cards = ({ nftData, card, index }) => {
  return (
    <Col xm={4} className="py-3 py-sm-0 col-lg-4 col-md-4 col-12">
      {nftData ? (
        <Card
          className="header-card"
          onClick={() => {
            navigate("/nft-card", {
              state: {
                nftImage: `data:image/png;base64,${nftData[index].nftImgBase64}`,
                nftName: nftData[index].nftName,
                nftOwnerName: nftData[index].nftCreatorDetails,
                nftId: nftData[index]._id
              },
            });
          }}
        >
          {/* <Card.Img variant="top" src={card.image} /> nftData && nftData[0].nftImgBase64 */}
          <Card.Img
            variant="top"
            src={`data:image/png;base64,${nftData[index].nftImgBase64}`}
          />
          <Card.Body>
            <Card.Title>
              <h5>
                <Image
                  rounded="true"
                  // src={card.avatar}
                  src={`data:image/png;base64,${nftData[index].nftImgBase64}`}
                  height="35"
                  width="35"
                ></Image>{" "}
                <span className="card-nft-name">{nftData[index].nftName}</span>
                <div className="row">
                  {" "}
                  <span className="card-owner-name">
                    {nftData[index].nftCreatorDetails}
                  </span>
                </div>
              </h5>
              <button className="card-goinfo-btn">
                <GoInfo />
              </button>
            </Card.Title>
            {/* <Button className="card-checkout-btn">Checkout NFT</Button> */}
          </Card.Body>
        </Card>
      ) : (
        <div className="row">none</div>
      )}
    </Col>
  );
};

export default function HeaderCard() {
  const [nftData, setNftData] = useState([{}]);
  useEffect(() => {
    axios
      .get("https://shortgun-backend.herokuapp.com/nft/getNFTs")
      .then((response) => {
        console.log(response.data);
        // 'nftData' = response.data;
        // console.log('nftData'[0].nftName);
        setNftData(response.data);

        // return 'nftData';
        // console.log( nftData)
        // setNftData(response.data)
      })
      .catch((error) => {
        console.log(error);
        // window.alert("Registration Failed ");
        // console.log(error);
      });
    // flag = 1;
  }, []);
  // console.log('after ', nftData)
  navigate = useNavigate();
  return (
    <>
      <Container>
        <Container>
          <Row>
            {nftData.map((card, idx) => {
              return (
                <Cards key={idx} nftData={nftData} card={card} index={idx} />
              );
            })}
          </Row>
        </Container>
      </Container>
    </>
  );
}
