import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
export default function Card() {
  return (
    <div className="cards">
      <div className="card-icons-ct">
      <AiOutlineCloudUpload className="cards-icon"/>
</div>
      <h3 className="cards-title"> Easy Deployment </h3>
      <p className="cards-text">
        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna
        sit morbi lobortis.
      </p>
    </div>
  );
}