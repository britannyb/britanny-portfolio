const Banner = () => {
  return (
    <div
      id="welcome"
      className="relative overflow-x-hidden main-container py-16"
    >
      <div className="content md:flex md:flex-row-reverse">
        <div id="girl" className="mb-4">
          <img
            className="main-img animate-float"
            src="images/purpleGirl.PNG"
            alt="A girl with purple hair holding a skate board"
          />
          <img
            className="main-img absolute top-0 right-0 animate-wiggle"
            src="images/drawingPen.png"
            alt="A drawing tablet stylus"
          />
        </div>
        <div className="flex-1 relative text-center md:text-left">
          <div className="md:absolute md:bottom-8 xl:right-0">
            <p className="text-white text-lg md:text-2xl leading-3">
              creativity + logic
            </p>
            <p
              id="name"
              className="text-white text-2xl animate-glow md:text-3xl xl:text-4xl"
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
