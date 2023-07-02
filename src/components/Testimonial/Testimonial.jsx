import Title from "../../Share/Title/Title";
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import client2 from '../../assets/images/testimonial/testimonialTwo.png'
import client1 from '../../assets/images/testimonial/testimonialOne.png'
import quortImg from '../../assets/images/testimonial/quote.png'
import { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
        onClick={onClick}
     > <HiArrowRight></HiArrowRight></div> 
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
        onClick={onClick}
      ><HiArrowLeft></HiArrowLeft></div>
    );
  }
  
const Testimonial = () => {
    const [dotActive, setDotActive] = useState(0)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<SampleNextArrow></SampleNextArrow>,
        prevArrow:<SamplePrevArrow></SamplePrevArrow>,
        beforeChange: (prev, next) => {
            setDotActive(next);
        },
        appendDots: dots => (
            <div
                style={{
                    borderRadius: "10px",
                    padding: "10px"
                }}
            >
                <ul style={{
                    display: "flex",
                    gap: "15px",
                    justifyContent: "center",
                    marginTop: "20px"
                }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={
                    i === dotActive ? {
                        width: "12px",
                        height: "12px",
                        color: "blue",
                        background: "#ff014f",
                        borderRadius: "50%",
                        cursor: "pointer"
                    } : {
                        width: "12px",
                        height: "12px",
                        color: "blue",
                        background: "gray",
                        borderRadius: "50%",
                        cursor: "pointer"
                    }
                }
            >

            </div>
        )
    };
    return (
        <section id="testimonial" className="border-b-[1px] border-b-black pb-20">
            <Title title="what clients say" description="testimonial"></Title>
            {/* Main Div */}
            <div>
                <div className="max-w-6xl mx-auto">
                    <Slider {...settings}>
                        <div className="w-full">
                            <div className="w-full h-[500px] flex justify-between">
                                <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-8 rounded-lg flex flex-col gap-8 justify-center">
                                    <img className="object-cover rounded-lg h-72" src={client2} alt="" />
                                    <div>
                                        <p className="mb-2 text-xs tracking-wide uppercase text-designColor">Bound - Trolola</p>
                                        <h2 className="text-2xl font-bold">Jone Duone Joe</h2>
                                        <p className="text-base tracking-wide text-gray-500">Operation Officer</p>
                                    </div>
                                </div>
                                <div className="w-[60%] h-full flex flex-col justify-between">
                                    <img className="w-[20%]" src={quortImg} alt="" />
                                    <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-8 flex flex-col gap-8 justify-center">
                                        <div className="flex items-center justify-between py-6 border-b-2 border-b-gray-900">
                                            <div>
                                                <h3 className="text-2xl font-medium tracking-wide">Travel Mobile App Design.</h3>
                                                <p className="mt-3 text-base text-gray-400">via Upwork - mar 4, 2015 - Aug 30, 2021 test</p>
                                            </div>
                                            <div className="flex gap-1 text-yellow-500">
                                                <RiStarFill></RiStarFill>
                                                <RiStarFill></RiStarFill>
                                                <RiStarFill></RiStarFill>
                                                <RiStarFill></RiStarFill>
                                                <RiStarFill></RiStarFill>
                                            </div>
                                        </div>
                                        <p className="text-base font-medium leading-6 tracking-wide text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, ex obcaecati, officiis labore eligendi placeat, eos numquam ab tempora error veritatis nihil earum quaerat quod. Doloremque hic laudantium voluptatem tempora dicta, necessitatibus totam architecto, a quas quibusdam aspernatur tenetur ipsum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Slider 2 is Start */}
                        <div className="w-full">
                            <div className="w-full h-[500px] flex justify-between">
                                <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-8 rounded-lg flex flex-col gap-8 justify-center">
                                    <img className="object-cover rounded-lg h-72" src={client1} alt="" />
                                    <div>
                                        <p className="mb-2 text-xs tracking-wide uppercase text-designColor">Bound - Trolola</p>
                                        <h2 className="text-2xl font-bold">Shakib Hasan</h2>
                                        <p className="text-base tracking-wide text-gray-500">Operation Officer</p>
                                    </div>
                                </div>
                                <div className="w-[60%] h-full flex flex-col justify-between">
                                    <img className="w-[20%]" src={quortImg} alt="" />
                                    <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-8 flex flex-col gap-8 justify-center">
                                        <div className="flex items-center justify-between py-6 border-b-2 border-b-gray-900">
                                            <div>
                                                <h3 className="text-2xl font-medium tracking-wide">Travel Mobile App Design.</h3>
                                                <p className="mt-3 text-base text-gray-400">via Upwork - mar 4, 2015 - Aug 30, 2021 test</p>
                                            </div>
                                            <div className="flex gap-1 text-yellow-500">
                                                <RiStarFill></RiStarFill>
                                                <RiStarFill></RiStarFill>
                                                <RiStarFill></RiStarFill>
                                                <RiStarFill></RiStarFill>
                                                <RiStarFill></RiStarFill>
                                            </div>
                                        </div>
                                        <p className="text-base font-medium leading-6 tracking-wide text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, ex obcaecati, officiis labore eligendi placeat, eos numquam ab tempora error veritatis nihil earum quaerat quod. Doloremque hic laudantium voluptatem tempora dicta, necessitatibus totam architecto, a quas quibusdam aspernatur tenetur ipsum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;