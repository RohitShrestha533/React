import React, { useState } from "react";
import details from "../detailData/details";
import Nav from "../component/Nav";

const Carboc = ({ detail, search, search1 }) => {
  return (
    <>
      {detail.map((item) => {
        if (search === "" && search1.toLowerCase() === "") {
          return (
            <div className="Carboc" key={item.id}>
              <img src={item.image} alt="" />
              <div className="title">
                <h5>{item.company}</h5>
                <h6>{item.model}</h6>
              </div>
              <div className="cardetails">
                <div className="details1">
                  <div className="info">
                    <i className="fa-solid fa-users"></i>
                    <p>{item.feature} people</p>
                  </div>
                  <div className="info">
                    <i className="fa-solid fa-users"></i>
                    <p>{item.feature} people</p>
                  </div>
                </div>
                <div className="details2">
                  <div className="info">
                    <i className="fa-solid fa-users"></i>
                    <p>{item.feature} people</p>
                  </div>
                  <div className="info">
                    <i className="fa-solid fa-users"></i>
                    <p>{item.feature} people</p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="bottom">
                <div className="price">
                  <i className="fa-solid fa-dollar-sign"></i>
                  {item.price} /month
                </div>
                <div className="icon">
                  <i className="fa-regular fa-heart"></i>
                  <button>Read now</button>
                </div>
              </div>
            </div>
          );
        } else if (
          item.company.toLowerCase().startsWith(search.toLowerCase()) &&
          item.type.toLowerCase() === search1.toLowerCase()
        ) {
          return (
            <div className="Carboc" key={item.id}>
              <img src={item.image} alt="" />
              <div className="title">
                <h5>{item.company}</h5>
                <h6>{item.model}</h6>
              </div>
              <div className="cardetails">
                <div className="details1">
                  <div className="info">
                    <i className="fa-solid fa-users"></i>
                    <p>{item.feature} people</p>
                  </div>
                  <div className="info">
                    <i className="fa-solid fa-users"></i>
                    <p>{item.feature} people</p>
                  </div>
                </div>
                <div className="details2">
                  <div className="info">
                    <i className="fa-solid fa-users"></i>
                    <p>{item.feature} people</p>
                  </div>
                  <div className="info">
                    <i className="fa-solid fa-users"></i>
                    <p>{item.feature} people</p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="bottom">
                <div className="price">
                  <i className="fa-solid fa-dollar-sign"></i>
                  {item.price} /month
                </div>
                <div className="icon">
                  <i className="fa-regular fa-heart"></i>
                  <button>Read now</button>
                </div>
              </div>
            </div>
          );
        } else if (
          search === "" &&
          item.type.toLowerCase() === search1.toLowerCase()
        ) {
          return (
            <div className="Carboc" key={item.id}>
              <img src={item.image} alt="" />
              <div className="title">
                <h5>{item.company}</h5>
                <h6>{item.model}</h6>
              </div>
              <div className="cardetails">
                <div className="details1">
                  <div className="info">
                    <i className="fa-solid fa-users"></i>
                    <p>{item.feature} people</p>
                  </div>
                  <div className="info">
                    <i className="fa-solid fa-users"></i>
                    <p>{item.feature} people</p>
                  </div>
                </div>
                <div className="details2">
                  <div className="info">
                    <i className="fa-solid fa-users"></i>
                    <p>{item.feature} people</p>
                  </div>
                  <div className="info">
                    <i className="fa-solid fa-users"></i>
                    <p>{item.feature} people</p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="bottom">
                <div className="price">
                  <i className="fa-solid fa-dollar-sign"></i>
                  {item.price} /month
                </div>
                <div className="icon">
                  <i className="fa-regular fa-heart"></i>
                  <button>Read now</button>
                </div>
              </div>
            </div>
          );
        } else if (
          item.company.toLowerCase().startsWith(search.toLowerCase()) &&
          search1 === ""
        ) {
          return (
            <div className="Carboc" key={item.id}>
              <img src={item.image} alt="" />
              <div className="title">
                <h5>{item.company}</h5>
                <h6>{item.model}</h6>
              </div>
              <div className="cardetails">
                <div className="details1">
                  <div className="info">
                    <i className="fa-solid fa-users"></i>
                    <p>{item.feature} people</p>
                  </div>
                  <div className="info">
                    <i className="fa-solid fa-users"></i>
                    <p>{item.feature} people</p>
                  </div>
                </div>
                <div className="details2">
                  <div className="info">
                    <i className="fa-solid fa-users"></i>
                    <p>{item.feature} people</p>
                  </div>
                  <div className="info">
                    <i className="fa-solid fa-users"></i>
                    <p>{item.feature} people</p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="bottom">
                <div className="price">
                  <i className="fa-solid fa-dollar-sign"></i>
                  {item.price} /month
                </div>
                <div className="icon">
                  <i className="fa-regular fa-heart"></i>
                  <button>Read now</button>
                </div>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </>
  );
};

export default Carboc;
