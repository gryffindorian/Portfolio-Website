import React from "react";

export default function Projects(props) {
  return (
    <div className="Card">
      <img className="Image" src={props.image} />
      <div className="Tags">
        {props.tags?.map((tag, index) => (
          <span className="Tag">{tag}</span>
        ))}
      </div>
      <div className="Details">
        <div className="Title">{props.title}</div>
        <div className="Description">{props.description}</div>
      </div>
    </div>
  );
}
