
import { Link } from "react-scroll";
import { navLinksdata } from "../../contants/navOptions";
const Navbar = () => {
    return (
        <div className="flex sticky top-0 z-50 bg-bodyColor items-center justify-between w-full h-20 border-b-[1px] border-b-gray-700">
            <div><h1>Download Button</h1></div>
            <div>
                <ul className="flex items-center gap-10">
                    {
                        navLinksdata.map(data => <li className="text-base font-normal tracking-wide text-gray-400 duration-500 cursor-pointer hover:text-designColor" key={data._id}>
                            <Link
                                activeClass="active"
                                to={data.link}
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={800}
                            >{data.title}</Link>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;