import Banner from "./components/Banner";
import Clients from "./components/Clients";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Plans from "./components/Plans";
import Reviews from "./components/Reviews";
import TypeWriter from "./components/TypeWriter";
import WhyChooseUs from "./components/WhyChooseUs";


const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <GetStarted />
      <TypeWriter />
      <WhyChooseUs 
        img={'why1.webp'}
        title={"We Take Social Media Off Your 'To-Do' List!"}
        description={"Tired of juggling social media? Let us take that off your plate! Our team’s got your back – from witty posts to timely updates, we’ll handle it all while you focus on bossing your business. Say goodbye to social media stress and hello to more time for what matters!"}
        indx={1}
      />
      <WhyChooseUs 
        img={'why2.webp'}
        title={"Eye-Catching Visuals That Grab Attention!"}
        description={"Unlike other agencies that might slap on extra fees for branded or designed posts, we’ve got you covered! We include those eye-catching visuals as part of the deal. So, no need to stress about extra costs – just sit back and let your content shine while we handle the creative side of things!"}
        indx={2}
      />
      <WhyChooseUs 
        img={'why3.webp'}
        title={"We've Got It All! SEO Blogs, Social Media Marketing..."}
        description={"We provide a comprehensive range of services to enhance your online presence. From SEO-optimised blogs that drive traffic to your website,, and targeted social media ads that engage your audience – we’ve got you covered. Our goal is to help you succeed in the digital world by offering solutions that meet your specific needs and goals."}
        indx={3}
      />
      <HowItWorks />
      <Plans />
      <Reviews />
      <Clients />
      <FAQ />
      <Footer />
    </>
  );
};

export default App;