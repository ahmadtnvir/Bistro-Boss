import { Parallax } from "react-parallax";
const Introduction = ({
  img,
  contentBackgroundColor,
  color,
  heading,
  paragraph,
}) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-100}
    >
      <div className="hero h-[600px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral w-[80%] lg:w-[1000px] h-[70%] lg:h-[300px]">
          <div
            className="w-full h-full text-neutral p-8 flex flex-col justify-center items-center"
            style={{ backgroundColor: contentBackgroundColor, color: color }}
          >
            <h1 className="mb-5 text-5xl font-bold uppercase">{heading}</h1>
            <p className="mb-5">{paragraph}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Introduction;
