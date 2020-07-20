import React from 'react';
import DeliveryIcon from '../Image/delivery.png';

function Footer() {
  return (
  <div className="Footer container-fluid">
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <img src={DeliveryIcon} style={{marginBottom: '10px'}} alt="" width="200px" height="200px"/>
      </div>
      <div className="col-sm-12 col-md-6">
        <h1>SellersBD</h1>
        <h4>Gohail Road, Bogra Sadar, Bogra-5800</h4>
        <h4>Bangladesh</h4>
      </div>
      <div className="col-sm-12 col-md-6">
        <h4>Email: Sellersbd@gmail.com</h4>
        <h4>Contact: 01767012839, 01521443012</h4>
        <h4>Privacy Policy</h4>
        <h4>Terms & Condition</h4>
      </div>
    </div>
  </div>
  );
}

export default Footer;
