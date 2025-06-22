import Bubbles from "./components/Bubbles";

const Banner = () => {
  return (
    <div
      id="welcome"
      className="welcome-bg dark:welcome-bg-dark relative overflow-x-hidden main-container py-16"
    >
      <Bubbles />
      <div className="content md:flex md:flex-row-reverse">
        <div id="girl" className="mb-4">
          <img
            className="main-img animate-float"
            src="images/purpleGirl.PNG"
            alt="A girl with purple hair holding a skate board"
            height="700"
            width="600"
          />
          <img
            className="main-img absolute top-0 -right-20 md:-right-28 animate-wiggle"
            src="images/drawingPen.png"
            alt="A drawing tablet stylus"
            height="704"
            width="597"
          />
        </div>
        <div className="flex-1 relative text-center md:text-left">
          <div className="md:absolute md:bottom-8 xl:right-0">
            <p className="text-white text-md md:text-2xl leading-3">
              creativity + logic
            </p>
            <p
              id="name"
              className="text-white text-2xl md:text-3xl xl:text-4xl"
            >
              Britanny
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
