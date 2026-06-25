import Container from "./components/Container";
import { ReactNode } from "react";
import StyledPointer from "./components/StyledPointer";
import ImageModal from "./components/ImageModal";
import DrawingModal from "./components/DrawingModal";
import Paper from "./components/Paper";
import StackedCards from "./components/StackedCards";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";

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
  date: string;
  journal: string;
  keywords: string[];
}

function ProjectContainer({ projectTitle, children }: ProjectContainerProps) {
  return (
    <>
      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <h2 className="text-pink dark:text-white text-sm md:text-md pink-title my-2 md:my-6">
          {projectTitle}
        </h2>
        <div>{children}</div>
      </ScrollAnimation>
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

function JournalArticle({
  title,
  url,
  date,
  journal,
  keywords,
}: JournalArticleProps) {
  const tags = (keywords: string[]) =>
    keywords.map((word, i) => (
      <div
        key={i}
        className="whitespace-nowrap p-1 text-white bg-teal dark:bg-trans-black m-1 rounded-md text-xsm"
      >
        <p>{word}</p>
      </div>
    ));

  return (
    <>
      <div className="my-4">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
          <div className="flex items-center space-x-2">
            <div className="w-10">
              <Paper />
            </div>
            <div>
              <a
                className="text-white md:text-sm underline hover:text-pink mb-2"
                href={url}
                target="_blank"
              >
                {title}
                <StyledPointer />
              </a>
              <div>
                <p>
                  {date} | {journal}
                </p>
              </div>
              <div className="flex flex-wrap items-center">
                {tags(keywords)}
              </div>
            </div>
          </div>
        </ScrollAnimation>
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
      <div className="content">
        <Container title="PROJECTS">
          <ProjectContainer projectTitle="Featured Work">
            <StackedCards />
          </ProjectContainer>
        </Container>
        <div className="mt-20">
          <Container title="MISC.">
            <ProjectContainer projectTitle="Photography">
              <ContainerContent>
                <div
                  id="photo-gallery"
                  className="lg:w-[80%] grid grid-cols-1 md:grid-cols-3 gap-2 rounded-images text-xsm lg:text-sm pb-4"
                >
                  <ImageModal
                    imageUrl="images/photo1.jpg"
                    altContent="Horizon Zero Dawn"
                  />
                  <ImageModal
                    imageUrl="images/photo2.jpg"
                    altContent="Hirono Tree"
                  />
                  <ImageModal
                    imageUrl="images/photo3.jpg"
                    altContent="Island Boats"
                  />
                </div>
              </ContainerContent>
            </ProjectContainer>
            <ProjectContainer projectTitle="Journal Articles">
              <div>
                <JournalArticle
                  title="MotivEat: A Web-Based Meal Planning Application with Ingredient Recognition for Personalized Nutritional Guidance"
                  url="https://journals.telkomuniversity.ac.id/ijait/article/view/8134"
                  date="01/27/2026"
                  journal="International Journal of Applied Information Technology (IJAIT)"
                  keywords={[
                    "machine learning",
                    "object detection",
                    "tensorflow",
                    "meal planner",
                    "web application",
                  ]}
                />
                <JournalArticle
                  title="Crop Suitability Recommendation Based on Soil Parameters & Environmental Factors with Gradient Boosting Trees & Random Forest Algorithm"
                  url="https://atiftap.org/s/JGB-19315.pdf"
                  date="11/30/2025"
                  journal="Journal of Global Business"
                  keywords={[
                    "machine learning",
                    "random forest",
                    "gradient boosting",
                    "crop suitability",
                  ]}
                />
                <JournalArticle
                  title="An Overview of the Networking Issues of Cloud Gaming: A Literature
              Review"
                  url="https://doi.org/10.35970/jinita.v4i2.1581"
                  date="12/30/2022"
                  journal="Journal of Innovation Information Technology and Application (JINITA)"
                  keywords={["cloud gaming", "wireless networks", "networks"]}
                />
              </div>
            </ProjectContainer>
            <ProjectContainer projectTitle="Digital Art">
              <ContainerContent>
                <div
                  id="drawing-gallery"
                  className="lg:w-[80%] grid grid-cols-1 md:grid-cols-3 gap-2 items-center centered-image pb-4"
                >
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
                    altContent="Fallout fan art"
                  />
                </div>
              </ContainerContent>
            </ProjectContainer>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Projects;
