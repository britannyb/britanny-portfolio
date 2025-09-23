import Container from "./components/Container";
import { ReactNode } from "react";
import RotateImage from "./components/RotateImage";

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
        <div className="relative flex justify-center">
          <RotateImage
            imageUrl={"images/vrGirl.gif"}
            altContent={"A girl with consoles"}
            isPolaroid={false}
            className={"girl-boxes main-img animate-float"}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
