import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import BannerImg from '../../assets/images/bannerImage.png'
const Banner = () => {
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Junior Front-End Developer.", "UI Designer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <section id="home" className="w-full pt-10 pb-20 border-b-[1px] border-b-black flex flex-col lgl:flex-row">
            <div className="flex flex-col w-full gap-20 lgl:w-1/2">
                <div className="flex flex-col gap-5">
                    <h3 className="text-sm font-normal lgl:text-lg"> WELCOME TO MY WORLD</h3>
                    <h1 className="text-4xl font-bold text-white lgl:text-6xl">{"Hi I'm"}{" "}<span className="capitalize text-designColor">Momenur Islam</span></h1>
                    <h3 className="text-2xl font-bold lgl:text-4xl text-whites">a <span>{text}</span>
                        <Cursor
                            cursorBlinking="false"
                            cursorStyle="I"
                            cursorColor="#ff014f"
                        />
                    </h3>
                    <p>
                        {"To work in a friendly, learning, and innovative environment to utilize my analytical and technical skills to makea glorious contribution to human development"}.
                    </p>
                </div>
                <div className="flex flex-col justify-between gap-8 lgl:gap-0 lgl:flex-row">
                    <div>
                        <h3 className="mb-4 text-base uppercase">find me in</h3>
                        <div className="flex gap-4">
                            <span className="bannerIcon">
                                <FaFacebookF></FaFacebookF>
                            </span>
                            <span className="bannerIcon">
                                <FaTwitter></FaTwitter>
                            </span>
                            <span className="bannerIcon">
                                <FaLinkedinIn></FaLinkedinIn>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-base uppercase lgl:mb-4">best skill on</h3>
                        <div className="flex gap-4">
                            <span className="bannerIcon">
                                <FaReact />
                            </span>
                            <span className="bannerIcon">
                                <SiNextdotjs />
                            </span>
                            <span className="bannerIcon">
                                <SiTailwindcss />
                            </span>
                            <span className="bannerIcon">
                                <SiFigma />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative flex items-center justify-center w-full mt-24 lgl:mt-0 lgl:w-1/2">
                <img className="w-[450px] rounded-full border-b-[6px] border-b-[#ff014f] z-10" src={BannerImg} alt="" />
                <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
            </div>
        </section>
    );
};

export default Banner;