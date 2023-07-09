import { ReactNode } from "react";

interface ContainerProps {
  title: string;
  children: ReactNode;
}

const Container = ({ title, children }: ContainerProps) => {
  return (
    <>
      <h1 className="container-title text-2xl md:text-3xl text-white dark:text-black z-10">
        {title}
      </h1>
      <div className="container-body rounded-md md:rounded-lg animate-shine -mt-3 md:-mt-5 bg-trans-white border border-8 border-white dark:border-black dark:bg-trans-black md:p-10">
        {children}
      </div>
    </>
  );
};

export default Container;
