import styled from "styled-components";
import heroImg from "../../assets/images/sim-graphical.webp";

const HeroSection: React.FC = () => {
  return (
    <Container>
      <div>
        <TextContainer>
          <h6>I am Simran</h6>
          <h1>
            React<span>web</span> , Flutter<span>cross-platform</span> <br />
            Developer
          </h1>
          <Divider />
          <p>
            I design, develop & deploy. I love reviewing tech and good at
            industry trends predictions. I believe in continuous skill
            improvement, a disciplined lifestyle and constant learning.
          </p>
        </TextContainer>
      </div>
      <div>
        <img src={heroImg} />
      </div>
    </Container>
  );
};

export default HeroSection;

const Container = styled.div`
  display: flex;
  max-width: 1000px;
  height: 600px;
  margin: 0 auto;
  margin-top: 80px;
  div {
    width: 50%;
    justify-content: center;
    display: flex;
    :last-child {
      align-items: center;
    }

    @media (max-width: 768px) {
      width: 96%;
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    height: auto;

    img {
      width: 80%;
    }
  }
`;

const TextContainer = styled.div`
  min-width: 460px;
  display: flex;
  flex-direction: column;
  text-align: justify;
  align-items: flex-start;
  justify-content: left;

  @media (max-width: 768px) {
    min-width: auto;
    margin: 36px;

    h1 {
      font-size: 28px;
    }
  }

  h6,
  h1 {
    margin: 0;
    width: 100%;
    white-space: nowrap;

    span {
      color: var(--primary-clr);
      font-size: 16px;
    }
  }

  p {
    margin: 0;

    span {
      color: var(--accent-clr);
    }
  }
`;

const Divider = styled.div`
  min-width: 100%;
  height: 3px;
  background-color: rgba(0, 0, 0, 0.04);
  margin: 10px;
`;
