import Container from "./components/Container";
import { ReactNode } from "react";
import StyledPointer from "./components/StyledPointer";
import ImageModal from "./components/ImageModal";
import DrawingModal from "./components/DrawingModal";

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
      <h2 className="text-pink dark:text-white text-sm md:text-md pink-title my-2 md:my-6">
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
      <h3 className="text-center lowercase lg:text-sm">✎ {title}:</h3>
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
      <div className="md:pr-4 md:mr-4 border border-0 md:border-r-2 border-teal w-full lg:w-1/4">
        <img
          className="py-2 centered-image"
          src={logoLink}
          alt="Project Logo"
          height="160"
          width="160"
        />
        <div className="items-center centered-image">
          <ColorPalette colors={paletteColors} />
        </div>
        {urlText !== undefined && (
          <a
            href={urlText}
            target="_blank"
            className="md:text-base text-white underline break-all hover:text-pink"
          >
            {urlText}
            <StyledPointer />
          </a>
        )}
        <p className="my-4">{description}</p>
      </div>
      <div className="my-4 w-full lg:w-3/4">{children}</div>
    </div>
  );
}

const Projects = () => {
  return (
    <div
      id="projects"
      className="projects-bg dark:projects-bg-dark main-container text-white"
    >
      <div className="dark:stars"></div>
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
              paletteColors={["DDEEF5", "50C0ED", "0679D6", "61327B"]}
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
              paletteColors={["D6F3D5", "86D19B", "539B9D", "676767"]}
              description="A desktop interface for an application used for online health consultations."
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
              paletteColors={["65C2AF", "42A46A", "D78862", "2F2F2F"]}
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
              paletteColors={["12D4B4", "0C8C74", "515CA6", "3A4067"]}
              description="Logo and poster design for a friend's booth that sells Japanese desserts."
            >
              <ContainerContent title="Poster Design">
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
                </div>
              </ContainerContent>
            </AppDesignContainer>
          </ProjectContainer>
          <ProjectContainer projectTitle="Art+Photography">
            <ContainerContent title="Sample Drawings">
              <div
                id="drawing-gallery"
                className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center centered-image pb-2"
              >
                <DrawingModal
                  imageUrl="images/drawing1.jpg"
                  altContent="Dogs art"
                ></DrawingModal>
                <DrawingModal
                  imageUrl="images/drawing2.jpg"
                  altContent="Cyberpunk Edgerunners stickers art"
                ></DrawingModal>
                <DrawingModal
                  imageUrl="images/drawing3.jpg"
                  altContent="Cyberpunk 2077 Alt fan art"
                ></DrawingModal>
              </div>
            </ContainerContent>
            <br />
            <ContainerContent title="Toy Photography">
              <div
                id="toy-gallery"
                className="grid grid-cols-1 md:grid-cols-3 gap-2 rounded-images"
              >
                <ImageModal
                  imageUrl="images/toy1.jpg"
                  altContent="Nendoroid Johnny Silverhand photography picture"
                ></ImageModal>
                <ImageModal
                  imageUrl="images/toy2.jpg"
                  altContent="Nendoroid Miku Nakano photography picture"
                ></ImageModal>
                <ImageModal
                  imageUrl="images/toy3.jpg"
                  altContent="Fallout Funkos and art photography picture"
                ></ImageModal>
              </div>
            </ContainerContent>
          </ProjectContainer>
        </Container>
      </div>
    </div>
  );
};

export default Projects;
