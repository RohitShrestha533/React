import { useState } from "react";
import detail from "../api/detailsapi";
const Box = ({ detailData }) => {
  return (
    <>
      {detailData.map((detailData) => {
        return (
          <div className="boxes">
            <div className="head">
              <h6>{detailData.id}</h6>
              <p>{detailData.title}</p>
            </div>
            <div className="topic">{detailData.topic}</div>
            <div className="content">{detailData.description}</div>
            <div className="break">
              <hr />
              READ
            </div>
            <div className="image">
              <img src={detailData.image} alt="" />
              <button>Order Now</button>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Box;
