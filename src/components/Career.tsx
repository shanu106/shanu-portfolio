import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <a href="https://github.com/shanu106/HireHelper-infosys_springboard" className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Lead Intern</h4>
                <h5>Infosys SpringBoard</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Built Smart task assistant HireHelper applications using React.js. Integrated backend
              authentication using Node.js & MongoDB. Created responsive UI/UX
              and designed wireframes using Figma.
            </p>
          </a>
          <a href="http://www.github.com" className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Tech Intern</h4>
                <h5>Calmchase - Personality development platform</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Led a development team in ORG, Implemented an AI  interviewer. Developed multiple modules using React.js &
              migrated critical functionalities to Node.js microservices.
            </p>
          </a>
          <a href="http://www.github.com" className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>CalmChase-Personality Developement Platform</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              In maintainance of the CalmChase's SSB training platform, Dealing with frontend bugs and modern UI, GSAP animations, and responsive design. Collaborating with the backend team to integrate APIs and enhance user experience.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Career;
