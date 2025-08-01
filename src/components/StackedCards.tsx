import { useState, useRef } from "react";
import AppDesignContainer from "./AppDesignContainer";
import Triangle from "./Triangle";

const cards = [
  {
    id: 1,
    src: "images/projects/helpCare.png",
    title: "HelpCare prototype",
    description:
      "A desktop interface for an application used for online health consultations.",
    url: "https://www.figma.com/file/OblFEXcUSwfGDll900FlOA/HelpCare?type=design&node-id=6:3&mode=design&t=stGJ6g6EvQkPi2pJ-1",
    palette: ["D6F3D5", "86D19B", "539B9D", "676767"],
    logo: "images/projects/helpCareLogo.png",
  },
  {
    id: 2,
    src: "images/projects/motivEat.png",
    title: "MotivEat",
    description:
      "My capstone project which is a meal planner that allows users to scan ingredients using their camera. It applies machine learning through Tensorflow.js.",
    url: "https://motiveat.vercel.app/",
    palette: ["65C2AF", "42A46A", "D78862", "2F2F2F"],
    logo: "images/projects/motivEatLogo.png",
  },
  {
    id: 3,
    src: "images/projects/vaccineHelp.png",
    title: "VaccineHelp",
    description:
      "A form interface designed for an application concerned with vaccination distribution.",
    url: "https://www.figma.com/file/dWQSisktmgE2u9Wyz8EzMA/VaccineHelp?type=design&node-id=0:1&mode=design&t=stGJ6g6EvQkPi2pJ-1",
    palette: ["DDEEF5", "50C0ED", "0679D6", "61327B"],
    logo: "images/projects/vaccineHelpLogo.png",
  },
  {
    id: 4,
    src: "images/projects/portfolio2.png",
    title: "Portfolio (Alt.)",
    description:
      "An alternative version of my portfolio website with drawings made in Proreate. It was developed with React and TailwindCSS.",
    url: "https://britannyb-portfolio.vercel.app/",
    palette: ["FFFFFF", "E77B83", "8DA960", "414040"],
    logo: "images/projects/portfolio2Logo.png",
  },
  {
    id: 5,
    src: "images/projects/portfolio1.png",
    title: "Portfolio v1",
    description:
      "The first version of my portfolio website featuring some of my college projects. It was made mostly using vanilla HTML, CSS, and Javascript + jQuery.",
    url: "https://britannyb.github.io/",
    palette: ["FFFFFF", "EC968D", "C774CD", "454545"],
    logo: "images/projects/portfolio1Logo.png",
  },
  {
    id: 6,
    src: "images/projects/fuwaNeko.png",
    title: "Fuwa Neko",
    description:
      "Logo and poster design for a friend's booth that sells Japanese desserts.",
    url: "https://www.behance.net/gallery/178656975/Fuwa-Neko-(Snacks)-Menu-and-Poster-Designs",
    palette: ["12D4B4", "0C8C74", "515CA6", "3A4067"],
    logo: "images/designs/fuwaNekoLogoLight.png",
  },
];

export default function SwipeableStackedCards() {
  const [cardOrder, setCardOrder] = useState(cards);
  const [dragX, setDragX] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<"left" | "right" | null>(
    null
  );
  const startX = useRef(0);
  const isDragging = useRef(false);

  const animateSwipe = (direction: "left" | "right") => {
    setIsAnimating(true);
    setSwipeDirection(direction);
    if (direction === "right") {
      setDragX(300);
    } else {
      setDragX(-300);
    }
    setTimeout(() => {
      const newOrder = [...cardOrder];
      if (direction === "right") {
        const frontCard = newOrder.shift();
        if (frontCard) newOrder.push(frontCard);
      } else {
        const backCard = newOrder.pop();
        if (backCard) newOrder.unshift(backCard);
      }
      setCardOrder(newOrder);
      setDragX(0);
      setSwipeDirection(null);
      setIsAnimating(false);
    }, 300);
  };

  const handleNext = () => {
    if (isAnimating) return;
    animateSwipe("right");
  };

  const handlePrev = () => {
    if (isAnimating) return;
    animateSwipe("left");
  };

  const handleDragStart = (x: number) => {
    if (isAnimating) return;
    startX.current = x;
    isDragging.current = true;
  };

  const handleDragMove = (x: number) => {
    if (!isDragging.current || isAnimating) return;
    const diff = x - startX.current;
    setDragX(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging.current || isAnimating) return;
    if (dragX > 100) {
      animateSwipe("right");
    } else if (dragX < -100) {
      animateSwipe("left");
    } else {
      setDragX(0);
    }
    isDragging.current = false;
  };

  const frontCard = cardOrder[0];

  return (
    <div
      className="relative flex flex-col lg:flex-row justify-center items-center"
      onMouseMove={(e) => handleDragMove(e.clientX)}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
      onTouchEnd={handleDragEnd}
    >
      <div className="flex flex-col-reverse justify-center items-center lg:flex-row w-full xl:w-3/4 lg:h-[900px] pt-[20px] md:pt-[10px]">
        <div className="relative min-h-[900px] w-full lg:w-1/2 h-full card-height">
          {cardOrder.map((card, index) => {
            const isFront = index === 0;
            const isBackComingToFront =
              isAnimating &&
              swipeDirection === "left" &&
              index === cardOrder.length - 1;

            let translateY = index * -20;
            let scale = 1 - index * 0.02;
            let translateX = 0;
            let rotate = 0;

            if (isFront && !(isAnimating && swipeDirection === "left")) {
              translateX = dragX;
              rotate = dragX / 20;
            }

            if (isBackComingToFront) {
              translateY = 0;
              scale = 1;
            }

            const transform = `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`;

            return (
              <div
                key={card.id}
                className={`absolute w-full h-full transition-transform duration-300 stacked-cards ${
                  isAnimating && isFront ? "pointer-events-none" : ""
                }`}
                style={{
                  transform,
                  zIndex: isBackComingToFront
                    ? cardOrder.length + 1
                    : cardOrder.length - index,
                }}
                onMouseDown={
                  isFront && !isAnimating
                    ? (e) => handleDragStart(e.clientX)
                    : undefined
                }
                onTouchStart={
                  isFront && !isAnimating
                    ? (e) => handleDragStart(e.touches[0].clientX)
                    : undefined
                }
              >
                <img
                  src={card.src}
                  className="max-w-[600px] w-[100%] h-full rounded-lg object-contain hover:scale-105 cursor-pointer select-none"
                  height="800px"
                  width="600px"
                  draggable={false}
                  onClick={handleNext}
                />
              </div>
            );
          })}
        </div>

        <div className="relative w-full lg:w-1/2 h-full flex flex-col justify-center items-center text-center lg:p-8">
          <AppDesignContainer
            logoLink={frontCard.logo}
            url={frontCard.url}
            urlText={frontCard.title}
            paletteColors={frontCard.palette}
            description={frontCard.description}
          />
          <div className="">
            <div
              className="absolute flex items-center justify-center top-1/2 -left-2 md:left-5 transform -translate-y-1/2 bg-dark-pink hover:bg-teal dark:bg-teal dark:hover:bg-dark-pink w-10 h-10 cursor-pointer rounded-full"
              onClick={handlePrev}
            >
              <Triangle />
            </div>
            <div
              className="absolute flex items-center justify-center top-1/2 -right-2 md:right-5 scale-x-[-1] transform -translate-y-1/2 bg-dark-pink hover:bg-teal dark:bg-teal dark:hover:bg-dark-pink w-10 h-10 cursor-pointer rounded-full"
              onClick={handleNext}
            >
              <Triangle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
