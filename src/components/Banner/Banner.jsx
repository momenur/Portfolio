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
        <section id="home" className="w-full pt-10 pb-20 border-b-[1px] border-b-black flex">
            <div className="flex flex-col w-1/2 gap-20">
                <div className="flex flex-col gap-5">
                    <h3 className="text-lg font-normal"> WELCOME TO MY WORLD</h3>
                    <h1 className="text-6xl font-bold text-white">Hi I'm{" "}<span className="capitalize text-designColor">Momenur Islam</span></h1>
                    <h3 className="text-4xl font-bold text-whites">a <span>{text}</span>
                        <Cursor
                            cursorBlinking="false"
                            cursorStyle="I"
                            cursorColor="#ff014f"
                        />
                    </h3>
                    <p>
                        I use animation as a third dimensiton by which to simplify experiences and kuiding thro cach and every interaction. I'm not adding motion just to sqruce things up, but doing it in ways that.
                    </p>
                </div>
                <div className="flex justify-between">
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
                    <div>
                        <h3 className="mb-4 text-base uppercase">best skill on</h3>
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
            <div className="relative flex items-center justify-center w-1/2">
                <img className="w-[450px] rounded-full border-b-[6px] border-b-[#ff014f] z-10" src={BannerImg} alt="" />
                <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
            </div>
        </section>
    );
};

export default Banner;