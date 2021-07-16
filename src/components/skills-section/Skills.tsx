import styled from "styled-components";
import { frontEndIcons } from "./icons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Skills: React.FC = () => {
  const iconVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        duration: 2,
      },
    },
  };

  const minNum: number = -180;
  const maxNum: number = 180;

  const { ref, inView } = useInView({ threshold: 0.5 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: Math.floor(Math.random() * (maxNum - minNum + 1) + minNum),
        y: Math.floor(Math.random() * (maxNum - minNum + 1) + minNum),
      });
    }
    console.log(inView);
  }, [inView]);

  return (
    <div data-testid="skills">
      <Container>
        <section className="frontend">
          <div ref={ref}>
            {frontEndIcons.map((ic) => (
              <DraggableIcons
                src={ic.src}
                transition={{ duration: 2 }}
                initial={{
                  x: 0,
                  y: 0,
                }}
                animate={animation}
              />
            ))}
          </div>
          <h1>FRONTEND SKILLS</h1>
        </section>
        <section>
          <div className="test">
            {frontEndIcons.map((ic) => (
              <DraggableIcons
                src={ic.src}
                transition={{ duration: 1.5 }}
                initial={{
                  x: 0,
                  y: 0,
                }}
                animate={
                  inView && {
                    x: Math.floor(
                      Math.random() * (maxNum - minNum + 1) + minNum
                    ),
                    y: Math.floor(
                      Math.random() * (maxNum - minNum + 1) + minNum
                    ),
                  }
                }
              />
            ))}
          </div>
        </section>
      </Container>
    </div>
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

    /* div {
      width: 100%;
      height: 100%;
      position: absolute;
      border: 1px dashed red;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: h;
    } */

    & .test {
      border: 1px dashed pink;
      display: grid;
    }
  }

  & .frontend {
    position: relative;
  }
`;

const DraggableIcons = styled(motion.img)`
  height: 80px;
  margin: auto;
  border: 1px dashed blue;
  grid-row: 1;
  grid-column: 1;
`;
