import profileImg from "../assets/images/profile.jpg";
import Card from "./Card";
function About() {
  return (  
    <Card title="About Me">
      <img src={profileImg} alt="Profile photo" />
      <p>Hello! I am an IT student passionate anything about IT related skills. I enjoy learning programming languages and building projects that help solve real-world problems.</p>
      <p>Email:
        <a href="mailto:rolvekraken26@gmail.com">rolvekraken26@gmail.com</a><br />
        GitHub:
        <a href="https://github.com/codeswagger24" target="_blank" rel="noopener noreferrer">github.com/codeswagger24</a>
      </p>
    </Card>
  );
}

export default About;