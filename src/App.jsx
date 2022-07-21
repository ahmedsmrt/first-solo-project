import About from "./components/About";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Interests from "./components/Interests";
import Layout from "./components/Layout";


function App() {
  return (
    <Layout>
      <Info />
      <About />
      <Interests />
      <Footer />
    </Layout>
  );
}

export default App;
