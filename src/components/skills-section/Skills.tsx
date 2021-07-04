import styled from "styled-components";

const Skills: React.FC = () => {
  return (
    <Container>
      <section>
        <h1>Frontend Skills</h1>
      </section>
      <section></section>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  border: 1px dashed red;
  max-width: 1200px;
  margin: auto;
  display: flex;
  section {
    width: 50%;
    height: 400px;
    border: 1px dashed grey;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
