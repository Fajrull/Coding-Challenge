import React from "react";

const Card = (props) => {
  const { name, imageUrl, types, description, color } = props;

  return (
    <>
      <div className="card" style={{ backgroundColor: color }}>
        <img src={imageUrl} className="card-img-top" alt="card" />
        <div className="card-body">
          <h1 className="card-title">{name}</h1>

          <div className="card-text">
            {types.map((type, index) => (
              <span key={index}>{type}</span>
            ))}
          </div>

          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
