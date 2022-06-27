import { Button } from 'react-bootstrap'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ('../Styles/HomePageStyles/topcollection.css')
require('bootstrap/dist/css/bootstrap.min.css')

const cardData = [
  {
    img: 'https://wallpaperaccess.com/full/2213424.jpg',
  },
  {
    img: 'https://wallpaperaccess.com/full/2213424.jpg',
  },
  {
    img: 'https://wallpaperaccess.com/full/2213424.jpg',
  },
  {
    img: 'https://wallpaperaccess.com/full/2213424.jpg',
  },
  {
    img: 'https://wallpaperaccess.com/full/2213424.jpg',
  },
  {
    img: 'https://wallpaperaccess.com/full/2213424.jpg',
  },
  {
    img: 'https://wallpaperaccess.com/full/2213424.jpg',
  },
  {
    img: 'https://wallpaperaccess.com/full/2213424.jpg',
  },
  {
    img: 'https://wallpaperaccess.com/full/2213424.jpg',
  },
]

const renderData = (data, index) => {
  return (
    <Col lg={4} md={6}>
      <div
        className="d-flex flex-row bd-highlight mb-3 "
        style={{
          backgroundColor: '#F8F8F8',
          borderRadius: '9px',
          height: '80px',
        }}
      >
        <div className="ml-2 mt-4 bd-highlight">
          <h4 className="align-middle">1</h4>
        </div>
        <div className="mt-2 p-2 bd-highlight ">
          <img
            className="img-fluid rounded-circle"
            src="https://wallpaperaccess.com/full/2213424.jpg"
            alt="nft-avatar"
            style={{
              width: '50px',
              height: '50px',
              display: 'block',
              margin: '0',
              padding: '0',
            }}
          />
        </div>
        <div style={{ display: 'flex', flexWrap: 'nowrap' }}>
          <div className="p-2 bd-highlight">
            <h5
              style={{
                fontSize: '16px',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                marginTop: '5px',
              }}
            >
              Collection Name
            </h5>
            <p
              style={{
                marginTop: '5px',
                whiteSpace: 'nowrap',
                fontSize: '14px',
                fontWeight: 400,
              }}
            >
              Floor Price{' '}
              <span className="p-2 " style={{ whiteSpace: 'nowrap' }}>
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/solana-sol.png"
                  className="img-fluid rounded"
                  width="15px"
                  alt="solana"
                  style={{
                    marginRight: '6px',

                    marginBottom: '2px',
                  }}
                />
                56.84
              </span>
            </p>
          </div>
          <div className="ml-3">
            <p
              style={{
                color: '#2E7D32',
                marginTop: '14px',
                marginBottom: '4px',
                fontSize: '14px',
                fontWeight: 700,
              }}
            >
              +256.08%
            </p>
            <span style={{ whiteSpace: 'nowrap', marginTop: '0' }}>
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/solana-sol.png"
                className="img-fluid rounded"
                width="15px"
                alt="solana"
                style={{
                  marginRight: '6px',
                }}
              />
              <p
                style={{
                  display: 'inline-block',
                  fontSize: '14px',
                  fontWeight: 400,
                  marginRight: '20px',
                }}
              >
                24,068,94
              </p>
            </span>
          </div>
        </div>
      </div>
    </Col>
  )
}

const TopCollection = () => {
  return (
    <>
      {/* <section class="wrapper"> 
    <div class="container-fostrap">  */}
      <h1 className="text-center">
        {/* style={{marginLeft:"5vh"}} */}
        {/* bicolor-topcollection */}
        Top collections over <span style={{color: "#6739B7"}}>last 30 days</span> 
      </h1>
      {/* <h1 data-content="Bicolor">Bicolor</h1> */}

      <div className="containertopcollection" style={{ width: '100%' }}>
        <Container style={{ width: '100%' }}>
          <Row style={{ width: '100%' }}>{cardData.map(renderData)}</Row>
        </Container>
      </div>
      <div className="d-flex justify-content-center mt-2 mb-4">
        <Button className=" border card-checkout-btn">View All</Button>
      </div>
      {/* // </section> */}
    </>
  )
}

export default TopCollection