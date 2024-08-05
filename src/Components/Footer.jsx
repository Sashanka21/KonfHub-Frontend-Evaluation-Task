import React from "react";

const Footer = ({data}) => {
  return (
    <div className="mx-15 mt-8 flex justify-center">
      <img src={data.ticket_footer_icon} alt="ticket_footer_icon" />
    </div>
  );
};

export default Footer;
