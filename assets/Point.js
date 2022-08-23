import React from "react";

const Point = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 5 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 0C1.83696 0 1.20107 0.263393 0.732234 0.732234C0.263393 1.20107 0 1.83696 0 2.5C0 3.8875 1.125 5 2.5 5C3.8875 5 5 3.8875 5 2.5C5 1.83696 4.73661 1.20107 4.26777 0.732234C3.79893 0.263393 3.16304 0 2.5 0Z"
        fill={props.color}
      />
    </svg>
  );
};

export default Point;
