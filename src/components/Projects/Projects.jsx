import Title from "../../Share/Title/Title";
import ProjectCard from "./ProjectCard";
import { ProjectsItemsData } from "../../Data/ProjectsData";

const Projects = () => {
    return (
        <section id="projects" className="w-full pb-20 border-b-[1px] border-b-black">
            <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" description="my projects"></Title>
            <div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 md:gap-14">
                    {
                        ProjectsItemsData.map(project => <ProjectCard key={project.id} project={project}></ProjectCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Projects;