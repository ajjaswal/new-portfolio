import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const AboutMe = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <h2>About Me</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "285px" }}
            src=""
            class="float-left pr-4 pb-3 img-fluid"
            alt=""
          />
          <p style={{ fontSize: "27px" }}>
            My name is AJ Jaswal. I am a student at Lehigh University studying business.
            I am to grow my web development skills to assist me in my career going forward.
          </p>
          <p style={{ fontSize: "27px" }}>
            I am proficient with computers and have good understanding of
            Microsoft OS and Microsoft Office. I have experience with SEO and web development.
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;
