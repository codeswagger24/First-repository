import profileImg from "../assets/images/profile.jpg";

function About() {
  return (  
    <section className="card">
      <h2>About Me</h2>
      <img src={profileImg} alt="Profile photo" />
      <p>Hello! I am an IT student passionate anything about IT related skills. I enjoy learning new programming languages and building projects that help solve real-world problems.</p>
      <p>Email:
        <a href="mailto:rolvekraken26@gmail.com">rolvekraken26@gmail.com</a><br />
        GitHub:
        <a href="https://github.com/codeswagger24" target="_blank" rel="noopener noreferrer">github.com/codeswagger24</a>
      </p>
    </section>
  );
}

export default About;