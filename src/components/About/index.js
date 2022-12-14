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
            src="https://user-images.githubusercontent.com/102101481/183316792-9757810b-6299-4edb-805d-54987973f82c.jpg"
            class="float-left pr-4 pb-3 img-fluid"
            alt="AJ Jaswal"
          />
          <p style={{ fontSize: "30px" }}>
            My name is AJ Jaswal. I am a student at Lehigh University studying business.
            I am to grow my web development skills to assist me in my career going forward.
          </p>
          <p style={{ fontSize: "30px" }}>
            I am proficient with computers and have good understanding of
            Microsoft OS and Microsoft Office. I have experience with SEO and web development.
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe; 