import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="main-footer">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Alex Franco | Amit Raval
          | Manhal Salloum
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
