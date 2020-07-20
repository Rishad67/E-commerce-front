import React from 'react';
import {Carousel} from 'react-bootstrap';
import tsl1 from '../Image/coverPhoto.png';
import tsl2 from '../Image/coverPhoto2.png';
import tsl3 from '../Image/coverPhoto3.png';

function Header() {
  return (
    <div className="Header">
      <Carousel pause='false'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={tsl1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={tsl2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={tsl3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Header;
