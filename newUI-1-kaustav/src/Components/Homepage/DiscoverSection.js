import {useNavigate} from "react-router-dom"
import {
    Button,
  } from "react-bootstrap";
  import ('../Styles/HomePageStyles/DiscoverSection.css')
  
  require("bootstrap/dist/css/bootstrap.min.css");
  
  let navigate;
  const handleClick=()=>{
    navigate('./explore');
  }

  export default function Header() {
    navigate = useNavigate();
    return (
     <>
     <div>
       <h1 className="discover-heading" >
       Discover, collect and buy NFTs on the biggest
       </h1>
       <p className="discover-para">
       We are the world’s most unique NFT marketplace, We are the world’s most unique NFT marketplace
       </p>
       <div className="mb-2 d-flex justify-content-center">
       <Button className="m-2 discover-explore-btn" size="lg" type="submit" onClick={handleClick}>Explore</Button>{' '}
       <Button className="m-2 discover-create-btn" size="lg" type="submit">Create</Button>{' '}
      </div>
      <a className="learn-more-anchor" href="/"><p className="text-center">Learn more about us</p></a>
     </div>
     </>
    );
  }