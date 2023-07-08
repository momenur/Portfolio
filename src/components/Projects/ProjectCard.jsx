import { BsGithub } from "react-icons/bs";
import { FaGlobe, FaServer } from "react-icons/fa";
const ProjectCard = ({ project }) => {
    return (
        <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000" data-aos="zoom-in">
            <div>
                <div>
                    <img className="object-cover w-full h-[180px] duration-300 rounded-lg cursor-pointer group-hover:scale-110" src={project.img} alt="" />
                </div>
                <div className="flex flex-col w-full gap-5 mt-5">
                    <div className="flex items-center justify-between">
                        <h2 className="text-base font-normal uppercase text-designColor">{project.title}</h2>
                        <div className="flex gap-3">
                            {
                                project.serverSite ? <>
                                    <span className="inline-flex items-center justify-center w-10 h-10 text-lg text-gray-400 duration-300 bg-black rounded-full cursor-pointer hover:text-designColor">
                                        <a href={project.serverSite}><FaServer /></a>
                                    </span>
                                </> : <></>

                            }
                            <span className="inline-flex items-center justify-center w-10 h-10 text-lg text-gray-400 duration-300 bg-black rounded-full cursor-pointer hover:text-designColor">
                                <a href={project.clintSite}><BsGithub /></a>
                            </span>
                            <span className="inline-flex items-center justify-center w-10 h-10 text-lg text-gray-400 duration-300 bg-black rounded-full cursor-pointer hover:text-designColor">
                                <a href={project.liveSiteLink}><FaGlobe /></a>
                            </span>
                        </div>
                    </div>
                    <p className="text-sm tracking-wide duration-300 hover:text-white">{project.des}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;