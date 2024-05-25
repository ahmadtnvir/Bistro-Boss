import Introduction from "../../Components/Introduction/Introduction";
import cover from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ItemCard from "../Shared/ItemCard/ItemCard";
import useMenu from "../../state/useMenu";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
// import Button from "../../Components/Button/Button";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  console.log(category);

  const salad = menu.filter((item) => item.category === "salad");
  // const salad = salad.slice(0, 6);
  const pizza = menu.filter((item) => item.category === "pizza");
  // const pizza = pizza.slice(0,6);
  const soup = menu.filter((item) => item.category === "soup");
  // const soup = soup.slice(0,6);
  const dessert = menu.filter((item) => item.category === "dessert");
  // const dessert = dessert.slice(0,6);
  const drinks = menu.filter((item) => item.category === "drinks");
  // const drinks = drinks.slice(0,6);
  return (
    <div className="space-y-24">
      <Helmet>
        <title>BISTRO BOSS | FOOD ORDER</title>
      </Helmet>
      <div>
        <Introduction
          img={cover}
          contentBackgroundColor={"#00000066"}
          color={"white"}
          heading={"Order"}
          paragraph={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, officiis."
          }
        ></Introduction>
      </div>
      <div>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {salad.map((item) => (
                <ItemCard
                  key={item._id}
                  item={item}
                  price={menu.price}
                ></ItemCard>
              ))}
            </div>
            {/* {limitSalad.length > 5 && (
              <div className="flex justify-center items-center mt-10">
                <Button text={"see more"}></Button>
              </div>
            )} */}
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {pizza.map((item) => (
                <ItemCard
                  key={item._id}
                  item={item}
                  price={menu.price}
                ></ItemCard>
              ))}
            </div>
            {/* {limitPizza.length > 5 && (
              <div className="flex justify-center items-center mt-10">
                <Button text={"see more"}></Button>
              </div>
            )} */}
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {soup.map((item) => (
                <ItemCard
                  key={item._id}
                  item={item}
                  price={menu.price}
                ></ItemCard>
              ))}
            </div>
            {/* {limitSoup.length > 5 && (
              <div className="flex justify-center items-center mt-10">
                <Button text={"see more"}></Button>
              </div>
            )} */}
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {dessert.map((item) => (
                <ItemCard
                  key={item._id}
                  item={item}
                  price={menu.price}
                ></ItemCard>
              ))}
            </div>
            {/* {limitDessert.length > 5 && (
              <div className="flex justify-center items-center mt-10">
                <Button text={"see more"}></Button>
              </div>
            )} */}
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {drinks.map((item) => (
                <ItemCard
                  key={item._id}
                  item={item}
                  price={menu.price}
                ></ItemCard>
              ))}
            </div>
            {/* {limitDrinks.length > 5 && (
              <div className="flex justify-center items-center mt-10">
                <Button text={"see more"}></Button>
              </div>
            )} */}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
