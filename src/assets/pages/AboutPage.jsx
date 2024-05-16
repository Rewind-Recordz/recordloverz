import { Link } from "react-router-dom";
import "../stylesheets/aboutpage.css";
import adminOne from "../images/admin1.png";
import adminTwo from "../images/admin2.png";
import gitHubLogo from "../images/github-mark.svg";

function AboutPage() {
  return (
    <div className="ContainerAbout">
      
      <section className="Admin">
        <div className="HeaderStudent">
          <h1>Developer: Christian Küchler</h1>
        </div>
        <img src={adminTwo} alt="admin" />
        <p>Born in Germany, but his heart is in Australia ♥ </p>
        <a href="https://github.com/krilleyeah">Follow me ➱ GitHub</a>
      </section>

      <section>  
      <img className="GitLogo" src={gitHubLogo} alt="" />
      </section>

      <section className="Admin">
        <div className="HeaderStudent">
          <h1>Developer: Sergio Diaz</h1>
        </div>
        <img src={adminOne} alt="" />
        <p>He only cares about Tacos and Tlacoyos ♥ </p>
        <a href="https://github.com/sergiovede26">Follow me ➱ GitHub</a>
      </section>
      
    </div>
  );
}

export default AboutPage;
