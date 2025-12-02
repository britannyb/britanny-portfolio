import { ReactNode } from "react";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";

interface ContainerProps {
  title: string;
  children: ReactNode;
}

const Container = ({ title, children }: ContainerProps) => {
  return (
    <>
      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <h1 className="container-title text-2xl md:text-3xl text-white z-10">
          {title}
        </h1>
      </ScrollAnimation>
      <div className="container-body border-2 border-white border-opacity-10 border-outset rounded-md md:rounded-lg -mt-3 md:-mt-5 md:p-10 bg-teal bg-opacity-10 backdrop-blur-xl">
        {children}
      </div>
    </>
  );
};

export default Container;
