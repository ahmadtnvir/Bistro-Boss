import Button from "../../../Components/Button/Button";
import SectionTitle from "../../../Components/SectionsTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
const Featured = () => {
  return (
    <div
      className="hero min-h-screen mt-24 bg-fixed"
      style={{
        backgroundImage: `url(${featured})`,
        
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="lg:w-[1000px] text-neutral-content space-y-10">
        <SectionTitle
          subHeading={"Check It Out"}
          heading={"From Our Menu"}
        ></SectionTitle>

        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={featured}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
                <h3 className="text-xl font-semibold">March 20, 2023</h3>
              <h1 className="text-3xl font-bold"> WHERE CAN I GET SOME?</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <Button text={'Read More'}></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
