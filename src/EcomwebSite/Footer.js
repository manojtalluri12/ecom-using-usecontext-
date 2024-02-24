import React from "react";
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div>
        <hr />
        <p className="footer"> {date} &copy; All Rights are Reserved By  Design For Life </p>
    </div>
  );
};

export default Footer;
