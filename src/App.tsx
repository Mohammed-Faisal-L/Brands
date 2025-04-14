import "./App.css";
import MyComponent from './components/Content';
import Header from './components/Header';
import BrandStats from "./components/BrandStats";
import ProductGridWithSearch from "./components/Grid";
import Footer from "./components/Footer";
import ServiceCard from "./components/ServiceCard";

function App() {
  return (
    <>
      <Header discountQuates="Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"/>
      <MyComponent/>
      <BrandStats />
      <ProductGridWithSearch/>
      <ServiceCard />
      <Footer/>
    </>
  )
   
}

export default App;
