import Container from "./components/Container";
import { ReactNode } from "react";
import StyledPointer from "./components/StyledPointer";
import ImageModal from "./components/ImageModal";
import DrawingModal from "./components/DrawingModal";
import Paper from "./components/Paper";
import StackedCards from "./components/StackedCards";

interface ProjectContainerProps {
  projectTitle: string;
  children: ReactNode;
}

interface ContainerContentProps {
  title?: string;
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

function ContainerContent({ title, children }: ContainerContentProps) {
  return (
    <>
      {title && (
        <h3 className="text-center lowercase md:my-4 md:text-sm lg:text-md">
          {title}:
        </h3>
      )}
      <div className="flex justify-center">{children}</div>
    </>
  );
}

function JournalArticle({ title, url }: JournalArticleProps) {
  return (
    <>
      <div className="my-4">
        <div className="flex items-center space-x-2">
          <div className="w-10">
            <Paper />
          </div>
          <a
            className="text-white md:text-sm underline hover:text-pink mb-2"
            href={url}
            target="_blank">
            {title}
            <StyledPointer />
          </a>
        </div>
      </div>
    </>
  );
}

const Projects = () => {
  return (
    <div
      id="projects"
      className="projects-bg dark:projects-bg-dark main-container text-white">
      <div className="content">
        <Container title="PROJECTS">
          <ProjectContainer projectTitle="Sample Work">
            <StackedCards />
          </ProjectContainer>
        </Container>
        <div className="mt-20">
          <Container title="MISC.">
            <ProjectContainer projectTitle="Digital Art (Procreate)">
              <ContainerContent>
                <div
                  id="drawing-gallery"
                  className="lg:w-[80%] grid grid-cols-1 md:grid-cols-3 gap-2 items-center centered-image pb-4">
                  <DrawingModal
                    imageUrl="images/drawing1.jpg"
                    altContent="Dogs art"
                  />
                  <DrawingModal
                    imageUrl="images/drawing2.jpg"
                    altContent="Cyberpunk Edgerunners stickers art"
                  />
                  <DrawingModal
                    imageUrl="images/drawing3.jpg"
                    altContent="Cyberpunk 2077 Alt fan art"
                  />
                </div>
              </ContainerContent>
            </ProjectContainer>
            <ProjectContainer projectTitle="Toy Photography">
              <ContainerContent>
                <div
                  id="toy-gallery"
                  className="lg:w-[80%] grid grid-cols-1 md:grid-cols-3 gap-2 rounded-images text-xsm lg:text-sm pb-4">
                  <ImageModal
                    imageUrl="images/toy1.jpg"
                    altContent="J. Silverhand"
                  />
                  <ImageModal
                    imageUrl="images/toy2.jpg"
                    altContent="M. Nakano"
                  />
                  <ImageModal imageUrl="images/toy3.jpg" altContent="Fallout" />
                </div>
              </ContainerContent>
            </ProjectContainer>
            <ProjectContainer projectTitle="Journal Article/s">
              <div>
                <JournalArticle
                  title="An Overview of the Networking Issues of Cloud Gaming: A Literature
              Review"
                  url="https://www.researchgate.net/publication/366602157_An_Overview_of_the_Networking_Issues_of_Cloud_Gaming_A_Literature_Review"
                />
              </div>
            </ProjectContainer>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Projects;
