import Introduction from "../../../Components/Introduction/Introduction";
import bgImg from "../../../assets/home/chef-service.jpg";

const ServiceBanner = () => {
  return (
    <div>
      <Introduction
        img={bgImg}
        contentBackgroundColor={"#ffffff"}
        heading={"Bistro Boss"}
        paragraph={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vel molestiae culpa accusamus, dolorem illo unde laborum quaerat? Alias animi dolorum deleniti delectus! Veniam facere deserunt culpa officia dolore distinctio!"
        }
      ></Introduction>
    </div>
  );
};

export default ServiceBanner;
