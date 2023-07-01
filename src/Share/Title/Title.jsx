
const Title = ({title, description}) => {
    return (
        <div className="pt-12 mb-16">
            <h1 className="text-sm font-light tracking-wide uppercase text-designColor">{title}</h1>
            <h1 className="text-5xl font-bold text-gray-300 capitalize">{description}</h1>
        </div>
    );
};

export default Title;