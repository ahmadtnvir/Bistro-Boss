
const SectionTitle = ({heading, subHeading }) => {
    return (
        <div className="text-center w-4/6 md:w-4/12 mx-auto">
            <p className="text-yellow-500 italic text-lg">--- {subHeading} ---</p>
            <h3 className="text-3xl font-semibold border-y-4 mt-3 mb-4 py-2 uppercase">{heading}</h3>
        </div>
    );
};

export default SectionTitle;