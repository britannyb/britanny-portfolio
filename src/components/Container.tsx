import { ReactNode } from "react";

interface ContainerProps {
  title: string;
  children: ReactNode;
}

const Container = ({ title, children }: ContainerProps) => {
  return (
    <>
      <h1 className="container-title text-2xl md:text-3xl text-white z-10">
        {title}
      </h1>
      <div className="container-body rounded-md md:rounded-lg -mt-3 md:-mt-5 border border-1 border-teal md:p-10 bg-teal bg-opacity-10 backdrop-blur-xl">
        {children}
      </div>
    </>
  );
};

export default Container;
