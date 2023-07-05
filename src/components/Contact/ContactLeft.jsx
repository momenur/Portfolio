import contactImg from "../../assets/images/testimonial/contactImg.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
const ContactLeft = () => {
    return (
        <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-8 rounded-lg">
            <div>
                <img className="object-cover w-full h-64 mb-5 rounded-lg" src={contactImg} alt="" />
                <div className="flex flex-col gap-4">
                    <h3 className="text-3xl font-bold text-white">Momenur Islam</h3>
                    <p className="text-lg font-normal text-gray-400">Junior Front-End Web Developer</p>
                    <p className="text-base tracking-wide text-gray-400">Address: Block A-12, House #78, Road #04, Middle Badda Bazar Road, Dhaka, Bangladesh.</p>
                    <p className="flex items-center gap-2 text-base text-gray-400">Phone: <span className="text-lightText">+8801755-772447</span></p>
                    <p className="flex items-center gap-2 text-base text-gray-400">Email: {" "} <span className="text-lightText">momenurislam6@gmail.com</span></p>
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
                </div>
            </div>
        </div>
    );
};

export default ContactLeft;