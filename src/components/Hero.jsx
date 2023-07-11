import Navbar from "./Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function Hero() {
  return (
    <section className="bg-dark text-white py-5">
      <Container>
            <Navbar />
            <div className="text-left mt-5 mb-5">
              <h1>
                <strong>Say hello to ReactJS</strong>
              </h1>
              <p className="text-left mb-5" style={{minWidth: '200px', maxWidth: '24vw'}}>
                You will learn how to use the most popular frontend library and become a super Ninja developer.
              </p>
              <Button variant="light" size="lg">
                Awesome!
              </Button>
            </div>
      </Container>
    </section>
  );
}

export default Hero;
