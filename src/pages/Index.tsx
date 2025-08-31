import Hero from "@/components/Hero";
import About from "@/components/About";
import VegetableGallery from "@/components/VegetableGallery";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div id="home">
        <Hero />
      </div>
      <div id="products">
        <VegetableGallery />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Index;
