import service from "../../assets/home/chef-service.jpg";
const Introduction = ({ contentBackgroundColor, heading, paragraph }) => {
  return (
    <div className="carousel w-full">
      <div className="carousel-item relative w-full">
        <img src={service} className="w-full" />
        <div className="absolute text-center w-3/4 top-[80px] left-[144px] space-y-5 py-10" style={{backgroundColor: contentBackgroundColor}}>
          <h1 className="text-5xl">{heading}</h1>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};


export default Introduction;
