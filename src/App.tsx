import "./App.css";
import MyComponent from './components/Content';
import Header from './components/Header';
import BrandStats from "./components/BrandStats";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header discountQuates="Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"/>
      <MyComponent/>
      <BrandStats />
      <Footer/>
    </>
  )
   
}

export default App;
