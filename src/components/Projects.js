import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import resumeImg from "../assets/img/resume-img.jpg";
import fadedcolor from "../assets/img/fadedcolor.jpg"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
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
      description: "Created an Android application using Java and Android Studio with java script implementations",
      imgUrl: projImg2,
    },
    {
      title: "Personal Portfolio",
      description: "Lol",
      imgUrl: projImg3,
    },
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
        description: "Student Ambasador",
        imgUrl: fadedcolor,

    },
    {
        title: "W Tech",
        description: "Founder, Vice President Finance",
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
                <h2>About Me</h2>
                <p>Place Holder.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Resume</Nav.Link>
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
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        
                    <Row>
                    {experience.map((item, index) => (
                        <ProjectCard key={index} title={item.title} description={item.description} imgUrl={item.imgUrl} />
                    ))}
                    </Row>

                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                      {Files.map((item, index) => (
                            <ProjectCard key={index} title={item.title} description={item.fileUrl} imgUrl={item.imgUrl} />
                        ))}
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
