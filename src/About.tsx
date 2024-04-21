import Container from "./components/Container";
import Heart from "./components/Heart";
import MagnifyingGlass from "./components/MagnifyingGlass";
import Pencil from "./components/Pencil";
import { ReactNode } from "react";
import StyledPointer from "./components/StyledPointer";

const About = () => {
  interface AboutContainerProps {
    iconType: "magnify" | "heart" | "pencil";
    children: ReactNode;
  }

  function AboutContainer({ iconType, children }: AboutContainerProps) {
    let containerIcon;
    if (iconType === "magnify") {
      containerIcon = <MagnifyingGlass />;
    } else if (iconType === "heart") {
      containerIcon = <Heart />;
    } else {
      containerIcon = <Pencil />;
    }
    return (
      <>
        <div className="flex space-x-4 items-center">
          <div className="md:w-16">{containerIcon}</div>
          <div className="w-full">{children}</div>
        </div>
      </>
    );
  }

  return (
    <div id="about" className="main-container pb-14 md:pb-0">
      <div className="content text-black dark:text-white">
        <Container title="ABOUT">
          <div className="lg:flex lg:space-x-11 items-center">
            <div className="pic-container">
              <div className="picture-shadow"></div>
              <div className="picture-frame"></div>
              <img
                src="images/meDesk.jpg"
                alt="A picture of me"
                height="720"
                width="576"
              />
            </div>
            <div className="pt-6 md:pt-0">
              <h4 className="text-black dark:text-white text-md md:text-xl">
                Britanny Baldovino
              </h4>
              <br />
              <AboutContainer iconType="magnify">
                <p>
                  I am a Cum Laude graduate of the course "Bachelor of Science
                  in Information Technology" and a "Master in Information
                  Technology" degree holder with the Meritus award from Saint
                  Louis University, PH.
                </p>
              </AboutContainer>
              <br />
              <AboutContainer iconType="heart">
                <p>
                  My previous jobs include being a web developer and web
                  designer. In relation, my interests mainly include
                  programming, designing, and drawing. I also love playing video
                  games.
                </p>
              </AboutContainer>
              <br />
              <AboutContainer iconType="pencil">
                <p className="pb-2">See more of my projects:</p>
                <div className="grid sm:grid-cols-2 gap-2 md:w-96">
                  <div>
                    <a
                      className="text-black dark:text-white hover:text-teal dark:hover:text-pink flex items-center"
                      href="https://www.behance.net/britannyb"
                      target="_blank"
                    >
                      <img
                        src="images/behanceLogo.png"
                        alt="Behance Icon"
                        height="40"
                        width="40"
                        className="mr-2 hover:scale-125"
                      />
                      britanny b.
                    </a>
                  </div>
                </div>
              </AboutContainer>
            </div>
          </div>
        </Container>
        <br />
        <div className="mt-20">
          <Container title="SOURCES">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <p>background images: </p>
                <a
                  href="https://www.pexels.com/@mo-eid-1268975/"
                  target="_blank"
                  className="text-black dark:text-white hover:text-teal break-words dark:hover:text-pink"
                >
                  <h4 className="text-sm md:text-md">
                    Mo Eid @ Pexels
                    <StyledPointer />
                  </h4>
                </a>
              </div>
              <div>
                <p>content icons: </p>
                <a
                  href="https://www.iconfinder.com/iconsets/line-basic-ecommerce"
                  target="_blank"
                  className="text-black dark:text-white hover:text-teal break-words dark:hover:text-pink"
                >
                  <h4 className="text-sm md:text-md">
                    Nikita Grachev @ Iconfinder
                    <StyledPointer />
                  </h4>
                </a>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div className="text-white bg-dark-trans-black p-4 text-center md:text-right">
        <p>˚₊‧ ૮꒰˶ᵔ ᵕ ᵔ˶꒱ა Britanny ‧₊˚✧˖°♡ 2023</p>
      </div>
    </div>
  );
};

export default About;
