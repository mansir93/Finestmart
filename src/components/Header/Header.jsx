import React from "react";
import "./header.css";
import {deliveryman, salad, carrot }from './';

const Header = () => {
  return (
    <section id="home ">
      <div className="mart__header">
        <div className="mart__header-title">
          <h1 className="text-9xl">Let your groceries and mall come to you</h1>
          <p>
            Get fresh groceries online without stepping out to make delicious
            food with the freshest ingredients
          </p>
          <div className="form">
            <input type="text" placeholder="search here"/>
          </div>
        </div>
        <div className="mart__header-img">
          <img src={deliveryman} alt="" />
        </div>
        <div className="mart__header-card">
          <div className="card">
            <img src={salad} alt="" />
          </div>
          <div className="card">
            <img src={carrot} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
