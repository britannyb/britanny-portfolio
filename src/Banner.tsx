import Bubbles from "./components/Bubbles";

const Banner = () => {
  return (
    <div
      id="welcome"
      className="welcome-bg dark:welcome-bg-dark relative overflow-x-hidden main-container py-16">
      <Bubbles />
      <div className="content md:flex md:flex-row-reverse">
        <div id="girl" className="mb-4">
          <img
            className="main-img animate-float"
            src="images/pinkGirl.png"
            alt="A girl with accessories"
            height="600"
            width="400"
          />
          <img
            className="main-img absolute top-0 -right-16 md:-right-40 animate-wiggle"
            src="images/drawingPen.png"
            alt="A drawing tablet stylus"
            height="1248"
            width="948"
          />
        </div>
        <div className="flex-1 relative text-center md:text-right">
          <div className="md:absolute md:bottom-8 xl:right-0">
            <p className="text-white text-md md:text-2xl leading-3">
              creativity + logic
            </p>
            <p
              id="name"
              className="text-white text-2xl md:text-3xl xl:text-4xl">
              Britanny
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
