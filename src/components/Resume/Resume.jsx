import { useState } from "react";
import Title from "../../Share/Title/Title";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Achivement from "./Achivement";

const Resume = () => {
    const [educationData, setEducationData] = useState(true);
    const [skillData, setSkillData] = useState(false);
    const [experienceData, setExperienceData] = useState(false);
    const [achievementData, setAchievementData] = useState(false);
    return (
        <section id="resume">
            <Title title="visit my resume" description="my resume"></Title>
            <div>
                <ul className="grid w-full grid-cols-4">
                    <li onClick={() => setEducationData(true) &
                        setSkillData(false) &
                        setExperienceData(false) &
                        setAchievementData(false)
                    } className="resumeLi">Education</li>
                    <li onClick={() =>
                        setEducationData(false) &
                        setSkillData(true) &
                        setExperienceData(false) &
                        setAchievementData(false)
                    } className="resumeLi">Professional Skill</li>
                    <li onClick={() =>
                        setEducationData(false) &
                        setSkillData(false) &
                        setExperienceData(true) &
                        setAchievementData(false)
                    } className="resumeLi">Experience</li>
                    <li onClick={() =>
                        setEducationData(false) &
                        setSkillData(false) &
                        setExperienceData(false) &
                        setAchievementData(true)
                    } className="resumeLi">Achievements</li>
                </ul>
            </div>

            <div>
                {
                    educationData && <Education></Education>
                }
                {
                    skillData && <Skills></Skills>
                }
                {
                    experienceData && <Experience></Experience>
                }
                {
                    achievementData && <Achivement></Achivement>
                }
            </div>

        </section>
    );
};

export default Resume;