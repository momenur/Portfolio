
import Title from "../../Share/Title/Title";
import { featuresData } from "../../Data/Data";
import Cart from "../../Share/Cart/Cart";

const Features = () => {
    return (
        <section id="features" className="w-full pb-20  border-b-[1px] border-b-black">
            <Title title="Features" description="What I do"></Title>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-20">
                {
                    featuresData.map(feature => <Cart key={feature.id} item={feature}></Cart>)
                }
            </div>
        </section>
    );
};

export default Features;