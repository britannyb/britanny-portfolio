import Container from "./components/Container";
import { ReactNode } from "react";
import StyledPointer from "./components/StyledPointer";

interface ProjectContainerProps {
  projectTitle: string;
  children: ReactNode;
}

interface ColorProps {
  colors: string[];
}

interface AppDesignContainerProps {
  logoLink: string;
  urlText?: string;
  paletteColors: string[];
  description: string;
  children: ReactNode;
}

interface ContainerContentProps {
  title: string;
  children: ReactNode;
}

function ProjectContainer({ projectTitle, children }: ProjectContainerProps) {
  return (
    <>
      <h2 className="text-teal dark:text-pink text-sm md:text-md pink-title my-2 md:my-6">
        {projectTitle}
      </h2>
      <div>{children}</div>
    </>
  );
}

function ColorPalette({ colors }: ColorProps) {
  const colorsArray = colors.map((color, i) => {
    return (
      <div
        key={i}
        style={{ backgroundColor: `#${color}` }}
        className="w-10 h-10 rounded-full inline-block -ml-4"
      ></div>
    );
  });
  return <div className="ml-4">{colorsArray}</div>;
}

function ContainerContent({ title, children }: ContainerContentProps) {
  return (
    <>
      <h3 className="lowercase text-center lg:text-sm">{title}:</h3>
      <div>{children}</div>
    </>
  );
}

function AppDesignContainer({
  logoLink,
  urlText,
  paletteColors,
  description,
  children,
}: AppDesignContainerProps) {
  return (
    <div className="md:flex text-center mb-8">
      <div className="md:pr-4 md:mr-4 border border-0 md:border-r-2 md:border-dark-pink dark:md:border-pink w-full lg:w-1/4">
        <img
          className="py-2 centered-image"
          src={logoLink}
          alt="Project Logo"
          height="160"
          width="160"
        />
        {urlText !== undefined && (
          <a
            href={urlText}
            target="_blank"
            className="md:text-base text-black dark:text-white underline break-all hover:text-teal dark:hover:text-pink"
          >
            {urlText}
            <StyledPointer />
          </a>
        )}
        <p className="my-4">{description}</p>
        <div className="w-64 flex space-x-8 items-center centered-image">
          <p>Color Palette:</p>
          <ColorPalette colors={paletteColors} />
        </div>
      </div>
      <div className="my-4 w-full lg:w-3/4">{children}</div>
    </div>
  );
}

const Projects = () => {
  return (
    <div id="projects" className="main-container text-black dark:text-white">
      <div className="content">
        <Container title="PROJECTS">
          <ProjectContainer projectTitle="Portfolio v1">
            <AppDesignContainer
              logoLink="images/projects/portfolio1Logo.png"
              urlText="https://britannyb.github.io/"
              paletteColors={["FFFFFF", "EC968D", "C774CD", "454545"]}
              description="The first version of my portfolio website featuring some of my college projects. It was made mostly using vanilla HTML, CSS, and Javascript + jQuery."
            >
              <ContainerContent title="Desktop Prototype (Made with Figma)">
                <img
                  src="images/projects/portfolio1Prototype.png"
                  alt="Portfolio v1 prototype design image"
                  height="1374"
                  width="1770"
                />
              </ContainerContent>
            </AppDesignContainer>
          </ProjectContainer>
          <ProjectContainer projectTitle="VaccineHelp">
            <AppDesignContainer
              logoLink="images/projects/vaccineHelpLogo.png"
              urlText="https://bit.ly/figma-vaccinehelp"
              paletteColors={["0679D6", "50C0ED", "DDEEF5", "61327B"]}
              description="A form interface designed for an application concerned with vaccination distribution."
            >
              <ContainerContent title="Form Design (Made with Figma)">
                <img
                  src="images/projects/vaccineHelpPrototype.png"
                  alt="VaccineHelp prototype design image"
                  height="566"
                  width="1600"
                />
              </ContainerContent>
            </AppDesignContainer>
          </ProjectContainer>
          <ProjectContainer projectTitle="HelpCare">
            <AppDesignContainer
              logoLink="images/projects/helpCareLogo.png"
              urlText="https://bit.ly/figma-helpcare"
              paletteColors={["676767", "539B9D", "86D19B", "D6F3D5"]}
              description="A desktop interface for an appliction used for online health consultations."
            >
              <ContainerContent title="Desktop Prototype (Made with Figma)">
                <img
                  src="images/projects/helpCarePrototype.png"
                  alt="HelpCare prototype design image"
                  height="1271"
                  width="1770"
                />
              </ContainerContent>
              <br />
              <ContainerContent title="Logo Design Ideas (Made with Figma)">
                <img
                  className="centered-image"
                  src="images/projects/helpCareLogoDrafts.png"
                  alt="HelpCare logo drafts"
                  height="567"
                  width="806"
                />
              </ContainerContent>
            </AppDesignContainer>
          </ProjectContainer>
          <ProjectContainer projectTitle="MotivEat">
            <AppDesignContainer
              logoLink="images/projects/motivEatLogo.png"
              urlText="https://motiveat.vercel.app/"
              paletteColors={["2F2F2F", "42A46A", "65C2AF", "D78862"]}
              description="My capstone project which is a meal planner that allows users to scan ingredients using their camera. It applies machine learning through Tensorflow.js."
            >
              <ContainerContent title="Mobile Prototype (Made with Figma)">
                <img
                  src="images/projects/motivEatMobilePrototype.png"
                  alt="MotivEat prototype design image"
                  height="1297"
                  width="1770"
                />
              </ContainerContent>
              <br />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                <div>
                  <ContainerContent title="Logo Design Ideas (Made with Figma)">
                    <img
                      className="centered-image"
                      src="images/projects/motivEatLogoDrafts.png"
                      alt="MotivEat logo drafts"
                      height="711"
                      width="838"
                    />
                  </ContainerContent>
                </div>
                <div>
                  <ContainerContent title="Survey Post (Made with Canva)">
                    <img
                      className="centered-image"
                      src="images/projects/motivEatPoster2.png"
                      alt="Survey Post"
                      height="690"
                      width="552"
                    />
                  </ContainerContent>
                </div>
              </div>
            </AppDesignContainer>
          </ProjectContainer>
          <ProjectContainer projectTitle="Fuwa Neko">
            <AppDesignContainer
              logoLink="images/designs/fuwaNekoLogoLight.png"
              paletteColors={["12D4B4", "3A4067", "0C8C74", "515CA6"]}
              description="Logo and poster design for a friend's booth that sells Japanese desserts."
            >
              <ContainerContent title="Poster Designs">
                <div
                  className="grid grid-cols-1 lg:flex centered-image"
                  style={{ maxWidth: "860px" }}
                >
                  <div className="lg:pr-2 centered-image">
                    <img
                      src="images/designs/fuwaNekoPoster.jpg"
                      alt="Fuwa Neko poster default design"
                      height="809"
                      width="572"
                    />
                  </div>
                  <div
                    className="grid grid-cols-2 lg:grid-cols-1 gap-2 centered-image pt-2 lg:pt-0"
                    style={{ maxWidth: "580px" }}
                  >
                    <img
                      className="centered-image max-h-96"
                      src="images/designs/fuwaNekoPaint.jpg"
                      alt="Fuwa Neko poster illustrated design"
                    />
                    <img
                      className="centered-image max-h-96"
                      src="images/designs/fuwaNekoBlue.jpg"
                      alt="Fuwa Neko poster dark blue design"
                    />
                  </div>
                </div>
              </ContainerContent>
            </AppDesignContainer>
          </ProjectContainer>
          <ProjectContainer projectTitle="Art+Designs">
            <ContainerContent title="Drawings">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center centered-image pb-2">
                <img
                  src="images/drawing1.jpg"
                  alt="You Fan Art"
                  height="900"
                  width="600"
                />
                <img
                  src="images/drawing2.jpg"
                  alt="Barbie Fan Art"
                  height="900"
                  width="600"
                />
                <img
                  src="images/drawing3.jpg"
                  alt="Nezuko Fan Art"
                  height="900"
                  width="600"
                />
              </div>
            </ContainerContent>
            <br />
            <ContainerContent title="Toy Photography">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 rounded-images">
                <img
                  src="images/nendoroidRapunzel.jpg"
                  alt="Rapunzel nendoroid photography picture"
                  height="900"
                  width="674"
                />
                <img
                  src="images/nendoroidMiku.jpg"
                  alt="Miku Nakano nendoroid photography picture"
                  height="900"
                  width="674"
                />
                <img
                  src="images/nendoroidKento.jpg"
                  alt="Kento Nanami nendoroid photography picture"
                  height="900"
                  width="674"
                />
              </div>
            </ContainerContent>
            <br />
            <ContainerContent title="Logos + LinkedIn Banner">
              <div
                className="flex items-center"
                style={{ maxWidth: "1200px", margin: "0 auto" }}
              >
                <div>
                  <img
                    src="images/logoPink.png"
                    alt="Britanny Portfolio Logo"
                    height="140"
                    width="102"
                  />
                  <img
                    src="images/logoYellow.png"
                    alt="Britanny Portfolio Logo"
                    height="140"
                    width="102"
                  />
                </div>
                <div>
                  <img
                    src="images/designs/linkedInBanner.jpg"
                    alt="LinkedIn banner design image"
                    height="278"
                    width="1109"
                  />
                </div>
              </div>
            </ContainerContent>
          </ProjectContainer>
        </Container>
      </div>
    </div>
  );
};

export default Projects;
