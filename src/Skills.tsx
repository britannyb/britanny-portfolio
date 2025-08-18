import Container from "./components/Container";
import { useState, ReactNode } from "react";

interface SkillContainerProps {
  skillTitle: string;
  children: ReactNode;
}

interface SkillLabelProps {
  skillLabel: string;
  skillLogo: string;
}

function SkillContainer({ skillTitle, children }: SkillContainerProps) {
  return (
    <>
      <h2 className="text-pink dark:text-white text-sm md:text-md pink-title">
        {skillTitle}
      </h2>
      <div className="flex flex-wrap">{children}</div>
    </>
  );
}

function SkillLabel({ skillLabel, skillLogo }: SkillLabelProps) {
  return (
    <div className="flex items-center my-3">
      <div className="w-10">
        <img src={skillLogo} alt={skillLabel} height="200" width="200" />
      </div>
      <p className="text-white ml-1 mr-4">{skillLabel}</p>
    </div>
  );
}

const Skills = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <div id="skills" className="skills-bg dark:skills-bg-dark main-container">
      <div className="content">
        <Container title="SKILLS">
          <div className="md:grid md:grid-cols-2">
            <div>
              <SkillContainer skillTitle="Web Development">
                <SkillLabel
                  skillLabel="HTML"
                  skillLogo="images/skills/htmlLogo.png"
                />
                <SkillLabel
                  skillLabel="CSS"
                  skillLogo="images/skills/cssLogo.png"
                />
                <SkillLabel
                  skillLabel="JavaScript"
                  skillLogo="images/skills/javaScriptLogo.png"
                />
                <SkillLabel
                  skillLabel="ReactJS"
                  skillLogo="images/skills/reactLogo.png"
                />
                <SkillLabel
                  skillLabel="NodeJS"
                  skillLogo="images/skills/nodeLogo.png"
                />
                <SkillLabel
                  skillLabel="PHP"
                  skillLogo="images/skills/phpLogo.png"
                />
              </SkillContainer>
              <br />
            </div>
            <div>
              <SkillContainer skillTitle="Web+Graphic Design">
                <SkillLabel
                  skillLabel="Figma"
                  skillLogo="images/skills/figmaLogo.png"
                />
                <SkillLabel
                  skillLabel="Canva"
                  skillLogo="images/skills/canvaLogo.png"
                />
                <SkillLabel
                  skillLabel="Procreate"
                  skillLogo="images/skills/procreateLogo.png"
                />
              </SkillContainer>
              <br />
            </div>
            <div>
              <SkillContainer skillTitle="Programming">
                <SkillLabel
                  skillLabel="Python"
                  skillLogo="images/skills/pythonLogo.png"
                />
                <SkillLabel
                  skillLabel="TensorFlow"
                  skillLogo="images/skills/tensorflowLogo.png"
                />
                <SkillLabel
                  skillLabel="Java"
                  skillLogo="images/skills/javaLogo.png"
                />
              </SkillContainer>
              <br />
            </div>
            <div>
              <SkillContainer skillTitle="Database Management">
                <SkillLabel
                  skillLabel="SQL"
                  skillLogo="images/skills/sqlLogo.png"
                />
                <SkillLabel
                  skillLabel="NoSQL"
                  skillLogo="images/skills/nosqlLogo.png"
                />
                <SkillLabel
                  skillLabel="MySQL"
                  skillLogo="images/skills/mysqlLogo.png"
                />
                <SkillLabel
                  skillLabel="Supabase"
                  skillLogo="images/skills/supabaseLogo.png"
                />
              </SkillContainer>
              <br />
            </div>
            <div>
              <SkillContainer skillTitle="Photo+Video Editing">
                <SkillLabel
                  skillLabel="GIMP"
                  skillLogo="images/skills/gimpLogo.png"
                />
                <SkillLabel
                  skillLabel="Photoshop"
                  skillLogo="images/skills/photoshopLogo.png"
                />
                <SkillLabel
                  skillLabel="Movavi"
                  skillLogo="images/skills/movaviLogo.png"
                />
              </SkillContainer>
              <br />
            </div>
            <div>
              <SkillContainer skillTitle="Productivity Tools">
                <SkillLabel
                  skillLabel="Office"
                  skillLogo="images/skills/microsoftOfficeLogo.png"
                />
                <SkillLabel
                  skillLabel="iWork"
                  skillLogo="images/skills/appleIworkLogo.png"
                />
              </SkillContainer>
            </div>
            <div className="py-16"></div>
          </div>
        </Container>
        <div className="relative">
          {!isLoaded && (
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-circle"
              role="loading"
            >
              <svg
                aria-hidden="true"
                className="w-8 h-8 lg:w-16 lg:h-16 text-gray-600 fill-teal"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          )}
          <img
            id="girl-boxes"
            className="main-img animate-float"
            src="images/vrGirl.gif"
            alt="A girl with consoles"
            height="1248"
            width="948"
            onLoad={handleLoaded}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
