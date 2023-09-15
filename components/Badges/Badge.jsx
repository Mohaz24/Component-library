import React from "react";
import classnames from "classnames";

export default function Badge({ children, size, bg }) {
  const backgroundColor = bg && `badge type-${bg}`;
  const allSizes = size && `badge size-${size}`;
  const allClasses = classnames(backgroundColor, allSizes);
  return <div className={allClasses}>{children}</div>;
}
