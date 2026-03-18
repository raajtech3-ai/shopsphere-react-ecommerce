import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/footer";
import Category from "./components/category/Category";
import Products from "./components/products/Products";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Category></Category>
      <Products></Products>
      <Footer></Footer>
    </>
  );
};

export default App;
