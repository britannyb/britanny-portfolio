import Container from "./components/Container";
import { ReactNode } from "react";
import StyledPointer from "./components/StyledPointer";
import ImageModal from "./components/ImageModal";
import DrawingModal from "./components/DrawingModal";
import Paper from "./components/Paper";

interface ProjectContainerProps {
  projectTitle: string;
  children: ReactNode;
}

interface ColorProps {
  colors: string[];
}

interface AppDesignContainerProps {
  logoLink: string;
  url?: string;
  urlText?: string;
  paletteColors: string[];
  description: string;
  children: ReactNode;
}

interface ContainerContentProps {
  title: string;
  children: ReactNode;
}

interface JournalArticleProps {
  title: string;
  url: string;
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
      <h3 className="text-center lowercase md:m-2 md:text-sm lg:text-md">
        ✎ {title}:
      </h3>
      <div className="flex justify-center">{children}</div>
    </>
  );
}

function AppDesignContainer({
  logoLink,
  urlText,
  url,
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
            href={url}
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

function JournalArticle({ title, url }: JournalArticleProps) {
  return (
    <>
      <div className="flex items-center space-x-2 underline md:text-sm my-4">
        <div className="sm:flex-grow-2">
          <Paper />
        </div>
        <a className="text-white hover:text-pink" href={url} target="_blank">
          {title}
          <StyledPointer />
        </a>
      </div>
    </>
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
          <ProjectContainer projectTitle="HelpCare">
            <AppDesignContainer
              logoLink="images/projects/helpCareLogo.png"
              url="https://www.figma.com/file/OblFEXcUSwfGDll900FlOA/HelpCare?type=design&node-id=6:3&mode=design&t=stGJ6g6EvQkPi2pJ-1"
              urlText="HelpCare prototype"
              paletteColors={["D6F3D5", "86D19B", "539B9D", "676767"]}
              description="A desktop interface for an application used for online health consultations."
            >
              <ContainerContent title="Desktop Prototype (Figma)">
                <img
                  src="images/projects/helpCarePrototype.png"
                  alt="HelpCare prototype design image"
                  height="1271"
                  width="1770"
                />
              </ContainerContent>
              <br />
              <ContainerContent title="Logo Design Ideas (Figma)">
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
              url="https://motiveat.vercel.app/"
              urlText="https://motiveat.vercel.app/"
              paletteColors={["65C2AF", "42A46A", "D78862", "2F2F2F"]}
              description="My capstone project which is a meal planner that allows users to scan ingredients using their camera. It applies machine learning through Tensorflow.js."
            >
              <ContainerContent title="Mobile Prototype (Figma)">
                <img
                  src="images/projects/motivEatMobilePrototype.png"
                  alt="MotivEat prototype design image"
                  height="1028"
                  width="900"
                />
              </ContainerContent>
              <br />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                <div>
                  <ContainerContent title="Logo Design Ideas (Figma)">
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
                  <ContainerContent title="Survey Post (Canva)">
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
          <ProjectContainer projectTitle="VaccineHelp">
            <AppDesignContainer
              logoLink="images/projects/vaccineHelpLogo.png"
              url="https://www.figma.com/file/dWQSisktmgE2u9Wyz8EzMA/VaccineHelp?type=design&node-id=0:1&mode=design&t=stGJ6g6EvQkPi2pJ-1"
              urlText="VaccineHelp design"
              paletteColors={["DDEEF5", "50C0ED", "0679D6", "61327B"]}
              description="A form interface designed for an application concerned with vaccination distribution."
            >
              <ContainerContent title="Form Design (Figma)">
                <img
                  src="images/projects/vaccineHelpPrototype.png"
                  alt="VaccineHelp prototype design image"
                  height="1175"
                  width="800"
                />
              </ContainerContent>
            </AppDesignContainer>
          </ProjectContainer>
          <ProjectContainer projectTitle="Portfolio (Alt.)">
            <AppDesignContainer
              url="https://britannyb-portfolio.vercel.app/"
              urlText="https://britannyb-portfolio.vercel.app/"
              logoLink="images/projects/portfolio2Logo.png"
              paletteColors={["FFFFFF", "E77B83", "8DA960", "414040"]}
              description="An alternative version of my portfolio website with drawings made in Proreate. It was developed with React and TailwindCSS."
            >
              <ContainerContent title="Website Prototype (Figma)">
                <div
                  className="grid grid-cols-1 lg:flex centered-image"
                  style={{ maxWidth: "860px" }}
                >
                  <div className="lg:pr-2 centered-image">
                    <img
                      src="images/projects/portfolio2Prototype.png"
                      alt="Portfolio Website design image"
                      height="1770"
                      width="1200"
                    />
                  </div>
                </div>
              </ContainerContent>
            </AppDesignContainer>
          </ProjectContainer>
          <ProjectContainer projectTitle="Portfolio v1">
            <AppDesignContainer
              logoLink="images/projects/portfolio1Logo.png"
              url="https://britannyb.github.io/"
              urlText="https://britannyb.github.io/"
              paletteColors={["FFFFFF", "EC968D", "C774CD", "454545"]}
              description="The first version of my portfolio website featuring some of my college projects. It was made mostly using vanilla HTML, CSS, and Javascript + jQuery."
            >
              <ContainerContent title="Desktop Prototype">
                <img
                  src="images/projects/portfolio1Prototype.png"
                  alt="Portfolio v1 prototype design image"
                  height="1489"
                  width="1200"
                />
              </ContainerContent>
            </AppDesignContainer>
          </ProjectContainer>
          <ProjectContainer projectTitle="Fuwa Neko">
            <AppDesignContainer
              logoLink="images/designs/fuwaNekoLogoLight.png"
              paletteColors={["12D4B4", "0C8C74", "515CA6", "3A4067"]}
              description="Logo and poster design for a friend's booth that sells Japanese desserts."
            >
              <ContainerContent title="Poster Design (Canva)">
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
            <ContainerContent title="Sample Drawings (Procreate)">
              <div
                id="drawing-gallery"
                className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center centered-image pb-4"
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
                className="grid grid-cols-1 md:grid-cols-3 gap-2 rounded-images pb-4"
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
          <ProjectContainer projectTitle="Journal Article/s">
            <JournalArticle
              title="An Overview of the Networking Issues of Cloud Gaming: A Literature
              Review"
              url="https://ejournal.pnc.ac.id/index.php/jinita/article/view/1581"
            ></JournalArticle>
          </ProjectContainer>
        </Container>
      </div>
    </div>
  );
};

export default Projects;
