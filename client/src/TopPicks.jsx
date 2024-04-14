import React from 'react';
import './TopPicks.css'; // Make sure you have this CSS file with the required styles.
import ContainerCarousel from "./ContainerCarousel";
import { Link, useNavigate } from "react-router-dom";


const TopPicks = ({snippets}) => {
  return (
    <div className="toppick-div">
      <h2 className="toppick-div-text-white text-center">Our Top Picks</h2>
      <h3 className="text-color-primary text-center">This Week</h3>
      
      {/* Assuming you're using Bootstrap for the carousel */}
      <ContainerCarousel snippets={snippets} />
      {/* Add Carousel component here */}

    <Link to="/explore" className='expLink'><button type="button" className="btn-explore-more">Explore More</button></Link>
    </div>
  );
};

export default TopPicks;
