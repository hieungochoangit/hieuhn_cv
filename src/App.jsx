import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Banner />
      <div className="py-10 px-2">
        <AboutMe />
      </div>
      <Footer />
    </>
  );
}

export default App;
