import Introduction from "../../Components/Introduction/Introduction";
import cover from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ItemCard from "../Shared/ItemCard/ItemCard";
import useMenu from "../../state/useMenu";
import { useParams } from "react-router-dom";

const Order = () => {
    const [menu] = useMenu();
    const {category} = useParams();
    console.log(category);
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const dessert = menu.filter(item => item.category === 'dessert')
    const drinks = menu.filter(item => item.category === 'drinks')
  return (
    <div className="space-y-24">
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
        <Tabs>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    salad.map(item => <ItemCard key={item._id} item={item} price={ menu.price}></ItemCard>)
                }
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    pizza.map(item => <ItemCard key={item._id} item={item} price={ menu.price}></ItemCard>)
                }
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    soup.map(item => <ItemCard key={item._id} item={item} price={ menu.price}></ItemCard>)
                }
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    dessert.map(item => <ItemCard key={item._id} item={item} price={ menu.price}></ItemCard>)
                }
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    drinks.map(item => <ItemCard key={item._id} item={item} price={ menu.price}></ItemCard>)
                }
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
