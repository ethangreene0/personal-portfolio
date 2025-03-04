import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import resumeImg from "../assets/img/resume-img.jpg";
import fadedcolor from "../assets/img/fadedcolor.jpg"
import colorSharp2 from "../assets/img/color-sharp2.png";

import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Image Scaler",
      description: "Java image compression program using Quadrant Trees with GUI for resolution changes and pixel analysis.",
      imgUrl: projImg1,
    },
    {
      title: "Calculator App/Equation's",
      description: "Android application using Java and Android Studio with java script implementations",
      imgUrl: projImg2,
    },
    {
      title: "Personal Portfolio",
      description: "Created using ReactJS, HTML, JavaScript and CSS",
      imgUrl: projImg3,
    },
    {
        title:"Expense Tracking App",
        description: "Expense tracker that uses plaid API that gathers transactions and displays them in an ordered fassion, and displays expenses as a graph",
        imgUrl: projImg4,
    },
    {
        title: "Leap Frog",
        description: "Implementations of Unique Priority Queue ADT using arrays, handling pathfinding algorithms and managing inheritance and casting.",
        imgUrl: projImg5,
    },
      {
          title: "Sciecne Students' Council Website",
          description: "Updating and Maintaining a website that provides crucial information to over 10,000 students and faculty",
          imgUrl: projImg1
      }

  ];

  const experience = [
    {
        title: "McDonalds Canada",
        description: "Swing Manager",
        imgUrl: fadedcolor,
    },
    {
        title: "Start.ca",
        description: "Summer Internship",
        imgUrl: fadedcolor,

    },
    {
        title: "The University Students’ Council",
        description: "Student Ambassador",
        imgUrl: fadedcolor,

    },
    {
        title: "W Tech",
        description: "Founder, Vice President Finance",
        imgUrl: fadedcolor,

    },
      {
          title:"WE AutoPilot",
          description:"VP of Marketing",
          imgUrl: fadedcolor,

      },
      {
        title:"Science Students' Council",
        description:"Internet Commissioner",
        imgUrl: fadedcolor,
      },
];
  const Files = [
    {
        title: "Resume",
        imgUrl: resumeImg,
        fileUrl: require("../assets/Files/Resume.pdf"),
    },
  ];

  return (
    <section className="project" id="about me">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 className="dynamic-text display-4">About Me</h2>
                <p className="dynamic-text lead">Welcome to my portfolio! Here you can explore my projects, professional experience, and download my resume.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first" className="dynamic-text">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" className="dynamic-text">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third" className="dynamic-text">Resume</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                className="dynamic-text"
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {experience.map((item, index) => (
                          <ProjectCard key={index} title={item.title} description={item.description} imgUrl={item.imgUrl} className="dynamic-text"/>
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {Files.map((file, index) => {
                          return (
                            <Col key={index} sm={6} md={4}>
                              <div className="proj-imgbx dynamic-text">
                                <img src={file.imgUrl} alt={file.title}/>
                                <div className="proj-txtx">
                                  <h4>{file.title}</h4>
                                  <a href={file.fileUrl} download>Download</a>
                                </div>
                              </div>
                            </Col>
                          )
                        })}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
