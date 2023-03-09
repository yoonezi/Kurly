import React, { useState } from "react";

const ViewContent = () => {
  const [hanpy, setHanpy] = useState(false);
  const handleView = () => {
    setHanpy(!hanpy);
  };
  return (
    <>
      <p>ViewContent 파일</p>
      <button onClick={handleView}>ViewControl</button>
      {hanpy ? (
        <ul>
          <li>
            <a href="/">
              <span>국·반찬·메인요리</span>
              <h3>32</h3>
            </a>
          </li>
          <li>
            <a href="/">
              <span>국·반찬·메인요리</span>
              <h3>32</h3>
            </a>
          </li>
          <li>
            <a href="/">
              <span>국·반찬·메인요리</span>
              <h3>32</h3>
            </a>
          </li>
          <li>
            <a href="/">
              <span>국·반찬·메인요리</span>
              <h3>32</h3>
            </a>
          </li>
        </ul>
      ) : (
        <></>
      )}
    </>
  );
};

export default ViewContent;
