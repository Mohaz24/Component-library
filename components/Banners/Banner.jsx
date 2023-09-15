import React from "react";
import classnames from "classnames";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsExclamationTriangleFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { AiFillExclamationCircle } from "react-icons/ai";

export default function Banner({ type, variants }) {
  let content;
  // Flip the variants boolean to false to access sm
  if (type === "success") {
    variants
      ? (content = (
          <div className="banner banner-lg success">
            <div className="banner-icon-success icon">
              <AiFillCheckCircle className="icon-success" /> Congratulations!
            </div>

            <p className="banner-text-success">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              pariatur, ipsum similique veniam.
            </p>
          </div>
        ))
      : (content = (
          <div className="banner banner-sm success">
            <div className="banner-icon-success icon">
              <AiFillCheckCircle className="icon-success" /> Congratulations!{" "}
            </div>
          </div>
        ));

    return content;
  }

  if (type === "warning") {
    variants
      ? (content = (
          <div className="banner banner-lg warning">
            <div className="banner-icon-warning icon">
              <BsExclamationTriangleFill className="icon-warning" /> Attention
            </div>

            <p className="banner-text-warning">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              pariatur, ipsum similique veniam.
            </p>
          </div>
        ))
      : (content = (
          <div className="banner banner-sm warning">
            <div className="banner-icon-warning icon">
              <BsExclamationTriangleFill className="icon-warning" /> Attention{" "}
            </div>
          </div>
        ));

    return content;
  }

  if (type === "danger") {
    variants
      ? (content = (
          <div className="banner banner-lg danger">
            <div className="banner-icon-danger icon">
              <MdCancel className="icon-danger" /> There is a problem with your app
            </div>

            <p className="banner-text-danger">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              pariatur, ipsum similique veniam.
            </p>
          </div>
        ))
      : (content = (
          <div className="banner banner-sm danger">
            <div className="banner-icon-danger icon">
              <MdCancel className="icon-danger" /> There is a problem with your app{" "}
            </div>
          </div>
        ));

    return content;
  }

  if (type === "neutral") {
    variants
      ? (content = (
          <div className="banner banner-lg neutral">
            <div className="banner-icon-neutral  icon">
              <AiFillExclamationCircle className="icon-neutral" /> Update available
            </div>

            <p className="banner-neutral-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              pariatur, ipsum similique veniam.
            </p>
          </div>
        ))
      : (content = (
          <div className="banner banner-sm neutral">
            <div className="banner-icon-neutral icon">
              <AiFillExclamationCircle className="icon-neutral" /> Update available{" "}
            </div>
          </div>
        ));

    return content;
  }

  return <>{content}</>;
}
