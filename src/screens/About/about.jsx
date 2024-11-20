import Container from "../../components/Container/container";
import "./about.css"


const AboutScreen = () => {
  return (
    <div className="about-screen">
      <Container>
        <h1>Welcome .</h1>
        <p className="sub-title">This is my first challenge with Html&CSS.</p>
        <img src="/image.png"/>
        <p className="info">This app created by <a href="/">Aon2023</a></p>
      </Container>
    </div>
  );
};

export default AboutScreen;
