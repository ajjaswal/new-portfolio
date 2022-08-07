import React from "react";
import {
  MDBCardGroup,
  MDBIcon,
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";

const Projects = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ width: "485px" }}
            src="https://user-images.githubusercontent.com/102101481/178155203-0a23838c-4087-4f71-acaf-99fe11e3d6d8.jpg"
            alt="Spotify-Now"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Spotify-Now</MDBCardTitle>
            <MDBCardText>
              A year-round version of spotify wrapped to view music stats.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/ajjaswal/spotify-now"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            className="img-fluid"
            src="https://user-images.githubusercontent.com/64516562/94870920-00858f80-0406-11eb-9891-00634c7764d1.PNG"
            alt="Budget"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Budget Tracker</MDBCardTitle>
            <MDBCardText>
              An app that allows the user to track their withdrawals and
              deposits with or without a data/internet connection
            </MDBCardText>
            <MDBBtn
              href="https://github.com/ajjaswal/budget-help"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "283px" }}
            className="img-fluid"
            src="https://user-images.githubusercontent.com/102101481/183315564-f5cb27e0-8145-4bb0-acea-c6de5e1f0b66.png"
            alt="Employee Tracker"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Employee Tracker</MDBCardTitle>
            <MDBCardText>
              With this app the user can track employees at a company by adding/removing roles, departments, and employees.
              Made with SQL
            </MDBCardText>
            <MDBBtn
              href="https://github.com/ajjaswal/great-work-list"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            className="img-fluid"
            src="https://user-images.githubusercontent.com/102101481/173196576-b6cef4db-e4df-4126-8d98-fa02c0155402.png"
            alt="Note Taker App"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Note Taker App</MDBCardTitle>
            <MDBCardText>
              A Javascript program to create, delete, and save notes to keep you on schedule.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/ajjaswal/brand-new-note"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "225px" }}
            className="img-fluid"
            src="https://user-images.githubusercontent.com/102101481/183315812-c4275f6b-c4e4-4682-b213-7484d634d89f.png"
            alt="README"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">README Generator</MDBCardTitle>
            <MDBCardText>
              This program generates a professional level README file on command. All that is needed is some neccesary inputs tailored to your project.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/ajjaswal/good-reader-gen"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "225px" }}
            className="img-fluid"
            src="https://user-images.githubusercontent.com/102101481/183315881-09b99702-a8e8-403b-bea0-1a7c4153853a.png"
            alt="Weather"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Weather Dashboard</MDBCardTitle>
            <MDBCardText>
              A fully functional weather app that can give you live, up-to-date information on weather in your area.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/ajjaswal/city-cast"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "205px" }}
            src="https://user-images.githubusercontent.com/64516562/97790062-321b8300-1b8b-11eb-8a0e-079e54b31341.png"
            alt="Planner"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Day Planner</MDBCardTitle>
            <MDBCardText>
              This is a work day plan app. It has hours sections on it so when
              the user enters a description for each hour and save it the
              description will stay until erased.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/ajjaswal/new-schedule"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            src="https://user-images.githubusercontent.com/64516562/97790068-3a73be00-1b8b-11eb-94f9-459018a10c80.PNG"
            alt="Password"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Password Generator</MDBCardTitle>
            <MDBCardText>
              This app allows the user to generate a random password with
              criteria of their choosing. This app utilizes numbers, letters,
              and special characters.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/ajjaswal/computer-pass"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "205px" }}
            src="https://user-images.githubusercontent.com/102101481/183316088-e0e8f7e8-0cb6-4660-b24c-8a48270c90e7.png"
            alt="Summerlin Labs"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5"> Congress Confidential</MDBCardTitle>
            <MDBCardText>
              My 2nd major project, which uses 2 API's for users to get personal and financial info about US elected officials by state.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/ajjaswal/congress-confidential"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
    </MDBContainer>
  );
};

export default Projects;
